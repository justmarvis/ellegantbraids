import Navigation from '../header/navigation/Navigation';
import './Body.css';

import Head from './head/Head';
import Search from './search/Search';
import Social from './social/Social';
import Hero from './hero/Hero'
import Welcome from './welcome/Welcome';
import Button from './button/Button';
import Wlc from './wlc/Wlc';

function Body() {
    return(
        <div className='body-container'>
            <Head />
            <div className='secondLayer'>
                <Search />
                <Social />
            </div>
            <Navigation />
            <Hero />
            <div className='third'>
                <Welcome />
                <Button />
            </div>
            <div className='fourth'>
                <Wlc />
            </div>
        </div>
    );
}

export default Body;