import React, { Component } from 'react';
import LoadingComponent from './components/LoadingComponent';
import HeaderComponent from './components/HeaderComponent';
import PlayerComponent from './components/PlayerComponent';
import TabsComponent from './components/TabsComponent';
import Drawer from '@material-ui/core/Drawer';
import AlbumImg from './assets/pic.jpeg';
import PlayIcon from '@material-ui/icons/PlayArrow';
import NextIcon from '@material-ui/icons/FastForward';
import PreviousIcon from '@material-ui/icons/FastRewind';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import MoreIcon from '@material-ui/icons/MoreHoriz';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import ReplayIcon from '@material-ui/icons/Replay';
import {withStyles} from "@material-ui/core";
import Slider from "@material-ui/lab/Slider/Slider";

const SliderItem = withStyles({
    track: {
        background: 'linear-gradient(135deg, #91a5f4 0%, #b08cf9 86%)',
        height: 4,
    },
    thumb: {
        background: 'linear-gradient(135deg, #91a5f4 0%, #b08cf9 86%)',
    }
})(Slider);

class App extends Component {

    state = {
        drawer: true,
        value: 74,
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };

    toggleDrawer = () => {
        this.setState({ drawer: !this.state.drawer })
    };

    render() {
        const { value } = this.state;
        return (
          <div className="app">
            <HeaderComponent></HeaderComponent>
            <PlayerComponent></PlayerComponent>
            <TabsComponent></TabsComponent>
              <Drawer anchor="right" open={this.state.drawer} onClose={this.toggleDrawer}>
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
                                              <div className="playlist-player__icon">
                                                  <MoreIcon></MoreIcon>
                                              </div>
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
                              <div className="playlist-player__bg" style={{backgroundImage: `url(${AlbumImg})`}}></div>
                          </div>
                      </div>
                  </div>
              </Drawer>
            <LoadingComponent></LoadingComponent>
          </div>
    );
  }
}

export default App;
