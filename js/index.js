window.onload = () => {

    hideImg();

};

hideImg = () => {

    let aboutImg = document.getElementById('about'),
        historyImg = document.getElementById('history');

    aboutImg.onclick = () => {
        aboutImg.classList.toggle('about_hidden');
        aboutImg.children[0].classList.toggle('about_text');
    };

    historyImg.onclick = () => {
        historyImg.classList.toggle('history_hidden');
        historyImg.children[0].classList.toggle('history_text');
    };
};
