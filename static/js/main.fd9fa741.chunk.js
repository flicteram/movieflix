(this.webpackJsonpfreeflix=this.webpackJsonpfreeflix||[]).push([[0],{36:function(e,t,c){},52:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c(18),a=c.n(s),i=(c(36),c(3)),r=c(4),o=c(1);var j=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),c=t[0],s=t[1],a="";if(Object(n.useEffect)((function(){fetch("https://api.themoviedb.org/3/trending/movie/day?api_key=4fd39374b175ef0640037cc65b89f715").then((function(e){return e.json()})).then((function(e){return s(e.results)}))}),[]),c.length>0){var j=Math.floor(Math.random()*c.length);a=Object(o.jsxs)("div",{className:"posterEl",children:[Object(o.jsx)("img",{alt:c[j].id,className:"posterBig",src:"https://image.tmdb.org/t/p/original/".concat(c[j].backdrop_path)}),Object(o.jsxs)("div",{className:"posterDetails",children:[Object(o.jsx)("h1",{children:c[j].title||c[j].name}),Object(o.jsx)(r.b,{to:"/movie/details/".concat(c[j].id),children:Object(o.jsx)("button",{className:"detailsButton",children:"Detalis"})}),Object(o.jsx)("p",{children:c[j].overview.length>200?c[j].overview.split("").slice(0,200).join("")+"...":c[j].overview})]})]})}return Object(o.jsx)("div",{className:"posterContainer",children:a})},b=c(6),h=Object(n.createContext)();function l(e){var t=e.children,c=Object(n.useState)(""),s=Object(i.a)(c,2),a=s[0],r=s[1],j=Object(b.f)();Object(n.useEffect)((function(){a.trim()?j.push("/search"):j.push("/")}),[a,j]);return Object(o.jsx)(h.Provider,{value:{breakPoints:[{width:300,itemsToShow:2,itemToScroll:2},{width:700,itemsToShow:3,itemToScroll:3},{width:900,itemsToShow:4,itemToScroll:4},{width:1300,itemsToShow:5,itemToScroll:5},{width:1700,itemsToShow:8,itemToScroll:4}],search:a,handleChange:function(e){e.preventDefault(),r(e.target.value)}},children:t})}var d=c(5);var u=function(){var e=Object(n.useContext)(h).breakPoints,t=Object(n.useState)([]),c=Object(i.a)(t,2),s=c[0],a=c[1];Object(n.useEffect)((function(){fetch("https://api.themoviedb.org/3/trending/movie/day?api_key=4fd39374b175ef0640037cc65b89f715").then((function(e){return e.json()})).then((function(e){return a(e.results)}))}),[]);var j=s.map((function(e){return Object(o.jsx)(r.b,{to:"/movie/details/".concat(e.id),children:Object(o.jsx)("img",{alt:e.id||e.title,className:"trendingImg",src:"https://image.tmdb.org/t/p/w200/".concat(e.poster_path)},e.id)})}));return Object(o.jsxs)("div",{className:"trendingContainer",children:[Object(o.jsx)("h2",{children:"Trending Movies"}),Object(o.jsx)(d.a,{breakPoints:e,showArrows:!0,pagination:!1,children:j})]})};var m=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),c=t[0],s=t[1],a=Object(n.useContext)(h).breakPoints;Object(n.useEffect)((function(){fetch("https://api.themoviedb.org/3/movie/popular?api_key=4fd39374b175ef0640037cc65b89f715&language=en-US&page=1").then((function(e){return e.json()})).then((function(e){return s(e.results)}))}),[]);var j=c.map((function(e){return Object(o.jsx)(r.b,{to:"/movie/details/".concat(e.id),children:Object(o.jsx)("img",{alt:e.id,className:"popularImg",src:"https://image.tmdb.org/t/p/w200/".concat(e.poster_path)},e.id)})}));return Object(o.jsxs)("div",{className:"popularContainer",children:[Object(o.jsx)("h2",{children:"Popular Movies"}),Object(o.jsx)(d.a,{breakPoints:a,showArrows:!0,pagination:!1,children:j})]})};var O=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),c=t[0],s=t[1],a=Object(n.useContext)(h).breakPoints;Object(n.useEffect)((function(){fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=4fd39374b175ef0640037cc65b89f715&language=en-US&page=1").then((function(e){return e.json()})).then((function(e){return s(e.results)}))}),[]);var j=c.map((function(e){return Object(o.jsx)(r.b,{to:"/movie/details/".concat(e.id),children:Object(o.jsx)("img",{className:"topRatedImg",alt:e.id,src:"https://image.tmdb.org/t/p/w200/".concat(e.poster_path)},e.id)})}));return Object(o.jsxs)("div",{className:"topRated",children:[Object(o.jsx)("h2",{children:"Top Rated"}),Object(o.jsx)(d.a,{breakPoints:a,showArrows:!0,pagination:!1,children:j})]})};var f=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),c=t[0],s=t[1],a=Object(n.useContext)(h).breakPoints;Object(n.useEffect)((function(){fetch("https://api.themoviedb.org/3/discover/movie?api_key=4fd39374b175ef0640037cc65b89f715&with_genres=35&page=1").then((function(e){return e.json()})).then((function(e){return s(e.results)}))}),[]);var j=c.map((function(e){return Object(o.jsx)(r.b,{to:"/movie/details/".concat(e.id),children:Object(o.jsx)("img",{alt:e.id,className:"comedyImg",src:"https://image.tmdb.org/t/p/w200/".concat(e.poster_path)},e.id)})}));return Object(o.jsxs)("div",{className:"comedyContainer",children:[Object(o.jsx)("h2",{children:"Comedy Movies"}),Object(o.jsx)(d.a,{breakPoints:a,showArrows:!0,pagination:!1,children:j})]})};var p=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),c=t[0],s=t[1],a=Object(n.useContext)(h).breakPoints;Object(n.useEffect)((function(){fetch("https://api.themoviedb.org/3/discover/movie?api_key=4fd39374b175ef0640037cc65b89f715&with_genres=28&page=1").then((function(e){return e.json()})).then((function(e){return s(e.results)}))}),[]);var j=c.map((function(e){return Object(o.jsx)(r.b,{to:"/movie/details/".concat(e.id),children:Object(o.jsx)("img",{alt:e.id,className:"actionImg",src:"https://image.tmdb.org/t/p/w200/".concat(e.poster_path)},e.id)})}));return Object(o.jsxs)("div",{className:"actionContainer",children:[Object(o.jsx)("h2",{children:"Action Movies"}),Object(o.jsx)(d.a,{breakPoints:a,showArrows:!0,pagination:!1,children:j})]})};var g=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),c=t[0],s=t[1],a=Object(n.useContext)(h).breakPoints;Object(n.useEffect)((function(){fetch("https://api.themoviedb.org/3/discover/movie?api_key=4fd39374b175ef0640037cc65b89f715&with_genres=10749&page=1").then((function(e){return e.json()})).then((function(e){return s(e.results)}))}),[]);var j=c.map((function(e){return Object(o.jsx)(r.b,{to:"/movie/details/".concat(e.id),children:Object(o.jsx)("img",{alt:e.id,className:"romanticImg",src:"https://image.tmdb.org/t/p/w200/".concat(e.poster_path)},e.id)})}));return Object(o.jsxs)("div",{className:"romanticContainer",children:[Object(o.jsx)("h2",{children:"Romance Movies"}),Object(o.jsx)(d.a,{breakPoints:a,showArrows:!0,pagination:!1,children:j})]})};var v=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),c=t[0],s=t[1],a=Object(n.useContext)(h).breakPoints;Object(n.useEffect)((function(){fetch("https://api.themoviedb.org/3/discover/movie?api_key=4fd39374b175ef0640037cc65b89f715&with_genres=18&page=1").then((function(e){return e.json()})).then((function(e){return s(e.results)}))}),[]);var j=c.map((function(e){return Object(o.jsx)(r.b,{to:"/movie/details/".concat(e.id),children:Object(o.jsx)("img",{alt:e.id,className:"dramaImg",src:"https://image.tmdb.org/t/p/w200/".concat(e.poster_path)},e.id)})}));return Object(o.jsxs)("div",{className:"dramaContainer",children:[Object(o.jsx)("h2",{children:"Drama Movies"}),Object(o.jsx)(d.a,{breakPoints:a,showArrows:!0,pagination:!1,children:j})]})};var x=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),c=t[0],s=t[1],a=Object(n.useContext)(h).breakPoints;Object(n.useEffect)((function(){fetch("https://api.themoviedb.org/3/discover/movie?api_key=4fd39374b175ef0640037cc65b89f715&with_genres=27&page=1").then((function(e){return e.json()})).then((function(e){return s(e.results)}))}),[]);var j=c.map((function(e){return Object(o.jsx)(r.b,{to:"/movie/details/".concat(e.id),children:Object(o.jsx)("img",{alt:e.id,className:"horrorImg",src:"https://image.tmdb.org/t/p/w200/".concat(e.poster_path)},e.id)})}));return Object(o.jsxs)("div",{className:"horrorContainer",children:[Object(o.jsx)("h2",{children:"Horror Movies"}),Object(o.jsx)(d.a,{breakPoints:a,showArrows:!0,pagination:!1,children:j})]})};var w=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),c=t[0],s=t[1],a=Object(n.useContext)(h).breakPoints;Object(n.useEffect)((function(){fetch("https://api.themoviedb.org/3/discover/movie?api_key=4fd39374b175ef0640037cc65b89f715&with_genres=99&page=1").then((function(e){return e.json()})).then((function(e){return s(e.results)}))}),[]);var j=c.map((function(e){return Object(o.jsx)(r.b,{to:"/movie/details/".concat(e.id),children:Object(o.jsx)("img",{alt:e.id,className:"documentaryImg",src:"https://image.tmdb.org/t/p/w200/".concat(e.poster_path)},e.id)})}));return Object(o.jsxs)("div",{className:"documentaryContainer",children:[Object(o.jsx)("h2",{children:"Documentaries"}),Object(o.jsx)(d.a,{breakPoints:a,showArrows:!0,pagination:!1,children:j})]})};var k=function(){var e=Object(n.useState)("inherit"),t=Object(i.a)(e,2),c=t[0],s=t[1],a=Object(n.useContext)(h),j=a.search,b=a.handleChange;function l(){window.scrollY>50?s("black"):s("inherit")}return Object(n.useEffect)((function(){window.addEventListener("scroll",l)}),[]),Object(o.jsxs)("header",{style:{backgroundColor:c},children:[Object(o.jsx)(r.b,{to:"/",children:Object(o.jsx)("p",{className:"logo",children:"Movieflix"})}),Object(o.jsx)("input",{onChange:b,type:"text",value:j,placeholder:"search",autoFocus:!0}),Object(o.jsx)("img",{className:"glass",alt:"glass",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAFHklEQVR4nN2bTYhWVRjH/+cyiMggg8gQ0yQhk9kEImES1kJbhKiJSIGLiohoEdEiWoRE0CLCWrhoERXRQkqGiEFFVDJeoS8qy6RU0siFH9CozTjW1DSMvxbnHXkbp/uc895z7x37Ld975zn//3M/zrnnecapBIC5kpZLWibpNkk9krokdUqaL+kvSb9JOivplKTvJR12zo2UoacSgEXAc0ADGCeeSeArYCvQV7efIIAM2AB83DSQkgawCcjq9jkjTeNHE5ueiaPAurr9XgO4FdhXgfHp7AEW1W3+MeBKDeanGAa21GF8DvBOjcansx3oqMp8J/4lN9vYhZ9uC+EM8/Ml7ZO0qo3YY5K+lvSd/Fw/JGlU0oj8mqBH0h2SVkq6R9K8NsY4KGm9c+7vNv42H/xt/0nkVRkHduJniOCrA8wDNuNfdLHT6UeUMVUC70WImADeAHoTjLsUGIhMwrYUnltFPBkx+JdAf1IBXsP9wOkIHRtTDdwH/BE46OuU+DYGuvCPRQgXgO4Ug4Y895PAEwk8hujJgDcDk/B+0cEeCjT/eBp7UdreCkxCOzPWtUz/FDDAS4m9herrAA4E6Gu0O8CWgOAHqPHrDFgInAvQGX8XAJ8bQS+TYJorCv4T2WIgNmh/QNAXSvIUDfbSfBxYEBPwZSPgr0A7S9VSAFYFXLCgWWrqed5gnPe2c26smOx0OOe+kP/OyGN9UDBgAfb6e9bt0QFPG5ovEfLCBtYagX6owE80QG/AY7DEipPJb13ncTCN5LQ4585KOmmcZnlTJr9vn8c3oaJq4LBx3Hx0M0nW3G5luU5+No7fbAXIJFnz5flgOdVzzjjeZQXIJM0xzhkNllM9vxvHzbXL7Ky6pOOqdUImX6jMozONllKwtFl3iDL5Km0ePcFyqsd6yV20AmTyJeo8Zt0qsAVL22krQCa/Z5/H3cFyqucu4/hxK0Am35yQx+pQNVUC3CRpac4pV2V789Uf42NokrqrsjMAPGV8BxwJiZM550aVv6TMJD2SRHVaHjWO7w+OhG9LyeMMYC2YKgNYHvAluDImYF9AwGdK9BQFMGhoPdFO0IYR9AKwsAQ/sTpXB1ysZ9sJHLLb+mEJnmI0dgKnDI2XgPjVK74wEtL0VNujgC+9W2wtMsC6gAEmSFWJjdP2aoA2gE8pUiQlrBo7DmxK6M/StC3Q/BTH2k4CvuNzOGCQSeD5xF6naynSnFUoCSF1win2UkLJDFgGHGnTfJIkbI8Y6ArwIr6pqqjxXnw/wERB88WSgJ8VrAXHdC7je4VWRI41B1+f2El7jdYW/5kEq01urqRdkh6IMdTkvKTPJH0rv3s7JL9D0yHfMt8j6XZJKyTdp/J3no5LWuOcG2r9MTcBkr86knZK2lySsCq5LgnmpmizCfFhSa+VKKwq+iU1Wh8H8w5oBb8AeldS7d8EBTkp6V7n3MWobXHn3G5Jd0r6oBRZ1bFE0g4p8g5oBd+H84rK3zLbL2mxvOjUhPUQ5IHv1hhIPH39CeygOZ0CPc2pLDWDbd8BMyRigaSNkh6UvyvCe3Q8Q5IOSdojaXdzq641frekhvyLLBUjyRLQCr4zo0++Pr9Y0i3yhcqpDvIx+YLMGfk1wo/OuV8C4iZPQikJKJPUSbjhEiAlTcLIDVkdbq7k1iig8mNwqLiaGgG6C84Oa+v2UJgCSdhbt/ZkNJNwIsL8MWbBFn9S8J3kIf/Ruvd/Z74V/M72IP/e1xxu/nbdM/8P7LOy6Y/Ht7MAAAAASUVORK5CYII="})]})};var A=function(){return Object(o.jsxs)("div",{className:"home",children:[Object(o.jsx)(k,{}),Object(o.jsx)(j,{}),Object(o.jsx)(u,{}),Object(o.jsx)(m,{}),Object(o.jsx)(O,{}),Object(o.jsx)(f,{}),Object(o.jsx)(p,{}),Object(o.jsx)(g,{}),Object(o.jsx)(v,{}),Object(o.jsx)(x,{}),Object(o.jsx)(w,{})]})},N=c(20),C=c.n(N),S=c.p+"static/media/profile.c3f94521.png";var y=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),c=t[0],s=t[1],a=Object(b.h)().movieId,r=Object(n.useContext)(h).breakPoints;return Object(n.useEffect)((function(){fetch("https://api.themoviedb.org/3/movie/".concat(a,"/credits?api_key=4fd39374b175ef0640037cc65b89f715&language=en-US")).then((function(e){return e.json()})).then((function(e){return s(e.cast.slice(0,10).map((function(e){return Object(o.jsxs)("div",{className:"cast",children:[null===e.profile_path?Object(o.jsx)("img",{className:"user",src:S}):Object(o.jsx)("img",{className:"castImg",src:"https://image.tmdb.org/t/p/w500/".concat(e.profile_path)}),Object(o.jsx)("p",{className:"castName",children:e.name}),Object(o.jsx)("p",{className:"castChar",children:e.character})]})})))}))}),[a]),Object(o.jsxs)("div",{className:"castContainer",children:[Object(o.jsx)("h2",{children:"Cast"}),Object(o.jsx)(d.a,{breakPoints:r,showArrows:!0,pagination:!1,showEmptySlots:!0,children:c})]})};var E=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),c=t[0],s=t[1],a=Object(b.h)().movieId,r=Object(n.useContext)(h).breakPoints;return Object(n.useEffect)((function(){fetch("https://api.themoviedb.org/3/movie/".concat(a,"/credits?api_key=4fd39374b175ef0640037cc65b89f715&language=en-US")).then((function(e){return e.json()})).then((function(e){return s(e.crew.slice(0,10).map((function(e){return Object(o.jsxs)("div",{className:"crew",children:[null===e.profile_path?Object(o.jsx)("img",{className:"user",src:S}):Object(o.jsx)("img",{className:"crewImg",src:"https://image.tmdb.org/t/p/w500/".concat(e.profile_path)}),Object(o.jsx)("p",{className:"crewName",children:e.name}),Object(o.jsx)("p",{className:"crewJob",children:e.job})]})})))}))}),[a]),Object(o.jsxs)("div",{className:"crewContainer",children:[Object(o.jsx)("h2",{children:"Crew"}),Object(o.jsx)(d.a,{breakPoints:r,showArrows:!0,pagination:!1,showEmptySlots:!0,children:c})]})};var P=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),c=t[0],s=t[1],a=Object(b.h)().movieId,j=Object(n.useContext)(h).breakPoints;return Object(n.useEffect)((function(){fetch("https://api.themoviedb.org/3/movie/".concat(a,"/similar?api_key=4fd39374b175ef0640037cc65b89f715&language=en-US&page=1")).then((function(e){return e.json()})).then((function(e){return s(e.results.slice(0,8).map((function(e){return Object(o.jsx)(r.b,{to:"/movie/details/".concat(e.id),children:Object(o.jsx)("img",{className:"similarImg",src:"https://image.tmdb.org/t/p/w500//".concat(e.poster_path)})})})))}))}),[a]),Object(o.jsxs)("div",{className:"similar",children:[Object(o.jsx)("h2",{children:"More like this"}),Object(o.jsx)(d.a,{breakPoints:j,showArrows:!0,pagination:!1,children:c})]})},I={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)"}};C.a.setAppElement("#root");var M=function(){var e,t=Object(n.useState)([]),c=Object(i.a)(t,2),s=c[0],a=c[1],r=Object(n.useState)([]),j=Object(i.a)(r,2),h=j[0],l=j[1],d=Object(n.useState)(""),u=Object(i.a)(d,2),m=u[0],O=u[1],f=Object(n.useState)(!1),p=Object(i.a)(f,2),g=p[0],v=p[1],x=Object(b.h)().movieId,w="",A="",N="",S="https://image.tmdb.org/t/p/original/".concat(s.backdrop_path);return Object(n.useEffect)((function(){fetch("https://api.themoviedb.org/3/movie/".concat(x,"?api_key=4fd39374b175ef0640037cc65b89f715")).then((function(e){return e.json()})).then((function(e){return a(e)})),fetch("https://api.themoviedb.org/3/movie/".concat(x,"/credits?api_key=4fd39374b175ef0640037cc65b89f715&language=en-US")).then((function(e){return e.json()})).then((function(e){return l(e)})),fetch("https://api.themoviedb.org/3/movie/".concat(x,"/videos?api_key=4fd39374b175ef0640037cc65b89f715&language=en-US")).then((function(e){return e.json()})).then((function(e){return O(e.results.filter((function(e){return"trailer"===e.type.toLowerCase()})).map((function(e){return e.key}))[0])}))}),[x]),0===h.length?Object(o.jsx)("div",{className:"loadingDetailsPage",children:Object(o.jsx)("h1",{className:"loadingDetailsPageText",children:"Loading..."})}):(Object.values(s).length>0&&(w=s.release_date.slice(0,4),A=s.genres.slice(0,3).map((function(e){return e.name})).join(" | ")),Object.values(h).length>0&&(N=h.crew.filter((function(e){return"Director"===e.job})).map((function(e){return e.name}))),Object(o.jsxs)("div",{className:"detailsContainer",children:[Object(o.jsx)(k,{}),Object(o.jsxs)("div",{className:"detailsMovie",style:{backgroundImage:"url('".concat(S,"')"),backgroundSize:"cover",backgroundPosition:"center",boxShadow:"inset 0px -300px 500px 50px rgb(27, 26, 26)"},children:[Object(o.jsx)("img",{className:"posterSmall",alt:s.name||s.title,src:"https://image.tmdb.org/t/p/w500/".concat(s.poster_path)}),Object(o.jsxs)("div",{className:"detailsDetails",children:[Object(o.jsxs)("h1",{className:"detailsTitle",children:[s.name||s.title," ","(".concat(w,")")]}),Object(o.jsxs)("p",{className:"director",children:["Directed by ",Object(o.jsx)("strong",{children:N})]}),Object(o.jsx)("p",{className:"duration",children:(e=s.runtime,Math.floor(e/60)+"h "+e%60+"m")}),Object(o.jsx)("div",{className:"genresContainer",children:Object(o.jsx)("p",{children:A})}),Object(o.jsx)("button",{className:"trailerButton",onClick:function(){v(!0)},children:"Trailer"}),Object(o.jsx)(C.a,{className:"modal",isOpen:g,onRequestClose:function(){v(!1)},style:I,contentLabel:"Trailer",children:Object(o.jsx)("iframe",{title:s.name||s.title,src:"https://www.youtube.com/embed/".concat(m)})}),Object(o.jsx)("p",{className:"overview",children:s.overview})]})]}),Object(o.jsx)(y,{}),Object(o.jsx)(E,{}),Object(o.jsx)(P,{})]}))};var _=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),c=t[0],s=t[1],a=Object(n.useContext)(h).search,j="";return Object(n.useEffect)((function(){fetch("https://api.themoviedb.org/3/search/movie?api_key=4fd39374b175ef0640037cc65b89f715&query=".concat(a)).then((function(e){return e.json()})).then((function(e){return s(e.results)}))}),[a]),a.length>0&&(j=c.filter((function(e){return null!==e.poster_path})).map((function(e){return Object(o.jsx)(r.b,{to:"/movie/details/".concat(e.id),children:Object(o.jsx)("img",{className:"searchResult",alt:e.name||e.title,src:"https://image.tmdb.org/t/p/w500/".concat(e.poster_path)})})}))),Object(o.jsxs)("div",{className:"searchContainer",children:[Object(o.jsx)(k,{}),Object(o.jsx)("h1",{children:"Movie List"}),Object(o.jsx)("div",{className:"search",children:j.length>0?j:Object(o.jsx)("h2",{className:"noResults",children:"No results"})})]})};var D=function(){return Object(o.jsx)("div",{children:Object(o.jsxs)(b.c,{children:[Object(o.jsx)(b.a,{exact:!0,path:"/",children:Object(o.jsx)(A,{})}),Object(o.jsx)(b.a,{path:"/search",children:Object(o.jsx)(_,{})}),Object(o.jsx)(b.a,{path:"/movie/details/:movieId",children:Object(o.jsx)(M,{})})]})})};function T(){var e=Object(b.g)().pathname;return Object(n.useEffect)((function(){window.scrollTo(0,0)}),[e]),null}a.a.render(Object(o.jsx)(r.a,{children:Object(o.jsxs)(l,{children:[Object(o.jsx)(T,{}),Object(o.jsx)(D,{})]})}),document.getElementById("root"))}},[[52,1,2]]]);
//# sourceMappingURL=main.fd9fa741.chunk.js.map