!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(e||self).evanyouCanvas=n()}(this,function(){return function(){var e=document.createElement("canvas"),n=function(e){var n,t=e.getContext("2d"),o=window.devicePixelRatio||1,i=window.innerWidth,c=window.innerHeight,a=Math,r=0,l=2*a.PI,d=a.cos,f=a.random;function u(){for(t.clearRect(0,0,i,c),n=[{x:0,y:.7*c+90},{x:0,y:.7*c-90}];n[1].x<i+90;)s(n[0],n[1])}function s(e,o){t.beginPath(),t.moveTo(e.x,e.y),t.lineTo(o.x,o.y);var i=o.x+90*(2*f()-.25),c=v(o.y);t.lineTo(i,c),t.closePath(),t.fillStyle="#"+(127*d(r-=l/-50)+128<<16|127*d(r+l/3)+128<<8|127*d(r+l/3*2)+128).toString(16),t.fill(),n[0]=n[1],n[1]={x:i,y:c}}function v(e){var n=e+90*(2*f()-1.1);return n>c||n<0?v(e):n}return e.width=i*o,e.height=c*o,t.scale(o,o),t.globalAlpha=.6,u(),u}(e);return document.addEventListener("click",n),{canvas:e,update:n,offClick:function(){return document.removeEventListener("click",n)}}}});
//# sourceMappingURL=evanyou-canvas.umd.js.map
