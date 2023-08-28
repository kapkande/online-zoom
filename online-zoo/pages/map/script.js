// const svg = document.querySelector('.svg');
// const blockButtons = document.querySelector('.buttons');
// const map = document.querySelector('.map');
// const viewBox = svg.viewBox.animVal;
// const body = document.querySelector('.body');

// svg.setAttribute('width', map.clientWidth)
// blockButtons.addEventListener('click', (e) => {
//     const target = e.target;
//     if (target.classList.contains('plus')) {
//         scaling(100);
//     }
//     if (target.classList.contains('minus')) {
//         scaling(-100);
//     }
// });

// svg.onmousedown = function (e) {
//     const viewBox = svg.attributes.viewBox.value.split(' ');
//     svg.classList.add('map-active')
//     const x = e.pageX;
//     const y = e.pageY;
//     document.onmousemove = function (e) {
//         if (svg.classList.contains('map-active')) {
//             body.style.cursor = 'move';
//             svg.setAttribute('viewBox', `${x - e.pageX + +viewBox[0]} ${y - e.pageY + +viewBox[1]} ${viewBox[2]} ${viewBox[3]}`)
//         }
//     }
//     document.querySelector('.wrapper').onmouseup = function (e) {
//         svg.classList.remove('map-active');
//         body.style.cursor = 'default';
//     }
// }

// window.addEventListener('wheel', (e) => {
//     const target = e.target
//     if (target.closest('path')) {
//         scaling(e.deltaY > 0 ? -100 : 100);
//         body.classList.add('hidden');
//     } else {body.classList.remove('hidden'); }

// });

// function scaling(params) {
//     if (params > 0) {
//         if (150 > viewBox.width || 150 > viewBox.height) { return };
//         svg.setAttribute('viewBox', `${viewBox.x} ${viewBox.y} ${viewBox.width - 100} ${ viewBox.height - 100}`)
//     }
//     if (5000 < viewBox.width || 2000 < viewBox.height) { return };
//     if (params < 0) {
//         svg.setAttribute('viewBox', `${viewBox.x} ${viewBox.y} ${viewBox.width + 100} ${viewBox.height + 100}`)
//     }
// }

// console.log(1);

// const LOCATION = {
//     center: [27.5667, 10],
//     zoom: 10
// };

// window.map = null;



// main();
// async function main() {
//     await ymaps3.ready;
//     const {
//         YMap,
//         YMapDefaultSchemeLayer,
//         YMapControls,
//         myMap
//     } = ymaps3;

//     const { YMapZoomControl } = await ymaps3.import('@yandex/ymaps3-controls@0.0.1');

//     map = new YMap(document.getElementById('app'), { location: LOCATION }, [
//         new YMapDefaultSchemeLayer(),
//         new YMapControls({ position: 'right' }, [
//             new YMapZoomControl({})
//         ]),
//     ]);




// }


const key = '47c6f5ec-fc30-40a6-b27c-55b158578b77'



