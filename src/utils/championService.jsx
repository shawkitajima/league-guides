export default {
    getAllChampions,
    championDetail,
}

function getAllChampions() {
    return fetch('http://ddragon.leagueoflegends.com/cdn/10.10.4/data/en_US/champion.json').then(res => res.json());
}

function championDetail(champ) {
    return fetch(`http://ddragon.leagueoflegends.com/cdn/10.10.4/data/en_US/champion/${champ}.json`).then(res => res.json());
}