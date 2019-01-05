import React from "react";
import { connect } from "react-redux";
import * as globalActions from "../store/actions/globalActions";
import { CSSTransition } from 'react-transition-group';
import CloseIcon from '@material-ui/icons/Close';

class SearchComponent extends React.Component {

    state = {
        q: ''
    };

    handleInput = (e) => {
        console.log(this.state.q);
        this.setState({ q: e.target.value })
    };

    render () {
        return (
            <div
                className={`search ${this.props.hidden ? 'hidden' : ''}`}>
                <CSSTransition
                    in={this.props.searchStatus}
                    timeout={200}
                    classNames="slide"
                    unmountOnExit>
                    <div className="search-bar">
                        <input
                            type="text"
                            className="search-bar__input"
                            placeholder="Search..."
                            onChange={this.handleInput}/>
                        <div className="search-bar__close" onClick={this.props.toggleSearch}>
                            <CloseIcon/>
                        </div>
                    </div>
                </CSSTransition>
                <CSSTransition
                    in={!!this.state.q}
                    timeout={200}
                    classNames="slide-top"
                    unmountOnExit>
                    <div className="search-result">SEARCH RESULT: {this.state.q}</div>
                </CSSTransition>
            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(SearchComponent);