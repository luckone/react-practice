import React from "react";
import Slider from '@material-ui/lab/Slider';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import MoreIcon from '@material-ui/icons/MoreVert';
import PlayIcon from '@material-ui/icons/PlayArrow';
import NextIcon from '@material-ui/icons/FastForward';
import PreviousIcon from '@material-ui/icons/FastRewind';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import ReplayIcon from '@material-ui/icons/Replay';
import VolumeIcon from '@material-ui/icons/VolumeUp';
import MenuIcon from '@material-ui/icons/QueueMusic';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import * as globalActions from '../store/actions/globalActions';
import moment from "moment";
import * as playlistActions from "../store/actions/playlistActions";

const SliderItem = withStyles({
    track: {
        background: 'linear-gradient(135deg, #91a5f4 0%, #b08cf9 86%)',
        height: 4,
    },
    thumb: {
        background: 'linear-gradient(135deg, #91a5f4 0%, #b08cf9 86%)',
    }
})(Slider);

class PlayerComponent extends React.Component {
    state = {
        sliderTimeValue: 0,
        volume: 30,
        menu: null,
    };

    handleSliderChange = (event, value) => {
        this.setState({ sliderTimeValue: value });
    };

    handleSliderDragStop = (value) => {
        this.props.unsetTimeTick();
        this.props.resetAudioCurrentTime(value);
        this.initTimeTick(this.props.audio);
    };

    initTimeTick = (audio) => {
        this.props.setTimeTick(
            setInterval(() => {
                this.props.setCurrentTime(audio.currentTime);
                this.setState({sliderTimeValue: audio.currentTime})
            }, 500)
        );
    };

    handleChangeVolume = (event, volume) => {
        this.props.setVolume(volume / 100);
        this.setState({ volume });
    };

    handleMoreClick = event => {
        this.setState({ menu: event.currentTarget });
    };

    handleMoreClose = () => {
      this.setState({ menu: null })
    };

    render () {
        const { sliderTimeValue, volume, menu } = this.state;
        return (
            <div className="player">
                <div className="player-inner">
                    <div className="player-inner__block">
                        <div className="player-inner__block--info">
                            <div className="player-inner__block flexed">
                                <img src={this.props.currentTrack.thumbnail} alt="" className="player-inner__block--info img"/>
                                <div>
                                    <div className="player-inner__block--info track">{this.props.currentTrack.track.name}</div>
                                    <p className="player-inner__block--info artist">{this.props.currentTrack.artist}</p>
                                </div>
                            </div>
                            <div className="player-inner__block flexed">
                                <div className="player-inner__block--icon">
                                    <FavoriteBorderIcon></FavoriteBorderIcon>
                                </div>
                                <div className="player-inner__block--icon" onClick={this.handleMoreClick}>
                                    <MoreIcon></MoreIcon>
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
                    <div className="player-inner__block">
                        <div className="player-inner__block--control">
                            <div className="player-inner__block--icon">
                                <ShuffleIcon></ShuffleIcon>
                            </div>
                            <div className="player-inner__block--icon accent">
                                <PreviousIcon></PreviousIcon>
                            </div>
                            <div className="player-inner__block--icon accent-play">
                                <PlayIcon></PlayIcon>
                            </div>
                            <div className="player-inner__block--icon accent">
                                <NextIcon></NextIcon>
                            </div>
                            <div className="player-inner__block--icon">
                                <ReplayIcon></ReplayIcon>
                            </div>
                        </div>
                    </div>
                    <div className="player-inner__block">
                        <div className="player-inner__block--options">
                            <div className="player-inner__block--timer">
                                <div className="current-time">{this.props.currentTime}&nbsp;</div>
                                <div className="general-time">{this.props.currentTrackDuration}</div>
                            </div>
                            <div className="player-inner__block--icon menu average">
                                <MenuIcon onClick={this.props.toggleDrawer}></MenuIcon>
                            </div>
                            <div className="player-inner__block--icon menu average">
                                <VolumeIcon></VolumeIcon>
                            </div>
                            <div className="player-inner__block--slider">
                                <SliderItem
                                    value={volume}
                                    max={100}
                                    onChange={this.handleChangeVolume}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="player-slider">
                    <SliderItem
                        max={this.props.currentTrackDurationRaw}
                        value={sliderTimeValue}
                        onChange={this.handleSliderChange}
                        onDragEnd={() => this.handleSliderDragStop(sliderTimeValue)}/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        drawerStatus: state.global.showDrawer,
        audio: state.playlist.audio,
        volume: state.playlist.volume,
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
        setVolume: (volume) => dispatch(playlistActions.setVolume(volume)),
        setAudioDuration: (seconds) => dispatch(playlistActions.setAudioDuration(seconds)),
        setCurrentTime: (seconds) => dispatch(playlistActions.setAudioCurrentTime(seconds)),
        resetAudioCurrentTime: (seconds) => dispatch(playlistActions.resetAudioCurrentTime(seconds)),
        setTimeTick: (interval) => dispatch(playlistActions.setTimeTickInterval(interval)),
        unsetTimeTick: () => dispatch(playlistActions.setTimeTickInterval(null)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(PlayerComponent);
