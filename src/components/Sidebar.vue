<template>
<div class="sidebar">
    <div class="sidebar-backdrop" @click="closeSidebar" v-show="isSidebarOpen"></div>
    <transition name="slide">
        <div v-if="!isSidebarOpen" class="sidebar-switch" @click.prevent="openSidebar">
            <svg width="39" height="66" viewBox="0 0 39 66" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M38.9 5.9L33 0L0 33L16.5 49.5L33 66L38.9 60.1L11.8 33L38.9 5.9Z" fill="#5E8CF0" />
            </svg>
        </div>
        <div v-else class="sidebar-panel" id="sidebar-panel">
            <div class="upper">
                <div class="search">
                    <label>
                        <input type="search" placeholder="Искать СМУ" data-t>
                    </label>
                </div>
                <div class="filter">
                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M13.6372 14.2105L21.4913 2.55789C21.7128 2.22873 21.8127 1.81146 21.7692 1.39726C21.7258 0.983056 21.5426 0.6056 21.2595 0.347368C21.0307 0.134283 20.7485 0.012451 20.455 0H1.36508C1.05751 0.0020659 0.759571 0.124483 0.519666 0.347368C0.236637 0.6056 0.0533832 0.983056 0.00994797 1.39726C-0.0334873 1.81146 0.0664275 2.22873 0.28786 2.55789L8.18292 14.2105V23.4789C8.15825 23.7178 8.18105 23.9601 8.24958 24.1872C8.31812 24.4144 8.43057 24.6204 8.57835 24.7895L11.3055 27.9474C11.561 28.2415 11.9066 28.4065 12.2668 28.4065C12.627 28.4065 12.9726 28.2415 13.2281 27.9474C13.3783 27.7797 13.4933 "
                            fill="#3C9FE5" />
                    </svg>
                </div>
            </div>
            <div class="list-smu" v-if="selectedRegion">
                <div class="line-smu" v-for="index in 5">
                    <div class="logo" data-text="Участники (68)...">
                        <img src="./../../resources/Sigma.png">
                    </div>
                    <div class="content">
                        <div class="title">
                            Совет молодых ученых Sigma — {{selectedRegion.name}}
                        </div>
                        <div class="chairman">
                            Председатель СМУ: Владислав Иванов
                        </div>
                        <div class="about">
                            <p>
                                <b>О нас:</b> Научная группа работает под руководством ведущих ученых в области
                                биофизики, иммунологии, биоинформатики последовательностей (в том числе анализа
                                данных NGS), молекулярной биологии и генетики. Команда компании BostonGene активно
                                поддерживает научную группу.
                            </p>
                        </div>
                        <div class="tags">
                            <div class="tag">медицина</div>
                            <div class="tag">био-информатика</div>
                            <div class="tag">материаловедение</div>
                            <div class="tag">материаловедение</div>
                        </div>
                    </div>

                    <div class="actions">
                        <div class="action message">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M18 0H2C1.46957 0 0.960859 0.210714 0.585786 0.585786C0.210714 0.960859 0 1.46957 0 2V20L4 16H18C18.5304 16 19.0391 15.7893 19.4142 15.4142C19.7893 15.0391 20 14.5304 20 14V2C20 1.46957 19.7893 0.960859 19.4142 0.585786C19.0391 0.210714 18.5304 0 18 0ZM6 12H4V10H6V12ZM6 9H4V7H6V9ZM6 6H4V4H6V6ZM13 12H8V10H13V12ZM16 9H8V7H16V9ZM16 6H8V4H16V6Z"
                                    fill="#3C9FE5" />
                            </svg>

                        </div>
                        <div class="action info" @click="showInfoSmu">
                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M22 14H18V10H22V14ZM22 30H18V18H22V30ZM20 0C17.3736 0 14.7728 0.517315 12.3463 1.52241C9.91982 2.5275 7.71504 4.00069 5.85786 5.85786C2.10714 9.60859 0 14.6957 0 20C0 25.3043 2.10714 30.3914 5.85786 34.1421C7.71504 35.9993 9.91982 37.4725 12.3463 38.4776C14.7728 39.4827 17.3736 40 20 40C25.3043 40 30.3914 37.8929 34.1421 34.1421C37.8929 30.3914 40 25.3043 40 20C40 17.3736 39.4827 14.7728 38.4776 12.3463C37.4725 9.91982 35.9993 7.71504 34.1421 5.85786C32.285 4.00069 30.0802 2.5275 27.6537 1.52241C25.2272 0.517315 22.6264 0 20 0Z"
                                    fill="#3C9FE6" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--            <div v-else class="sidebar-panel">-->
        <!--                <slot></slot>-->
        <!--            </div>-->
    </transition>
