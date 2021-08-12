<template>
    <div class="SMU-block SMU-staff">
        <div class="SMU-block-header">
            <h2>
                Состав СМУ
            </h2>
        </div>
        <div class="staff">
            <div class="person-block" v-for="person in staff">
                <div class="person-photo">
                    <img :src="require('./../../../resources/' + person.imgName)" alt="photo">
                </div>
                <div class="person-info">
                    <div class="person-name info-line">
                        {{person.name}}
                    </div>
                    <div class="person-position info-line">
                        {{person.position}}
                    </div>
                    <div class="person-email info-line">
                        <a :href="'mailto:' + person.email">{{person.email}}</a>
                    </div>
                    <div class="science-ID info-line">
                        <span>
                            {{person.scienceID}}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapState} from 'vuex'
import smuStaff from './../../data/smu-page/smu-staff.json'
export default {

    computed: {
        ...mapState([
            'selectedSmuId'
        ]),
        staff() {
            return smuStaff[this.selectedSmuId]
        }
    }
}
</script>
<style>
.SMU-block {
    flex: auto;
    padding: 20px;
    flex-basis: 800px;
}

.SMU-block-header h2 {
    font-size: 2.25rem;
    line-height: 2.625rem;
    letter-spacing: 0.05em;
}

.SMU-header h1 {
    font-size: 3rem;
    line-height: 5rem;
}

.staff {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    max-height: 550px;
    overflow: auto;

    /*works-in-mozilla-only*/
    scrollbar-width: thin;
}

.person-block {
    min-width: 350px;
    margin-bottom: 45px;
    display: flex;
    flex-wrap: nowrap;
}

.person-position {
    font-size: 12px;
    line-height: 16px;
}

.person-photo {
    width: 85px;
    height: 85px;
    border: 2px solid #C4C4C4;
    border-radius: 20px;
    overflow: hidden;
    margin-right: 50px;
}

.person-name {
    font-weight: 700;
}

.info-line span {
    color: white;
    font-size: 12px;
    padding: 2px 4px 1px 4px;
    background: #3C9FE6;
    border-radius: 10px;
}

.info-line {
    font-size: 14px;
    line-height: 19px;
    margin-bottom: 5px;
    width: 100%;
}

.info-line a {
    font-size: 14px;
    text-decoration: none;
    color: #575757;
}

.info-line a:hover {
    color: #3C9FE6;
}

.info-line-title {
    font-weight: 700;
    width: 90px;
}

.info-line-content {
    flex: auto;
    min-width: 250px;
}
</style>
