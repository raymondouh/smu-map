<template>
    <div id="app">
        <Home/>
    </div>
</template>

<script>
    import Home from './components/Home.vue'

    export default {
        name: 'app',
        components: {
            Home
        }
    }
</script>

<style lang="less">
    * {
        margin: 0;
        padding: 0;
    }

    body{
        overflow: hidden;
    }

    #app {
        font-family: 'Roboto', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        //text-align: center;
        height: 100vh;
    }
</style>
