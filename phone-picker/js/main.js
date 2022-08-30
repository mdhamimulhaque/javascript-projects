// ---> input value
document.getElementById('search_btn').addEventListener('click', () => {
    const inputValue = document.getElementById('input_field').value;
    dataLoad(inputValue)
})


// -----> load data
const dataLoad = async (inputValue) => {
    try {
        const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=oppo`)
        const data = await res.json()
            .then(data => displayProduct(data.data))

    } catch (err) {
        console.log(err)
    }
}


// -----> product display
const productRow = document.getElementById('phone_row');
const displayProduct = (data) => {
    data.forEach(product => {
        const productCol = document.createElement('div');
        productCol.classList.add('col-md-6', 'col-lg-4', 'col-xl-3');
        productCol.innerHTML = `
                        <div class="phone_wrapper mb-4">
                            <div class="card">
                                <img src="${product.image}" class="card-img-top p-4" alt="img">
                                <div class="card-body">
                                    <h5 class="card-title d-flex justify-content-between">${product.phone_name}  
                                    <span class="card-text badge bg-secondary py-2 ">${product.brand}</span>
                                    </h5>                       
                                    <a href="#" class="btn btn-primary d-block fw-semibold"
                                    onclick="productDetailsDataLoad('${product.slug}')"
                                    data-bs-toggle="modal" data-bs-target="#productDetails"
                                    >
                                    Show Details
                                    </a>
                                </div>
                            </div>
                        </div>
    `;
        productRow.appendChild(productCol)
    })
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


// -----> show product details
const modalTitle = document.getElementById("model_title");
const cardBody = document.querySelector(".modal-body");

const productDetails = (productData) => {
    const seasons = productData.mainFeatures.sensors
    // --->modal title
    modalTitle.innerText = `${productData.name}`;
    // ---> modal Body
    cardBody.innerHTML = `
        <div class="card">
            <img src="${productData.image}" class="card-img-top" alt="img">
            <div class="card-body">
                <h4 class="card-title">${productData.brand}</h4>
                <p><strong>Release Date :</strong> ${productData.releaseDate}</p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item"></li>
                <li class="list-group-item"><strong>Chip :</strong> ${productData.mainFeatures.chipSet}</li>
                <li class="list-group-item"><strong>Memory :</strong> ${productData.mainFeatures.memory}</li>
                <li class="list-group-item"><strong>Bluetooth :</strong> ${productData.others.Bluetooth}</li>
                <li class="list-group-item"><strong>USB :</strong> ${productData.others.USB}</li>
                
            </ul>
        </div>
    `
}