ymaps.ready(init)
function init() {
    const map = new ymaps.Map("map", {
        center: [25, 10],
        zoom: 3
    }, {
        // suppressMapOpenBlock: true,
        // restrictMapArea: [[55.45, 37.20], [56.00, 38.00]]
        backgroundColor: '#f5f5f5',
        // restrictMapArea: [[-180, 90], [180, -90]],
    });
    document.querySelector('.ymaps-2-1-79-gototech')?.remove();
    document.querySelector('.ymaps-2-1-79-controls__control')?.remove();

    // ymaps.borders.load("001", {
    //     lang: "en",
    //     quality: 2
    // }).then(function (geojson) {
    //     for (const i = 0; i < geojson.features.length; i++) {
    //         const geoObject = new ymaps.GeoObject(geojson.features[i]);
    //         map.geoObjects.add(geoObject);
    //     }
    // });


    // ymaps.borders.load('001', { lang: 'en', quality: 1 }).then(function (geojson) {
    //     ymaps.geoQuery(geojson).setOptions({ fillColor: '#C3B89E', strokeColor: '#EAF7FE' }).addToMap(map);
    // });

    ymaps.borders.load('001', { lang: 'en', quality: 1 }).then(function (geojson) {
        const regions = ymaps.geoQuery(geojson);
        regions.search('properties.iso3166 = "US"').setOptions({ 'strokeColor': '#000000', 'fillColor': 'rgba(250,250,250,0)' }).addToMap(map);
    });
    ymaps.borders.load('001', { lang: 'en', quality: 3 }).then(function (geojson) {
        const regions = ymaps.geoQuery(geojson);
        regions.search('properties.iso3166 = "CN"').setOptions({ 'strokeColor': '#000000', 'fillColor': 'rgba(250,250,250,0)' }).addToMap(map);
    });
    ymaps.borders.load('001', { lang: 'en', quality: 3 }).then(function (geojson) {
        const regions = ymaps.geoQuery(geojson);
        regions.search('properties.iso3166 = "CG"').setOptions({ 'strokeColor': '#000000', 'fillColor': 'rgba(250,250,250,0)' }).addToMap(map);
    });


    // const myPlacemark = new ymaps.Placemark([55.76, 37.56], {}, {
    //     iconLayout: 'default#image',
    //     iconImageHref: 'https://i.pinimg.com/originals/8a/a7/83/8aa7831e22f8d5c74aecfe0c0e6953e3.jpg',
    //     icon_imagesize: [30, 42],
    //     // iconImageOffset: [-3, -42]
    // });


    // map.geoObjects.add(myPlacemark);



    // // console.log(map.geoObjects.options);
    // const myCollection = new ymaps.GeoObjectCollection();
    // // Добавляем метки в коллекцию.
    // myCollection.add(new ymaps.Placemark([37.61, 55.75]));
    // // При наведении на одну из меток подсвечиваем коллекцию целиком.
    // myCollection.events
    //     .add("mouseenter", function () {
    //         myCollection.options.set("preset", "twirl#redIcon");
    //         console.log(1);
    //     })
    //     .add("mouseleave", function () {
    //         myCollection.options.unset("preset");
    //     });

    // // Добавляем коллекцию на карту.
    // map.geoObjects.add(myCollection);

    // map.geoObjects.events.add("click", function (e) {
    //     const coords = e.get('coords');
    //     document.querySelector('.ymapsPopup')?.remove()
    //     const myLayout = ymaps.templateLayoutFactory.createClass(
    //         `<div class="ymapsPopup">
    //             <div class="ymapsPopup__wrapper">
    //                 <div class="ymapsPopup__text"></div>
    //                 <a class="ymapsPopup__button" href="">Whatch Online</a>
    //             </div>
    //         </div>`
    //     );


    // })






    // const popup = new ymaps.Popup(['8.81009232756765', '-93.095703125'], {
    //     contentBody: '<div class="popup">HTML-код элемента</div>'
    // });
    // 
    // const parent = popup.getMap();
    // map.geoObjects.add(parent);
    // // Устанавливаем карте центр и масштаб так, чтобы охватить коллекцию целиком.
    // map.setBounds(myCollection.getBounds());
    createPlacemarks(map)
}
function createPlacemarks(map) {
    const Element = ymaps.templateLayoutFactory.createClass(
        `<div class="ymapsPopup">
                <div class="ymapsPopup__wrapper">
                <div class="ymapsPopup__text">
                    <div class="ymapsPopup__name">{{ properties.name }}</div>
                    <div class="ymapsPopup__cantry">{{ properties.cantry }}</div>
                </div>
                    <a class="ymapsPopup__button" href="{{ properties.link }}">Whatch Online</a>
                </div>
            </div>`
    );
    const congo = new ymaps.Placemark(
        [-4.16, 15.17],
        {
            name: '',
            cantry: 'Congo',
            link: '',

        },
        {
            iconLayout: 'default#image',
            iconImageHref: '../../assets/icons/map/greenVector.svg',
            balloonContentLayout: Element,
        }
    );
    map.geoObjects.add(congo);


    const congoPhono = new ymaps.Placemark(
        [-4.16, 15.17],
        {
            name: '',
            cantry: 'Congo',
            link: '',

        },
        {
            iconLayout: 'default#image',
            iconImageHref: '../../assets/icons/map/gorilla.svg',
            balloonContentLayout: Element,
            iconImageOffset: [-30, -40]
        }
    );
    // map.geoObjects.add(congoPhono);



    const alligator = new ymaps.Placemark(
        [27.30, -81.48],
        {
            name: 'Alligator',
            cantry: "Florida, USA",
            link: '',
        },
        {
            iconLayout: 'default#image',
            iconImageHref: '../../assets/icons/map/greenVector.svg',
            balloonContentLayout: Element,
        },
    );
    map.geoObjects.add(alligator);

    const alligatorPhoto = new ymaps.Placemark(
        [27.30, -81.48],
        {
            name: 'Alligator',
            cantry: "Florida, USA",
            link: '',
        },
        {
            iconLayout: 'default#image',
            iconImageHref: '../../assets/icons/map/lonely-crocodile.png',
            balloonContentLayout: Element,
            iconImageOffset: [-30, -40],
            // icon_imagesize: [1, 1]
        },
    );
    // map.geoObjects.add(alligatorPhoto);



    const eagle = new ymaps.Placemark(
        [35, -115.48],
        {
            name: 'Eagle',
            cantry: "Eldorado National Forest, USA",
            link: '',
        },
        {
            iconLayout: 'default#image',
            iconImageHref: '../../assets/icons/map/greenVector.svg',
            balloonContentLayout: Element,
        }
    );
    map.geoObjects.add(eagle);





    const panda = new ymaps.Placemark(
        [30, 110],
        {
            name: 'Panda',
            cantry: "China",
            link: '',
        },
        {
            iconLayout: 'default#image',
            iconImageHref: '../../assets/icons/map/greenVector.svg',
            balloonContentLayout: Element,
        }
    );
    map.geoObjects.add(panda);
}

