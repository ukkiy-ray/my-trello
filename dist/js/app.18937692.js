(function(t){function i(i){for(var s,o,a=i[0],d=i[1],l=i[2],u=0,p=[];u<a.length;u++)o=a[u],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&p.push(n[o][0]),n[o]=0;for(s in d)Object.prototype.hasOwnProperty.call(d,s)&&(t[s]=d[s]);c&&c(i);while(p.length)p.shift()();return r.push.apply(r,l||[]),e()}function e(){for(var t,i=0;i<r.length;i++){for(var e=r[i],s=!0,a=1;a<e.length;a++){var d=e[a];0!==n[d]&&(s=!1)}s&&(r.splice(i--,1),t=o(o.s=e[0]))}return t}var s={},n={app:0},r=[];function o(i){if(s[i])return s[i].exports;var e=s[i]={i:i,l:!1,exports:{}};return t[i].call(e.exports,e,e.exports,o),e.l=!0,e.exports}o.m=t,o.c=s,o.d=function(t,i,e){o.o(t,i)||Object.defineProperty(t,i,{enumerable:!0,get:e})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,i){if(1&i&&(t=o(t)),8&i)return t;if(4&i&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(o.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&i&&"string"!=typeof t)for(var s in t)o.d(e,s,function(i){return t[i]}.bind(null,s));return e},o.n=function(t){var i=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(i,"a",i),i},o.o=function(t,i){return Object.prototype.hasOwnProperty.call(t,i)},o.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],d=a.push.bind(a);a.push=i,a=a.slice();for(var l=0;l<a.length;l++)i(a[l]);var c=d;r.push([0,"chunk-vendors"]),e()})({0:function(t,i,e){t.exports=e("56d7")},"034b":function(t,i,e){},"56d7":function(t,i,e){"use strict";e.r(i);e("e623"),e("e379"),e("5dc8"),e("37e1");var s=e("2b0e"),n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{attrs:{id:"app"}},[e("board")],1)},r=[],o=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",[e("header",[t._v(" my Trello ")]),e("main",[e("p",{staticClass:"info-line"},[t._v("All: "+t._s(t.totalCardCount)+" tasks")]),e("div",{staticClass:"list-index"},[e("draggable",{staticClass:"list-index",attrs:{list:t.lists},on:{end:t.movingList}},t._l(t.lists,(function(i,s){return e("list",{key:i.id,attrs:{title:i.title,cards:i.cards,listIndex:s},on:{change:t.movingCard}})})),1),e("list-add")],1)])])},a=[],d=e("5530"),l=e("b76a"),c=e.n(l),u=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("form",{class:t.classList,on:{submit:function(i){return i.preventDefault(),t.addList(i)}}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],staticClass:"text-input",attrs:{type:"text",placeholder:"Add new list"},domProps:{value:t.title},on:{focusin:t.startEditing,focusout:t.finishEditing,input:function(i){i.target.composing||(t.title=i.target.value)}}}),t.isEditing||t.titleExists?e("button",{staticClass:"add-button",attrs:{type:"submit"}},[t._v(" Add ")]):t._e()])},p=[],f={data:function(){return{title:"",isEditing:!1}},computed:{classList:function(){var t=["addlist"];return this.isEditing&&t.push("active"),this.titleExists&&t.push("addable"),t},titleExists:function(){return this.title.length>0}},methods:{addList:function(){this.$store.dispatch("addlist",{title:this.title}),this.title=""},startEditing:function(){this.isEditing=!0},finishEditing:function(){this.isEditing=!1}}},m=f,h=e("2877"),b=Object(h["a"])(m,u,p,!1,null,null,null),v=b.exports,g=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"list"},[e("div",{staticClass:"listheader"},[e("p",{staticClass:"list-title"},[t._v(t._s(t.title))]),e("p",{staticClass:"list-counter"},[t._v("total: "+t._s(t.totalCardInList))]),e("div",{staticClass:"deletelist",on:{click:t.removeList}},[t._v("×")])]),e("draggable",{attrs:{group:"cards",list:t.cards},on:{end:function(i){return t.$emit("change")}}},[t._l(t.cards,(function(i,s){return e("card",{key:i.id,attrs:{body:i.body,cardIndex:s,listIndex:t.listIndex}})})),e("card-add",{attrs:{listIndex:t.listIndex}})],2)],1)},y=[],x=(e("a9e3"),function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("form",{class:t.classList,on:{submit:function(i){return i.preventDefault(),t.addCardToList(i)}}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.body,expression:"body"}],staticClass:"text-input",attrs:{type:"text",placeholder:"Add new card"},domProps:{value:t.body},on:{focusin:t.startEditing,focusout:t.finishEditing,input:function(i){i.target.composing||(t.body=i.target.value)}}}),t.isEditing||t.bodyExists?e("button",{staticClass:"add-button",attrs:{type:"submit"}},[t._v(" Add ")]):t._e()])}),C=[],_={props:{listIndex:{type:Number,required:!0}},data:function(){return{body:"",isEditing:!1}},computed:{classList:function(){var t=["addcard"];return this.isEditing&&t.push("active"),this.bodyExists&&t.push("addable"),t},bodyExists:function(){return this.body.length>0}},methods:{startEditing:function(){this.isEditing=!0},finishEditing:function(){this.isEditing=!1},addCardToList:function(){this.$store.dispatch("addCardToList",{body:this.body,listIndex:this.listIndex}),this.body=""}}},E=_,L=Object(h["a"])(E,x,C,!1,null,null,null),I=L.exports,O=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"card"},[e("button",{staticClass:"close-button",on:{click:t.removeCardFromList}},[t._v(" × ")]),e("div",{staticClass:"body"},[t._v(" "+t._s(t.body)+" ")])])},j=[],w={props:{body:{type:String,required:!0},listIndex:{type:Number,required:!0},cardIndex:{type:Number,required:!0}},methods:{removeCardFromList:function(){confirm("本当にこのカードを削除しますか？")&&this.$store.dispatch("removeCardFromList",{cardIndex:this.cardIndex,listIndex:this.listIndex})}}},$=w,S=Object(h["a"])($,O,j,!1,null,null,null),T=S.exports,k={components:{draggable:c.a,CardAdd:I,Card:T},props:{title:{type:String,required:!0},cards:{type:Array,required:!0},listIndex:{type:Number,required:!0}},computed:{totalCardInList:function(){return this.cards.length}},methods:{removeList:function(){confirm("本当にこのリストを削除しますか？")&&this.$store.dispatch("removelist",{listIndex:this.listIndex})}}},A=k,P=Object(h["a"])(A,g,y,!1,null,null,null),N=P.exports,q=e("2f62"),F={components:{draggable:c.a,ListAdd:v,List:N},computed:Object(d["a"])(Object(d["a"])({},Object(q["b"])(["lists"])),{},{totalCardCount:function(){return this.$store.getters.totalCardCount}}),methods:{movingCard:function(){this.$store.dispatch("updateList",{lists:this.lists})},movingList:function(){this.$store.dispatch("updateList",{lists:this.lists})}}},M=F,J=Object(h["a"])(M,o,a,!1,null,null,null),D=J.exports,B={name:"App",components:{Board:D}},z=B,G=Object(h["a"])(z,n,r,!1,null,null,null),H=G.exports;e("a434"),e("d81d");s["a"].use(q["a"]);var K=localStorage.getItem("trello-lists"),Q=new q["a"].Store({state:{lists:K?JSON.parse(K):[{title:"Backlog",cards:[{body:"English"},{body:"Mathematics"}]},{title:"Todo",cards:[{body:"Science"}]},{title:"Doing",cards:[]}]},mutations:{addlist:function(t,i){t.lists.push({title:i.title,cards:[]})},removelist:function(t,i){t.lists.splice(i.listIndex,1)},addCardToList:function(t,i){t.lists[i.listIndex].cards.push({body:i.body})},removeCardFromList:function(t,i){t.lists[i.listIndex].cards.splice(i.cardIndex,1)},updateList:function(t,i){t.lists=i.lists}},actions:{addlist:function(t,i){t.commit("addlist",i)},removelist:function(t,i){t.commit("removelist",i)},addCardToList:function(t,i){t.commit("addCardToList",i)},removeCardFromList:function(t,i){t.commit("removeCardFromList",i)},updateList:function(t,i){t.commit("updateList",i)}},getters:{totalCardCount:function(t){var i=0;return t.lists.map((function(t){return i+=t.cards.length})),i}}});Q.subscribe((function(t,i){localStorage.setItem("trello-lists",JSON.stringify(i.lists))}));var R=Q;e("034b");s["a"].config.productionTip=!1,new s["a"]({store:R,render:function(t){return t(H)}}).$mount("#app")}});
//# sourceMappingURL=app.18937692.js.map