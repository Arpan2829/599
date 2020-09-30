import React,{useState,useEffect} from 'react';
import {Grid, Typography, Chip} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import dashImage from '../../Assets/toget.jpg'
import dashImagefirst from '../../Assets/demol.png'
import dashImage2 from '../../Assets/dashImage2.jpg'
import { Redirect } from 'react-router-dom';
import coins from '../../Assets/coins.jpg';
import first from '../../Assets/first.jpg';
import second from '../../Assets/second.jpg';
import third from '../../Assets/third.jpg';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';


const useStyles = makeStyles((theme) => ({
    
  }));

const LandingPage=()=>{
    const classes = useStyles();
    const [login, setLogIn] = useState(false)
    const [signup, setSignup] = useState(false)
    const [id, setId] = useState(0)
    const ChangePhotoId=()=>{
        if(id===0){
            setId(1)
        }
        else{
            setId(0)
        }
    }

    useEffect(() => {
            const id = setInterval(ChangePhotoId, 5000);
            return () => clearInterval(id);
        },[id]);
    
    
    
    const [change, setChange] = useState(0)

    const ChangePhoto=()=>{
        if(change===0){
            setChange(1)
        }
        else if(change===1){
            setChange(2)
        }
        else{
            setChange(0)
        }
    }

    const ChangePreviousPhoto=()=>{
        if(change===0){
            setChange(2)
        }
        else if(change===1){
            setChange(0)
        }
        else{
            setChange(1)
        }
    }

    useEffect(() => {
            const id = setInterval(ChangePhoto, 5000);
            return () => clearInterval(id);
        },[id]);
    

    
    
    const handleRemove=()=>{
        localStorage.removeItem("token")
        localStorage.removeItem("registeredT")
    }

    useEffect(()=>{
        handleRemove()
      },[])

    if(login) 
        return <Redirect to= "/Login"/>
    else if(signup)
    return <Redirect to= "/SignUp"/>
    return(<div>
        <Grid container style={{height:"70px",backgroundColor:"transparent"}}>
            <Grid item sm={8} style={{padding:"25px",fontWeight:"bold"}}>
                <Typography style={{fontWeight:"bold",fontSize:"1.4rem"}}>
                    <span style={{color:"dodgerblue"}}>Indii</span><span style={{color:"red"}}>Globe</span>
                    <Typography style={{fontStyle:"italic",fontSize:"0.7rem"}}>A welfare unit of CS Consultancy</Typography>
                </Typography>
            </Grid>
            <Grid item sm={1} style={{padding:"25px 10px",textAlign:"right",color:"red"}}>
                <Typography style={{fontWeight:"bold",cursor:"pointer"}}  onClick={()=>setLogIn(!login)}>How you Earn</Typography>
            </Grid>
            <Grid item sm={1} style={{padding:"25px 10px",textAlign:"right",color:"dodgerblue"}}>
                <Typography style={{fontWeight:"bold",cursor:"pointer"}}  onClick={()=>setLogIn(!login)}>Donation</Typography>
            </Grid>
            <Grid item sm={1} style={{padding:"25px 10px",textAlign:"right",color:"dodgerblue"}}>
                <Typography style={{fontWeight:"bold",cursor:"pointer"}} onClick={()=>setSignup(!signup)}>Join Us</Typography>
            </Grid>
            <Grid item sm={1} style={{padding:"25px 10px",textAlign:"right",color:"dodgerblue"}}>
                <Typography style={{fontWeight:"bold",cursor:"pointer"}} onClick={()=>setLogIn(!login)}>Login</Typography>
            </Grid>
        </Grid>
        {id===0?
        <Grid container style={{padding:"180px 25px",backgroundImage:`url(${dashImagefirst})`,backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundSize: "cover"}}>
            <Grid item sm={12}>
                <Typography style={{fontSize:"1.4rem",color:"dodgerblue"}}>
                    Indii Globe Support Funding.				
                </Typography>
                <Typography style={{fontWeight:"bold",fontSize:"1.4rem",color:"red"}}>
                    Happiness At Your Doorstep				
                </Typography>
                <Typography style={{fontWeight:"bold",fontSize:"1.4rem",color:"dodgerblue"}}>
                    *At our platform, you get certain and maximum earn. 
                </Typography>
                <Typography style={{fontWeight:"bold",fontSize:"1.4rem",color:"dodgerblue"}}>
                    *Our “Support Funding System” is built in a way, to become most rewarding ever.				
                </Typography>
                <Typography style={{fontWeight:"bold",fontSize:"1.4rem",color:"dodgerblue"}}>
                    Start Raising Happiness Today				
                </Typography>
            </Grid>
        </Grid>:
        <Grid container style={{padding:"180px 25px",backgroundImage:`url(${dashImage2})`,backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundSize: "cover"}}>
        <Grid item sm={12}>
            <Typography style={{fontSize:"1.4rem",color:"dodgerblue"}}>
                Indii Globe Support Funding.				
            </Typography>
            <Typography style={{fontWeight:"bold",fontSize:"1.4rem",color:"red"}}>
                Happiness At Your Doorstep				
            </Typography>
            <Typography style={{fontWeight:"bold",fontSize:"1.4rem",color:"dodgerblue"}}>
                *At our platform, you get certain and maximum earn. 
            </Typography>
            <Typography style={{fontWeight:"bold",fontSize:"1.4rem",color:"dodgerblue"}}>
                *Our “Support Funding System” is built in a way, to become most rewarding ever.				
            </Typography>
            <Typography style={{fontWeight:"bold",fontSize:"1.4rem",color:"dodgerblue"}}>
                Start Raising Happiness Today				
            </Typography>
        </Grid>
    </Grid>}
        <Grid container style={{padding:"180px 25px",textAlign:"center",backgroundImage:`url(${dashImage})`,backgroundRepeat: "no-repeat",backgroundAttachment: "fixed",backgroundPosition: "center center",backgroundSize: "cover"}}>
            <Grid item sm={6}></Grid>
            <Grid item sm={6}>
                <Typography style={{fontSize:"1.4rem",color:"red"}}>
                    What is Indiiglobe
                </Typography>
                <Typography style={{fontSize:"1.4rem",color:"red"}}>
                    Support Funding
                </Typography>
                <Typography style={{fontWeight:"bold",fontSize:"1.4rem",color:"dodgerblue"}}>
                    *Welcome to WIN-WIN situation for donor, created by Indiiglobe. 
                </Typography>
                <Typography style={{fontWeight:"bold",fontSize:"1.4rem",color:"dodgerblue"}}>
                    *We established a system, where you get 3 times return of your donation amount.
                </Typography>
                <Typography style={{fontWeight:"bold",fontSize:"1.4rem",color:"dodgerblue"}}>
                    *And only 5 % of your earning will support to orphan house associated with us.
                </Typography>
            </Grid>
        </Grid>
        {change===0 ?
        <Grid container style={{margin:"100px 0px"}}>
            <Grid item sm={1} style={{paddingTop:"140px"}}><ArrowBackIosIcon style={{color:"black",marginLeft:"35px"}} onClick={ChangePhoto}/></Grid>
            <Grid item sm={2}></Grid>
            <Grid item sm={6} style={{height:"300px",textAlign:"center",backgroundImage:`url(${dashImage2})`,backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundSize: "cover"}}></Grid>
            <Grid item sm={2}></Grid>
            <Grid item sm={1} style={{textAlign:"center",paddingTop:"140px"}}><ArrowForwardIosIcon style={{color:"black"}} onClick={ChangePhoto}/></Grid>
            <Grid item sm={3}></Grid>
            <Grid item sm={6} style={{backgroundColor:"black",color:"#fff",textAlign:"center"}}>We Give</Grid>
            <Grid item sm={3}></Grid>
        </Grid>: change===1?
        <Grid container  style={{margin:"100px 25px"}}>
            <Grid item sm={1} style={{paddingTop:"140px"}}><ArrowBackIosIcon style={{color:"black"}} onClick={ChangePhoto}/></Grid>
            <Grid item sm={2}></Grid>
            <Grid item sm={6}  style={{height:"300px",textAlign:"center",backgroundImage:`url(${second})`,backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundSize: "cover"}}></Grid>
            <Grid item sm={2}></Grid>
            <Grid item sm={1} style={{textAlign:"center",paddingTop:"140px"}}><ArrowForwardIosIcon style={{color:"black"}} onClick={ChangePhoto}/></Grid>
            <Grid item sm={3}></Grid>
            <Grid item sm={6} style={{backgroundColor:"black",color:"#fff",textAlign:"center"}}>We Share</Grid>
            <Grid item sm={3}></Grid>
        </Grid>:
        <Grid container style={{margin:"100px 25px"}}>
            <Grid item sm={1} style={{paddingTop:"140px"}}><ArrowBackIosIcon style={{color:"black"}} onClick={ChangePhoto}/></Grid>
            <Grid item sm={2}></Grid>
            <Grid item sm={6}  style={{height:"300px",textAlign:"center",backgroundImage:`url(${third})`,backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundSize: "cover"}}></Grid>
            <Grid item sm={2}></Grid>
            <Grid item sm={1} style={{textAlign:"center",paddingTop:"140px"}}><ArrowForwardIosIcon style={{color:"black"}} onClick={ChangePhoto}/></Grid>
            <Grid item sm={3}></Grid>
            <Grid item sm={6} style={{backgroundColor:"black",color:"#fff",textAlign:"center"}}>We Recieve</Grid>
            <Grid item sm={3}></Grid>
        </Grid>}
        <Grid container style={{padding:"180px 25px",textAlign:"center",backgroundImage:`url(${coins})`,backgroundRepeat: "no-repeat",backgroundPosition: "center center",backgroundSize: "cover"}}>
            <Grid item sm={3}><Chip label="Donation Level 1000" style={{padding:"20px", backgroundColor:"blue", color:"#fff"}}/></Grid>
            <Grid item sm={3}><Chip label="Donation Level 3000"  style={{padding:"20px", backgroundColor:"blue", color:"#fff"}}/></Grid>
            <Grid item sm={3}><Chip label="Donation Level 5000"  style={{padding:"20px", backgroundColor:"blue", color:"#fff"}}/></Grid>
            <Grid item sm={3}><Chip label="Donation Level 10000"  style={{padding:"20px", backgroundColor:"blue", color:"#fff"}}/></Grid>
            <Grid item sm={3} style={{marginTop:"20px"}}><Chip label="Donation Level 15000"  style={{padding:"20px", backgroundColor:"blue", color:"#fff"}}/></Grid>
        </Grid>
        <Grid container style={{padding:"30px 25px",backgroundColor:"black",color:"white",textAlign:"center"}}>
            <Grid item sm={3}>
                Site:
            </Grid>
            <Grid item sm={3}>
                About:
            </Grid>
            <Grid item sm={3}>
                Help:
            </Grid>
            <Grid item sm={3}>
                
            </Grid>
            <Grid item sm={3}>
                <Typography  onClick={()=>setLogIn(!login)} style={{cursor:"pointer"}}>Login</Typography>
            </Grid>
            <Grid item sm={3}>
                About
            </Grid>
            <Grid item sm={3}>
                Help
            </Grid>
            <Grid item sm={3}>
                
            </Grid>
            <Grid item sm={3}>
                <Typography  onClick={()=>setLogIn(!signup)}  style={{cursor:"pointer"}}>SignUp</Typography>
            </Grid>
            <Grid item sm={3}>
                
            </Grid>
            <Grid item sm={3}>
                
            </Grid>
            <Grid item sm={12}>
                IndiiGlobe
            </Grid>
            <Grid item sm={3}>
                
            </Grid>
        </Grid>
    </div>)
}

export default LandingPage;