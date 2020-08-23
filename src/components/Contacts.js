import React, { useState } from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import { TextField, Typography, Button, Grid, Box } from '@material-ui/core'
import SendIcon from '@material-ui/icons/Send'
import Navbar from './Navbar';
import emailjs from 'emailjs-com';
import { useHistory } from "react-router-dom";
import Recaptcha from "react-recaptcha";

const useStyles = makeStyles(theme => ({
  form: {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    position: "absolute"
  },
  button: {
    marginTop: "1rem",
    color: "tomato",
    borderColor: "tomato"
  }
}))

const InputField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "tomato",
    },
    "& label": {
      color: "tan",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: 'tan'
      },
      "&:hover fieldset": {
        borderColor: "tan"
      },
      "&.Mui-focused fieldset": {
        borderColor: "tan"
      }
    }
  },
})(TextField);



const Contacts = () => {
  const classes = useStyles();
  const [isVerified, setIsVerified] = useState(false);
  let history = useHistory();

  const sendEmail = (e) => {
    e.preventDefault();

    if (isVerified) {
      alert('Email Submitted!')
      emailjs.sendForm('gmail', 'soggy_template', e.target, 'user_PvutjECO6CUiaLRfhAdzT')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    
      history.push('/');
    } else {
      alert('Please verify you are human!')
    }
  }

  const recaptchaLoaded = () => {
    console.log('Capcha succesffully loaded!')
  }

  const verifyCallback = (response) => {
    if (response) {
      setIsVerified(true)
    }
  }

  return (
    <Box component="div" style={{ background: "#233", height: "100vh" }}>
      <Navbar />
      <Grid container justify="center">
        <Box component="form" className={classes.form} onSubmit={sendEmail}>
          <Typography
            variant="h5"
            style={{
              color: "tomato",
              textAlign: "center",
              textTransform: "uppercase",
            }}>
            contact me
          </Typography>
          <InputField
            fullWidth={true}
            label="Name"
            variant="outlined"
            inputProps={{style: {color: "white"}}}
            margin="dense"
            size="medium"
            name="name"
          />
          <br />
          <InputField
            fullWidth={true}
            label="Email"
            variant="outlined"
            inputProps={{style: {color: "white"}}}
            margin="dense"
            size="medium"
            name="email"
          />
          <br />
          <InputField
            fullWidth={true}
            label="Company name"
            variant="outlined"
            inputProps={{style: {color: "white"}}}
            margin="dense"
            size="medium"
            name="company"
          />
          <br />
          <InputField
            fullWidth={true}
            label="Message..."
            variant="outlined"
            inputProps={{style: {color: "white"}}}
            margin="dense"
            size="large"
            name="message"
          />
          <br />
          
          <Recaptcha
            sitekey="6LcSbMIZAAAAAOGVCNo0ZwEkAc8g8cJ7QO-eiRPp"
            render="explicit"
            verifyCallback={verifyCallback}
            onloadCallback={recaptchaLoaded}
          />
          
          <Button className={classes.button} variant="outlined" fullWidth={true} endIcon={<SendIcon />} type="submit">
            contact me
          </Button>
          
        </Box>
      </Grid>
    </Box>
  )
}

export default Contacts
