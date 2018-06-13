import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//封装共享值的对象为 状态对象
const state = {
    count : 1 ,//共享值（状态）
    mssg:'hahh'
}

//改变状态的方法集合对象为 mutations 同步
const mutations = {//如果要改变状态里面的值必须通过mutation
    add(state,n) {//state为默认值 第二个是参数
        state.count += n;
    },
    reduce(state) {
        state.count--;
    }
}

//计算过滤操作 相当于store的computed 状态每操作一次都会经过getters执行一次
const getters = {
    //过滤count
    count:function(state){
        return state.count += 10;
    }
}

//action 异步修改状态 action可以调用mutations内的方法
const actions= {
    addAction (context) {//context上下文对象
        context.commit('add',10);//把add改成异步
        setTimeout(()=>{context.commit('reduce')},2000)
        console.log('我执行了')
    },
    reduceAtion ({commit}) {
        commit('reduce');
    }
}

export default new Vuex.Store({//注意new Vuex.Store
    state,
    mutations,
    getters,
    actions
})