 const minSlider = document.getElementById('slider-min');
        const maxSlider = document.getElementById('slider-max');
        const valueMin = document.getElementById('value-min');
        const valueMax = document.getElementById('value-max');
        const rangeSelected = document.getElementById('rangeSelected');

        const maxLimit = parseInt(minSlider.max); // можно взять из атрибута max, но для простоты зададим

minSlider.value = minSlider.getAttribute('value') || 20;
maxSlider.value = maxSlider.getAttribute('value') || 80;

        function updateValues() {
            valueMin.textContent = minSlider.value;
            valueMax.textContent = maxSlider.value;
        }

        function updateRangeHighlight() {
            const minVal = minSlider.value;
            const maxVal = maxSlider.value;

            // Вычисляем позиции в процентах
            const leftPercent = (minVal / maxLimit) * 100;
            const widthPercent = ((maxVal - minVal) / maxLimit) * 100;

            // Применяем стили к подсветке
            rangeSelected.style.left = leftPercent + '%';
            rangeSelected.style.width = widthPercent + '%';
        }

        // Обработчик для минимального ползунка
        minSlider.addEventListener('input', function() {
            if (parseInt(minSlider.value) > parseInt(maxSlider.value)) {
                minSlider.value = maxSlider.value;
            }
            updateValues();
            updateRangeHighlight();
        });

        // Обработчик для максимального ползунка
        maxSlider.addEventListener('input', function() {
            if (parseInt(maxSlider.value) < parseInt(minSlider.value)) {
                maxSlider.value = minSlider.value;
            }
            updateValues();
            updateRangeHighlight();
        });

        // Инициализация
        updateValues();
        updateRangeHighlight();

        const images = [
            './img/Untitled-1.jpg',
            './img/Untitled-2.jpg',
            './img/Untitled-3.jpg',
        ];

        let currentIndex = 0;

        const imgElement = document.getElementById('sliderImage');

        function updateImage() {
            imgElement.src = images[currentIndex];
        }

        document.getElementById('toRight').addEventListener('click', function() {
            currentIndex = (currentIndex + 1) % images.length;
            updateImage();
        })

        document.getElementById('toLeft').addEventListener('click', function() {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            updateImage();
        })



        updateImage();


let filterReset = document.getElementById('filter-reset');
let radios = document.getElementsByName('mode');
let goFilter = document.getElementById('go-filter');
let filterValue = document.querySelectorAll('.stuff');
let resultFilter = document.getElementById('resultFilter')
let arr = Array.from(filterValue, span => span.textContent);
let tempArr = [];


filterReset.addEventListener('click', ()=> {
    radios.forEach(radio => radio.checked = false);
    resultFilter.textContent = 'Результат выдачи:'

})

goFilter.addEventListener('click', () => {
    filterFunc();
})

function filterFunc() {
    resultFilter.textContent = 'Результат выдачи:'
    if ( radios[0].checked === false && radios[1].checked === false && radios[2].checked === false ) {
    return resultFilter.textContent += arr;
    } else if ( radios[0].checked) {
     tempArr = arr.filter(value => /^[A-Za-z]+$/.test(value));
     
    } else if (radios[1].checked) {
        tempArr = arr.filter(value => /^\d+$/.test(value))
    } else if (radios[2].checked) {
        tempArr = arr.filter(value => /^[A-Za-z0-9]+$/.test(value) && /[A-Za-z]/.test(value) &&  /[0-9]/.test(value)              
);
    }
    return resultFilter.textContent += tempArr;
}