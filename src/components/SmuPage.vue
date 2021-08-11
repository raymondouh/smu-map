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
            Совет молодых ученых Sigma — МГТУ
        </h1>
    </div>
    <div class="SMU-wrapper-block">
        <div class="SMU-block contact-info">
            <div class="SMU-block-header">
                <h2>
                    Контактная информация
                </h2>
            </div>
            <div class="contact-upper-block">
                <div class="SMU-logo">
                    <img alt="SMU-logo" src="./../../resources/Sigma.png">
                </div>
                <div class="main-contact-info">
                    <div class="SMU-name">
                        <h3>
                            СМУ Sigma-МГТУ
                        </h3>
                    </div>
                    <div class="general-location">
                        Северо-западный федеральный округ, Мурманская обл., г. Мурманск
                    </div>
                    <div class="info-line adress">
                        <div class="info-line-title">
                            Адрес:
                        </div>
                        <div class="info-line-content">
                            <a href="https://go.2gis.com/099at8">183038, Мурманск, ул. Ленина , 16</a>
                        </div>
                    </div>
                    <div class="info-line phone-number">
                        <div class="info-line-title">
                            Телефон:
                        </div>
                        <div class="info-line-content">
                            <a href="tel:+78152213536">+7 (815) 221-35-36</a>
                        </div>
                    </div>
                    <div class="info-line email">
                        <div class="info-line-title">
                            E-mail:
                        </div>
                        <div class="info-line-content">
                            <a href="mailto:contact@mgtu.ru">contact@mgtu.ru</a>
                        </div>
                    </div>
                    <div class="info-line website">
                        <div class="info-line-title">
                            Сайт:
                        </div>
                        <div class="info-line-content">
                            <a href="https://www.mgtu.ru/">mgtu.ru</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="SMU-about">
                <p>
                    <b>О нас:</b> Научная группа работает под руководством ведущих ученых в области биофизики,
                    иммунологии, биоинформатики последовательностей (в том числе анализа данных NGS), молекулярной
                    биологии и генетики. Команда компании BostonGene активно поддерживает научную группу по всем
                    перспективным направлениям, включая совместную работу над публикациями в высокорейтинговых
                    зарубежных журналах. В команде исследователей и разработчиков – пять докторов наук, врачи из
                    ведущих онкологических клиник России и США, профессора ведущих научных заведений в России и США.

                </p>
            </div>
            <div class="SMU-tags">
                <div class="tag">медицина</div>
                <div class="tag">био-информатика</div>
                <div class="tag">материаловедение</div>
                <div class="tag">материаловедение</div>
                <div class="tag">медицина</div>
                <div class="tag">био-информатика</div>
                <div class="tag">материаловедение</div>
                <div class="tag">материаловедение</div>
            </div>
        </div>
        <div class="SMU-block SMU-staff">
            <div class="SMU-block-header">
                <h2>
                    Состав СМУ
                </h2>
            </div>
            <div class="staff">
                <div class="person-block">
                    <div class="person-photo">
                        <img src="./../../resources/ivanov.png" alt="photo">
                    </div>
                    <div class="person-info">
                        <div class="person-name info-line">
                            Владислав Иванов
                        </div>
                        <div class="person-position info-line">
                            Председатель СМУ
                        </div>
                        <div class="person-email info-line">
                            <a href="mailto:vlad@mgtu.ru">vlad@mgtu.ru</a>
                        </div>
                        <div class="science-ID info-line">
                            <span>
                                Science-ID
                            </span>
                        </div>
                    </div>
                </div>
                <div class="person-block">
                    <div class="person-photo">
                        <img src="./../../resources/petrov.png" alt="photo">
                    </div>
                    <div class="person-info">
                        <div class="person-name info-line">
                            Иван Петров
                        </div>
                        <div class="person-position info-line">
                            Первый помощник председателя
                        </div>
                        <div class="person-email info-line">
                            <a href="mailto:petrov@mgtu.ru">petrov@mgtu.ru</a>
                        </div>
                        <div class="science-ID info-line">
                            <span>
                                Science-ID
                            </span>
                        </div>
                    </div>
                </div>
                <div class="person-block">
                    <div class="person-photo">
                        <img src="./../../resources/petrov.png" alt="photo">
                    </div>
                    <div class="person-info">
                        <div class="person-name info-line">
                            Иван Петров
                        </div>
                        <div class="person-position info-line">
                            Первый помощник председателя
                        </div>
                        <div class="person-email info-line">
                            <a href="mailto:petrov@mgtu.ru">petrov@mgtu.ru</a>
                        </div>
                        <div class="science-ID info-line">
                            <span>
                                Science-ID
                            </span>
                        </div>
                    </div>
                </div>
                <div class="person-block">
                    <div class="person-photo">
                        <img src="./../../resources/petrov.png" alt="photo">
                    </div>
                    <div class="person-info">
                        <div class="person-name info-line">
                            Иван Петров
                        </div>
                        <div class="person-position info-line">
                            Первый помощник председателя
                        </div>
                        <div class="person-email info-line">
                            <a href="mailto:petrov@mgtu.ru">petrov@mgtu.ru</a>
                        </div>
                        <div class="science-ID info-line">
                            <span>
                                Science-ID
                            </span>
                        </div>
                    </div>
                </div>
                <div class="person-block">
                    <div class="person-photo">
                        <img src="./../../resources/petrov.png" alt="photo">
                    </div>
                    <div class="person-info">
                        <div class="person-name info-line">
                            Иван Петров
                        </div>
                        <div class="person-position info-line">
                            Первый помощник председателя
                        </div>
                        <div class="person-email info-line">
                            <a href="mailto:petrov@mgtu.ru">petrov@mgtu.ru</a>
                        </div>
                        <div class="science-ID info-line">
                            <span>
                                Science-ID
                            </span>
                        </div>
                    </div>
                </div>
                <div class="person-block">
                    <div class="person-photo">
                        <img src="./../../resources/petrov.png" alt="photo">
                    </div>
                    <div class="person-info">
                        <div class="person-name info-line">
                            Иван Петров
                        </div>
                        <div class="person-position info-line">
                            Первый помощник председателя
                        </div>
                        <div class="person-email info-line">
                            <a href="mailto:petrov@mgtu.ru">petrov@mgtu.ru</a>
                        </div>
                        <div class="science-ID info-line">
                            <span>
                                Science-ID
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="SMU-block closest-activities">
        <div class="SMU-block-header">
            <h2>
                Ближайшие мероприятия
            </h2>
        </div>
        <div class="SMU-activities">
            <div class="SMU-activity conference">
                <div class="SMU-activity-logo">
                    <img src="./../../resources/smu-conference.png" alt="conference">
                </div>
                <div class="SMU-activity-info">
                    <div class="SMU-activity-name">
                        Научная конференция 1
                    </div>
                    <div class="SMU-activity-date">
                        22 апреля - 24 апреля
                    </div>
                    <div class="SMU-activity-about">
                        <p>
                            Приглашаем исследователей принять участие в конкурсе научно-технологических проектов и
                            стартапов по реальным технологическим запросам промышленных предприятий Мурманской
                            области.<br />
                            Конкурс «ТЕХНОВЫЗОВ» проводится при поддержке Правительства Мурманской области
                        </p>
                    </div>
                </div>
            </div>
            <div class="SMU-activity conference">
                <div class="SMU-activity-logo">
                    <img src="./../../resources/smu-conference.png" alt="conference">
                </div>
                <div class="SMU-activity-info">
                    <div class="SMU-activity-name">
                        Научная конференция 2
                    </div>
                    <div class="SMU-activity-date">
                        22 апреля - 24 апреля
                    </div>
                    <div class="SMU-activity-about">
                        <p>
                            Приглашаем исследователей принять участие в конкурсе научно-технологических проектов и
                            стартапов по реальным технологическим запросам промышленных предприятий Мурманской
                            области.<br />
                            Конкурс «ТЕХНОВЫЗОВ» проводится при поддержке Правительства Мурманской области
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="SMU-block released-projects">
        <div class="SMU-block-header">
            <h2>
                Реализованные проекты
            </h2>
        </div>
        <div class="SMU-activities">
            <div class="SMU-activity project">
                <div class="SMU-activity-logo">
                    <img src="./../../resources/smu-project.png" alt="conference">
                </div>
                <div class="SMU-activity-info">
                    <div class="SMU-activity-name">
                        Проект 1
                    </div>
                    <div class="SMU-activity-date">

                    </div>
                    <div class="SMU-activity-about">
                        <p>
                            <b>О проекте:</b> Batch effect наблюдается, когда на результаты эксперимента влияют
                            какие-то небиологические факторы, например разные запуски секвенатора или обработка
                            контрольных и опытных образов по отдельности. Такие эффекты приводят к неточным выводам,
                            если их причины коррелируют с интересующими результатами эксперимента.
                        </p>
                    </div>
                </div>
            </div>
            <div class="SMU-activity project">
                <div class="SMU-activity-logo">
                    <img src="./../../resources/smu-project.png" alt="conference">
                </div>
                <div class="SMU-activity-info">
                    <div class="SMU-activity-name">
                        Проект 2
                    </div>
                    <div class="SMU-activity-date">

                    </div>
                    <div class="SMU-activity-about">
                        <p>
                            <b>О проекте:</b> Batch effect наблюдается, когда на результаты эксперимента влияют
                            какие-то небиологические факторы, например разные запуски секвенатора или обработка
                            контрольных и опытных образов по отдельности. Такие эффекты приводят к неточным выводам,
                            если их причины коррелируют с интересующими результатами эксперимента.
                        </p>
                    </div>
                </div>
            </div>
            <div class="SMU-activity project">
                <div class="SMU-activity-logo">
                    <img src="./../../resources/smu-project.png" alt="conference">
                </div>
                <div class="SMU-activity-info">
                    <div class="SMU-activity-name">
                        Проект 3
                    </div>
                    <div class="SMU-activity-date">

                    </div>
                    <div class="SMU-activity-about">
                        <p>
                            <b>О проекте:</b> Batch effect наблюдается, когда на результаты эксперимента влияют
                            какие-то небиологические факторы, например разные запуски секвенатора или обработка
                            контрольных и опытных образов по отдельности. Такие эффекты приводят к неточным выводам,
                            если их причины коррелируют с интересующими результатами эксперимента.
                        </p>
                    </div>
                </div>
            </div>
            <div class="SMU-activity project">
                <div class="SMU-activity-logo">
                    <img src="./../../resources/smu-project.png" alt="conference">
                </div>
                <div class="SMU-activity-info">
                    <div class="SMU-activity-name">
                        Проект 4
                    </div>
                    <div class="SMU-activity-date">

                    </div>
                    <div class="SMU-activity-about">
                        <p>
                            <b>О проекте:</b> Batch effect наблюдается, когда на результаты эксперимента влияют
                            какие-то небиологические факторы, например разные запуски секвенатора или обработка
                            контрольных и опытных образов по отдельности. Такие эффекты приводят к неточным выводам,
                            если их причины коррелируют с интересующими результатами эксперимента.
                        </p>
                    </div>
                </div>
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

