import React from 'react'
import './CheckoutDish.css';
import { useStateValue } from '../StateProvider';

function CheckoutDish({image, name, price, id}) {
    const [{baske}, dispatch] = useStateValue();

    const removeFromBasket = () => {
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id
        })
    }
    return (
        <div className='checkoutDish'>
            <div className='checkoutDish__n'>
                <img className='checkoutDish__image' src={image}/>
                <div className="checkoutDish__info">
                    <p className="checkoutDish__title">{name} </p>
                    <p className="checkoutDish__price">
                        <small>$</small>
                        <strong> {price} </strong>
                    </p>
                    <button onClick={removeFromBasket} >Removeing from basket</button> 
                    {/* {!hideButton && (  <button onClick={removeFromBasket} >Remove from basket</button> )
                    } */}
                </div>

            </div>
        </div>
    )
}

export default CheckoutDish
