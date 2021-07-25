import './companyStyle.css';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Logo from './images/Logo.png';



const Companysignup = () => {

function alertThis() {
    alert("The request is now being processed :)");
    window.location.reload();
}

const useStyles = makeStyles(() => ({
    btn: {
        color: "black"
    }

}));

const classes = useStyles();

    return (
        <div className="companysignup">
            <h1 className="company-header">Join the journey!</h1>

            <img src={Logo} alt="CoffeeBean" class="logo"/>
            <TextField
                label="Full Name"
                id="outlined-margin-normal"
                defaultValue=""
                margin="normal"
                variant="outlined"
                className="input"
            />
            <TextField
                label="Company Name"
                id="outlined-margin-normal"
                defaultValue=""
                margin="normal"
                variant="outlined"
                className="input"
            />
            <TextField
                label="Phone Number"
                id="outlined-margin-normal"
                defaultValue=""
                margin="normal"
                variant="outlined"
                className="input"
            />
            <TextField
                label="Phone Number"
                id="outlined-margin-normal"
                defaultValue=""
                margin="normal"
                variant="outlined"
                className="input"
            />

            <Button variant="outlined" color="primary" className={classes.btn} onClick={alertThis}>
                Send Request
            </Button>
        </div>
    );
}

export default Companysignup;