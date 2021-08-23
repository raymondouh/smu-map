<template>
    <div class="SMU-activities">
        <div class="SMU-activity project" v-for="project in projects">
            <div class="SMU-activity-logo">
                <img :src="require('./../../../resources/img/smuReleasedProjects/' + project.imgName)" alt="project">
            </div>
            <div class="SMU-activity-info">
                <div class="SMU-activity-name">
                    {{project.name}}
                </div>
                <div class="SMU-activity-date">
                </div>
                <div class="SMU-activity-about">
                    <p>
                        {{project.description}}
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import {mapState, mapGetters} from 'vuex'
export default {

    computed: {
        ...mapState([
            'selectedSmuId'
        ]),
        projects() {
            return this.getSmuProjects()
        }
    },
    methods: {
       ...mapGetters(['getSmuProjects'])
    }
}
</script>
<style>
.closest-activities,
.released-projects {
    margin: 0 auto;
    max-width: 1700px;
}

.SMU-activities {
    max-width: 1700px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}

.SMU-activity {
    padding: 20px 20px 20px 0;
    max-width: 800px;
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 50px;
}

.SMU-activity-logo {
    width: 165px;
    height: 165px;
    overflow: hidden;
    border-radius: 40px;
    margin-right: 55px;
}

.SMU-activity-info {
    max-width: 530px;
    flex: auto;
}

.SMU-activity-name {
    font-size: 1.5rem;
    line-height: 1.75rem;
    letter-spacing: 0.05em;
    font-weight: 700;
}

.SMU-activity-date {
    font-weight: 600;
    font-size: 1.125rem;
    line-height: 1.3125rem;
    margin-bottom: 15px;
}

.SMU-activity-about {
    text-align: justify;
    font-size: 0.875rem;
    line-height: 1rem;
    letter-spacing: 0.05em;
}

</style>
