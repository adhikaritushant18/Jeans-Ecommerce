
import {styled} from 'styled-components'

function Bottom()
{
	const Div=styled.div`
		height: 40vh;
		background: #242B2B;
		display: flex;
		justify-content: center;
		align-items: center;

		li a {
			color: white;
			padding-left: 1rem;
		}
		li{
			list-style: none;
		}

		li i{
			font-size: 1.5rem;
			color: white;
		}
	`
	return (
		<>
			<Div>
				<div>
					<ul>
						<li><i class="fa-brands fa-facebook-f"></i><a href="facebook: https://www.facebook.com/tushant.adhikari/">Facebook</a></li>
						<li><i class="fa-brands fa-youtube"></i><a href="https://www.youtube.com/@tushantadhikari1696">youtube.com/@tushantadhikari1696</a></li> 
						<li><i class="fa-brands fa-linkedin-in"></i><a href="https://www.facebook.com/tushant.adhikari/">Linkedin</a></li>
						<li><i class="fa-regular fa-copyright"></i></li>
					</ul>
				</div>
			</Div>
		</>
	)
}

export default Bottom;