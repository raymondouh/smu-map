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
            <input type="search" placeholder="Искать СМУ" id="SMU-search">
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
                                <input type="radio" v-model="picked"  name="smu-filter-by" value="option-YouSci" checked>
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
                                <input type="radio" v-model="picked" name="smu-filter-by" value="option-SMU">
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
import tooltip from "./Tooltip"
import {
    mapMutations
} from 'vuex';

export default {
    props:{
        picked: String
    },
    components: {
        tooltip
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
        },
        showInfoSmu() {
            this.$modal.show('dialog', {
                title: '',
                text: '   <div class="contact-info">\n' +
                    '         <div class="header">\n' +
                    '             <h1>Контактная информация</h1>\n' +
                    '         </div>\n' +
                    '   <div class="logo">\n' +
                    '       <img src="EhP_z2AN8Es.jpg" alt="">\n' +
                    '   </div>\n' +
                    '    <div class="content">\n' +
                    '        <div class="title">\n' +
                    '             СМУ Sigma-МГТУ  \n' +
                    '        </div>\n' +
                    '          <div class="title-address">\n' +
                    '                 Северо-западный федеральный округ, Мурманская обл., г. Мурманск\n' +
                    '           </div>\n' +
                    '           <div class="line">\n' +
                    '              <span>Адрес:     </span>  \n' +
                    '              <a href="#">83038, Мурманск, ул. Ленина , 16:</a>\n' +
                    '           </div>\n' +
                    '            <div class="line">\n' +
                    '              <span>Телефон: </span>  \n' +
                    '              <a href="tel:+7 8152 21-35-36">+7 8152 21-35-36</a>\n' +
                    '           </div>\n' +
                    '            \n' +
                    '           <div class="line">\n' +
                    '              <span>Email:       </span>  \n' +
                    '              <a href="mailto:contact@mgtu.ru">contact@mgtu.ru</a>\n' +
                    '           </div>\n' +
                    '             \n' +
                    '             <div class="line">\n' +
                    '              <span>Сайт:        </span>  \n' +
                    '              <a href="https://mgtu.ru">mgtu.ru</a>\n' +
                    '             </div>\n' +
                    '          </div>\n' +
                    '          <div class="about">\n' +
                    '              <p>\n' +
                    '                 <b>О нас: </b> Научная группа работает под руководством ведущих ученых в области биофизики, иммунологии, биоинформатики последовательностей (в том числе анализа данных NGS), молекулярной биологии и генетики. Команда компании BostonGene активно поддерживает научную группу по всем перспективным направлениям, включая совместную работу над публикациями в высокорейтинговых зарубежных журналах. В команде исследователей и разработчиков – пять докторов наук, врачи из ведущих онкологических клиник России и США, профессора ведущих научных заведений в России и США. \n' +
                    '              </p>\n' +
                    '          </div>\n' +
                    '          <div class="tags">\n' +
                    '              <div class="tag">Медицина</div>\n' +
                    '              <div class="tag">био-информатика</div>\n' +
                    '              <div class="tag">материаловедение</div>\n' +
                    '              <div class="tag">материаловедение</div>\n' +
                    '              <div class="tag">материаловедение</div>\n' +
                    '              <div class="tag">материаловедение</div>\n' +
                    '              <div class="tag">Медицина</div>\n' +
                    '              <div class="tag">био-информатика</div>\n' +
                    '              <div class="tag">материаловедение</div>\n' +
                    '         </div>\n' +
                    '    </div>'
            })
        }
    },
    computed: {
        isSidebarOpen() {
            return this.$store.state.isSidebarOpen;
        },
    },
};
</script>
<style  scoped>
label {
    width: 100%;
    height: 100%;
}

.smu-map-header {
    text-align: center;
    font-family: 'Roboto', sans-serif;
    display: flex;
    justify-content: space-between;
}

.smu-map-header-title,
.space {
    color: #064ebe;
    width: 260px;
}

.space {
    min-width: 0;
    flex-shrink: 1;
}

.header-title {
    font-size: 3.125rem;
    line-height: 3.688rem;
    font-weight: 400;
}

.header-subtitle {
    font-size: 1.313rem;
    line-height: 1.563rem;
    letter-spacing: 0.01em;
    font-weight: 400;
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
}

.search input:focus {
    border: 1px solid #3c9fe5;
    outline: 0;
}


.filter {
    color: #575757;
    margin-top: 30px;
    flex: auto;
    display: flex;
    flex-wrap: wrap;
}

.filter-start-block {
    font-size: 1rem;
    font-weight: bold;
    line-height: 1.688rem;
    margin-right: 55px;
}

.filter-options {
    flex: auto;
    display: flex;
    flex-wrap: wrap;
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
</style>
