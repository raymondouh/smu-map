<template>
<div class="SMU-page">
    <div class="SMU-header">
        <div class="back-btn" @click="closeSmuPage()">
            <div class="back-arrow">
            </div>
            <div class="back-btn-text">
                НАЗАД
            </div>
        </div>
        <h1>
            Совет молодых ученых
            <!-- TODO add smu name -->
        </h1>
    </div>
    <div class="SMU-wrapper-block">
        <contactInfo></contactInfo>
        <smuStaff></smuStaff>
    </div>
    <div class="SMU-block closest-activities">
        <div class="SMU-block-header">
            <h2>
                Ближайшие мероприятия
            </h2>
        </div>
        <closestActivities></closestActivities>
    </div>
    <div class="SMU-block released-projects">
        <div class="SMU-block-header">
            <h2>
                Реализованные проекты
            </h2>
        </div>
        <releasedProjects></releasedProjects>
    </div>
</div>
</div>
</template>
<script>
import {
    mapMutations
} from 'vuex';
import contactInfo from "./smu-page/contactInfo"
import smuStaff from "./smu-page/smuStaff"
import closestActivities from "./smu-page/smuActivities"
import releasedProjects from "./smu-page/smuProjects"
export default {
    components: {
        contactInfo,
        smuStaff,
        closestActivities,
        releasedProjects
    },
    methods: {
        ...mapMutations([
            'setIsSmuPageOpen',
        ]),
        openSmuPage() {
            this.setIsSmuPageOpen(true);
        },
        closeSmuPage() {
            this.setIsSmuPageOpen(false);
        },
    },
    computed: {
        isSmuPageOpen() {
            return this.$store.state.isSmuPageOpen;
        },
    },
};
</script>
<style scoped>
.SMU-page {
    z-index: 150;
    color: #575757;
    //font-family: 'Roboto', sans-serif;
    font-style: normal;
    height: 100%;
    width: 100%;
    background: white;
    overflow-y: auto;
    /*works-in-mozilla-only*/
    scrollbar-color: #B4D3E9 grey;
}

.SMU-header {
    text-align: center;
    height: 80px;
}

.SMU-wrapper-block {
    margin: 0 auto;
    max-width: 1740px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}



/********SMU-staff*********/



/**********SMU-activities****************/


/***********media*****************/


@media only screen and (max-width: 1600px) {

    .SMU-block {
        margin: 0 auto;
        max-width: 750px !important;
    }
}


@media only screen and (max-width: 992px) {

    .SMU-header h1 {
        font-size: 2.25rem;
    }

    .SMU-block-header h2 {
        font-size: 1.845rem;
    }

    .closest-activities,
    .released-projects {
        max-width: 750px;
    }
}

@media only screen and (max-width: 767px) {

    .SMU-header h1 {
        font-size: 1.5625rem;
        line-height: 3.125rem;
    }

    .SMU-block-header h2 {
        font-size: 1.6rem;
        font-weight: bold;
    }

    .SMU-logo {
        margin: 0 auto;
        margin-bottom: 20px;
    }

    .SMU-name,
    .general-location {
        text-align: center;
    }

    .main-contact-info {
        width: 100%;
    }

    .main-contact-info>.info-line {
        padding: 0 20px 0 20px;
        max-width: max-content;
        margin: 0 auto;
    }

    .person-block {
        margin: 0 auto;
        margin-bottom: 30px;
    }

    .SMU-block-header {
        text-align: center;
    }

    .SMU-activity {
        margin-bottom: 25px;
    }

    .SMU-info {
        max-width: none;
    }

    .SMU-activity-logo {
        margin: 0 auto;
        margin-bottom: 15px;
    }

    .SMU-activity-name,
    .SMU-activity-date {
        text-align: center;
    }
}

.back-btn {
    color: #575757;
    position: absolute;
    top: 0;
    left: 0;
    padding: 15px;
    display: flex;
    align-items: center;
    transition: .2s ease;
}

.back-btn:hover {
    transition: .2s;
    color: #5E8CF0;
    cursor: pointer;
}

.back-btn:hover>.back-arrow {
    transform: scale(1.07) rotate(-45deg);
}

.back-arrow {
    border-top: 8px solid #5E8CF0;
    border-left: 8px solid #5E8CF0;
    transform: rotate(-45deg);
    width: 30px;
    height: 30px;
}

.back-btn-text {
    transform: translateX(-15px);
    font-weight: 600;
    font-size: 12px;
}
</style>
