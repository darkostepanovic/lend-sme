import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Fa from 'react-fontawesome';

import logoImg from '../assets/logo.svg';

class Header extends Component {
    render() {
        return (
            <header className="header">
                <div className="container">
                    <div className="row--flex">
                        <div className="col-md-12 header__content">
                            <div className="header__content--logo"><Link to="/1"><img src={logoImg} alt="Logo"/></Link></div>
                            <div className="header__content--language">
                                <a href="javascript:;">EN <span><Fa name='chevron-down'/></span></a>
                                <div className="dropdown-menu">
                                    <ul>
                                        <li><a href="javascript:;">FR</a></li>
                                        <li><a href="javascript:;">DE</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;