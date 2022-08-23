// -----> flowers card <-----
const displayFlowers = (flower) => {
    const flowerWrapper = document.querySelector('.flower_wrapper');
    const colum = document.createElement('div');
    colum.classList.add('col-md-6', 'col-lg-4', 'col-xl-3');
    colum.innerHTML = `
<div class="card mb-4">
<img src=${flower.img}
    class="card-img-top img-fluid" alt="img">
<div class="card-body">
    <h5 class="card-title">${flower.name}</h5>
    <p class="card-text">${flower.info}
    </p>
    <div class="btn_box d-flex justify-content-between">
        <button href="#" class="common_btn ">Details</button>
        <button href="#" class="order_btn">Order</button>
    </div>
</div>
</div>
`;
    flowerWrapper.appendChild(colum);
}




// -----> flowers data <-----
const flowersData = (flowers) => {
    for (let flower of flowers) {
        displayFlowers(flower);
    }
}
flowersData(flowers)