const dataLoad = async (api) => {
    const res = await fetch(api)
    if (!res.ok) {
        const message = res.status;
        throw new Error(message);
    }
    const data = await res.json()
    return data;
}

const infoBoxArea = document.querySelector('.information_box_area');
const div = document.createElement('div')

document.getElementById('search_btn').addEventListener('click', () => {
    const inputField = document.getElementById('input_field').value;
    const countryName = inputField.toLowerCase()
    // ---> api
    dataLoad(`https://restcountries.com/v2/name/${countryName}`)
        .then((data) => {
            div.innerHTML = `
            <div class="flag">
                    <img src=${data[0].flag} alt="">
                </div>
                <div class="info_box">
                    <p><strong>Name :  </strong> ${data[0]?.name}</p>
                    <p><strong>Official Name :  </strong> ${data[0]?.altSpellings[1]}</p>
                    <p><strong>Native :  </strong> ${data[0]?.demonym}</p>
                    <p><strong>Area :  </strong> ${data[0]?.area}</p>
                    <p><strong>Population :  </strong> ${data[0]?.population}</p>
                    <p><strong>Region :  </strong> ${data[0]?.region}</p>
                    <p><strong>Subregion :  </strong> ${data[0]?.subregion}</p>
                    <p><strong>Language :  </strong> ${data[0]?.languages[0]?.name} , ${data[0]?.languages[0]?.nativeName}</p>
                    <p><strong>Alpha Code :  </strong> ${data[0].alpha2Code}</p>
                    <p><strong>Calling Codes :  </strong> ${data[0]?.callingCodes[0]}</p>
                    <p><strong>Time-Zone :  </strong> ${data[0]?.timezones[0]}</p>
                    <p><strong>Currency :  </strong> ${data[0]?.currencies[0]?.code}(${data[0]?.currencies[0]?.symbol})(${data[0]?.currencies[0]?.name})</p>
                </div>
            `

            infoBoxArea.appendChild(div)
        })
        .catch((err) => {
            console.log(err)
        })

})