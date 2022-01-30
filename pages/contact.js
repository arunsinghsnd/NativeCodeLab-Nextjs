/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import {
  Grid,
  makeStyles,
  useTheme,
  Typography,
  useMediaQuery,
  Button,
  TextField,
  Dialog,
  DialogContent,
  CircularProgress,
  Snackbar,
} from "@material-ui/core";

import ButtonArrow from "../src/ui/ButtonArrow";
import Link from "../src/ui/Link";
import Head from "next/head";

const useStyles = makeStyles(theme => ({
  background: {
    backgroundImage: `url("static/assets/background.jpg")`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "60em",
    paddingBottom: "10em",
    [theme.breakpoints.down("md")]: {
      backgroundImage: `url("static/assets/mobileBackground.jpg")`,
    },
  },
  learnButton: {
    ...theme.typography.learnButtom,
    fontSize: "0.7rem",
    height: 35,
    padding: 5,
    [theme.breakpoints.down("md")]: {
      marginBottom: "2em",
    },
  },
  estimateButton: {
    ...theme.typography.estimate,
    borderRadius: 50,
    height: 80,
    width: 205,
    backgroundColor: theme.palette.common.orange,
    fontSize: "1.5rem",
    marginRight: "5em",
    marginLeft: "2em",
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
    [theme.breakpoints.down("md")]: {
      marginRight: 0,
      marginLeft: 0,
    },
  },
  message: {
    border: `2px solid ${theme.palette.common.blue}`,
    marginTop: "5em",
    borderRadius: 5,
  },
  sendButtom: {
    ...theme.typography.estimate,
    borderRadius: 50,
    height: 45,
    width: 245,
    fontSize: "1rem",
    backgroundColor: theme.palette.common.orange,
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
    [theme.breakpoints.down("sm")]: {
      height: 40,
      width: 225,
    },
  },
}));

