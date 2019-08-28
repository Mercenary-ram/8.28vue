<template>
    <div>
        <p>给儿子1的钱:{{value}}</p>
        <button @click="change">改变钱数</button>
        <p>我是批量传递给son1属性：{{$attrs.name}},{{$attrs.age}}</p>
        <grandson1 v-bind="$attrs" v-on="$listeners"></grandson1>
    </div>
</template>
<script>
/**vue:数据是从父组件流向子组件，是单向数据流
 * 子传父：
 */
import grandson1 from './grandson1'
export default {
    components:{
        grandson1
    },
    //第一种写法
    // props:['value']
    //第二种写法
    props:{
        value:{
            type:Number,
            default:1
        }

    },
    methods:{
        change(){
            //
            // this.$emit('update:value',200)
            this.$emit('input',200)
        }
    }
}
</script>
<style scoped>

</style>