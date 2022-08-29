


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
    console.log(country)
    const res = await fetch(`https://www.thesportsdb.com/api/v1/json/2/search_all_teams.php?s=Soccer&c=${country}`)
    const data = await res.json()
        .then(data => console.log(data.teams))
        .catch((err) => { console.log(err) })
}
