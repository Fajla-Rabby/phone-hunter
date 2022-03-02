const searchPhones = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    // clear data
    // searchField.value = '';

    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
        fetch(url)
            .then(res => res.json())
            .then(data => displaySearchResult(data.data[0]));
            
}
// searchPhones();
const displaySearchResult = phones => {
    const searchResult = document.getElementById('search-result');
    // searchResult.textContent = '';
    // if (phones.length == 0) {
    //     // show no result found;
    // }
    phones.data.forEach(data => {
        console.log(data);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div onclick="loadPhoneDetail(${data.slug})" class="card h-100">
            <img src="${data.image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${data.phone_name}</h5>
                
            </div>
        </div>
        `;
        searchResult.appendChild(div);
    })
}

// <p class="card-text">${phone.strInstructions.slice(0, 200)}</p>