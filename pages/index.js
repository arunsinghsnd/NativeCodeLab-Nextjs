/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Head from "next/head";
import { Grid, makeStyles, useMediaQuery, useTheme } from "@material-ui/core";

import HeroBlock from "../src/pages/Home/HeroBlock";
import CustomSoftwareBlock from "../src/pages/Home/CustomSoftwareBlock";
import MobileBlock from "../src/pages/Home/MobileBlock";
import WebsiteBlock from "../src/pages/Home/WebsiteBlock";
import RevolutionBlock from "../src/pages/Home/RevolutionBlock";
import InfoBlock from "../src/pages/Home/InfoBlock";
import CallToAction from "../src/ui/CallToAction";
import { LazyLoadComponent } from "react-lazy-load-image-component";

const useStyles = makeStyles(theme => ({
  mainContainer: {
    marginTop: "5em",
    [theme.breakpoints.down("md")]: {
      marginTop: "3em",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "2em",
    },
  },
}));

const LandingPage = props => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  const placeholder = <div style={{ height: "75em", width: "100%" }} />;

  return (
    <Grid container direction="column" className={classes.mainContainer}>
      <Head>
        <title key="title">
          Custom Software, Mobile Apps, and Websites | NativeCodeLab
        </title>
        <meta
          name="description"
          key="description"
          content="Pristine software custom-designed from the ground up with cutting-edge optimizations. Use our free estimate calculator to check your project cost!"
        />
        <meta
          property="og:title"
          content="Bringing West Coast Technology to the Midwest | NativeCodeLab"
          key="og:title"
        />
        <meta
          property="og:url"
          key="og:url"
          content="nativecodelab.netlify.app"
        />
        <link
          rel="canonical"
          key="canonical"
          href="nativecodelab.netlify.app"
        />
      </Head>

      <HeroBlock
        setValue={props.setValue}
        setSelectedIndex={props.setSelectedIndex}
      />
      <CustomSoftwareBlock
        setValue={props.setValue}
        setSelectedIndex={props.setSelectedIndex}
      />
      <LazyLoadComponent
        placeholder={placeholder}
        threshold={matchesSM ? 200 : matchesXS ? 100 : 750}
      >
        <MobileBlock
          setValue={props.setValue}
          setSelectedIndex={props.setSelectedIndex}
        />
      </LazyLoadComponent>
      <LazyLoadComponent
        placeholder={placeholder}
        threshold={matchesSM ? 200 : matchesXS ? 100 : 750}
      >
        <WebsiteBlock
          setValue={props.setValue}
          setSelectedIndex={props.setSelectedIndex}
        />
      </LazyLoadComponent>
      <LazyLoadComponent
        placeholder={placeholder}
        threshold={matchesSM ? 200 : matchesXS ? 100 : 750}
      >
        <RevolutionBlock
          setValue={props.setValue}
          setSelectedIndex={props.setSelectedIndex}
        />
      </LazyLoadComponent>
      <LazyLoadComponent
        placeholder={placeholder}
        threshold={matchesSM ? 200 : matchesXS ? 100 : 750}
      >
        <InfoBlock
          setValue={props.setValue}
          setSelectedIndex={props.setSelectedIndex}
        />
      </LazyLoadComponent>
      <LazyLoadComponent placeholder={placeholder}>
        <Grid item>
          {/*-----Call To Action Block-----*/}
          <CallToAction setValue={props.setValue} />
        </Grid>
      </LazyLoadComponent>
    </Grid>
  );
};

export default LandingPage;
