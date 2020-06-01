import React, {useState} from 'react';
import styles from './ItemBuilds.module.css';

import ItemPicker from '../ItemPicker/ItemPicker';

import AddBoxIcon from '@material-ui/icons/AddBox';

const ItemBuilds = props => {

    const [starterItems, setStarterItems] = useState([['boots']]);
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
                                <div key={itemIdx}>Item</div>
                            ))}
                            <ItemPicker itemsArray={itemsArray} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ItemBuilds;