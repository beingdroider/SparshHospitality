var e;!function(t){jQuery.fn.menuzord=function(n){t.extend(i={showSpeed:300,hideSpeed:300,trigger:"hover",showDelay:0,hideDelay:0,effect:"fade",align:"left",responsive:!0,animation:"none",indentChildren:!0,indicatorFirstLevel:"+",indicatorSecondLevel:"+",scrollable:!0,scrollableMaxHeight:400},n);var i,o,r=t(this),a=t(r).children(".menuzord-menu"),s=t(a).find("li"),l=2e3,c=200;function d(n){"fade"==i.effect?t(n).children(".dropdown, .megamenu").stop(!0,!0).delay(i.showDelay).fadeIn(i.showSpeed).addClass(i.animation):t(n).children(".dropdown, .megamenu").stop(!0,!0).delay(i.showDelay).slideDown(i.showSpeed).addClass(i.animation)}function u(n){"fade"==i.effect?t(n).children(".dropdown, .megamenu").stop(!0,!0).delay(i.hideDelay).fadeOut(i.hideSpeed).removeClass(i.animation):t(n).children(".dropdown, .megamenu").stop(!0,!0).delay(i.hideDelay).slideUp(i.hideSpeed).removeClass(i.animation),t(n).children(".dropdown, .megamenu").find(".dropdown, .megamenu").stop(!0,!0).delay(i.hideDelay).fadeOut(i.hideSpeed)}function h(){t(a).find(".dropdown, .megamenu").hide(0),navigator.userAgent.match(/Mobi/i)||window.navigator.msMaxTouchPoints>0||"click"==i.trigger?(t(".menuzord-menu > li > a, .menuzord-menu ul.dropdown li a").bind("click touchstart",function(n){if(n.stopPropagation(),n.preventDefault(),t(this).parent("li").siblings("li").find(".dropdown, .megamenu").stop(!0,!0).fadeOut(300),"none"==t(this).siblings(".dropdown, .megamenu").css("display"))return d(t(this).parent("li")),!1;u(t(this).parent("li")),window.location.href=t(this).attr("href")}),t(document).bind("click.menu touchstart.menu",function(n){0==t(n.target).closest(".menuzord").length&&t(".menuzord-menu").find(".dropdown, .megamenu").fadeOut(300)})):t(s).bind("mouseenter",function(){d(this)}).bind("mouseleave",function(){u(this)})}function p(){var n=t(a).children("li").children(".dropdown, .megamenu");if(t(window).innerWidth()>991)for(var i=t(r).outerWidth(!0),o=0;o<n.length;o++)t(n[o]).parent("li").position().left+t(n[o]).outerWidth()>i?t(n[o]).css("right",0):((i==t(n[o]).outerWidth()||i-t(n[o]).outerWidth()<20)&&t(n[o]).css("left",0),t(n[o]).parent("li").position().left+t(n[o]).outerWidth()<i&&t(n[o]).css("right","auto"))}function f(){t(r).find("li, a").unbind(),t(document).unbind("click.menu touchstart.menu")}function v(){return window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth}function m(){p(),991>=v()&&l>991&&(f(),i.responsive?(t(a).hide(0),t(o).show(0).click(function(){"none"==t(a).css("display")?t(a).slideDown(i.showSpeed):t(a).slideUp(i.hideSpeed).find(".dropdown, .megamenu").hide(i.hideSpeed)}),t(a).find(".dropdown, .megamenu").hide(0),t(a).find(".indicator").each(function(){t(this).parent("a").siblings(".dropdown, .megamenu").length>0&&t(this).bind("click",function(n){t(a).scrollTo({top:45,left:0},600),"A"==t(this).parent().prop("tagName")&&n.preventDefault(),"none"==t(this).parent("a").siblings(".dropdown, .megamenu").css("display")?(t(this).parent("a").siblings(".dropdown, .megamenu").delay(i.showDelay).slideDown(i.showSpeed),t(this).parent("a").parent("li").siblings("li").find(".dropdown, .megamenu").slideUp(i.hideSpeed)):t(this).parent("a").siblings(".dropdown, .megamenu").slideUp(i.hideSpeed)})})):h()),v()>991&&c<=991&&(f(),t(a).show(0),t(o).hide(0),h()),l=v(),c=v(),function(){function n(n){var i=t(n).find(".menuzord-tabs-nav > li"),o=t(n).find(".menuzord-tabs-content");t(i).bind("click touchstart",function(n){n.stopPropagation(),n.preventDefault(),t(i).removeClass("active"),t(this).addClass("active"),t(o).hide(0),t(o[t(this).index()]).show(0)})}if(t(a).find(".menuzord-tabs").length>0)for(var i=t(a).find(".menuzord-tabs"),o=0;o<i.length;o++)n(i[o])}(),/MSIE (\d+\.\d+);/.test(navigator.userAgent)&&991>v()&&8==new Number(RegExp.$1)&&(t(o).hide(0),t(a).show(0),f(),h())}t(a).children("li").children("a").each(function(){t(this).siblings(".dropdown, .megamenu").length>0&&t(this).append("<span class='indicator'>"+i.indicatorFirstLevel+"</span>")}),t(a).find(".dropdown").children("li").children("a").each(function(){t(this).siblings(".dropdown").length>0&&t(this).append("<span class='indicator'>"+i.indicatorSecondLevel+"</span>")}),"right"==i.align&&t(a).addClass("menuzord-right"),i.indentChildren&&t(a).addClass("menuzord-indented"),i.responsive&&(t(r).addClass("menuzord-responsive").prepend("<a href='javascript:void(0)' class='showhide'><em></em><em></em><em></em></a>"),o=t(r).children(".showhide")),i.scrollable&&i.responsive&&t(a).css("max-height",i.scrollableMaxHeight).addClass("scrollable").append("<li class='scrollable-fix'></li>"),m(),t(window).resize(function(){m(),p()})}}(jQuery),(e="function"==typeof define&&define.amd?define:function(t,n){"undefined"!=typeof module&&module.exports?module.exports=n(require("jquery")):n(jQuery)})(["jquery"],function(t){var n=t.scrollTo=function(n,i,o){return t(window).scrollTo(n,i,o)};function i(n){return t.isFunction(n)||"object"==typeof n?n:{top:n,left:n}}return n.defaults={axis:"xy",duration:parseFloat(t.fn.jquery)>=1.3?0:1,limit:!0},n.window=function(n){return t(window)._scrollable()},t.fn._scrollable=function(){return this.map(function(){if(!(!this.nodeName||-1!=t.inArray(this.nodeName.toLowerCase(),["iframe","#document","html","body"])))return this;var n=(this.contentWindow||this).document||this.ownerDocument||this;return/webkit/i.test(navigator.userAgent)||"BackCompat"==n.compatMode?n.body:n.documentElement})},t.fn.scrollTo=function(o,r,a){return"object"==typeof r&&(a=r,r=0),"function"==typeof a&&(a={onAfter:a}),"max"==o&&(o=9e9),a=t.extend({},n.defaults,a),r=r||a.duration,a.queue=a.queue&&a.axis.length>1,a.queue&&(r/=2),a.offset=i(a.offset),a.over=i(a.over),this._scrollable().each(function(){if(null!=o){var s,l=this,c=t(l),d=o,u={},h=c.is("html,body");switch(typeof d){case"number":case"string":if(/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(d)){d=i(d);break}if(!(d=h?t(d):t(d,this)).length)return;case"object":(d.is||d.style)&&(s=(d=t(d)).offset())}var p=t.isFunction(a.offset)&&a.offset(l,d)||a.offset;t.each(a.axis.split(""),function(t,i){var o="x"==i?"Left":"Top",r=o.toLowerCase(),v="scroll"+o,m=l[v],g=n.max(l,i);if(s)u[v]=s[r]+(h?0:m-c.offset()[r]),a.margin&&(u[v]-=parseInt(d.css("margin"+o))||0,u[v]-=parseInt(d.css("border"+o+"Width"))||0),u[v]+=p[r]||0,a.over[r]&&(u[v]+=d["x"==i?"width":"height"]()*a.over[r]);else{var b=d[r];u[v]=b.slice&&"%"==b.slice(-1)?parseFloat(b)/100*g:b}a.limit&&/^\d+$/.test(u[v])&&(u[v]=u[v]<=0?0:Math.min(u[v],g)),!t&&a.queue&&(m!=u[v]&&f(a.onAfterFirst),delete u[v])}),f(a.onAfter)}function f(t){c.animate(u,r,a.easing,t&&function(){t.call(this,d,a)})}}).end()},n.max=function(n,i){var o="x"==i?"Width":"Height",r="scroll"+o;if(!t(n).is("html,body"))return n[r]-t(n)[o.toLowerCase()]();var a="client"+o,s=n.ownerDocument.documentElement,l=n.ownerDocument.body;return Math.max(s[r],l[r])-Math.min(s[a],l[a])},n}),function(t){t.fn.niceSelect=function(n){function i(n){n.after(t("<div></div>").addClass("nice-select").addClass(n.attr("class")||"").addClass(n.attr("disabled")?"disabled":"").attr("tabindex",n.attr("disabled")?null:"0").html('<span class="current"></span><ul class="list"></ul>'));var i=n.next(),o=n.find("option"),r=n.find("option:selected");i.find(".current").html(r.data("display")||r.text()),o.each(function(n){var o=t(this),r=o.data("display");i.find("ul").append(t("<li></li>").attr("data-value",o.val()).attr("data-display",r||null).addClass("option"+(o.is(":selected")?" selected":"")+(o.is(":disabled")?" disabled":"")).html(o.text()))})}if("string"==typeof n)return"update"==n?this.each(function(){var n=t(this),o=t(this).next(".nice-select"),r=o.hasClass("open");o.length&&(o.remove(),i(n),r&&n.next().trigger("click"))}):"destroy"==n?(this.each(function(){var n=t(this),i=t(this).next(".nice-select");i.length&&(i.remove(),n.css("display",""))}),0==t(".nice-select").length&&t(document).off(".nice_select")):console.log('Method "'+n+'" does not exist.'),this;this.hide(),this.each(function(){var n=t(this);n.next().hasClass("nice-select")||i(n)}),t(document).off(".nice_select"),t(document).on("click.nice_select",".nice-select",function(n){var i=t(this);t(".nice-select").not(i).removeClass("open"),i.toggleClass("open"),i.hasClass("open")?(i.find(".option"),i.find(".focus").removeClass("focus"),i.find(".selected").addClass("focus")):i.focus()}),t(document).on("click.nice_select",function(n){0===t(n.target).closest(".nice-select").length&&t(".nice-select").removeClass("open").find(".option")}),t(document).on("click.nice_select",".nice-select .option:not(.disabled)",function(n){var i=t(this),o=i.closest(".nice-select");o.find(".selected").removeClass("selected"),i.addClass("selected");var r=i.data("display")||i.text();o.find(".current").text(r),o.prev("select").val(i.data("value")).trigger("change")}),t(document).on("keydown.nice_select",".nice-select",function(n){var i=t(this),o=t(i.find(".focus")||i.find(".list .option.selected"));if(32==n.keyCode||13==n.keyCode)return i.hasClass("open")?o.trigger("click"):i.trigger("click"),!1;if(40==n.keyCode){if(i.hasClass("open")){var r=o.nextAll(".option:not(.disabled)").first();r.length>0&&(i.find(".focus").removeClass("focus"),r.addClass("focus"))}else i.trigger("click");return!1}if(38==n.keyCode){if(i.hasClass("open")){var a=o.prevAll(".option:not(.disabled)").first();a.length>0&&(i.find(".focus").removeClass("focus"),a.addClass("focus"))}else i.trigger("click");return!1}if(27==n.keyCode)i.hasClass("open")&&i.trigger("click");else if(9==n.keyCode&&i.hasClass("open"))return!1});var o=document.createElement("a").style;return o.cssText="pointer-events:auto","auto"!==o.pointerEvents&&t("html").addClass("no-csspointerevents"),this}}(jQuery),function(t){var n,i,o,r,a,s,l,c,d,u,h,p,f,v,m,g,b,y,$,w,x,k,C,_,S,A,z,T,O;t.fn.extend({venobox:function(W){var H=this,P=t.extend({arrowsColor:"#B6B6B6",autoplay:!1,bgcolor:"#fff",border:"0",closeBackground:"#161617",closeColor:"#d2d2d2",framewidth:"",frameheight:"",infinigall:!1,htmlClose:"&times;",htmlNext:"<span>Next</span>",htmlPrev:"<span>Prev</span>",numeratio:!1,numerationBackground:"#161617",numerationColor:"#d2d2d2",numerationPosition:"top",overlayClose:!0,overlayColor:"rgba(23,23,23,0.85)",spinner:"double-bounce",spinColor:"#d2d2d2",titleattr:"title",titleBackground:"#161617",titleColor:"#d2d2d2",titlePosition:"top",cb_pre_open:function(){return!0},cb_post_open:function(){},cb_pre_close:function(){return!0},cb_post_close:function(){},cb_post_resize:function(){},cb_after_nav:function(){},cb_init:function(){}},W);return P.cb_init(H),this.each(function(){function W(){x=T.data("gall"),b=T.data("numeratio"),f=T.data("infinigall"),k=(v=t('.vbox-item[data-gall="'+x+'"]')).eq(v.index(T)+1),C=v.eq(v.index(T)-1),v.length>1?(O=v.index(T)+1,o.html(O+" / "+v.length)):O=1,!0===b?o.show():o.hide(),""!==w?r.show():r.hide(),k.length||!0===f?(t(".vbox-next").css("display","block"),_=!0):(t(".vbox-next").css("display","none"),_=!1),v.index(T)>0||!0===f?(t(".vbox-prev").css("display","block"),S=!0):(t(".vbox-prev").css("display","none"),S=!1),(!0===S||!0===_)&&(c.on(TouchMouseEvent.DOWN,L),c.on(TouchMouseEvent.MOVE,j),c.on(TouchMouseEvent.UP,M))}function D(t){return!(t.length<1)&&!m&&(m=!0,y=t.data("overlay")||t.data("overlaycolor"),h=t.data("framewidth"),p=t.data("frameheight"),a=t.data("border"),i=t.data("bgcolor"),d=t.data("href")||t.attr("href"),n=t.data("autoplay"),w=t.attr(t.data("titleattr"))||"",t===C&&c.addClass("animated").addClass("swipe-right"),t===k&&c.addClass("animated").addClass("swipe-left"),void c.animate({opacity:0},500,function(){$.css("background",y),c.removeClass("animated").removeClass("swipe-left").removeClass("swipe-right").css({"margin-left":0,"margin-right":0}),"iframe"==t.data("vbtype")?N():"inline"==t.data("vbtype")?F():"ajax"==t.data("vbtype")?B():"video"==t.data("vbtype")||"vimeo"==t.data("vbtype")||"youtube"==t.data("vbtype")?V(n):(c.html('<img src="'+d+'">'),Q()),T=t,W(),m=!1,P.cb_after_nav(T,O,k,C)}))}function E(t){27===t.keyCode&&q(),37==t.keyCode&&!0===S&&D(C),39==t.keyCode&&!0===_&&D(k)}function q(){return!1!==P.cb_pre_close(T,O,k,C)&&(t("body").off("keydown",E).removeClass("vbox-open"),T.focus(),void $.animate({opacity:0},500,function(){$.remove(),m=!1,P.cb_post_close()}))}function L(t){c.addClass("animated"),startY=t.pageY,Y=t.pageX,startouch=!0}function j(t){if(!0===startouch){Z=t.pageX,endY=t.pageY,diffX=Z-Y,diffY=endY-startY;var n=Math.abs(diffX);n>Math.abs(diffY)&&100>=n&&(t.preventDefault(),c.css("margin-left",diffX))}}function M(t){if(!0===startouch){startouch=!1;var n=T,i=!1;0>(K=Z-Y)&&!0===_&&(n=k,i=!0),K>0&&!0===S&&(n=C,i=!0),Math.abs(K)>=G&&!0===i?D(n):c.css({"margin-left":0,"margin-right":0})}}function B(){t.ajax({url:d,cache:!1}).done(function(t){c.html('<div class="vbox-inline">'+t+"</div>"),Q()}).fail(function(){c.html('<div class="vbox-inline"><p>Error retrieving contents, please retry</div>'),U()})}function N(){c.html('<iframe class="venoframe" src="'+d+'"></iframe>'),U()}function V(t){var n,i=function t(n){if(n.match(/(http:|https:|)\/\/(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/),RegExp.$3.indexOf("youtu")>-1)var i="youtube";else if(RegExp.$3.indexOf("vimeo")>-1)var i="vimeo";return{type:i,id:RegExp.$6}}(d),o=(t?"?rel=0&autoplay=1":"?rel=0")+function t(n){var i="",o=decodeURIComponent(n).split("?");if(void 0!==o[1]){var r,a,s=o[1].split("&");for(a=0;a<s.length;a++)i=i+"&"+(r=s[a].split("="))[0]+"="+r[1]}return encodeURI(i)}(d);"vimeo"==i.type?n="https://player.vimeo.com/video/":"youtube"==i.type&&(n="https://www.youtube.com/embed/"),c.html('<iframe class="venoframe vbvid" webkitallowfullscreen mozallowfullscreen allowfullscreen frameborder="0" src="'+n+i.id+o+'"></iframe>'),U()}function F(){c.html('<div class="vbox-inline">'+t(d).html()+"</div>"),U()}function Q(){(images=c.find("img")).length?images.each(function(){t(this).one("load",function(){U()})}):U()}function U(){r.html(w),c.find(">:first-child").addClass("figlio").css({width:h,height:p,padding:a,background:i}),t("img.figlio").on("dragstart",function(t){t.preventDefault()}),R(),c.animate({opacity:"1"},"slow",function(){})}function R(){var n=c.outerHeight(),i=t(window).height();i>n+60?(g=(i-n)/2,c.css("margin-top",g),c.css("margin-bottom",g)):(g="30px",c.css("margin-top",g),c.css("margin-bottom",g)),P.cb_post_resize()}if((T=t(this)).data("venobox"))return!0;H.VBclose=function(){q()},T.addClass("vbox-item"),T.data("framewidth",P.framewidth),T.data("frameheight",P.frameheight),T.data("border",P.border),T.data("bgcolor",P.bgcolor),T.data("numeratio",P.numeratio),T.data("infinigall",P.infinigall),T.data("overlaycolor",P.overlayColor),T.data("titleattr",P.titleattr),T.data("venobox",!0),T.on("click",function(f){if(f.preventDefault(),T=t(this),!1===P.cb_pre_open(T))return!1;switch(H.VBnext=function(){D(k)},H.VBprev=function(){D(C)},y=T.data("overlay")||T.data("overlaycolor"),h=T.data("framewidth"),p=T.data("frameheight"),n=T.data("autoplay")||P.autoplay,a=T.data("border"),i=T.data("bgcolor"),_=!1,S=!1,m=!1,d=T.data("href")||T.attr("href"),u=T.data("css")||"",w=T.attr(T.data("titleattr"))||"",A='<div class="vbox-preloader">',P.spinner){case"rotating-plane":A+='<div class="sk-rotating-plane"></div>';break;case"double-bounce":A+='<div class="sk-double-bounce"><div class="sk-child sk-double-bounce1"></div><div class="sk-child sk-double-bounce2"></div></div>';break;case"wave":A+='<div class="sk-wave"><div class="sk-rect sk-rect1"></div><div class="sk-rect sk-rect2"></div><div class="sk-rect sk-rect3"></div><div class="sk-rect sk-rect4"></div><div class="sk-rect sk-rect5"></div></div>';break;case"wandering-cubes":A+='<div class="sk-wandering-cubes"><div class="sk-cube sk-cube1"></div><div class="sk-cube sk-cube2"></div></div>';break;case"spinner-pulse":A+='<div class="sk-spinner sk-spinner-pulse"></div>';break;case"three-bounce":A+='<div class="sk-three-bounce"><div class="sk-child sk-bounce1"></div><div class="sk-child sk-bounce2"></div><div class="sk-child sk-bounce3"></div></div>';break;case"cube-grid":A+='<div class="sk-cube-grid"><div class="sk-cube sk-cube1"></div><div class="sk-cube sk-cube2"></div><div class="sk-cube sk-cube3"></div><div class="sk-cube sk-cube4"></div><div class="sk-cube sk-cube5"></div><div class="sk-cube sk-cube6"></div><div class="sk-cube sk-cube7"></div><div class="sk-cube sk-cube8"></div><div class="sk-cube sk-cube9"></div></div>'}return A+="</div>",z='<a class="vbox-next">'+P.htmlNext+'</a><a class="vbox-prev">'+P.htmlPrev+"</a>",s='<div class="vbox-overlay '+u+'" style="background:'+y+'">'+A+'<div class="vbox-container"><div class="vbox-content"></div></div>'+(vbheader='<div class="vbox-title"></div><div class="vbox-num">0/0</div><div class="vbox-close">'+P.htmlClose+"</div>")+z+"</div>",t("body").append('<div class="ghostoverlay"></div>').append(s).addClass("vbox-open"),t(".vbox-preloader .sk-child, .vbox-preloader .sk-rotating-plane, .vbox-preloader .sk-rect, .vbox-preloader .sk-cube, .vbox-preloader .sk-spinner-pulse").css("background-color",P.spinColor),$=t(".vbox-overlay"),l=t(".vbox-container"),c=t(".vbox-content"),o=t(".vbox-num"),(r=t(".vbox-title")).css(P.titlePosition,"-1px"),r.css({color:P.titleColor,"background-color":P.titleBackground}),t(".vbox-close").css({color:P.closeColor,"background-color":P.closeBackground}),t(".vbox-num").css(P.numerationPosition,"-1px"),t(".vbox-num").css({color:P.numerationColor,"background-color":P.numerationBackground}),t(".vbox-next span, .vbox-prev span").css({"border-top-color":P.arrowsColor,"border-right-color":P.arrowsColor}),c.html(""),c.css("opacity","0"),W(),$.animate({opacity:1},250,function(){"iframe"==T.data("vbtype")?N():"inline"==T.data("vbtype")?F():"ajax"==T.data("vbtype")?B():"video"==T.data("vbtype")||"vimeo"==T.data("vbtype")||"youtube"==T.data("vbtype")?V(n):(c.html('<img src="'+d+'">'),Q()),P.cb_post_open(T,O,k,C)}),t("body").keydown(E),t(".vbox-prev").on("click",function(){D(C)}),t(".vbox-next").on("click",function(){D(k)}),!1});var X=".vbox-overlay";P.overlayClose||(X=".vbox-close"),t(document).on("click",X,function(n){(t(n.target).is(".vbox-overlay")||t(n.target).is(".vbox-content")||t(n.target).is(".vbox-close")||t(n.target).is(".vbox-preloader"))&&q()});var Y=null,Z=null,K=0,G=50;startouch=!1,TouchMouseEvent={DOWN:"touchmousedown",UP:"touchmouseup",MOVE:"touchmousemove"};var I=function(n){switch(n.type){case"mousedown":i=TouchMouseEvent.DOWN;break;case"mouseup":case"mouseout":i=TouchMouseEvent.UP;break;case"mousemove":i=TouchMouseEvent.MOVE;break;default:return}var i,o=ee(i,n,n.pageX,n.pageY);t(n.target).trigger(o)},J=function(n){switch(n.type){case"touchstart":i=TouchMouseEvent.DOWN;break;case"touchend":i=TouchMouseEvent.UP;break;case"touchmove":i=TouchMouseEvent.MOVE;break;default:return}var i,o,r=n.originalEvent.touches[0];o=i==TouchMouseEvent.UP?ee(i,n,null,null):ee(i,n,r.pageX,r.pageY),t(n.target).trigger(o)},ee=function(n,i,o,r){return t.Event(n,{pageX:o,pageY:r,originalEvent:i})};"ontouchstart"in window?(t(document).on("touchstart",J),t(document).on("touchmove",J),t(document).on("touchend",J)):(t(document).on("mousedown",I),t(document).on("mouseup",I),t(document).on("mouseout",I),t(document).on("mousemove",I)),t(window).resize(function(){t(".vbox-content").length&&setTimeout(R(),800)})})}})}(jQuery),/*!
* jquery.counterup.js 1.0
*
* Copyright 2013, Benjamin Intal http://gambit.ph @bfintal
* Released under the GPL v2 License
*
* Date: Nov 26, 2013
*/ function(t){"use strict";t.fn.counterUp=function(n){var i=t.extend({time:400,delay:10},n);return this.each(function(){var n=t(this),o=i,r=function(){var t=[],i=o.time/o.delay,r=n.text(),a=/[0-9]+,[0-9]+/.test(r);r=r.replace(/,/g,""),/^[0-9]+$/.test(r);for(var s=/^[0-9]+\.[0-9]+$/.test(r),l=s?(r.split(".")[1]||[]).length:0,c=i;c>=1;c--){var d=parseInt(r/i*c);if(s&&(d=parseFloat(r/i*c).toFixed(l)),a)for(;/(\d+)(\d{3})/.test(d.toString());)d=d.toString().replace(/(\d+)(\d{3})/,"$1,$2");t.unshift(d)}n.data("counterup-nums",t),n.text("0");var u=function(){n.text(n.data("counterup-nums").shift()),n.data("counterup-nums").length?setTimeout(n.data("counterup-func"),o.delay):(delete n.data("counterup-nums"),n.data("counterup-nums"),n.data("counterup-func"))};n.data("counterup-func",u),setTimeout(n.data("counterup-func"),o.delay)};n.waypoint(r,{offset:"100%",triggerOnce:!0})})}}(jQuery),function(){"use strict";function t(o){if(!o)throw Error("No options passed to Waypoint constructor");if(!o.element)throw Error("No element option passed to Waypoint constructor");if(!o.handler)throw Error("No handler option passed to Waypoint constructor");this.key="waypoint-"+n,this.options=t.Adapter.extend({},t.defaults,o),this.element=this.options.element,this.adapter=new t.Adapter(this.element),this.callback=o.handler,this.axis=this.options.horizontal?"horizontal":"vertical",this.enabled=this.options.enabled,this.triggerPoint=null,this.group=t.Group.findOrCreate({name:this.options.group,axis:this.axis}),this.context=t.Context.findOrCreateByElement(this.options.context),t.offsetAliases[this.options.offset]&&(this.options.offset=t.offsetAliases[this.options.offset]),this.group.add(this),this.context.add(this),i[this.key]=this,n+=1}var n=0,i={};t.prototype.queueTrigger=function(t){this.group.queueTrigger(this,t)},t.prototype.trigger=function(t){this.enabled&&this.callback&&this.callback.apply(this,t)},t.prototype.destroy=function(){this.context.remove(this),this.group.remove(this),delete i[this.key]},t.prototype.disable=function(){return this.enabled=!1,this},t.prototype.enable=function(){return this.context.refresh(),this.enabled=!0,this},t.prototype.next=function(){return this.group.next(this)},t.prototype.previous=function(){return this.group.previous(this)},t.invokeAll=function(t){var n=[];for(var o in i)n.push(i[o]);for(var r=0,a=n.length;a>r;r++)n[r][t]()},t.destroyAll=function(){t.invokeAll("destroy")},t.disableAll=function(){t.invokeAll("disable")},t.enableAll=function(){t.invokeAll("enable")},t.refreshAll=function(){t.Context.refreshAll()},t.viewportHeight=function(){return window.innerHeight||document.documentElement.clientHeight},t.viewportWidth=function(){return document.documentElement.clientWidth},t.adapters=[],t.defaults={context:window,continuous:!0,enabled:!0,group:"default",horizontal:!1,offset:0},t.offsetAliases={"bottom-in-view":function(){return this.context.innerHeight()-this.adapter.outerHeight()},"right-in-view":function(){return this.context.innerWidth()-this.adapter.outerWidth()}},window.Waypoint=t}(),function(){"use strict";function t(t){window.setTimeout(t,1e3/60)}function n(t){this.element=t,this.Adapter=r.Adapter,this.adapter=new this.Adapter(t),this.key="waypoint-context-"+i,this.didScroll=!1,this.didResize=!1,this.oldScroll={x:this.adapter.scrollLeft(),y:this.adapter.scrollTop()},this.waypoints={vertical:{},horizontal:{}},t.waypointContextKey=this.key,o[t.waypointContextKey]=this,i+=1,this.createThrottledScrollHandler(),this.createThrottledResizeHandler()}var i=0,o={},r=window.Waypoint,a=window.onload;n.prototype.add=function(t){var n=t.options.horizontal?"horizontal":"vertical";this.waypoints[n][t.key]=t,this.refresh()},n.prototype.checkEmpty=function(){var t=this.Adapter.isEmptyObject(this.waypoints.horizontal),n=this.Adapter.isEmptyObject(this.waypoints.vertical);t&&n&&(this.adapter.off(".waypoints"),delete o[this.key])},n.prototype.createThrottledResizeHandler=function(){function t(){n.handleResize(),n.didResize=!1}var n=this;this.adapter.on("resize.waypoints",function(){n.didResize||(n.didResize=!0,r.requestAnimationFrame(t))})},n.prototype.createThrottledScrollHandler=function(){function t(){n.handleScroll(),n.didScroll=!1}var n=this;this.adapter.on("scroll.waypoints",function(){(!n.didScroll||r.isTouch)&&(n.didScroll=!0,r.requestAnimationFrame(t))})},n.prototype.handleResize=function(){r.Context.refreshAll()},n.prototype.handleScroll=function(){var t={},n={horizontal:{newScroll:this.adapter.scrollLeft(),oldScroll:this.oldScroll.x,forward:"right",backward:"left"},vertical:{newScroll:this.adapter.scrollTop(),oldScroll:this.oldScroll.y,forward:"down",backward:"up"}};for(var i in n){var o=n[i],r=o.newScroll>o.oldScroll?o.forward:o.backward;for(var a in this.waypoints[i]){var s=this.waypoints[i][a],l=o.oldScroll<s.triggerPoint,c=o.newScroll>=s.triggerPoint,d=l&&c,u=!l&&!c;(d||u)&&(s.queueTrigger(r),t[s.group.id]=s.group)}}for(var h in t)t[h].flushTriggers();this.oldScroll={x:n.horizontal.newScroll,y:n.vertical.newScroll}},n.prototype.innerHeight=function(){return this.element==this.element.window?r.viewportHeight():this.adapter.innerHeight()},n.prototype.remove=function(t){delete this.waypoints[t.axis][t.key],this.checkEmpty()},n.prototype.innerWidth=function(){return this.element==this.element.window?r.viewportWidth():this.adapter.innerWidth()},n.prototype.destroy=function(){var t=[];for(var n in this.waypoints)for(var i in this.waypoints[n])t.push(this.waypoints[n][i]);for(var o=0,r=t.length;r>o;o++)t[o].destroy()},n.prototype.refresh=function(){var t,n=this.element==this.element.window,i=n?void 0:this.adapter.offset(),o={};for(var a in this.handleScroll(),t={horizontal:{contextOffset:n?0:i.left,contextScroll:n?0:this.oldScroll.x,contextDimension:this.innerWidth(),oldScroll:this.oldScroll.x,forward:"right",backward:"left",offsetProp:"left"},vertical:{contextOffset:n?0:i.top,contextScroll:n?0:this.oldScroll.y,contextDimension:this.innerHeight(),oldScroll:this.oldScroll.y,forward:"down",backward:"up",offsetProp:"top"}}){var s=t[a];for(var l in this.waypoints[a]){var c,d,u,h,p,f=this.waypoints[a][l],v=f.options.offset,m=f.triggerPoint,g=0,b=null==m;f.element!==f.element.window&&(g=f.adapter.offset()[s.offsetProp]),"function"==typeof v?v=v.apply(f):"string"==typeof v&&(v=parseFloat(v),f.options.offset.indexOf("%")>-1&&(v=Math.ceil(s.contextDimension*v/100))),c=s.contextScroll-s.contextOffset,f.triggerPoint=g+c-v,d=m<s.oldScroll,u=f.triggerPoint>=s.oldScroll,h=d&&u,p=!d&&!u,!b&&h?(f.queueTrigger(s.backward),o[f.group.id]=f.group):!b&&p?(f.queueTrigger(s.forward),o[f.group.id]=f.group):b&&s.oldScroll>=f.triggerPoint&&(f.queueTrigger(s.forward),o[f.group.id]=f.group)}}return r.requestAnimationFrame(function(){for(var t in o)o[t].flushTriggers()}),this},n.findOrCreateByElement=function(t){return n.findByElement(t)||new n(t)},n.refreshAll=function(){for(var t in o)o[t].refresh()},n.findByElement=function(t){return o[t.waypointContextKey]},window.onload=function(){a&&a(),n.refreshAll()},r.requestAnimationFrame=function(n){(window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||t).call(window,n)},r.Context=n}(),function(){"use strict";function t(t,n){return t.triggerPoint-n.triggerPoint}function n(t,n){return n.triggerPoint-t.triggerPoint}function i(t){this.name=t.name,this.axis=t.axis,this.id=this.name+"-"+this.axis,this.waypoints=[],this.clearTriggerQueues(),o[this.axis][this.name]=this}var o={vertical:{},horizontal:{}},r=window.Waypoint;i.prototype.add=function(t){this.waypoints.push(t)},i.prototype.clearTriggerQueues=function(){this.triggerQueues={up:[],down:[],left:[],right:[]}},i.prototype.flushTriggers=function(){for(var i in this.triggerQueues){var o=this.triggerQueues[i],r="up"===i||"left"===i;o.sort(r?n:t);for(var a=0,s=o.length;s>a;a+=1){var l=o[a];(l.options.continuous||a===o.length-1)&&l.trigger([i])}}this.clearTriggerQueues()},i.prototype.next=function(n){this.waypoints.sort(t);var i=r.Adapter.inArray(n,this.waypoints);return i===this.waypoints.length-1?null:this.waypoints[i+1]},i.prototype.previous=function(n){this.waypoints.sort(t);var i=r.Adapter.inArray(n,this.waypoints);return i?this.waypoints[i-1]:null},i.prototype.queueTrigger=function(t,n){this.triggerQueues[n].push(t)},i.prototype.remove=function(t){var n=r.Adapter.inArray(t,this.waypoints);n>-1&&this.waypoints.splice(n,1)},i.prototype.first=function(){return this.waypoints[0]},i.prototype.last=function(){return this.waypoints[this.waypoints.length-1]},i.findOrCreate=function(t){return o[t.axis][t.name]||new i(t)},r.Group=i}(),function(){"use strict";function t(t){this.$element=n(t)}var n=window.jQuery,i=window.Waypoint;n.each(["innerHeight","innerWidth","off","offset","on","outerHeight","outerWidth","scrollLeft","scrollTop"],function(n,i){t.prototype[i]=function(){var t=Array.prototype.slice.call(arguments);return this.$element[i].apply(this.$element,t)}}),n.each(["extend","inArray","isEmptyObject"],function(i,o){t[o]=n[o]}),i.adapters.push({name:"jquery",Adapter:t}),i.Adapter=t}(),function(){"use strict";function t(t){return function(){var i=[],o=arguments[0];return t.isFunction(arguments[0])&&(o=t.extend({},arguments[1]),o.handler=arguments[0]),this.each(function(){var r=t.extend({},o,{element:this});"string"==typeof r.context&&(r.context=t(this).closest(r.context)[0]),i.push(new n(r))}),i}}var n=window.Waypoint;window.jQuery&&(window.jQuery.fn.waypoint=t(window.jQuery)),window.Zepto&&(window.Zepto.fn.waypoint=t(window.Zepto))}(),window.$clamp=function(t,n){function i(t,n){return d.getComputedStyle||(d.getComputedStyle=function(t,n){return this.el=t,this.getPropertyValue=function(n){var i=/(\-([a-z]){1})/g;return"float"==n&&(n="styleFloat"),i.test(n)&&(n=n.replace(i,function(t,n,i){return i.toUpperCase()})),t.currentStyle&&t.currentStyle[n]?t.currentStyle[n]:null},this}),d.getComputedStyle(t,null).getPropertyValue(n)}function o(n){return Math.max(Math.floor((n=n||t.clientHeight)/r(t)),0)}function r(t){var n=i(t,"line-height");return"normal"==n&&(n=1.2*parseInt(i(t,"font-size"))),parseInt(n)}function a(n){return n.lastChild.children&&0<n.lastChild.children.length?a(Array.prototype.slice.call(n.children).pop()):n.lastChild&&n.lastChild.nodeValue&&""!=n.lastChild.nodeValue&&n.lastChild.nodeValue!=u.truncationChar?n.lastChild:(n.lastChild.parentNode.removeChild(n.lastChild),a(t))}function s(t,n){t.nodeValue=n+u.truncationChar}var l,c,d=window,u={clamp:(n=n||{}).clamp||2,useNativeClamp:void 0===n.useNativeClamp||n.useNativeClamp,splitOnChars:n.splitOnChars||[".","-","–","—"," "],animate:n.animate||!1,truncationChar:n.truncationChar||"…",truncationHTML:n.truncationHTML},h=t.style,p=t.innerHTML,f=void 0!==t.style.webkitLineClamp,v=u.clamp,m=v.indexOf&&(-1<v.indexOf("px")||-1<v.indexOf("em"));u.truncationHTML&&((c=document.createElement("span")).innerHTML=u.truncationHTML);var g,b,y,$=u.splitOnChars.slice(0),w=$[0];return"auto"==v?v=o():m&&(v=o(parseInt(v))),f&&u.useNativeClamp?(h.overflow="hidden",h.textOverflow="ellipsis",h.webkitBoxOrient="vertical",h.display="-webkit-box",h.webkitLineClamp=v,m&&(h.height=u.clamp+"px")):(h=(y=v,r(t)*y))<=t.clientHeight&&(l=function n(i,o){if(o){var r=i.nodeValue.replace(u.truncationChar,"");if(g||(w=0<$.length?$.shift():"",g=r.split(w)),1<g.length?(b=g.pop(),s(i,g.join(w))):g=null,c&&(i.nodeValue=i.nodeValue.replace(u.truncationChar,""),t.innerHTML=i.nodeValue+" "+c.innerHTML+u.truncationChar),g){if(t.clientHeight<=o){if(!(0<=$.length)||""==w)return t.innerHTML;s(i,g.join(w)+w+b),g=null}}else""==w&&(s(i,""),i=a(t),w=($=u.splitOnChars.slice(0))[0],b=g=null);if(!u.animate)return n(i,o);setTimeout(function(){n(i,o)},!0===u.animate?10:u.animate)}}(a(t),h)),{original:p,clamped:l}};