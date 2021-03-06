import React from "react";
import { IconButton, Typography, Container, Link } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

function Copyright() {
  return (
    <Typography variant="body2">
      {"Copyright © "}
      <Link
        color="inherit"
        href="https://kovacsmarkakos.github.io/popular-games"
      >
        Popular Games
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  footer: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100vw",
    height: "18vh",
    padding: theme.spacing(3, 2),
    marginTop: theme.spacing(2),
    backgroundColor: theme.palette.grey[900],
    color: theme.palette.grey[400],
    "@media (min-width: 1280px)": {
      padding: theme.spacing(3, 10),
      height: "16vh",
    },
  },
  footerIcons: {
    display: "flex",
    justifyContent: "flex-end",
  },
  iconButton: {
    color: theme.palette.grey[200],
    "&:hover": {
      backgroundColor: theme.palette.grey[800],
      color: "#f5da55",
    },
  },
  madeBy: {
    color: "#fff",
  },
  a: {
    textDecoration: "none",
    color: "#fff",
    "&:hover": {
      color: "#f5da55",
    },
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Container>
        <Typography variant="body1" className={classes.madeBy}>
          Made by{" "}
          <a
            href="https://markkovacs.com"
            target="_blank"
            rel="noopener noreferrer"
            className={classes.a}
          >
            Mark Kovacs
          </a>
        </Typography>
        <Copyright />
      </Container>
      <Container className={classes.footerIcons}>
        <a
          href="https://github.com/kovacsmarkakos"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconButton aria-label="linkedin" className={classes.iconButton}>
            <GitHubIcon />
          </IconButton>
        </a>
        <a
          href="https://www.linkedin.com/in/márk-kovács-0363b61b7/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconButton aria-label="github" className={classes.iconButton}>
            <LinkedInIcon />
          </IconButton>
        </a>
      </Container>
    </footer>
  );
};

export default Footer;
