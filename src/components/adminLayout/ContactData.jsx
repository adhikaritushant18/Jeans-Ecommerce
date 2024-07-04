
import {Link} from 'react-router-dom'
import {styled} from 'styled-components'
import {useEffect, useState} from 'react';


function ContactData(){

	const [contactData, setContactData]=useState([]);

	const contactDatas=async ()=>{
		const alldata=await fetch('http://localhost:3000/admin/contacts');
		const actualdata=await alldata.json();
		console.log(actualdata);
		setContactData(actualdata);
	}

	useEffect(()=>{
		contactDatas();
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
			<TABLE className="tabledata">
			<table>
			<thead>
				<tr>
					<th>Name</th>
					<th>Email</th>
					<th>Address</th>
					<th>Phone</th>
				</tr>
			</thead>
			<tbody>
				{
					contactData.map((ele, index)=>{
						return (
							<tr>
								<td>{ele.name}</td>
								<td>{ele.email}</td>
								<td>{ele.address}</td>
								<td>{ele.phone}</td>
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

export default ContactData;