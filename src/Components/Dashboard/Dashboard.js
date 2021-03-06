import React, { useState,useEffect } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
//import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import {Chip, Button, Typography, List, Toolbar} from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
// import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
// import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import Modal from '@material-ui/core/Modal';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
// import NotificationsIcon from '@material-ui/icons/Notifications';
//import { mainListItems, secondaryListItems, ThirdListItems } from './listItems';
//import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
//import {NavLink} from 'react-router-dom';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { withStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';
import { useHistory } from "react-router-dom";
//import Link from '@material-ui/core/Link';
// import BarImage from '../../Assets/barChart.png'
// import dashboard from '../../Assets/dashboard.png'
// import Graph from '../../Assets/graph.JPG'
// import Profile from '../../Assets/profile.png'

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
//import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
// import BarChartIcon from '@material-ui/icons/BarChart';
// import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';
import axios from 'axios'
import { Redirect } from 'react-router-dom';
import dashImage from '../../Assets/Dashboard.jpg'
import donate from '../../Assets/donate.jpg'
import profileImg from '../../Assets/profile.jpg'

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

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

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  paperModal: {
    position: 'absolute',
    width: 400,
    backgroundColor: "#fff",
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
    fontWeight:"bold"
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
  loginIcon:{
    color:"white",
  },
  ProfileHeader:{
    textTransform:"capitalize",
    fontWeight:"bold",
    padding:"5px",
    //color:"white"
  },
  ProfileData:{
    textTransform:"capitalize",
    //fontWeight:"bold",
    padding:"5px",
    //color:"white"
  },
  DashboardStyle:{
    color:theme.palette.primary.main,
    fontWeight:"bold"
  },
  DashboardRed:{
    color:theme.palette.error.main
  },
  DashboardLeft:{
    color:"black",
    fontWeight:"bold"
  }
}));

