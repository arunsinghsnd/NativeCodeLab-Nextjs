/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "../src/Link";
import { Hidden, makeStyles, Grid } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  footer: {
    backgroundColor: theme.palette.common.blue,
    width: "100%",
    zIndex: 1302,
    position: "relative",
  },
  adorment: {
    width: "25em",
    verticalAlign: "bottom",
    [theme.breakpoints.down("md")]: {
      width: "21em",
    },
    [theme.breakpoints.down("xs")]: {
      width: "15em",
    },
  },
  mainConatiner: {
    position: "absolute",
  },
  link: {
    color: "white",
    fontFamily: "Arial",
    fontSize: "0.75rem",
    fontWeight: "bold",
    textDecoration: "none",
  },
  gridItem: {
    margin: "3em",
  },
  icon: {
    height: "4em",
    width: "4em",
    [theme.breakpoints.down("xs")]: {
      height: "2.5em",
      width: "2.5em",
    },
  },
  socialConatiner: {
    position: "absolute",
    marginTop: "-6em",
    right: "1.5em",
    [theme.breakpoints.down("xs")]: {
      right: "0.6em",
    },
  },
}));

const Footer = props => {
  const classes = useStyles();
  return (
    <>
      <footer className={classes.footer}>
        <Hidden mdDown>
          <Grid
            container
            justifyContent="center"
            className={classes.mainConatiner}
          >
            <Grid item className={classes.gridItem}>
              <Grid container direction="column" spacing={2}>
                <Grid
                  item
                  component={Link}
                  href="/"
                  onClick={() => props.setValue(0)}
                  className={classes.link}
                >
                  Home
                </Grid>
              </Grid>
            </Grid>
            <Grid item className={classes.gridItem}>
              <Grid container direction="column" spacing={2}>
                <Grid
                  item
                  component={Link}
                  href="/services"
                  onClick={() => {
                    props.setValue(1);
                    props.setSelectedIndex(0);
                  }}
                  className={classes.link}
                >
                  Services
                </Grid>
                <Grid
                  item
                  component={Link}
                  href="/customsoftware"
                  onClick={() => {
                    props.setValue(1);
                    props.setSelectedIndex(1);
                  }}
                  className={classes.link}
                >
                  Custom Software Development
                </Grid>
                <Grid
                  item
                  component={Link}
                  href="/mobileapps"
                  onClick={() => {
                    props.setValue(1);
                    props.setSelectedIndex(2);
                  }}
                  className={classes.link}
                >
                  Android/iOS App Development
                </Grid>
                <Grid
                  item
                  component={Link}
                  href="/websites"
                  onClick={() => {
                    props.setValue(1);
                    props.setSelectedIndex(3);
                  }}
                  className={classes.link}
                >
                  Website Developemnt
                </Grid>
              </Grid>
            </Grid>
            <Grid item className={classes.gridItem}>
              <Grid container direction="column" spacing={2}>
                <Grid
                  item
                  component={Link}
                  href="/revolution"
                  onClick={() => props.setValue(2)}
                  className={classes.link}
                >
                  The Revolution
                </Grid>
                <Grid
                  item
                  component={Link}
                  href="/revolution"
                  onClick={() => props.setValue(2)}
                  className={classes.link}
                >
                  Vision
                </Grid>
                <Grid
                  item
                  component={Link}
                  href="/revolution"
                  onClick={() => props.setValue(2)}
                  className={classes.link}
                >
                  Technology
                </Grid>
                <Grid
                  item
                  component={Link}
                  href="/revolution"
                  onClick={() => props.setValue(2)}
                  className={classes.link}
                >
                  Process
                </Grid>
              </Grid>
            </Grid>
            <Grid item className={classes.gridItem}>
              <Grid container direction="column" spacing={2}>
                <Grid
                  item
                  component={Link}
                  href="/about"
                  onClick={() => props.setValue(3)}
                  className={classes.link}
                >
                  About Us
                </Grid>
                <Grid
                  item
                  component={Link}
                  href="/about"
                  onClick={() => props.setValue(3)}
                  className={classes.link}
                >
                  History
                </Grid>
                <Grid
                  item
                  component={Link}
                  href="/about"
                  onClick={() => props.setValue(3)}
                  className={classes.link}
                >
                  Team
                </Grid>
              </Grid>
            </Grid>
            <Grid item className={classes.gridItem}>
              <Grid container direction="column" spacing={2}>
                <Grid
                  item
                  component={Link}
                  href="/contact"
                  onClick={() => props.setValue(4)}
                  className={classes.link}
                >
                  Contact Us
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Hidden>
        <img
          alt="black decorative slash"
          src="/assets/footerAdornment.svg"
          className={classes.adorment}
        />
        <Grid
          container
          justifyContent="flex-end"
          spacing={2}
          className={classes.socialConatiner}
        >
          <Grid
            item
            component={"a"}
            href="https://www.facebook.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img
              alt="facebook logo"
              src="/assets/facebook.svg"
              className={classes.icon}
            />
          </Grid>
          <Grid
            item
            component={"a"}
            href="https://www.twitter.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img
              alt="twitter logo"
              src="/assets/twitter.svg"
              className={classes.icon}
            />
          </Grid>
          <Grid
            item
            component={"a"}
            href="https://www.instagram.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img
              alt="instagram logo"
              src="/assets/instagram.svg"
              className={classes.icon}
            />
          </Grid>
        </Grid>
      </footer>
    </>
  );
};

export default Footer;
