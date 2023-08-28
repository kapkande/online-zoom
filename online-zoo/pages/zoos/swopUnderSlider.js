const choiceVideo = document.querySelector('.video__choiceVideo');
choiceVideo.addEventListener('click', swopUnderSlider);


function swopUnderSlider(e) {
    const targer = e.target;

    const videoitems = document.querySelectorAll('.video__choice__item');
    let videoitemActive = document.querySelector('.video__choice__item-active');
    const video = document.querySelector('.video__view');
    let flag;

    if ('video__choice__item'.includes(targer.className)) {
        document.querySelector('.video__choice__item-active')?.classList.remove('video__choice__item-active');
        targer.classList.add('video__choice__item-active');
    }
    videoitemActive = document.querySelector('.video__choice__item-active');
    videoitems.forEach((e, i) => {
        if (e == videoitemActive) {
            flag = i
        }
    });

    if ('video__choiceVideo__back button'.includes(targer.className)) {
        document.querySelector('.video__choice__item-active')?.classList.remove('video__choice__item-active')
        flag = flag - 1 < 0 ? 3 : flag - 1
        videoitems[flag].classList.add('video__choice__item-active');
    } else if ('video__choiceVideo__ahead button'.includes(targer.className)) {
        document.querySelector('.video__choice__item-active')?.classList.remove('video__choice__item-active')
        flag = flag + 1 > 3 ? 0 : flag + 1
        videoitems[flag].classList.add('video__choice__item-active');
    }

    video.src = getTargetDate().video[flag];
}


