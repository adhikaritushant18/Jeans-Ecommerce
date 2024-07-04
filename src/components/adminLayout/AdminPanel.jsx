
import {Outlet} from 'react-router-dom'
import {Link} from 'react-router-dom'
import {styled} from 'styled-components'
// import {useEffect, useState} from 'react';

function AdminPanel(){


	const UL=styled.ul`
		display: flex;
		flex-direction: column;
		gap: 3rem;
		margin-top: 4rem;

		li{
			list-style: none;
		}
	`
	return(
		<>
		<div style={{'height': '90vh', 'background': '#2d302e', 'display': 'flex', 'gap': '3rem'}} className="adminpanel">
		<UL>
			<li><Link to="/admin/users" style={{'fontSize': '2rem', 'color': '#9e1c34'}}>users</Link></li>
			<li><Link to="/admin/contact" style={{'fontSize': '2rem', 'color': '#9e1c34'}}>contact</Link></li>
		</UL>
		<Outlet />
		</div>
		
		</>
	)
}

export default AdminPanel;