const projectWrapper = document.querySelector('.projects_wrapper');
document.getElementById('project_Total').innerText = projectData.length;
projectData.forEach(projectInfo => {
    const { title, Technology, description, live, CodeLink } = projectInfo;
    const projectBox = document.createElement('div');
    projectBox.classList.add('project_box');
    projectBox.innerHTML = `
<div class="card w-96 bg-base-100 shadow-xl bg-blue-100">
<div class="card-body">
    <h2 class="card-title text-blue-500">${title}</h2>
    <p>${Technology}</p>
    <p>${description}</p>
    <div class="card-actions justify-end">
        <div class="badge badge-outline">
        <a target='_blank' href=${live}>
        LIve
        </a>
        </div>
        <div class="badge badge-outline">
        <a target='_blank' href=${CodeLink}>
        Code
        </a>
        </div>
    </div>
</div>
</div>
`;

    projectWrapper.appendChild(projectBox)

})
