import './footerStyles.css';
import Logo from './images/LogoWhite.png';
import Avatar from '@material-ui/core/Avatar';

const Footer = () => {
    return ( 
        <div className="footer">
            {<Avatar alt="logo" src={Logo} className="footer-logo" />}
            <p><b>Address:</b> Østergården 41, 2635 Ishøj</p>
            <p><b>Number:</b> 26 35 40 95</p>
            <p><b>Email:</b> MohammedHassani1995@gmail.com</p>
            
        </div>
     );
}
 
export default Footer;
