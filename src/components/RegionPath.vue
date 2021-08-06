<template>
<path :index='index' :style='{fill: fillColor}' :d='region.d' class='state' @mouseover='isActive = true, setSelectedRegionId(index)' @mouseout='isActive = false' @click="setIsSidebarOpen" :class='{regionActive: isActive}' />
</template>

<script>
import {
    mapState,
    mapGetters,
    mapMutations
} from 'vuex';

export default {
    props: {
        region: Object,
        index: String
    },
    data() {
        return {
            isActive: false
        };
    },
    computed: {
        ...mapState([
            'legendStartColor',
            'legendEndColor',
            'legendHoverColor'
        ]),
        ...mapGetters([
            'scientistsNumRange'
        ]),
        fillColor() {
            if(this.isActive){
                return this.legendHoverColor
            }
            else {
                return this.lerpColor(this.legendStartColor, this.legendEndColor, this.region.scientists/this.scientistsNumRange.max)
            }
        }
    },
    methods: {
        ...mapMutations([
            'setSelectedRegionId',
            'setIsSidebarOpen',
        ]),
        setIsActive(val) {
            this.isActive = val;
            this.setActiveRegion();
        },
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
        },
        lerpColor(a, b, amount) {
            var ah = parseInt(a.replace(/#/g, ''), 16),
                ar = ah >> 16,
                ag = ah >> 8 & 0xff,
                ab = ah & 0xff,
                bh = parseInt(b.replace(/#/g, ''), 16),
                br = bh >> 16,
                bg = bh >> 8 & 0xff,
                bb = bh & 0xff,
                rr = ar + amount * (br - ar),
                rg = ag + amount * (bg - ag),
                rb = ab + amount * (bb - ab);

            return '#' + ((1 << 24) + (rr << 16) + (rg << 8) + rb | 0).toString(16).slice(1);
        }
    }
};
</script>

<style>
</style>
