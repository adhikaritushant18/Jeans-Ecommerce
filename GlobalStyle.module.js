
import {createGlobalStyle} from 'styled-components'

export const GlobalStyle=createGlobalStyle`
	*{
		margin: 0;
		padding: 0;
	}

	@media only screen and (max-width:650px){
		html{
			font-size: 10px;
		}

		.Navbar{
			flex-direction: column !important;
		}

		.menu{
			display: none;
		}
		.bar{
			display: block !important;
			font-size: 2rem;
			float: right;
		}

		.shortmenu{
			height: 100vh;
			width: 100vw;
			background: black;
			font-size: 1.5rem;
		}

		.shortNavbar .bar{
			display: none !important;
		}

		.shortNavbar .cross{
			display: block !important;
			font-size: 2rem;
			color: red;
		}

		.shortlogo img{
			height: 50px;
			widht: 60px;
		}

		.shortlogo{
			width: 100vw;
			background: black;
		}

		body_content{

		}

		.home-content{
			width: 40vw !important;
		}

		.home-img img{
			height: 35vh !important;
			width: 30vw;
			box-shadow: 2vh 2vh 1rem blue;
			border-top-left-radius: 2rem;
		}

		.HomePro{
		grid-template-columns: repeat(1, 280px) !important;
		.content{
			background: #5d7380;
			border-radius: 1rem;
		}
		}

		.Products{
		grid-template-columns: repeat(1, 280px) !important;
		.content{
			background: #5d7380;
			border-radius: 1rem;
		}
	}

	iframe{
		width: 100vw;
		height: 100vh;
	}

	.adminpanel{
		flex-direction: column !important;

	}

	.tabledata{
		table{
			border: 2.5px solid black;
		}
		th, td{
			border: 2.5px solid white;
			padding: 0rem;
			color: green;
			font-size: 1.2rem !important;
		}
	}

	}
`