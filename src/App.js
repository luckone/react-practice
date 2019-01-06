import React, { Component } from 'react';
import LoadingComponent from './components/LoadingComponent';
import HeaderComponent from './components/HeaderComponent';
import PlayerComponent from './components/PlayerComponent';
import SearchComponent from './components/SearchComponent';
import TabsComponent from './components/TabsComponent';
import DrawerPlayerComponent from './components/DrawerPlayerComponent';
import { connect } from "react-redux";
import AlbumImg from "./assets/pic.jpeg";
import SongImg from "./assets/jcole.jpg";
import ArtistImg from "./assets/lana.jpeg";

class App extends Component {
    render() {

        return (
          <div className="app">
              <SearchComponent hidden={!this.props.searchStatus}/>
              <div className={`app-wrapper ${this.props.searchStatus ? 'contained' : ''}`}>
                <HeaderComponent/>
                <PlayerComponent/>
                <TabsComponent/>
                <DrawerPlayerComponent/>
                  <main className="page">
                    <div className="top">
                        <div className="top-card">
                            <div className="top-card__wrapper">
                                <img src={AlbumImg} alt="" className="top-card__img"/>
                                <div className="top-card__info">
                                    <p className="top-card__info--label">TOP ALBUM OF THE WEEK</p>
                                    <div className="centered">
                                        <p className="top-card__info--name">Bank account</p>
                                        <p className="top-card__info--descr">Top Album</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="top-card">
                            <div className="top-card__wrapper">
                                <img src={SongImg} alt="" className="top-card__img"/>
                                <div className="top-card__info">
                                    <p className="top-card__info--label">TOP SONG OF THE WEEK</p>
                                    <div className="centered">
                                        <p className="top-card__info--name">No role modelz</p>
                                        <p className="top-card__info--descr">Top Song</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="top-card">
                            <div className="top-card__wrapper">
                                <img src={ArtistImg} alt="" className="top-card__img"/>
                                <div className="top-card__info">
                                    <p className="top-card__info--label">TOP ARTIST OF THE WEEK</p>
                                    <div className="centered">
                                        <p className="top-card__info--name">Lana Del Ray</p>
                                        <p className="top-card__info--descr">Top Artist</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                      <div className="title__box">
                          <h3 className="title">Top songs</h3>
                      </div>
                  </main>
                {/*<LoadingComponent/>*/}
            </div>
          </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {
        searchStatus: state.global.showSearch,
    }
};

export default connect(mapStateToProps)(App);