// ymaps.ready(function () {
//     const myMap = new ymaps.Map('map', {
//         center: [55.76, 37.64],
//         zoom: 3
//     })

//     // const earthPolygon = new ymaps.Polygon([
//     //     [
//     //         { latitude: 80, longitude: -170 }, // северный запад
//     //         { latitude: 80, longitude: 170 }, // северный восток
//     //         { latitude: -80, longitude: 170 }, // южный восток
//     //         { latitude: -80, longitude: -170 } // южный запад
//     //     ]
//     // ], { hintContent: 'Москва',  balloonContent: 'Столица России'}, {
//     //     fillColor: '#000000', // голубой цвет
//     //     strokeColor: '#000000',
//     //     iconColor: '#FF0000'
//     // })
//     // myMap.geoObjects.add(earthPolygon);

//     //

//     const polygon = new ymaps.Polygon([
//         [[-180, 90], [180, -180], [10, -90], [-0, 0]],

//     ], {
//         hintContent: "Многоугольник"
//     }, {
//         fillColor: '#6699ff',
//         // Делаем полигон прозрачным для событий карты.
//         interactivityModel: 'default#transparent',
//         strokeWidth: 8,
//         opacity: 1
//     });
//     myMap.geoObjects.add(polygon);
//     // myMap.setBounds(polygon.geometry.getBounds());



//     //


//     const myPlacemark = new ymaps.Placemark([55.76, 37.64], {
//         hintContent: 'Москва',
//         balloonContent: 'Столица России'
//     }, {
//         iconColor: '#FF0000' // красный цвет метки
//     });

//     myMap.geoObjects.add(myPlacemark);

//     ymaps.borders.load('001', { lang: 'en', quality: 1 }).then(function (geojson) {
//         const regions = ymaps.geoQuery(geojson);
//         regions.search('properties.iso3166 = "US"').setOptions('fillColor', '#FFEE2E').addToMap(map);
//     });
//     ymaps.borders.load('001', { lang: 'en', quality: 1 }).then(function (geojson) {
//         const regions = ymaps.geoQuery(geojson);
//         regions.search('properties.iso3166 = "CN"').setOptions('fillColor', '#FFEE2E').addToMap(map);
//     });
// })
