function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'crizmas-router';
import { Input } from 'crizmas-components';
export default class Login extends Component {
  constructor() {
    super();

    this.onSubmit = e => {
      e.preventDefault();
      this.props.controller.form.submit();
    };
  }

  render() {
    const {
      form,
      serverErrors,
      isPending
    } = this.props.controller;
    return /*#__PURE__*/React.createElement("div", {
      className: "auth-page"
    }, /*#__PURE__*/React.createElement("div", {
      className: "container page"
    }, /*#__PURE__*/React.createElement("div", {
      className: "row"
    }, /*#__PURE__*/React.createElement("div", {
      className: "col-md-6 offset-md-3 col-xs-12"
    }, /*#__PURE__*/React.createElement("h1", {
      className: "text-xs-center"
    }, "Sign in"), /*#__PURE__*/React.createElement("p", {
      className: "text-xs-center"
    }, /*#__PURE__*/React.createElement(Link, {
      to: "/register"
    }, "Need an account?")), serverErrors && /*#__PURE__*/React.createElement("ul", {
      className: "error-messages"
    }, serverErrors.map((error, i) => /*#__PURE__*/React.createElement("li", {
      key: i
    }, error))), /*#__PURE__*/React.createElement("form", {
      onSubmit: this.onSubmit
    }, /*#__PURE__*/React.createElement("fieldset", {
      className: "form-group"
    }, /*#__PURE__*/React.createElement(Input, _extends({
      inputClassName: "form-control form-control-lg",
      type: "email",
      placeholder: "Email",
      disabled: isPending
    }, form.get('email')))), /*#__PURE__*/React.createElement("fieldset", {
      className: "form-group"
    }, /*#__PURE__*/React.createElement(Input, _extends({
      inputClassName: "form-control form-control-lg",
      type: "password",
      placeholder: "Password",
      disabled: isPending,
      debounce: 0
    }, form.get('password')))), /*#__PURE__*/React.createElement("button", {
      className: "btn btn-lg btn-primary pull-xs-right",
      disabled: isPending
    }, "Sign in"))))));
  }

}
Login.propTypes = {
  controller: PropTypes.object.isRequired
};