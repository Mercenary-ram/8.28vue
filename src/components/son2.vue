<template>
    <div>
        儿子2:
        <!-- 把grandson2组件绑到了this.$refs.grandson2上 -->
        <p ref="p1">woshipyuansu</p>
        <grandson2 ref="grandson2"></grandson2>
        <button @click="aaa">点击</button>
    </div>
</template>
<script>
/**$refs:所有拥有ref属性的元素或者组件的集合对象
 * ref:给元素或者组件绑定的属性
 * ref=值  值是自己起的名字 
 */

/**$parent:向上触发事件
 * $children
 * 
 * provide:提供(父级)
 * inject：注入(子组件)
 * 注意:必须是直接的父子关系或者爷孙关系
 */
import grandson2 from './grandson2'
export default {
    mounted(){
        console.log(this.$refs.grandson2.info);
        console.log(this.$refs.p1);
        
    },
    provide(){
        return{
            a1:'注入数据'
        }
    },
    components:{
        grandson2
    },
    methods:{
        aaa(){
            this.$emit('show','下雨了')
        }
    }
}
</script>
<style scoped>

</style>