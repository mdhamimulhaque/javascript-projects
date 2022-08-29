


// -----> league data
const leagueDataLoad = async () => {
    const searchInputValue = document.getElementById('search_Input_Field').value;
    const res = await fetch(`https://www.thesportsdb.com/api/v1/json/2/search_all_leagues.php?c=${searchInputValue}`)
    const data = await res.json()
        .then(data => showAllLeague(data.countries))
        .catch((err) => console.log(err))
}



const leagueArea = document.querySelector('.leagues_area');
// -----> show all leagues
const showAllLeague = (countries) => {
    countries.forEach(country => {
        const leaguesWrapper = document.createElement('div');
        leaguesWrapper.classList.add('leagues_wrapper');
        leaguesWrapper.innerHTML = `
        <div
        class="league_items_box cursor-pointer p-6 bg-rose-600 rounded transition duration-300 hover:drop-shadow-xl hover:bg-rose-400 "
        >
        <img src='${country.strBadge}' />
        <h2 class="text-lg font-semibold text-white mb-2"> ${country.strLeague}</h2>
        <p><strong>Gender : </strong>${country.strGender}</p>
        <button
            class='mt-3 bg-rose-300 py-2 px-3 rounded font-medium tracking-wide transition duration-300 hover:bg-rose-600 hover:text-white'
            onclick={leagueTeamList('${country.strCountry}')}
            >
            Show Details
            <button>
       </div>
        `;
        leagueArea.appendChild(leaguesWrapper);
    })

}

// -----> show all team list

const leagueTeamList = async (country) => {
    const res = await fetch(`https://www.thesportsdb.com/api/v1/json/2/search_all_teams.php?s=Soccer&c=${country}`)
    const data = await res.json()
        .then(data => showTeams(data.teams))
        .catch((err) => { console.log(err) })
}

const teamContainer = document.querySelector('.team_container');
const teamInfoContainer = document.querySelector('.team_info_container');
const teamWrapper = document.querySelector('.team_wrapper');
const teamsArea = document.querySelector('.teams_area');

// -----> show all teams
const showTeams = (teamsData) => {
    // console.log(teamsData)
    leagueArea.innerHTML = "";
    teamsArea.classList.remove('hidden');
    // ---> team box create
    teamsData.forEach(team => {
        console.log(team)

        const teamBoxArea = document.createElement('div');
        teamBoxArea.classList.add('team_box_area');
        teamBoxArea.innerHTML = `
                         <div class="team_box p-6 bg-slate-800 rounded transition duration-300 hover:drop-shadow-xl  ">
                                <img src="${team.strTeamBadge}" alt="">
                                <h2 class="text-2xl text-rose-600 font-semibold mb-2"><span>Team : </span>${team.strTeam}</h2>
                                <p class="text-white">${team.strDescriptionEN.slice(0, 200)}...</p>
                                <button
                                    class="mt-3 bg-rose-300 py-2 px-3 rounded font-medium tracking-wide transition duration-300 hover:bg-rose-600 hover:text-white"
                                    >
                                    Team Details
                                </button>
                            </div>
        `;
        teamWrapper.appendChild(teamBoxArea);
    })

}
