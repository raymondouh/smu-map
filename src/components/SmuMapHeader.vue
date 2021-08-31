<template>
<div class="smu-map-header">
    <div class="smu-map-header-title">
        <div class="header-title">
            Карта СМУ
        </div>
        <div class="header-subtitle">
            Советы молодых ученых
        </div>
    </div>
    <div class="search-and-filter">
        <div class="search">
            <input type="search" placeholder="Искать СМУ" v-model="search">
        </div>
        <div class="filter">
        <tooltip :tooltiptSelector="'header-tooltip'" :flowSelector="'bottom'"></tooltip>
            <div class="filter-start-block">
                Сортировка по:
            </div>
            <div class="filter-options">
                <div class="filter-option">
                    <label for="option-YouSci">
                        <div class="filter-option-body">
                            <div class="radio-input">
                                <input type="radio" value="YouSci" name="smu-filter-by" v-model="filterByOption" checked>
                            </div>
                            <div class="option-text">
                                Молодым ученым
                            </div>
                        </div>
                    </label>
                </div>
                <div class="filter-option">
                    <label for="option-SMU">
                        <div class="filter-option-body">
                            <div class="radio-input">
                                <input type="radio" value="SMU" name="smu-filter-by" v-model="filterByOption">
                            </div>
                            <div class="option-text">
                                СМУ
                            </div>
                        </div>
                    </label>
                </div>
            </div>
        </div>
    </div>
    <div class="space"></div>
</div>
</template>
<script>
import {
    mapMutations
} from 'vuex';
import tooltip from "./Tooltip"
export default {
    data() {
            return {
                search: '',
                filterByOption: "SMU"
            }
    },
    components: {
      tooltip
    },
    methods: {
        ...mapMutations([
            'setIsSidebarOpen',
            'setFilterOption',
            'setSearchSmu',
            'searchSmu'
        ]),
        openSidebar() {
            this.setIsSidebarOpen(true);
        },
        closeSidebar() {
            this.setIsSidebarOpen(false);
        },
    },
    computed: {
        isSidebarOpen() {
            return this.$store.state.isSidebarOpen;
        },
    },
    watch: {
        filterByOption(){
            this.setFilterOption(this.filterByOption);
        },
        search(){
            this.setSearchSmu(this.search);
            this.searchSmu();
        }
    }
};
</script>
<style  scoped>
label {
    width: 100%;
    height: 100%;
}

.smu-map-header {
    z-index: 3;
    margin-top: 2rem;
    //height: 16%;
    text-align: center;
    display: flex;
    justify-content: space-between;
}

.smu-map-header-title,
.space {
    color: #064ebe;
    width: 300px;
}

.space {
    min-width: 0;
    flex-shrink: 1;
}

.header-title {
    font-size: 3.125rem;
    line-height: 3.688rem;
    font-weight: bold;
}

.header-subtitle {
    font-size: 1.313rem;
    line-height: 1.563rem;
    letter-spacing: 0.01em;
    font-weight: 500;
}

.search-and-filter {
    min-width: 200px;
    flex-grow: 0;
    flex-basis: 800px;
    flex-shrink: 1;
}

.search {
    max-height: 120px;
    flex: auto;
}

.search input {
    margin-top: auto;
    letter-spacing: 0.115em;
    font-size: 1.563rem;
    font-weight: 300;
    width: 100%;
    height: 60px;
    border-radius: 25px;
    border: 1px solid #d1d1d1;
    padding-left: 25px;
    box-shadow: 0px 1px 3px 3px rgba(0, 0, 0, 0.25);
}

.search input:focus {
    box-shadow: 0px 1px 3px 3px #3c9fe5;
    border: 1px solid #3c9fe5;
    outline: 0;
}


.filter {
    color: #575757;
    margin-top: 17px;
    flex: auto;
    display: flex;
    flex-wrap: nowrap;
}

.filter-start-block {
    font-size: 1rem;
    font-weight: bold;
    line-height: 1.688rem;
    margin-right: 20px;
}

.filter-options {
    flex: auto;
    display: flex;
    flex-wrap: nowrap;
}

.filter-option {
    flex: auto;
}

.filter-option-body {
    display: flex;
    flex-wrap: nowrap;
}

.radio-input {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 27px;
    width: 27px;
}

.radio-input input[type='radio'] {
    position: relative;
    height: 27px;
    width: 27px;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    outline: none;
}

.radio-input input[type='radio']:before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 23px;
    height: 23px;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    border: 2px solid #3c9fe5;
}

.radio-input input[type='radio']:checked:after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 19px;
    height: 19px;
    background-color: #5e8cf0;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    visibility: visible;
}

.option-text {
    font-size: 1rem;
    font-weight: 300;
    line-height: 1.688rem;
    margin-left: 15px;
}

@media only screen and (max-width: 1540px) {
    .header-title {
        font-size: 2.725rem;
        line-height: 2.8rem;
        font-weight: bold;
    }

    .header-subtitle {
        font-size: 1.2rem;
        line-height: 1.4rem;
        letter-spacing: 0.01em;
        font-weight: 500;
    }
}
@media only screen and (max-width: 1100px) {
    .header-title {
        font-size: 2.4rem;
        line-height: 2.5rem;
        font-weight: bold;
    }

    .header-subtitle {
        font-size: 1rem;
        line-height: 1.1rem;
        letter-spacing: 0.01em;
        font-weight: 500;
    }
}
@media only screen and (max-width: 767px) {
    .header-title {
        font-size: 1.725rem;
        line-height: 1.8rem;
        font-weight: bold;
    }

    .header-subtitle {
        font-size: 0.8rem;
        line-height: 1rem;
        letter-spacing: 0.01em;
        font-weight: 500;
    }
}
</style>
