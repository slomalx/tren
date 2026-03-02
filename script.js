 const minSlider = document.getElementById('slider-min');
        const maxSlider = document.getElementById('slider-max');
        const valueMin = document.getElementById('value-min');
        const valueMax = document.getElementById('value-max');
        const rangeSelected = document.getElementById('rangeSelected');

        const maxLimit = 100; // можно взять из атрибута max, но для простоты зададим

        function updateValues() {
            valueMin.textContent = minSlider.value;
            valueMax.textContent = maxSlider.value;
        }

        function updateRangeHighlight() {
            const minVal = parseInt(minSlider.value);
            const maxVal = parseInt(maxSlider.value);

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