import React from "react";

const Tab = (props) => {
    const classes = ['tabs-item'];

    if (props.active) classes.push('active');
    return (
        <div
            className={classes.join(' ')}
            onClick={props.handleSelect}>
            {props.page.name}
        </div>
    )
};

class TabsComponent extends React.Component {
    state = {
        chosenTab: 2,
        pages: [
            {
                path: '/1',
                name: 'Your playlist',
                id: 1,
            },
            {
                path: '/2',
                name: 'Hottest',
                id: 2,
            },
            {
                path: '/3',
                name: 'Featured Collections',
                id: 3,
            },
        ],
    };

    handleTabSelect = (ref) => {
        this.setState({ chosenTab: ref});
    };

    tabList = () => {
        return this.state.pages.map(page => {
            return (
                <Tab
                    page={page}
                    key={page.id}
                    active={page.id === this.state.chosenTab}
                    handleSelect={() => this.handleTabSelect(page.id)}/>
            );
        })
    };

    render () {
        return (
            <div className="tabs">
                <div className="tabs-wrapper">
                    {this.tabList()}
                </div>
            </div>
        )
    }
};

export default TabsComponent;
