/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  useScrollTrigger,
  makeStyles,
  Tabs,
  Tab,
  Button,
  IconButton,
  Menu,
  MenuItem,
  useMediaQuery,
  useTheme,
  SwipeableDrawer,
  List,
  ListItem,
  ListItemText,
  Hidden,
  ClickAwayListener,
  Grow,
  Paper,
  Popper,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  ExpandMoreIcon,
  Grid,
  MenuList,
} from "@material-ui/core";

import Link from "./Link";
import MenuIcon from "@material-ui/icons/Menu";
import { LazyLoadComponent } from "react-lazy-load-image-component";

function ElevationScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const useStyles = makeStyles(theme => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "3em",
    [theme.breakpoints.down("md")]: {
      marginBottom: "2em",
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: "1.25em",
    },
  },

  logo: {
    height: "8em",
    [theme.breakpoints.down("md")]: {
      height: "7em",
    },
    [theme.breakpoints.down("xs")]: {
      height: "5.5em",
    },
  },
  logoContainer: {
    padding: 0,
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  tabContainer: {
    marginLeft: "auto",
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: "25px",
  },
  button: {
    ...theme.typography.estimate,
    borderRadius: "50px",
    marginLeft: "50px",
    marginRight: "25px",
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  menu: {
    backgroundColor: theme.palette.common.blue,
    color: "white",
    borderRadius: "0px",
  },
  menuItem: {
    ...theme.typography.tab,
    opacity: 0.7,
    "&:hover": {
      opacity: 1,
    },
  },
  drawerIcon: {
    height: "50px",
    width: "50px",
  },
  drawerIconContianer: {
    marginLeft: "auto",
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  drawer: {
    backgroundColor: theme.palette.common.blue,
  },
  drawerItem: {
    ...theme.typography.tab,
    color: "white",
    opacity: 0.7,
  },
  drawerItemEstimate: {
    backgroundColor: theme.palette.common.orange,
  },
  drawerItemSelected: {
    "& .MuiListItemText-root": { opacity: 1 },
  },
  appbar: {
    zIndex: theme.zIndex.modal + 1,
  },
}));

