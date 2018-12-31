import React from "react";
import { connect } from 'react-redux';
import AlbumImg from "../assets/pic.jpeg";
import Drawer from '@material-ui/core/Drawer';
import PlayIcon from '@material-ui/icons/PlayArrow';
import NextIcon from '@material-ui/icons/FastForward';
import PreviousIcon from '@material-ui/icons/FastRewind';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import MoreIcon from '@material-ui/icons/MoreHoriz';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import ReplayIcon from '@material-ui/icons/Replay';
import MenuItem from "@material-ui/core/MenuItem/MenuItem";
import Menu from "@material-ui/core/Menu/Menu";
import PerfectScrollbar from 'react-perfect-scrollbar';
import {withStyles} from "@material-ui/core";
import Slider from "@material-ui/lab/Slider/Slider";
import 'react-perfect-scrollbar/dist/css/styles.css';
import * as globalActions from "../store/actions/globalActions";

const SliderItem = withStyles({
    track: {
        background: 'linear-gradient(135deg, #91a5f4 0%, #b08cf9 86%)',
        height: 4,
    },
    thumb: {
        background: 'linear-gradient(135deg, #91a5f4 0%, #b08cf9 86%)',
    }
})(Slider);


class DrawerPlayerComponent extends React.Component {
    state = {
        value: 74,
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };

    handleMoreClick = event => {
        this.setState({ menu: event.currentTarget });
    };

    handleMoreClose = () => {
    };

    render () {
        const { value, menu } = this.state;
        return (
            <Drawer anchor="right" open={this.props.drawerStatus} onClose={this.props.toggleDrawer}>
                <div className="playlist">
                    <div className="playlist-player">
                        <div className="playlist-player__info">
                            <div className="playlist-player__current">
                                <img src={AlbumImg} alt="" className="playlist-player__img"/>
                                <div className="playlist-player__details">
                                    <p className="playlist-player__details--track">Bank Account</p>
                                    <p className="playlist-player__details--artist">21 Savage</p>
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
                                    <div className="playlist-player__icon control">
                                        <PreviousIcon/>
                                    </div>
                                    <div className="playlist-player__icon control-play">
                                        <PlayIcon/>
                                    </div>
                                    <div className="playlist-player__icon control">
                                        <NextIcon/>
                                    </div>
                                </div>
                                <div className="playlist-player__control--slider">
                                    <p className="current-time">00:43</p>
                                    <div className="playlist-player__control--wrapp">
                                        <SliderItem value={value} onChange={this.handleChange}/>
                                    </div>
                                    <p className="general-time">01:12</p>
                                </div>
                            </div>
                        </div>
                        <div className="playlist-player__bg--wrapp">
                            <div className="playlist-player__bg" style={{backgroundImage: `url(${AlbumImg})`}}/>
                        </div>
                    </div>
                    <PerfectScrollbar className="playlist-list">
                        <ul>
                            <li className="playlist-list__item">
                                <div className="playlist-list__item--info">
                                    <div className="flexed">
                                        <img src={AlbumImg} alt="" className="playlist-list__item--img"/>
                                        <div>
                                            <p className="playlist-list__item--track">Bank Account</p>
                                            <p className="playlist-list__item--artist">21 Savage</p>
                                        </div>
                                    </div>
                                    <div className="playlist-list__item--time">01:12</div>
                                </div>
                            </li>
                            <li className="playlist-list__item">
                                <div className="playlist-list__item--info">
                                    <div className="flexed">
                                        <img src={AlbumImg} alt="" className="playlist-list__item--img"/>
                                        <div>
                                            <p className="playlist-list__item--track">Bank Account</p>
                                            <p className="playlist-list__item--artist">21 Savage</p>
                                        </div>
                                    </div>
                                    <div className="playlist-list__item--time">01:12</div>
                                </div>
                            </li>
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
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        toggleDrawer: () => dispatch(globalActions.toggleDrawer())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(DrawerPlayerComponent);
