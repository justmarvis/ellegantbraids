import './Button.css';
import { Link } from "react-router-dom";

function Button() {
    return(
        <div className='button-container'>
            <button className="button" target="_blank">make appointment</button>
        </div>
    );
}

export default Button;