import React from 'react'
import './Dish.css';
import { useStateValue } from '../StateProvider';

function Dish({price, name, image,id}) {
    const [{basket}, dispatch] = useStateValue();
    const handleClick = event => {
        dispatch({
            type: "ADD_TO_BASKET",
            item:{
                id: id,
                name: name,
                price: price,
                image:image
            }
        })

    }
    return (
        <div className='dish'>
            <div className='dish__image'>
              <img src={image}/>
            </div>
            <div className='dish__middle'>
                <p><strong>{name}</strong></p>
                <p className='flash'>Item Added</p>
            </div>
            <div className="dish__info">
                <p><strong>$: {price} </strong></p>
                <button onClick={handleClick}>Add to Cart</button>
            </div>
        </div>
    )
}

export default Dish
