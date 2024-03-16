// Отримуємо останній час з локального сховища, якщо він є
var storedCountDownTime = localStorage.getItem("countDownTime");

// Якщо в локальному сховищі є час, використовуємо його, в іншому випадку - використовуємо початковий час
var countDownTime = storedCountDownTime ? parseInt(storedCountDownTime) : (18 * 60 * 1000 + 53 * 1000);

// Оновлюємо час раз в секунду
var x = setInterval(function() {
    // Зменшуємо час відліку на 1 секунду
    countDownTime -= 1000;

    // Якщо відлік завершено, відновлюємо вихідний час
    if (countDownTime <= 0) {
        countDownTime = 18 * 60 * 1000 + 53 * 1000;
    }

    // Зберігаємо поточний час у локальному сховищі
    localStorage.setItem("countDownTime", countDownTime.toString());

    // Обчислюємо години, хвилини та секунди
    var minutes = Math.floor((countDownTime % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((countDownTime % (1000 * 60)) / 1000);

    // Відображаємо результат у відповідному елементі з id="demo"
    document.getElementById("minutes").innerHTML = minutes + " ";
    document.getElementById("seconds").innerHTML = seconds + " ";

}, 1000);
