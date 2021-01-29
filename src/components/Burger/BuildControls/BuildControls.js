import React from 'react';
import BurgerBuilder from '../../../containers/BurgerBuilder/BurgerBuilder';
import style from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl'

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'},
    
];



const buildControls =(props)=> {
    return(
        <div className = {style.BuildControls}>
            <p>Current Price: <strong>{props.price.toFixed(2)}</strong> </p>
            {controls.map(ctr => (
                <BuildControl 
                    key={ctr.label} 
                    label={ctr.label}
                    added={() => props.ingredientAdded(ctr.type)}
                    removed={() => props.ingredientRemoved(ctr.type)} 
                    disabled={props.disabled[ctr]}
                    />
            ))}
            <button 
            className={style.OrderButton}
            disabled={!props.purchasable}>ORDER NOW</button>
        </div>
        
    )
};

export default buildControls;