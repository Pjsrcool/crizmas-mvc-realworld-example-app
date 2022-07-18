function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'crizmas-router';
import { Input } from 'crizmas-components';
import marked from 'marked';
import classNames from 'classnames';
import ArticleAuthor from '../../components/article-author';
import TagList from '../../components/tag-list';
import { longDate } from '../../date-utils';
export default class Article extends Component {
  constructor() {
    super();

    this.onDelete = () => {
      this.props.controller.deleteArticle();
    };

    this.setFollowing = () => {
      this.props.controller.setFollowing();
    };

    this.setFavorite = () => {
      this.props.controller.setFavorite();
    };

    this.onSubmit = e => {
      e.preventDefault();
      this.props.controller.form.submit();
    };
  }

  renderArticleMeta() {
    const {
      article,
      currentUser,
      pending
    } = this.props.controller;
    return /*#__PURE__*/React.createElement("div", {
      className: "article-meta"
    }, /*#__PURE__*/React.createElement(ArticleAuthor, {
      article: article
    }), article.author.username === currentUser.username && /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(Link, {
      to: `/editor/${article.slug}`,
      className: "btn btn-sm btn-outline-secondary"
    }, /*#__PURE__*/React.createElement("i", {
      className: "ion-edit"
    }), "\xA0 Edit Article"), "\xA0", /*#__PURE__*/React.createElement("button", {
      className: "btn btn-sm btn-outline-danger",
      onClick: this.onDelete,
      disabled: pending.has('deleteArticle')
    }, /*#__PURE__*/React.createElement("i", {
      className: "ion-trash-a"
    }), "\xA0 Delete Article")), article.author.username !== currentUser.username && /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("button", {
      className: classNames('btn btn-sm', {
        'btn-secondary': article.author.following,
        'btn-outline-secondary': !article.author.following
      }),
      onClick: this.setFollowing,
      disabled: pending.has('setFollowing')
    }, /*#__PURE__*/React.createElement("i", {
      className: "ion-plus-round"
    }), "\xA0", article.author.following ? 'Unfollow' : 'Follow', " ", article.author.username), "\xA0", /*#__PURE__*/React.createElement("button", {
      className: classNames('btn btn-sm', {
        'btn-primary': article.favorited,
        'btn-outline-primary': !article.favorited
      }),
      onClick: this.setFavorite,
      disabled: pending.has('setFavorite')
    }, /*#__PURE__*/React.createElement("i", {
      className: "ion-heart"
    }), "\xA0", article.favorited ? 'Unfavorite Article' : 'Favorite Article', "(", article.favoritesCount, ")")));
  }

  render() {
    const {
      article,
      article: {
        comments
      },
      currentUser,
      form,
      deleteComment
    } = this.props.controller;
    return /*#__PURE__*/React.createElement("div", {
      className: "article-page"
    }, /*#__PURE__*/React.createElement("div", {
      className: "banner"
    }, /*#__PURE__*/React.createElement("div", {
      className: "container"
    }, /*#__PURE__*/React.createElement("h1", null, article.title), this.renderArticleMeta())), /*#__PURE__*/React.createElement("div", {
      className: "container page"
    }, /*#__PURE__*/React.createElement("div", {
      className: "row article-content"
    }, /*#__PURE__*/React.createElement("div", {
      className: "col-md-12"
    }, /*#__PURE__*/React.createElement("div", {
      dangerouslySetInnerHTML: {
        __html: marked(article.body)
      }
    }), /*#__PURE__*/React.createElement(TagList, {
      article: article
    }))), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement("div", {
      className: "article-actions"
    }, this.renderArticleMeta()), /*#__PURE__*/React.createElement("div", {
      className: "row"
    }, /*#__PURE__*/React.createElement("div", {
      className: "col-xs-12 col-md-8 offset-md-2"
    }, /*#__PURE__*/React.createElement("form", {
      className: "card comment-form",
      onSubmit: this.onSubmit
    }, /*#__PURE__*/React.createElement("div", {
      className: "card-block"
    }, /*#__PURE__*/React.createElement(Input, _extends({
      type: "textarea",
      inputClassName: "form-control",
      placeholder: "Write a comment...",
      inputProps: {
        rows: "3"
      }
    }, form))), /*#__PURE__*/React.createElement("div", {
      className: "card-footer"
    }, /*#__PURE__*/React.createElement("img", {
      src: currentUser.image,
      className: "comment-author-img"
    }), /*#__PURE__*/React.createElement("button", {
      className: "btn btn-sm btn-primary"
    }, "Post Comment"))), comments && !!comments.length && comments.map((comment, i) => /*#__PURE__*/React.createElement("div", {
      key: i,
      className: "card"
    }, /*#__PURE__*/React.createElement("div", {
      className: "card-block"
    }, /*#__PURE__*/React.createElement("p", {
      className: "card-text"
    }, comment.body)), /*#__PURE__*/React.createElement("div", {
      className: "card-footer"
    }, /*#__PURE__*/React.createElement(Link, {
      to: `/@${encodeURIComponent(comment.author.username)}`,
      className: "comment-author"
    }, /*#__PURE__*/React.createElement("img", {
      src: comment.author.image,
      className: "comment-author-img"
    })), "\xA0\xA0", /*#__PURE__*/React.createElement(Link, {
      to: `/@${encodeURIComponent(comment.author.username)}`,
      className: "comment-author"
    }, comment.author.username), /*#__PURE__*/React.createElement("span", {
      className: "date-posted"
    }, longDate(comment.createdAt)), comment.author.username === currentUser.username && /*#__PURE__*/React.createElement("span", {
      className: "mod-options"
    }, /*#__PURE__*/React.createElement("i", {
      className: "ion-trash-a",
      onClick: deleteComment.bind(null, comment.id)
    })))))))));
  }

}
Article.propTypes = {
  controller: PropTypes.object.isRequired
};