
const btn = document.querySelector("button")

// console.log(cityname.value)

const apikey="235da745bfb3e7667035353b2255d29f"
let city="Pune"



async function getweather(){

    const cityname = document.querySelector("#city").value;

    const url= `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${apikey}`;

    if(!cityname){
        alert("please select cityName");
        return;
    
    }

    try {
        const res=await fetch(url);
        const data=await res.json();
        console.log(data);
        if(data.cod!== 200){
        }
        
        document.querySelector("#weather-info").innerHTML=`
        <h3>${data.name},${data.sys.country}</h3>
         <p>🌡Temperature: ${data.main.temp} ° c</p>
         <p>☁️ Weather: ${data.weather[0].description}</p>
            <p>💧Humidity: ${data.main.humidity}</p>
    <p>🌬 Wind Speed: ${data.wind.speed}</p>
    <img class="weather-icon" src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png">
`;
    } catch (error) {
       console.log(error);
       document.querySelector( 
        "#weather-info"
       ).innerHTML=`<P>Error fetching weather data<P/>`;
    }
}

btn.addEventListener("click",getweather);
getweather()