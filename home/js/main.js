const projectWrapper = document.querySelector('.projects_wrapper');
const projectBox = document.createElement('div');
projectBox.classList.add('project_box');
projectBox.innerHTML = `
<div class="card w-96 bg-base-100 shadow-xl">
<div class="card-body">
    <h2 class="card-title">Shoes!</h2>
    <p>HTML5 || CSS3 || Bootstrap || tailwind css</p>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo, quas!</p>
    <div class="card-actions justify-end">
        <div class="badge badge-outline">Live</div>
        <div class="badge badge-outline">Code</div>
    </div>
</div>
</div>
`;

projectWrapper.appendChild(projectBox)