import {createContext, useReducer, useEffect} from 'react'
import axios from 'axios';

const myContext=createContext();

const reducer=(state, action)=>{
	if(action.type === "product_data"){
		return{
			...state,
			products: action.payload.products
		}

	}

	if(action.type === "Single_Data"){
		return{
			...state,
			singlePro: action.payload.singlePro
		}

	}

	return state;
}

const initialState={
	products: [],
	filPro: [],
	singlePro: [],
}

const AppProvider=({children})=>{

	const [state, dispatch] = useReducer(reducer, initialState);

	const getData= async ()=>{
		const data=await axios.get('https://men-ecommerce-yxqz.onrender.com/jeans');
		const actualdata=data.data;
		dispatch({type: "product_data", payload:{products: actualdata}})
	}

	const getSingleData=async (url)=>{
		console.log(url);
		const singleData=await axios.get(url);
		console.log(singleData);
		const actualSingleData=singleData.data;
		console.log(actualSingleData);
		dispatch({type: "Single_Data", payload:{singlePro: actualSingleData}})
	}

	useEffect(()=>{
		getData();
		
	}, [])
	return (
	<myContext.Provider value={{...state, getSingleData}}>
		{children}
	</myContext.Provider>
	);
}


export {myContext, AppProvider};