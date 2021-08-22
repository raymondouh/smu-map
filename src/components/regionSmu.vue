<template>
<div class="line-smu">
    <div class="smu-checkbox">
            <label class="check-smu control-checkbox-large">
                <input type="checkbox" name="" value="">
                <div class="checkbox-indicator-large"></div>
            </label>
    </div>
    <div class="single-smu">
        <div class="logo" data-text="Участники (68)...">
            <img :src="require('./../../resources/img/smuLogos/' + smu.imgName)">
        </div>
        <div class="content">
            <div class="title">
                Совет молодых ученых {{smu.name}}
            </div>
            <div class="chairman">
                Председатель СМУ: {{smu.chairman}}
            </div>
            <div class="about">
                <p>
                    <b>О нас:</b> {{smu.shortAbout}}
                </p>
            </div>
            <div class="number-grnti">
                <div class="number-text">
                    Номер ГРНТИ: 76.31.31: ФАРМАКОГНОЗИЯ
                </div>
            </div>
        </div>
        <div class="actions">
            <div class="smu-access-button action">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="20" cy="20" r="19.5" />
                    <svg style="transform: translate(10px, 10px)" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M18 0H2C1.46957 0 0.960859 0.210714 0.585786 0.585786C0.210714 0.960859 0 1.46957 0 2V20L4 16H18C18.5304 16 19.0391 15.7893 19.4142 15.4142C19.7893 15.0391 20 14.5304 20 14V2C20 1.46957 19.7893 0.960859 19.4142 0.585786C19.0391 0.210714 18.5304 0 18 0ZM6 12H4V10H6V12ZM6 9H4V7H6V9ZM6 6H4V4H6V6ZM13 12H8V10H13V12ZM16 9H8V7H16V9ZM16 6H8V4H16V6Z" />
                    </svg>
                </svg>
            </div>
            <div class="smu-access-button action"  @click="showInfoSmu">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M22 14H18V10H22V14ZM22 30H18V18H22V30ZM20 0C17.3736 0 14.7728 0.517315 12.3463 1.52241C9.91982 2.5275 7.71504 4.00069 5.85786 5.85786C2.10714 9.60859 0 14.6957 0 20C0 25.3043 2.10714 30.3914 5.85786 34.1421C7.71504 35.9993 9.91982 37.4725 12.3463 38.4776C14.7728 39.4827 17.3736 40 20 40C25.3043 40 30.3914 37.8929 34.1421 34.1421C37.8929 30.3914 40 25.3043 40 20C40 17.3736 39.4827 14.7728 38.4776 12.3463C37.4725 9.91982 35.9993 7.71504 34.1421 5.85786C32.285 4.00069 30.0802 2.5275 27.6537 1.52241C25.2272 0.517315 22.6264 0 20 0Z" />
                    <defs>
                        <linearGradient id="paint0_linear" x1="20" y1="0" x2="20" y2="40" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#3C9FE6" />
                            <stop offset="1" stop-color="#9BD5FF" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>
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
        smu: Object,
        id: String
    }
}
</script>

<style>
.list-smu {
    margin-top: 5px;
    width: 100%;
    /*height: 100%;*/
    height: calc(100% - 200px);
    overflow-Y: scroll;
    scrollbar-width: thin;
    scrollbar-color: #3C9FE6 grey;
}

.line-smu {
    display: flex;
    width: calc(100% - 20px);
    flex-wrap: nowrap;
    padding: 0 20px 25px 0;
}

.single-smu:first-child {
    padding-top: 0;
}

.line-smu:last-child {
    //margin-bottom: 150px;
}

.single-smu {
    padding-bottom: 20px;
    padding-top: 20px;
    display: flex;
    flex: auto;
    flex-wrap: wrap;
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
    //border: 1px solid #3C9FE6;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.smu-access-button{
    display: -webkit-flex;
    display: -ms-flex;
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    -ms-align-items: center;
    align-items: center;
    max-width: 40px;
}

.smu-access-button path{
    fill: url(#paint0_linear);
}

.smu-access-button circle{
    stroke: url(#paint0_linear);
}

.smu-access-button:hover circle{
    stroke: #337BEB;
}

.smu-access-button:hover path{
    fill: #337BEB;
}

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

.check-smu:hover > .checkbox-indicator-large{
    border: 2px solid #3C9FE5;
}

.check-smu input {
    position: absolute;
    z-index: -1;
    opacity: 0;
}

.checkbox-indicator-large {
    position: absolute;
    top: 0px;
    left: 0;
    height: 26px;
    width: 26px;
    background: #F1F1F1;
    border: 2px solid #C4C4C4;
    border-radius: 5px;
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

.number-grnti{
    margin-top: 10px;
    height: 25px;
    width: 340px;
    border: 1px solid #B4D3E9;
    border-radius: 5px;
}

.number-text{
    font-style: normal;
    font-weight: bold;
    font-size: 0.75rem;
    line-height: 25px;
    letter-spacing: 0.1em;
    color: #575757;
    text-align: center;
}

</style>
