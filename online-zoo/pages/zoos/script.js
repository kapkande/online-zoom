const arrIcons = ['gorilla', 'alligator', 'panda','eagle'];

const asideBar = document.querySelector('.video__asideBar');

(() => {

    arrIcons.forEach(e => {
        const item = document.createElement('button');
        item.classList.add('video__asideBar-item');
        asideBar.appendChild(item)
    });
    const arrow = document.createElement('button');
    arrow.classList.add('video__asideBar-arrow');
    asideBar.appendChild(arrow)
})();
(() => {
    const imeges = document.querySelectorAll('.video__asideBar-item');
    const activeAnimal = getNameOfAnimal();
    imeges.forEach((e, i) => {
        if (!arrIcons[i]) { return };
        e.classList.add(`asideBar__item__${arrIcons[i]}`);

        e.classList.add(`asideBar__item-${i}`);

        if (arrIcons[i] == activeAnimal) { e.classList.add('iconActive'); }

        e.addEventListener('mouseover', () => {
            e.classList.add(`asideBar__item__${arrIcons[i]}-target`);
        });
        e.addEventListener('mouseout', () => {
            e.classList.remove(`asideBar__item__${arrIcons[i]}-target`);
        });


        e.addEventListener('click', () => {
            let url = new URL(window.location.protocol + "//" + window.location.host + window.location.pathname);
            url.searchParams.set('bord', arrIcons[i]);
            window.history.replaceState({}, '', `${url.href}`);
            document.querySelector('.iconActive').classList.remove('iconActive')
            e.classList.add('iconActive');

            const targetDate = getTargetDate();
            createTextBlock(targetDate);
            setUrlForIcons(targetDate);
            url.searchParams.set('bord', arrIcons[i]);
        window.history.replaceState({}, '', `${url.href}`);
        })        
    });
})();

