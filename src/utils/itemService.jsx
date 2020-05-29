export default {
    getItems
}

function getItems() {
    return fetch(`http://ddragon.leagueoflegends.com/cdn/10.11.1/data/en_US/item.json`).then(res => res.json());
}