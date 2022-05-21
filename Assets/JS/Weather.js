/* Body Text Element */
const City = document.querySelector('#City');

/* Button Element */
const Search = document.querySelector('#Search');

/* Body Text Element */
const Status = document.querySelector('#Status');

/* Input Element */
const Location = document.querySelector('#Location');

/* Body Text Element */
const Temparature = document.querySelector('#Temparature');

/* Body Text Element */
const Description = document.querySelector('#Description');

/* Shows weather values to the user with the API used */
function Weather() {
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+ Location.value +'&appid=7a309c28a16264ba88740fa923006400&units=metric')
    .then(Response => Response.json())
    .then(Data => {
        var Name = Data['name'];
        var Temp = Data['main']['temp'];
        var Desc = Data['weather'][0]['description']; 

        /* Modal Element */
        const Modal = document.getElementById('Modal');
        
        /* Weather Element */
        const Weather = document.getElementById('Weather');

        /* If the Weather element is not equal to the none style, make the Modal element's style flex and the Weather element set to none */
        if (Weather.style.display != 'none') {
            /* Modal Element */
            Modal.style.display = 'flex';

            /* Weather Element */
            Weather.style.display = 'none';
        };

        City.innerHTML = 'City Name : ' + Name;
        Temparature.innerHTML = 'Temparature : ' + Temp;
        Description.innerHTML = 'Weather : ' + Desc;
    })

    .catch(Error => {
        Status.innerHTML = 'Please make sure you have entered the city name correctly';
    });
}