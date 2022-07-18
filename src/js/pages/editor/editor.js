function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Input } from 'crizmas-components';
export default class Editor extends Component {
  constructor() {
    super();

    this.onSubmit = e => {
      e.preventDefault();
      this.props.controller.form.submit();
    };

    this.onTagStringKeyPress = e => {
      if (e.key === 'Enter') {
        e.preventDefault();
        this.props.controller.form.get('tagString').submit();
      }
    };
  }

  render() {
    const {
      form,
      serverErrors,
      isPending,
      removeTag
    } = this.props.controller;
    const tagList = form.get('tagList').getValue();
    return /*#__PURE__*/React.createElement("div", {
      className: "editor-page"
    }, /*#__PURE__*/React.createElement("div", {
      className: "container page"
    }, /*#__PURE__*/React.createElement("div", {
      className: "row"
    }, /*#__PURE__*/React.createElement("div", {
      className: "col-md-10 offset-md-1 col-xs-12"
    }, serverErrors && /*#__PURE__*/React.createElement("ul", {
      className: "error-messages"
    }, serverErrors.map((error, i) => /*#__PURE__*/React.createElement("li", {
      key: i
    }, error))), /*#__PURE__*/React.createElement("form", {
      onSubmit: this.onSubmit
    }, /*#__PURE__*/React.createElement("fieldset", null, /*#__PURE__*/React.createElement("fieldset", {
      className: "form-group"
    }, /*#__PURE__*/React.createElement(Input, _extends({
      type: "text",
      inputClassName: "form-control form-control-lg",
      placeholder: "Article Title",
      disabled: isPending
    }, form.get('title')))), /*#__PURE__*/React.createElement("fieldset", {
      className: "form-group"
    }, /*#__PURE__*/React.createElement(Input, _extends({
      type: "text",
      inputClassName: "form-control",
      placeholder: "What's this article about?",
      disabled: isPending
    }, form.get('description')))), /*#__PURE__*/React.createElement("fieldset", {
      className: "form-group"
    }, /*#__PURE__*/React.createElement(Input, _extends({
      type: "textarea",
      inputClassName: "form-control",
      placeholder: "Write your article (in markdown)",
      inputProps: {
        rows: "8"
      },
      disabled: isPending
    }, form.get('body')))), /*#__PURE__*/React.createElement("fieldset", {
      className: "form-group"
    }, /*#__PURE__*/React.createElement(Input, _extends({
      type: "text",
      inputClassName: "form-control",
      placeholder: "Enter tags",
      disabled: isPending
    }, form.get('tagString'), {
      inputProps: {
        onKeyPress: this.onTagStringKeyPress
      }
    })), !!tagList.length && /*#__PURE__*/React.createElement("div", {
      className: "tag-list"
    }, tagList.map((tag, i) => /*#__PURE__*/React.createElement("span", {
      key: i,
      className: "tag-default tag-pill"
    }, /*#__PURE__*/React.createElement("i", {
      className: "ion-close-round",
      onClick: removeTag.bind(null, i)
    }), tag)))), /*#__PURE__*/React.createElement("button", {
      className: "btn btn-lg pull-xs-right btn-primary",
      disabled: isPending
    }, "Publish Article")))))));
  }

}
Editor.propTypes = {
  controller: PropTypes.object.isRequired
};