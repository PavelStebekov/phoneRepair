ymaps.ready(init);

let myMap;

function init () {
    
    destinations = {
        'Наш офис в городе Катайске': [56.285863, 62.581512],
        'Наш офис в городе Далматово': [56.260613, 62.935654],
        'newcenter': [56.285993, 62.580065]
    },

    myMap = new ymaps.Map('map', {
        center: destinations['Наш офис в городе Катайске'],
        zoom: 18.3,
    });

    let placemark = new ymaps.Placemark([56.285978, 62.578915],{},{
        iconLayout: 'default#image',
        // iconImageHref: '/phoneRepair/img/marker.svg',
        iconImageSize: [50, 50],
        iconImageOffset: [0, 0]
    });
    let placemark2 = new ymaps.Placemark([56.260353, 62.933022],{},{
        iconLayout: 'default#image',
        // iconImageHref: '/phoneRepair/img/marker.svg',
        iconImageSize: [50, 50],
        iconImageOffset: [0, 0]
    });

    myMap.controls.remove('geolocationControl'); // удаляем геолокацию
    myMap.controls.remove('searchControl'); // удаляем поиск
    myMap.controls.remove('trafficControl'); // удаляем контроль трафика
    myMap.controls.remove('typeSelector'); // удаляем тип
    myMap.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
    myMap.controls.remove('rulerControl'); // удаляем контрол правил
    myMap.behaviors.disable('scrollZoom');
    myMap.geoObjects.add(placemark);
    myMap.geoObjects.add(placemark2);
    

    function clickGoto() {
        let pos = this.textContent;
        const parentColAll = document.querySelectorAll('.contacts__item');
        let parentCol = this.closest('.contacts__item');
        let windowInnerWidth = window.innerWidth;

        console.log(pos);
        console.log(windowInnerWidth);
        console.log(pos === 'Наш офис в городе Катайске' && windowInnerWidth < '1600');
        
        for (let k = 0; k < col.length; k++) {
            col[k].classList.remove('active');
        }

        if (windowInnerWidth < '768') {
            for (let k = 0; k < col.length; k++) {
                gsap.to (parentColAll[k], {
                    duration: 0.8,
                    height: 20,
                });
            }
        }

        this.classList.add('active');

        if (windowInnerWidth < '768') {
            gsap.to (parentCol, {
                duration: 0.8,
                height: parentCol.scrollHeight,
            });
        }

        
        if (pos === 'Наш офис в городе Катайске' && windowInnerWidth < '1600') { 
            myMap.panTo(destinations['newcenter'], {
                flying: true,
                duration: 3000,
            });
        } else {
            myMap.panTo(destinations[pos], {
                flying: true,
                duration: 3000,
            });
        }
        return false;
    }

    let col = document.getElementsByClassName('contacts__item-title');
    for (let i = 0; i < col.length; i++) {
        col[i].onclick = clickGoto;
    }
    
    function onResizeMap() {
        const windowInnerWidth = window.innerWidth;

        if (windowInnerWidth < '1600') { 
            //Set New center
            myMap.setCenter(destinations['newcenter'], 17);
        } 
    } 
    onResizeMap();

    window.onresize = function () {
        onResizeMap();
    };
}