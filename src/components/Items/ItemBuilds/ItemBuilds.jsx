import React, {useState} from 'react';
import styles from './ItemBuilds.module.css';

import ItemPicker from '../ItemPicker/ItemPicker';
import ItemImage from '../ItemImage/ItemImage';

const ItemBuilds = props => {

    const [starterItems, setStarterItems] = useState([[]]);
    const [recItems, setRecItems] = useState([[]]);
    const [boots, setBoots] = useState([[]]);

    const itemsArray = Object.entries(props.items).map(([key, value]) => (value));

    const handleItemAdd = (type, row, idx) => {

    }

    return (
        <div className={styles.container}>
            
            <div>Recommended Item Builds</div>
            <div className={styles.itemSet}>
                <div>Starter Items</div>
                <div>
                {/* We need to loop through "rows" of starter items */}
                    {starterItems.map((row, idx) => (
                        <div key={idx} className={styles.row}>
                            {row.map((item, itemIdx) => (
                                <div key={itemIdx}><ItemImage item={item}/></div>
                            ))}
                            <ItemPicker itemsArray={itemsArray} setItems={setStarterItems} items={starterItems} row={idx} />
                            {/* If this is the last row */}
                            {starterItems.length === idx + 1 && <div onClick={() => setStarterItems([...starterItems, []])}>Add another row</div>}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ItemBuilds;