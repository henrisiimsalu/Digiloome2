const translations = {
    et: {
        home: "Avaleht",
        pricing: "Hinnakiri",
        contact: "Kontakt",
        feedback: "Tagasiside",
        hero_title: "Veebilehed, mis sunnivad märkama",
        hero_text: "Punane energia. Kollane fookus. Tähelepanu masin."
    },
    en: {
        home: "Home",
        pricing: "Pricing",
        contact: "Contact",
        feedback: "Feedback",
        hero_title: "Websites that demand attention",
        hero_text: "Red energy. Yellow focus. Attention machine."
    },
    ru: {
        home: "Главная",
        pricing: "Цены",
        contact: "Контакты",
        feedback: "Отзывы",
        hero_title: "Сайты, которые невозможно игнорировать",
        hero_text: "Красная энергия. Жёлтый фокус. Машина внимания."
    }
};

function setLang(lang) {
    localStorage.setItem("lang", lang);

    document.querySelectorAll("[data-lang]").forEach(el => {
        const key = el.dataset.lang;
        if (translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });

    document.querySelectorAll(".lang-switch button").forEach(btn => {
        btn.classList.remove("active");
        if (btn.dataset.lang === lang) {
            btn.classList.add("active");
        }
    });
}

document.addEventListener("DOMContentLoaded", () => {
    const savedLang = localStorage.getItem("lang") || "et";
    setLang(savedLang);
});
