<template>
    <div>
        {{count}}
        <br/>
        <button @click="addFn">点击</button>
        <br/>
        {{doneTodosCount}}
    </div>    
</template>
<script>
import {mapState,mapActions, mapGetters} from 'vuex';

export default {
    name: 'Counter',
    data(){
        return{
        }
    },
    computed:{
        count(){
            return this.$store.state.count
        },
        doneTodosCount(){
            return this.$store.getters.doneTodos
        }
    },
    // computed: mapState({
    //     count: state => state.count
    // }),mapGetters({
    //     doneTodosCount: 'doneTodos'
    // }),
    methods:{
        addFn:function(){
        // 触发Mutation，这个过程是同步的
            // this.$store.commit('increment',{
            //     amount: 10
            // }),
        // 触发Action，这个过程可以含有异步
            this.$store.dispatch('incrementAsnyc')
        }
        // ...mapActions({
        //     addFn: 'incrementAsnyc'
        // })
    }
}
</script>
<style scoped>

</style>

