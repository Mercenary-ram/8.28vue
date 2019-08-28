<template>
    <div>
        <h5>父亲的钱:{{money}}</h5>
        <!-- <son1 :value='money' @update:value='(value)=>this.money=value'></son1> -->
        <!-- 语法糖,下面这种写法是上面的简写
        sync:同步 的意思 
        update是固定的事件名字，其他名字都不行
        @update:aaa 这个aaa变量不是固定的，但是要统一-->
        <!-- <son1 :value.sync='money'></son1> -->

        <son1 :value='money' @input='change1' name='lili' age='18'></son1>
        <son1 v-model="money"></son1>
        <!-- v-model是:value和@input的简写，value和input是固定的 -->
        <son2 @show="show"></son2>
    </div>
</template>
<script>
import son1 from './son1'
import son2 from './son2'
export default {
    //数据
    data(){
        return{
            money:100
        }
    },
    //声明一下
    components:{
        son1,
        son2
    },

    methods:{
        change1(value){
            this.money=value
        },
        show(value){
            console.log('wobeichufale'+value);
            
        }
    }
}
</script>
<style scoped>

</style>