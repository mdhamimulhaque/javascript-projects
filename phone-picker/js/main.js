const productRow = document.getElementById('phone_row');

const searchDataFunctionality = (productLimit) => {
    // ---> spinner show 
    dataLoading(true)
    const inputValue = document.getElementById('input_field').value;
    dataLoad(inputValue, productLimit)
}


// -----> input value show by button click
document.getElementById('search_btn').addEventListener('click', () => {
    productRow.innerHTML = '';
    searchDataFunctionality(10)
})
// -----> input value show by enter press
document.getElementById('input_field').addEventListener('keypress', (e) => {
    if (e.key === "Enter") {
        searchDataFunctionality(10)
    }

})


// -----> load data
const dataLoad = async (inputValue, productLimit) => {
    try {
        const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${inputValue}`)
        const data = await res.json()
            .then(data => displayProduct(data.data, productLimit))

    } catch (err) {
        console.log(err)
    }
}


// -----> product display

const displayProduct = (data, productLimit) => {
    const ShowAllBtnWrapper = document.getElementById('show_all_btn_wrapper');
    // ---> data slice
    if (productLimit && data.length > 10) {
        data = data.slice(0, 10);
        ShowAllBtnWrapper.classList.remove('d-none');
    } else {
        ShowAllBtnWrapper.classList.add('d-none')
    }

    // --->search error msg
    const searchErrorMsg = document.querySelector('.search_msg');
    const default_text_area = document.querySelector('.default_text_area');
    if (data.length === 0) {
        searchErrorMsg.classList.remove('d-none');
        default_text_area.classList.add('d-none');
    } else {
        searchErrorMsg.classList.add('d-none');
        default_text_area.classList.add('d-none');
    }

    data.forEach(product => {
        const productCol = document.createElement('div');
        productCol.classList.add('col-md-6', 'col-lg-4', 'col-xl-3');
        productCol.innerHTML = `
                        <div class="phone_wrapper my-4">
                            <div class="card">
                                <img src="${product.image}" class="card-img-top p-4" alt="img">
                                <div class="card-body">
                                    <h5 class="card-title d-flex justify-content-between">${product.phone_name}  
                                    <span class="card-text badge bg-secondary py-2 ">${product.brand}</span>
                                    </h5>                       
                                    <a href="#" class="btn btn-info text-white d-block fw-semibold mt-2"
                                    onclick="productDetailsDataLoad('${product.slug}')"
                                    data-bs-toggle="modal" data-bs-target="#productDetails"
                                    >
                                    Show Details
                                    </a>
                                </div>
                            </div>
                        </div>
    `;
        productRow.appendChild(productCol);
    })
    // ---> spinner hide
    dataLoading(false)
}

// ----->Load product details data
const productDetailsDataLoad = async (id) => {
    try {
        const res = await fetch(`https://openapi.programming-hero.com/api/phone/${id}`);
        const data = res.json()
            .then(data => {
                productDetails(data.data)
            })
    } catch (err) {
        console.log(err)
    }


}


// -----> show product details with modal
const modalTitle = document.getElementById("model_title");
const cardBody = document.querySelector(".modal-body");

const productDetails = (productData) => {
    const seasons = productData.mainFeatures.sensors;
    // --->modal title
    modalTitle.innerText = `${productData.name}`;
    // ---> modal Body
    cardBody.innerHTML = `
        <div class="card">
            <div class="mx-auto">
            <img src="${productData.image}" class="card-img-top  pt-4" alt="img"></div>
            <div class="card-body">
                <h4 class="card-title">${productData.brand}</h4>
                <p><strong>Release Date :</strong> ${productData.releaseDate}</p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item"></li>
                <li class="list-group-item"><strong>Chip :</strong> ${productData?.mainFeatures?.chipSet ? productData.mainFeatures.chipSet : 'No info text-whitermation available'}</li>
                <li class="list-group-item"><strong>Memory :</strong> ${productData?.mainFeatures.memory ? productData.mainFeatures.memory : 'No info text-whitermation available'}</li>
                <li class="list-group-item"><strong>Bluetooth :</strong> ${productData?.others?.Bluetooth ? productData.others.Bluetooth : 'No info text-whitermation available'}</li>
                <li class="list-group-item"><strong>USB :</strong> ${productData?.others?.USB ? productData.others.USB : 'No info text-whitermation available'}</li>

                <li class="list-group-item"><strong>seasons : </strong>${seasons.map(ss => ss)}</li>
                
            </ul>
        </div>
    `
}


// ------>Loading spinner
const dataLoading = isLoading => {
    const loadingSpinner = document.getElementById('load_spinner');
    if (isLoading) {
        loadingSpinner.classList.remove('d-none');
    } else {
        loadingSpinner.classList.add('d-none');
    }
}

// -----> show all data 
document.getElementById('show_all_btn').addEventListener('click', () => {
    searchDataFunctionality()
})