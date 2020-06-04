import React, {useState} from 'react';
import styles from './ItemImage.module.css';

const ItemImage = props => {

    const [showDetail, setShowDetail] = useState(false);

    return (
        <div className={styles.container}>
            <img onMouseOver={() => setShowDetail(true)} onMouseLeave={() => setShowDetail(false)} 
                src={`http://ddragon.leagueoflegends.com/cdn/10.11.1/img/${props.type}/${props.item.image.full}`} alt="" 
                />
            {showDetail && 
                <div className={styles.details}>
                    <div>{props.item.name}</div>
                    <div dangerouslySetInnerHTML={{__html: props.item.description}} />
                </div>
            }
        </div>
    )
}

export default ItemImage;