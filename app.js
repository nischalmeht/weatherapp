var button = document.querySelector('.submit');
var input = document.querySelector('.input');
var name = document.querySelector('.name');
var temp = document.querySelector('.temp');
var desc = document.querySelector('.desc');
var clouds = document.querySelector('.clouds');



button.addEventListener('click', function(name) {
    fetch('api.openweathermap.org/data/2.5/weather?q = ' + input.value + '&appid={c9eceb4c739a05bda8280c1644318f29}')
        .then(response => response.json())
        .then(data => {
            var tempValue = data['main']['temp'];
            var nameValue = data['name'];
            var descValue = data['weather'][0]['description'];

            name.innerHTML = nameValue;
            desc.innerHTML = descValue;
            temp.innerHTML = tempValue;


        })





    .catch(err => alert("Wrong city name!"));
})