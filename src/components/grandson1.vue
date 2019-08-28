<template>
    <div>
        孙子1的:{{$attrs.name}}--{{$attrs.age}}
        <button @click="$listeners.input(500)">grandson改变</button>
    </div>
</template>
<script>
/**$attrs:向下去传递数据，传递属性，并且可以批量传递属性，同时与v-bind指令配合使用 
 * $listeners:向下批量传递方法，同时可以与v-on指令一起使用
*/
export default {
    
    
}
</script>
<style scoped>

</style>