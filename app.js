let inputCity=document.querySelector(".input-city");
let Button=document.querySelector(".sub-button");
let name=document.querySelector(".namee");
let temprature=document.querySelector(".temp");
let description=document.querySelector(".descc");
let countrycode=document.querySelector(".cont");
let currentDay=document.querySelector(".day");
let entire=document.querySelector(".app-cont");


Button.addEventListener('click',() =>{
    let val=inputCity.value;
    let date=getDate();
   const proxy="https://mycorsproxy307.herokuapp.com/";
    const api=`${proxy}api.openweathermap.org/data/2.5/weather?q=${val}&appid=20ad92773397af79a6f37b3c1cba74c6`;
    fetch(api)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        let cityName=data['name'];
        let tempValueK=data['main']['temp'];
        let descValue=data['weather'][0]['description'];
        let cc=data['sys']['country'];
        let tempValueC=Math.floor(tempValueK-273.15);
        if(tempValueC>0)
        {
            tempValueC=tempValueC-1;
        }
        else
        {
            tempValueC=tempValueC+1;
        }
        name.innerHTML=cityName+",";
        countrycode.innerHTML=cc;
        currentDay.innerHTML=date;
        temprature.innerHTML=tempValueC+"°C";
        description.innerHTML=descValue;
        if(tempValueC>0&&tempValueC<20)
        {
            
            entire.style.backgroundImage="linear-gradient(to bottom,rgba(0,255,0,0.4),rgba(0,255,0,0.1))";
        }
        else if(tempValueC<=0)
        {
           
            entire.style.backgroundImage="linear-gradient(to bottom,rgba(0,0,128,0.4),rgba(0,0,128,0.1))"; 
        }
        else{
            entire.style.backgroundImage="linear-gradient(to bottom,rgba(0,0,0,0.3),rgba(0,0,0,0.6))";
        }
    })

})

 function getDate()
{
   var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = mm + '/' + dd + '/' + yyyy;
return (today);
}