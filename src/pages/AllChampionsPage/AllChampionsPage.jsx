import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import championService from '../../utils/championService';
import styles from './AllChampionsPage.module.css'


import ChampionOverview from '../../components/ChampionOverview/ChampionOverview';


const AllChampionsPage = () => {
    const [champions, setChampions] = useState({});
    const [loaded, setLoaded] = useState(false);
    
    useEffect(() => {
        championService.getAllChampions().then(res => {
            setChampions(res.data)
            setLoaded(true);
        });
    }, [])

    return (
        <div>
            {loaded ? (
                <div className={styles.container}>
                    {Object.keys(champions).map((champ, idx) => (
                        <div key={idx} className={styles.overview}>
                            <Link className={styles.link} to={`/${champ}`}><ChampionOverview champion={champions[champ]} /></Link>
                        </div>
                    ))}
                </div>
                ) : (
                <div>Loading</div>
            )}
        </div>
    )
}

export default AllChampionsPage