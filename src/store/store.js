import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state:{
        count: 0,
        todos: [
            {id:1,text:'one',done:true},
            {id:2,text:'two',done:false}
        ]
    },
    getters:{
        doneTodos: state => {
            return state.todos.filter(todo=>todo.done);
        }
    },
    //更改Vuex中的状态唯一方法就是提交mutation。
    // 每一个mutation都有一个字符串的事件类型和一个回调函数
    mutations: {
        increment(state){
            state.count += 10;
        }
    },
    actions: {
        increment(context){
            context.commit('increment')
        },
        // 在action内部执行异步操作
        incrementAsnyc({commit}){
            setTimeout(() => {
                commit('increment')
            },1000)
        }
    }
})

export default store;