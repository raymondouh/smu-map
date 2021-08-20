<template>
<div class="line-smu">
    <div class="logo" data-text="Участники (68)...">
        <img :src="require('./../../resources/img/smuLogos/' + smu.imgName)">
    </div>
    <div class="content">
        <div class="title">
            Совет молодых ученых {{smu.name}} — {{selectedRegion.name}}
        </div>
        <div class="chairman">
            Председатель СМУ: {{smu.chairman}}
        </div>
        <div class="about">
            <p>
                <b>О нас:</b> {{smu.shortAbout}}
            </p>
        </div>
        <div class="tags">
            <div class="tag" v-for="tag in smu.tags">{{tag}}</div>
        </div>
    </div>
    <div class="actions">
        <div class="action message">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M18 0H2C1.46957 0 0.960859 0.210714 0.585786 0.585786C0.210714 0.960859 0 1.46957 0 2V20L4 16H18C18.5304 16 19.0391 15.7893 19.4142 15.4142C19.7893 15.0391 20 14.5304 20 14V2C20 1.46957 19.7893 0.960859 19.4142 0.585786C19.0391 0.210714 18.5304 0 18 0ZM6 12H4V10H6V12ZM6 9H4V7H6V9ZM6 6H4V4H6V6ZM13 12H8V10H13V12ZM16 9H8V7H16V9ZM16 6H8V4H16V6Z"
                    fill="#3C9FE5"/>
            </svg>
        </div>
        <div class="action info" @click="showInfoSmu">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M22 14H18V10H22V14ZM22 30H18V18H22V30ZM20 0C17.3736 0 14.7728 0.517315 12.3463 1.52241C9.91982 2.5275 7.71504 4.00069 5.85786 5.85786C2.10714 9.60859 0 14.6957 0 20C0 25.3043 2.10714 30.3914 5.85786 34.1421C7.71504 35.9993 9.91982 37.4725 12.3463 38.4776C14.7728 39.4827 17.3736 40 20 40C25.3043 40 30.3914 37.8929 34.1421 34.1421C37.8929 30.3914 40 25.3043 40 20C40 17.3736 39.4827 14.7728 38.4776 12.3463C37.4725 9.91982 35.9993 7.71504 34.1421 5.85786C32.285 4.00069 30.0802 2.5275 27.6537 1.52241C25.2272 0.517315 22.6264 0 20 0Z"
                    fill="#3C9FE6"/>
            </svg>
        </div>
    </div>
</div>
</template>

<script>
import {
    mapMutations
} from 'vuex';
export default {
    methods: {
        ...mapMutations([
            'setIsSmuPageOpen',
            'setSelectedSmuId'
        ]),
        showInfoSmu() {
            this.setIsSmuPageOpen(true);
            this.setSelectedSmuId(this.id);
        }
    },
    props: {
        selectedRegion: Object,
        smu: Object,
        id: String
    }
}
</script>

<style>
.list-smu {
    width: 100%;
    height: 100%;

    margin-top: 40px;
    overflow-Y: scroll;
    scrollbar-width: thin;
    scrollbar-color: #3C9FE6 grey;
}

.line-smu:first-child {
    padding-top: 0;
}

.line-smu:last-child {
    margin-bottom: 60px;
}

.line-smu {
    display: flex;
    flex: auto;
    flex-wrap: wrap;
    padding: 30px 20px 25px 0;
    border-bottom: 1px solid #C5C5C5;
}

.logo {
    order: 0;
    top: 0;
    margin-right: auto;
    margin-bottom: 10px;
    border: 5px solid #C4C4C4;
    border-radius: 40px;
    min-width: 140px;
    width: 140px;
    height: 140px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    font-size: 0.75rem;
}

.logo::after {
    content: attr(data-text);
    position: relative;
    top: 10%;
    color: #575757;
    font-weight: bold;
    line-height: 0.875rem;
    font-size: 0.75rem;
}

.logo img {
    width: 70px;
    height: 70px;
}

.content {
    order: 1;
    margin: 0 auto;
    max-width: 500px;
    min-width: 200px;
    flex: auto;
    flex-grow: 1;
    display: flex;
    flex-wrap: wrap;
}


.title {
    width: 100%;
    font-weight: bold;
    font-size: 1.0625rem;
    line-height: 1.25rem;
    letter-spacing: 0.05em;
}

.chairman {
    margin-top: 10px;
    width: 100%;
    font-weight: 600;
    font-size: 0.75rem;
    line-height: 0.875rem;
    font-style: normal;
}

.about {
    text-align: justify;
    margin-top: 10px;
    width: 100%;
    font-size: 0.75rem;
    line-height: 0.875rem;
}

.about p {
    padding-right: 10px;
}

.about b {
    font-size: 0.875rem;
}

.tags {
    margin-top: 10px;
    display: flex;
    flex-wrap: wrap;
    flex: auto;
}

.tag {
    margin: 5px;
    width: 110px;
    height: 20px;
    border-radius: 5px;
    text-align: center;
    font-size: 0.6rem;
    line-height: 20px;
    background: #B4D3E9;
}

.actions {
    order: 2;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
}

.action {
    cursor: pointer;
    margin: 5px;
    width: 40px;
    height: 40px;
    border: 1px solid #3C9FE6;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.message {}

.info {}

@media only screen and (max-width: 1700px) {
    .logo {
        margin-right: 0;
    }

    .actions {
        order: 1;
    }

    .content {
        max-width: 800px;
        order: 2;
    }
}

@media only screen and (max-width: 767px) {

    .logo {
        margin-bottom: 10px;
        margin: 0 auto;
    }

    .actions {
        margin-top: 10px;
        margin-bottom: 10px;
        width: 220px;
    }

    .tags {
        justify-content: space-around;
    }
}
</style>
