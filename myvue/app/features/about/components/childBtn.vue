<template>
    <button @click="alert">Click me!</button>
</template>
<style>
    background-color:#abc;
</style>
<script>
    export default{
        props : ['say-hi'],
        methods: {
            alert : function () {
                alert(this.sayHi );
            }
        }

    }
</script>
