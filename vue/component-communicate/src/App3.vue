<template>
    <!-- header -->
    <Header @add="handle" />
    <div class="body">
        <ul>
            <li v-for="item in lists">{{ item }}</li>
        </ul>
    </div>
</template>

<script>
import Header from './components/body3/header.vue';
export default {
    components: {
        Header
    },
    data() {
        return {
            lists: ['html', 'css'],
        }
    },
    methods: {
        handle(val) {
            console.log(val);
            this.lists.push(val);
        }
    }
}
</script>
<style lang="css" scoped></style>