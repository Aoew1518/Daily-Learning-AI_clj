<template>
    <div>
        <table>
            <thead>
                <th>序号</th>
                <th>书籍名称</th>
                <th>出版日期</th>
                <th>价格</th>
                <th>购买数量</th>
                <th>操作</th>
            </thead>

            <tbody>
                <!-- <tr>
                    <td>1</td>
                    <td>你不知道的JavaScript</td>
                    <td>2019-10</td>
                    <td>58</td>
                    <td>
                        <button @click="minus">-</button>
                        <span class="counter">{{ count }}</span>
                        <button @click="add">+</button>
                    </td>
                    <td>
                        <button @click="remove">移除</button>
                    </td>
                </tr> -->

                <tr v-for="(item, index) in books" :key="index">
                    <td>{{ item.id}}</td>
                    <td>{{ item.name }}</td>
                    <td>{{ item.date }}</td>
                    <td>{{ item.price }}</td>
                    <td>
                        <button @click="minus(index)">-</button>
                        <span class="counter">{{ item.count }}</span>
                        <button @click="add(index)">+</button>
                    </td>
                    <td>
                        <button @click="remove(index)">移除</button>
                    </td>
                </tr>

            </tbody>

        </table>

        <h2>总价格: {{ totalPrice }}</h2>
    </div>

    <div>
        <h2>购物车为空~</h2>
    </div>
</template>
  
<script>
export default {
    props: {
        books: {
            type: Array,
            default: () => []
        }
    },
    computed: {
        totalPrice() {
            let total = 0;
            this.books.forEach(item => {
                total += item.price * item.count;
            })
            return total;
            // return this.books.reduce((total, item) => total + item.price * item.count, 0);   
            // return this.books.reduce((total, item) => total + item.price * item.count, 0);
        }
    },
    data() {
        return {
            // totalPrice: 100,
            count: 1,
        }
    },
    methods: {
        add(index) {
            this.books[index].count++;
            this.totalPrice += this.books[index].price;
        },
        minus(index) {
            if (this.books[index].count > 1) {
                this.books[index].count--;
                this.totalPrice -= this.books[index].price;
            }
        },
        remove(index) {
            this.books.splice(index,1);
            // this.totalPrice -= this.books[index].price * this.books[index].count;
        }
    }
}
</script>
  
<style lang="css" scoped>
table {
    border: 1px solid #e9e9e9;
    border-collapse: collapse;
    border-spacing: 0;
}

th,
td {
    padding: 8px 16px;
    border: 1px solid #e9e9e9;
    text-align: left;
}

th {
    background-color: #f7f7f7;
    color: #5c6b77;
    font-weight: 600;
}

.counter {
    margin: 0 5px;
}
</style>