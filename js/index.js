window.onload = () => {

    hideImg();

};

hideImg = () => {

    let aboutImg = document.getElementById('about'),
        historyImg = document.getElementById('history');

    aboutImg.onclick = () => {
        aboutImg.classList.toggle('about_hidden');
    };

    historyImg.onclick = () => {
        historyImg.classList.toggle('history_hidden');
    };


};
