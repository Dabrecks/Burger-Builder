import React, {Component} from 'react';
import Auxiliaire from '../../../hoc/Auxiliaire/Auxiliaire';
import Button from '../../UI/Button/Button';


class OrderSummary extends Component {
    componentWillUpdate() {
        console.log('[OrderSummary] WillUpdate');
    }
    render () {
        const ingredientSummary = Object.keys(this.props.ingredients)
        .map( igKey => {
            return(
                <li key={igKey}>
                    <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {this.props.ingredients[igKey]}
                </li>);
        });

       return (
        <Auxiliaire>
            <h3>Votre commande</h3>
            <p>Hamburger délicieux avec les ingrédients suivants:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total: {this.props.price.toFixed(2)}$</strong></p>
            <p>Passez à la caisse?</p>
            <Button btnType="Danger" clicked={this.props.purchaseCancelled}>ANNULER</Button>
            <Button btnType="Success" clicked={this.props.purchaseContinued}>CONTINUEZ</Button>
        </Auxiliaire>
       ); 
    }
}

export default OrderSummary;