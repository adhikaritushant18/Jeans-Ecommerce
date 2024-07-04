
import {styled} from 'styled-components'

function About(){
	const Div=styled.div`
		width: 90vw;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 3rem;

		div img{
			height: 55vh;
			width: 33vw;
		}

		div p{
			width: 33vw;
		}
	`
	return(
		<>
		<Div>
			<div>
				<h1>About Our Jeans Store</h1>
				<img src="https://th.bing.com/th/id/OIP.gDDrrbLQxxSo8351MtLivgHaLH?rs=1&pid=ImgDetMain" alt="not found" />
				<p>Welcome to Hamro-Ramro! We’re passionate about denim and committed to delivering high-quality jeans that fit your lifestyle. Here’s what you need to know about us:</p>
			</div>
			<div>
				<h1>Our Story</h1>
				<img src="https://th.bing.com/th/id/R.f4eb913f9b943350f8c07b4cb2fe11bc?rik=Vp8U759S%2byL1YA&pid=ImgRaw&r=0" alt="not found" />
				<p>At Hamro-Ramro, we believe that great jeans are more than just clothing—they’re an expression of individuality. Our journey began 2 years, and since then, we’ve been on a mission to create jeans that combine style, comfort, and durability.</p>
			</div>
			<div>
				<h1>Our Commitment</h1>
				<img src="https://th.bing.com/th/id/R.e749b269b4931a1716aae0e748f1c85b?rik=h0Cw9IqwbUC0nQ&pid=ImgRaw&r=0" alt="not found" />
				<p>
					<ul>
						<li>Quality Craftsmanship: Each pair of jeans is meticulously crafted using premium materials and attention to detail.</li>
						<li>Perfect Fit: Our custom fit tools help you find the jeans that suit your body shape and personal style.</li>
						<li>Customer-Centric Approach: Your satisfaction is our priority. Reach out to our friendly customer support team anytime.</li>
					</ul>
				</p>
			</div>
			<div>
				<h1>Meet the Team</h1>
				<p>Introduce key team members, from designers to customer service representatives. Share their passion for denim and their role in creating an exceptional shopping experience.</p>
			</div>
		</Div>
		</>
	)
}

export default About;