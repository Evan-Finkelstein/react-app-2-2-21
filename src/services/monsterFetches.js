
export const getMonsters = () => {
    return fetch('https://api.open5e.com/monsters/?limit=12&ordering=-img_main')
        .then(res => res.json());
    // .then(json => json.results);
};

export const getMonster = (name) => {
    return fetch(`https://api.open5e.com/search/?text=${name}`)
        .then(res => res.json());
    // .then(json => json.results);
};
