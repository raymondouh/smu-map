import Vue from 'vue'
import Vuex from 'vuex'
import mapRussia from './data/map-russia.json'

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        isDialogDisplayed: false,
        isSidebarOpen: false,
        isSmuPageOpen: false,
        selectedRegionId: null,
        mapRussia: mapRussia,
        legendStartColor: '#D7D7D7',
        legendEndColor: '#5E8CF0',
        legendHoverColor: '#EB5757',
        dialogCoordinates: {
            coordinateX: "",
            coordinateY: ""
        }
    },
    getters: {
        selectedRegion: state => {
            return state.mapRussia[state.selectedRegionId];
        },
        dialogCoordinates: state => {
            return state.dialogCoordinates;
        },
        smuNumRange: state => {
            return getRangeRegionProperty(state.mapRussia, 'smuNum');
        },
        scientistsNumRange: state => {
            return getRangeRegionProperty(state.mapRussia, 'scientists');
        },
        isDialogDisplayed: state => {
            return state.isDialogDisplayed;
        }
    },
    mutations: {
        setIsDialogDisplayed(state, yesno) {
            state.isDialogDisplayed = yesno;
        },
        setDialogCoordinates(state, dialogCoordinates){
            state.dialogCoordinates = dialogCoordinates;
        },
        setIsSidebarOpen(state, yesno) {
            state.isSidebarOpen = yesno;
        },
        toggleSidebar() {
            this.state.isSidebarOpen = !this.state.isSidebarOpen;
        },
        setIsSmuPageOpen(state, yesno) {
            state.isSmuPageOpen = yesno;
        },
        toggleSmuPage() {
            this.state.isSmuPageOpen = !this.state.isSmuPageOpen;
        },
        setSelectedRegionId(state, id) {
            state.selectedRegionId = id;
        },
    },
    actions: {

    }
});

//obj = {key: {prop: val}}
function getRangeRegionProperty(obj, prop) {
    let min = 0;
    let max = 0;
    for (const [key, value] of Object.entries(obj)) {
        if (value[prop] < min) {
            min = value[prop];
        } else if (value[prop] > max) {
            max = value[prop];
        }
    }
    let diff = max - min;
    let step = diff >> 3;
    let rangeArr = [];
    for (let i = 0; i < 8; i++) {
        rangeArr[i] = [min + step * i, min + step * (i + 1)];
    }
    rangeArr[7][1] = max;
    return {
        'min': min,
        'max': max,
        'range': rangeArr
    }
}
export default store;
