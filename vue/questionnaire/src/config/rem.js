(function(doc,win){
    // 用js动态修改页面跟字体大小
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function(){
            var clientWidth = docEl.clientWidth;
            if(!clientWidth) return;
            docEl.style.fontSize = 20 * (clientWidth / 320) + 'px';
        };
    if(!doc.addEventListener) return;
    win.addEventListener(resizeEvt,recalc,false);// resizeEvt用于大小改变
    doc.addEventListener('DOMContentLoaded',recalc,false);//防止加载慢时，页面展示字体太小
})(document,window)