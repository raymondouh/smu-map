<template>
<div class="map-page">
    <SmuMapHeader></SmuMapHeader>
    <Sidebar></Sidebar>
    <div class="map-wraper">
        <SmuMapLegend :rangeLegend="rangeLegend"></SmuMapLegend>
        <ScalePanel></ScalePanel>
        <dialog-region-info></dialog-region-info>
        <RussianMap></RussianMap>

    </div>
</div>
</template>

<script>
import SmuMapHeader from "./SmuMapHeader";
import Sidebar from "./Sidebar";
import RussianMap from "./RussianMap";
import SmuMapLegend from "./SmuMapLegend";
import DialogRegionInfo from "./DialogRegionInfo";
import ScalePanel from "./ScalePanel"
import {
    mapGetters,
    mapMutations
} from "vuex";

export default {
    components: {
        SmuMapLegend,
        ScalePanel,
        DialogRegionInfo,
        SmuMapHeader,
        RussianMap,
        Sidebar,
    },
    data() {
        return {}
    },
    methods: {},
    computed: {
        ...mapGetters([
            'smuNumRange',
            'scientistsNumRange',
        ]),
        rangeLegend() {
            //ToDo возвращение одного из двух smuNumRange и scientistsNumRange
            return this.scientistsNumRange;
        },
        isSmuPageOpen() {
            return this.$store.state.isSmuPageOpen;
        },
        isSidebarOpen() {
            return this.$store.state.isSidebarOpen;
        },
    }
};
</script>

<style lang="less" scoped>
.map-page {
    padding: 2rem 0 0 2rem;
}

.map-wraper {
    position: relative;
    display: flex;
    width: 100%;
}
</style>
