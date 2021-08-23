import Vue from 'vue'
import Vuex from 'vuex'
import mapRussia from './data/map-russia.json'
// TODO: request this from server
import smuByRegion from './data/smu_by_region.json'
// TODO: request this from server
import smuStaff from './data/smu-page/smu-staff.json'
// TODO: request this from server
import contactInfo from './data/smu-page/contact-info.json'
// TODO: request this from server
import closestActivities from './data/smu-page/closest-activities.json'
// TODO: request this from server
import releasedProjects from './data/smu-page/released-projects.json'

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        /*header*/
        searchRequest: '',
        filterOption: 'SMU',

        /*map*/
        selectedRegionId: null,
        isDialogDisplayed: false,

        smuCount: {},
        scientistsNum: {},
        dialogCoordinates: {coordinateX: "", coordinateY: ""},

        /*map legend*/
        legendStartColor: '#D7D7D7',
        legendEndColorSMU: '#5E8CF0',
        legendEndColorScientists: '#4D0099',
        legendHoverColor: '#EB5757',

        /*sidebar*/
        isSidebarOpen: false,

        selectedRegionIds: [],
        filterredSmu: {},

        /*smupage*/
        isSmuPageOpen: false,
        selectedSmuId: 1,//

        /*data*/
        smuStaff: smuStaff,
        smuByRegion: smuByRegion,
        mapRussia: mapRussia,
    },
    getters: {
        getRegionKeys: state => {
            let keys = [];
            for (const [key, value] of Object.entries(state.mapRussia)) {
                let obj = {}
                obj["id"] = key;
                obj["name"] = value.name;
                keys.push(obj);
            }
            return keys;
        },
        getSmuGrntis: state => {

        },
        getContactInfo: state => {
            return getDataByJson(contactInfo, state.selectedSmuId);
        },
        getSmuStaff: state => {
            return getDataByJson(smuStaff, state.selectedSmuId);
        },

        getSmuActivities: state => {
            return getDataByJson(closestActivities, state.selectedSmuId);
        },

        getSmuProjects: state => {
            return getDataByJson(releasedProjects, state.selectedSmuId);
        },

        selectedRegion: state => {
            return state.mapRussia[state.selectedRegionId];
        },
        dialogCoordinates: state => {
            return state.dialogCoordinates;
        },
        smuNumRange: state => {
            return getRangeRegionProperty(state.smuCount, 'smuNum');
        },
        scientistsNumRange: state => {
            return getRangeRegionProperty(state.scientistsNum, 'scientistsNum');
        },
        isDialogDisplayed: state => {
            return state.isDialogDisplayed;
        },
        getAllSmuByRegion: state => {
            return getSmyByRegionsArray(state.selectedRegionIds, state.smuByRegion)
        },
        getAllfilterredSmuByRegion: state => {
            return getSmyByRegionsArray(state.selectedRegionIds, state.filterredSmu)
        }
    },
    mutations: {
        setSmuCount(state, count) {
            state.smuCount = count;
        },
        setSearchSmu(state, option) {
            state.searchRequest = option;
        },
        setFilteredSmu(state, smu) {
            state.filterredSmu = smu;
        },
        setFilterOption(state, option) {
            state.filterOption = option;
        },
        setIsDialogDisplayed(state, yesno) {
            state.isDialogDisplayed = yesno;
        },
        setDialogCoordinates(state, dialogCoordinates) {
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
        setSelectedSmuId(state, id){
            state.selectedSmuId = id;
        },
        setSelectedRegionIds(state, id) {
            state.selectedRegionIds = id;
        },
        calculateScientistsNum(state) {
            let scientists = {}
            for (const [key, value] of Object.entries(smuStaff)) {
                let scientistsInRegion = 0;

                for(const [keyl, valuel] of Object.entries(value)){
                    scientistsInRegion += valuel.length;
                }
                scientists[key] = {
                    "scientistsNum": scientistsInRegion
                };
            }
            state.scientistsNum = scientists
        },
        calculateSmuNum(state, object = state.smuByRegion) {
            let smuS = {}
            for (const [key, value] of Object.entries(object)) {
                smuS[key] = {
                    "smuNum": value.length
                };
            }
            state.smuCount = smuS
        },
        searchSmu(state) {
            let res = {}
            let sideSmu = {}
            for (const [key, value] of Object.entries(smuByRegion)) {
                sideSmu[key] = Object.values(value).filter(item => item.name.toLowerCase().includes(state.searchRequest.toLowerCase()));
                res[key] = {
                    "smuNum": sideSmu[key].length
                };
            }
            state.filterredSmu = sideSmu;
            state.smuCount = res
        }
    },
    actions: {

    }
});

function getDataByJson(object, prop){
    let requested = {};
    for (const [key, value] of Object.entries(object)) {
        for (const [keyl, valuel] of Object.entries(value)) {
            if (keyl == prop) {
                return valuel;
            }
        }
    }
}

function getSmyByRegionsArray(regionsArray, object) {
    let arr = [];
    if (regionsArray.length === 0) {
        for (const [key, value] of Object.entries(object)) {
            arr = arr.concat(value);
        }
    } else {
        for (const [key, value] of Object.entries(object)) {
            for(const regionKey of regionsArray){
                if (regionKey === key) {
                    arr = arr.concat(value);
                }
            }
        }
    }
    return arr;
}
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
