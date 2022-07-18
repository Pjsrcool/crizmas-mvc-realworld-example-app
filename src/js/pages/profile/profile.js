import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'crizmas-router';
import classNames from 'classnames';
export default class Profile extends Component {
  constructor() {
    super();

    this.setFollowing = () => {
      this.props.controller.setFollowing();
    };
  }

  render() {
    const {
      profile,
      isCurrentUser,
      isPending
    } = this.props.controller;
    const {
      children
    } = this.props;
    return /*#__PURE__*/React.createElement("div", {
      className: "profile-page"
    }, /*#__PURE__*/React.createElement("div", {
      className: "user-info"
    }, /*#__PURE__*/React.createElement("div", {
      className: "container"
    }, /*#__PURE__*/React.createElement("div", {
      className: "row"
    }, /*#__PURE__*/React.createElement("div", {
      className: "col-xs-12 col-md-10 offset-md-1"
    }, /*#__PURE__*/React.createElement("img", {
      src: profile.image,
      className: "user-img"
    }), /*#__PURE__*/React.createElement("h4", null, profile.username), /*#__PURE__*/React.createElement("p", null, profile.bio), isCurrentUser && /*#__PURE__*/React.createElement(Link, {
      className: "btn btn-sm btn-outline-secondary action-btn",
      to: "/settings"
    }, /*#__PURE__*/React.createElement("i", {
      className: "ion-gear-a"
    }), "\xA0 Edit Profile Settings"), !isCurrentUser && /*#__PURE__*/React.createElement("button", {
      className: classNames('btn btn-sm action-btn', {
        'btn-secondary': profile.following,
        'btn-outline-secondary': !profile.following
      }),
      onClick: this.setFollowing,
      disabled: isPending
    }, /*#__PURE__*/React.createElement("i", {
      className: "ion-plus-round"
    }), "\xA0", profile.following ? 'Unfollow' : 'Follow', " ", profile.username))))), children);
  }

}
Profile.propTypes = {
  controller: PropTypes.object.isRequired,
  children: PropTypes.any
};