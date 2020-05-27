export default {
    getAllChampions,
}

function getAllChampions() {
    return fetch('http://ddragon.leagueoflegends.com/cdn/10.10.4/data/en_US/champion.json').then(res => res.json());
}