<template>
<div class="info" v-if="isDialogDisplayed" :style="{top: dialogCoordinates.coordinateY + 'px', left: dialogCoordinates.coordinateX + 'px'}">
    <div class="region-name">
        {{selectedRegion.name}}
    </div>
    <div class="line">
        <div class="context">
            Активных СМУ
        </div>
        <div class="divider"></div>
        <div class="number">
            {{this.smuCount[this.selectedRegionID].smuNum}}
        </div>
    </div>
    <div class="line">
        <div class="context">
            Молодых ученых
        </div>
        <div class="divider"></div>
        <div class="number">
            {{selectedRegion.scientists}}
        </div>
    </div>
</div>
</template>

<script>
import {
    mapState,
    mapGetters
} from 'vuex';
export default {
    methods: {
        showTitleDialog(region) {
        }
    },
    computed: {
        ...mapState([
            'smuCount'
        ]),
        ...mapGetters([
            'selectedRegion',
            'selectedRegionID',
            'isDialogDisplayed',
            'dialogCoordinates'
        ]),

        isSidebarOpen() {
            return this.$store.state.isSidebarOpen;
        },
    }
};
</script>

<style scoped>
.info {
    text-align: center;
    position: absolute;
    z-index: 1;
    //height: 174px;
    width: 300px;
    padding: 20px;
    background: #F2F2F2;
    border: 2px solid #6AB1E4;
    box-sizing: border-box;
    border-radius: 6px;
}

.region-name {
    font-size: 1.0625rem;
    font-weight: 700;
    color: #3D3D3D;
    margin-bottom: 16px;
}

.line {
    font-size: 1rem;
    font-weight: 100;
    color: #3D3D3D;
    display: flex;
    width: 100%;
    height: 16px;
    margin-bottom: 8px;
}

.context {
    height: 100%;
}

.divider {
    flex: auto;
    height: 100%;
    border-bottom: 1px solid transparent;
    border-image: -webkit-linear-gradient(to left, rgba(0, 0, 0, .25), rgba(0, 0, 0, 1), rgba(0, 0, 0, .25));
    border-image: linear-gradient(to left, rgba(0, 0, 0, .25), rgba(0, 0, 0, 1), rgba(0, 0, 0, .25));
    border-image-slice: 1;
}

.number {
    height: 100%;
}
</style>
