import React, {useState, useEffect} from 'react'
import {Link, useParams} from 'react-router-dom';
import championService from '../../utils/championService';
import styles from './ChampionDetail.module.css';

const ChampionDetail = () => {
    let {champ} = useParams();
    const [champion, setChampion] = useState({});
    const [loaded, setLoaded] = useState(false);
    const [splashIndex, setSplashIndex] = useState(0);

    useEffect(() => {
        championService.championDetail(champ).then(res => {
            setChampion(res.data[champ]);
            setLoaded(true);
        })
    }, [champ])

    return (
        loaded ? (
            <div>
                <div className={styles.splash}>
                    <img src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champ}_${champion.skins[splashIndex].num}.jpg`} alt=""/>
                    <div>
                        {champion.skins.map((skin, idx) => (
                            <div key={idx} style={{fontWeight: idx === splashIndex && 800}} onClick={() => setSplashIndex(idx)}>
                                <img className={styles.miniSplash} src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champ}_${champion.skins[idx].num}.jpg`} alt=""/>
                                <div>{skin.name !== 'default' ? (<div>{skin.name}</div>) : (<div>{champ}</div>) }</div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className={styles.lore}>
                    {champion.lore}
                </div>
                <div className={styles.info}>
                    <div>{champion.tags.join(', ')}</div>
                </div>
                <div className={styles.spells}>
                    <div>
                        <img src={`http://ddragon.leagueoflegends.com/cdn/10.10.3216176/img/passive/${champion.passive.image.full}`} alt=""/>
                        <div>
                            <div>Passive: {champion.passive.name}</div>
                            <div>{champion.passive.description}</div>
                        </div>
                    </div>
                    {champion.spells.map((spell, idx) => (
                        <div key={idx}>
                            <img src={`http://ddragon.leagueoflegends.com/cdn/10.10.3216176/img/spell/${spell.image.full}`} alt=""/>
                            <div>
                                <div>{spell.name}</div>
                                <div>{spell.description}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        ) : (
            <h2>Fetching</h2>
        )
    )
}

export default ChampionDetail;