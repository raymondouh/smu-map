<template>
<path :index='index' :style='{fill: fillColor}' :d='region.d' class='state' @mouseover='isActive = true, setSelectedRegionId(index), setIsDialogDisplayed(true), getCoordinates()' @mouseout='isActive = false, setIsDialogDisplayed(false)' @click="setIsSidebarOpen" :class='{regionActive: isActive}' />
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
            isActive: false,
            dialogCoordinates: {
                coordinateX: "",
                coordinateY: ""
            }
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
            if (this.isActive) {
                return this.legendHoverColor
            } else {
                return this.lerpColor(this.legendStartColor, this.legendEndColor, this.region.scientists / this.scientistsNumRange.max)
            }
        }
    },
    methods: {
        ...mapMutations([
            'setSelectedRegionId',
            'setIsSidebarOpen',
            'setIsDialogDisplayed',
            'setDialogCoordinates'
        ]),
        setIsActive(val) {
            this.isActive = val;
            this.setActiveRegion();
        },
        showTitleDialog(region) {},
        lerpColor(firstColor, secondColor, percentAmount) {
            var ah = parseInt(firstColor.replace(/#/g, ''), 16),
                bh = parseInt(secondColor.replace(/#/g, ''), 16),

                ar = ah >> 16,
                ag = ah >> 8 & 0xff,
                ab = ah & 0xff,

                br = bh >> 16,
                bg = bh >> 8 & 0xff,
                bb = bh & 0xff,//duplicate code

                colorRed = ar + percentAmount * (br - ar),
                colorGreen = ag + percentAmount * (bg - ag),
                colorBlue = ab + percentAmount * (bb - ab);

            return '#' + ((1 << 24) + (colorRed << 16) + (colorGreen << 8) + colorBlue | 0).toString(16).slice(1);
        },
        getCoordinates() {
            let box = event.target.getBoundingClientRect();
            console.log(box);

            if(box.width <= 80){
                this.dialogCoordinates.coordinateX = (box.left + box.right) / 2 + 45;
                this.dialogCoordinates.coordinateY = (box.top + box.bottom) / 2 - 90;
            }
            else if(box.width <= 160) {
                this.dialogCoordinates.coordinateX = (box.left + box.right) / 2 + 60;
                this.dialogCoordinates.coordinateY = (box.top + box.bottom) / 2 - 60;//duplicate code
            }
            else if(box.width <= 240) {
                this.dialogCoordinates.coordinateX = (box.left + box.right) / 2 + 105;
                this.dialogCoordinates.coordinateY = (box.top + box.bottom) / 2 - 90;//duplicate code
            }
            else {
                this.dialogCoordinates.coordinateX = (box.left + box.right) / 2 + 200;
                this.dialogCoordinates.coordinateY = (box.top + box.bottom) / 2 - 150;//duplicate code
            }

            this.setDialogCoordinates(this.dialogCoordinates);
        }
    }
};
</script>

<style>
</style>
