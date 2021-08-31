<template>
<div class="russian-map">
    <svg xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.2" baseProfile="tiny" id="svg2" x="0px" y="0px" viewBox="0 0 1090 620" xml:space="preserve"
        xmlns:xml="http://www.w3.org/XML/1998/namespace">
        <g>
            <RegionPath v-for="(item, key) in regions" :key=key :index="key" :region="item" />
        </g>
    </svg>
</div>
</template>

<script>
import RegionPath from './RegionPath'
import data_json from '../data/map-russia.json'
import DialogRegionInfo from "./DialogRegionInfo";
import SmuMapLegend from "./SmuMapLegend";

import {
    mapState,
    mapMutations
} from 'vuex'

export default {
    data() {
        return {
            regions: data_json
        }
    },
    components: {
        SmuMapLegend,
        RegionPath,
        DialogRegionInfo,
    }
};
</script>

<style lang="less" scoped>
.russian-map {
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 90%;
}

svg {
    margin: 0 auto;
    max-width: 1500px;
    .state {
        stroke-width: 1;
        stroke: #fff;
    }
}

.state.active,
svg .state:hover {
    cursor: pointer;
}

path {
    transition: 0.5s;
    opacity: 0.75;
}

.regionActive {
    transition: 0.5s;
}

p {
    margin: 0 0 10px;
}

.close {
    float: right;
    font-size: 1.5rem;
    font-weight: bold;
    line-height: 1;
    color: #000;
    text-shadow: 0 1px 0 #fff;
    opacity: 0.5;
}

.close:focus,
.close:hover {
    color: #000;
    text-decoration: none;
    cursor: pointer;
    opacity: 0.75;
}
</style>
