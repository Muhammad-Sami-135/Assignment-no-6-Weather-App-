// Weather App

let API_key = "ad5827032cede044dafbfe8eb38b8bca"

let input = document.getElementById("input");

let showData = document.getElementById("show")

let search = async () => {

    showData.innerHTML = `
    <div class="spinner-border text-dark fs-4" style="margin-top: 200px; width: 4rem; height: 4rem;" role="status">
        <span class="visually-hidden">Loading...</span>
    </div>
    `

    let API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=${API_key}&units=metric`

    let fetchData = await fetch(API_URL);

    let responce = await fetchData.json();

    console.log(responce);

    input.value = ""

    return getData(responce);
}

let getData = (data) => {

    if (data.cod === "404") {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: `${data.message}`,
        });
        return;
    } else {
        showData.innerHTML = `
        <div style="border: 2px solid black; box-shadow: 0 0 8px black; opecity: 1; width:70%; margin: 0 auto; border-radius: 10px; opacity: 5;">
              <img width="30%" src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
          <div class= "text-light d-flex justify-content-around text-justify container mt-2">
                <h4 class="text-dark fw-bold fs-3 p-2" >Name: ${data.name}</h4>
                <h4 class="text-dark fw-bold fs-3 p-2" >Country: ${data.sys.country}</h4>
            </div>
            <div class= "text-light d-flex justify-content-around text-justify container mt-2">
                <h4 class="text-dark fw-bold fs-3 p-2" >Temp: ${data.main.temp}&deg;</h4>
                <h4 class="text-dark fw-bold fs-3 p-2" >Humidity: ${data.main.humidity}%</h4>
             </div>
           <div class= "text-light d-flex justify-content-around text-justify container mt-2">
                      <h4 class="text-dark fw-bold fs-3 p-2" >Weather: ${data.weather[0].main}</h4>
                      <h4 class="text-dark fw-bold fs-3 p-2" >Sea Level: ${data.main.sea_level}</h4>
            </div>
         </div>
`
    }
}




