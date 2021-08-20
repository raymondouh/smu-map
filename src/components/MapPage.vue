<template>
<div class="map-page">
    <SmuMapHeader></SmuMapHeader>
    <Sidebar></Sidebar>
    <div class="map-wraper">
        <SmuMapLegend :rangeLegend="rangeLegend"></SmuMapLegend>
        <ScalePanel></ScalePanel>
        <RussianMap></RussianMap>
    </div>
    <dialog-region-info></dialog-region-info>
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
    mapState,
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
    computed: {
        ...mapState([
            'filterOption'
        ]),
        ...mapGetters([
            'smuNumRange',
            'scientistsNumRange',
        ]),
        rangeLegend() {
            switch (this.filterOption) {
                case "YouSci":
                    return this.scientistsNumRange;
                    break;
                case "SMU":
                    return this.smuNumRange;
                    break;
            }
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
