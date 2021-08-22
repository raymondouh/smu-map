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
                <div class="contact-button">
                    <button class="write" disabled>
                        <div class="telegram-image">
                            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M9.7812 24.427L10.1851 17.1552L21.2639 5.25887C21.7544 4.72594 21.163 4.46807 20.5138 4.93223L6.83839 15.2298L0.923915 12.9949C-0.345533 12.5651 -0.359959 11.5165 1.21243 10.76L24.25 0.170278C25.3031 -0.397031 26.3129 0.47972 25.909 2.40513L21.9852 24.427C21.7111 25.9914 20.9177 26.3696 19.8214 25.6476L13.8492 20.3871L10.9785 23.705C10.6467 24.1004 10.3727 24.427 9.7812 24.427Z" />
                            </svg>
                        </div>
                        <div class="button-text">
                            НАПИСАТЬ
                        </div>
                    </button>
                </div>
            </div>
            <div class="smu-filter">
                <div class="smu-checkbox">
                        <label class="check-smu control-checkbox-large">
                            <input type="checkbox" name="" value="">
                            <div class="checkbox-indicator-large"></div>
                        </label>
                </div>
                <div class="filter-buttons">
                    <div class="button-region">
                        <button class="sidebar-filter-button">
                            Регион
                        </button>
                    </div>
                    <div class="button-grnti">
                        <button class="sidebar-filter-button">
                            ГРНТИ
                        </button>
                    </div>
                </div>
            </div>
            <div class="smu-sort">
                <select class="smu-select" name="">
                    <option value="">по численности</option>
                    <option value="">по релевантности</option>
                    <option value="">по дате рег-ии</option>
                </select>
            </div>
            <div class="list-smu">
                    <!-- TODO fix a bug with id (serch results are not accessible) -->
                    <regionSmu v-for="item in loadedSmuList" :smu="item"></regionSmu>
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

import filterSmu from "./FilterSmu"
import regionSmu from "./regionSmu"

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
        ...mapGetters([
            'selectedRegionID',
            'getSmuByRegion'
        ]),
        ...mapState([
            'SmuByRegion',
            'selectedRegionId',
            'filterredSmu',
            'isSidebarOpen'
        ]),
        isSidebarOpen() {
            return this.$store.state.isSidebarOpen;
        },
        filterredLoadedSmuList() {
            /*
            return this.selectedRegionID === null ?
            this.loadedSmuList
            : this.SmuByRegion[this.selectedRegionID];
            /*return Object.entries(this.filterredSmu).length === 0 ?
            SmuByRegion[this.selectedRegionID] : this.filterredSmu
            */
        },

        smuListFilterred() {
            return this.searchParam === '' ?
            this.smuList
            : Object.values(this.smuList).filter(item  => item.name.toLowerCase().includes(this.searchParam.toLowerCase()));
        },
        loadedSmuList() {
            console.log(this.getSmuByRegion);
            return Object.entries(this.filterredSmu).length === 0? this.getSmuByRegion : this.filterredSmu
        }
    },
    data() {
        return {
            searchParam: '',
            smuList: regionSmuList,
        }
    },
    watch: {
        filterredLoadedSmuList(){},
        loadedSmuList(){}
    }
};
</script>
<style scoped>

