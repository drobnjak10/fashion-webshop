import React, { useEffect, useState } from 'react'
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

// const Key = "pk_test_51KYalKIQ7sZAjO4XplE2xx1yyYyfNPekZc8MwvLftpnN7KoEGLiHfd74za4rZLzdRrc5V44CAsTOSYGqf6ulevnO003QNf5Bnm"

const Key = process.env.REACT_APP_STRIPE

const Pay = () => {
    const [stripeToken, setStripeToken] = useState(null)
    const navigate = useNavigate();

    const onToken = (token) => {
        setStripeToken(token)
    }


    useEffect(() => {
        const makeRequest = async () => {
            try {
                const response = await axios.post('http://localhost:5000/api/checkout/payment', {
                    tokenId: stripeToken.id,
                    amount: 200
                })

                console.log(response.data)
                navigate('/success')
            } catch (error) {
                console.log(error)
            }
        }

        stripeToken && makeRequest()
    },[stripeToken])


    return (
        <div
            style={{
                height: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>

                { stripeToken ? (<span>Processing. Please wait!</span>) : (
                     <StripeCheckout 
                     name="David Shop" 
                     image="https://avatars.githubusercontent.com/u/52174212?v=4" 
                     billingAddress
                     shippingAddress
                     description='=" Your total is $20'
                     amount={20}
                     token={onToken}
                     stripeKey={Key}
                     >
                     <button
                         style={{
                             border: "none",
                             width: 120,
                             borderRadius: 5,
                             padding: '20px',
                             backgroundColor: 'black',
                             color: 'white',
                             fontWeight: 600,
                             cursor: 'pointer'
                         }}>
                         Pay Now
                     </button>
                 </StripeCheckout>
     
                ) }

           

        </div>
    )
}

export default Pay