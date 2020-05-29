import React, {useState} from 'react';
import styles from './ItemImage.module.css';

const ItemImage = props => {

    const [showDetail, setShowDetail] = useState(false);

    return (
        <div className={styles.container}>
            {showDetail && 
                <div className={styles.details}>
                    <div>{props.item.name}</div>
                    <div>{props.item.plaintext}</div>
                </div>}
            <img onMouseOver={() => setShowDetail(true)} onMouseLeave={() => setShowDetail(false)} 
                src={`http://ddragon.leagueoflegends.com/cdn/10.11.1/img/item/${props.item.image.full}`} alt="" 
            />
        </div>
    )
}

export default ItemImage;