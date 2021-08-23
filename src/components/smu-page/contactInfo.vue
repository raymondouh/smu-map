<template>
    <div class="SMU-block contact-info">
        <div class="SMU-block-header">
            <h2>
                Контактная информация
            </h2>
        </div>
        <div class="contact-upper-block">
            <div class="SMU-logo">
                <img alt="SMU-logo" :src="require('./../../../resources/img/smuLogos/' + info.imgName)">
            </div>
            <div class="main-contact-info">
                <div class="SMU-name">
                    <h3>
                        СМУ {{info.name}}
                    </h3>
                </div>
                <div class="general-location">
                    {{info.region}}
                </div>
                <div class="info-line adress">
                    <div class="info-line-title">
                        Адрес:
                    </div>
                    <div class="info-line-content">
                        <a :href="info.locationLink">{{info.location}}</a>
                    </div>
                </div>
                <div class="info-line phone-number">
                    <div class="info-line-title">
                        Телефон:
                    </div>
                    <div class="info-line-content">
                        <a :href="'tel:'+ info.phoneNum">{{info.phoneNum}}</a>
                    </div>
                </div>
                <div class="info-line email">
                    <div class="info-line-title">
                        E-mail:
                    </div>
                    <div class="info-line-content">
                        <a :href="'mailto:'+ info.email">{{info.email}}</a>
                    </div>
                </div>
                <div class="info-line website">
                    <div class="info-line-title">
                        Сайт:
                    </div>
                    <div class="info-line-content">
                        <a :href="info.website">{{info.website}}</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="SMU-about">
            <p>
                <b>О нас:</b> {{info.description}}
            </p>
        </div>
        <div class="SMU-tags">
            <div class="tag" v-for="tag in info.tags">{{tag}}</div>
        </div>
    </div>
</template>

<script>
import {mapState, mapGetters} from 'vuex'
export default {

    computed: {
        ...mapState([
            'selectedSmuId',
            'selectedRegionIds'
        ]),
        info() {
            return this.getContactInfo();
        }
    },
    methods: {
      ...mapGetters(['getContactInfo'])
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

.contact-info,
.SMU-staff {
    min-width: 350px;
    max-width: 750px;
    flex-grow: 0;
    flex: auto;
}

.SMU-block-header {
    margin-bottom: 30px;
}

.block-header h2 {
    font-size: 36px;
    line-height: 42px;
    letter-spacing: 0.05em;
}

.contact-upper-block {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 25px;
}

.SMU-logo {
    margin-right: 65px;
    width: 160px;
    height: 160px;
    border: 3px solid #C4C4C4;
    border-radius: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.SMU-logo img {
    /*width: 150px;*/
    /*height: 100px;*/
}

.main-contact-info {
    display: flex;
    flex-direction: column;
    flex: auto;
    min-width: 300px;
}

.SMU-name {
    margin-bottom: 13px;
}

.SMU-name h3 {
    font-weight: 700;
    font-size: 18px;
    line-height: 21px;
}

.general-location {
    font-size: 12px;
    font-weight: 700;
    line-height: 14px;
    margin-bottom: 25px;
    min-width: 300px;
    width: 100%;
}

.main-contact-info>.info-line {
    font-size: 16px;
    line-height: 19px;
    margin-bottom: 5px;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
}

/**********************info-line(usage: contact-info and SMU-staff)******/
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

.SMU-about {
    width: 100%;
}

.SMU-about p {
    text-align: justify;
}

.SMU-tags {
    margin-top: 20px;
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
</style>
