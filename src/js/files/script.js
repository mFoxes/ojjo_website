// Импорт функционала ==============================================================================================================================================================================================================================================================================================================================
// import { isMobile } from "./functions.js";
// import { formsModules } from "./forms/forms.js";

document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelector('.nav-events');
    const tabsBtn = document.querySelectorAll('.nav-events__btn');

    if (tabs) {
        tabs.addEventListener('click', (e) => {
            if (e.target.classList.contains('nav-events__btn')) {
                
                const tabsPath = e.target.dataset.tabsPath;
                tabsBtn.forEach(el => { el.classList.remove('_active') });
                document.querySelector(`[data-tabs-path="${tabsPath}"]`).classList.add('_active');
            }
        });
    }

    const video = document.querySelectorAll(".social-connection__video")
    if (video) {
        video.forEach(el => {
            el.addEventListener('click', (e) => {
                if(e.target.classList.contains('_icon-play')) {
                    el.querySelector("video").setAttribute("control", "");
                    el.classList.add('_play');
                }
            });
        });
    }

    const assortiment_text = document.querySelector('.about-assortiment__left');

    if (assortiment_text) {
        assortiment_text.addEventListener('click', (e) => {
            if (e.target.classList.contains('about-assortiment__btn')) {
                assortiment_text.classList.toggle('_show');
                if (assortiment_text.classList.contains('_show')) {
                    e.target.innerHTML = "Скрыть"
                } else {
                    e.target.innerHTML = "читать полностью"
                }
                
            }
        });
    }
});