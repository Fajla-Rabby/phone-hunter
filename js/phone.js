const searchPhones = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    // clear data
    // searchField.value = '';

    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displaySearchResult(data.data.slice(0, 20)))

}
// searchPhones();
const displaySearchResult = phones => {
    const searchResult = document.getElementById('src-result');
    // searchResult.textContent = '';
    // if (phones.length == 0) {
    //     // show no result found;
    // }
    phones.forEach(phone => {
        console.log(phone);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        

        <div class="card h-100">
            <img src="${phone.image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">Brand: ${phone.brand}</h5>
                <p class = card-text> Model: ${phone.phone_name}</p>
                <button onClick = "details('${phone.slug}')" class = "btn btn-info text-white"> Details</button> 
                
            </div>
        </div>
        `;
        searchResult.appendChild(div);
    })
}

// <p class="card-text">${phone.strInstructions.slice(0, 200)}</p>

//fetch details api

const moreInfo = (id) => {

    fetch('https://openapi.programming-hero.com/api/phone/${id}')
    .then(res => res.json())
    .then(data => showInfo(data.data))

}

const showInfo = (information) => {

    console.log(information);

    const infocontainer = document.getElementById('phone-details')
    
    infocontainer.innerHTML = '';

    const div = document.createElement('div');

    div.classList.add('col')

    div.innerHTML =

        <div class="card p-3 shadow-lg"> 
        {/* <img src="${information.image}" class="card-img-top img-fluid w-50 mx-auto" alt="..."> */}

            <div class="card-body">

                <p class="card-title"> <span class="fw-bold">Brand</span>: ${information.brand}</p>

                <p class="card-text"> <span class="fw-bold">Model</span> ${information.name}</p>

                <p class="card-text"><span class="fw-bold"> Chipset</span> ${information.mainFeatures.chipset}</p>

                <p class="card-text"> <span class="fw-bold"> Disply Size</span> ${information.mainFeatures.displaysize}</p>

                <p class="card-text"> <span class="fw-bold">Memory</span> : ${information.mainFeatures.memory}</p> <p class="card-text"> <span class="fw-bold">Sensor</span> : ${information.mainFeatures.sensors}</p>

                <p class="card-text"> <span class="fw-bold">Relese Date</span> : ${information.releaseDate}</p>

                <p class="text-center text-info">others Information 

                </p>

                <p class="card-text"> <span class="fw-bold">NFC</span>${information.others.NFC} </p>
                </div>
                </div>
}
