/* eslint-disable react/no-unescaped-entities */
import React from "react";
import {
  Grid,
  makeStyles,
  useTheme,
  Typography,
  useMediaQuery,
  Hidden,
  Avatar,
} from "@material-ui/core";

import CallToAction from "../src/ui/CallToAction";
import Image from "next/image";

const useStyles = makeStyles(theme => ({
  missionStatement: {
    fontStyle: "italic",
    fontWeight: 300,
    fontSize: "1.5em",
    lineHeight: 1.4,
    maxWidth: "50em",
  },
  arrowContainer: {
    marginTop: "0.5em",
  },
  rowContainer: {
    paddingLeft: "5em",
    paddingRight: "5em",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "1.5em",
      paddingRight: "1.5em",
    },
  },
  itemContainer: {
    maxWidth: "34em",
  },
  avatar: {
    height: "25em",
    width: "25em",
    [theme.breakpoints.down("sm")]: {
      height: "20em",
      width: "20em",
      maxHeight: 300,
      maxWidth: 300,
    },
  },
}));

const About = props => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Grid container direction="column">
      <Grid
        item
        className={classes.rowContainer}
        style={{ marginTop: matchesMD ? "1em" : "2em" }}
      >
        <Typography variant="h2" align={matchesMD ? "center" : undefined}>
          About us
        </Typography>
      </Grid>
      <Grid
        item
        container
        justifyContent="center"
        className={classes.rowContainer}
        style={{ marginTop: "3em" }}
      >
        <Typography
          variant="h4"
          align="center"
          className={classes.missionStatement}
        >
          Whether it be person to person, business to consumer, or an individual
          to their interests, technology is meant to bring us closer to what we
          care about in the best way possible. Arc Development will use that
          principle to provide fast, modern, nexpensive, and aesthetic software
          to the Midwest and beyond.
        </Typography>
      </Grid>
      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        alignItems={matchesMD ? "center" : undefined}
        className={classes.rowContainer}
        justifyContent="space-around"
        style={{ marginTop: "10em", marginBottom: "10em" }}
      >
        <Grid item>
          <Grid
            item
            container
            direction="column"
            lg
            style={{ maxWidth: "35em" }}
          >
            <Grid item>
              <Typography
                align={matchesMD ? "center" : undefined}
                variant="h4"
                gutterBottom
              >
                History
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="body2"
                align={matchesMD ? "center" : undefined}
                paragraph
                style={{ fontWeight: 700, fontStyle: "italic" }}
              >
                We're the new kid on the block
              </Typography>
              <Typography
                variant="body2"
                align={matchesMD ? "center" : undefined}
                paragraph
              >
                Founded in 2019, we're ready to get our hands on the world's
                business problems.
              </Typography>
              <Typography
                variant="body2"
                align={matchesMD ? "center" : undefined}
                paragraph
              >
                It all started with one question: Why aren't all businesses
                using available technology? There are many different answers to
                that question: economic barriers, social barriers,
              </Typography>
              <Typography
                variant="body2"
                align={matchesMD ? "center" : undefined}
                paragraph
              >
                We aim to be a powerful force in overcoming these obstacles.
                Recent developments in software engineering and computing power,
                compounded by the proliferation of smart phones, has opened up
                infinite worlds of possibility. Things that have always been
                done by hand can now be done digitally and automatically, and
                completely new methods of interaction are created daily. Taking
                full advantage of these advancements is the name of the game.
              </Typography>
              <Typography
                variant="body2"
                align={matchesMD ? "center" : undefined}
                paragraph
              >
                All this change can be a lot to keep up with, and that's where
                we come in.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid item container justifyContent="center" lg>
            <Image
              src="/public/assets/history.svg"
              alt="quill pen sitting on top of book"
              style={{ maxHeight: matchesMD ? 200 : "22em" }}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction="column"
        alignItems="center"
        className={classes.rowContainer}
        style={{ marginBottom: "15em" }}
      >
        <Grid item>
          <Typography variant="h4" gutterBottom align="center">
            Team
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body2" paragraph align="center">
            Arun Kumar Singh, Founder
          </Typography>
          <Typography variant="body2" paragraph align="center">
            I started Coding when I was 17 years old.
          </Typography>
        </Grid>
        <Grid item>
          <Avatar
            alt="founder"
            src="/public/assets/founderPic.jpg"
            className={classes.avatar}
          />
        </Grid>
        <Grid item container justifyContent={matchesMD ? "column" : undefined}>
          <Hidden lgUp>
            <Grid item lg style={{ maxWidth: "45em", padding: "1.25em" }}>
              <Typography variant="body2" align="center" paragraph>
                I taught myself basic coding from my university in B.Tech, and
                ever since then my passion has solely been set on learning -
                learning about computers, learning mathematics and philosophy,
                studying desgin, always just learning.
              </Typography>
              <Typography variant="body2" align="center" paragraph>
                Now I'm ready to apply everythings I've learned, and to help
                others with the intuition I have developed.
              </Typography>
            </Grid>
          </Hidden>
          <Grid
            item
            container
            direction="column"
            lg
            alignItems={matchesMD ? "center" : undefined}
            style={{ marginBottom: matchesMD ? "2.5em" : 0 }}
          >
            <Grid item>
              <Image
                src="/public/assets/yearbook.svg"
                alt="year book page about founder"
                style={{ maxWidth: matchesMD ? 300 : undefined }}
              />
            </Grid>
            <Grid item>
              <Typography variant="caption">
                a page from my Shopomore yearbook
              </Typography>
            </Grid>
          </Grid>
          <Hidden mdDown>
            <Grid item lg style={{ maxWidth: "45em", padding: "1.25em" }}>
              <Typography variant="body2" align="center" paragraph>
                I taught myself basic coding from my university in B.Tech, and
                ever since then my passion has solely been set on learning -
                learning about computers, learning mathematics and philosophy,
                studying desgin, always just learning.
              </Typography>
              <Typography variant="body2" align="center" paragraph>
                Now I'm ready to apply everythings I've learned, and to help
                others with the intuition I have developed.
              </Typography>
            </Grid>
          </Hidden>
          <Grid
            item
            container
            direction="column"
            lg
            alignItems={matchesMD ? "center" : "flex-end"}
          >
            <Grid item>
              <Image
                src="/public/assets/puppy.svg"
                style={{ maxWidth: matchesMD ? 300 : undefined }}
                alt="grey spotted puppy"
              />
            </Grid>
            <Grid item>
              <Typography variant="caption">
                my miniature dapple dachshund, Sterling
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <CallToAction setValue={props.setValue} />
      </Grid>
    </Grid>
  );
};

export default About;