/************contact-info*********/

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

/********SMU-staff*********/

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

/**********SMU-activities****************/

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

/*    */
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
    //font-family: 'Roboto', sans-serif;
    font-weight: 600;
    font-size: 12px;
}

/*
    .arrow-back {
        float: left;
        cursor: pointer;
        position: relative;
        width: 80px;
        height: 50px;
        margin: 20px;
    }
    .arrow-back div {
        position: relative;
        top: 20px;
        width: 90px;
        height: 10px;
        background-color: #337AB7;
        box-shadow: 0 3px 5px rgba(0, 0, 0, .2);
        left:0;
        display: block;
    }
    .arrow-back div::after {
        content: '';
        position: absolute;
        width: 40px;
        height: 10px;
        top: -11px;
        left: -8px;
        background-color: #337AB7;
        transform: rotate(-45deg);
    }
    .arrow-back div::before {
        content: '';
        position: absolute;
        width: 40px;
        height: 10px;
        top: 11px;
        left: -8px;
        background-color: #337AB7;
        box-shadow: 0 3px 5px rgba(0, 0, 0, .2);
        transform: rotate(45deg);
    }
    .arrow-back:hover {
        animation: arrow-1 1s linear infinite;
    }
    @keyframes arrow-1 {
        0% {
            left:0;
        }
        50% {
            left:10px;
        }
        100% {
            left:0;
        }
    }*/
</style>
