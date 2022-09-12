const projectWrapper = document.querySelector('.projects_wrapper');

projectData.forEach(projectInfo => {
    const { title, style, description, live, CodeLink } = projectInfo;
    const projectBox = document.createElement('div');
    projectBox.classList.add('project_box');
    projectBox.innerHTML = `
<div class="card w-96 bg-base-100 shadow-xl">
<div class="card-body">
    <h2 class="card-title">${title}</h2>
    <p>${style}</p>
    <p>${description}</p>
    <div class="card-actions justify-end">
        <div class="badge badge-outline">
        <a href=${live}>
        LIve
        </a>
        </div>
        <div class="badge badge-outline">
        <a href=${CodeLink}>
        Code
        </a>
        </div>
    </div>
</div>
</div>
`;

    projectWrapper.appendChild(projectBox)

})
