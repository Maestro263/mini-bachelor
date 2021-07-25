import { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from "@material-ui/core/styles";
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Homepage from './Homepage';
import Coffeeshops from './Coffeeshops';
import Contact from './Contact';
import Companysignup from './Companysignup';
import Logo from './images/LogoWhite.png';
import MenuIcon from '@material-ui/icons/Menu';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import './navigationStyles.css';
import Footer from './Footer';



const Navigation = () => {

    const matches = useMediaQuery('(max-width:768px)');

    const useStyles = makeStyles((theme) => ({
        yellowPaper: {
            backgroundColor: "#97572b"
        },
        whiteText: {
            color: "white"
        },
        noWidth: {
            minWidth: "0px",
            padding: "0px",
            cursor: "pointer",
            flexDirection: "row",
            color: "#a1a1a1"    
        },
        newColor: {
            ['@media (max-width:768px)']: {
                display: "none"
            }
        },
        linkStyle: {
            textDecoration: "none",
            color: "white"
        }
    }));

    const [state, setState] = useState(false);


    function toggle() {
        setState({ addClass: !state.addClass });
    }

    let boxClass = ["burger"];
    if (state.addClass) {
        boxClass.push('ul');
    }



    const routes = ["/Homepage", "/Coffeeshops", "/Contact", "/CompanySignup"];
    const classes = useStyles();
    return (
        <div className="header">
            <BrowserRouter>
                <Route path="/" render={(history) => (
                    <Paper square className={classes.yellowPaper}>

                        <Tabs
                            TabIndicatorProps={{
                                style: {
                                    backgroundColor: "white" }}}
                            value={history.location.pathname !== "/" ? history.location.pathname : false}
                            className={classes.whiteText}
                            aria-label="disabled tabs example">
                            <div id="view" >
                                <MenuIcon className={boxClass.join(' ')} onClick={toggle}/>
                            <ul className={boxClass.join(' ')} >
                            <li><Link className={classes.linkStyle} to="/Homepage">Homepage</Link></li>
                            <li><Link className={classes.linkStyle} to="/Coffeeshops">Coffeeshops</Link></li>
                            <li><Link className={classes.linkStyle} to="/Contact">Contact</Link></li>
                            <li><Link className={classes.linkStyle} to="/Companysignup">Contact For Companies</Link></li>                                
                            </ul>       
                            </div>
                            <Tab className={classes.noWidth} icon={<Avatar alt="logo" src={Logo} />} value={routes[0]} component={Link} to={routes[0]} />
                            <Tab label="HOMECOFFEE" className={classes.noWidth} value={routes[0]} component={Link} to={routes[0]} />
                            <Tab label="HomePage" className={classes.newColor} value={routes[0]} component={Link} to={routes[0]} />
                            <Tab label="Coffeeshops" className={classes.newColor} value={routes[1]} component={Link} to={routes[1]} />
                            <Tab label="Contact" className={classes.newColor} value={routes[2]} component={Link} to={routes[2]} />
                            <Tab label="Contact for companies" className={classes.newColor} value={routes[3]} component={Link} to={routes[3]} />
                        </Tabs>
                    </Paper>
                )} />
                <Switch>
                    <Route path="/Homepage" component={Homepage} />
                    <Route path="/Coffeeshops" component={Coffeeshops} />
                    <Route path="/Contact" component={Contact} />
                    <Route path="/CompanySignup" component={Companysignup} />
                </Switch>
            </BrowserRouter>
            <Footer />
        </div>

    );

}

export default Navigation;