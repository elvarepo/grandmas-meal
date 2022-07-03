import React from 'react';
import './Sumtotal.css';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from '../reducer';
import { useStateValue } from '../StateProvider';
import { useNavigate } from 'react-router-dom';

function Sumtotal() {
    const [{basket}, dispatch] = useStateValue();
    const navigate = useNavigate();


    return (
        <div className='sumtotal'>
            <CurrencyFormat
                renderText={(value)=>(
                    <>  
                        <p>
                            Subtotal ({basket.length} items): <strong>{value}</strong>
                        </p>
                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}   
                displayType={'text'}
                thousandSeparator={true}
                prefix={'$'}
            />
             <button onClick={ e => navigate('/payment')}>Proceed to Checkout</button>
        </div>
    )
}

export default Sumtotal
