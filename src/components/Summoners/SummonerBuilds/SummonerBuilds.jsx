import React, {useState} from 'react';
import styles from '../../Items/ItemBuilds/ItemBuilds.module.css';

import ItemPicker from '../../Items/ItemPicker/ItemPicker';
import ItemImage from '../../Items/ItemImage/ItemImage'

const SummonerBuilds = props => {

    const [summoners, setSummoners] = useState([[]]);

    const summonersArray = Object.entries(props.summoners).map(([key, value]) => (value));

    return (
        <div className={styles.container}>
            <div>Recommended Summoner Spells</div>
            <div className={styles.itemSet}>
                <div>
                {/* We need to loop through "rows" of starter items */}
                    {summoners.map((row, idx) => (
                        <div key={idx} className={styles.row}>
                            {row.map((item, itemIdx) => (
                                <div key={itemIdx}><ItemImage item={item} type={'spell'}/></div>
                            ))}
                            <ItemPicker itemsArray={summonersArray} setItems={setSummoners} items={summoners} row={idx} type={'spell'} />
                            {/* If this is the last row */}
                            {summoners.length === idx + 1 && <div onClick={() => setSummoners([...summoners, []])}>Add another row</div>}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default SummonerBuilds;