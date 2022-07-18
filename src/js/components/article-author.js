import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'crizmas-router';
import { longDate } from '../date-utils';

const ArticleAuthor = ({
  article
}) => /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(Link, {
  to: `/@${encodeURIComponent(article.author.username)}`
}, /*#__PURE__*/React.createElement("img", {
  src: article.author.image
}), "\xA0"), /*#__PURE__*/React.createElement("div", {
  className: "info"
}, /*#__PURE__*/React.createElement(Link, {
  to: `/@${encodeURIComponent(article.author.username)}`,
  className: "author"
}, article.author.username), /*#__PURE__*/React.createElement("span", {
  className: "date"
}, longDate(article.createdAt))));

ArticleAuthor.propTypes = {
  article: PropTypes.object.isRequired
};
export default ArticleAuthor;