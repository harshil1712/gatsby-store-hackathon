webpackJsonp([0xd8f8c9dbb980],{107:function(e,t,a){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function s(){return"undefined"==typeof E&&"undefined"!=typeof window&&window.IntersectionObserver&&(E=new window.IntersectionObserver(function(e){e.forEach(function(e){L.forEach(function(t){t[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(E.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"})),E}t.__esModule=!0;var o=a(57),l=i(o),n=a(67),r=i(n),d=a(66),u=i(d),c=a(123),f=i(c),p=a(97),h=i(p),g=a(2),y=i(g),b=a(216),m=i(b),v=function(e){var t=(0,h.default)({},e);return t.responsiveResolution&&(t.resolutions=t.responsiveResolution,delete t.responsiveResolution),t.responsiveSizes&&(t.sizes=t.responsiveSizes,delete t.responsiveSizes),t},w={},S=function(e){var t=v(e),a=t.sizes?t.sizes.src:t.resolutions.src;return!!w[a]||(w[a]=!0,!1)},E=void 0,L=[],z=function(e,t){s().observe(e),L.push([e,t])},I=null,j=function(){if(null!==I)return I;var e="undefined"!=typeof window?window.document.createElement("canvas"):{};return I=!(!e.getContext||!e.getContext("2d"))&&0===e.toDataURL("image/webp").indexOf("data:image/webp")},R=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.sizes?'sizes="'+e.sizes+'" ':"",s=e.title?'title="'+e.title+'" ':"",o=e.alt?'alt="'+e.alt+'" ':'alt="" ',l=e.width?'width="'+e.width+'" ':"",n=e.height?'height="'+e.height+'" ':"",r=e.opacity?e.opacity:"1",d=e.transitionDelay?e.transitionDelay:"0.5s";return"<img "+l+n+t+a+o+s+i+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+d+";opacity:"+r+';width:100%;height:100%;object-fit:cover;object-position:center"/>'},_=function(e){var t=e.style,a=e.onLoad,i=(0,f.default)(e,["style","onLoad"]);return y.default.createElement("img",(0,h.default)({},i,{onLoad:a,style:(0,h.default)({position:"absolute",top:0,left:0,transition:"opacity 0.5s",width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},t)}))};_.propTypes={style:m.default.object,onLoad:m.default.func};var O=function(e){function t(a){(0,l.default)(this,t);var i=(0,r.default)(this,e.call(this,a)),s=!0,o=!0,n=!1,d=S(a);return!d&&"undefined"!=typeof window&&window.IntersectionObserver&&(s=!1,o=!1,n=!0),"undefined"==typeof window&&(s=!1,o=!1),i.state={isVisible:s,imgLoaded:o,IOSupported:n},i.handleRef=i.handleRef.bind(i),i}return(0,u.default)(t,e),t.prototype.handleRef=function(e){var t=this;this.state.IOSupported&&e&&z(e,function(){t.setState({isVisible:!0,imgLoaded:!1})})},t.prototype.render=function(){var e=this,t=v(this.props),a=t.title,i=t.alt,s=t.className,o=t.outerWrapperClassName,l=t.style,n=void 0===l?{}:l,r=t.imgStyle,d=void 0===r?{}:r,u=t.sizes,c=t.resolutions,f=t.backgroundColor,p=t.Tag,g=void 0;g="boolean"==typeof f?"lightgray":f;var b=(0,h.default)({opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s"},d),m=(0,h.default)({opacity:this.state.imgLoaded||this.props.fadeIn===!1?1:0},d);if(u){var w=u;return w.srcWebp&&w.srcSetWebp&&j()&&(w.src=w.srcWebp,w.srcSet=w.srcSetWebp),y.default.createElement(p,{className:(o?o:"")+" gatsby-image-outer-wrapper",style:{position:"absolute"===n.position?"initial":"relative"}},y.default.createElement(p,{className:(s?s:"")+" gatsby-image-wrapper",style:(0,h.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef},y.default.createElement(p,{style:{width:"100%",paddingBottom:100/w.aspectRatio+"%"}}),w.base64&&y.default.createElement(_,{alt:i,title:a,src:w.base64,style:b}),w.tracedSVG&&y.default.createElement(_,{alt:i,title:a,src:w.tracedSVG,style:b}),g&&y.default.createElement(p,{title:a,style:{backgroundColor:g,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&y.default.createElement(_,{alt:i,title:a,srcSet:w.srcSet,src:w.src,sizes:w.sizes,style:m,onLoad:function(){e.state.IOSupported&&e.setState({imgLoaded:!0}),e.props.onLoad&&e.props.onLoad()}}),y.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:R((0,h.default)({alt:i,title:a},w))}})))}if(c){var S=c,E=(0,h.default)({position:"relative",overflow:"hidden",display:"inline-block",width:S.width,height:S.height},n);return"inherit"===n.display&&delete E.display,S.srcWebp&&S.srcSetWebp&&j()&&(S.src=S.srcWebp,S.srcSet=S.srcSetWebp),y.default.createElement(p,{className:(o?o:"")+" gatsby-image-outer-wrapper",style:{position:"absolute"===n.position?"initial":"relative"}},y.default.createElement(p,{className:(s?s:"")+" gatsby-image-wrapper",style:E,ref:this.handleRef},S.base64&&y.default.createElement(_,{alt:i,title:a,src:S.base64,style:b}),S.tracedSVG&&y.default.createElement(_,{alt:i,title:a,src:S.tracedSVG,style:b}),g&&y.default.createElement(p,{title:a,style:{backgroundColor:g,width:S.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:S.height}}),this.state.isVisible&&y.default.createElement(_,{alt:i,title:a,width:S.width,height:S.height,srcSet:S.srcSet,src:S.src,style:m,onLoad:function(){e.setState({imgLoaded:!0}),e.props.onLoad&&e.props.onLoad()}}),y.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:R((0,h.default)({alt:i,title:a,width:S.width,height:S.height},S))}})))}return null},t}(y.default.Component);O.defaultProps={fadeIn:!0,alt:"",Tag:"div"},O.propTypes={responsiveResolution:m.default.object,responsiveSizes:m.default.object,resolutions:m.default.object,sizes:m.default.object,fadeIn:m.default.bool,title:m.default.string,alt:m.default.string,className:m.default.oneOfType([m.default.string,m.default.object]),outerWrapperClassName:m.default.oneOfType([m.default.string,m.default.object]),style:m.default.object,imgStyle:m.default.object,position:m.default.string,backgroundColor:m.default.oneOfType([m.default.string,m.default.bool]),onLoad:m.default.func,Tag:m.default.string},t.default=O},557:function(e,t,a){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.query=void 0;var s=a(2),o=i(s),l=a(107),n=i(l),r=a(45),d=i(r),u=function(e){var t=e.data;return o.default.createElement("div",null,o.default.createElement(d.default,{title:"Gatsby Image"}),o.default.createElement("h3",null,"Images displayed here utilise the Gatsby-Image plugin"),o.default.createElement(n.default,{sizes:t.background.sizes,alt:"Big Lamp"}),o.default.createElement(n.default,{style:{position:"absolute",left:0,top:0,width:"100%",height:"100%",opacity:.3,zIndex:0},sizes:t.background.sizes,alt:"Big Lamp"}))};t.query="** extracted graphql fragment **";t.default=u}});
//# sourceMappingURL=component---src-pages-gatsbyimage-js-4c077c686277c9176578.js.map