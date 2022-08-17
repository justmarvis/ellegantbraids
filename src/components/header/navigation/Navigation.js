import './Navigation.css';

import Contact from '../../body/contact/Contact';

function Navigation() {
    return(
        <div className='navigation-container'>
            <div className="menu">
                <ul>
                            <li><a>Home</a></li>
                            <li><a>Braids</a></li>
                            
                            <div className="contact">
                                <li><a className="cont">Contact <i className="fa fa-angle-down" aria-hidden="true"></i></a></li>
                            <div className="dropdown-content">
                                <Contact />
                            </div>
                    </div>
                </ul>
            </div>
        </div>
    );
}

export default Navigation;