const Header = props => {
  const classes = useStyles(props);
  const theme = useTheme();
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  const [openDrawer, setOpenDrawer] = useState(false);
  const [anchorEl, setAnchorEl] = useState(<div />);
  const [openMenu, setOpenMenu] = useState(false);
  const [previousURL, setPreviousURL] = useState("");

  const handleChange = (e, newValue) => {
    props.setValue(newValue);
  };

  const handleClick = e => {
    setAnchorEl(e.currentTarget);
    setOpenMenu(true);
  };

  const handleMenuItemClick = (e, i) => {
    setAnchorEl(<div />);
    setOpenMenu(false);
    props.setSelectedIndex(i);
  };

  const handleClose = e => {
    setAnchorEl(<div />);
    setOpenMenu(false);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const menuOptions = [
    {
      name: "Custom Software Development",
      link: "/customsoftware",
      activeIndex: 1,
      selectedIndex: 0,
    },
    {
      name: "iOS/Android App Development",
      link: "/mobileapps",
      activeIndex: 1,
      selectedIndex: 1,
    },
    {
      name: "Website Development",
      link: "/websites",
      activeIndex: 1,
      selectedIndex: 2,
    },
  ];

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const routes = [
    { name: "Home", link: "/", activeIndex: 0 },
    {
      name: "Services",
      link: "/services",
      activeIndex: 1,
      ariaOwns: anchorEl ? "simple-menu" : undefined,
      ariaPopup: anchorEl ? "true" : undefined,
      mouseOver: event => handleClick(event),
    },
    { name: "The Revolution", link: "/revolution", activeIndex: 2 },
    { name: "About Us", link: "/about", activeIndex: 3 },
    { name: "Contact Us", link: "/contact", activeIndex: 4 },
  ];

  function checkPath() {
    [...menuOptions, ...routes].forEach(route => {
      switch (window.location.pathname) {
        case `${route.link}`:
          if (props.value !== route.activeIndex) {
            props.setValue(route.activeIndex);
            if (
              route.selectedIndex &&
              route.selectedIndex !== props.selectedIndex
            ) {
              props.setSelectedIndex(route.selectedIndex);
            }
          }
          break;
        case "/estimate":
          if (props.value !== false) {
            props.setValue(false);
          }

          break;
        default:
          break;
      }
    });
  }

  useEffect(() => {
    if (previousURL !== window.location.pathname) {
      setPreviousURL(window.location.pathname);
      ReactGA.pageview(window.location.pathname + window.location.search);
    }

    if (window.performance) {
      if (performance.navigation.type == 1) {
        checkPath();
      }
    }
  }, [props.value, menuOptions, props.selectedIndex, routes, props]);

  Router.events.on("routeChangeComplete", url => {
    checkPath();
  });

  return (
    <>
      <ElevationScroll>
        <AppBar position="fixed" className={classes.appbar}>
          <Toolbar disableGutters>
            <Button
              component={Link}
              href="/"
              onClick={() => props.setValue(0)}
              className={classes.logoContainer}
              disableRipple
            >
              <img
                className={classes.logo}
                src="/assets/logo/nativeCodeLabLogoWhite.png"
                alt="company logo"
              />
            </Button>
            <LazyLoadComponent>
              <Hidden mdDown>
                <React.Fragment>
                  <Tabs
                    value={props.value}
                    onChange={handleChange}
                    className={classes.tabContainer}
                    indicatorColor="primary"
                  >
                    {routes.map((route, index) => (
                      <Tab
                        key={`${route}${index}`}
                        className={classes.tab}
                        component={Link}
                        href={route.link}
                        label={route.name}
                        aria-owns={route.ariaOwns}
                        aria-haspopup={route.ariaPopup}
                        onMouseOver={route.mouseOver}
                        onMouseLeave={() => setOpenMenu(false)}
                      />
                    ))}
                  </Tabs>
                  <Button
                    component={Link}
                    href="/estimate"
                    variant="contained"
                    color="secondary"
                    className={classes.button}
                    onClick={() => {
                      props.setValue(false);
                      ReactGA.event({
                        category: "Estimate",
                        action: "Header Desktop Pressed",
                      });
                    }}
                  >
                    Free Estimate
                  </Button>
                  <Popper
                    open={openMenu}
                    anchorEl={anchorEl}
                    role={undefined}
                    transition
                    disablePortal
                    placement="bottom-start"
                  >
                    {({ TransitionProps, placement }) => (
                      <Grow
                        {...TransitionProps}
                        style={{ transformOrigin: "top left" }}
                      >
                        <Paper
                          classes={{ root: classes.menu }}
                          elevation={0}
                          style={{ zIndex: 1302 }}
                        >
                          <ClickAwayListener onClickAway={handleClose}>
                            <MenuList
                              disablePadding
                              onMouseLeave={handleClose}
                              onMouseOver={() => setOpenMenu(true)}
                              id="menu-list-grow"
                            >
                              {menuOptions.map((option, i) => (
                                <MenuItem
                                  key={`${option}${i}`}
                                  component={Link}
                                  href={option.link}
                                  classes={{ root: classes.menuItem }}
                                  onClick={event => {
                                    handleMenuItemClick(event, i);
                                    props.setValue(1);
                                    handleClose();
                                  }}
                                  selected={
                                    i === props.selectedIndex &&
                                    props.value === 1 &&
                                    window.location.pathname !== "/services"
                                  }
                                >
                                  {option.name}
                                </MenuItem>
                              ))}
                            </MenuList>
                          </ClickAwayListener>
                        </Paper>
                      </Grow>
                    )}
                  </Popper>
                </React.Fragment>
              </Hidden>
            </LazyLoadComponent>
            <LazyLoadComponent>
              <Hidden lgUp>
                <React.Fragment>
                  <SwipeableDrawer
                    disableBackdropTransition={!iOS}
                    disableDiscovery={iOS}
                    open={openDrawer}
                    onClose={() => setOpenDrawer(false)}
                    onOpen={() => setOpenDrawer(true)}
                    classes={{ paper: classes.drawer }}
                  >
                    <div className={classes.toolbarMargin} />
                    <List disablePadding>
                      {routes.map(route =>
                        route.name === "Services" ? (
                          <ExpansionPanel
                            elevation={0}
                            classes={{ root: classes.expansion }}
                            key={route.name}
                          >
                            <ExpansionPanelSummary
                              classes={{ root: classes.expansionSummary }}
                              expandIcon={<ExpandMoreIcon color="secondary" />}
                            >
                              <ListItemText
                                className={classes.drawerItem}
                                disableTypography
                                style={{
                                  opacity: props.value === 1 ? 1 : null,
                                }}
                                onClick={() => {
                                  setOpenDrawer(false);
                                  props.setValue(route.activeIndex);
                                }}
                              >
                                <Link color="inherit" href={route.link}>
                                  {route.name}
                                </Link>
                              </ListItemText>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails
                              classes={{ root: classes.expansionDetails }}
                            >
                              <Grid container direction="column">
                                {menuOptions.map(route => (
                                  <Grid
                                    item
                                    key={`${route}${route.selectedIndex}`}
                                  >
                                    <ListItem
                                      divider
                                      button
                                      component={Link}
                                      href={route.link}
                                      selected={
                                        props.selectedIndex ===
                                          route.selectedIndex &&
                                        props.value === 1 &&
                                        window.location.pathname !== "/services"
                                      }
                                      classes={{
                                        selected: classes.drawerItemSelected,
                                      }}
                                      onClick={() => {
                                        setOpenDrawer(false);
                                        props.setSelectedIndex(
                                          route.selectedIndex
                                        );
                                      }}
                                    >
                                      <ListItemText
                                        className={classes.drawerItem}
                                        disableTypography
                                      >
                                        {route.name
                                          .split(" ")
                                          .filter(
                                            word => word !== "Development"
                                          )
                                          .join(" ")}
                                        <br />
                                        <span
                                          style={{
                                            fontSize: "0.75em",
                                          }}
                                        >
                                          Development
                                        </span>
                                      </ListItemText>
                                    </ListItem>
                                  </Grid>
                                ))}
                              </Grid>
                            </ExpansionPanelDetails>
                          </ExpansionPanel>
                        ) : (
                          <ListItem
                            divider
                            key={`${route}${route.activeIndex}`}
                            button
                            component={Link}
                            href={route.link}
                            selected={props.value === route.activeIndex}
                            classes={{ selected: classes.drawerItemSelected }}
                            onClick={() => {
                              setOpenDrawer(false);
                              props.setValue(route.activeIndex);
                            }}
                          >
                            <ListItemText
                              className={classes.drawerItem}
                              disableTypography
                            >
                              {route.name}
                            </ListItemText>
                          </ListItem>
                        )
                      )}
                      <ListItem
                        onClick={() => {
                          setOpenDrawer(false);
                          props.setValue(false);
                          ReactGA.event({
                            category: "Estimate",
                            action: "Header Mobile Pressed",
                          });
                        }}
                        divider
                        button
                        component={Link}
                        classes={{
                          root: classes.drawerItemEstimate,
                          selected: classes.drawerItemSelected,
                        }}
                        href="/estimate"
                        selected={props.value === 5}
                      >
                        <ListItemText
                          className={classes.drawerItem}
                          disableTypography
                        >
                          Free Estimate
                        </ListItemText>
                      </ListItem>
                    </List>
                  </SwipeableDrawer>
                  <IconButton
                    className={classes.drawerIconContainer}
                    onClick={() => setOpenDrawer(!openDrawer)}
                    disableRipple
                  >
                    <MenuIcon className={classes.drawerIcon} />
                  </IconButton>
                </React.Fragment>
              </Hidden>
            </LazyLoadComponent>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </>
  );
};

export default Header;
