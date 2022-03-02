const searchPhones = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    // clear data
    searchField.value = '';

    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displaySearchResult(data.data.slice(0, 20)))

}
searchPhones();
const displaySearchResult = phones => {
    const searchResult = document.getElementById('src-result');
    searchResult.textContent = '';
   
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


const loadMore = (id) => {
    const url = `https://openapi.programming-hero.com/api/phone/${id}`;
    fetch(url)
        .then(res => res.json())
        .then(data => details(data.data));
}

const details = phone => {
    const phoneDetails = document.getElementById('phone-details');
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
    <img src="${phone.image}" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">${phone.brand}</h5>
        <p class="card-text">${phone.chipset}</p>
        
        
    </div>
    `;
    phoneDetails.appendChild(div);
}