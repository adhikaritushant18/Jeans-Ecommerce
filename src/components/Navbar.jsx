import {styled} from 'styled-components';
import {Link} from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import {useEffect} from 'react';
import axios from 'axios';
import {useState} from 'react';
function Navbar(){
	const [checkAuthen, setCheckAuthen]=useState(false);
	const { loginWithRedirect , logout, user, isAuthenticated, isLoading } = useAuth0();
	// const { logout } = useAuth0();
	  if (isLoading) {
    return <div>Loading ...</div>;
  }

  // const sendUserData=async (name, email)=>{
  // 	// const {name, email} = user;
  // 	await axios.post('/api/login',{
  // 		name, email
  // 	})
  // 	console.log("send data successfully");
  // }

  // useEffect(()=>{
  // 			// if(isAuthenticated){
  // 			sendUserData(user.name, user.email);
  // 		// }
  // 	},[]);

	const Div = styled.div`
		display: flex;
		justify-content: space-around;
		margin-top: 1.5rem;
		.menu ul{
			display: flex;
			gap: 3rem;
		}

		li{
			list-style: none;
		}

		.logo img{
			height: 50px;
			widht: 60px;
		}

		li Link{
			text-decoration: none;
		}
	`
	return(
		<>
			<Div>
				<div className="logo">
					<img src='../public/hamro-ramro.png' alt="not found" />
				</div>
				<div className="menu">
					<ul>
						<li><Link to='/'>Home</Link></li>
						{isAuthenticated && <li><Link to='/products'>Products</Link></li>}
						<li><Link to='/about'>About</Link></li>
						<li><Link to='/contact'>Contact</Link></li>
						<li><Link to='/cart'>Cart</Link></li>
						{isAuthenticated ? (
						<button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
     						 Log Out
   						 </button>
   						 ):(
   						 <button onClick={() => loginWithRedirect()}>Log In</button>
   						 )}

   						 {isAuthenticated &&
   						 <div>
   						 	<h1 style={{'fontSize': '1rem', 'color': 'green'}}><i class="fa-brands fa-google" style={{'color': 'pink', 'fontSize': '1.2rem', 'border': '2px solid black', 'border-radius': '2rem', 'padding': '0.3rem'}}></i> {user.name} </h1>
   						 </div>
   						 }

					</ul>
				</div>
			</Div>
		</>
	)
}

export default Navbar;