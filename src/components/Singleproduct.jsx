
import {myContext} from './MainContext'
import {useContext} from 'react'
import {useParams} from 'react-router-dom'
import {useEffect} from 'react'
import {Link} from 'react-router-dom'
// import {styled} from 'styled-components'

function Singleproduct(){

	const {singlePro,getSingleData}=useContext(myContext);

	const {id}=useParams();
	console.log(id);
	const dataurl=`https://men-ecommerce-yxqz.onrender.com/jeans?id=${id}`

	useEffect(()=>{
		getSingleData(dataurl);
	}, [])
	console.log(singlePro);
	// const singleProduct=styled.div`
	// 	img{
	// 		width: 400px;
	// 		height: 100px;
	// 	}
	// `

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
						<img src={ele.img} alt="not found" height='320px' width='300px'/>
						<h1>{ele.price}</h1>
						<p>{ele.description}</p>
						<button><Link to='/cart'>Add to Cart</Link></button>
						</div>
					})
				}

			</div>
		</>
	)
	
}

export default Singleproduct;

// YTZM4AUYXHS9C774XYCQQR19