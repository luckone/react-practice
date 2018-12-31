import React from "react";
import GithubLogo from "../assets/GitHub-Mark-Light-120px-plus.png";
import NotificationsIcon from '@material-ui/icons/NotificationsNone';
import SearchIcon from '@material-ui/icons/Search'
import UserAvatarImg from "../assets/test.jpg";

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
                        <div className="header-block__icon">
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

export default HeaderComponent;
