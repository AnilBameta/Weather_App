let loc=document.getElementById("location");
let tempvalue=document.getElementById("temp-value");
let temp=document.getElementById("temp");
let iconimg=document.getElementById("ic");
const inputval=document.getElementById("inputval");
const btn=document.getElementById("btn");
let back=document.getElementById("card");
let body=document.querySelector("body");
function size()
              {
                iconimg.style.transform='scale(1.2)';
                setTimeout(()=>{
                    iconimg.style.transform='scale(1)';
                },2000)
              }
              btn.addEventListener('click',()=>{
                btn.style.backgroundColor='rgb(230, 94, 94)';  
                  setTimeout(()=>{
                    btn.style.backgroundColor='white';  
                  },500)
                   
              })
btn.addEventListener('click',(e)=>{
    e.preventDefault();
    getWeather(inputval.value);
    inputval.value='';
})
 
const getWeather=async(city)=>{
    try{
        
        const response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a870ac360849cf684a75a2e8397a6e6a`,
        {mode:'cors'}
        ); 
         const weatherData=await response.json();
         console.log(weatherData); 
         const{name}=weatherData;
               const{feels_like}=weatherData.main;
               const{id,main}=weatherData.weather[0];

               loc.innerHTML=name;
               temp.innerHTML=main;
               tempvalue.innerHTML=Math.round(feels_like-273)+'°C';

              
               if(id<300 && id>=200)
               {
                  iconimg.src='thunderstorm.png';
                  size();
                  body.style.backgroundImage='url("david-moum-nbqlWhOVu6k-unsplash.jpg")'; 
               }
               else if(id<400 && id>=300)
               {
                iconimg.src='drizzle.png';
                size();
                body.style.backgroundImage='url("ahmed-zayan-5HCKAZYC5jk-unsplash.jpg")';
               }
               else if(id<600 && id>=500)
               {
                iconimg.src='rain.png';
                size();
                body.style.backgroundImage='url("ricardo-cruz-uQdotWkBEQ8-unsplash.jpg")';
               }
               else if(id<700 && id>=600)
               {
                iconimg.src='snowflake.png';
                size();
                body.style.backgroundImage='url("adam-neumann-V__6dj7NV2s-unsplash.jpg")';
               }
               else if(id>=700 && id<800)
               {
                   iconimg.src='haze.png';
                   size();
                   body.style.backgroundImage='url("maxim-medvedev-87dFRyIoIYk-unsplash.jpg")';
               }
               else if(id==800)
               {
                iconimg.src='sun.png';
                size();
                body.style.backgroundImage='url("engin-akyurt-3ihnKT5apmg-unsplash.jpg")';
               }
               else if(id<900 && id>800)
               {
                iconimg.src='clouds.png';
                 size();  
                 body.style.backgroundImage='url("daniel-olah-srFhtP2Isv4-unsplash.jpg")';
               }
               
   
    }
catch(error)
{
    alert("Wrong city name");
}
}

 window.addEventListener("load",()=>{
     let long;
     let lat;
     if(navigator.geolocation)
     {
         navigator.geolocation.getCurrentPosition((position)=>
         {
         long=position.coords.longitude;
         lat=position.coords.latitude;
         const proxy="https://cors-anywhere.herokuapp.com/";

         const api=`${proxy}api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=a870ac360849cf684a75a2e8397a6e6a`;
         fetch(api).then((response)=>{
             return response.json();
         })
         .then(data=>{
               const{name}=data;
               const{feels_like}=data.main;
               const{id,main}=data.weather[0];
                console.log(data);
               loc.innerHTML=name;
               temp.innerHTML=main;
               tempvalue.innerHTML=Math.round(feels_like-273)+'°C';
               console.log(data);

                
               if(id<300 && id>=200)
               {
                  iconimg.src='thunderstorm.png';
                  size();
                  body.style.backgroundImage='url("david-moum-nbqlWhOVu6k-unsplash.jpg")';
               }
               else if(id<400 && id>=300)
               {
                iconimg.src='drizzle.png';
                size();
                body.style.backgroundImage='url("ahmed-zayan-5HCKAZYC5jk-unsplash.jpg")';
               }
               else if(id<600 && id>=500)
               {
                iconimg.src='rain.png';
                size();
                body.style.backgroundImage='url("ricardo-cruz-uQdotWkBEQ8-unsplash.jpg")';
               }
               else if(id<700 && id>=600)
               {
                iconimg.src='snowflake.png';
                size();
                body.style.backgroundImage='url("adam-neumann-V__6dj7NV2s-unsplash.jpg")';
               }
               else if(id>=700 && id<800)
               {
                   iconimg.src='haze.png';
                   size();
                   body.style.backgroundImage='url("maxim-medvedev-87dFRyIoIYk-unsplash.jpg")';
               }
               else if(id==800)
               {
                iconimg.src='sun.png';
                size();
                body.style.backgroundImage='url("engin-akyurt-3ihnKT5apmg-unsplash.jpg")';
               }
               else if(id<900 && id>800)
               {
                iconimg.src='clouds.png';
                size();
                body.style.backgroundImage='url("daniel-olah-srFhtP2Isv4-unsplash.jpg")';
               }
               
               
         })
        }
         )
     }
 })
