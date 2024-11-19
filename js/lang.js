document.addEventListener('DOMContentLoaded', () => {
    const lang = localStorage.getItem('locale') || 'en';

    fetch(`/langs/${lang}.json`)
        .then(response => response.json())
        .then(data => {
            document.querySelectorAll('[data-key]').forEach(element => {
                const key = element.getAttribute('data-key');
                if (key && data[key]) {
                    element.textContent = data[key];
                }
            });

            const iframe = document.getElementById('myIframe');
            if (iframe && lang !== 'en') {
                iframe.src = `your_iframe_url?lang=${lang}`;
            }
        })
        .catch(error => console.error('Error loading translation:', error));
});

function start_lang() {
    const lang = localStorage.getItem('locale') || 'en';
    if (lang !== 'ru') {
        document.getElementById("lang-en").style.filter = "grayscale()";
        document.getElementById("lang-en").style.pointerEvents = "none";
    }
    if (lang !== 'en') {
        document.getElementById("lang-ru").style.filter = "grayscale()";
        document.getElementById("lang-ru").style.pointerEvents = "none";
    }
}
function animation_ru() {
    document.getElementById("lang-ru").style.animation = "1s undefinedswitch linear";
}
function animation_en() {
    document.getElementById("lang-en").style.animation = "1s undefinedswitch linear";
}
function setLocale(locale) {
    setTimeout(function() {
    localStorage.setItem('locale', locale);
    location.reload();
    }, 1000);
}