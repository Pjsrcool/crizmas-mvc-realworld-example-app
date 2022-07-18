import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'crizmas-router';
import classNames from 'classnames';
import ArticleAuthor from './article-author';
import TagList from './tag-list';
export default class ArticlePreview extends Component {
  constructor() {
    super();
    this.state = {
      isFavoritePending: false
    };

    this.setFavorite = () => {
      this.setState({
        isFavoritePending: true
      });
      this.props.articleController.setFavorite(this.props.article).then(() => {
        this.setState({
          isFavoritePending: false
        });
      });
    };
  }

  render() {
    const {
      article
    } = this.props;
    return /*#__PURE__*/React.createElement("div", {
      className: "article-preview"
    }, /*#__PURE__*/React.createElement("div", {
      className: "article-meta"
    }, /*#__PURE__*/React.createElement(ArticleAuthor, {
      article: article
    }), /*#__PURE__*/React.createElement("button", {
      className: classNames('btn btn-sm pull-xs-right', {
        'btn-primary': article.favorited,
        'btn-outline-primary': !article.favorited
      }),
      onClick: this.setFavorite,
      disabled: this.state.isFavoritePending
    }, /*#__PURE__*/React.createElement("i", {
      className: "ion-heart"
    }), " ", article.favoritesCount)), /*#__PURE__*/React.createElement(Link, {
      to: `/article/${article.slug}`,
      className: "preview-link"
    }, /*#__PURE__*/React.createElement("h1", null, article.title), /*#__PURE__*/React.createElement("p", null, article.description), /*#__PURE__*/React.createElement("span", null, "Read more..."), /*#__PURE__*/React.createElement(TagList, {
      article: article
    })));
  }

}
ArticlePreview.propTypes = {
  article: PropTypes.object.isRequired,
  articleController: PropTypes.object.isRequired
};