import './coffeeshopsStyle.css';
import { Link } from 'react-router-dom';

const Coffeeshops = () => {
    return (
        <div className="coffeeshops-container">
            <div className="coffeeshops-header">
                <h1>Coffeeshops</h1>
                <p>Here you can find links to the different coffeshops websites (More will be added with time)</p>
            </div>
            <div className="coffeeshops">
            <div className="img" ><a href="https://coffeecollective.dk/da/about/" target="_blank">Coffee Collective</a></div>
            <div className="img"><a href="https://www.cafepilos.dk/menu-cafe-pilos/" target="_blank">Café Pilos</a></div>
            <div className="img"><a href="https://madogkaffe.dk/drikkevarer/" target="_blank">Mad & Kaffe</a></div>
            <div className="img"><a href="https://originalcoffee.dk/pages/kaffebarer" target="_blank">Original Coffee</a></div>

        </div>
        </div>
    );
}

export default Coffeeshops;