import React,{useState} from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
//import Checkbox from '@material-ui/core/Checkbox';
// import Radio from '@material-ui/core/Radio';
// import RadioGroup from '@material-ui/core/RadioGroup';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import FormControl from '@material-ui/core/FormControl';
// import FormLabel from '@material-ui/core/FormLabel';

export default function AddressForm(props) {
//   const [value, setValue] = React.useState('female');
  const [BasicValues, setBasicValues] = useState({
    "bank_name":"",
    "branch_name":"",
    "ifsc_code":"",
    "account_holder_name":"",
    "account_number":"",
  })

  const handleChangeValue=(e)=>{
    let dummy = BasicValues
    dummy[e.target.name] = e.target.value
    setBasicValues(dummy) 
    console.log(dummy)
    props.handleSetBank(BasicValues)
  }

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Basic Information
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            //id="BankName"
            name="bank_name"
            label="Bank Name"
            fullWidth
            onChange={handleChangeValue}
            //autoComplete="given-name"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            //id="BranchName"
            name="branch_name"
            label="Branch Name"
            fullWidth
            onChange={handleChangeValue}
            //autoComplete="family-name"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            //id="IFSCcode"
            name="ifsc_code"
            label="IFSC code"
            fullWidth
            onChange={handleChangeValue}
            //autoComplete="family-name"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            //id="AccountHolderName"
            name="account_holder_name"
            label="Account Holder Name"
            fullWidth
            onChange={handleChangeValue}
            //autoComplete="family-name"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            //id="AccountNumber"
            name="account_number"
            label="AccountNumber"
            fullWidth
            onChange={handleChangeValue}
            //autoComplete="family-name"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}