export default function Dashboard(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [id, setId] = useState(0)
  const [token, setToken] = useState(localStorage.getItem("token"))
  //console.log(localStorage.getItem("registeredT"))
  const [registered, setRegistered] = useState(localStorage.getItem("registeredT"))
  const [userDetail, setUserDetail] = useState({})
  // const [orderId, setOrderId] = useState("")
  const [bank, setBank] = useState({})
  const [parent, setParent] = useState({})
  const [showPayment, setShowPayment] = useState(false)
  const [gp, setgp] = useState(false)
  const history = useHistory();
  const [fileUpload, setFileUpload]=useState()
  const [openModal, setOpenModal]=useState(false)
  const [modalStyle] = React.useState(getModalStyle);

  const handleToken=()=>{
    let path="/"
    history.push(path)
  }

  async function handleProfileApi(){
    //let postObject = "token"+" "+token
    await axios.get("https://fiveninitynine.herokuapp.com/account/getuserdetails/",{
      headers: {
        Authorization: 'Token ' + token
      }
    })
    .then(res=>{
      setUserDetail(res.data.user)
      setBank(res.data.bank)
    })
    .catch(err=>{
      setUserDetail({})
    })
  }

  async function handleDonate(){
    //let postObject = "token"+" "+token
    await axios.get("https://fiveninitynine.herokuapp.com/clubs/getparents",{
      headers: {
        Authorization: 'Token ' + token
      }
    })
    .then(res=>{
      setParent(res.data)
    })
    .catch(err=>{
      setParent({})
    })
  }

  useEffect(()=>{
    handleProfileApi()
    handleDonate()
  },[])


  const handleFileUpload=(e)=>{
    const files = e.target.files[0]
    
    
    setFileUpload(e.target.files[0])
    console.log(fileUpload)
  }

  async function handleFileUploadApi(){
    let modal=false
    console.log("file",fileUpload,token)
    const formaData=new FormData()
    formaData.append("screenshot",fileUpload)
    await axios.post("https://fiveninitynine.herokuapp.com/account/submitpaymentss/",formaData,{
      headers: {
        Authorization: 'Token ' + token
      }
    })
    .then(res=>{
      console.log(res.data)
      modal = res.data.status
    })
    .catch(err=>{
      //TODO
    })
    setOpenModal(modal)
  }
  async function handleFileUploadGrandApi(){
    let modal=false;
    console.log("file",fileUpload,token)
    const formaData=new FormData()
    formaData.append("screenshot",fileUpload)
    await axios.post("https://fiveninitynine.herokuapp.com/clubs/uploadgrandparentss/",formaData,{
      headers: {
        Authorization: 'Token ' + token
      }
    })
    .then(res=>{
      console.log(res.data)
      // alert(res.data)
      modal = res.data.status
    })
    .catch(err=>{
      //TODO
    })
    setOpenModal(modal)
  }
  async function handleFileUploadParentApi(){
    let modal = false;
    console.log("file",fileUpload,token)
    const formaData=new FormData()
    formaData.append("screenshot",fileUpload)
    await axios.post("https://fiveninitynine.herokuapp.com/clubs/uploadparentss/",formaData,{
      headers: {
        Authorization: 'Token ' + token
      }
    })
    .then(res=>{
      console.log("res.data",res.data)
      modal = res.data.status
    })
    .catch(err=>{
      //TODO
    })
    setOpenModal(modal)
  }

  const handleCloseModal=()=>{
    setOpenModal(false)
    handleContentId(0)
  }

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  const handleContentId=(id)=>{
    // console.log(id,"id")
    setId(id)
  }

  const handleShowPayment = ()=>{
    setShowPayment(!showPayment)
  }

  const handlegp = ()=>{
    setgp(!gp)
  }

  const body = (
    <div style={modalStyle} className={classes.paperModal}>
      <h2 id="simple-modal-title">Success</h2>
      <p id="simple-modal-description">
        File Uploaded successfully
      </p>
    </div>
  );

  const mainListItems = (
    <div>
      <ListItem button  onClick={()=>handleContentId(0)}>
        <ListItemIcon>{console.log(registered)}
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItem>
      {registered ?  
      <ListItem button  onClick={()=>handleContentId(1)}>
      <ListItemIcon>
      <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Donate" />
      </ListItem>:
      <ListItem button disabled>
      <ListItemIcon>
      <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Donate" />
    </ListItem>
    
  }
      {/* <ListSubheader inset>Account Details</ListSubheader> */}
      <ListItem button  onClick={()=>handleContentId(3)}>
        <ListItemIcon>
          <AccountCircleIcon />
        </ListItemIcon>
        <ListItemText primary="Profile" />
      </ListItem>
      {registered ? null: <ListItem button onClick={()=>handleContentId(2)}>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Become Member" />
      </ListItem>}
      {/* <ListItem button>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="Settings" />
      </ListItem> */}
      <ListItem button onClick={()=>handleToken()}>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        
          <ListItemText primary="Sign Out" />
        
      </ListItem>
      {/* <ListItem button  onClick={()=>handleContentId(2)}>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Customers" />
      </ListItem>
      <ListItem button  onClick={()=>handleContentId(1)}>
        <ListItemIcon>
          <BarChartIcon />
        </ListItemIcon>
        <ListItemText primary="Reports" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <LayersIcon />
        </ListItemIcon>
        <ListItemText primary="Integrations" />
      </ListItem> */}
    </div>
  );
  
  const secondaryListItems = (
    <div>
      {/* <ListSubheader inset>Saved reports</ListSubheader>
      <ListItem button>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="Current month" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="Last quarter" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="Year-end" />
      </ListItem> */}
    </div>
  );

  const ThirdListItems = (
    <div>
      <ListSubheader inset>Account Details</ListSubheader>
      <ListItem button  onClick={()=>handleContentId(3)}>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="Profile" />
      </ListItem>
      <ListItem button onClick={()=>handleContentId(2)}>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="Become Member" />
      </ListItem>
      {/* <ListItem button>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="Settings" />
      </ListItem> */}
      <ListItem button onClick={()=>setToken("")}>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        
          <ListItemText primary="Sign Out" />
        
      </ListItem>
    </div>
  );
if(token!=="" && token!==null){
  return (
    <div className={classes.root}>{console.log(token)}
      <CssBaseline />
      <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
          >
            <MenuIcon />
          </IconButton>
          <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
            <span style={{color:"dodgerblue"}}>Indii</span><span style={{color:"red"}}>Globe</span>
            <Typography style={{fontStyle:"italic"}}>A welfare unit of CS Consultancy</Typography>
          </Typography>
          <IconButton color="inherit" onClick={handleClick}>
            <Chip
              icon={<AccountCircleIcon />}
              label={userDetail.name}
            />
          </IconButton>
          <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <StyledMenuItem onClick={()=>handleContentId(3)}>
          
          <ListItemText primary="Profile" />
        </StyledMenuItem>
        {registered ? null: <StyledMenuItem onClick={()=>handleContentId(2)}>
          
          <ListItemText primary="Membership" />
        </StyledMenuItem>}
        <StyledMenuItem  onClick={()=>handleToken()}>
        
          <ListItemText primary="Sign Out" />
          
        </StyledMenuItem>
      </StyledMenu>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>{mainListItems}</List>
        {/* <Divider /> */}
        {/* <List>{secondaryListItems}</List>
        <Divider /> */}
        {/* <List>{ThirdListItems}</List> */}
      </Drawer>
      {id===0?<main className={classes.content} style={{backgroundImage:`url(${dashImage})`,backgroundRepeat: "no-repeat"}}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container} >
          <Grid container >
            
            <Grid item sm={12} >
              <Typography className={classes.DashboardStyle} style={{fontWeight:"500"}}>Indii Globe Support Funding.</Typography>
              <Typography className={classes.DashboardRed}>Happiness At Your Doorstep</Typography>
              <Typography className={classes.DashboardStyle}>*At our platform, you get certain and maximum earn. </Typography>
              <Typography className={classes.DashboardStyle}>*Our “Support Funding System” is built in a way, to become most rewarding ever.</Typography>
              <Typography className={classes.DashboardStyle}>Start Raising Happiness Today</Typography>
            </Grid>
            
             <Grid item sm={12} style={{textAlign:"right",marginTop:"20%"}}>
             <Typography className={classes.DashboardLeft}>*Welcome to WIN-WIN situation for donor, created by Indiiglobe.</Typography>
             <Typography className={classes.DashboardLeft}>*We established a system, where you get 3 times return of your donation amount.</Typography>
             <Typography className={classes.DashboardLeft}>*And only 5 % of your earning will support to orphan house associated with us.</Typography>

            </Grid> 
          </Grid>

          {/* <Box pt={4} >
            <Copyright />
          </Box> */}

        </Container>
      </main>: id ===3?
  <main className={classes.content} style={{backgroundImage:`url(${profileImg})`,backgroundRepeat: "no-repeat"}}>
  <div className={classes.appBarSpacer} />
  <Container maxWidth="lg" className={classes.container}>
    <Grid container>
      {/* <Paper style={{width:"100%",padding:"20px",paddingLeft:"40px"}}> */}
      {/* <AccountCircleIcon /> */}
      <Grid container>
            <Grid item sm={3} className={classes.ProfileHeader}>Name : </Grid>
            <Grid item sm={9} className={classes.ProfileData}>{userDetail.name}</Grid>
            
            <Grid item sm={3} className={classes.ProfileHeader}>Email : </Grid>
            <Grid item sm={9} className={classes.ProfileData}>{userDetail.email}</Grid>
            
            <Grid item sm={3} className={classes.ProfileHeader}>Gender : </Grid>
            <Grid item sm={9} className={classes.ProfileData}>{userDetail.gender}</Grid>
            
            <Grid item sm={3} className={classes.ProfileHeader}>Father Name : </Grid>
            <Grid item sm={9} className={classes.ProfileData}>{userDetail.father_name}</Grid>
            
            <Grid item sm={3} className={classes.ProfileHeader}>Mother Name : </Grid>
            <Grid item sm={9} className={classes.ProfileData}>{userDetail.mother_name}</Grid>
            
            <Grid item sm={3} className={classes.ProfileHeader}>Contact Number : </Grid>
            <Grid item sm={9} className={classes.ProfileData}>{userDetail.mobile}</Grid>
            
            <Grid item sm={3} className={classes.ProfileHeader}>Qualification : </Grid>
            <Grid item sm={9} className={classes.ProfileData}>{userDetail.qualification}</Grid>
            
            <Grid item sm={3} className={classes.ProfileHeader}>Occupation : </Grid>
            <Grid item sm={9} className={classes.ProfileData}>{userDetail.occupation}</Grid>
            
            <Grid item sm={2} className={classes.ProfileHeader} style={{paddingTop:"10px",paddingBottom:"10px"}}>Bank Details</Grid>
            <Grid item sm={10} style={{paddingTop:"20px",paddingBottom:"10px"}}> <Divider style={{backgroundColor:"black"}}/></Grid>

            <Grid item sm={3} className={classes.ProfileHeader}>Bank : </Grid>
            <Grid item sm={9} className={classes.ProfileData}>{bank.bank_name}</Grid>
            
            <Grid item sm={3} className={classes.ProfileHeader}>Branch : </Grid>
            <Grid item sm={9} className={classes.ProfileData}>{bank.branch_name}</Grid>
            
            <Grid item sm={3} className={classes.ProfileHeader}>IFSC : </Grid>
            <Grid item sm={9} className={classes.ProfileData}>{bank.ifsc_code}</Grid>
            
            <Grid item sm={3} className={classes.ProfileHeader}>Account Holder Name : </Grid>
            <Grid item sm={9} className={classes.ProfileData}>{bank.account_holder_name}</Grid>
            
            <Grid item sm={3} className={classes.ProfileHeader}>Account Number : </Grid>
            <Grid item sm={9} className={classes.ProfileData}>{bank.account_number}</Grid>
        </Grid>
      {/* </Paper> */}
    </Grid>
  </Container>
</main>:
id===1?
<main className={classes.content}  style={{backgroundImage:`url(${donate})`,backgroundRepeat: "no-repeat"}}>
<div className={classes.appBarSpacer} />
<Container maxWidth="lg" className={classes.container}>
  <Grid container spacing={3}>
    <Grid item xs={6}></Grid>
    <Grid item xs={6}>
      <Paper className={fixedHeightPaper} style={{borderRadius:"45%",padding:"8%",width:"50%"}}>
      <Grid container>
          <Grid item sm={6} className={classes.ProfileHeader}>
            Name
          </Grid>
          <Grid item sm={6} className={classes.ProfileHeader}>
            Payment
          </Grid>
        </Grid>
        <Grid container>
          <Grid item sm={6} className={classes.ProfileData} style={{paddingLeft:"15px"}}>
            {parent.parent!==null? parent.parent.user.name : "Not Found"}
          </Grid>
          <Grid item sm={6} className={classes.ProfileData}>
            {parent.parent!==null? <Button variant="contained" color="secondary" onClick={handlegp}>Pay</Button> : "Not Found"}
          </Grid>
        </Grid>
        <Grid container>
          <Grid item sm={6} className={classes.ProfileData}  style={{paddingLeft:"15px"}}>
            {parent.grandparent!==null? parent.grandparent.user.name : "Not Found"}
          </Grid>
          <Grid item sm={6} className={classes.ProfileData}>
            {parent.grandparent!==null? <Button variant="contained" color="secondary" onClick={handleShowPayment} >Pay</Button> : "Not Found"}
          </Grid>
        </Grid>
      </Paper>
</Grid>
{gp &&
<Grid item sm={6}><Paper className={fixedHeightPaper}>
            <Grid item sm={3} className={classes.ProfileHeader}>Bank : </Grid>
            <Grid item sm={9} className={classes.ProfileData}>{parent.parent.bank.bank_name}</Grid>
            
            <Grid item sm={3} className={classes.ProfileHeader}>Branch : </Grid>
            <Grid item sm={9} className={classes.ProfileData}>{parent.parent.bank.branch_name}</Grid>
            
            <Grid item sm={3} className={classes.ProfileHeader}>IFSC : </Grid>
            <Grid item sm={9} className={classes.ProfileData}>{parent.parent.bank.ifsc_code}</Grid>
            
            <Grid item sm={3} className={classes.ProfileHeader}>Account Holder Name : </Grid>
            <Grid item sm={9} className={classes.ProfileData}>{parent.parent.bank.account_holder_name}</Grid>
            
            <Grid item sm={3} className={classes.ProfileHeader}>Account Number : </Grid>
            <Grid item sm={9} className={classes.ProfileData}>{parent.parent.bank.account_number}</Grid>

            <Grid item sm={3} className={classes.ProfileHeader}>Amount : </Grid>
            <Grid item sm={9} className={classes.ProfileData}>1500</Grid>
          <Grid item sm={12}>
            <h4>Upload Reciept Image to verify Payment and Become Member</h4>
            <input type="file" name="img" onChange={(e)=>handleFileUpload(e)}/>
          </Grid>
          <Grid item sm={12} style={{marginTop:"50px"}}>
          <Button variant="contained" color="primary" onClick={handleFileUploadGrandApi} >Upload</Button>
          </Grid>
      </Paper>
</Grid>}
{showPayment &&
<Grid item sm={6}><Paper className={fixedHeightPaper}>
            <Grid item sm={3} className={classes.ProfileHeader}>Bank : </Grid>
            <Grid item sm={9} className={classes.ProfileData}>{parent.grandparent.bank.bank_name}</Grid>
            
            <Grid item sm={3} className={classes.ProfileHeader}>Branch : </Grid>
            <Grid item sm={9} className={classes.ProfileData}>{parent.grandparent.bank.branch_name}</Grid>
            
            <Grid item sm={3} className={classes.ProfileHeader}>IFSC : </Grid>
            <Grid item sm={9} className={classes.ProfileData}>{parent.grandparent.bank.ifsc_code}</Grid>
            
            <Grid item sm={3} className={classes.ProfileHeader}>Account Holder Name : </Grid>
            <Grid item sm={9} className={classes.ProfileData}>{parent.grandparent.bank.account_holder_name}</Grid>
            
            <Grid item sm={3} className={classes.ProfileHeader}>Account Number : </Grid>
            <Grid item sm={9} className={classes.ProfileData}>{parent.grandparent.bank.account_number}</Grid>

            <Grid item sm={3} className={classes.ProfileHeader}>Amount : </Grid>
            <Grid item sm={9} className={classes.ProfileData}>1500</Grid>
          <Grid item sm={12}>
            <h4>Upload Reciept Image to verify Payment and Become Member</h4>
            <input type="file" name="img" onChange={(e)=>handleFileUpload(e)}/>
          </Grid>
          <Grid item sm={12} style={{marginTop:"50px"}}>
          <Button variant="contained" color="primary" onClick={handleFileUploadParentApi}>Upload</Button>
          </Grid>
      </Paper>
</Grid>}
</Grid>
</Container>
<Modal
            open={openModal}
            onClose={handleCloseModal}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
          >
            {body}
          </Modal>
</main>
:id===2?
<main className={classes.content} style={{backgroundImage:`url(${profileImg})`,backgroundRepeat: "no-repeat"}}>
<div className={classes.appBarSpacer} />
<Container maxWidth="lg" className={classes.container}>
  <Grid container spacing={3}>
    <Grid item xs={6}></Grid>
    <Grid item xs={6}>
      <Paper style={{padding:"5px"}}>
            <Grid item sm={3} className={classes.ProfileHeader}>Bank : </Grid>
            <Grid item sm={9} className={classes.ProfileData}>Federal Bank</Grid>
            
            <Grid item sm={3} className={classes.ProfileHeader}>Branch : </Grid>
            <Grid item sm={9} className={classes.ProfileData}>Ranchi</Grid>
            
            <Grid item sm={3} className={classes.ProfileHeader}>IFSC : </Grid>
            <Grid item sm={9} className={classes.ProfileData}>FDRL0002299</Grid>
            
            <Grid item sm={3} className={classes.ProfileHeader}>Account Holder Name : </Grid>
            <Grid item sm={9} className={classes.ProfileData}>CS Consultancy(IndiiGlobe)</Grid>
            
            <Grid item sm={3} className={classes.ProfileHeader}>Account Number : </Grid>
            <Grid item sm={9} className={classes.ProfileData}>22990200000012</Grid>

            <Grid item sm={3} className={classes.ProfileHeader}>Amount : </Grid>
            <Grid item sm={9} className={classes.ProfileData}>599</Grid>
          <Grid item sm={12}>
            <h4>Upload Reciept Image to verify Payment and Become Member</h4>
            <input type="file" name="img" onChange={(e)=>handleFileUpload(e)}/>
          </Grid>
          <Grid item sm={12} style={{marginTop:"50px"}}>
          <Button variant="contained" color="primary" onClick={handleFileUploadApi}>Upload</Button>
          </Grid>
      </Paper>
</Grid>
</Grid>
</Container>
<Modal
            open={openModal}
            onClose={handleCloseModal}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
          >
            {body}
          </Modal>
</main>:null}
</div>
  )}
  else{
    return <Redirect to= "/"/>
  }
}