(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e96e5"],{"8e02":function(t,e,n){"use strict";n.r(e);var r=n("7a23"),s={class:"list-group"},a=["onClick"];function c(t,e,n,c,i,o){var u=this;return Object(r["p"])(),Object(r["d"])("ul",s,[(Object(r["p"])(!0),Object(r["d"])(r["a"],null,Object(r["t"])(t.tasks,(function(t,e){return Object(r["p"])(),Object(r["d"])("li",{key:e,onClick:function(e){return u.$router.push("/tasks/".concat(t._id))},class:"list-group-item list-group-item-action",style:{cursor:"pointer"}},Object(r["w"])(e+1)+": "+Object(r["w"])(t.title),9,a)})),128))])}var i=n("1da1"),o=(n("96cf"),n("7fbe")),u=Object(r["h"])({name:"TaskList",props:{},data:function(){return{tasks:[]}},methods:{loadTask:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,o["a"].getTasks();case 2:n=e.sent,t.tasks=n.data;case 4:case"end":return e.stop()}}),e)})))()}},mounted:function(){this.loadTask()}}),d=n("6b0d"),p=n.n(d);const l=p()(u,[["render",c]]);e["default"]=l}}]);
//# sourceMappingURL=chunk-2d0e96e5.ec5fec66.js.map