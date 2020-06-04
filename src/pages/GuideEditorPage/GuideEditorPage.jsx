import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import championService from '../../utils/championService';
import itemService from '../../utils/itemService';
import ItemBuilds from '../../components/Items/ItemBuilds/ItemBuilds';
import SummonerBuilds from '../../components/Summoners/SummonerBuilds/SummonerBuilds';
import SpellOrder from '../../components/Spells/SpellOrder/SpellOrder';

const GuideEditorPage = props => {
    const {champ} = useParams();
    const [details, setDetails] = useState({});
    const [summoners, setSummoners] = useState({});
    const [items, SetItems] = useState({});
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        itemService.getSummoners().then(res => setSummoners(res.data));
        itemService.getItems().then(res => SetItems(res.data));
        championService.championDetail(champ).then(res => {
            setDetails(res.data[champ])
            setLoaded(true);
        });
    }, [champ])

    return (
        loaded ? (
            <div>
                <h2>{champ}</h2>
                <SpellOrder details={details} />
                <SummonerBuilds summoners={summoners}/>
                <ItemBuilds items={items}/>
            </div>
        ) : (
            <div>
                <h2>Loading</h2>
            </div>
        )
    )
}

export default GuideEditorPage;