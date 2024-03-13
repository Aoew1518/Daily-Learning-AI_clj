class Vue{
    constructor(options){
        this.$options = options;
        this.$data = options.data;

        observe(this.$data) // 将this.$data变成响应式
    // 代理
        proxy(this)

        new Complier(options.el,this)
    }


}

new Vue({
    el:'#app',
    data: function(){
        return{}
    },
    methods: {
    
    }
})