import React from "react";
import GithubLogo from "../assets/GitHub-Mark-Light-120px-plus.png";
import NotificationsIcon from '@material-ui/icons/NotificationsNone';
import SearchIcon from '@material-ui/icons/Search'
import UserAvatarImg from "../assets/test.jpg";
import { connect } from "react-redux";
import * as globalActions from "../store/actions/globalActions";

class HeaderComponent extends React.Component {
    render () {
        return (
            <header className="header">
                <div className="header-inner">
                    <div className="header-block">
                        <a href="https://github.com/luckone" target="_blank" rel="noopener noreferrer">
                            <img src={GithubLogo} alt="" className="header-github"/>
                        </a>
                    </div>
                    <div className="header-block logo">
                        Valentor's Music
                    </div>
                    <div className="header-block user">
                        <div className="header-block__icon" onClick={this.props.toggleSearch}>
                            <SearchIcon />
                        </div>
                        <div className="header-block__icon badged">
                            <NotificationsIcon />
                        </div>
                        <div className="header-block user-wrapper">
                            <img src={UserAvatarImg} alt="" className="header-block user-img"/>
                            <p className="header-block user-name">John Doe</p>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        searchStatus: state.global.showSearch,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        toggleSearch: () => dispatch(globalActions.toggleSearch())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderComponent);
