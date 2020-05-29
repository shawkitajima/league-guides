import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import ItemImage from '../ItemImage/ItemImage';

const ItemPicker = props => {
    return (
        <Autocomplete
            id="country-select-demo"
            style={{ width: 300 }}
            options={props.itemsArray}
            autoHighlight
            getOptionLabel={(option) => option.name}
            renderOption={(option) => (
            <React.Fragment>
                <div>
                    <div>{option.name}</div>
                    <ItemImage item={option} />
                </div>
            </React.Fragment>
            )}
            renderInput={(params) => (
            <TextField
                {...params}
                label="Choose an item"
                variant="outlined"
                inputProps={{
                ...params.inputProps,
                autoComplete: 'new-password', // disable autocomplete and autofill
                }}
            />
            )}
        />
    )
}

export default ItemPicker;