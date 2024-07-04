import React from 'react'
import {styled} from 'styled-components'
import {myContext} from './MainContext'
import {useContext} from 'react'
import {Link} from 'react-router-dom'
function Products(){
	// const {name}=useContext(myContext);
	// console.log(name);

	const {products}=useContext(myContext);
	console.log(products);

	const Imgs=styled.div`

		display: grid;
		grid-template-columns: repeat(3, 280px);
		grid-template-rows: repeat(10, 1fr);
		gap: 6rem;
		justify-content: center;


		.content{
			background: #5d7380;
			border-radius: 1rem;
		}

	`
	return(
		<>

		<div>

			<Imgs className="Products">
				{
					products.map((ele, index)=>{
						return <Link to={`/products/${ele.id}`}><div className="content" style={{'color': '#ead2f7'}}>
							<h1 style={{'fontSize': '2rem'}}>{ele.name}</h1>
							<img src={ele.img} alt="not found" height='230px' width='280px' />
							<h1>{ele.price}</h1>
							<p>{ele.description}</p>
						</div></Link>
					})
				}
			</Imgs>
		</div>

		</>
	)
}


export default Products;