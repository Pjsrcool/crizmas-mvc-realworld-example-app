import React from 'react';
import PropTypes from 'prop-types';

const TagList = ({
  article
}) => !!article.tagList.length && /*#__PURE__*/React.createElement("ul", {
  className: "tag-list"
}, article.tagList.map((tag, i) => /*#__PURE__*/React.createElement("li", {
  key: i,
  className: "tag-default tag-pill tag-outline"
}, tag)));

TagList.propTypes = {
  article: PropTypes.object.isRequired
};
export default TagList;