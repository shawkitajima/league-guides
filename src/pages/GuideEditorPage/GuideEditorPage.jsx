import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import championService from '../../utils/championService';
import itemService from '../../utils/itemService';
import ItemBuilds from '../../components/ItemBuilds/ItemBuilds';

const GuideEditorPage = props => {
    const {champ} = useParams();
    const [details, setDetails] = useState({});
    const [items, SetItems] = useState({});
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        itemService.getItems().then(res => SetItems(res.data));
        championService.championDetail(champ).then(res => {
            setDetails(res.data[champ])
            setLoaded(true);
        });
    }, [champ])

    return (
        loaded ? (
            <div>
                <h2>Hello World!</h2>
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