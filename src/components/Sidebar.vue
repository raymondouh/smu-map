<template>
<div class="sidebar">
    <div class="sidebar-backdrop" @click="closeSidebar" v-show="isSidebarOpen"></div>
    <transition name="slide">
        <div v-if="!isSidebarOpen" class="sidebar-switch" @click.prevent="openSidebar">
            <svg width="39" height="66" viewBox="0 0 39 66" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M38.9 5.9L33 0L0 33L16.5 49.5L33 66L38.9 60.1L11.8 33L38.9 5.9Z" fill="#5E8CF0" />
            </svg>
        </div>
        <div v-else class="sidebar-panel" id="sidebar-panel">
            <div class="upper">
                <div class="search">
                    <label>
                        <input type="search" placeholder="Искать СМУ" v-model="searchParam">
                    </label>
                </div>
                <div class="filter">
                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M13.6372 14.2105L21.4913 2.55789C21.7128 2.22873 21.8127 1.81146 21.7692 1.39726C21.7258 0.983056 21.5426 0.6056 21.2595 0.347368C21.0307 0.134283 20.7485 0.012451 20.455 0H1.36508C1.05751 0.0020659 0.759571 0.124483 0.519666 0.347368C0.236637 0.6056 0.0533832 0.983056 0.00994797 1.39726C-0.0334873 1.81146 0.0664275 2.22873 0.28786 2.55789L8.18292 14.2105V23.4789C8.15825 23.7178 8.18105 23.9601 8.24958 24.1872C8.31812 24.4144 8.43057 24.6204 8.57835 24.7895L11.3055 27.9474C11.561 28.2415 11.9066 28.4065 12.2668 28.4065C12.627 28.4065 12.9726 28.2415 13.2281 27.9474C13.3783 27.7797 13.4933 "
                            fill="#3C9FE5" />
                    </svg>
                </div>
            </div>
            <div class="list-smu">
                <!-- TODO fix a bug with id (serch results are not accessible) -->
                <regionSmu v-for="item in filterredLoadedSmuList" :smu="item" :selectedRegion="selectedRegion"></regionSmu>
            </div>
        </div>
    </transition>
</div>
</template>
<script>
import {
    mapState,
    mapMutations,
    mapGetters
} from 'vuex';

import regionSmu from "./regionSmu"
import regionSmuList from '../data/region-smu.json'
import SmuByRegion from "../data/smu_by_region.json"

export default {
    components: {
        regionSmu
    },
    methods: {
        ...mapMutations([
            'setIsSidebarOpen',
        ]),
        openSidebar() {
            this.setIsSidebarOpen(true);
        },
        closeSidebar() {
            this.setIsSidebarOpen(false);
        }
    },
    computed: {
        //TODO fix this
        ...mapGetters([
            'selectedRegionID',
            'selectedRegion'
        ]),
        ...mapState([
            'filterredSmu',
            'isSidebarOpen'
        ]),
        isSidebarOpen() {
            return this.$store.state.isSidebarOpen;
        },
        filterredLoadedSmuList() {
            return this.selectedRegionID === null ?
            this.loadedSmuList
            : this.loadedSmuList[this.selectedRegionID]
        },
        smuListFilterred() {
            return this.searchParam === '' ?
            this.smuList
            : Object.values(this.smuList).filter(item  => item.name.toLowerCase().includes(this.searchParam.toLowerCase()));
        },
        loadedSmuList() {
            return Object.entries(this.filterredSmu).length === 0? SmuByRegion : this.filterredSmu
        }
    },
    data() {
        return {
            searchParam: '',
            smuList: regionSmuList,
        }
    }
};
</script>
<style scoped>

.sidebar {
    display: flex;
    justify-content: flex-end;
}

.slide-enter-active,
.slide-leave-active {
    transition: transform 0.2s ease;
}

.slide-enter,
.slide-leave-to {
    transform: translateX(100%);
    transition: all 150ms ease-in 0s;
}

.sidebar-backdrop {
    z-index: 3;
    background-color: rgba(19, 15, 64, 0.4);
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    cursor: pointer;
}

.sidebar-panel {
    overflow-y: auto;
    background-color: white;
    position: fixed;
    height: 100vh;
    top: 0;
    padding: 3rem 20px 2rem 20px;
    /*left: 0;*/
}

.sidebar-switch:hover {
    transform: scale(1.09);
    transition: .3s;
}

.sidebar-switch {
    z-index: 3;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow-y: auto;
    background-color: transparent;
    transition: .3s ease;
    /*background-color: red;*/
    position: fixed;
    height: 100vh;
    top: 0;
    right: 0;
    /*padding: 3rem 20px 2rem 20px;*/
    width: 5%;
    color: #5E8CF0;
    /*left: 0;*/
}

.sidebar-switch svg {
    width: 50%;
}

@media only screen and (max-width: 600px) {
    .sidebar-panel {
        width: 60%;
    }
}

@media only screen and (max-width: 450px) {
    .sidebar-panel {
        width: 40%;
    }
}

@media only screen and (min-width: 600px) {
    .sidebar-panel {
        width: 60%;
    }
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
    .sidebar-panel {
        width: 60%;
    }
}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
    .sidebar-panel {
        width: 40%;
    }
}

.sidebar-panel {
    /*overflow-y: auto;*/
    /*background-color: white;*/
    /*position: fixed;*/
    /*height: 100vh;*/
    /*top: 0;*/
    /*padding: 3rem 20px 2rem 20px;*/
    /*left: 0;*/
}


.sidebar-panel {
    color: #575757;
    overflow: hidden;
    padding: 30px 0 40px 40px;
    //font-family: 'Roboto', sans-serif;
    transition: .5s;
    background: white;
    z-index: 3;
    position: absolute;
    top: 0;
    right: 0;
    width: 50%;
    height: 100%;
    box-sizing: border-box;
    border-radius: 40px 0px 0px 40px;
    border-top: 5px solid #B4D3E9;
    border-bottom: 5px solid #B4D3E9;
    border-left: 5px solid #B4D3E9;
}

.upper {
    display: flex;
    flex-wrap: nowrap;
    width: 100%;
    height: 50px;
}

.search {
    display: inline-block;
    width: 80%;
    height: 100%;
    max-width: 660px;
}

.search label {
    width: 80%;
    height: 100%;
}

.search input {
    min-width: 150px;
    border: 1px solid #D1D1D1;
    border-radius: 30px;
    padding-left: 25px;
    width: 100%;
    height: 100%;
    font-size: 1.625rem;
    color: #d1d1d1
}

.search input:focus {
    border: 1px solid #B4D3E9;
    outline: none;
}

.filter {
    flex: auto;
    display: flex;
    align-items: center;
    justify-content: center;
}

.filter:after {
    content: '';
    border: 8px solid transparent;
    border-top: 8px solid #3C9FE6;
    position: relative;
    top: 15px;
    right: 12px;
}

</style>
