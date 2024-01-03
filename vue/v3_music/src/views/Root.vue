<template>
    <div class="w-screen h-screen flex items-stretch overflow-hidden">
        <div class="w-56 h-screen flex shrink-0">
            Menu
        </div>
        <div class="flex-1 flex flex-col">
            <router-view/>
        </div> 
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="css" scoped>

</style>