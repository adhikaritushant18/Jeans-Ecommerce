
import {styled} from 'styled-components'
import {useState} from 'react'
import axios from 'axios'
function Contact(){
	const [contactDatas, setContactDatas]=useState({
		name: "",
		email: "",
		address: "",
		phone: ""
	})

	const handleData=(e)=>{
		let name=e.target.name;
		let value=e.target.value;

		setContactDatas({...contactDatas, [name]: value});
	}

	  const uid="name"
  	  const eid="email"
  	  const aid="address"
  	  const pid="phone"

  	  let focusElement=document.activeElement.id;

	const handleSubmit=async (e)=>{
		e.preventDefault();
		console.log("handle submit called");
		console.log(contactDatas);
		const {name, email, address, phone}=contactDatas;

		await axios.post('/api/contact',{
			name, email, address, phone
		})

		console.log("submitted succesfully");
	}

	const Div=styled.div`
		form{
			width: 98vw;
			display: flex;
			justify-content: center;
		}

		.form-container div{
			margin-top: 2rem;
		}

		input{
			padding: 0.5rem 1.5rem 0.5rem 1.5rem;
		}
	`

	  // const datas={contactDatas.name, contactDatas.email, contactDatas.address, contactDatas.phone};
  	

	return(
		<>
			<Div>
			<div>
				<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14130.927050714794!2d85.32951859281395!3d27.694684219032826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb199a06c2eaf9%3A0xc5670a9173e161de!2sNew%20Baneshwor%2C%20Kathmandu%2044600!5e0!3m2!1sen!2snp!4v1719848286289!5m2!1sen!2snp" 
				width="1210" 
				height="450" 
				style={{border:0}}
				allowfullscreen="" 
				loading="lazy" 
				referrerpolicy="no-referrer-when-downgrade">
				</iframe>
			</div>
			<h1>{contactDatas.name}</h1>
			<h2>{contactDatas.email}</h2>
				<form>
				<div className="form-container">
					<div>
						<h1>Contact Us</h1>
					</div>
				 	<div>
				 		<label htmlFor="name">Name: </label>
				 		<input type="text" name="name" id={uid} value={contactDatas.name} onChange={handleData} {...(focusElement === uid ? {autoFocus: true}: {})}/>
				 	</div>
				 	<div>
				 		<label htmlFor="email">email: </label>
				 		<input type="email" name="email" id={eid} value={contactDatas.email} onChange={handleData} {...(focusElement === eid ? {autoFocus: true}: {})} />
				 	</div>
				 	<div>
				 		<label htmlFor="address">Address: </label>
				 		<input type="text" name="address" id={aid} value={contactDatas.address} onChange={handleData} {...(focusElement === aid ? {autoFocus: true}: {})} />
				 	</div>
				 	<div>
				 		<label htmlFor="phone">Phone: </label>
				 		<input type="phone" name="phone" id={pid} value={contactDatas.phone} onChange={handleData} {...(focusElement === pid ? {autoFocus: true}: {})}/>
				 	</div>
				 	<div>
				 		<button type="submit" onClick={handleSubmit}>submit</button>
				 	</div>
				 </div>
				</form>
			</Div>
		</>
	)
}

export default Contact;