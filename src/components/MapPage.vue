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
    },
    created() {
        this.calculateScientistsNum();
        this.calculateSmuNum();
    },
    methods: {
        ...mapMutations([
            'calculateSmuNum',
            'calculateScientistsNum'
        ]),
    }
};
</script>

<style>
.map-page {
    width: 100%;
    height: 100%;
}

.map-wraper {
    margin: 0 auto;
    position: relative;
    display: flex;
    width: 100%;
    height: 80%!important;
}

@media(max-height: 967px){
    .map-wraper{
        height: 85%!important;
    }
    svg {
        width: 75%!important;
    }
}
@media(max-height: 800px){
    .map-wraper{
        height: 80%!important;
    }
    svg {
        width: 56%!important;
    }
}
@media(max-height: 667px){
    .map-wraper{
        height: 75%!important;
    }
    svg {
        width: 50%!important;
    }
}
@media(max-height: 590px){
    .map-wraper{
        height: 72%!important;
    }
    svg {
        width: 40%!important;
    }
}
@media(max-height: 500px){
    .map-wraper{
        height: 65%!important;
    }
    svg {
        width: 30%!important;
    }
}
@media(max-height: 400px){
    .map-wraper{
        height: 58%!important;
    }
    svg {
        width: 20%!important;
    }
}
@media (max-width: 1900px){
    svg {
        width: 80%;
    }
}
@media (max-width: 1000px){
    svg {
        width: 75%;
    }
}
@media (max-width: 767px){
    svg {
        width: 65%;
    }
}
</style>
