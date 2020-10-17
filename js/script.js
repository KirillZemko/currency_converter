// AJAX - Asynchronius JavaScript and XML

// получаем данные со страницы
const inputRub = document.querySelector('#rubusd'),
      inputUsd = document.querySelector('#usd'),
      inputRubEur = document.querySelector('#rubeur'),
      inputEur = document.querySelector('#eur');


// добавлем событие в input, событие input
inputRub.addEventListener('input', () => {
    // запрос на сервер -> создаем переменную request и присваиаем объект XMLHttpRequest()
    const request = new XMLHttpRequest(); // XMLHttpRequest (метод объекта) - API, который предоставляет способ получения данных по ссылке, без перезагрузки страницы

    // GET - HTTP запрос, GET - получаем данные, POST - отправляем данные
    request.open('GET', 'js/current.json'); // .open() метод собирает настройки, для создания запроса
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8'); // .setRequestHeader() в каком формате передаем запрос
    request.send(); // .send() отправляем GET запрос
    
    request.addEventListener('load', () => {
        if (request.status === 200) {
            // console.log(request.response);
            const data = JSON.parse(request.response); // парсим 
            inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2); // tiFixed(2) - количество цифр после запятой
        } else {
            inputUsd.value = 'Что-то пошло не так';
        }
    });

    // status - (404, 200 - OK)
    // statusText - (URL not found)
    // response -  ответ от сервера
    // readyState - (4 - DONE)
});

inputUsd.addEventListener('input', () => {
    // запрос на сервер -> создаем переменную request и присваиаем объект XMLHttpRequest()
    const request = new XMLHttpRequest(); // XMLHttpRequest (метод объекта) - API, который предоставляет способ получения данных по ссылке, без перезагрузки страницы

    // GET - HTTP запрос, GET - получаем данные, POST - отправляем данные
    request.open('GET', 'js/current.json'); // .open() метод собирает настройки, для создания запроса
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8'); // .setRequestHeader() в каком формате передаем запрос
    request.send(); // .send() отправляем GET запрос
    
    request.addEventListener('load', () => {
        if (request.status === 200) {
            // console.log(request.response);
            const data = JSON.parse(request.response); // парсим 
            inputRub.value = (+inputUsd.value * data.current.usd).toFixed(2); // tiFixed(2) - количество цифр после запятой
        } else {
            inputUsd.value = 'Что-то пошло не так';
        }
    });

    // status - (404, 200 - OK)
    // statusText - (URL not found)
    // response -  ответ от сервера
    // readyState - (4 - DONE)
});

// добавлем событие в input, событие input
inputRubEur.addEventListener('input', () => {
    // запрос на сервер -> создаем переменную request и присваиаем объект XMLHttpRequest()
    const request = new XMLHttpRequest(); // XMLHttpRequest (метод объекта) - API, который предоставляет способ получения данных по ссылке, без перезагрузки страницы

    // GET - HTTP запрос, GET - получаем данные, POST - отправляем данные
    request.open('GET', 'js/current.json'); // .open() метод собирает настройки, для создания запроса
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8'); // .setRequestHeader() в каком формате передаем запрос
    request.send(); // .send() отправляем GET запрос
    
    request.addEventListener('load', () => {
        if (request.status === 200) {
            // console.log(request.response);
            const data = JSON.parse(request.response); // парсим 
            inputEur.value = (+inputRubEur.value / data.current.eur).toFixed(2); // tiFixed(2) - количество цифр после запятой
        } else {
            inputEur.value = 'Что-то пошло не так';
        }
    });
});

inputEur.addEventListener('input', () => {
    // запрос на сервер -> создаем переменную request и присваиаем объект XMLHttpRequest()
    const request = new XMLHttpRequest(); // XMLHttpRequest (метод объекта) - API, который предоставляет способ получения данных по ссылке, без перезагрузки страницы

    // GET - HTTP запрос, GET - получаем данные, POST - отправляем данные
    request.open('GET', 'js/current.json'); // .open() метод собирает настройки, для создания запроса
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8'); // .setRequestHeader() в каком формате передаем запрос
    request.send(); // .send() отправляем GET запрос
    
    request.addEventListener('load', () => {
        if (request.status === 200) {
            // console.log(request.response);
            const data = JSON.parse(request.response); // парсим 
            inputRubEur.value = (+inputEur.value * data.current.eur).toFixed(2); // tiFixed(2) - количество цифр после запятой
        } else {
            inputUsd.value = 'Что-то пошло не так';
        }
    });

    // status - (404, 200 - OK)
    // statusText - (URL not found)
    // response -  ответ от сервера
    // readyState - (4 - DONE)
});