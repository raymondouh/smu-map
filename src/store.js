import Vue from 'vue'
import Vuex from 'vuex'
import mapRussia from './data/map-russia.json'
import SmuByRegion from './data/smu_by_region.json'
Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        smuCount: {},
        filterredSmu: {},
        searchSmu: '',
        filterOption: 'SMU',
        isDialogDisplayed: false,
        isSidebarOpen: false,
        isSmuPageOpen: false,
        selectedRegionId: null,
        SmuByRegion: SmuByRegion,
        mapRussia: mapRussia,
        selectedSmuId: null,
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
        selectedRegionID: state => {
            return state.selectedRegionId;
        },
        dialogCoordinates: state => {
            return state.dialogCoordinates;
        },
        smuNumRange: state => {
            return getRangeRegionProperty(state.smuCount, 'smuNum');
        },
        scientistsNumRange: state => {
            return getRangeRegionProperty(state.mapRussia, 'scientists');
        },
        isDialogDisplayed: state => {
            return state.isDialogDisplayed;
        },
        getSmuByRegion: state => {
            let arr = [];
            for (const [key, value] of Object.entries(SmuByRegion)) {
                arr = arr.concat(value);
            }
            let res = {};
            res["regions"] = arr
            console.log(res);
            return arr;
        }
    },
    mutations: {
        setSmuCount(state, count){
            state.smuCount = count;
        },
        setSearchSmu(state, option){
            state.searchSmu = option;
        },
        setFilteredSmu(state, smu){
            state.filterredSmu = smu;
        },
        setFilterOption(state, option) {
            state.filterOption = option;
        },
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
        setSelectedSmuId(state, id) {
            state.selectedSmuId = id;
        },
        getSmuNum(state) {
            console.log(state.selectedSmuId);
            let res = {}
            for (const [key, value] of Object.entries(SmuByRegion)) {
                res[key] = {"smuNum":value.length};
            }
            state.smuCount =  res
        },
        getFilterredSmuNum(state) {
            let res = {}
            let sideSmu = {}
            for (const [key, value] of Object.entries(SmuByRegion)) {
                sideSmu[key] = Object.values(value).filter(item  => item.name.toLowerCase().includes(state.searchSmu.toLowerCase()));
                res[key] = {"smuNum":sideSmu[key].length};
            }
            state.filterredSmu = sideSmu;
            state.smuCount =  res
        }
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
