<template>
<div class="sort-panel">
    <div class="sort-header">
        <div class="sort-header-search">
            <label>
                <input type="search" :placeholder="placeholder" v-model="search">
                </input>
            </label>
        </div>
        <div class="sort-header-image">
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M11.1429 0C14.0981 0 16.9324 1.17398 19.022 3.26367C21.1117 5.35336 22.2857 8.18759 22.2857 11.1429C22.2857 13.9029 21.2743 16.44 19.6114 18.3943L20.0743 18.8571H21.4286L30 27.4286L27.4286 30L18.8571 21.4286V20.0743L18.3943 19.6114C16.44 21.2743 13.9029 22.2857 11.1429 22.2857C8.18759 22.2857 5.35336 21.1117 3.26367 19.022C1.17398 16.9324 0 14.0981 0 11.1429C0 8.18759 1.17398 5.35336 3.26367 3.26367C5.35336 1.17398 8.18759 0 11.1429 0ZM11.1429 3.42857C6.85714 3.42857 3.42857 6.85714 3.42857 11.1429C3.42857 15.4286 6.85714 18.8571 11.1429 18.8571C15.4286 18.8571 18.8571 15.4286 18.8571 11.1429C18.8571 6.85714 15.4286 3.42857 11.1429 3.42857Z" />
            </svg>
        </div>
    </div>
    <div class="region-options">
        <div class="region-option" v-for="elem in filterredFilterValues">
            <label class="check-region control-checkbox">
                <input type="checkbox" name="" :value="elem.id" v-model="selectedRegions">
                <div class="checkbox-indicator"></div>
                <div class="region-text">
                    {{elem.name}}
                </div>
            </label>
        </div>
    </div>
</div>
</template>

<script>
import {
    mapState,
    mapGetters,
    mapMutations
} from 'vuex'
export default {
    props: {
        of: String,
        placeholder: String
    },
    computed: {
        ...mapState(['selectedRegionIds']),
        ...mapGetters(['getRegionKeys']),
        ...mapMutations(['setSelectedRegionIds']),
        filterValues() {
            return this.of === 'region' ? this.getRegionKeys : this.getSmuGrntis
        },
        filterredFilterValues() {
            return this.search === '' ? this.filterValues : this.filterValues.filter(item => item.name.toLowerCase().includes(this.search.toLowerCase()));
        },
        selectedRegions: {
            get() {
                return this.$store.state.selectedRegionIds
            },
            set(value) {
                this.$store.state.selectedRegionIds = value
            }
        }
    },
    data() {
        return {
            search: '',
        }
    }
}
</script>

<style>
.sort-panel {
    overflow: hidden;
    z-index: 5;
    position: absolute;
    width: 390px;
    max-height: 700px;
    background: #FFFFFF;
    border: 1px solid #515151;
    border-radius: 20px;
    padding: 20px;
    padding-top: 40px;
}

.sort-header {
    display: -webkit-flex;
    display: -ms-flex;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
}

.sort-header-search,
.sort-header-search label {
    width: 100%;
}

.sort-header-search input {
    width: 90%;
    height: 40px;
    padding-left: 15px;
    border: 1px solid #D1D1D1;
    filter: drop-shadow(0px 1px 4px rgba(0, 0, 0, 0.25));
    border-radius: 26px;
}

.sort-header-search input:focus {
    border: 1px solid #3C9FE5;
    outline: 0;
}

.sort-header-image {
    display: -webkit-flex;
    display: -ms-flex;
    display: flex;
    justify-content: center;
    -ms-align-items: center;
    align-items: center;
}

.sort-header-image path {
    fill: #9F9F9F;
}

.region-options {
    overflow: auto;
    max-height: 600px;
    margin-top: 30px;
    padding-left: 30px;
}

.region-option {
    height: 20px;
    margin-top: 5px;
    margin-bottom: 5px;
}

.check-region {
    display: block;
    position: relative;
    padding-left: 30px;
    margin-bottom: 5px;
    padding-top: 1px;
    cursor: pointer;
}

.check-region input {
    position: absolute;
    z-index: -1;
    opacity: 0;
}

.checkbox-indicator {
    position: absolute;
    top: 0px;
    left: 0;
    height: 17px;
    width: 17px;
    background: #F1F1F1;
    border: 1px solid #C4C4C4;
    border-radius: 5px;

}

.check-region:hover input~.checkbox-indicator,
.check-region input:focus~.checkbox-indicator {
    background: #F1F1F1;
}

.check-region input:checked~.checkbox-indicator {
    background: #3C9FE5;
    border: 2px solid #FFFFFF;
    box-shadow: 0px 2px 5px 2px rgba(60, 159, 229, 0.85);
}

.checkbox-indicator:after {
    box-sizing: unset;
    content: '';
    position: absolute;
    display: none;
}

.check-region input:checked~.checkbox-indicator:after {
    display: block;
}

.control-checkbox .checkbox-indicator:after {
    left: 5px;
    top: 3px;
    width: 4px;
    height: 7px;
    border: solid #FFFFFF;
    border-width: 0 3px 3px 0;
    transform: rotate(45deg);
}

.region-text {
    line-height: 1.0625rem;
    margin-left: 11px;
    font-size: 1rem;
}
</style>