const Contact = props => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  const [name, setName] = useState("");

  const [email, setEmail] = useState("");
  const [emailHelper, setEmailHelper] = useState("");

  const [phone, setPhone] = useState("");
  const [phoneHelper, setPhoneHelper] = useState("");

  const [message, setMessage] = useState("");

  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const [alert, setAlert] = useState({ open: false, color: "" });
  const [alertMessage, setAlertMesssage] = useState("");

  const onChange = event => {
    let valid;

    switch (event.target.id) {
      case "email":
        setEmail(event.target.value);
        valid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
          event.target.value
        );

        if (!valid) {
          setEmailHelper("Invaild email");
        } else {
          setEmailHelper("");
        }
        break;
      case "phone":
        setPhone(event.target.value);
        valid = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(
          event.target.value
        );

        if (!valid) {
          setPhoneHelper("Invaild phone");
        } else {
          setPhoneHelper("");
        }
        break;
      default:
        break;
    }
  };

  const onConfirm = () => {
    setLoading(true);

    axios
      .get(
        "https://us-central1-arc-development-website.cloudfunctions.net/sendMail",
        {
          params: {
            email: email,
            name: name,
            phone: phone,
            message: message,
          },
        }
      )
      .then(res => {
        setLoading(false);
        setOpen(false);
        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
        setAlert({ open: true, color: "#4BB543" });
        setAlertMesssage("Message sent successfully!");
      })
      .catch(err => {
        setLoading(false);
        setAlert({ open: true, color: "#FF3232" });
        setAlertMesssage("Something went wrong! Please try again.");
        console.error(err);
      });
  };

  const buttonContents = (
    <React.Fragment>
      Send Message
      <img
        src="static/assets/send.svg"
        alt="paper airplane"
        style={{ marginLeft: "1em" }}
      />
    </React.Fragment>
  );

  return (
    <Grid container direction="row">
      <Head>
        <title key="title">Contact Us | NativeCodeLab</title>
        <meta
          name="description"
          key="description"
          content="Let us guide you through the custom software design and development process. Send us a message with any of your ideas or questions to get started!"
        />
        <meta
          property="og:title"
          content="Bringing West Coast Technology to the Midwest | Contact Us"
          key="og:title"
        />
        <meta
          property="og:url"
          key="og:url"
          content="nativecodelab.netlify.app/contact"
        />
        <link
          rel="canonical"
          key="canonical"
          href="nativecodelab.netlify.app/contact"
        />
      </Head>
      <Grid
        item
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        lg={4}
        xl={3}
        style={{
          marginBottom: matchesMD ? "5em" : 0,
          marginTop: matchesSM ? "1em" : matchesMD ? "5em" : 0,
        }}
      >
        <Grid item>
          <Grid container direction="column">
            <Grid item>
              <Typography
                variant="h1"
                align={matchesMD ? "center" : undefined}
                style={{ lineHeight: 1 }}
              >
                Contcat Us
              </Typography>
              <Typography
                variant="body2"
                align={matchesMD ? "center" : undefined}
                style={{ color: theme.palette.common.blue }}
              >
                We're waiting.
              </Typography>
            </Grid>
            <Grid item container style={{ marginTop: "2em" }}>
              <Grid item>
                <img
                  src="static/assets/phone.svg"
                  alt="phone icon"
                  style={{ marginRight: "0.5em" }}
                />
              </Grid>
              <Grid item>
                <Typography
                  variant="body2"
                  style={{ color: theme.palette.common.blue, fontSize: "1rem" }}
                >
                  <a
                    href="tel:8427825355"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    +91-8427825355
                  </a>
                </Typography>
              </Grid>
            </Grid>

            <Grid item container style={{ marginBottom: "2em" }}>
              <Grid item>
                <img
                  src="static/assets/email.svg"
                  alt="envalop"
                  style={{ marginRight: "0.5em", verticalAlign: "bottom" }}
                />
              </Grid>
              <Grid item>
                <Typography
                  variant="body2"
                  style={{ color: theme.palette.common.blue, fontSize: "1rem" }}
                >
                  <a
                    href="mailto:arunsinghsnd@gmail.com"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    arunsinghsnd@gmail.com
                  </a>
                </Typography>
              </Grid>
            </Grid>
            <Grid item container direction="column" style={{ width: "20em" }}>
              <Grid item style={{ marginBottom: "0.5em" }}>
                <TextField
                  label="Name"
                  id="name"
                  fullWidth
                  value={name}
                  onChange={event => setName(event.target.value)}
                />
              </Grid>
              <Grid item style={{ marginBottom: "0.5em" }}>
                <TextField
                  label="Email"
                  error={emailHelper.length !== 0}
                  helperText={emailHelper}
                  id="email"
                  fullWidth
                  value={email}
                  onChange={onChange}
                />
              </Grid>
              <Grid item style={{ marginBottom: "0.5em" }}>
                <TextField
                  label="Phone"
                  error={phoneHelper.length !== 0}
                  helperText={phoneHelper}
                  id="phone"
                  fullWidth
                  value={phone}
                  onChange={onChange}
                />
              </Grid>
            </Grid>
            <Grid item style={{ width: "20em" }}>
              <TextField
                value={message}
                InputProps={{ disableUnderline: true }}
                className={classes.message}
                multiline
                rows={10}
                fullWidth
                placeholder="Tell us more about your project"
                id="message"
                onChange={event => setMessage(event.target.value)}
              />
            </Grid>
            <Grid
              item
              container
              justifyContent="center"
              style={{ marginTop: "2em" }}
            >
              <Button
                variant="contained"
                disabled={
                  name.length === 0 ||
                  message.length === 0 ||
                  phoneHelper.length !== 0 ||
                  emailHelper.length !== 0 ||
                  email.length === 0 ||
                  phone.length === 0
                }
                className={classes.sendButtom}
                onClick={() => setOpen(true)}
              >
                {buttonContents}
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Dialog
        style={{ zIndex: 1302 }}
        open={open}
        onClose={() => setOpen(false)}
        fullScreen={matchesSM}
        PaperProps={{
          style: {
            paddingTop: matchesXS ? "1em" : "2em",
            paddingBottom: matchesXS ? "1em" : "2em",
            paddingLeft: matchesXS
              ? 0
              : matchesSM
              ? 0
              : matchesMD
              ? "15em"
              : "25em",
            paddingRight: matchesXS
              ? 0
              : matchesSM
              ? 0
              : matchesMD
              ? "15em"
              : "25em",
          },
        }}
      >
        <DialogContent>
          <Grid container direction="column">
            <Grid item>
              <Typography align="center" variant="h4" gutterBottom>
                Confrim Message
              </Typography>
            </Grid>

            <Grid item style={{ marginBottom: "0.5em" }}>
              <TextField
                label="Name"
                id="name"
                fullWidth
                value={name}
                onChange={event => setName(event.target.value)}
              />
            </Grid>
            <Grid item style={{ marginBottom: "0.5em" }}>
              <TextField
                label="Email"
                error={emailHelper.length !== 0}
                helperText={emailHelper}
                id="email"
                fullWidth
                value={email}
                onChange={onChange}
              />
            </Grid>
            <Grid item>
              <TextField
                label="Phone"
                error={phoneHelper.length !== 0}
                helperText={phoneHelper}
                id="phone"
                fullWidth
                value={phone}
                onChange={onChange}
              />
            </Grid>
          </Grid>

          <Grid item style={{ width: matchesSM ? "100%" : "20em" }}>
            <TextField
              value={message}
              InputProps={{ disableUnderline: true }}
              className={classes.message}
              multiline
              rows={10}
              fullWidth
              id="message"
              onChange={event => setMessage(event.target.value)}
            />
          </Grid>
          <Grid
            item
            container
            direction={matchesSM ? "column" : "row"}
            style={{ marginTop: "2em" }}
            alignItems="center"
          >
            <Grid item>
              <Button
                color="primary"
                style={{ fontWeight: 300 }}
                onClick={() => setOpen(false)}
              >
                Cancel
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                disabled={
                  name.length === 0 ||
                  message.length === 0 ||
                  phoneHelper.length !== 0 ||
                  emailHelper.length !== 0 ||
                  email.length === 0 ||
                  phone.length === 0
                }
                className={classes.sendButtom}
                // onClick={() => setOpen(true)}
                onClick={() => {
                  onConfirm();
                  ReactGA.event({
                    category: "Message",
                    action: "Message Sent",
                  });
                }}
              >
                {loading ? <CircularProgress size={30} /> : buttonContents}
              </Button>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>

      <Snackbar
        open={alert.open}
        ContentProps={{
          style: {
            backgroundColor: alert.color,
          },
        }}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        message={alertMessage}
        autoHideDuration={4000}
        onClose={() => setAlert(false)}
      />

      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        className={classes.background}
        lg={8}
        xl={9}
        justifyContent={matchesMD ? "center" : undefined}
        alignItems="center"
      >
        <Grid
          item
          style={{
            marginLeft: matchesMD ? 0 : "3em",
            textAlign: matchesMD ? "center" : "inherit",
          }}
        >
          <Grid container direction="column">
            <Grid item>
              <Typography align={matchesMD ? "center" : undefined} variant="h1">
                Simple Software.
                <br /> Revolutionary Results.
              </Typography>
              <Typography
                variant="subtitle2"
                align={matchesMD ? "center" : undefined}
                style={{ fontSize: "1.5rem" }}
              >
                Take a advantage of the 21st Century.
              </Typography>
              <Grid
                container
                justifyContent={matchesMD ? "center" : undefined}
                item
              >
                <Button
                  variant="outlined"
                  className={classes.learnButton}
                  component={Link}
                  href="/revolution"
                  onClick={() => props.setValue(2)}
                >
                  <span style={{ marginRight: 5 }}>Learn More</span>
                  <ButtonArrow
                    height={15}
                    width={15}
                    fill={theme.palette.common.blue}
                  />
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            className={classes.estimateButton}
            component={Link}
            href="/estimate"
            // onClick={() => props.setValue(5)}
            onClick={() => {
              props.setValue(5);
              ReactGA.event({
                category: "Estimate",
                action: "Contact Page Pressed",
              });
            }}
          >
            Free Estimate
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Contact;
