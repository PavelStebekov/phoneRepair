ymaps.ready(init);
let myMap;

function init () {
    destinations = {
        'Наш офис в городе Катайске': [56.285863, 62.581512],
        'Наш офис в городе Далматово': [56.260613, 62.935654],
        'newcenter': [56.285993, 62.580065],
        'newcenter2': [56.286872, 62.579652],
        'newcenterD2': [56.260873, 62.934199],
        'newcenterD3': [56.261426, 62.932910],
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
    
    let windowInnerWidth = window.innerWidth;
    if (windowInnerWidth < '768') {
        myMap.behaviors.disable('drag');
    };
    
    function clickGoto() {
        let pos = this.textContent;
        
        const parentColAll = document.querySelectorAll('.contacts__item');
        let parentCol = this.closest('.contacts__item');
        let windowInnerWidth = window.innerWidth;
        
        for (let k = 0; k < col.length; k++) {
            col[k].classList.remove('active');
        }

        if (windowInnerWidth < '768') {
            for (let i = 0; i < col.length; i++) {
                gsap.to (parentColAll[i], {
                    duration: 0.8,
                    height: 20,
                });
            }
            gsap.to (parentCol, {
                duration: 0.8,
                height: parentCol.scrollHeight,
            });
        }

        this.classList.add('active');
        
        if (pos === 'Наш офис в городе Катайске' && windowInnerWidth < '1600') { 
            if (windowInnerWidth < '480') {
                myMap.panTo(destinations['newcenter2'], {
                    flying: true,
                    duration: 3000,
                });
            } else {
                myMap.panTo(destinations['newcenter'], {
                    flying: true,
                    duration: 3000,
                });
            }
    
        } else {
            if (windowInnerWidth < '480') {
                myMap.panTo(destinations['newcenterD3'], {
                    flying: true,
                    duration: 3000,
                });
            } else if (windowInnerWidth < '680'){
                myMap.panTo(destinations['newcenterD2'], {
                    flying: true,
                    duration: 3000,
                });
            } else {
                myMap.panTo(destinations[pos], {
                    flying: true,
                    duration: 3000,
                });
            }
        }
        return false;
    }

    let col = document.getElementsByClassName('contacts__item-title');
    for (let i = 0; i < col.length; i++) {
        col[i].onclick = clickGoto;
    }
    
    function onResizeMap() {
        const windowInnerWidth = window.innerWidth;
        
        if (windowInnerWidth < '480') {
            myMap.setCenter(destinations['newcenter2'], 17);
        } else if (windowInnerWidth < '1600') { 
            //Set New center
            myMap.setCenter(destinations['newcenter'], 17);
        } 
    } 
    onResizeMap();

    window.onresize = function () {
        onResizeMap();
    };
}