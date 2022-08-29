// -----> league data
const leagueDataLoad = async () => {
    const res = await fetch(`https://www.thesportsdb.com/api/v1/json/2/all_leagues.php`)
    const data = await res.json()
        .then(data => showAllLeague(data.leagues))
        .catch((err) => console.log(err))
}


leagueDataLoad()
const leagueArea = document.querySelector('.leagues_area');
// -----> show all leagues
const showAllLeague = (leagueList) => {
    leagueList.forEach(league => {
        const leaguesWrapper = document.createElement('div');
        leaguesWrapper.classList.add('leagues_wrapper');
        leaguesWrapper.innerHTML = `
        <div class="league_items_box cursor-pointer p-6 bg-rose-500 rounded h-36 transition duration-300 hover:drop-shadow-xl hover:bg-rose-600 ">
                    <h2 class="text-lg font-semibold text-white mb-2">${league.strLeague}</h2>
                    <p><strong>Sports : </strong>${league.strSport}</p>
                    <button
                     class='mt-3 bg-rose-300 py-2 px-3 rounded font-medium tracking-wide transition duration-300 hover:bg-rose-400 hover:text-white'
                     onclick={leagueDetails(${league.idLeague})}
                     >
                     Show Details
                     <button>
                </div>
        `;
        leagueArea.appendChild(leaguesWrapper);
    })

}