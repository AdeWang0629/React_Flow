!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("react")):"function"==typeof define&&define.amd?define(["exports","react"],e):e((t=t||self).ReactWindow={},t.React)}(this,function(t,e){"use strict";function r(){return(r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o])}return t}).apply(this,arguments)}function o(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}function n(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}var i=function(t,e){return t.length===e.length&&t.every(function(t,r){return o=t,n=e[r],o===n;var o,n})};function a(t,e){var r;void 0===e&&(e=i);var o,n=[],a=!1;return function(){for(var i=arguments.length,l=new Array(i),s=0;s<i;s++)l[s]=arguments[s];return a&&r===this&&e(l,n)?o:(o=t.apply(this,l),a=!0,r=this,n=l,o)}}var l="object"==typeof performance&&"function"==typeof performance.now?function(){return performance.now()}:function(){return Date.now()};function s(t){cancelAnimationFrame(t.id)}function c(t,e){var r=l();var o={id:requestAnimationFrame(function n(){l()-r>=e?t.call(null):o.id=requestAnimationFrame(n)})};return o}var u=-1;var f=null;function d(t){if(void 0===t&&(t=!1),null===f||t){var e=document.createElement("div"),r=e.style;r.width="50px",r.height="50px",r.overflow="scroll",r.direction="rtl";var o=document.createElement("div"),n=o.style;return n.width="100px",n.height="100px",e.appendChild(o),document.body.appendChild(e),e.scrollLeft>0?f="positive-descending":(e.scrollLeft=1,f=0===e.scrollLeft?"negative":"positive-ascending"),document.body.removeChild(e),f}return f}var h=150,m=function(t){var e=t.columnIndex;t.data;return t.rowIndex+":"+e};function p(t){var i,l,f=t.getColumnOffset,p=t.getColumnStartIndexForOffset,v=t.getColumnStopIndexForStartIndex,S=t.getColumnWidth,I=t.getEstimatedTotalHeight,w=t.getEstimatedTotalWidth,M=t.getOffsetForColumnAndAlignment,x=t.getOffsetForRowAndAlignment,_=t.getRowHeight,C=t.getRowOffset,R=t.getRowStartIndexForOffset,y=t.getRowStopIndexForStartIndex,T=t.initInstanceProps,O=t.shouldResetStyleCacheOnItemSizeChange,z=t.validateProps;return l=i=function(t){function i(e){var r;return(r=t.call(this,e)||this)._instanceProps=T(r.props,n(n(r))),r._resetIsScrollingTimeoutId=null,r._outerRef=void 0,r.state={instance:n(n(r)),isScrolling:!1,horizontalScrollDirection:"forward",scrollLeft:"number"==typeof r.props.initialScrollLeft?r.props.initialScrollLeft:0,scrollTop:"number"==typeof r.props.initialScrollTop?r.props.initialScrollTop:0,scrollUpdateWasRequested:!1,verticalScrollDirection:"forward"},r._callOnItemsRendered=void 0,r._callOnItemsRendered=a(function(t,e,o,n,i,a,l,s){return r.props.onItemsRendered({overscanColumnStartIndex:t,overscanColumnStopIndex:e,overscanRowStartIndex:o,overscanRowStopIndex:n,visibleColumnStartIndex:i,visibleColumnStopIndex:a,visibleRowStartIndex:l,visibleRowStopIndex:s})}),r._callOnScroll=void 0,r._callOnScroll=a(function(t,e,o,n,i){return r.props.onScroll({horizontalScrollDirection:o,scrollLeft:t,scrollTop:e,verticalScrollDirection:n,scrollUpdateWasRequested:i})}),r._getItemStyle=void 0,r._getItemStyle=function(t,e){var o,n,i=r.props,a=i.columnWidth,l=i.direction,s=i.rowHeight,c=r._getItemStyleCache(O&&a,O&&l,O&&s),u=t+":"+e;c.hasOwnProperty(u)?o=c[u]:c[u]=((n={position:"absolute"})["rtl"===l?"right":"left"]=f(r.props,e,r._instanceProps),n.top=C(r.props,t,r._instanceProps),n.height=_(r.props,t,r._instanceProps),n.width=S(r.props,e,r._instanceProps),o=n);return o},r._getItemStyleCache=void 0,r._getItemStyleCache=a(function(t,e,r){return{}}),r._onScroll=function(t){var e=t.currentTarget,o=e.clientHeight,n=e.clientWidth,i=e.scrollLeft,a=e.scrollTop,l=e.scrollHeight,s=e.scrollWidth;r.setState(function(t){if(t.scrollLeft===i&&t.scrollTop===a)return null;var e=r.props.direction,c=i;if("rtl"===e)switch(d()){case"negative":c=-i;break;case"positive-descending":c=s-n-i}c=Math.max(0,Math.min(c,s-n));var u=Math.max(0,Math.min(a,l-o));return{isScrolling:!0,horizontalScrollDirection:t.scrollLeft<i?"forward":"backward",scrollLeft:c,scrollTop:u,verticalScrollDirection:t.scrollTop<a?"forward":"backward",scrollUpdateWasRequested:!1}},r._resetIsScrollingDebounced)},r._outerRefSetter=function(t){var e=r.props.outerRef;r._outerRef=t,"function"==typeof e?e(t):null!=e&&"object"==typeof e&&e.hasOwnProperty("current")&&(e.current=t)},r._resetIsScrollingDebounced=function(){null!==r._resetIsScrollingTimeoutId&&s(r._resetIsScrollingTimeoutId),r._resetIsScrollingTimeoutId=c(r._resetIsScrolling,h)},r._resetIsScrolling=function(){r._resetIsScrollingTimeoutId=null,r.setState({isScrolling:!1},function(){r._getItemStyleCache(-1)})},r}o(i,t),i.getDerivedStateFromProps=function(t,e){return g(t,e),z(t),null};var l=i.prototype;return l.scrollTo=function(t){var e=t.scrollLeft,r=t.scrollTop;void 0!==e&&(e=Math.max(0,e)),void 0!==r&&(r=Math.max(0,r)),this.setState(function(t){return void 0===e&&(e=t.scrollLeft),void 0===r&&(r=t.scrollTop),t.scrollLeft===e&&t.scrollTop===r?null:{horizontalScrollDirection:t.scrollLeft<e?"forward":"backward",scrollLeft:e,scrollTop:r,scrollUpdateWasRequested:!0,verticalScrollDirection:t.scrollTop<r?"forward":"backward"}},this._resetIsScrollingDebounced)},l.scrollToItem=function(t){var e=t.align,r=void 0===e?"auto":e,o=t.columnIndex,n=t.rowIndex,i=this.props,a=i.columnCount,l=i.height,s=i.rowCount,c=i.width,f=this.state,d=f.scrollLeft,h=f.scrollTop,m=function(t){if(void 0===t&&(t=!1),-1===u||t){var e=document.createElement("div"),r=e.style;r.width="50px",r.height="50px",r.overflow="scroll",document.body.appendChild(e),u=e.offsetWidth-e.clientWidth,document.body.removeChild(e)}return u}();void 0!==o&&(o=Math.max(0,Math.min(o,a-1))),void 0!==n&&(n=Math.max(0,Math.min(n,s-1)));var p=I(this.props,this._instanceProps),g=w(this.props,this._instanceProps)>c?m:0,v=p>l?m:0;this.scrollTo({scrollLeft:void 0!==o?M(this.props,o,r,d,this._instanceProps,v):d,scrollTop:void 0!==n?x(this.props,n,r,h,this._instanceProps,g):h})},l.componentDidMount=function(){var t=this.props,e=t.initialScrollLeft,r=t.initialScrollTop;if(null!=this._outerRef){var o=this._outerRef;"number"==typeof e&&(o.scrollLeft=e),"number"==typeof r&&(o.scrollTop=r)}this._callPropsCallbacks()},l.componentDidUpdate=function(){var t=this.props.direction,e=this.state,r=e.scrollLeft,o=e.scrollTop;if(e.scrollUpdateWasRequested&&null!=this._outerRef){var n=this._outerRef;if("rtl"===t)switch(d()){case"negative":n.scrollLeft=-r;break;case"positive-ascending":n.scrollLeft=r;break;default:var i=n.clientWidth,a=n.scrollWidth;n.scrollLeft=a-i-r}else n.scrollLeft=Math.max(0,r);n.scrollTop=Math.max(0,o)}this._callPropsCallbacks()},l.componentWillUnmount=function(){null!==this._resetIsScrollingTimeoutId&&s(this._resetIsScrollingTimeoutId)},l.render=function(){var t=this.props,o=t.children,n=t.className,i=t.columnCount,a=t.direction,l=t.height,s=t.innerRef,c=t.innerElementType,u=t.innerTagName,f=t.itemData,d=t.itemKey,h=void 0===d?m:d,p=t.outerElementType,g=t.outerTagName,v=t.rowCount,S=t.style,M=t.useIsScrolling,x=t.width,_=this.state.isScrolling,C=this._getHorizontalRangeToRender(),R=C[0],y=C[1],T=this._getVerticalRangeToRender(),O=T[0],z=T[1],b=[];if(i>0&&v)for(var P=O;P<=z;P++)for(var W=R;W<=y;W++)b.push(e.createElement(o,{columnIndex:W,data:f,isScrolling:M?_:void 0,key:h({columnIndex:W,data:f,rowIndex:P}),rowIndex:P,style:this._getItemStyle(P,W)}));var D=I(this.props,this._instanceProps),F=w(this.props,this._instanceProps);return e.createElement(p||g||"div",{className:n,onScroll:this._onScroll,ref:this._outerRefSetter,style:r({position:"relative",height:l,width:x,overflow:"auto",WebkitOverflowScrolling:"touch",willChange:"transform",direction:a},S)},e.createElement(c||u||"div",{children:b,ref:s,style:{height:D,pointerEvents:_?"none":void 0,width:F}}))},l._callPropsCallbacks=function(){var t=this.props,e=t.columnCount,r=t.onItemsRendered,o=t.onScroll,n=t.rowCount;if("function"==typeof r&&e>0&&n>0){var i=this._getHorizontalRangeToRender(),a=i[0],l=i[1],s=i[2],c=i[3],u=this._getVerticalRangeToRender(),f=u[0],d=u[1],h=u[2],m=u[3];this._callOnItemsRendered(a,l,f,d,s,c,h,m)}if("function"==typeof o){var p=this.state,g=p.horizontalScrollDirection,v=p.scrollLeft,S=p.scrollTop,I=p.scrollUpdateWasRequested,w=p.verticalScrollDirection;this._callOnScroll(v,S,g,w,I)}},l._getHorizontalRangeToRender=function(){var t=this.props,e=t.columnCount,r=t.overscanColumnCount,o=t.overscanColumnsCount,n=t.overscanCount,i=t.rowCount,a=this.state,l=a.horizontalScrollDirection,s=a.isScrolling,c=a.scrollLeft,u=r||o||n||1;if(0===e||0===i)return[0,0,0,0];var f=p(this.props,c,this._instanceProps),d=v(this.props,f,c,this._instanceProps),h=s&&"backward"!==l?1:Math.max(1,u),m=s&&"forward"!==l?1:Math.max(1,u);return[Math.max(0,f-h),Math.max(0,Math.min(e-1,d+m)),f,d]},l._getVerticalRangeToRender=function(){var t=this.props,e=t.columnCount,r=t.overscanCount,o=t.overscanRowCount,n=t.overscanRowsCount,i=t.rowCount,a=this.state,l=a.isScrolling,s=a.verticalScrollDirection,c=a.scrollTop,u=o||n||r||1;if(0===e||0===i)return[0,0,0,0];var f=R(this.props,c,this._instanceProps),d=y(this.props,f,c,this._instanceProps),h=l&&"backward"!==s?1:Math.max(1,u),m=l&&"forward"!==s?1:Math.max(1,u);return[Math.max(0,f-h),Math.max(0,Math.min(i-1,d+m)),f,d]},i}(e.PureComponent),i.defaultProps={direction:"ltr",itemData:void 0,useIsScrolling:!1},l}var g=function(t,e){t.children,t.direction,t.height,t.innerTagName,t.outerTagName,t.overscanColumnsCount,t.overscanCount,t.overscanRowsCount,t.width,e.instance},v=function(t,e){var r=t.rowCount,o=e.rowMetadataMap,n=e.estimatedRowHeight,i=e.lastMeasuredRowIndex,a=0;if(i>=r&&(i=r-1),i>=0){var l=o[i];a=l.offset+l.size}return a+(r-i-1)*n},S=function(t,e){var r=t.columnCount,o=e.columnMetadataMap,n=e.estimatedColumnWidth,i=e.lastMeasuredColumnIndex,a=0;if(i>=r&&(i=r-1),i>=0){var l=o[i];a=l.offset+l.size}return a+(r-i-1)*n},I=function(t,e,r,o){var n,i,a;if("column"===t?(n=o.columnMetadataMap,i=e.columnWidth,a=o.lastMeasuredColumnIndex):(n=o.rowMetadataMap,i=e.rowHeight,a=o.lastMeasuredRowIndex),r>a){var l=0;if(a>=0){var s=n[a];l=s.offset+s.size}for(var c=a+1;c<=r;c++){var u=i(c);n[c]={offset:l,size:u},l+=u}"column"===t?o.lastMeasuredColumnIndex=r:o.lastMeasuredRowIndex=r}return n[r]},w=function(t,e,r,o){var n,i;return"column"===t?(n=r.columnMetadataMap,i=r.lastMeasuredColumnIndex):(n=r.rowMetadataMap,i=r.lastMeasuredRowIndex),(i>0?n[i].offset:0)>=o?M(t,e,r,i,0,o):x(t,e,r,Math.max(0,i),o)},M=function(t,e,r,o,n,i){for(;n<=o;){var a=n+Math.floor((o-n)/2),l=I(t,e,a,r).offset;if(l===i)return a;l<i?n=a+1:l>i&&(o=a-1)}return n>0?n-1:0},x=function(t,e,r,o,n){for(var i="column"===t?e.columnCount:e.rowCount,a=1;o<i&&I(t,e,o,r).offset<n;)o+=a,a*=2;return M(t,e,r,Math.min(o,i-1),Math.floor(o/2),n)},_=function(t,e,r,o,n,i,a){var l="column"===t?e.width:e.height,s=I(t,e,r,i),c="column"===t?S(e,i):v(e,i),u=Math.max(0,Math.min(c-l,s.offset)),f=Math.max(0,s.offset-l+a+s.size);switch("smart"===o&&(o=n>=f-l&&n<=u+l?"auto":"center"),o){case"start":return u;case"end":return f;case"center":return Math.round(f+(u-f)/2);case"auto":default:return n>=f&&n<=u?n:f>u?f:n<f?f:u}},C=p({getColumnOffset:function(t,e,r){return I("column",t,e,r).offset},getColumnStartIndexForOffset:function(t,e,r){return w("column",t,r,e)},getColumnStopIndexForStartIndex:function(t,e,r,o){for(var n=t.columnCount,i=t.width,a=I("column",t,e,o),l=r+i,s=a.offset+a.size,c=e;c<n-1&&s<l;)s+=I("column",t,++c,o).size;return c},getColumnWidth:function(t,e,r){return r.columnMetadataMap[e].size},getEstimatedTotalHeight:v,getEstimatedTotalWidth:S,getOffsetForColumnAndAlignment:function(t,e,r,o,n,i){return _("column",t,e,r,o,n,i)},getOffsetForRowAndAlignment:function(t,e,r,o,n,i){return _("row",t,e,r,o,n,i)},getRowOffset:function(t,e,r){return I("row",t,e,r).offset},getRowHeight:function(t,e,r){return r.rowMetadataMap[e].size},getRowStartIndexForOffset:function(t,e,r){return w("row",t,r,e)},getRowStopIndexForStartIndex:function(t,e,r,o){for(var n=t.rowCount,i=t.height,a=I("row",t,e,o),l=r+i,s=a.offset+a.size,c=e;c<n-1&&s<l;)s+=I("row",t,++c,o).size;return c},initInstanceProps:function(t,e){var r=t,o={columnMetadataMap:{},estimatedColumnWidth:r.estimatedColumnWidth||50,estimatedRowHeight:r.estimatedRowHeight||50,lastMeasuredColumnIndex:-1,lastMeasuredRowIndex:-1,rowMetadataMap:{}};return e.resetAfterColumnIndex=function(t,r){void 0===r&&(r=!0),e.resetAfterIndices({columnIndex:t,shouldForceUpdate:r})},e.resetAfterRowIndex=function(t,r){void 0===r&&(r=!0),e.resetAfterIndices({rowIndex:t,shouldForceUpdate:r})},e.resetAfterIndices=function(t){var r=t.columnIndex,n=t.rowIndex,i=t.shouldForceUpdate,a=void 0===i||i;"number"==typeof r&&(o.lastMeasuredColumnIndex=Math.min(o.lastMeasuredColumnIndex,r-1)),"number"==typeof n&&(o.lastMeasuredRowIndex=Math.min(o.lastMeasuredRowIndex,n-1)),e._getItemStyleCache(-1),a&&e.forceUpdate()},o},shouldResetStyleCacheOnItemSizeChange:!1,validateProps:function(t){t.columnWidth,t.rowHeight}}),R=150,y=function(t,e){return t};function T(t){var i,l,u=t.getItemOffset,f=t.getEstimatedTotalSize,h=t.getItemSize,m=t.getOffsetForIndexAndAlignment,p=t.getStartIndexForOffset,g=t.getStopIndexForStartIndex,v=t.initInstanceProps,S=t.shouldResetStyleCacheOnItemSizeChange,I=t.validateProps;return l=i=function(t){function i(e){var r;return(r=t.call(this,e)||this)._instanceProps=v(r.props,n(n(r))),r._outerRef=void 0,r._resetIsScrollingTimeoutId=null,r.state={instance:n(n(r)),isScrolling:!1,scrollDirection:"forward",scrollOffset:"number"==typeof r.props.initialScrollOffset?r.props.initialScrollOffset:0,scrollUpdateWasRequested:!1},r._callOnItemsRendered=void 0,r._callOnItemsRendered=a(function(t,e,o,n){return r.props.onItemsRendered({overscanStartIndex:t,overscanStopIndex:e,visibleStartIndex:o,visibleStopIndex:n})}),r._callOnScroll=void 0,r._callOnScroll=a(function(t,e,o){return r.props.onScroll({scrollDirection:t,scrollOffset:e,scrollUpdateWasRequested:o})}),r._getItemStyle=void 0,r._getItemStyle=function(t){var e,o=r.props,n=o.direction,i=o.itemSize,a=o.layout,l=r._getItemStyleCache(S&&i,S&&a,S&&n);if(l.hasOwnProperty(t))e=l[t];else{var s,c=u(r.props,t,r._instanceProps),f=h(r.props,t,r._instanceProps),d="horizontal"===n||"horizontal"===a;l[t]=((s={position:"absolute"})["rtl"===n?"right":"left"]=d?c:0,s.top=d?0:c,s.height=d?"100%":f,s.width=d?f:"100%",e=s)}return e},r._getItemStyleCache=void 0,r._getItemStyleCache=a(function(t,e,r){return{}}),r._onScrollHorizontal=function(t){var e=t.currentTarget,o=e.clientWidth,n=e.scrollLeft,i=e.scrollWidth;r.setState(function(t){if(t.scrollOffset===n)return null;var e=r.props.direction,a=n;if("rtl"===e)switch(d()){case"negative":a=-n;break;case"positive-descending":a=i-o-n}return a=Math.max(0,Math.min(a,i-o)),{isScrolling:!0,scrollDirection:t.scrollOffset<n?"forward":"backward",scrollOffset:a,scrollUpdateWasRequested:!1}},r._resetIsScrollingDebounced)},r._onScrollVertical=function(t){var e=t.currentTarget,o=e.clientHeight,n=e.scrollHeight,i=e.scrollTop;r.setState(function(t){if(t.scrollOffset===i)return null;var e=Math.max(0,Math.min(i,n-o));return{isScrolling:!0,scrollDirection:t.scrollOffset<e?"forward":"backward",scrollOffset:e,scrollUpdateWasRequested:!1}},r._resetIsScrollingDebounced)},r._outerRefSetter=function(t){var e=r.props.outerRef;r._outerRef=t,"function"==typeof e?e(t):null!=e&&"object"==typeof e&&e.hasOwnProperty("current")&&(e.current=t)},r._resetIsScrollingDebounced=function(){null!==r._resetIsScrollingTimeoutId&&s(r._resetIsScrollingTimeoutId),r._resetIsScrollingTimeoutId=c(r._resetIsScrolling,R)},r._resetIsScrolling=function(){r._resetIsScrollingTimeoutId=null,r.setState({isScrolling:!1},function(){r._getItemStyleCache(-1,null)})},r}o(i,t),i.getDerivedStateFromProps=function(t,e){return O(t,e),I(t),null};var l=i.prototype;return l.scrollTo=function(t){t=Math.max(0,t),this.setState(function(e){return e.scrollOffset===t?null:{scrollDirection:e.scrollOffset<t?"forward":"backward",scrollOffset:t,scrollUpdateWasRequested:!0}},this._resetIsScrollingDebounced)},l.scrollToItem=function(t,e){void 0===e&&(e="auto");var r=this.props.itemCount,o=this.state.scrollOffset;t=Math.max(0,Math.min(t,r-1)),this.scrollTo(m(this.props,t,e,o,this._instanceProps))},l.componentDidMount=function(){var t=this.props,e=t.direction,r=t.initialScrollOffset,o=t.layout;if("number"==typeof r&&null!=this._outerRef){var n=this._outerRef;"horizontal"===e||"horizontal"===o?n.scrollLeft=r:n.scrollTop=r}this._callPropsCallbacks()},l.componentDidUpdate=function(){var t=this.props,e=t.direction,r=t.layout,o=this.state,n=o.scrollOffset;if(o.scrollUpdateWasRequested&&null!=this._outerRef){var i=this._outerRef;if("horizontal"===e||"horizontal"===r)if("rtl"===e)switch(d()){case"negative":i.scrollLeft=-n;break;case"positive-ascending":i.scrollLeft=n;break;default:var a=i.clientWidth,l=i.scrollWidth;i.scrollLeft=l-a-n}else i.scrollLeft=n;else i.scrollTop=n}this._callPropsCallbacks()},l.componentWillUnmount=function(){null!==this._resetIsScrollingTimeoutId&&s(this._resetIsScrollingTimeoutId)},l.render=function(){var t=this.props,o=t.children,n=t.className,i=t.direction,a=t.height,l=t.innerRef,s=t.innerElementType,c=t.innerTagName,u=t.itemCount,d=t.itemData,h=t.itemKey,m=void 0===h?y:h,p=t.layout,g=t.outerElementType,v=t.outerTagName,S=t.style,I=t.useIsScrolling,w=t.width,M=this.state.isScrolling,x="horizontal"===i||"horizontal"===p,_=x?this._onScrollHorizontal:this._onScrollVertical,C=this._getRangeToRender(),R=C[0],T=C[1],O=[];if(u>0)for(var z=R;z<=T;z++)O.push(e.createElement(o,{data:d,key:m(z,d),index:z,isScrolling:I?M:void 0,style:this._getItemStyle(z)}));var b=f(this.props,this._instanceProps);return e.createElement(g||v||"div",{className:n,onScroll:_,ref:this._outerRefSetter,style:r({position:"relative",height:a,width:w,overflow:"auto",WebkitOverflowScrolling:"touch",willChange:"transform",direction:i},S)},e.createElement(s||c||"div",{children:O,ref:l,style:{height:x?"100%":b,pointerEvents:M?"none":void 0,width:x?b:"100%"}}))},l._callPropsCallbacks=function(){if("function"==typeof this.props.onItemsRendered&&this.props.itemCount>0){var t=this._getRangeToRender(),e=t[0],r=t[1],o=t[2],n=t[3];this._callOnItemsRendered(e,r,o,n)}if("function"==typeof this.props.onScroll){var i=this.state,a=i.scrollDirection,l=i.scrollOffset,s=i.scrollUpdateWasRequested;this._callOnScroll(a,l,s)}},l._getRangeToRender=function(){var t=this.props,e=t.itemCount,r=t.overscanCount,o=this.state,n=o.isScrolling,i=o.scrollDirection,a=o.scrollOffset;if(0===e)return[0,0,0,0];var l=p(this.props,a,this._instanceProps),s=g(this.props,l,a,this._instanceProps),c=n&&"backward"!==i?1:Math.max(1,r),u=n&&"forward"!==i?1:Math.max(1,r);return[Math.max(0,l-c),Math.max(0,Math.min(e-1,s+u)),l,s]},i}(e.PureComponent),i.defaultProps={direction:"ltr",itemData:void 0,layout:"vertical",overscanCount:2,useIsScrolling:!1},l}var O=function(t,e){t.children,t.direction,t.height,t.layout,t.innerTagName,t.outerTagName,t.width,e.instance},z=function(t,e,r){var o=t.itemSize,n=r.itemMetadataMap,i=r.lastMeasuredIndex;if(e>i){var a=0;if(i>=0){var l=n[i];a=l.offset+l.size}for(var s=i+1;s<=e;s++){var c=o(s);n[s]={offset:a,size:c},a+=c}r.lastMeasuredIndex=e}return n[e]},b=function(t,e,r,o,n){for(;o<=r;){var i=o+Math.floor((r-o)/2),a=z(t,i,e).offset;if(a===n)return i;a<n?o=i+1:a>n&&(r=i-1)}return o>0?o-1:0},P=function(t,e,r,o){for(var n=t.itemCount,i=1;r<n&&z(t,r,e).offset<o;)r+=i,i*=2;return b(t,e,Math.min(r,n-1),Math.floor(r/2),o)},W=function(t,e){var r=t.itemCount,o=e.itemMetadataMap,n=e.estimatedItemSize,i=e.lastMeasuredIndex,a=0;if(i>=r&&(i=r-1),i>=0){var l=o[i];a=l.offset+l.size}return a+(r-i-1)*n},D=T({getItemOffset:function(t,e,r){return z(t,e,r).offset},getItemSize:function(t,e,r){return r.itemMetadataMap[e].size},getEstimatedTotalSize:W,getOffsetForIndexAndAlignment:function(t,e,r,o,n){var i=t.direction,a=t.height,l=t.layout,s=t.width,c="horizontal"===i||"horizontal"===l?s:a,u=z(t,e,n),f=W(t,n),d=Math.max(0,Math.min(f-c,u.offset)),h=Math.max(0,u.offset-c+u.size);switch("smart"===r&&(r=o>=h-c&&o<=d+c?"auto":"center"),r){case"start":return d;case"end":return h;case"center":return Math.round(h+(d-h)/2);case"auto":default:return o>=h&&o<=d?o:o<h?h:d}},getStartIndexForOffset:function(t,e,r){return function(t,e,r){var o=e.itemMetadataMap,n=e.lastMeasuredIndex;return(n>0?o[n].offset:0)>=r?b(t,e,n,0,r):P(t,e,Math.max(0,n),r)}(t,r,e)},getStopIndexForStartIndex:function(t,e,r,o){for(var n=t.direction,i=t.height,a=t.itemCount,l=t.layout,s=t.width,c="horizontal"===n||"horizontal"===l?s:i,u=z(t,e,o),f=r+c,d=u.offset+u.size,h=e;h<a-1&&d<f;)d+=z(t,++h,o).size;return h},initInstanceProps:function(t,e){var r={itemMetadataMap:{},estimatedItemSize:t.estimatedItemSize||50,lastMeasuredIndex:-1};return e.resetAfterIndex=function(t,o){void 0===o&&(o=!0),r.lastMeasuredIndex=Math.min(r.lastMeasuredIndex,t-1),e._getItemStyleCache(-1),o&&e.forceUpdate()},r},shouldResetStyleCacheOnItemSizeChange:!1,validateProps:function(t){t.itemSize}}),F=p({getColumnOffset:function(t,e){return e*t.columnWidth},getColumnWidth:function(t,e){return t.columnWidth},getRowOffset:function(t,e){return e*t.rowHeight},getRowHeight:function(t,e){return t.rowHeight},getEstimatedTotalHeight:function(t){var e=t.rowCount;return t.rowHeight*e},getEstimatedTotalWidth:function(t){var e=t.columnCount;return t.columnWidth*e},getOffsetForColumnAndAlignment:function(t,e,r,o,n,i){var a=t.columnCount,l=t.columnWidth,s=t.width,c=Math.max(0,a*l-s),u=Math.min(c,e*l),f=Math.max(0,e*l-s+i+l);switch("smart"===r&&(r=o>=f-s&&o<=u+s?"auto":"center"),r){case"start":return u;case"end":return f;case"center":var d=Math.round(f+(u-f)/2);return d<Math.ceil(s/2)?0:d>c+Math.floor(s/2)?c:d;case"auto":default:return o>=f&&o<=u?o:f>u?f:o<f?f:u}},getOffsetForRowAndAlignment:function(t,e,r,o,n,i){var a=t.rowHeight,l=t.height,s=t.rowCount,c=Math.max(0,s*a-l),u=Math.min(c,e*a),f=Math.max(0,e*a-l+i+a);switch("smart"===r&&(r=o>=f-l&&o<=u+l?"auto":"center"),r){case"start":return u;case"end":return f;case"center":var d=Math.round(f+(u-f)/2);return d<Math.ceil(l/2)?0:d>c+Math.floor(l/2)?c:d;case"auto":default:return o>=f&&o<=u?o:f>u?f:o<f?f:u}},getColumnStartIndexForOffset:function(t,e){var r=t.columnWidth,o=t.columnCount;return Math.max(0,Math.min(o-1,Math.floor(e/r)))},getColumnStopIndexForStartIndex:function(t,e,r){var o=t.columnWidth,n=t.columnCount,i=t.width,a=e*o,l=Math.ceil((i+r-a)/o);return Math.max(0,Math.min(n-1,e+l-1))},getRowStartIndexForOffset:function(t,e){var r=t.rowHeight,o=t.rowCount;return Math.max(0,Math.min(o-1,Math.floor(e/r)))},getRowStopIndexForStartIndex:function(t,e,r){var o=t.rowHeight,n=t.rowCount,i=t.height,a=e*o,l=Math.ceil((i+r-a)/o);return Math.max(0,Math.min(n-1,e+l-1))},initInstanceProps:function(t){},shouldResetStyleCacheOnItemSizeChange:!0,validateProps:function(t){t.columnWidth,t.rowHeight}}),L=T({getItemOffset:function(t,e){return e*t.itemSize},getItemSize:function(t,e){return t.itemSize},getEstimatedTotalSize:function(t){var e=t.itemCount;return t.itemSize*e},getOffsetForIndexAndAlignment:function(t,e,r,o){var n=t.direction,i=t.height,a=t.itemCount,l=t.itemSize,s=t.layout,c=t.width,u="horizontal"===n||"horizontal"===s?c:i,f=Math.max(0,a*l-u),d=Math.min(f,e*l),h=Math.max(0,e*l-u+l);switch("smart"===r&&(r=o>=h-u&&o<=d+u?"auto":"center"),r){case"start":return d;case"end":return h;case"center":var m=Math.round(h+(d-h)/2);return m<Math.ceil(u/2)?0:m>f+Math.floor(u/2)?f:m;case"auto":default:return o>=h&&o<=d?o:o<h?h:d}},getStartIndexForOffset:function(t,e){var r=t.itemCount,o=t.itemSize;return Math.max(0,Math.min(r-1,Math.floor(e/o)))},getStopIndexForStartIndex:function(t,e,r){var o=t.direction,n=t.height,i=t.itemCount,a=t.itemSize,l=t.layout,s=t.width,c=e*a,u="horizontal"===o||"horizontal"===l?s:n,f=Math.ceil((u+r-c)/a);return Math.max(0,Math.min(i-1,e+f-1))},initInstanceProps:function(t){},shouldResetStyleCacheOnItemSizeChange:!0,validateProps:function(t){t.itemSize}});function A(t,e){if(null==t)return{};var r,o,n={},i=Object.keys(t);for(o=0;o<i.length;o++)r=i[o],e.indexOf(r)>=0||(n[r]=t[r]);return n}function H(t,e){for(var r in t)if(!(r in e))return!0;for(var o in e)if(t[o]!==e[o])return!0;return!1}function k(t,e){var r=t.style,o=A(t,["style"]),n=e.style,i=A(e,["style"]);return!H(r,n)&&!H(o,i)}t.VariableSizeGrid=C,t.VariableSizeList=D,t.FixedSizeGrid=F,t.FixedSizeList=L,t.areEqual=k,t.shouldComponentUpdate=function(t,e){return!k(this.props,t)||H(this.state,e)},Object.defineProperty(t,"__esModule",{value:!0})});
//# sourceMappingURL=index-prod.umd.js.map
