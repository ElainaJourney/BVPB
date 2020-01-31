/*eslint-disable*/
import React from "react";
// react components for routing our app without refresh
import { Link } from "gatsby";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";

// React icons
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.jsx";
import Button from "components/CustomButtons/Button.jsx";

import headerLinksStyle from "assets/jss/material-kit-react/components/headerLinksStyle.jsx";

function HeaderLinks({ ...props }) {
  const { classes } = props;
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="Buildings"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={Apps}
          dropdownList={[
            <Link to="/" className={classes.dropdownLink}>
              All of our options
            </Link>,
            <Link to="/" className={classes.dropdownLink}>
              Derksen
            </Link>,
            <Link to="/" className={classes.dropdownLink}>
              Eagle
            </Link>,
            <Link to="/" className={classes.dropdownLink}>
              Yoderbuilt
            </Link>
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
          <Link to="/" className={classes.navLink}>
              Get more info
          </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-facebook"
          title="Follow us on facebook"
          placement={typeof window !== 'undefined' && window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.facebook.com/Derksen-Berryville-Portable-Buildings-829349023877325"
            target="_blank"
            className={classes.navLink}
          >
            <FaFacebook/>
          </Button>
        </Tooltip>
      </ListItem>
    </List>
  );
}

export default withStyles(headerLinksStyle)(HeaderLinks);
