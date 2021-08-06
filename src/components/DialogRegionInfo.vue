<template>
<div class="info" v-if="selectedRegion">
    <div class="region-name">
        {{selectedRegion.name}}
    </div>
    <div class="line">
        <div class="context">
            Активных СМУ
        </div>
        <div class="divider"></div>
        <div class="number">
            {{selectedRegion.smuNum}}
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
    <div class="line">
        <div class="context">
            Образовательных организаций
        </div>
        <div class="divider"></div>
        <div class="number">
            {{selectedRegion.eduOrg}}
        </div>
    </div>
    <div class="line">
        <div class="context">
            Научных организаций
        </div>
        <div class="divider"></div>
        <div class="number">
            {{selectedRegion.sciOrg}}
        </div>
    </div>
</div>
</template>

<script>
import {
    mapGetters
} from 'vuex';
export default {
    props: {
        // region: Object,
        // index: Number
    },
    data() {
        return {

        };
    },
    methods: {
        showTitleDialog(region) {
            // console.log(region);
            this.$modal.show('dialog', {
                title: region.fed_okrug + '<br/><br/>' + region.name,
                text: 'Показатель 1: ' + region.city_population + ' единиц <br/>' +
                    'Показатель 2: ' + region.country_population + ' единиц <br/>' +
                    'Показатель 3: ' + region.country_natural_increase + ' единиц <br/>' +
                    'Показатель 4: ' + region.average_nominal_wage + ' единиц <br/>' +
                    'Показатель 5: ' + region.average_consumer_rate + ' единиц <br/>'
            })
        }
    },
    computed: {
        ...mapGetters([
            'selectedRegion'
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
    /*visibility: hidden;*/
    position: absolute;
    top: 5%;
    left: 5%;
    z-index: 1;
    height: 174px;
    width: 320px;
    padding: 20px;
    font-family: 'Roboto', sans-serif;
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
    border-image: linear-gradient(to left, rgba(0, 0, 0, .25), rgba(0, 0, 0, 1), rgba(0, 0, 0, .25));
    border-image-slice: 1;
}

.number {
    height: 100%;
}
</style>
