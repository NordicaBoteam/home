/*
 2014 Artem Sapegin (sapegin.me), 2016 Vitaliy Filippov
 @license MIT
*/
document.addEventListener("DOMContentLoaded",function(){setTimeout(function(){(function(){function k(a,b,c){for(var d=-1,e=!1;-1!=(d=a.className.indexOf(b,d+1));)d&&!/\s/.exec(a.className.charAt(d-1))||d!=a.className.length-b.length&&!/\s/.exec(a.className.charAt(d+b.length))||(e=!0,c&&(a.className=a.className.substr(0,d-1)+a.className.substr(d+b.length)));return e}function q(a,b,c){var d=document.createElement("script");d.type="text/javascript";d.src=a;d.onreadystatechange=function(){"complete"==
d.readyState?b&&b():"loaded"==d.readyState&&(d.children,"loading"==d.readyState&&c&&c());d.parentNode&&d.parentNode.removeChild(d);d=null};d.onload=function(){b&&b();d.parentNode&&d.parentNode.removeChild(d);d=null};d.onerror=function(){c&&c();d.parentNode&&d.parentNode.removeChild(d);d=null};(document.head||document.getElementsByTagName("head")[0]).appendChild(d)}function t(a,b){this.container=a;this.options=b;this.init()}function u(a,b){this.widget=a;this.options={};for(var c in b)this.options[c]=
b[c];this.detectService();this.service&&this.init()}function v(a,b){function c(a,b){return b.toUpper()}for(var d={},e=0;e<a.attributes.length;e++){var f=a.attributes[e].name;if("data-"==f.substr(0,5)){f=f.substr(5);var g=a.attributes[e].value;"yes"===g?g=!0:"no"===g&&(g=!1);d[b?f:f.replace(/-(\w)/g,c)]=g}}return d}function m(a,b){return w(a,b,encodeURIComponent)}function w(a,b,c){return a.replace(/\{([^\}]+)\}/g,function(a,e){return e in b?c?c(b[e]):b[e]:a})}function n(a,b){a="mbr-social-likes__"+
a;return a+" "+a+"_"+b}function x(a,b){function c(d){if("keydown"!==d.type||27===d.which){for(;d&&d!=a;d=d.parentNode);d!=a&&(k(a,"mbr-social-likes_opened",!0),removeListener(document,"click",c),removeListener(document,"touchstart",c),removeListener(document,"keydown",c),b())}}addListener(document,"click",c);addListener(document,"touchstart",c);addListener(document,"keydown",c)}function y(a){if(document.documentElement.getBoundingClientRect){var b=parseInt(a.style.left,10),c=parseInt(a.style.top,
10),d=a[0].getBoundingClientRect();10>d.left?a.stype.left=10-d.left+b+"px":d.right>window.innerWidth-10&&(a.style.left=window.innerWidth-d.right-10+b+"px");10>d.top?a.style.top=10-d.top+c+"px":d.bottom>window.innerHeight-10&&(a.style.top=window.innerHeight-d.bottom-10+c+"px")}a.className+=" mbr-social-likes_opened"}var h="https:"===location.protocol?"https:":"http:",l={facebook:{counterUrl:"https://graph.facebook.com/fql?q=SELECT+total_count+FROM+link_stat+WHERE+url%3D%22{url}%22&callback=?",convertNumber:function(a){return a.data[0].total_count},
popupUrl:"https://www.facebook.com/sharer/sharer.php?u={url}",popupWidth:600,popupHeight:359},twitter:{popupUrl:"https://twitter.com/intent/tweet?url={url}&text={title}",popupWidth:600,popupHeight:250,click:function(){/[\.\?:\-\u2013\u2014]\s*$/.test(this.options.title)||(this.options.title+=":");return!0}},mailru:{counterUrl:h+"//connect.mail.ru/share_count?url_list={url}&callback=1&func=?",convertNumber:function(a){for(var b in a)if(a.hasOwnProperty(b))return a[b].shares},popupUrl:"https://connect.mail.ru/share?share_url={url}&title={title}&image_url={image}",
dokument. addEventListener("DOMContentLoaded",function(){setTimeout(function(){(function(){function k(a,b,c) {for(var d=-1,e=! 1; -1!=(d=a. className. indexOf(b,d+1)); )d&&! /\s/. exec(a. className. charAt(d-1))|| d!=a. className. długość-b. długość&&! /\s/. exec(a. className. charAt(d+b. długość))|| (e=!  0,c&&(a. className=a. className. podstr(0,d-1)+a. className. podstr(d+b. długość))); zwróć e}function q(a,b,c){var d=document. createElement("script"); d. type="text/javascript"; d. src=a; d. onreadystatechange=function(){"complete"==
d. readyState? b&&b():"loaded"==d. readyState&&(d. dzieci,"ładowanie"==d. readyState&&c&&c()); d. parentNode&d. parentNode. removeChild(d); d=null}; d. onload=function(){b&&b(); d. parentNode&d. parentNode. removeChild(d); d=null}; d. onerror=function(){c&&c(); d. parentNode&d. parentNode. removeChild(d); d=null}; (dokument. głowa|| dokument. getElementsByTagName("head")[0]). appendChild(d)}function t(a,b){this. kontener=a; to. options=b; to. init()}function u(a,b){this. widget=a; to. options={}; for(var c in b)this. opcje[c]=
b[c]; to. detectService(); to. service&&to. init()}function v(a,b){function c(a,b){return b. toUpper()}for(var d={},e=0; e<a. atrybuty. długość; e++){var f=a. atrybuty[e]. imię i nazwisko; if("data-"==f. substr(0,5)){f=f. podstr(5); var g=a. atrybuty[e]. wartość;"Tak"===g? g=! 0:"nie"=== g&&(g=! 1); d[b? f:f. replace(/-(\w)/g,c)]=g}}return d}function m(a,b){return w(a ,b,encodeURIComponent)}function w(a,b,c){return a. replace(/\{([^\}]+)\}/g,function(a,e){return e in b? c? c(b[e]):b[e]:a})}function n(a,b){a="mbr-social-likes__"+
a; return a+" "+a+"_"+b}function x(a,b){function c(d){if("keydown"!==d. typ|| 27 ===d. which){for(; d&&d!=a; d = d. parentNode); d!=a&&(k(a,"mbr-social-likes_opened",! 0),removeListener(document,"click",c),removeListener(document,"touchstart",c),removeListener(document,"keydown" ,c),b())}}addListener(document,"click",c); addListener(document;"touchstart";c); addListener(document,"keydown",c)}function y(a){if(document. documentElement. getBoundingClientRect){var b=parseInt(a. styl. left,10),c=parseInt(a. styl. góra,
10),d=a[0]. getBoundingClientRect(); 10>d. w lewo? a. stype. lewo=10-d. left+b+"px":d. prawo>window. innerWidth-10&&(a. styl. left=okno. szerokość wewnętrzna-d. right-10+b+"px"); 10>d. góra? a. styl. góra=10-d. góra+c+"px":d. dół>window. innerHeight-10&&(a. styl. top=okno. innerHeight-d. dół-10+c+"px")}a. className+=" mbr-social-likes_opened"}var h="https:"=== location. protokół? "https:":"http:",l={facebook:{counterUrl:"https://graph.facebook.com/fql?q=SELECT+total_count+FROM+link_stat+WHERE+url%3D%22{url}%22&callback=?" ,convertNumber:function(a){return a. dane[0]. total_count},
popupUrl:"https://www.facebook.com/sharer/sharer.php?u={url}",popupWidth:600,popupHeight:359},twitter:{popupUrl:"https://twitter.com/intent/tweet?url={url}&text={title}",popupWidth:600,popupHeight:250 ,click:function(){/[\. \?:\-\u2013\u2014]\s*$/. test(to. opcje. tytuł)|| (to. opcje. title+=":"); powrót! 0}},mailru:{counterUrl:h+"//connect.mail.ru/share_count?url_list={url}&callback=1&func=?" ,convertNumber:function(a){for(var b in a)if(a. hasOwnProperty(b))return a[b]. shares},popupUrl:"https://connect.mail.ru/share?share_url={url}&title={title}&image_url={image}",
a;for(var e in l[a])this.options[e]=l[a][e]},detectParams:function(){var a=this.widget.getAttribute("data-counter");if(a){var b=parseInt(a,10);isNaN(b)?this.options.counterUrl=a:this.options.counterNumber=b}if(a=this.widget.getAttribute("data-title"))this.options.title=a;if(a=this.widget.getAttribute("data-url"))this.options.url=a},initHtml:function(){var a=this,b=this.options,c=this.widget,d=c.querySelector("a");d&&this.cloneDataAttrs(d,c);d=document.createElement("span");d.className=this.getElementClassNames("button");
d.innerHTML=c.innerHTML;if(b.clickUrl){b=m(b.clickUrl,{url:b.url,title:b.title,image:b.image||""});var e=document.createElement("a");e.href=b;this.cloneDataAttrs(c,e);c.parentNode.insertBefore(e,c);c.parentNode.removeChild(c);this.widget=c=e}else c.addEventListener("click",function(){a.click()});c.className=c.className.replace(" "+this.service,"")+" "+this.getElementClassNames("widget");b=document.createElement("span");b.className=this.getElementClassNames("icon");d.children.length?d.insertBefore(b,
d.firstChild):d.appendChild(b);c.innerHTML="";c.appendChild(d);this.button=d},initCounter:function(){if(this.options.counters)if(this.options.counterNumber)this.updateCounter(this.options.counterNumber);else{var a=this,b=p.fetch(this.service,this.options.url,{counterUrl:this.options.counterUrl,forceUpdate:this.options.forceUpdate});b.reject=b.resolve=function(b){a.updateCounter(b)}}},cloneDataAttrs:function(a,b){for(var c=0;c<a.attributes.length;c++)"data-"==a.attributes[c].name.substr(0,5)&&b.setAttribute(a.attributes[c].name,
a.attributes[c].value)},getElementClassNames:function(a){return n(a,this.service)},updateCounter:function(a){a=parseInt(a,10)||0;var b=document.createElement("span");a||this.options.zeroes?(b.innerHTML=a,b.className=this.getElementClassNames("counter")):b.className=this.getElementClassNames("counter")+" mbr-social-likes__counter_empty";this.widget.appendChild(b);(b=this.widget["on_counter.mbr-social-likes"])&&b([this.service,a])},click:function(a){var b=this.options,c=!0;"function"==typeof b.click&&
(c=b.click.call(this,a));c&&(a=m(b.popupUrl,{url:b.url,title:b.title,image:b.image||""}),a=this.addAdditionalParamsToUrl(a),this.openPopup(a,{width:b.popupWidth,height:b.popupHeight}));return!1},addAdditionalParamsToUrl:function(a){var b=v(this.widget),c;for(c in this.options.data)b[c]=this.options.data[c];var d="";for(c in b)d+="&"+encodeURIComponent(c)+"="+encodeURIComponent(b[c]);if(!d)return a;a.indexOf("?")||(d="?"+d.substr(1));return a+d},openPopup:function(a,b){var c=Math.round(screen.width/
2-b.width/2),d=0;screen.height>b.height&&(d=Math.round(screen.height/3-b.height/2));var e=window.open(a,"sl_"+this.service,"left="+c+",top="+d+",width="+b.width+",height="+b.height+",personalbar=0,toolbar=0,scrollbars=1,resizable=1");if(e){e.focus();(a=this.widget["on_popup_opened.mbr-social-likes"])&&a([this.service,e]);var f=this,g=setInterval(function(){if(e.closed){clearInterval(g);var a=f.widget["on_popup_closed.mbr-social-likes"];a&&a(f.service)}},this.options.popupCheckInterval)}else location.href=
a}};h=document.querySelectorAll(".mbr-social-likes");for(var r=0;r<h.length;r++)window.socialLikes(h[r])})()},2E3)});
