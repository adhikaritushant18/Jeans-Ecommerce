
import {styled} from 'styled-components';
import {useEffect, useState} from 'react';

function UserData(){
	const [adminData, setAdminData]=useState([]);

	const getAllAdminData=async ()=>{
		const alldata=await fetch('http://localhost:3000/admin/users');
		const actualdata=await alldata.json();
		console.log(actualdata);
		setAdminData(actualdata);
	}

	useEffect(()=>{
		getAllAdminData();
		
	},[])

	const TABLE=styled.div`
		margin-top: 3rem;
		table{
			border: 4px solid black;
		}
		th, td{
			border: 4px solid white;
			padding: 1.5rem;
			color: green;
		}
	`
	return(
		<>
		<div>
			<TABLE>
			<table>
			<thead>
				<tr>
					<th>Name</th>
					<th>Email</th>
				</tr>
			</thead>
			<tbody>
			{
				adminData.map((ele, index)=>{
					return (
						<tr key={index}>
							<td>{ele.name}</td>
							<td>{ele.email}</td>
							<td>Edit</td>
							<td>Delete</td>
						</tr>
					)
				})
			}
			</tbody>
			</table>
			</TABLE>
		</div>
		</>
	)
}

export default UserData;