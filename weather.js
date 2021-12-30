const form1 = document.querySelector('#cityDataForm')
console.log(form1)

const getWeather = async (city, zip) =>{
    const units = 'imperial'
    const id = '0631bc0b95ec5b9efaf50c80263080b9'  
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&zip=${zip}&units=${units}&appid=${id}`
    
    const res = await fetch(url)
    const data = await res.json() 
    createElements(data)
   
}

form1.addEventListener('submit', (event)=>{
    event.preventDefault();
;
    const city = event.path[0][0].value
    const zip = event.path[0][1].value
    getWeather(city,zip)
})

const createElements = async (data)=>{
    let high = data.main.temp_max
    let low = data.main.temp_min
    let humidity = data.main.humidity
    let forecast = data.weather[0].main
    
    const html1 = document.createElement('p')
    const html2 = document.createElement('p')
    const html3 = document.createElement('p')
    const html4 = document.createElement('p')
    
    html1.innerHTML = `${high} F`
    html2.innerHTML = `${low} F`
    html3.innerHTML = humidity
    html4.innerHTML = forecast
    
    document.querySelector('#high').insertAdjacentElement('beforeend', html1)
    document.querySelector('#low').insertAdjacentElement('beforeend', html2)
    document.querySelector('#humidity').insertAdjacentElement('beforeend', html3)
    document.querySelector('#forecast').insertAdjacentElement('beforeend', html4)
    

}

