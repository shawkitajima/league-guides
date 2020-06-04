import React, {useState} from 'react';
import AutoComplete from '../../utility/AutoComplete/AutoComplete';
import styles from './ItemPicker.module.css'

import AddBoxIcon from '@material-ui/icons/AddBox';


const ItemPicker = props => {
    const [visible, setVisible] = useState(false);

    return (
        <div className={styles.container}>
            {visible && (
                <div className={styles.autoComplete}>
                    <AutoComplete 
                    results={props.itemsArray} 
                    label={"name"} 
                    filterProp={"name"} 
                    placeholder={"choose item"}
                    setVisible={setVisible}
                    setItems={props.setItems}
                    items={props.items}
                    row={props.row}
                    type={props.type}
                    />
                </div>
            )}
            <div onClick={() => setVisible(!visible)}>
                < AddBoxIcon style={{fontSize: 20}} />
            </div>
        </div>
    )
}

export default ItemPicker;