import './coffeeshopsStyle.css';
import CompaniesCoffeeColective from './CompaniesCoffeeColective';
import { Link } from 'react-router-dom';

const Coffeeshops = () => {
    return (  
        <div className="coffeeshops">
            <div className="img" ><li><Link to={CompaniesCoffeeColective}>Homepage</Link></li></div>
            <div className="img">Café Pilos</div>
            <div className="img">Mad & Kaffe</div>
            <div className="img">Original Coffee</div>

        </div>
    );
}
 
export default Coffeeshops;