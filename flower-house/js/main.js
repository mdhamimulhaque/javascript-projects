const displayFlowers = () => {
    const flowerWrapper = document.querySelector('.flower_wrapper');
    const colum = document.createElement('div');
    colum.classList.add('col-md-6', 'col-lg-4', 'col-xl-3');
    colum.innerHTML = `
<div class="card mb-4">
<img src="https://images.unsplash.com/photo-1518931479438-62470470be9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1112&q=80"
    class="card-img-top img-fluid" alt="img">
<div class="card-body">
    <h5 class="card-title">Rose</h5>
    <p class="card-text">Lorem ipsum dolor sit amet sdff sikds kas, adipisicing elit.
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


displayFlowers();
displayFlowers();
displayFlowers();
displayFlowers();
displayFlowers();
displayFlowers();
displayFlowers();
