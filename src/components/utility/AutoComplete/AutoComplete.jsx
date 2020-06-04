import React, {useState} from 'react';
import styles from './AutoComplete.module.css';
import ItemImage from '../../Items/ItemImage/ItemImage';

// Explanation of Props
    // props.results: an array of results, this should be an array of objects
    // props.label: the property name of each object that should be displayed as text
    // props.filterProp: the filtering criteria for autcomplete
    // props.placeholder: the placeholder of the input array
    // props.rowFragment: A react fragment on what each row should display

const AutoComplete = props => {


    const [visible, setVisible] = useState(false);

    const [results, setResults]= useState(props.results);

    const changeResults = evt => {
        let matches = props.results.filter(result => result[props.filterProp].toLowerCase().includes(evt.target.value.toLowerCase()));
        setResults(matches);
        setVisible(true);
    }

    const handleClick = result => {
        setVisible(false);
        // props.items is an array of arrays. 
        // We need to update the last array inside the parent array for that row
        // We can take advantage of array referencing for this
        let items = [...props.items];
        let activeRow = items[props.row];
        activeRow.push(result);
        props.setItems(items);
        props.setVisible(false);
    }

    return (
        <div>
            <div><input className={styles.inputBar} onBlur={() => setVisible(false)}  onChange={evt => changeResults(evt)} type="text" placeholder={props.placeholder}/></div>
            { visible && 
                <div>
                    {results.map((result, idx) => (
                        <div key={idx}>
                            <div className={styles.results} onMouseDown={() => handleClick(result) }>
                                <div>{result[props.label]}</div>
                                < ItemImage item={result} />
                            </div>
                        </div>
                    ))}
                </div>}
        </div>
    )


}

export default AutoComplete;