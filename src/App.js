import React, { Component } from 'react';
import LoadingComponent from './components/LoadingComponent';
import HeaderComponent from './components/HeaderComponent';
import PlayerComponent from './components/PlayerComponent';
import TabsComponent from './components/TabsComponent';
import DrawerPlayerComponent from './components/DrawerPlayerComponent';

class App extends Component {
    render() {
        return (
          <div className="app">
            <HeaderComponent/>
            <PlayerComponent/>
            <TabsComponent/>
            <DrawerPlayerComponent/>
            <LoadingComponent/>
          </div>
    );
  }
}

export default App;
