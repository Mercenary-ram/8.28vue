<template>
    <div>
        孙子2:<button @click="aaa">woyaochufafuqindefanfa</button>
    </div>
</template>
<script>

export default {
    data(){
        return{
            info:'woshisunzi2deshujv'
        }
    },
    inject:['a1'],
    mounted(){
        console.log(this.a1);
        
    },
    methods:{
        /**如果结构层次嵌套太深就会出现this.$parent.$parent.......,所以可以封装一个方法去解决这个方法
         * 封装的方法名字叫：$dispatch 向上派发事件,找他直接的父级
         */
        aaa(){
            // this.$parent.$emit('show','我是孙子触发的')
            this.$dispatch('show','我是孙子触发的')
        }
    }
}
</script>
<style scoped>

</style>