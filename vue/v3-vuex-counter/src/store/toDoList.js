import { defineStore } from "pinia";
import { ref } from "vue";

export const useTodos = defineStore('todos',()=>{
    const todos = ref([{text:'吃晚饭',done:'false'}])
    return {
        todos 
    }
})