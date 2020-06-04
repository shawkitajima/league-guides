import React from 'react';
import styles from './SpellImage.module.css';

const SpellImage = props => {

    const spellButtons = ['Q', 'W', 'E', 'R'];

    return (
        <div className={styles.container}>
            <div className={styles.box}>
                <div className={styles.spellButton}>{spellButtons[props.idx]}</div>
                <img src={`http://ddragon.leagueoflegends.com/cdn/10.11.1/img/spell/${props.spell.image.full}`} alt=""/>
            </div>
        </div>
    )
}

export default SpellImage;