import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ArticlePreview from '../../components/article-preview';
import Pagination from '../../components/pagination';
export default class Home extends Component {
  constructor() {
    super();

    this.selectTab = (tab, e) => {
      e.preventDefault();
      this.props.controller.selectTab(tab);
    };

    this.onTagClick = (tag, e) => {
      e.preventDefault();
      this.props.controller.selectTag(tag);
    };
  }

  render() {
    const {
      currentUser,
      selectedTab,
      tabs,
      articles,
      pending,
      tags,
      selectedTag,
      articleController,
      articlesOffset,
      articlesLimit,
      totalArticlesCount,
      getPageArticles
    } = this.props.controller;
    return /*#__PURE__*/React.createElement("div", {
      className: "home-page"
    }, /*#__PURE__*/React.createElement("div", {
      className: "banner"
    }, /*#__PURE__*/React.createElement("div", {
      className: "container"
    }, /*#__PURE__*/React.createElement("h1", {
      className: "logo-font"
    }, "conduit"), /*#__PURE__*/React.createElement("p", null, "A place to share your knowledge."))), /*#__PURE__*/React.createElement("div", {
      className: "container page"
    }, /*#__PURE__*/React.createElement("div", {
      className: "row"
    }, /*#__PURE__*/React.createElement("div", {
      className: "col-md-9"
    }, /*#__PURE__*/React.createElement("div", {
      className: "feed-toggle"
    }, /*#__PURE__*/React.createElement("ul", {
      className: "nav nav-pills outline-active"
    }, currentUser.isAuthenticated && /*#__PURE__*/React.createElement("li", {
      className: "nav-item"
    }, /*#__PURE__*/React.createElement("a", {
      className: classNames('nav-link', {
        active: selectedTab === tabs.own
      }),
      href: "",
      onClick: this.selectTab.bind(this, tabs.own)
    }, "Your Feed")), /*#__PURE__*/React.createElement("li", {
      className: "nav-item"
    }, /*#__PURE__*/React.createElement("a", {
      className: classNames('nav-link', {
        active: selectedTab === tabs.global
      }),
      href: "",
      onClick: this.selectTab.bind(this, tabs.global)
    }, "Global Feed")), selectedTab === tabs.tag && /*#__PURE__*/React.createElement("li", {
      className: "nav-item"
    }, /*#__PURE__*/React.createElement("a", {
      className: "nav-link active"
    }, /*#__PURE__*/React.createElement("i", {
      className: "ion-pound"
    }), " ", selectedTag)))), articles && (articles.length ? articles.map((article, i) => /*#__PURE__*/React.createElement(ArticlePreview, {
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
    })), /*#__PURE__*/React.createElement("div", {
      className: "col-md-3"
    }, /*#__PURE__*/React.createElement("div", {
      className: "sidebar"
    }, /*#__PURE__*/React.createElement("p", null, "Popular Tags"), pending.has('getTags') && /*#__PURE__*/React.createElement("p", null, "Loading tags..."), !pending.has('getTags') && (tags.length ? /*#__PURE__*/React.createElement("div", {
      className: "tag-list"
    }, tags.map((tag, i) => /*#__PURE__*/React.createElement("a", {
      key: i,
      href: "",
      className: "tag-pill tag-default",
      onClick: this.onTagClick.bind(this, tag)
    }, tag))) : /*#__PURE__*/React.createElement("p", null, "No tags yet.")))))));
  }

}
Home.propTypes = {
  controller: PropTypes.object.isRequired
};