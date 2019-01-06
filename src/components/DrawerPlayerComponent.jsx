import React from "react";
import { connect } from 'react-redux';
import Drawer from '@material-ui/core/Drawer';
import PlayIcon from '@material-ui/icons/PlayArrow';
import NextIcon from '@material-ui/icons/FastForward';
import PreviousIcon from '@material-ui/icons/FastRewind';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import MoreIcon from '@material-ui/icons/MoreHoriz';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import ReplayIcon from '@material-ui/icons/Replay';
import PauseIcon from '@material-ui/icons/Pause';
import MenuItem from "@material-ui/core/MenuItem/MenuItem";
import Menu from "@material-ui/core/Menu/Menu";
import PerfectScrollbar from 'react-perfect-scrollbar';
import {withStyles} from "@material-ui/core";
import Slider from "@material-ui/lab/Slider/Slider";
import 'react-perfect-scrollbar/dist/css/styles.css';
import * as globalActions from "../store/actions/globalActions";
import * as playlistActions from "../store/actions/playlistActions";
import moment from "moment";

const SliderItem = withStyles({
    track: {
        background: 'linear-gradient(135deg, #91a5f4 0%, #b08cf9 86%)',
        height: 4,
    },
    thumb: {
        background: 'linear-gradient(135deg, #91a5f4 0%, #b08cf9 86%)',
    }
})(Slider);

const TrackItem = (props) => {
    const classes = ['playlist-list__item'];

    if (props.active) classes.push('active');
    return (
        <li className={classes.join(' ')} onClick={props.handleSelect}>
            <div className="playlist-list__item--info">
                <div className="flexed">
                    <img src={props.track.thumbnail} alt="" className="playlist-list__item--img"/>
                    <div>
                        <p className="playlist-list__item--track">{props.track.track.name}</p>
                        <p className="playlist-list__item--artist">{props.track.artist}</p>
                    </div>
                </div>
                <div className="playlist-list__item--time">{props.duration}</div>
            </div>
        </li>
    )
};

class DrawerPlayerComponent extends React.Component {
    state = {
        sliderTimeValue: 0,
        menu: null,
    };

    handleChange = (event, value) => {
        this.setState({ sliderTimeValue: value });
    };

    handleDragStop = (value) => {
        this.props.unsetTimeTick();
        this.props.resetAudioCurrentTime(value);
        this.initTimeTick(this.props.audio);
    };

    handleMoreClick = event => {
        this.setState({ menu: event.currentTarget });
    };

    handleMoreClose = () => {
        this.setState({ menu: null });
    };

    initTimeTick = (audio) => {
        this.props.setTimeTick(
            setInterval(() => {
                this.props.setCurrentTime(audio.currentTime);
                this.setState({sliderTimeValue: audio.currentTime})
            }, 500)
        );
    };

    setPlaying = (trackData) => {
        this.props.setTrack(trackData);
        const audio = new Audio(trackData.track.mp3);
        audio.autoplay = true;
        audio.onplay = () => {
            this.initTimeTick(audio);
        };
        audio.onpause = () => {
            this.props.unsetTimeTick();
        };
        audio.onended = () => {
            this.props.unsetTimeTick();
        };
        audio.onloadedmetadata = () => {
            this.props.setAudio(audio);
            this.props.setAudioDuration(audio.duration);
        };
    };

    trackList = () => {
        return this.props.tracks.map(track => {
            return (
                <TrackItem
                    track={track}
                    key={track.id}
                    handleSelect={() => this.setPlaying(track)}/>
            );
        })
    };

