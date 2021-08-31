loadCountries=()=>{
fetch('https://restcountries.eu/rest/v2/all')
.then(res=>res.json())
.then(data=>displayCountries(data))
}

loadCountries()

displayCountries= countries =>{
    
    const couuntryId =document.getElementById('country');
    countries.map(country=>{
        const div = document.createElement('div');
        div.classList.add('country')
        div.innerHTML= `
            <h4>${country.name} </h4>
            <p>${country.capital}</p>
            <p>${country.population}</p>
            <p>${country.translations.ja}</p>
            <p> ${country.translations.fa}</p>
            <button onClick="countryDetail('${country.name}')" class='btn btn-primary'>details</button>
        `;
        couuntryId.appendChild(div)
    })

}


countryDetail = (name)=>{
    const url = `https://restcountries.eu/rest/v2/name/${name}`;

    fetch(url)
    .then(res=>res.json())
    .then(data=> displayDetail(data[0]))
}


displayDetail = (country)=>{
    console.log(country);
    const detail =document.getElementById('detail');
    detail.innerHTML =`
        <h3>Name: ${country.name}</h3>
        <img class ='images' src ='${country.flag}'>
        
    `

}