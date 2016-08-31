<template>
    <button class="shit" @click="alert">Click me say shit</button>
</template>
<style>
    .shit {
        background-color:red;
        width:200px;
    }
</style>
<script>
    export default {
        props: ['say-shit'],
        methods: {
            alert: function () {
                alert(this.sayShit);
            }
        }
    }
</script>
