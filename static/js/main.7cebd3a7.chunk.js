(this["webpackJsonpmovie-search"]=this["webpackJsonpmovie-search"]||[]).push([[0],{116:function(e,t,c){},165:function(e,t,c){},212:function(e,t,c){"use strict";c.r(t);var n=c(0),i=c.n(n),s=c(13),a=c.n(s),r=c(15),l=(c(116),c(39)),o=c(12),j=c(147),d=c(23),b="SET_MOVIE_LIST",u="FETCH_MOVIE_lIST",m="SET_DETAILS",O="FETCH_DETAILS",h="FETCH_SEARCH_MOVIE",v="SET_SEARCH_MOVIE",p="FETCH_TRAILER",x="SET_TRAILER",A="CHANGE_IS_FETCHING",f="SET_MOVIE_TO_LIST",_="INCREASE_COUNT",N="RESET_COUNT",g={movieList:[],movieDetail:{},search:[],movieTrailer:[],isFetching:!1,watchlist:[],watchlistCount:0},I=function(e){return{type:A,value:e}},w=function(e,t){return{type:u,movieId:e,sort:t}},C=function(e){return{type:h,value:e}},E=function(e){return{type:b,movieList:e}},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:return Object(d.a)(Object(d.a)({},e),{},{movieList:t.movieList});case m:return Object(d.a)(Object(d.a)({},e),{},{movieDetail:t.details});case v:return Object(d.a)(Object(d.a)({},e),{},{search:t.result});case x:return Object(d.a)(Object(d.a)({},e),{},{movieTrailer:t.movieTrailer});case A:return Object(d.a)(Object(d.a)({},e),{},{isFetching:t.value});case f:return Object(d.a)(Object(d.a)({},e),{},{watchlist:[].concat(Object(j.a)(e.watchlist),[t.movie])});case _:return Object(d.a)(Object(d.a)({},e),{},{watchlistCount:e.watchlistCount+1});case N:return Object(d.a)(Object(d.a)({},e),{},{watchlistCount:e.watchlistCount=0});default:return e}},k=function(e){return e.movie.movieList},T=function(e){return e.movie.movieDetail},R=function(e){return e.movie.search},Q=function(e){return e.movie.movieTrailer},S=function(e){return e.movie.isFetching},F=function(e){return e.movie.watchlist},W=function(e){return e.movie.watchlistCount},M=c.p+"static/media/preloader.87370995.gif",B=c(2),G=function(){return Object(B.jsx)("img",{src:M,alt:"preloader",style:{width:"100px",position:"absolute",top:"30%",left:"50%"}})},L=c(245),z=c(244),q=(c(165),c(137)),H=c.n(q),J=function(e){var t=e.modalActive,c=e.onClickModalHandler,n=e.trailer;return Object(B.jsx)("div",{className:t?"modal active":"modal",onClick:function(){return c()},children:Object(B.jsxs)("div",{className:"modal_content",children:[Object(B.jsx)("button",{onClick:function(e){e.stopPropagation(),c()},className:"button",children:Object(B.jsx)(H.a,{fontSize:"large"})}),Object(B.jsx)("iframe",{src:"https://www.youtube.com/embed/".concat(n.key),width:905,height:508,frameBorder:"0",title:n.key,children:"''"})]})})},P=function(){var e,t,c=Object(n.useState)(!1),i=Object(l.a)(c,2),s=i[0],a=i[1],j=Object(r.g)().id,d=Object(o.b)();Object(n.useEffect)((function(){d({type:O,movieId:j}),d(function(e){return{type:p,movieId:e}}(j))}),[d,j]);var b=Object(o.c)(T),u=Object(o.c)(Q),m=Object(o.c)(S),h=u[0],v="https://image.tmdb.org/t/p/w500/";return m?Object(B.jsx)(G,{}):Object(B.jsx)("div",{className:"details",children:Object(B.jsxs)("div",{className:"container",children:[Object(B.jsxs)("div",{className:"details__inner",children:[Object(B.jsxs)("div",{className:"details__film",children:[Object(B.jsx)("img",{src:v+b.poster_path,className:"film__poster-poster",alt:"backdrop"}),Object(B.jsxs)("div",{className:"film__poster-trailer",onClick:function(){a(!0)},children:[Object(B.jsx)("img",{src:v+b.backdrop_path,alt:"backdrop"}),Object(B.jsx)("button",{className:"film__poster-button",children:"Trailer"})]})]}),Object(B.jsxs)("div",{className:"details__info",children:[Object(B.jsx)("h2",{className:"details__info-title",children:b.title}),Object(B.jsx)(z.a,{component:"fieldset",mb:3,borderColor:"transparent",className:"details__info-rating",children:Object(B.jsx)(L.a,{name:"half-rating",value:b.vote_average,precision:.1,readOnly:!0,max:10})}),Object(B.jsxs)("div",{className:"details__info-numbers",children:[Object(B.jsxs)("div",{className:"block",children:[Object(B.jsx)("span",{className:"block__item",children:b.vote_average}),Object(B.jsx)("span",{children:"IMDb"})]}),Object(B.jsxs)("div",{className:"block",children:[Object(B.jsx)("span",{className:"block__item",children:b.vote_count}),Object(B.jsx)("span",{children:"Vote Count"})]}),Object(B.jsxs)("div",{className:"block",children:[Object(B.jsx)("span",{className:"block__item",children:b.budget}),Object(B.jsx)("span",{children:"Budget"})]})]}),Object(B.jsxs)("div",{className:"overview",children:[Object(B.jsx)("h2",{className:"overview__title",children:"Overview"}),Object(B.jsx)("p",{className:"overview__description",children:b.overview})]}),Object(B.jsxs)("div",{className:"description",children:[Object(B.jsx)("h2",{className:"description__title",children:"Category:"}),Object(B.jsx)("div",{className:"description__genres",children:null===(e=b.genres)||void 0===e?void 0:e.map((function(e){return Object(B.jsx)("span",{className:"description__info",children:e.name},e.id)}))})]}),Object(B.jsxs)("div",{className:"description",children:[Object(B.jsx)("h2",{className:"description__title",children:"Relies Date:"}),Object(B.jsx)("span",{className:"description__info",children:b.release_date})]}),Object(B.jsxs)("div",{className:"description",children:[Object(B.jsx)("h2",{className:"description__title",children:"Tagline:"}),Object(B.jsx)("span",{className:"description__info",children:b.tagline})]}),Object(B.jsxs)("div",{className:"description",children:[Object(B.jsx)("h2",{className:"description__title",children:"Length:"}),Object(B.jsx)("span",{className:"description__info",children:b.runtime})]}),Object(B.jsxs)("div",{className:"description",children:[Object(B.jsx)("h2",{className:"description__title",children:"County:"}),void 0!==b.production_countries&&Object(B.jsx)("span",{className:"description__info",children:null===(t=b.production_countries[0])||void 0===t?void 0:t.name})]})]})]}),void 0!==h&&!0===s?Object(B.jsx)(J,{modalActive:s,onClickModalHandler:function(){a(!s)},trailer:h}):""]})})},D=c(25),K=c(142),X=c.n(K),Y=c(246),V=c(241),U=c(242),Z=c(144),$=c.n(Z),ee=Object(V.a)((function(e){return Object(U.a)({margin:{margin:e.spacing(1),color:"#fff","& .MuiInput-underline:before":{display:"none"},"& .MuiInputBase-root":{color:"#fff",fontFamily:"Work Sans, sans-serif"},"& .MuiInput-underline:after":{borderBottom:"none"}}})})),te=function(){var e=Object(n.useState)(""),t=Object(l.a)(e,2),c=t[0],i=t[1],s=Object(n.useState)(""),a=Object(l.a)(s,2),j=a[0],d=a[1],b=Object(o.b)(),u=Object(r.f)(),m=ee();return Object(B.jsxs)("div",{className:"search",children:[Object(B.jsx)(X.a,{type:"text",value:c,onChange:function(e){d(""),i(e.target.value)},onKeyPress:function(e){"Enter"===e.key&&""!==c?(b(C(c)),i(""),u.push("/result")):d("Incorrect title")},className:m.margin,id:"input-with-icon-textfield",placeholder:"Search movie",InputProps:{startAdornment:Object(B.jsx)(Y.a,{position:"start",children:Object(B.jsx)($.a,{style:{color:"#fff"}})})}}),Object(B.jsx)("button",{type:"submit",onClick:function(){""!==c?(b(C(c)),i(""),u.push("/result")):d("Incorrect title")},className:"search__button",children:"Search"}),j&&Object(B.jsx)("div",{className:"search__error",children:j})]})},ce=function(){var e=Object(o.c)(W);return Object(B.jsx)("nav",{className:"nav",children:Object(B.jsxs)("ul",{className:"nav__list",children:[Object(B.jsx)("li",{className:"nav__list-item",children:Object(B.jsx)(D.b,{to:"/main",activeClassName:"nav__list-active",className:"nav__list-link",children:"New release"})}),Object(B.jsx)("li",{className:"nav__list-item",children:Object(B.jsx)(D.b,{to:"/trending",activeClassName:"nav__list-active",className:"nav__list-link",children:"Trending"})}),Object(B.jsx)("li",{className:"nav__list-item",children:Object(B.jsx)(D.b,{to:"/rated",activeClassName:"nav__list-active",className:"nav__list-link",children:"Top rated"})}),Object(B.jsx)("li",{className:"nav__list-item",children:Object(B.jsxs)(D.b,{to:"/watchlist",activeClassName:"nav__list-active",className:"nav__list-link",children:["Watch List ",Object(B.jsx)("span",{className:"nav__count",children:e>0?e:""})]})})]})})},ne=function(){return Object(B.jsx)("div",{className:"header",children:Object(B.jsx)("div",{className:"container",children:Object(B.jsxs)("div",{className:"header__inner",children:[Object(B.jsx)(D.b,{to:"/main",children:Object(B.jsx)("img",{src:"data:image/png;base64,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",className:"logo",alt:"logo"})}),Object(B.jsx)(ce,{}),Object(B.jsx)(te,{})]})})})},ie=c(149),se=c(125),ae=c(143),re=function(e){var t=e.filterRatingHandler,c=e.filterTitleHandler,n=e.genreHandleChange,i=e.arrOfId;Object(ie.a)(e,["filterRatingHandler","filterTitleHandler","genreHandleChange","arrOfId"]);return Object(B.jsxs)("div",{className:"filter",children:[Object(B.jsx)("h3",{className:"filter__title",children:"Filters"}),Object(B.jsx)("button",{onClick:t,className:"filter__button",children:"Rating"}),Object(B.jsx)("button",{onClick:c,className:"filter__button",children:"Title"}),Object(B.jsx)(se.a,{className:"filter__controls",children:Object(B.jsx)(ae.a,{onChange:n,name:"age",className:"filter__select",children:i.map((function(e){return Object(B.jsx)("option",{children:e.name},e.id)}))})})]})},le=c(145),oe=c.n(le),je=c(146),de=c.n(je),be=c.p+"static/media/placeholder.5ed52dd9.png",ue=i.a.memo((function(e){var t=e.film,c=i.a.useState(!1),n=Object(l.a)(c,2),s=n[0],a=n[1],r=Object(o.b)(),j=function(e){a(!0),r({type:f,movie:e}),r({type:_})};return Object(B.jsxs)("div",{className:"item",children:[Object(B.jsxs)(D.b,{to:"/details/"+t.id,children:[Object(B.jsxs)("div",{className:"item__poster",children:[t.poster_path?Object(B.jsx)("img",{src:"https://image.tmdb.org/t/p/w500/"+t.poster_path,alt:"poster"}):Object(B.jsx)("img",{src:be,alt:"poster"}),Object(B.jsx)("span",{className:"item__poster-vote",children:t.vote_average})]}),Object(B.jsx)("span",{className:"item__play",children:Object(B.jsx)(oe.a,{className:"item__play-icon"})})]}),Object(B.jsxs)("div",{className:"item__info",children:[Object(B.jsx)("h4",{className:"item__info-title",children:t.original_title}),Object(B.jsx)("button",{disabled:s,onClick:function(){return j(t)},className:"item__info-btn",children:Object(B.jsx)(de.a,{})})]})]},t.id)})),me=c(243),Oe=function(e){var t=e.movie,c=e.title,i=e.sort,s=Object(o.c)(S),a=Object(o.b)(),r=Object(n.useState)(null),j=Object(l.a)(r,2),d=j[0],b=j[1],u=t.filter((function(e){return null!==d?e.genre_ids.includes(d):e})),m=function(e){return e.slice().sort((function(e,t){return e.vote_average-t.vote_average})).reverse()},O=function(e){return e.slice().sort((function(e,t){return t.original_title.toLowerCase().localeCompare(e.original_title.toLowerCase())})).reverse()},h=[{id:28,name:"Action"},{id:12,name:"Adventure"},{id:16,name:"Animation"},{id:35,name:"Comedy"},{id:80,name:"Crime"},{id:99,name:"Documentary"},{id:18,name:"Drama"},{id:10751,name:"Family"},{id:14,name:"Fantasy"},{id:36,name:"History"},{id:27,name:"Horror"},{id:10402,name:"Music"},{id:9648,name:"Mystery"},{id:10749,name:"Romance"},{id:878,name:"Science Fiction"},{id:10770,name:"TV Movie"},{id:53,name:"Thriller"},{id:10752,name:"War"},{id:37,name:"Western"}],v=Object(n.useState)(1),p=Object(l.a)(v,2),x=p[0],A=p[1];return s?Object(B.jsx)(G,{}):Object(B.jsx)("div",{className:"releases",children:Object(B.jsx)("div",{className:"container",children:Object(B.jsxs)("div",{className:"releases__inner",children:[Object(B.jsxs)("div",{className:"releases__titles",children:[Object(B.jsx)("h2",{className:"releases__titles-main",children:c}),Object(B.jsx)("h3",{className:"releases__titles-subtitle",children:c})]}),Object(B.jsx)(re,{filterRatingHandler:function(){return a(E(m(t)))},filterTitleHandler:function(){return a(E(O(t)))},genreHandleChange:function(e){return h.map((function(t){return t.name===e.target.value?b(t.id):""}))},arrOfId:h}),Object(B.jsxs)("div",{className:"releases__container",children:[0===u.length&&Object(B.jsx)("div",{children:"No results"}),u.map((function(e){return Object(B.jsx)(ue,{film:e},e.id)}))]}),Object(B.jsx)(me.a,{count:10,shape:"rounded",onChange:function(e,t){A(t),a(w(t,i))},page:x,className:"pagination"})]})})})},he=function(){var e=Object(o.c)(k),t=Object(o.c)(S),c=Object(o.b)();return Object(n.useEffect)((function(){c(w(1,"upcoming"))}),[c]),t?Object(B.jsx)(G,{}):Object(B.jsx)(Oe,{movie:e,title:"New Releases",sort:"upcoming"})},ve=c.p+"static/media/noResults.98bc8263.png",pe=function(){var e=Object(o.c)(R);return Object(B.jsx)("div",{className:"result",children:Object(B.jsx)("div",{className:"container",children:Object(B.jsxs)("div",{className:"result__inner",children:[0===e.length?Object(B.jsx)("img",{className:"result__image",src:ve,alt:"noResults"}):"",e.map((function(e){return Object(B.jsx)(ue,{film:e},e.id)}))]})})})},xe=function(){var e=Object(o.c)(F).reduce((function(e,t){return e.map[t.id]||(e.map[t.id]=!0,e.filteredMovies.push(t)),e}),{map:{},filteredMovies:[]}).filteredMovies,t=Object(o.b)();return Object(n.useEffect)((function(){t({type:N})})),Object(B.jsx)("div",{className:"watchlist",children:Object(B.jsxs)("div",{className:"container",children:[Object(B.jsxs)("div",{className:"watchlist__titles",children:[Object(B.jsx)("h2",{className:"watchlist__titles-main",children:"Watch list"}),Object(B.jsx)("h3",{className:"watchlist__titles-subtitle",children:"Watch list"})]}),Object(B.jsxs)("div",{className:"watchlist__inner",children:[0===e.length&&Object(B.jsx)("div",{className:"watchlist__error",children:"Your watch list is empty"}),e.map((function(e){return Object(B.jsx)(ue,{film:e},e.id)}))]})]})})},Ae=function(){var e=Object(o.c)(k),t=Object(o.c)(S),c=Object(o.b)();return Object(n.useEffect)((function(){c(w(1,"popular"))}),[c]),t?Object(B.jsx)(G,{}):Object(B.jsx)(Oe,{movie:e,title:"Trending",sort:"popular"})},fe=function(){var e=Object(o.c)(k),t=Object(o.b)(),c=Object(o.c)(S),i="top_rated";return Object(n.useEffect)((function(){t(w(1,i))}),[t]),c?Object(B.jsx)(G,{}):Object(B.jsx)(Oe,{movie:e,title:"Top Rated",sort:i})};var _e=function(){return Object(B.jsxs)("div",{className:"app",children:[Object(B.jsx)(ne,{}),Object(B.jsxs)("div",{className:"app__content",children:[Object(B.jsx)(r.b,{exact:!0,path:"/",children:Object(B.jsx)(r.a,{to:"/main"})}),Object(B.jsx)(r.b,{path:"/main/:page?",render:function(){return Object(B.jsx)(he,{})}}),Object(B.jsx)(r.b,{path:"/trending",render:function(){return Object(B.jsx)(Ae,{})}}),Object(B.jsx)(r.b,{path:"/rated",render:function(){return Object(B.jsx)(fe,{})}}),Object(B.jsx)(r.b,{path:"/details/:id?",render:function(){return Object(B.jsx)(P,{})}}),Object(B.jsx)(r.b,{path:"/result/",render:function(){return Object(B.jsx)(pe,{})}}),Object(B.jsx)(r.b,{path:"/watchlist/",render:function(){return Object(B.jsx)(xe,{})}})]})]})},Ne=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,247)).then((function(t){var c=t.getCLS,n=t.getFID,i=t.getFCP,s=t.getLCP,a=t.getTTFB;c(e),n(e),i(e),s(e),a(e)}))},ge=c(46),Ie=c(148),we=c(26),Ce=c.n(we),Ee=c(17),ye=c(63),ke=c.n(ye),Te=function(e,t){return ke.a.get("https://api.themoviedb.org/3/movie/".concat(t,"?api_key=be74887c98ebed3c60c3d86b9e08ced2&page=").concat(e))},Re=function(e){return ke.a.get("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=be74887c98ebed3c60c3d86b9e08ced2"))},Qe=function(e){return ke.a.get("https://api.themoviedb.org/3/search/movie?api_key=be74887c98ebed3c60c3d86b9e08ced2&query=".concat(e))},Se=function(e){return ke.a.get("https://api.themoviedb.org/3/movie/".concat(e,"/videos?api_key=be74887c98ebed3c60c3d86b9e08ced2"))},Fe=Ce.a.mark(Le),We=Ce.a.mark(ze),Me=Ce.a.mark(qe),Be=Ce.a.mark(He),Ge=Ce.a.mark(Je);function Le(e){var t;return Ce.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,Object(Ee.c)(I(!0));case 2:return c.next=4,Object(Ee.b)((function(){return Te(e.movieId,e.sort)}));case 4:return t=c.sent,c.next=7,Object(Ee.c)(E(t.data.results));case 7:return c.next=9,Object(Ee.c)(I(!1));case 9:case"end":return c.stop()}}),Fe)}function ze(e){var t;return Ce.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,Object(Ee.c)(I(!0));case 2:return c.next=4,Object(Ee.b)((function(){return Re(e.movieId)}));case 4:return t=c.sent,console.log(t),c.next=8,Object(Ee.c)((n=t.data,{type:m,details:n}));case 8:return c.next=10,Object(Ee.c)(I(!1));case 10:case"end":return c.stop()}var n}),We)}function qe(e){var t;return Ce.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,Object(Ee.b)((function(){return Qe(e.value)}));case 2:return t=c.sent,c.next=5,Object(Ee.c)((n=t.data.results,{type:v,result:n}));case 5:case"end":return c.stop()}var n}),Me)}function He(e){var t;return Ce.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,Object(Ee.c)(I(!0));case 2:return c.next=4,Object(Ee.b)((function(){return Se(e.movieId)}));case 4:return t=c.sent,c.next=7,Object(Ee.c)(I(!1));case 7:return c.next=9,Object(Ee.c)((n=t.data.results,{type:x,movieTrailer:n}));case 9:case"end":return c.stop()}var n}),Be)}function Je(){return Ce.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Ee.d)(u,Le);case 2:return e.next=4,Object(Ee.d)(O,ze);case 4:return e.next=6,Object(Ee.d)(h,qe);case 6:return e.next=8,Object(Ee.d)(p,He);case 8:case"end":return e.stop()}}),Ge)}var Pe=Ce.a.mark(De);function De(){return Ce.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Ee.a)([Je()]);case 2:case"end":return e.stop()}}),Pe)}var Ke=Object(Ie.a)(),Xe=Object(ge.c)({movie:y}),Ye=Object(ge.e)(Xe,Object(ge.a)(Ke));Ke.run(De);var Ve=Ye;window.store=Ye,a.a.render(Object(B.jsx)(i.a.StrictMode,{children:Object(B.jsx)(o.a,{store:Ve,children:Object(B.jsx)(D.a,{basename:"/movie-search",children:Object(B.jsx)(_e,{})})})}),document.getElementById("root")),Ne()}},[[212,1,2]]]);
//# sourceMappingURL=main.7cebd3a7.chunk.js.map