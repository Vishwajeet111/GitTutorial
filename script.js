const searchBtn = document.querySelector('.Search-btn') ;
const search = document.querySelector('.search_bar') ;
const weatherContainer = document.querySelector('.weather') ;

async function getTemp(value){
    try{
        const res = await fetch('https://api.openweathermap.org/data/2.5/weather?q='+value+'&units=Metric&appid=1effc8a8b6871ce0084f4240f133d6a8');
        const data = await res.json() ;
        console.log(data)
        showTemp(data) ;
    }
    catch(err){
        console.log(err) ;
    }
}

getTemp('new york') ;
setBg('new york') ;

searchBtn.addEventListener('click' , () => {
    let value = search.value ;
    getTemp(value) ;
    setBg(value) ;
}) ;

function showTemp(data){
    weatherContainer.innerHTML = `
        <h1 class="city">Weather in ${data.name}</h1>
        <h1 class="temp">${data.main['temp']}°C</h1>
        <div class="icon"><img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}.png" alt=""></div>
        <div class="desc">${data.weather[0]['main']}</div>
        <div class="humidity">Humidity: ${data.main['humidity']}%</div>
        <div class="wind-speed">Wind Speed: ${data.wind['speed']} m/s</div>
    ` ;
}

function setBg(name){
    document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + name + " , landscape')"}