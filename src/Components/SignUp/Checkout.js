import React, { useState,useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
//import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import AddressForm from './AddressForm';
import PaymentForm from './PaymentForm';
//import Review from './Review';
import { useHistory } from "react-router-dom";
import { NavLink } from 'react-router-dom';
import PayORSkip from './PayORSkip';
import axios from 'axios'
import AccountDetails from './AccountDetails'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © IndiiGlobe'}
      {/*<Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>*/}{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));

const steps = ['Basic Info', 'Personal details', 'Account Details', 'Referal Info'];


export default function Checkout() {
  const classes = useStyles();
  const history = useHistory();
  const [activeStep, setActiveStep] = React.useState(0);
  // const [name, setName] = useState("Arpan")
  const [PersonalValues, setPersonalValues] = useState({})
  const [BasicValues, setBasicValues] = useState({})
  const [bank, setBank] = useState({})
  const [refer, setRefer] = useState({})
  const [bankDetails, setBankDetails] = useState({})
  const [referDetails, setReferDetails] = useState({})
  const [postObject, setPostObject] = useState({})
  const [status, setStatus] = useState(false)
  const path = `/Login`; 

  const getStepContent=(step)=> {
    switch (step) {
      case 0:
        return <AddressForm handleSetBasic={handleSetBasic}/>;
      case 1:
        return <PaymentForm handleSetPersonal={handleSetPersonal}/>;
      case 2:
        return <AccountDetails handleSetBank={handleSetBank}/> ;
      case 3:
        return <PayORSkip handleSetRefer={handleSetRefer}/>;
      default:
        throw new Error('Unknown step');
    }
  }

  const handleSetBasic =(text)=>{
    //console.log("aagya",text)
    setBasicValues(text)
  }

  const handleSetPersonal =(text)=>{
    // console.log("aagya",text)
    setPersonalValues(text)
  }

  const handleSetBank =(text)=>{
    console.log("aagya",text)
    setBank(text)
  }

  const handleSetRefer =(text)=>{
    // console.log("aagya",text)
    setRefer(text)
  }

    
  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handlePostObject = () => {
    console.log("inside")
    setPostObject({
      "first_name":BasicValues.firstName,
      "last_name":BasicValues.lastName,
      "gender":BasicValues.gender,
      "email":BasicValues.Email,
      "mobile":BasicValues.Contact,
      "password":BasicValues.Password,
      "father_name":PersonalValues.FatherName,
      "mother_name":PersonalValues.MotherName,
      "qualification":PersonalValues.Qualification.toLowerCase(),
      "occupation":PersonalValues.Occupation.toLowerCase(),
      "pan":PersonalValues.PanNumber,
      "aadhar":PersonalValues.AadharNumber,
    })
  }

  useEffect(()=>{
    handleRegisterApi()
  },[postObject])


  async function handleRegisterApi(){
    //console.log("inside")
    await axios.post("https://fiveninitynine.herokuapp.com/account/signup/",postObject)
    .then(res=>{
      //console.log(res.data.status)
      setStatus(res.data.status)
      if(res.data.status===true){
        console.log(bank,"in")
        console.log(BasicValues)
        //history.push(path)
        //setBankDetails()
        handleBankApi()
        // setReferDetails({
        //   "user":BasicValues.Email,
        //   "parent":refer.parent
        // })
        handleReferApi()
      }
      else{
        //TODO
      }
    })
    .catch(err=>{
      setStatus("false")
    })
  }

  async function handleBankApi(){
    //console.log("inside",bankDetails)
    await axios.post("https://fiveninitynine.herokuapp.com/account/bankdetails/",{
      "bank_name":bank.bank_name,
      "branch_name":bank.bank_name,
      "account_number":bank.bank_name,
      "ifsc_code":bank.bank_name,
      "account_holder_name":bank.bank_name,
      "email":BasicValues.Email,
    })
    .then(res=>{
      //console.log(res.data.status)
    })
    .catch(err=>{
      
    })
  }


  async function handleReferApi(){
    //console.log("inside")
    await axios.post("https://fiveninitynine.herokuapp.com/clubs/makeTree/",{
      "user":BasicValues.Email,
      "parent":refer.parent
    })
    .then(res=>{
      //console.log(res.data.status)
      history.push(path)
    })
    .catch(err=>{
      
    })
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="absolute" color="default" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            IndiiGlobe
          </Typography>
        </Toolbar>
      </AppBar>
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
            Sign Up
          </Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
              <React.Fragment>
                {getStepContent(activeStep)}
                <div className={classes.buttons}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} className={classes.button}>
                      Back
                    </Button>
                  )}
                  {activeStep === steps.length - 1 ?
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={handlePostObject}
                      className={classes.button}
                    >
                      Sign Up
                    </Button>
                  :
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                     Next
                  </Button>}
                </div>
              </React.Fragment>
        </Paper>
        <Copyright />
      </main>
    </React.Fragment>
  );
}