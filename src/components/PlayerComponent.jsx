import React from "react";
import AlbumImg from "../assets/pic.jpeg";
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
        value: 50,
        volume: 32,
        menu: null,
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };

    handleChangeVolume = (event, volume) => {
        this.setState({ volume });
    };

    handleMoreClick = event => {
        this.setState({ menu: event.currentTarget });
    };

    handleMoreClose = () => {
      this.setState({ menu: null })
    };

    render () {
        const { value, volume, menu } = this.state;
        return (
            <div className="player">
                <div className="player-inner">
                    <div className="player-inner__block">
                        <div className="player-inner__block--info">
                            <div className="player-inner__block flexed">
                                <img src={AlbumImg} alt="" className="player-inner__block--info img"/>
                                <div>
                                    <div className="player-inner__block--info track">Bank Account</div>
                                    <p className="player-inner__block--info artist">21 Savage</p>
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
                                <div className="current-time">00:00&nbsp;</div>
                                <div className="general-time">02:43</div>
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
                                    onChange={this.handleChangeVolume}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="player-slider">
                    <SliderItem
                        value={value}
                        onChange={this.handleChange}
                    />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {}
};
const mapDispatchToProps = (dispatch) => {
    return {
        toggleDrawer: () => dispatch(globalActions.toggleDrawer())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(PlayerComponent);
