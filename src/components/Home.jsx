import React from 'react'
import {styled} from 'styled-components'
import {myContext} from './MainContext'
import {useContext} from 'react'
import {Link} from 'react-router-dom'
function Home(){
	const {products}=useContext(myContext);
	console.log(products);
	const Div=styled.div`
		display: flex;
		height: 60vh;
		width: 100vw;
		justify-content: space-around;
		align-items: center;

		.home-content{
			width: 35vw;
		}

		.home-img img{
			height: 55vh;
			box-shadow: 2vh 2vh 1rem blue;
			border-top-left-radius: 2rem;
		}

		.home-content button{
			padding: 0.5rem 1rem 0.5rem 1rem;
			font-size: 1rem;
			background: lightblue;
			border: 1px solid;
		}

		.content{
			background: #5d7380;
			border-radius: 1rem;
		}


	`

	const Imgs=styled.div`

		display: grid;
		grid-template-columns: repeat(3, 280px);
		grid-template-rows: repeat(10, 1fr);
		gap: 6rem;
		justify-content: center;
		margin-top: 8rem;


		.content{
			background: #5d7380;
			border-radius: 1rem;
		}

	`
	return(
		<>
			<Div className="body_content">
			<h1>{name}</h1>
				<div className="home-content">
					<h1>Welcome to Hamro-Ramro Jeans Sales Market</h1>
					<p>Here you can find all types of Men's Jeans Pant
					on best offer.</p>
					<button><Link to='/products'>Explore Now</Link></button>
				</div>

				<div className="home-img">
					<img src="https://th.bing.com/th/id/OIP.z2H9VjEv35IaGth9Y7cPowHaHa?w=195&h=195&c=7&r=0&o=5&dpr=1.1&pid=1.7" alt="notfound" />
				</div>
			</Div>

			<Imgs className="HomePro">
				{
					products.map((ele, index)=>{
						return <Link to={`/products/${ele.id}`}><div className="content" key={index} style={{'color': '#ead2f7'}}>
							<h1>{ele.name}</h1>
							<img src={ele.img} alt="not found" height='230px' width='280px'/>
							<h1>{ele.price}</h1>
							<p>{ele.description}</p>
						</div></Link>
					})
				}
			</Imgs>

		</>
	)
}

export default Home;