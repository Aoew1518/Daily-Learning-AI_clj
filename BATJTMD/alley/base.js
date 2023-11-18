        //提供一个适配所有机型的rem工具
        //1.屏幕宽度
        //2.html
        //3.fontSize  /10
        //立即执行函数
        //ipad 
        (function() {
            //性能 DOM开销性能比较大
            var htmlElement = document.documentElement;
            //DRY don't repeat yourself
            function getFontSize() {
                var width = window.innerWidth;
                var fontSize = width / 10;
                return fontSize;
            }            
            htmlElement.style.fontSize = getFontSize() + 'px';

            window.addEventListener('resize', function() {
                htmlElement.style.fontSize = getFontSize() + 'px';
            })
        // html 动态设置font-size 
        // 函数作用域
        // 变量， 不会污染外面的
        })()