</div>
</template>
<script>
import {
    mapMutations
} from 'vuex';
import {
    mapGetters
} from 'vuex';

export default {
    methods: {
        ...mapMutations([
            'setIsSidebarOpen',
            'setIsSmuPageOpen',
        ]),
        openSidebar() {
            this.setIsSidebarOpen(true);
        },
        closeSidebar() {
            this.setIsSidebarOpen(false);
        },
        showInfoSmu() {
            this.setIsSmuPageOpen(true);
            return;
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
        ...mapGetters([
            'selectedRegion'
        ]),
        isSidebarOpen() {
            return this.$store.state.isSidebarOpen;
        },
    },
};
</script>
<style scoped>
.sidebar {
    display: flex;
    justify-content: flex-end;
}

.slide-enter-active,
.slide-leave-active {
    transition: transform 0.2s ease;
}

.slide-enter,
.slide-leave-to {
    transform: translateX(100%);
    transition: all 150ms ease-in 0s;
}

.sidebar-backdrop {
    z-index: 3;
    background-color: rgba(19, 15, 64, 0.4);
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    /*left: 0;*/
    cursor: pointer;
}

.sidebar-panel {
    overflow-y: auto;
    background-color: white;
    position: fixed;
    height: 100vh;
    top: 0;
    padding: 3rem 20px 2rem 20px;
    /*left: 0;*/
}

.sidebar-switch:hover {
    transform: scale(1.09);
    transition: .3s;
}

.sidebar-switch {
    z-index: 3;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow-y: auto;
    background-color: transparent;
    transition: .3s ease;
    /*background-color: red;*/
    position: fixed;
    height: 100vh;
    top: 0;
    right: 0;
    /*padding: 3rem 20px 2rem 20px;*/
    width: 5%;
    color: #5E8CF0;
    /*left: 0;*/
}

.sidebar-switch svg {
    width: 50%;
}

@media only screen and (max-width: 600px) {
    .sidebar-panel {
        width: 60%;
    }
}

@media only screen and (max-width: 450px) {
    .sidebar-panel {
        width: 40%;
    }
}

@media only screen and (min-width: 600px) {
    .sidebar-panel {
        width: 60%;
    }
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
    .sidebar-panel {
        width: 60%;
    }
}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
    .sidebar-panel {
        width: 40%;
    }
}

.sidebar-panel {
    /*overflow-y: auto;*/
    /*background-color: white;*/
    /*position: fixed;*/
    /*height: 100vh;*/
    /*top: 0;*/
    /*padding: 3rem 20px 2rem 20px;*/
    /*left: 0;*/
}


.sidebar-panel {
    color: #575757;
    overflow: hidden;
    padding: 30px 0 40px 40px;
    font-family: 'Roboto', sans-serif;
    transition: .5s;
    background: white;
    z-index: 3;
    position: absolute;
    top: 0;
    right: 0;
    width: 50%;
    height: 100%;
    box-sizing: border-box;
    border-radius: 40px 0px 0px 40px;
    border-top: 5px solid #B4D3E9;
    border-bottom: 5px solid #B4D3E9;
    border-left: 5px solid #B4D3E9;
}

.upper {
    display: flex;
    flex-wrap: nowrap;
    width: 100%;
    height: 50px;
}

.search {
    display: inline-block;
    width: 80%;
    height: 100%;
    max-width: 660px;
}

.search label {
    width: 80%;
    height: 100%;
}

.search input {
    min-width: 150px;
    border: 1px solid #D1D1D1;
    border-radius: 30px;
    padding-left: 25px;
    width: 100%;
    height: 100%;
    font-size: 1.625rem;
    color: #d1d1d1
}

.search input:focus {
    border: 1px solid #B4D3E9;
    outline: none;
}

.filter {
    flex: auto;
    display: flex;
    align-items: center;
    justify-content: center;
}

.filter:after {
    content: '';
    border: 8px solid transparent;
    border-top: 8px solid #3C9FE6;
    position: relative;
    top: 15px;
    right: 12px;
}

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
