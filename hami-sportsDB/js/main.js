


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
        class="league_items_box min-h-96 cursor-pointer p-6 bg-rose-600 rounded transition duration-300 hover:drop-shadow-xl hover:bg-rose-400 "
        >
        <img class='w-3/5 mx-auto' src='${country.strBadge}' />
        <h2 class="text-lg font-semibold text-white mb-2"> ${country.strLeague}</h2>
        <p><strong>Gender : </strong>${country.strGender}</p>
        <button
            class='mt-3 bg-rose-300 py-2 px-3 rounded font-medium tracking-wide transition duration-300 hover:bg-rose-600 hover:text-white'
            onclick="leagueTeamList('${country.strCountry}')"
            >
            Show All Teams
            <button>
       </div>
        `;
        leagueArea.appendChild(leaguesWrapper);
    })
    const textBox = document.querySelector('.text_box');
    textBox.classList.add('hidden')

}

// -----> show all team list

const leagueTeamList = async (country) => {
    const res = await fetch(`https://www.thesportsdb.com/api/v1/json/2/search_all_teams.php?s=Soccer&c=${country}`)
    const data = await res.json()
        .then(data => showTeams(data.teams))
        .catch((err) => { console.log(err) })
}

const teamContainer = document.querySelector('.team_container');
const teamWrapper = document.querySelector('.team_wrapper');
const teamsArea = document.querySelector('.teams_area');

// -----> show all teams
const showTeams = (teamsData) => {
    leagueArea.innerHTML = "";
    teamsArea.classList.remove('hidden');
    // ---> team box create
    teamsData.forEach(team => {
        // console.log(team)
        const teamData = JSON.stringify(team);
        const teamBoxArea = document.createElement('div');
        teamBoxArea.classList.add('team_box_area');
        teamBoxArea.innerHTML = `
                         <div class="team_box p-6 bg-slate-800 rounded transition duration-300 hover:drop-shadow-xl  ">
                                <img class='w-3/5 mx-auto' src="${team?.strTeamBadge}" alt="">
                                <h2 class="text-2xl text-rose-600 font-semibold my-2"><span>Team : </span>${team?.strTeam}</h2>
                                <p class="text-white">${team?.strDescriptionEN.slice(0, 200)}...</p>
                                <p class='text-white'>${team?.strLeague}</p>
                                <button
                                    class="mt-3 bg-rose-300 py-2 px-3 rounded font-medium tracking-wide transition duration-300 hover:bg-rose-600 hover:text-white"
                                   onclick='teamInfoDisplay(${teamData})'
                                    >
                                    Team Details
                                </button>
                            </div>
        `;
        teamWrapper.appendChild(teamBoxArea);
    })

}


// --------------> team data load


const teamInfoWrapper = document.querySelector('.team_info_wrapper');

// -----> team information display
const teamInfoDisplay = (teamData) => {
    console.log(teamData)
    teamInfoWrapper.innerHTML = '';
    const teamInfoBox = document.createElement('div');
    teamInfoBox.classList.add('team_info_box');
    teamInfoBox.innerHTML = `
                       <img src=${teamData.strTeam} alt="">
                        <h2 class="text-2xl"><strong>Team : </strong> ${teamData.strTeam}</h2>
                        <p><strong>description : </strong>${teamData.strDescriptionEN}</p>

                        <p><strong>League : </strong>${teamData.strLeague}</p>
                        <p><strong>Stadium : </strong>${teamData.strStadium}</p>
                        <p><strong>Stadium Description : </strong>${teamData.strStadiumDescription}</p>
    `;

    teamInfoWrapper.appendChild(teamInfoBox)

}