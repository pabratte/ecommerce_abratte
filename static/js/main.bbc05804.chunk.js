(this["webpackJsonpreactjs-ecommerce"]=this["webpackJsonpreactjs-ecommerce"]||[]).push([[0],{103:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),r=c(37),i=c.n(r),s=(c(91),c(92),c(15)),j=c(65),o=c(20),l=c(1);var u=function(e){var t=e.name,c=e.categoryId;return Object(l.jsx)(j.a.Item,{children:Object(l.jsx)(o.c,{to:"/category/".concat(c),children:t})})},b=c(28),d=c(29),m=c(44),h=a.a.createContext();function O(e){var t=e.children,c=Object(n.useState)([]),a=Object(s.a)(c,2),r=a[0],i=a[1],j=function(e){var t=!1;return r.forEach((function(c){c.item.id===e&&(t=!0)})),t},o=function(e,t){i(r.map((function(c){return c.item.id===e&&(c.quantity=t),c})))};return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)(h.Provider,{value:{items:r,addItem:function(e,t){if(j(e.id))o(e.id,t);else{var c=[].concat(Object(m.a)(r),[{item:e,quantity:t}]);i(c)}},removeItem:function(e){var t=r.filter((function(t){return t.item.id!==e}));i(t)},getItem:function(e){var t=void 0;return r.forEach((function(c){c.item.id===e&&(t=c)})),t},clear:function(){i([])},isEmpty:function(){return 0===r.length},getTotalPrice:function(){return r.reduce((function(e,t){return e+parseInt(t.item.price)*parseInt(t.quantity)}),0)},getTotalItems:function(){var e=0;return r.forEach((function(t,c){e+=t.quantity})),e}},children:t})})}var x=function(){var e=Object(n.useContext)(h);return Object(l.jsxs)(o.b,{to:"/cart",className:"cart-widget",children:[Object(l.jsx)(b.a,{icon:d.c}),e.getTotalItems()>0&&Object(l.jsx)("div",{className:"cart-widget-item-count",children:e.getTotalItems()})]})},p=c(85),f=c(76),v=c(82),g=c(2),y=c.n(g),N=c(6),I=c(81),C=c(27);Object(I.a)({apiKey:"AIzaSyD8iPxkwWtqXiGQ7jSB6XATWvdslnU5cZ0",authDomain:"mimitos-ecommerce.firebaseapp.com",projectId:"mimitos-ecommerce",storageBucket:"mimitos-ecommerce.appspot.com",messagingSenderId:"862628270568",appId:"1:862628270568:web:290876bce8eb3a9009d45d",measurementId:"G-YSXBVLSZZ9"});var k=Object(C.f)();function S(){return(S=Object(N.a)(y.a.mark((function e(){var t,c;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(C.e)(Object(C.b)(k,"categories"));case 2:return t=e.sent,c=[],t.forEach((function(e){c.push({id:e.id,name:e.data().name})})),e.abrupt("return",c);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function w(){return(w=Object(N.a)(y.a.mark((function e(t){var c,n,a,r;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=Object(C.b)(k,"items"),n=Object(C.g)(c,Object(C.h)("category","==",parseInt(t))),e.next=4,Object(C.e)(n);case 4:return a=e.sent,r=[],a.forEach((function(e){var t=e.data();r.push({id:e.id,title:t.title,description:t.description,price:t.price,thumbnail:t.thumbnail})})),e.abrupt("return",r);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function E(){return(E=Object(N.a)(y.a.mark((function e(t){var c,n,a;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=Object(C.c)(k,"items",t),e.next=3,Object(C.d)(c);case 3:if(n=e.sent,console.log("Here"),!n.exists()){e.next=11;break}return a=n.data(),console.log(a),e.abrupt("return",{id:t,title:a.title,description:a.description,price:a.price,thumbnail:a.thumbnail});case 11:console.log("No such document!");case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function T(){return(T=Object(N.a)(y.a.mark((function e(t,c){var n,a;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={buyer:t,items:c.map((function(e){return{id:e.item.id,title:e.item.title,price:e.item.price,quantity:e.quantity}})),total:c.reduce((function(e,t){return e+parseInt(t.item.price)*parseInt(t.quantity)}),0),date:new Date},console.log(n),e.next=4,Object(C.a)(Object(C.b)(k,"orders"),n);case 4:return a=e.sent,e.abrupt("return",a.id);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function q(){return(q=Object(N.a)(y.a.mark((function e(t){var c,n,a;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=Object(C.c)(k,"orders",t),e.next=3,Object(C.d)(c);case 3:if(!(n=e.sent).exists()){e.next=9;break}return a=n.data(),e.abrupt("return",a);case 9:console.log("No such document!");case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var B=function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),c=t[0],a=t[1],r=Object(n.useContext)(h);return Object(n.useEffect)((function(){(function(){return S.apply(this,arguments)})().then((function(e){a(e)}))}),[]),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(p.a,{expand:"lg",children:Object(l.jsxs)(f.a,{children:[Object(l.jsx)(v.a,{children:Object(l.jsx)(o.c,{to:"/",children:"ReactBuy"})}),r.getTotalItems()>0&&Object(l.jsx)(x,{})]})}),Object(l.jsx)(f.a,{children:Object(l.jsx)(j.a,{className:"mt-3",children:c.map((function(e){return Object(l.jsx)(u,{categoryId:e.id,name:e.name},e.id)}))})})]})},F=c(19),P=c(106),A=c(105),L=c(83),G=c(112);var D=function(e){var t=e.item;return Object(l.jsx)(L.a,{className:"col-3",children:Object(l.jsxs)(G.a,{className:"m-2",children:[Object(l.jsx)(G.a.Img,{variant:"top",src:t.thumbnail}),Object(l.jsxs)(G.a.Body,{children:[Object(l.jsx)(G.a.Title,{className:"item-card-title",children:t.title}),Object(l.jsx)(G.a.Text,{children:t.description}),Object(l.jsx)(o.b,{to:"/item/".concat(t.id),className:"btn btn-primary",children:"Add to cart"})]})]})})};var z=function(e){var t=e.items;return Object(l.jsx)(A.a,{children:t.map((function(e){return Object(l.jsx)(D,{item:e},e.id)}))})};var R=function(){var e=a.a.useState(void 0),t=Object(s.a)(e,2),c=t[0],r=t[1],i=a.a.useState(""),j=Object(s.a)(i,2),o=j[0],u=j[1],m=a.a.useState(!0),h=Object(s.a)(m,2),O=h[0],x=h[1],p=Object(F.h)().categoryId;return Object(n.useEffect)((function(){x(!0),function(e){return w.apply(this,arguments)}(p).then((function(e){x(!1),r(e)})).catch((function(e){x(!1),r(null),u(e)}))}),[p]),Object(l.jsxs)(f.a,{children:[O&&Object(l.jsxs)(P.a,{variant:"info",className:"mt-3",children:[Object(l.jsx)(b.a,{className:"fa-spin",icon:d.d}),Object(l.jsx)("span",{className:"m-2",children:"Loading..."})]}),!O&&!c&&Object(l.jsx)(P.a,{variant:"danger",className:"mt-3",children:Object(l.jsxs)("span",{className:"m-2",children:["An error ocurred: ",o]})}),!O&&c&&0===c.length&&Object(l.jsx)(P.a,{variant:"info",className:"mt-3",children:Object(l.jsx)("span",{className:"m-2",children:"It seems there are no items in this category"})}),!O&&c&&Object(l.jsx)(z,{items:c})]})},Y=c(108),$=c(107);var H=function(e){var t=e.onAdd,c=e.initial,a=void 0===c?1:c,r=e.stock,i=void 0===r?10:r,j=Object(n.useState)(parseInt(a,10)),o=Object(s.a)(j,2),u=o[0],m=o[1];return Object(l.jsxs)(f.a,{children:[Object(l.jsx)(A.a,{className:"mb-2",children:Object(l.jsxs)($.a,{className:"m-0 p-0",size:"sm",children:[Object(l.jsx)(Y.a,{onClick:function(){return m(u-1)},variant:"outline-primary",disabled:u<=1,className:"col-2",children:Object(l.jsx)(b.a,{icon:d.a})})," ",Object(l.jsx)(Y.a,{variant:"outline-primary",className:"col-10 item-count-number",disabled:!0,children:u})," ",Object(l.jsx)(Y.a,{onClick:function(){return m(u+1)},variant:"outline-primary",disabled:u>=i,className:"col-2",children:Object(l.jsx)(b.a,{icon:d.b})})," "]})}),Object(l.jsxs)(A.a,{children:[Object(l.jsx)(Y.a,{onClick:function(){return t(u)},disabled:u>i,variant:"primary",size:"lg",children:"Add to cart"})," "]})]})};var X=function(e){var t=e.item,c=a.a.useState(1),r=Object(s.a)(c,2),i=r[0],j=r[1],o=a.a.useState(!0),u=Object(s.a)(o,2),b=u[0],d=u[1],m=Object(F.g)(),O=Object(n.useContext)(h);return Object(l.jsxs)(A.a,{className:"item-detail",children:[Object(l.jsx)(L.a,{className:"col-md-5",children:Object(l.jsx)("img",{className:"img-responsive item-detail-img",src:t.thumbnail,alt:t.title})}),Object(l.jsxs)(L.a,{className:"col-md-6",children:[Object(l.jsx)("h2",{className:"item-detail-title",children:t.title}),Object(l.jsx)("p",{className:"item-detail-description",children:t.description}),Object(l.jsxs)("h3",{className:"item-detail-price",children:["$",t.price]}),b?Object(l.jsx)(H,{initial:i,onAdd:function(e){j(e),d(!1)}}):Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)(A.a,{className:"mb-2",children:[Object(l.jsx)(L.a,{children:Object(l.jsx)(Y.a,{className:"block-button",variant:"primary",size:"lg",onClick:function(){O.addItem(t,i),m.push("/cart")},children:"Go to cart"})}),Object(l.jsx)(L.a,{children:Object(l.jsx)(Y.a,{className:"block-button",variant:"outline-primary",size:"lg",onClick:function(){d(!0)},children:"Cancel"})})]})})]})]})};var Z=function(){var e=a.a.useState(void 0),t=Object(s.a)(e,2),c=t[0],r=t[1],i=a.a.useState(""),j=Object(s.a)(i,2),o=j[0],u=j[1],m=a.a.useState(!0),h=Object(s.a)(m,2),O=h[0],x=h[1],p=Object(F.h)().itemId;return Object(n.useEffect)((function(){x(!0),function(e){return E.apply(this,arguments)}(p).then((function(e){x(!1),r(e)})).catch((function(e){r(null),u(e)}))}),[p]),Object(l.jsxs)(f.a,{children:[O&&Object(l.jsxs)(P.a,{variant:"info",className:"mt-3",children:[Object(l.jsx)(b.a,{className:"fa-spin",icon:d.d}),Object(l.jsx)("span",{className:"m-2",children:"Loading..."})]}),!O&&!c&&Object(l.jsx)(P.a,{variant:"danger",className:"mt-3",children:Object(l.jsxs)("span",{className:"m-2",children:["An error ocurred: ",o]})}),!O&&c&&Object(l.jsx)(X,{item:c})]})},J=c(110);function Q(e){var t=e.item,c=e.quantity,n=e.onRemove;return Object(l.jsxs)(A.a,{className:"cart-table-row",children:[Object(l.jsx)(L.a,{className:"col-md-1",children:Object(l.jsx)("img",{alt:t.description,className:"img-responsive cart-list-img",src:"".concat(t.thumbnail)})}),Object(l.jsx)(L.a,{className:"col-md-1 cart-col-quantity",children:c}),Object(l.jsx)(L.a,{className:"col-md-7",children:t.title}),Object(l.jsx)(L.a,{className:"col-md-2 cart-col-price",children:"$".concat(t.price*c)}),Object(l.jsx)(L.a,{className:"col-md-1 cart-col-price",children:Object(l.jsx)(Y.a,{variant:"outline-danger",onClick:function(){n(t.id)},children:Object(l.jsx)(b.a,{icon:d.e})})})]})}var W=function(){var e=Object(n.useContext)(h),t=Object(F.g)(),c=Object(n.useState)(!1),a=Object(s.a)(c,2),r=a[0],i=a[1],j=Object(n.useState)(null),o=Object(s.a)(j,2),u=o[0],b=o[1],d=function(){i(!1),b(null)},m=function(e){i(!0),b(e)};return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)(f.a,{className:"mt-3",children:[e.isEmpty()&&Object(l.jsxs)(P.a,{variant:"secondary",className:"cart-empty",children:[Object(l.jsx)("div",{children:"The cart is empty"}),Object(l.jsx)(Y.a,{variant:"primary",onClick:function(){t.push("/")},children:"Go shopping!"})]}),!e.isEmpty()&&Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(A.a,{children:Object(l.jsx)(L.a,{className:"cart-table-title",children:"Your items"})}),e.items.map((function(e){return Object(l.jsx)(Q,{item:e.item,quantity:e.quantity,onRemove:m},e.item.id)})),Object(l.jsx)(A.a,{children:Object(l.jsx)(L.a,{className:"cart-table-total",children:"Total: $".concat(e.getTotalPrice())})}),Object(l.jsx)(A.a,{className:"mt-3",children:Object(l.jsx)(L.a,{className:"p-0",children:Object(l.jsx)(Y.a,{variant:"primary",onClick:function(){t.push("/profile")},className:"btn-lg",children:"Checkout"})})})]})]}),Object(l.jsxs)(J.a,{show:r,onHide:d,children:[Object(l.jsx)(J.a.Header,{closeButton:!0,children:Object(l.jsx)(J.a.Title,{children:"Remove Item"})}),Object(l.jsx)(J.a.Body,{children:"Do you really wish to remove this item from the cart?"}),Object(l.jsxs)(J.a.Footer,{children:[Object(l.jsx)(Y.a,{variant:"secondary",onClick:d,children:"Cancel"}),Object(l.jsx)(Y.a,{variant:"danger",onClick:function(){e.removeItem(u),d()},children:"Remove"})]})]})]})};function K(){var e=Object(n.useContext)(h),t=Object(F.g)();return Object(l.jsx)(f.a,{children:Object(l.jsx)(A.a,{className:"mt-3",children:Object(l.jsx)(L.a,{xs:12,children:Object(l.jsx)(Y.a,{variant:"primary",onClick:function(){e.clear(),t.push("/")},children:"Pay & finish"})})})})}var M=c(111);function U(){var e=Object(n.useState)(""),t=Object(s.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)(""),i=Object(s.a)(r,2),j=i[0],o=i[1],u=Object(n.useState)(""),b=Object(s.a)(u,2),d=b[0],m=b[1],O=Object(F.g)(),x=Object(n.useContext)(h);return Object(l.jsx)(f.a,{children:Object(l.jsxs)(M.a,{className:"mt-3",onSubmit:function(e){e.preventDefault(),function(e,t){return T.apply(this,arguments)}({name:c,phone:j,email:d},x.items).then((function(e){x.clear(),O.push("/order/".concat(e))})).catch((function(e){console.log("Error generating new order: ".concat(e))}))},children:[Object(l.jsxs)(M.a.Group,{className:"mb-3",controlId:"formBasicEmail",children:[Object(l.jsx)(M.a.Label,{children:"Name"}),Object(l.jsx)(M.a.Control,{type:"text",onChange:function(e){return a(e.target.value)},placeholder:"Your name"})]}),Object(l.jsxs)(M.a.Group,{className:"mb-3",controlId:"formBasicEmail",children:[Object(l.jsx)(M.a.Label,{children:"Phone number"}),Object(l.jsx)(M.a.Control,{type:"text",onChange:function(e){return o(e.target.value)},placeholder:"123 456 789"})]}),Object(l.jsxs)(M.a.Group,{className:"mb-3",controlId:"formBasicEmail",children:[Object(l.jsx)(M.a.Label,{children:"Email address"}),Object(l.jsx)(M.a.Control,{type:"email",onChange:function(e){return m(e.target.value)},placeholder:"Your email"})]}),Object(l.jsx)(Y.a,{variant:"primary",type:"submit",children:"Pay & finish"})]})})}var V=c(109);function _(){var e=Object(F.h)().orderId,t=a.a.useState(void 0),c=Object(s.a)(t,2),r=c[0],i=c[1],j=a.a.useState(""),o=Object(s.a)(j,2),u=o[0],m=o[1],h=a.a.useState(!0),O=Object(s.a)(h,2),x=O[0],p=O[1],v=Object(F.g)();return Object(n.useEffect)((function(){p(!0),function(e){return q.apply(this,arguments)}(e).then((function(e){p(!1),i(e)})).catch((function(e){i(null),m(e)}))}),[e]),Object(l.jsxs)(f.a,{className:"mt-3",children:[x&&Object(l.jsxs)(P.a,{variant:"info",className:"mt-3",children:[Object(l.jsx)(b.a,{className:"fa-spin",icon:d.d}),Object(l.jsx)("span",{className:"m-2",children:"Loading..."})]}),!x&&!r&&Object(l.jsx)(P.a,{variant:"danger",className:"mt-3",children:Object(l.jsxs)("span",{className:"m-2",children:["An error ocurred: ",u]})}),!x&&r&&Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h1",{children:"Your order is ready!"}),Object(l.jsxs)("h4",{children:["Order Code: ",e]}),Object(l.jsxs)(V.a,{children:[Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{children:"Item"}),Object(l.jsx)("th",{children:"Price"}),Object(l.jsx)("th",{children:"Quantity"}),Object(l.jsx)("th",{children:"Total"})]})}),Object(l.jsxs)("tbody",{children:[r.items.map((function(e){return Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:e.title}),Object(l.jsx)("td",{children:e.price}),Object(l.jsx)("td",{children:e.quantity}),Object(l.jsxs)("td",{children:["$",parseInt(e.price)*parseInt(e.quantity)]})]})})),Object(l.jsx)("tr",{children:Object(l.jsx)("th",{colspan:"4"})}),Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{colspan:"3",children:"Total"}),Object(l.jsxs)("th",{children:["$",r.total]})]})]})]}),Object(l.jsx)(Y.a,{onClick:function(){v.push("/")},children:"Continue shopping"})]})]})}function ee(){return Object(l.jsxs)(F.d,{children:[Object(l.jsx)(F.b,{path:"/category/:categoryId",component:R}),Object(l.jsx)(F.b,{path:"/item/:itemId",component:Z}),Object(l.jsx)(F.b,{path:"/cart",component:W}),Object(l.jsx)(F.b,{path:"/checkout",component:K}),Object(l.jsx)(F.b,{path:"/profile",component:U}),Object(l.jsx)(F.b,{path:"/order/:orderId",component:_}),Object(l.jsx)(F.b,{path:"/",children:Object(l.jsx)(F.a,{to:"/category/1"})})]})}var te=function(){return Object(l.jsx)(O,{children:Object(l.jsxs)(o.a,{children:[Object(l.jsx)(B,{}),Object(l.jsx)(ee,{})]})})},ce=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,113)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;c(e),n(e),a(e),r(e),i(e)}))};i.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(te,{})}),document.getElementById("root")),ce()},91:function(e,t,c){},92:function(e,t,c){}},[[103,1,2]]]);
//# sourceMappingURL=main.bbc05804.chunk.js.map