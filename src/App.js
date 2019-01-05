import React, { Component } from 'react';
import LoadingComponent from './components/LoadingComponent';
import HeaderComponent from './components/HeaderComponent';
import PlayerComponent from './components/PlayerComponent';
import SearchComponent from './components/SearchComponent';
import TabsComponent from './components/TabsComponent';
import DrawerPlayerComponent from './components/DrawerPlayerComponent';
import { connect } from "react-redux";

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
                <LoadingComponent/>
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
