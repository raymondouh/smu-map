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
            'smuCount',
            'filterOption',
            'legendStartColor',
            'legendEndColor',
            'legendHoverColor'
        ]),
        ...mapGetters([
            'scientistsNumRange',
            'smuNumRange'
        ]),
        filterredFillColor() {
            switch (this.filterOption) {
                case 'YouSci':
                    return this.lerpColor(this.legendStartColor, this.legendEndColor, this.region.scientists / this.scientistsNumRange.max)
                    break;
                case 'SMU':
                    return this.lerpColor(this.legendStartColor, this.legendEndColor, this.smuCount[this.index].smuNum / this.smuNumRange.max)
                    break;
            }
        },
        fillColor() {
            if (this.isActive) {
                return this.legendHoverColor
            } else {
                return this.filterredFillColor
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
        /* setCoordinates: function(displacementX, dislacementY) {
            this.dialogCoordinates.coordinateX = (box.left + box.right) / 2 + displacementX;
            this.dialogCoordinates.coordinateY = (box.top + box.bottom) / 2 + dislacementY;
        },*/
        getCoordinates() {
            let box = event.target.getBoundingClientRect();
            //console.log(box);

            if(box.width <= 80) {
                //setCoordinates(45, -90);
                this.dialogCoordinates.coordinateX = (box.left + box.right) / 2 + 45;
                this.dialogCoordinates.coordinateY = (box.top + box.bottom) / 2 -90;
            }
            else if(box.width <= 160) {
                //setCoordinates(60, -60);
                this.dialogCoordinates.coordinateX = (box.left + box.right) / 2 + 60;
                this.dialogCoordinates.coordinateY = (box.top + box.bottom) / 2 -60;
            }
            else if(box.width <= 240) {
                //setCoordinates(105, -90);
                this.dialogCoordinates.coordinateX = (box.left + box.right) / 2 + 105;
                this.dialogCoordinates.coordinateY = (box.top + box.bottom) / 2 + -90;
            }
            else {
                //setCoordinates(200, -150);
                this.dialogCoordinates.coordinateX = (box.left + box.right) / 2 + 200;
                this.dialogCoordinates.coordinateY = (box.top + box.bottom) / 2 + -150;
            }
            this.setDialogCoordinates(this.dialogCoordinates);
        }
    }
};
</script>

<style>
</style>