.sidebar {
    //position: relative;
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

@media only screen and (max-width: 1060px) {
    .button-text{
        display: none;
    }
    .write{
        width: 50px !important;
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
    justify-content: space-between;
    display: flex;
    flex-wrap: nowrap;
    width: 100%;
    height: 50px;
}

.search {
    flex: auto;
    height: 100%;
    max-width: 660px;
}

.search label {
    width: 100%;
    height: 100%;
}

.search input {
    min-width: 150px;
    border: 1px solid #D1D1D1;
    border-radius: 30px;
    padding-left: 25px;
    width: calc(100% - 25px);
    height: 100%;
    font-size: 1.625rem;
    color: #d1d1d1;
    box-shadow: 0px 1px 3px 3px rgba(0, 0, 0, 0.25);
}

.search input:focus {
    border: 1px solid #3c9fe5;
    outline: none;
    box-shadow: 0px 1px 3px 3px #3c9fe5;
}

.contact-button{
    flex: auto;
    max-width: 250px;
}

.write{
    display: -webkit-flex;
    display: -ms-flex;
    display: flex;
    flex-wrap: nowrap;
    -ms-align-items: center;
    align-items: center;
    justify-content: space-around;
    margin: 0 auto;
}

button.write{
    /* TODO: make adaptive */
    width: 180px;
    height: 52px;
    background: linear-gradient(180deg, #3479E4 0%, #AACAFD 100%);
    box-shadow: 0px 3px 7px rgba(0, 0, 0, 0.25);
    border: none;
    border-radius: 10px;
}

button.write:active{
    background: #575757;
    transition: .009s;
}

button.write:disabled>.telegram-image path{
    fill: #9F9F9F;

}

button.write:disabled>.button-text{
    color: #9F9F9F;
}

button.write:disabled {
    border: 2px solid #C4C4C4;
    background: linear-gradient(180deg, #C4C4C4 0%, rgba(196, 196, 196, 0) 100%);
}

.telegram-image path{
    fill: #FFFFFF;

}

.button-text{
    font-style: normal;
    font-weight: bold;
    font-size: 1.0625rem;
    line-height: 1.25rem;
    letter-spacing: 0.05em;
    color: #FFFFFF;
}

.smu-checkbox {
    width: 35px;
    margin-right: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.check-smu {
    height: 30px;
    display: block;
    position: relative;
    padding-left: 30px;
    margin-bottom: 5px;
    padding-top: 3px;
    cursor: pointer;
    margin: 0 auto;
}

.check-smu input {
    position: absolute;
    z-index: -1;
    opacity: 0;
}

.checkbox-indicator-large{
    position: absolute;
    top: 0px;
    left: 0;
    height: 26px;
    width: 26px;
    background: #F1F1F1;
    border: 2px solid #C4C4C4;
    border-radius: 5px;
}

.check-smu:hover > .checkbox-indicator-large{
    border: 2px solid #3C9FE5;
}

.check-smu input:checked~.checkbox-indicator-large {
    background: #3C9FE5;
    border: 2px solid #FFFFFF;
    box-shadow: 0px 2px 5px 2px rgba(60, 159, 229, 0.85);
}

.checkbox-indicator-large:after {
    box-sizing: unset;
    content: '';
    position: absolute;
    display: none;
}

.check-smu input:checked~.checkbox-indicator-large:after {
    display: block;
}

.control-checkbox-large .checkbox-indicator-large:after {
    left: 8px;
    top: 3px;
    width: 6px;
    height: 13px;
    border: solid #FFFFFF;
    border-width: 0 4px 4px 0;
    transform: rotate(45deg);
}

.smu-filter{
    display: flex;
    align-items: center;
    height: 40px;
    margin-top: 25px;
    padding-bottom: 15px;
    border-bottom: 1px solid #C5C5C5;
}

.sidebar-filter-button{
    width: 140px;
    height: 40px;
    border: 2px solid #C4C4C4;
    filter: drop-shadow(0px 1px 4px rgba(0, 0, 0, 0.25));
    border-radius: 15px;
    font-style: normal;
    font-weight: bold;
    font-size: 1.0625rem;
    line-height: 20px;
    letter-spacing: 0.05em;
    color: #575757;
}

.sidebar-filter-button:active{
    background: #3C9FE5;
    color: #FFFFFF;
}

.sidebar-filter-button:hover{
    border: 2px solid #3C9FE5;
}

.filter-buttons{
    display: flex;
}

.filter-buttons button{
    margin-right: 30px;
}

.smu-sort {
    //box-shadow: 0px 10px 10px -10px rgba(0, 0, 0, 0.5);
    margin-top: 15px;
    padding-bottom: 15px;
    width: 100%;
    display: flex;
}

.smu-select {
    /* TODO: make adaptive */
    width: 220px;
    height: 35px;
    padding-left: 20px;
    border: 2px solid #C4C4C4;
    filter: drop-shadow(0px 1px 4px rgba(0, 0, 0, 0.25));
    border-radius: 15px;
    background-image: url("data:image/svg+xml,%3Csvg width='18' height='15' viewBox='0 0 18 15' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M9 15L0.339745 0L17.6603 0L9 15Z' fill='%23C4C4C4'/%3E%3C/svg%3E%0A");
    background-repeat: no-repeat;
    background-position: right .7em top 50%;
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    font-style: normal;
    font-weight: normal;
    font-size: 1.0625rem;
    line-height: 1.25rem;
    letter-spacing: 0.05em;
    margin-left: auto;
    margin-right: 40px;
    color: #575757;
}

.smu-select:-ms-expand {
    display: none;
}

.smu-select>option {
    width: 80%;
}


</style>
