const TemCelsius = +prompt("Введите температуру в градусах Цельсия: ");
const TemFahrenheit = (9.0 / 5.0) * TemCelsius + 32;
alert('Температура ' + TemCelsius + ' по Цельсию в градусах по Фаренгейту равна: ' + (TemFahrenheit * 100) / 100);