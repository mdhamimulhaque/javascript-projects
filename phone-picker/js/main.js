
// -----> load data
const dataLoad = async () => {
    try {
        const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=iphone`)
        const data = await res.json()
        displayProduct(data.data)
    } catch (err) {
        console.log(err)
    }
}

dataLoad()
// -----> product display
const productRow = document.getElementById('phone_row');
const displayProduct = (data) => {
    console.log(data)
    console.log(data.slug)
    data.forEach(product => {
        const productCol = document.createElement('div');
        productCol.classList.add('col-md-6', 'col-lg-4', 'col-xl-3');
        productCol.innerHTML = `
    <div class="phone_wrapper">
                            <div class="card">
                                <img src="${product.image}" class="card-img-top p-4" alt="img">
                                <div class="card-body">
                                    <h5 class="card-title d-flex justify-content-between">${product.phone_name}  
                                    <span class="card-text badge bg-secondary py-2 ">${product.brand}</span>
                                    </h5>                       
                                    <a href="#" class="btn btn-primary d-block fw-semibold">Show Details</a>
                                </div>
                            </div>
                        </div>
    `;
        productRow.appendChild(productCol)
    })
}