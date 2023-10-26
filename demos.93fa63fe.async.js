"use strict";(self.webpackChunkrc_tooltip=self.webpackChunkrc_tooltip||[]).push([[433],{72745:function(O,h,e){e.r(h);var v=e(71062),n=e(9882),d=e(63382),t=e(99678),l=(0,t.jsx)("span",{children:"Tooltip Text"}),r={display:"table-cell",height:"60px",width:"80px",textAlign:"center",background:"#f6f6f6",verticalAlign:"middle",border:"5px solid white"},o={display:"table-row"},u=function(){return(0,t.jsxs)("div",{style:{display:"table",padding:120},children:[(0,t.jsxs)("div",{style:o,children:[(0,t.jsx)(n.Z,{placement:"left",overlay:l,arrowContent:(0,t.jsx)("div",{className:"rc-tooltip-arrow-inner"}),children:(0,t.jsx)("a",{href:"#",style:r,children:"Left"})}),(0,t.jsx)(n.Z,{placement:"top",overlay:l,arrowContent:(0,t.jsx)("div",{className:"rc-tooltip-arrow-inner"}),children:(0,t.jsx)("a",{href:"#",style:r,children:"Top"})}),(0,t.jsx)(n.Z,{placement:"bottom",overlay:l,arrowContent:(0,t.jsx)("div",{className:"rc-tooltip-arrow-inner"}),children:(0,t.jsx)("a",{href:"#",style:r,children:"Bottom"})}),(0,t.jsx)(n.Z,{placement:"right",overlay:l,arrowContent:(0,t.jsx)("div",{className:"rc-tooltip-arrow-inner"}),children:(0,t.jsx)("a",{href:"#",style:r,children:"Right"})})]}),(0,t.jsxs)("div",{style:o,children:[(0,t.jsx)(n.Z,{placement:"leftTop",overlay:l,arrowContent:(0,t.jsx)("div",{className:"rc-tooltip-arrow-inner"}),children:(0,t.jsx)("a",{href:"#",style:r,children:"Left Top"})}),(0,t.jsx)(n.Z,{placement:"leftBottom",overlay:l,arrowContent:(0,t.jsx)("div",{className:"rc-tooltip-arrow-inner"}),children:(0,t.jsx)("a",{href:"#",style:r,children:"Left Bottom"})}),(0,t.jsx)(n.Z,{placement:"rightTop",overlay:l,arrowContent:(0,t.jsx)("div",{className:"rc-tooltip-arrow-inner"}),children:(0,t.jsx)("a",{href:"#",style:r,children:"Right Top"})}),(0,t.jsx)(n.Z,{placement:"rightBottom",overlay:l,arrowContent:(0,t.jsx)("div",{className:"rc-tooltip-arrow-inner"}),children:(0,t.jsx)("a",{href:"#",style:r,children:"Right Bottom"})})]}),(0,t.jsxs)("div",{style:o,children:[(0,t.jsx)(n.Z,{placement:"topLeft",overlay:l,arrowContent:(0,t.jsx)("div",{className:"rc-tooltip-arrow-inner"}),children:(0,t.jsx)("a",{href:"#",style:r,children:"Top Left"})}),(0,t.jsx)(n.Z,{placement:"topRight",overlay:l,arrowContent:(0,t.jsx)("div",{className:"rc-tooltip-arrow-inner"}),children:(0,t.jsx)("a",{href:"#",style:r,children:"Top Right"})}),(0,t.jsx)(n.Z,{placement:"bottomLeft",overlay:l,arrowContent:(0,t.jsx)("div",{className:"rc-tooltip-arrow-inner"}),children:(0,t.jsx)("a",{href:"#",style:r,children:"Bottom Left"})}),(0,t.jsx)(n.Z,{placement:"bottomRight",overlay:l,arrowContent:(0,t.jsx)("div",{className:"rc-tooltip-arrow-inner"}),children:(0,t.jsx)("a",{href:"#",style:r,children:"Bottom Right"})})]})]})};h.default=u},87471:function(O,h,e){e.r(h);var v=e(94312),n=e.n(v),d=e(24127),t=e.n(d),l=e(1300),r=e.n(l),o=e(93242),u=e.n(o),x=e(10564),b=e.n(x),P=e(22060),c=e.n(P),T=e(71062),M=e(9882),a=e(52250),p=e(99678),_=function(D){u()(g,D);var C=b()(g);function g(){var f;n()(this,g);for(var s=arguments.length,j=new Array(s),y=0;y<s;y++)j[y]=arguments[y];return f=C.call.apply(C,[this].concat(j)),c()(r()(f),"state",{visible:!1}),c()(r()(f),"handleDestroy",function(){f.setState({destroy:!0})}),c()(r()(f),"handleChange",function(m){f.setState({visible:!m.target.value})}),f}return t()(g,[{key:"render",value:function(){return this.state.destroy?null:(0,p.jsxs)("div",{children:[(0,p.jsx)("div",{style:{marginTop:100,marginLeft:100,marginBottom:100},children:(0,p.jsx)(M.Z,{visible:this.state.visible,animation:"zoom",trigger:[],overlayStyle:{zIndex:1e3},overlay:(0,p.jsx)("span",{children:"required!"}),children:(0,p.jsx)("input",{onChange:this.handleChange})})}),(0,p.jsx)("button",{type:"button",onClick:this.handleDestroy,children:"destroy"})]})}}]),g}(T.Component);h.default=_},86159:function(O,h,e){e.r(h);var v=e(94312),n=e.n(v),d=e(24127),t=e.n(d),l=e(1300),r=e.n(l),o=e(93242),u=e.n(o),x=e(10564),b=e.n(x),P=e(22060),c=e.n(P),T=e(71062),M=e(9882),a=e(52250),p=e(99678);function _(C){C.preventDefault()}var D=function(C){u()(f,C);var g=b()(f);function f(){var s;n()(this,f);for(var j=arguments.length,y=new Array(j),m=0;m<j;m++)y[m]=arguments[m];return s=g.call.apply(g,[this].concat(y)),c()(r()(s),"state",{visible:!1}),c()(r()(s),"onVisibleChange",function(i){s.setState({visible:i})}),c()(r()(s),"onDestroy",function(){s.setState({destroy:!0})}),s}return t()(f,[{key:"render",value:function(){return this.state.destroy?null:(0,p.jsxs)("div",{children:[(0,p.jsx)("div",{style:{marginTop:300,marginLeft:100,marginBottom:100},children:(0,p.jsx)(M.Z,{visible:this.state.visible,animation:"zoom",onVisibleChange:this.onVisibleChange,trigger:"click",overlay:(0,p.jsx)("span",{children:"I am a tooltip"}),children:(0,p.jsx)("a",{href:"#",onClick:_,children:"trigger"})})}),(0,p.jsx)("button",{type:"button",onClick:this.onDestroy,children:"destroy"})]})}}]),f}(T.Component);h.default=D},32181:function(O,h,e){e.r(h);var v=e(71062),n=e(9882),d=e(52250),t=e(11828),l=e(99678),r=(0,l.jsx)("span",{children:"Tooltip Text"}),o={display:"table-cell",height:"60px",width:"80px",textAlign:"center",background:"#f6f6f6",verticalAlign:"middle",border:"5px solid white"},u={display:"table-row"},x=function(){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("div",{style:{display:"table",padding:120},children:[(0,l.jsxs)("div",{style:u,children:[(0,l.jsx)(n.Z,{placement:"left",overlay:r,children:(0,l.jsx)("a",{href:"#",style:o,children:"Left"})}),(0,l.jsx)(n.Z,{placement:"top",overlay:r,children:(0,l.jsx)("a",{href:"#",style:o,children:"Top"})}),(0,l.jsx)(n.Z,{placement:"bottom",overlay:r,children:(0,l.jsx)("a",{href:"#",style:o,children:"Bottom"})}),(0,l.jsx)(n.Z,{placement:"right",overlay:r,children:(0,l.jsx)("a",{href:"#",style:o,children:"Right"})})]}),(0,l.jsxs)("div",{style:u,children:[(0,l.jsx)(n.Z,{placement:"leftTop",overlay:r,children:(0,l.jsx)("a",{href:"#",style:o,children:"Left Top"})}),(0,l.jsx)(n.Z,{placement:"leftBottom",overlay:r,children:(0,l.jsx)("a",{href:"#",style:o,children:"Left Bottom"})}),(0,l.jsx)(n.Z,{placement:"rightTop",overlay:r,children:(0,l.jsx)("a",{href:"#",style:o,children:"Right Top"})}),(0,l.jsx)(n.Z,{placement:"rightBottom",overlay:r,children:(0,l.jsx)("a",{href:"#",style:o,children:"Right Bottom"})})]}),(0,l.jsxs)("div",{style:u,children:[(0,l.jsx)(n.Z,{placement:"topLeft",overlay:r,children:(0,l.jsx)("a",{href:"#",style:o,children:"Top Left"})}),(0,l.jsx)(n.Z,{placement:"topRight",overlay:r,children:(0,l.jsx)("a",{href:"#",style:o,children:"Top Right"})}),(0,l.jsx)(n.Z,{placement:"bottomLeft",overlay:r,children:(0,l.jsx)("a",{href:"#",style:o,children:"Bottom Left"})}),(0,l.jsx)(n.Z,{placement:"bottomRight",overlay:r,children:(0,l.jsx)("a",{href:"#",style:o,children:"Bottom Right"})})]})]}),(0,l.jsx)("hr",{}),(0,l.jsxs)("div",{children:[(0,l.jsx)("h5",{children:"Debug Usage"}),(0,l.jsx)(t.Z,{prefixCls:"rc-tooltip",className:"rc-tooltip-placement-top",style:{display:"inline-block",position:"relative"},children:"Test"})]})]})};h.default=x},75041:function(O,h,e){e.r(h);var v=e(9882),n=e(71062),d=e(63382),t=e(99678),l=(0,t.jsx)("span",{children:"Tooltip Text"}),r=function(){var u=n.useRef();return(0,t.jsx)("div",{style:{padding:10},children:(0,t.jsx)("div",{ref:u,style:{border:"1px solid black",width:"100%",height:"calc(100vh - 40px)",boxSizing:"border-box",overflow:"auto"},children:(0,t.jsx)("div",{style:{background:"rgba(255,0,0,0.05)",width:"300%",height:"200%",position:"relative"},children:(0,t.jsx)(v.Z,{placement:"top",overlay:l,overlayInnerStyle:{width:300,height:50},popupVisible:!0,arrowContent:(0,t.jsx)("div",{className:"rc-tooltip-arrow-inner"}),children:(0,t.jsx)("div",{style:{background:"rgba(0,255,0,0.3)",width:100,height:50,position:"absolute",left:"30%",top:"30%"},children:"Hover Me"})})})})})};h.default=r},26233:function(O,h,e){e.r(h);var v=e(71062),n=e(9882),d=e(63382),t=e(99678),l=(0,t.jsx)("span",{children:"Tooltip Text"}),r={display:"table-cell",height:"60px",width:"80px",textAlign:"center",background:"#f6f6f6",verticalAlign:"middle",border:"5px solid white"},o={display:"table-row"},u=function(){return(0,t.jsxs)("div",{style:{display:"table",padding:120},children:[(0,t.jsxs)("div",{style:o,children:[(0,t.jsx)(n.Z,{placement:"left",overlay:l,showArrow:!1,children:(0,t.jsx)("a",{href:"#",style:r,children:"Left"})}),(0,t.jsx)(n.Z,{placement:"top",overlay:l,showArrow:!1,children:(0,t.jsx)("a",{href:"#",style:r,children:"Top"})}),(0,t.jsx)(n.Z,{placement:"bottom",overlay:l,showArrow:!1,children:(0,t.jsx)("a",{href:"#",style:r,children:"Bottom"})}),(0,t.jsx)(n.Z,{placement:"right",overlay:l,showArrow:!1,children:(0,t.jsx)("a",{href:"#",style:r,children:"Right"})})]}),(0,t.jsxs)("div",{style:o,children:[(0,t.jsx)(n.Z,{placement:"leftTop",overlay:l,showArrow:!1,children:(0,t.jsx)("a",{href:"#",style:r,children:"Left Top"})}),(0,t.jsx)(n.Z,{placement:"leftBottom",overlay:l,showArrow:!1,children:(0,t.jsx)("a",{href:"#",style:r,children:"Left Bottom"})}),(0,t.jsx)(n.Z,{placement:"rightTop",overlay:l,showArrow:!1,children:(0,t.jsx)("a",{href:"#",style:r,children:"Right Top"})}),(0,t.jsx)(n.Z,{placement:"rightBottom",overlay:l,showArrow:!1,children:(0,t.jsx)("a",{href:"#",style:r,children:"Right Bottom"})})]}),(0,t.jsxs)("div",{style:o,children:[(0,t.jsx)(n.Z,{placement:"topLeft",overlay:l,showArrow:!1,children:(0,t.jsx)("a",{href:"#",style:r,children:"Top Left"})}),(0,t.jsx)(n.Z,{placement:"topRight",overlay:l,showArrow:!1,children:(0,t.jsx)("a",{href:"#",style:r,children:"Top Right"})}),(0,t.jsx)(n.Z,{placement:"bottomLeft",overlay:l,showArrow:!1,children:(0,t.jsx)("a",{href:"#",style:r,children:"Bottom Left"})}),(0,t.jsx)(n.Z,{placement:"bottomRight",overlay:l,showArrow:!1,children:(0,t.jsx)("a",{href:"#",style:r,children:"Bottom Right"})})]})]})};h.default=u},93844:function(O,h,e){e.r(h);var v=e(94312),n=e.n(v),d=e(24127),t=e.n(d),l=e(1300),r=e.n(l),o=e(93242),u=e.n(o),x=e(10564),b=e.n(x),P=e(22060),c=e.n(P),T=e(71062),M=e(9882),a=e(52250),p=e(58035),_=e(99678),D=function(C){u()(f,C);var g=b()(f);function f(){var s;n()(this,f);for(var j=arguments.length,y=new Array(j),m=0;m<j;m++)y[m]=arguments[m];return s=g.call.apply(g,[this].concat(y)),c()(r()(s),"state",{destroyTooltipOnHide:!1,destroyTooltipOptions:[{name:"don't destroy",value:0},{name:"destroy parent",value:1},{name:"keep parent",value:2}],placement:"right",transitionName:"rc-tooltip-zoom",trigger:{hover:1},offsetX:p.C.right.offset[0],offsetY:p.C.right.offset[1],overlayInnerStyle:void 0}),c()(r()(s),"onPlacementChange",function(i){var E=i.target.value,A=p.C[E].offset;s.setState({placement:i.target.value,offsetX:A[0],offsetY:A[1]})}),c()(r()(s),"onTransitionChange",function(i){s.setState({transitionName:i.target.checked?i.target.value:""})}),c()(r()(s),"onTriggerChange",function(i){var E=s.state.trigger;i.target.checked?E[i.target.value]=1:delete E[i.target.value],s.setState({trigger:E})}),c()(r()(s),"onOffsetXChange",function(i){var E=i.target.value;s.setState({offsetX:E||void 0})}),c()(r()(s),"onOffsetYChange",function(i){var E=i.target.value;s.setState({offsetY:E||void 0})}),c()(r()(s),"onVisibleChange",function(i){console.log("tooltip",i)}),c()(r()(s),"onDestroyChange",function(i){var E=i.target.value;s.setState({destroyTooltipOnHide:[!1,{keepParent:!1},{keepParent:!0}][E]})}),c()(r()(s),"onOverlayInnerStyleChange",function(){s.setState(function(i){return{overlayInnerStyle:i.overlayInnerStyle?void 0:{background:"red"}}})}),c()(r()(s),"preventDefault",function(i){i.preventDefault()}),s}return t()(f,[{key:"render",value:function(){var j=this.state,y=j.trigger;return(0,_.jsxs)("div",{children:[(0,_.jsxs)("div",{style:{margin:"10px 20px"},children:[(0,_.jsxs)("label",{children:["placement:",(0,_.jsx)("select",{value:this.state.placement,onChange:this.onPlacementChange,children:Object.keys(p.C).map(function(m){return(0,_.jsx)("option",{value:m,children:m},m)})})]}),"\xA0\xA0\xA0\xA0",(0,_.jsxs)("label",{children:[(0,_.jsx)("input",{value:"rc-tooltip-zoom",type:"checkbox",onChange:this.onTransitionChange,checked:this.state.transitionName==="rc-tooltip-zoom"}),"transitionName"]}),"\xA0\xA0\xA0\xA0",(0,_.jsxs)("label",{children:["destroyTooltipOnHide:",(0,_.jsx)("select",{onChange:this.onDestroyChange,children:this.state.destroyTooltipOptions.map(function(m){var i=m.name,E=m.value;return(0,_.jsx)("option",{value:E,children:i},E)})})]}),"\xA0\xA0\xA0\xA0 trigger:",(0,_.jsxs)("label",{children:[(0,_.jsx)("input",{value:"hover",checked:y.hover,type:"checkbox",onChange:this.onTriggerChange}),"hover"]}),(0,_.jsxs)("label",{children:[(0,_.jsx)("input",{value:"focus",checked:y.focus,type:"checkbox",onChange:this.onTriggerChange}),"focus"]}),(0,_.jsxs)("label",{children:[(0,_.jsx)("input",{value:"click",checked:y.click,type:"checkbox",onChange:this.onTriggerChange}),"click"]}),(0,_.jsx)("br",{}),(0,_.jsxs)("label",{children:["offsetX:",(0,_.jsx)("input",{type:"text",value:j.offsetX,onChange:this.onOffsetXChange,style:{width:50}})]}),"\xA0\xA0\xA0\xA0",(0,_.jsxs)("label",{children:["offsetY:",(0,_.jsx)("input",{type:"text",value:j.offsetY,onChange:this.onOffsetYChange,style:{width:50}})]}),(0,_.jsxs)("label",{children:[(0,_.jsx)("input",{value:"overlayInnerStyle",checked:!!j.overlayInnerStyle,type:"checkbox",onChange:this.onOverlayInnerStyleChange}),"overlayInnerStyle(red background)"]})]}),(0,_.jsx)("div",{style:{margin:100},children:(0,_.jsx)(M.Z,{placement:this.state.placement,mouseEnterDelay:0,mouseLeaveDelay:.1,destroyTooltipOnHide:this.state.destroyTooltipOnHide,trigger:Object.keys(this.state.trigger),onVisibleChange:this.onVisibleChange,overlay:(0,_.jsx)("div",{style:{height:50,width:50},children:"i am a tooltip"}),align:{offset:[this.state.offsetX,this.state.offsetY]},transitionName:this.state.transitionName,overlayInnerStyle:j.overlayInnerStyle,children:(0,_.jsx)("div",{style:{height:100,width:100,border:"1px solid red"},children:"trigger"})})})]})}}]),f}(T.Component);h.default=D},11828:function(O,h,e){e.d(h,{Z:function(){return l}});var v=e(12124),n=e.n(v),d=e(71062),t=e(99678);function l(r){var o=r.children,u=r.prefixCls,x=r.id,b=r.overlayInnerStyle,P=r.className,c=r.style;return(0,t.jsx)("div",{className:n()("".concat(u,"-content"),P),style:c,children:(0,t.jsx)("div",{className:"".concat(u,"-inner"),id:x,role:"tooltip",style:b,children:typeof o=="function"?o():o})})}},9882:function(O,h,e){e.d(h,{Z:function(){return T}});var v=e(11828),n=e(26801),d=e.n(n),t=e(27161),l=e.n(t),r=e(34666),o=e(71062),u=e(58035),x=e(99678),b=["overlayClassName","trigger","mouseEnterDelay","mouseLeaveDelay","overlayStyle","prefixCls","children","onVisibleChange","afterVisibleChange","transitionName","animation","motion","placement","align","destroyTooltipOnHide","defaultVisible","getTooltipContainer","overlayInnerStyle","arrowContent","overlay","id","showArrow"],P=function(a,p){var _=a.overlayClassName,D=a.trigger,C=D===void 0?["hover"]:D,g=a.mouseEnterDelay,f=g===void 0?0:g,s=a.mouseLeaveDelay,j=s===void 0?.1:s,y=a.overlayStyle,m=a.prefixCls,i=m===void 0?"rc-tooltip":m,E=a.children,A=a.onVisibleChange,K=a.afterVisibleChange,S=a.transitionName,Z=a.animation,N=a.motion,U=a.placement,w=U===void 0?"right":U,L=a.align,V=L===void 0?{}:L,R=a.destroyTooltipOnHide,z=R===void 0?!1:R,X=a.defaultVisible,H=a.getTooltipContainer,Y=a.overlayInnerStyle,k=a.arrowContent,$=a.overlay,F=a.id,B=a.showArrow,G=B===void 0?!0:B,J=l()(a,b),I=(0,o.useRef)(null);(0,o.useImperativeHandle)(p,function(){return I.current});var W=d()({},J);"visible"in a&&(W.popupVisible=a.visible);var Q=function(){return(0,x.jsx)(v.Z,{prefixCls:i,id:F,overlayInnerStyle:Y,children:$},"content")};return(0,x.jsx)(r.Z,d()(d()({popupClassName:_,prefixCls:i,popup:Q,action:C,builtinPlacements:u.C,popupPlacement:w,ref:I,popupAlign:V,getPopupContainer:H,onPopupVisibleChange:A,afterPopupVisibleChange:K,popupTransitionName:S,popupAnimation:Z,popupMotion:N,defaultPopupVisible:X,autoDestroy:z,mouseLeaveDelay:j,popupStyle:y,mouseEnterDelay:f,arrow:G},W),{},{children:E}))},c=(0,o.forwardRef)(P),T=c},58035:function(O,h,e){e.d(h,{C:function(){return t}});var v={shiftX:64,adjustY:1},n={adjustX:1,shiftY:!0},d=[0,0],t={left:{points:["cr","cl"],overflow:n,offset:[-4,0],targetOffset:d},right:{points:["cl","cr"],overflow:n,offset:[4,0],targetOffset:d},top:{points:["bc","tc"],overflow:v,offset:[0,-4],targetOffset:d},bottom:{points:["tc","bc"],overflow:v,offset:[0,4],targetOffset:d},topLeft:{points:["bl","tl"],overflow:v,offset:[0,-4],targetOffset:d},leftTop:{points:["tr","tl"],overflow:n,offset:[-4,0],targetOffset:d},topRight:{points:["br","tr"],overflow:v,offset:[0,-4],targetOffset:d},rightTop:{points:["tl","tr"],overflow:n,offset:[4,0],targetOffset:d},bottomRight:{points:["tr","br"],overflow:v,offset:[0,4],targetOffset:d},rightBottom:{points:["bl","br"],overflow:n,offset:[4,0],targetOffset:d},bottomLeft:{points:["tl","bl"],overflow:v,offset:[0,4],targetOffset:d},leftBottom:{points:["br","bl"],overflow:n,offset:[-4,0],targetOffset:d}},l=null},52250:function(){},63382:function(){}}]);
