<template>
    <div>
        <h2>{{msg}}</h2>
        <!-- 方法1、直接在html内拿store.js的共享值 -->
        <!-- <h3>{{$store.state.count}}</h3> -->
        <!-- 方法、通过computed 返回的方式拿store.js的共享值 -->
        <h3>{{count}}</h3>
        <h3>{{mssg}}</h3>
        <p>
            <!--调用mutation方法1、 commit('add',10) add是方法名 10是方法的第二个参数 -->
            <!-- <button @click="$store.commit('add',10)">+</button>
            <button @click="$store.commit('reduce')">-</button> -->

            <!--调用mutation方法2、-->
            <button @click="add(10)">+</button>
            <button @click="reduce">-</button>
        </p>

        <p>
            <button @click="addAction">+</button>
            <button @click="reduceAtion">-</button>
        </p>
    </div>
</template>
<script>
    // 方法3、通过引入mapState拿store.js的共享值
    import {mapState,mapMutations,mapGetters,mapActions} from 'vuex';
    //调用mutation方法2、 要引入mapMutations
    // import {mapMutations} from 'vuex'

    export default {
        data () {
            return{
                msg:'this is vuex test'
            }
        },
        // computed : {
        //     count(){//第2种方法
        //         return this.$store.state.count;
        //     }
        // }
        // computed:mapState({//第三种方法
        //     count:state =>state.count
        // })
        // computed:mapState(['count','mssg']), //第四种直接把store.js的值以数组写过来
        computed:{
            ...mapState(['count','mssg']),//...es6的扩展写法
            // count(){//返回getter后的数据
            //     return this.$store.getters.count;
            // }
            ...mapGetters(['count'])
        },
        methods:{
            ...mapMutations(['add','reduce']),//调用mutation方法2
            ...mapActions(['addAction','reduceAtion'])
        } 
    }

</script>
