import React, {useState, useEffect} from 'react'
import {Link, useParams} from 'react-router-dom';
import championService from '../../utils/championService';
import styles from './ChampionDetail.module.css';

const ChampionDetail = () => {
    let {champ} = useParams();
    const [champion, setChampion] = useState({});
    const [loaded, setLoaded] = useState(false);
    const [splashIndex, setSplashIndex] = useState(0);

    const handleSplash = () => {
        if (splashIndex >= champion.skins.length - 1) {
            setSplashIndex(0)
        } else {
            setSplashIndex(splashIndex + 1)
        }
    }

    useEffect(() => {
        championService.championDetail(champ).then(res => {
            setChampion(res.data[champ]);
            setLoaded(true);
        })
    }, [])

    return (
        loaded ? (
            <div>
                <img onClick={() => handleSplash()} src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champ}_${champion.skins[splashIndex].num}.jpg`} alt=""/>
                <h1>{champion.skins[splashIndex].name}</h1>
            </div>
        ) : (
            <h2>Fetching</h2>
        )
    )
}

export default ChampionDetail;