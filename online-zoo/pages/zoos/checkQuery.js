function getNameOfAnimal() {
    const nameOfAnimal = document.location.href.split('?bord=')[1];
    if (!nameOfAnimal) { return 'gorilla' };
    return nameOfAnimal;
}
function getTargetDate() {
    let targetDate = date[getNameOfAnimal()];
    if (!targetDate) { targetDate = date.gorilla };
    return targetDate;
}

createIconsVideo()

const targetDate = getTargetDate();
createTextBlock(targetDate);
setUrlForIcons(targetDate);
setBottonImage(targetDate);

function createTextBlock(targetDate) {
    craftebriefBlok(targetDate)
    const title = document.querySelector('.video__title');
    title.textContent = targetDate.title;

    const info = document.querySelector('.info .wrap');
    document.querySelector('.info__textBlock')?.remove();

    const textBlock = document.createElement('div');
    textBlock.classList.add("info__textBlock");

    const text = document.createElement('div');
    text.classList.add("info__text");

    targetDate.text.forEach(element => {
        const item = document.createElement('div');
        item.classList.add('info__textBlock__item')

        const subtitle = document.createElement('div');
        subtitle.classList.add('info__textBlock__subtitle');
        subtitle.textContent = element[0];
        item.appendChild(subtitle);

        createDivElement(element.slice(1), item, subtitle)

        text.appendChild(item);
        textBlock.appendChild(text)

    });
    const trans = document.createElement('div');
    trans.classList.add('info__textBlock__trans');
    textBlock.appendChild(trans);
    textBlock.classList.add('info__textBlock-trans');
    info.appendChild(textBlock);

    document.querySelector('.info__button')?.remove();
    createButton(info, textBlock);
 
}

function createButton(info, textBlock) {
    const button = document.createElement('button');
    button.classList.add('info__button');
    button.textContent = 'Read More';
    info.appendChild(button);

    button.addEventListener('click', (e) => {
        textBlock.classList.toggle('info__textBlock-trans');
        if (textBlock.classList.contains('info__textBlock-trans')) {
            button.textContent = 'Read More';
            return;
        }
        button.textContent = 'Read Less';
    })
}

function createDivElement(arr, item) {
    arr.forEach(e => {
        const text = document.createElement('div');
        text.classList.add('info__text');
        text.innerHTML = e;
        item.appendChild(text);
    });
   
}

function setUrlForIcons(targetDate) {
    const video = document.querySelector('.video__view');
    video.src = targetDate.video[0];
    const videoChoiceItems = document.querySelectorAll('.video__choice__item');
    document.querySelector('.video__choice__item-active')?.classList.remove('video__choice__item-active');
    videoChoiceItems.forEach((e, i) => {
        e.style.backgroundImage = `url(${targetDate.photoFromVideo[i]})`
        if (i == 0) { e.classList.add('video__choice__item-active') };
    });
}

function createIconsVideo() {
    const choiceVideoBlock = document.querySelector('.video__choiceVideoBlock');
    for (let i = 0; i < 4; i++) {
        const item = document.createElement('div');
        item.classList.add('video__choice__item');
        choiceVideoBlock.appendChild(item);
    }
}

function craftebriefBlok(targetDate) {
    const infoTitle = document.querySelector('.info__title');
    infoTitle.textContent = targetDate.subtitle;

    const briefImage = document.querySelector('.info__brief__image');
    briefImage.style.backgroundImage = `url(${targetDate.briefImage})`;


    const briefText = document.querySelector('.info__brief__text');
    briefText.textContent = targetDate.briefText;
}

function setBottonImage(targetDate) {
    const image = document.querySelector('#bottomImage');
    image.src = targetDate.imageBotton
    const button = document.querySelector('.bottomImage link');
    
}