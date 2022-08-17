import './Head.css';

function Head() {
    return(
        <div className='head-container'>
            <div className="head">
                <div className="Head" routerLink="/home">
                    <h1><u>Elle</u>gant Braids</h1>
                    <h6 className="byline">Elegant beauty at a great price!</h6>
                </div>
            </div>
        </div>
    );
}

export default Head;