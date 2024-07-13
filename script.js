const container= document.querySelector('.container');
const searchBox= document.querySelector('.searchbox button');
const weatherBox= document.querySelector('.weatherbox');
const weatherDetails= document.querySelector('.weather-details');
const error= document.querySelector('.not-found');
const cityHide= document.querySelector('.city-hide');
//let input =document.querySelector('input');
const input =document.getElementById('myinput');
const btn =document.getElementById('mybtn');
let btnClear =document.querySelector('button');
let inputs =document.querySelectorAll('input')




 

searchBox.addEventListener('click',()=>{
   // inputs.forEach(input => input.value ='');


    const API_KEY='e22f0829fdf861f66016d70a47151b15';
    const city = document.querySelector('.searchbox input').value;




    if (city == '')
        return;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`).then(response => response.json()).then(json=>{

        if (json.cod == '404'){
            cityHide.textContent=city;
            container.style.height='500px'
            weatherBox.classList.remove('active')
            weatherDetails.classList.remove('active')
            error.classList.add('active')
            return;
        }
      




        const image=document.querySelector('.weatherbox img')
        const temperature=document.querySelector('.weatherbox .temperature')
        const description =document.querySelector('.weatherbox .description')
        const humidity=document.querySelector('.weather-details .humidity span')
        const wind=document.querySelector('.weather-details .wind span')
        
        if(cityHide.textContent == city){ //compare two variables
            return;
        }
        else{

           
            cityHide.textContent = city;

            container.style.height='555px'
            weatherBox.classList.add('active')
            container.classList.add('active')//doubt
            weatherDetails.classList.add('active')
            error.classList.remove('active')
        
            setTimeout(()=>{
                inputs.forEach(input => input.value ='');
            },900)

          

            setTimeout(()=>{
                container.classList.remove('active')
            },2000)

            switch (json.weather[0].main){
                case 'Clear':
                   image.src= 'images/clear.png'
                    break;
                case 'Rain':
                    image.src='images/rain.png'
                    break;
                case 'Snow':
                    image.src='images/snow.png'
                    break;
                case 'Clouds':
                    image.src ='images/cloud.png'
                    break;
                case 'Mist':
                    image.src='images/mist.png'
                    break;
                case 'Haze':
                    image.src='images/mist.png'
                    break;
    
                    
                    default:
                        image.src='images/cloud.png'
    
            }
    
            temperature.innerHTML=`${parseInt(json.main.temp)}<span>°C</span>`;
            description.innerHTML=`${json.weather[0].description}`
            humidity.innerHTML=`${json.main.humidity}%`
            wind.innerHTML=`${parseInt(json.wind.speed)}Km/Hr`
        }

    //    const weatherInfo =document.querySelector('.weather-info');
    //    const humidityInfo =document.querySelector('.humidity-info');
    //    const windInfo =document.querySelector('.wind-info');
        
     
    })
    //  location.reload();                 
}
)

