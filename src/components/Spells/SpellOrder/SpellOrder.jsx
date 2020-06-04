import React from 'react';
import SpellImage from '../SpellImage/SpellImage';

const SpellOrder = props => {
    return (
        <div>
            <SpellImage spell={props.details.spells[0]} idx={0} />
            <SpellImage spell={props.details.spells[1]} idx={1} />
            <SpellImage spell={props.details.spells[2]} idx={2} />
        </div>
    )
}

export default SpellOrder;