const imegeArrow = document.querySelector('.video__asideBar-arrow');
imegeArrow.addEventListener('mouseover', () => {
    imegeArrow.classList.add(`iconTarget`);
});
imegeArrow.addEventListener('mouseout', () => {
    imegeArrow.classList.remove(`iconTarget`);
});

imegeArrow.addEventListener('click', () => {
    const imeges = document.querySelectorAll('.video__asideBar-item');

    imeges.forEach((e, i) => {
        const position = e.className.indexOf('asideBar__item-');
        const nowClass = e.className.substr(position, 16);
        const indexEnd = Number(nowClass.split('-')[1]);
        e.classList.remove(nowClass);
        e.classList.add(`asideBar__item-${indexEnd + 1 > 5 ? 0 : indexEnd + 1}`);

    });


})
