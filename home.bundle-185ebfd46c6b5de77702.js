(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{24:function(e,t,a){var l;
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/!function(){"use strict";var a={}.hasOwnProperty;function s(){for(var e=[],t=0;t<arguments.length;t++){var l=arguments[t];if(l){var r=typeof l;if("string"===r||"number"===r)e.push(l);else if(Array.isArray(l)&&l.length){var n=s.apply(null,l);n&&e.push(n)}else if("object"===r)for(var i in l)a.call(l,i)&&l[i]&&e.push(i)}}return e.join(" ")}e.exports?(s.default=s,e.exports=s):void 0===(l=function(){return s}.apply(t,[]))||(e.exports=l)}()},28:function(e,t,a){"use strict";a.d(t,"a",(function(){return p}));var l=a(0),s=a.n(l),r=a(3),n=a.n(r),i=a(4),c=a(24),o=a.n(c),m=a(29),u=a(30);class p extends l.Component{constructor(){super(),this.state={isFavoritePending:!1},this.setFavorite=()=>{this.setState({isFavoritePending:!0}),this.props.articleController.setFavorite(this.props.article).then(()=>{this.setState({isFavoritePending:!1})})}}render(){const{article:e}=this.props;return s.a.createElement("div",{className:"article-preview"},s.a.createElement("div",{className:"article-meta"},s.a.createElement(m.a,{article:e}),s.a.createElement("button",{className:o()("btn btn-sm pull-xs-right",{"btn-primary":e.favorited,"btn-outline-primary":!e.favorited}),onClick:this.setFavorite,disabled:this.state.isFavoritePending},s.a.createElement("i",{className:"ion-heart"})," ",e.favoritesCount)),s.a.createElement(i.a,{to:"/article/"+e.slug,className:"preview-link"},s.a.createElement("h1",null,e.title),s.a.createElement("p",null,e.description),s.a.createElement("span",null,"Read more..."),s.a.createElement(u.a,{article:e})))}}p.propTypes={article:n.a.object.isRequired,articleController:n.a.object.isRequired}},31:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var l=a(0),s=a.n(l),r=a(3),n=a.n(r),i=a(24),c=a.n(i);class o extends l.Component{onPageClick(e,t){t.preventDefault(),this.props.onChange({offset:e*this.props.itemsPerPage})}render(){const{totalItemsCount:e,offset:t,itemsPerPage:a}=this.props,l=Math.ceil(e/a);if(l<=1)return!1;const r=Math.trunc(t/a);return s.a.createElement("nav",null,s.a.createElement("ul",{className:"pagination"},Array.from({length:l},(e,t)=>s.a.createElement("li",{key:t,className:c()("page-item",{active:t===r})},s.a.createElement("a",{href:"",className:"page-link",onClick:this.onPageClick.bind(this,t)},t+1)))))}}o.propTypes={totalItemsCount:n.a.number.isRequired,offset:n.a.number.isRequired,itemsPerPage:n.a.number.isRequired,onChange:n.a.func.isRequired}},40:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return u}));var l=a(0),s=a.n(l),r=a(3),n=a.n(r),i=a(24),c=a.n(i),o=a(28),m=a(31);class u extends l.Component{constructor(){super(),this.selectTab=(e,t)=>{t.preventDefault(),this.props.controller.selectTab(e)},this.onTagClick=(e,t)=>{t.preventDefault(),this.props.controller.selectTag(e)}}render(){const{currentUser:e,selectedTab:t,tabs:a,articles:l,pending:r,tags:n,selectedTag:i,articleController:u,articlesOffset:p,articlesLimit:g,totalArticlesCount:d,getPageArticles:f}=this.props.controller;return s.a.createElement("div",{className:"home-page"},s.a.createElement("div",{className:"banner"},s.a.createElement("div",{className:"container"},s.a.createElement("h1",{className:"logo-font"},"conduit"),s.a.createElement("p",null,"A place to share your knowledge."))),s.a.createElement("div",{className:"container page"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-md-9"},s.a.createElement("div",{className:"feed-toggle"},s.a.createElement("ul",{className:"nav nav-pills outline-active"},e.isAuthenticated&&s.a.createElement("li",{className:"nav-item"},s.a.createElement("a",{className:c()("nav-link",{active:t===a.own}),href:"",onClick:this.selectTab.bind(this,a.own)},"Your Feed")),s.a.createElement("li",{className:"nav-item"},s.a.createElement("a",{className:c()("nav-link",{active:t===a.global}),href:"",onClick:this.selectTab.bind(this,a.global)},"Global Feed")),t===a.tag&&s.a.createElement("li",{className:"nav-item"},s.a.createElement("a",{className:"nav-link active"},s.a.createElement("i",{className:"ion-pound"})," ",i)))),l&&(l.length?l.map((e,t)=>s.a.createElement(o.a,{key:t,article:e,articleController:u})):s.a.createElement("div",{className:"article-preview"},"No articles are here... yet.")),r.has("getArticles")&&s.a.createElement("div",{className:"article-preview"},"Loading articles..."),s.a.createElement(m.a,{totalItemsCount:d,offset:p,itemsPerPage:g,onChange:f})),s.a.createElement("div",{className:"col-md-3"},s.a.createElement("div",{className:"sidebar"},s.a.createElement("p",null,"Popular Tags"),r.has("getTags")&&s.a.createElement("p",null,"Loading tags..."),!r.has("getTags")&&(n.length?s.a.createElement("div",{className:"tag-list"},n.map((e,t)=>s.a.createElement("a",{key:t,href:"",className:"tag-pill tag-default",onClick:this.onTagClick.bind(this,e)},e))):s.a.createElement("p",null,"No tags yet.")))))))}}u.propTypes={controller:n.a.object.isRequired}},56:function(e,t,a){"use strict";a.r(t);var l=a(22),s=a(25),r=a(5),n=a(6);var i=a(2),c=a(26),o=a(32);const m={own:Symbol(),global:Symbol(),tag:Symbol()};t.default=Object(l.a)((function(){const e={articlesOffset:0,articlesLimit:10,totalArticlesCount:0,tabs:m,selectedTab:i.b.isAuthenticated?m.own:m.global,currentUser:i.b,articles:null,tags:null,selectedTag:null,articleController:o.a,onEnter:()=>{e.getArticles(),e.getTags()},getArticles:()=>(e.selectedTab===m.own?t:e.selectedTab===m.global?a:l)().then(({articles:t,articlesCount:a})=>{e.articles=t.map(e=>new c.a(e)),e.totalArticlesCount=a})},t=()=>s.h({offset:e.articlesOffset,limit:e.articlesLimit}),a=()=>s.f({offset:e.articlesOffset,limit:e.articlesLimit}),l=()=>s.i({offset:e.articlesOffset,limit:e.articlesLimit,tag:e.selectedTag});return e.getTags=()=>Object(r.b)("tags").then(n.b).then(({tags:t})=>{e.tags=t}),e.selectTab=t=>{e.articles=null,e.selectedTab=t,e.articlesOffset=0,e.totalArticlesCount=0,e.getArticles()},e.selectTag=t=>{e.selectedTag=t,e.selectTab(m.tag)},e.getPageArticles=({offset:t})=>{e.articlesOffset=t,e.getArticles()},e}))}}]);
//# sourceMappingURL=home.bundle-185ebfd46c6b5de77702.js.map