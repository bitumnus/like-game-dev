!function(t){function i(i){for(var n,a,s=i[0],h=i[1],l=i[2],f=0,c=[];f<s.length;f++)a=s[f],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&c.push(o[a][0]),o[a]=0;for(n in h)Object.prototype.hasOwnProperty.call(h,n)&&(t[n]=h[n]);for(u&&u(i);c.length;)c.shift()();return r.push.apply(r,l||[]),e()}function e(){for(var t,i=0;i<r.length;i++){for(var e=r[i],n=!0,s=1;s<e.length;s++){var h=e[s];0!==o[h]&&(n=!1)}n&&(r.splice(i--,1),t=a(a.s=e[0]))}return t}var n={},o={0:0},r=[];function a(i){if(n[i])return n[i].exports;var e=n[i]={i:i,l:!1,exports:{}};return t[i].call(e.exports,e,e.exports,a),e.l=!0,e.exports}a.m=t,a.c=n,a.d=function(t,i,e){a.o(t,i)||Object.defineProperty(t,i,{enumerable:!0,get:e})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,i){if(1&i&&(t=a(t)),8&i)return t;if(4&i&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(a.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&i&&"string"!=typeof t)for(var n in t)a.d(e,n,function(i){return t[i]}.bind(null,n));return e},a.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(i,"a",i),i},a.o=function(t,i){return Object.prototype.hasOwnProperty.call(t,i)},a.p="";var s=window.webpackJsonp=window.webpackJsonp||[],h=s.push.bind(s);s.push=i,s=s.slice();for(var l=0;l<s.length;l++)i(s[l]);var u=h;r.push([137,1]),e()}({137:function(t,i,e){"use strict";e.r(i);e(84),e(91),e(92),e(93),e(95),e(97),e(98),e(71),e(102),e(105),e(76),e(107),e(14),e(108),e(110),e(112),e(119),e(123),e(125),e(127);var n=e(0),o={0:{0:{x:0,y:0},1:{x:240,y:0},2:{x:483,y:0}},1:{0:{x:0,y:160},1:{x:240,y:160},2:{x:483,y:160}},2:{0:{x:0,y:320},1:{x:240,y:320},2:{x:483,y:320}}};function r(t,i){for(var e=0;e<i.length;e++){var n=i[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var a=function(){function t(i){!function(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}(this,t),this.x=70,this.y=45,this.width=715,this.height=320,this.id=i,this.initialize()}var i,e,a;return i=t,(e=[{key:"initialize",value:function(){this.reelContainer=new n.b,this.reelContainer.x=this.x,this.reelContainer.y=this.y,this.reelContainer.width=this.width,this.reelContainer.height=this.height,this.fillReels()}},{key:"fillReels",value:function(){var t=!!this.autoWin&&this.randomInt(0,2),i=!!this.autoWin&&this.randomInt(1,5);this.reelContainer.removeChildren(),this.rollResult=[];for(var e=0;e<=2;e++){this.rollResult[e]=[];for(var r=0;r<=2;r++){var a=e===t?i:this.randomInt(0,5);this.rollResult[e].push(a);var s=new n.e(n.g.from(this.id.reel[a].url));s.x=o[e][r].x,s.y=o[e][r].y,this.reelContainer.addChild(s)}}}},{key:"randomInt",value:function(t,i){return Math.floor(Math.random()*(i-t+1))+t}}])&&r(i.prototype,e),a&&r(i,a),t}();function s(t,i){for(var e=0;e<i.length;e++){var n=i[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var h=function(){function t(i,e){!function(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}(this,t),this.width=i,this.height=e,this.initialize()}var i,e,o;return i=t,(e=[{key:"initialize",value:function(){this.layout=new n.c,this.layout.beginFill("0x26C350"),this.layout.lineStyle(5,"0x26C350"),this.layout.drawRect(0,0,this.width,this.height),this.layout.alpha=.5,this.layout.interactive=!0,this.layout.buttonMode=!0}}])&&s(i.prototype,e),o&&s(i,o),t}();function l(t,i){for(var e=0;e<i.length;e++){var n=i[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var u=function(){function t(i,e,n){!function(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}(this,t),this.width=i,this.height=e,this.text=n,this.winTextStyle={fontFamily:"Arial",fontWeight:"bold",fontSize:"76px",align:"center",fill:"yellow"},this.initialize()}var i,e,o;return i=t,(e=[{key:"initialize",value:function(){this.text=new n.f(this.text,this.winTextStyle),this.text.position.x=this.width/2-76,this.text.position.y=this.height/2-50}}])&&l(i.prototype,e),o&&l(i,o),t}();function f(t,i){for(var e=0;e<i.length;e++){var n=i[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var c=function(){function t(i,e,n,o){!function(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}(this,t),this.id=i,this.width=e,this.height=n,this.startReel=o,this.initialize()}var i,e,o;return i=t,(e=[{key:"initialize",value:function(){return this.buttonActive=new n.h(n.g.from(this.id.tools.BTN_Spin.url),this.id.tools.BTN_Spin.sourceSize.w,this.id.tools.BTN_Spin.sourceSize.h),this.buttonActive.x=this.width-this.id.tools.BTN_Spin.sourceSize.w-38,this.buttonActive.y=this.height/2-49,this.buttonActive.interactive=!0,this.buttonActive.buttonMode=!0,this.buttonActive.on("click",this.startReel.bind(this)),this.buttonActive}}])&&f(i.prototype,e),o&&f(i,o),t}();function d(t,i){for(var e=0;e<i.length;e++){var n=i[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var y=function(){function t(i,e,n){!function(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}(this,t),this.id=i,this.width=e,this.height=n,this.initialize()}var i,e,o;return i=t,(e=[{key:"initialize",value:function(){return this.buttonOff=new n.h(n.g.from(this.id.tools.BTN_Spin_d.url),this.id.tools.BTN_Spin_d.sourceSize.w,this.id.tools.BTN_Spin_d.sourceSize.h),this.buttonOff.x=this.width-this.id.tools.BTN_Spin_d.sourceSize.w-38,this.buttonOff.y=this.height/2-49,this.buttonOff.visible=!1,this.buttonOff}}])&&d(i.prototype,e),o&&d(i,o),t}();function p(t,i){for(var e=0;e<i.length;e++){var n=i[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var b=function(){function t(i,e,n,o){!function(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}(this,t),this.infoStyle={fontFamily:"Arial",fontSize:"14px",align:"center",fill:"yellow"},this.infobar=null,this.width=i,this.height=e,this.coins=o,this.wins=n,this.initialize()}var i,e,o;return i=t,(e=[{key:"initialize",value:function(){this.infobar=new n.b,this.infobar.x=this.width,this.infobar.y=this.height,this.infobar.width=100,this.infobar.height=50,this.infobarLayout=new n.c,this.infobarLayout.beginFill("black"),this.infobarLayout.lineStyle(5,"black"),this.infobarLayout.drawRect(0,0,100,50),this.totalWinsText=new n.f("Wins: "+this.wins,this.infoStyle),this.totalWinsText.position.x=5,this.totalWinsText.position.y=8,this.totalCoinsText=new n.f("Coins: "+this.coins,this.infoStyle),this.totalCoinsText.position.x=5,this.totalCoinsText.position.y=27,this.infobar.addChild(this.infobarLayout,this.totalWinsText,this.totalCoinsText)}}])&&p(i.prototype,e),o&&p(i,o),t}();function v(t,i){var e;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(e=function(t,i){if(!t)return;if("string"==typeof t)return w(t,i);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return w(t,i)}(t))||i&&t&&"number"==typeof t.length){e&&(t=e);var n=0,o=function(){};return{s:o,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,a=!0,s=!1;return{s:function(){e=t[Symbol.iterator]()},n:function(){var t=e.next();return a=t.done,t},e:function(t){s=!0,r=t},f:function(){try{a||null==e.return||e.return()}finally{if(s)throw r}}}}function w(t,i){(null==i||i>t.length)&&(i=t.length);for(var e=0,n=new Array(i);e<i;e++)n[e]=t[e];return n}function g(t,i){for(var e=0;e<i.length;e++){var n=i[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}new(function(){function t(){!function(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}(this,t),this.loader=n.d.shared,this.background="",this.buttonActive="",this.buttonOff="",this.countRolls=0,this.reelContainer="",this.rollResult=[],this.id={},this.autoWin=!1,this.gameOver=!1,this.displayedWins=0,this.coins=100,this.textDisplayed=!1,this.init()}var i,e,o;return i=t,(e=[{key:"init",value:function(){var t=this;this.app=new n.a({width:960,height:536,antialias:!0,transparent:!1,resolution:1}),document.body.appendChild(this.app.view),this.loader.add("texturepack","src/assets/sprites.json"),this.loader.load((function(i,e){t.addLoadingScreen(),t.id=e.texturepack.data,t.background=new n.h(n.g.from(t.id.tools.BG.url),t.app.view.width,t.app.view.height),t.app.stage.addChild(t.background),t.createActiveButton(),t.createButtonOff(),t.createReel(),t.renderInfobar()})),this.loader.onProgress.add((function(){})),this.loader.onComplete.add((function(){t.loadingText.visible=!1}))}},{key:"addLoadingScreen",value:function(){this.layout=new n.c,this.layout.beginFill("0x000000"),this.layout.lineStyle(5,"0x000000"),this.layout.drawRect(0,0,this.app.width,this.app.height),this.loadingText=new n.f("LOADING...",this.winTextStyle),this.loadingText.position.x=this.app.view.width/2-200,this.loadingText.position.y=this.app.view.height/2-70,this.app.stage.addChild(this.layout,this.loadingText)}},{key:"startReel",value:function(){this.countRolls>=4?(this.autoWin=!0,this.countRolls=0):this.countRolls++,this.reelContainer.fillReels(),this.autoWin=!1,this.checkWinning()}},{key:"checkWinning",value:function(){this.coins-=5;var t,i=v(this.reelContainer.rollResult);try{for(i.s();!(t=i.n()).done;){var e=t.value;if(e.every((function(t,i,e){return t===e[0]}))||e.includes(0)&&this.countDuplicates(e)>=1)return this.displayedWins++,this.coins+=10,this.showText("YOU WON!"),void this.disableButton()}}catch(t){i.e(t)}finally{i.f()}this.renderInfobar(),this.coins<=0&&(this.showText("NO COINS :("),this.gameOver=!0,this.disableButton())}},{key:"countDuplicates",value:function(t){var i,e=new Set,n=new Set,o=v(t);try{for(o.s();!(i=o.n()).done;){var r=i.value;e.has(r)?(n.add(r),e.delete(r)):e.add(r)}}catch(t){o.e(t)}finally{o.f()}return n.size}},{key:"disableButton",value:function(){this.buttonActive.buttonActive.visible=!1,this.buttonOff.buttonOff.visible=!0}},{key:"enableButton",value:function(){this.buttonActive.buttonActive.visible=!0,this.buttonOff.buttonOff.visible=!1}},{key:"hideText",value:function(){this.layout.layout&&this.layout.layout.destroy(),this.text.text&&this.text.text.destroy()}},{key:"closeWinMessage",value:function(){this.textDisplayed&&!this.gameOver&&(this.hideText(),this.enableButton(),this.textDisplayed=!1,this.renderInfobar())}},{key:"renderInfobar",value:function(){this.infobar=new b(this.app.view.width-136,this.app.view.height/2+80,this.displayedWins,this.coins),this.app.stage.addChild(this.infobar.infobar)}},{key:"createActiveButton",value:function(){this.buttonActive=new c(this.id,this.app.view.width,this.app.view.height,this.startReel.bind(this)),this.app.stage.addChild(this.buttonActive.buttonActive)}},{key:"createButtonOff",value:function(){this.buttonOff=new y(this.id,this.app.view.width,this.app.view.height),this.app.stage.addChild(this.buttonOff.buttonOff)}},{key:"createReel",value:function(){this.reelContainer=new a(this.id),this.app.stage.addChild(this.reelContainer.reelContainer)}},{key:"showText",value:function(t){this.layout=new h(this.reelContainer.reelContainer.width,this.reelContainer.reelContainer.height),this.text=new u(this.reelContainer.reelContainer.height,this.reelContainer.reelContainer.height,t),this.textDisplayed=!0,this.layout.layout.on("click",this.closeWinMessage.bind(this)),this.reelContainer.reelContainer.addChild(this.layout.layout,this.text.text),setTimeout(this.closeWinMessage.bind(this),2e3)}}])&&g(i.prototype,e),o&&g(i,o),t}())}});
//# sourceMappingURL=app.f5a75832.js.map