<template>
<div class="wrapper">
    <SmuPage v-show="isSmuPageOpen" />
    <MapPage v-show="!isSmuPageOpen" />
</div>
</template>

<script>
import SmuPage from "./SmuPage";
import MapPage from "./MapPage";

export default {
    props: {},
    data() {
        return {};
    },
    methods: {},
    computed: {
        isSmuPageOpen() {
            return this.$store.state.isSmuPageOpen;
        },
        isSidebarOpen() {
            return this.$store.state.isSidebarOpen;
        },
    },
    components: {
        SmuPage,
        MapPage
    }
};
</script>

<style lang="less" scoped>
.wrapper {
    margin: 0;
    height: 100%;
    overflow: hidden;
}
</style>
