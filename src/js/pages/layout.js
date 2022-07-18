import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'crizmas-router';
import { currentUser } from '../models/user';

const Layout = ({
  router,
  children
}) => /*#__PURE__*/React.createElement("div", null, router.isTransitioning && /*#__PURE__*/React.createElement("div", {
  className: "transition-overlay"
}), /*#__PURE__*/React.createElement("nav", {
  className: "navbar navbar-light"
}, /*#__PURE__*/React.createElement("div", {
  className: "container"
}, /*#__PURE__*/React.createElement(Link, {
  className: "navbar-brand",
  to: "/"
}, "conduit"), /*#__PURE__*/React.createElement("ul", {
  className: "nav navbar-nav pull-xs-right"
}, /*#__PURE__*/React.createElement("li", {
  className: "nav-item"
}, /*#__PURE__*/React.createElement(Link, {
  className: "nav-link",
  to: "/"
}, "Home")), currentUser.isAuthenticated && [/*#__PURE__*/React.createElement("li", {
  key: "new-post",
  className: "nav-item"
}, /*#__PURE__*/React.createElement(Link, {
  className: "nav-link",
  to: "/editor"
}, /*#__PURE__*/React.createElement("i", {
  className: "ion-compose"
}), "\xA0New Article")), /*#__PURE__*/React.createElement("li", {
  key: "settings",
  className: "nav-item"
}, /*#__PURE__*/React.createElement(Link, {
  className: "nav-link",
  to: "/settings"
}, /*#__PURE__*/React.createElement("i", {
  className: "ion-gear-a"
}), "\xA0Settings")), /*#__PURE__*/React.createElement("li", {
  key: "profile",
  className: "nav-item"
}, /*#__PURE__*/React.createElement(Link, {
  className: "nav-link",
  to: `/@${encodeURIComponent(currentUser.username)}`
}, /*#__PURE__*/React.createElement("img", {
  className: "user-pic",
  src: currentUser.image
}), currentUser.username))], !currentUser.isAuthenticated && [/*#__PURE__*/React.createElement("li", {
  key: "sign-in",
  className: "nav-item"
}, /*#__PURE__*/React.createElement(Link, {
  className: "nav-link",
  to: "/login"
}, "Sign in")), /*#__PURE__*/React.createElement("li", {
  key: "sign-up",
  className: "nav-item"
}, /*#__PURE__*/React.createElement(Link, {
  className: "nav-link",
  to: "/register"
}, "Sign up"))]))), children, /*#__PURE__*/React.createElement("footer", null, /*#__PURE__*/React.createElement("div", {
  className: "container"
}, /*#__PURE__*/React.createElement(Link, {
  to: "/",
  className: "logo-font"
}, "conduit"), /*#__PURE__*/React.createElement("span", {
  className: "attribution"
}, "An interactive learning project from ", /*#__PURE__*/React.createElement("a", {
  href: "https://thinkster.io"
}, "Thinkster"), ". Code & design licensed under MIT."))));

Layout.propTypes = {
  router: PropTypes.object.isRequired,
  children: PropTypes.any
};
export default Layout;