    render () {
        const { sliderTimeValue, menu } = this.state;
        return (
            <Drawer anchor="right" open={this.props.drawerStatus} onClose={this.props.toggleDrawer}>
                <div className="playlist">
                    <div className="playlist-player">
                        <div className="playlist-player__info">
                            <div className="playlist-player__current">
                                <img src={this.props.currentTrack.thumbnail} alt="" className="playlist-player__img"/>
                                <div className="playlist-player__details">
                                    <p className="playlist-player__details--track">{this.props.currentTrack.track.name}</p>
                                    <p className="playlist-player__details--artist">{this.props.currentTrack.artist}</p>
                                    <div className="playlist-player__details--options">
                                        <div className="flexed">
                                            <div className="playlist-player__icon">
                                                <ShuffleIcon/>
                                            </div>
                                            <div className="playlist-player__icon">
                                                <ReplayIcon/>
                                            </div>
                                        </div>
                                        <div className="flexed">
                                            <div className="playlist-player__icon">
                                                <FavoriteBorderIcon/>
                                            </div>
                                            <div className="playlist-player__icon" onClick={this.handleMoreClick}>
                                                <MoreIcon/>
                                            </div>
                                            <Menu
                                                id="simple-menu"
                                                anchorEl={menu}
                                                open={Boolean(menu)}
                                                onClose={this.handleMoreClose}>
                                                <MenuItem onClick={this.handleMoreClose}>Like</MenuItem>
                                                <MenuItem onClick={this.handleMoreClose}>Share</MenuItem>
                                                <MenuItem onClick={this.handleMoreClose}>Add to playlist</MenuItem>
                                            </Menu>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="playlist-player__control">
                                <div className="playlist-player__control--group">
                                    <div className="playlist-player__icon control" onClick={this.initAudioEnd}>
                                        <PreviousIcon/>
                                    </div>
                                    <div
                                        className="playlist-player__icon control-play"
                                        onClick={() => this.props.togglePlay()}>
                                        {this.props.paused ? <PlayIcon/> : <PauseIcon/>}
                                        {/*<PlayIcon/>*/}

                                    </div>
                                    <div className="playlist-player__icon control">
                                        <NextIcon/>
                                    </div>
                                </div>
                                <div className="playlist-player__control--slider">
                                    <p className="current-time">
                                        {this.props.audio ? this.props.currentTime : '00:00'}
                                    </p>
                                    <div className="playlist-player__control--wrapp">
                                        <SliderItem
                                            max={this.props.currentTrackDurationRaw}
                                            value={sliderTimeValue}
                                            onChange={this.handleChange}
                                            onDragEnd={() => this.handleDragStop(sliderTimeValue)}/>
                                    </div>
                                    <p className="general-time">
                                        {this.props.currentTrackDuration ? this.props.currentTrackDuration : '00:00'}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="playlist-player__bg--wrapp">
                            <div className="playlist-player__bg"
                                 style={{backgroundImage: `url(${this.props.currentTrack.thumbnail})`}}/>
                        </div>
                    </div>
                    <PerfectScrollbar className="playlist-list">
                        <ul>
                            {this.trackList()}
                        </ul>
                    </PerfectScrollbar>
                </div>
            </Drawer>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        drawerStatus: state.global.showDrawer,
        audio: state.playlist.audio,
        tracks: state.playlist.currentPlaylist,
        paused: state.playlist.paused,
        currentTrack: state.playlist.currentTrack,
        currentTrackDurationRaw: state.playlist.duration,
        currentTrackDuration: moment.utc(state.playlist.duration*1000).format('mm:ss'),
        currentTime: moment.utc(state.playlist.time*1000).format('mm:ss')
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        toggleDrawer: () => dispatch(globalActions.toggleDrawer()),
        togglePlay: () => dispatch(playlistActions.togglePlay()),
        setTrack: (track) => dispatch(playlistActions.setTrack(track)),
        setAudio: (mp3) => dispatch(playlistActions.setAudio(mp3)),
        setAudioDuration: (seconds) => dispatch(playlistActions.setAudioDuration(seconds)),
        setCurrentTime: (seconds) => dispatch(playlistActions.setAudioCurrentTime(seconds)),
        resetAudioCurrentTime: (seconds) => dispatch(playlistActions.resetAudioCurrentTime(seconds)),
        setTimeTick: (interval) => dispatch(playlistActions.setTimeTickInterval(interval)),
        unsetTimeTick: () => dispatch(playlistActions.setTimeTickInterval(null)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(DrawerPlayerComponent);
