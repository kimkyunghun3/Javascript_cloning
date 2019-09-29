const API_KEY ="19eaa6618738120726476ee57c29f301";
const COORDS = 'coords';

function getweather(lat,log){
    fetch(`api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}`)
}; 

function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));

}

function handleGeoSucces(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj={
        latitude,
        longitude
    };
    saveCoords(coordsObj);
    getweather(latitude,longitude);
}
function handleGeoError(){
    console.log('cant access geo location');
} 


function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSucces,handleGeoError)
}
function loadCoords(){
    const loadedCoords =localStorage.getItem(COORDS);
    if(loadedCoords ==null){
        askForCoords();

    }else{
      const parseCoords =JSON.parse(loadedCoords);
      console.log(parseCoords);
        //getweather
    }
}

function init(){
    loadCoords();
}
init();