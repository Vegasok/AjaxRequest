
var btn = document.getElementById('button'),
    listHeroes = document.getElementById('listHeroes');

function loadHeroes(i) {

    var xhr = new XMLHttpRequest();


    xhr.open('GET', 'http://swapi.co/api/people/?page=' + i + '', true);

    xhr.send();


    xhr.onreadystatechange = function() {
        if (xhr.readyState != 4) return;

        btn.innerHTML = 'Ready!';

        if (xhr.status != 200) {
            // обработать ошибку
            console.log(xhr.status + ': ' + xhr.statusText);
        } else {
            // вывести результат
            try {
                var heroes = JSON.parse(xhr.responseText);
            } catch (e) {
                alert( "Incorrect answer " + e.message );
            }
            showHeroes(heroes);
        }

    }

    btn.innerHTML = 'Loading...';
    btn.disabled = true;
}

function showHeroes(heroes) {
    heroes.results.forEach(function(hero) {
        var li = listHeroes.appendChild(document.createElement('li'));
        li.innerHTML = hero.name;
    });
}

btn.addEventListener('click', function(e){
    for(var i = 1; i < 10; i++) {
        loadHeroes(i);
    }
});
