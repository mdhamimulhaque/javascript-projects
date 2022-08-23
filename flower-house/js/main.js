// -----> flowers card <-----
const displayFlowers = (flower) => {
    const flowerWrapper = document.querySelector('.flower_wrapper');
    const stringFlowersData = JSON.stringify(flower);
    const colum = document.createElement('div');
    colum.classList.add('col-md-6', 'col-lg-4', 'col-xl-3');
    colum.innerHTML = `
<div class="card mb-4">
<img src=${flower.img}
    class="card-img-top img-fluid" alt="img">
<div class="card-body">
    <h5 class="card-title">${flower.name}</h5>
    <p class="card-text">${flower.info}</p>
    <div class="btn_box d-flex justify-content-between">
        <button href="#" class="common_btn" data-bs-toggle="modal" data-bs-target="#info" onclick='modalFunction(${stringFlowersData})' >Details</button>
        <button type="button" class="order_btn" onclick="alert('Sorry!! Our shop is under construction...')" >Order Now</button>
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
flowersData(allFlowersData)


// -----> modal <-----

const modalFunction = (stringFlowersData) => {
    const modalBody = document.querySelector('.modal-body');
    modalBody.innerHTML = `
    <div class="card">
     <img src=${stringFlowersData.img} class="card-img-top" alt="...">
       <div class="card-body">
       <h5 class="card-title">${stringFlowersData.name}</h5>
       <p class="card-text">${stringFlowersData.info}</p>
       <div class="price_box d-flex justify-content-between">
       <span>Quantity : ${stringFlowersData.quantity}</span>
       <span>Price : $${stringFlowersData.price}</span>
       </div>
      </div>
    </div>
    `;
}

// -----> search functionality <-----
document.getElementById('form').addEventListener('submit', (e) => {
    e.preventDefault();
    const inputValue = document.getElementById('inputField').value;
    const allFlowersDataLength = allFlowersData.length;
    for (let i = 0; i < allFlowersDataLength; i++) {
        const singleFlower = allFlowersData[i];
        const flowerName = singleFlower.name
        if (inputValue.toLowerCase() == flowerName.toLowerCase()) {
            document.querySelector('.flower_wrapper').innerHTML = '';
            displayFlowers(singleFlower);
            return;
        }
    }
})