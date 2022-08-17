import './Navigation.css';

function Navigation() {
    return(
        <div className='navigation-container'>
            <div className="menu">
                <ul>
                    <li><a routerLink="/home">Home</a></li>
                            <div className="contact">
                                <li><a className="cont">Contact <i className="fa fa-angle-down" aria-hidden="true"></i></a></li>
                            <div className="dropdown-content">
                        </div>
                    </div>
                </ul>
            </div>
        </div>
    );
}

export default Navigation;