
import {myContext} from './MainContext'
import {useContext} from 'react'
import config from '../Khalti/KhaltiConfig'
import KhaltiCheckout from "khalti-checkout-web";

function Cart()
{
	let checkout = new KhaltiCheckout(config);
	const {singlePro}=useContext(myContext);
	const singleProductData={
		height: '80vh',
		width: '100vw',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center'
	}

	return (
		<>
			<div style={singleProductData}>
				{
					singlePro.map((ele, index)=>{
						return <div>
						<h1>{ele.name}</h1>
						<img src={ele.img} alt="not found" height='320px' width='300px' />
						<p>Price: {ele.price}</p>
						<button id='buybtn' onClick={()=> checkout.show({amount: ele.price*100})}>Pay via Khalti</button>
						</div>
					})
				}
			</div>
		</>
	)
}

export default Cart;