import React from 'react';
import styles from './ChampionOverview.module.css';

const ChampionOverview = props => {
    return (
        <div className={styles.container}>
            <img src={`http://ddragon.leagueoflegends.com/cdn/10.10.4/img/champion/${props.champion.image.full}`} alt="sorry"/>
            <div>
                <div>{props.champion.name}</div>
                <div>{props.champion.title}</div>
            </div>
        </div>
    )
}

export default ChampionOverview;