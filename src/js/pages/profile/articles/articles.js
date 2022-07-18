import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'crizmas-router';
import classNames from 'classnames';
import ArticlePreview from '../../../components/article-preview';
import Pagination from '../../../components/pagination';
export default class Articles extends Component {
  constructor() {
    super();

    this.setFollowing = () => {
      this.props.controller.setFollowing();
    };
  }

  render() {
    const {
      username,
      selectedTab,
      tabs,
      articles,
      pending,
      articleController,
      articlesOffset,
      articlesLimit,
      totalArticlesCount,
      getPageArticles
    } = this.props.controller;
    return /*#__PURE__*/React.createElement("div", {
      className: "container"
    }, /*#__PURE__*/React.createElement("div", {
      className: "row"
    }, /*#__PURE__*/React.createElement("div", {
      className: "col-xs-12 col-md-10 offset-md-1"
    }, /*#__PURE__*/React.createElement("div", {
      className: "articles-toggle"
    }, /*#__PURE__*/React.createElement("ul", {
      className: "nav nav-pills outline-active"
    }, /*#__PURE__*/React.createElement("li", {
      className: "nav-item"
    }, /*#__PURE__*/React.createElement(Link, {
      className: classNames('nav-link', {
        active: selectedTab === tabs.own
      }),
      to: `/@${encodeURIComponent(username)}`
    }, "My Articles")), /*#__PURE__*/React.createElement("li", {
      className: "nav-item"
    }, /*#__PURE__*/React.createElement(Link, {
      className: classNames('nav-link', {
        active: selectedTab === tabs.favorite
      }),
      to: `/@${encodeURIComponent(username)}/favorites`
    }, "Favorited Articles")))), articles && (articles.length ? articles.map((article, i) => /*#__PURE__*/React.createElement(ArticlePreview, {
      key: i,
      article: article,
      articleController: articleController
    })) : /*#__PURE__*/React.createElement("div", {
      className: "article-preview"
    }, "No articles are here... yet.")), pending.has('getArticles') && /*#__PURE__*/React.createElement("div", {
      className: "article-preview"
    }, "Loading articles..."), /*#__PURE__*/React.createElement(Pagination, {
      totalItemsCount: totalArticlesCount,
      offset: articlesOffset,
      itemsPerPage: articlesLimit,
      onChange: getPageArticles
    }))));
  }

}
Articles.propTypes = {
  controller: PropTypes.object.isRequired
};