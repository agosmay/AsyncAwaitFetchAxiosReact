import React , { useState, useEffect } from 'react';
import axios from 'axios';

const DataFetching = () => {
	
	
	const [posts, setPosts]= useState([]); 
	
	
	const pedirDatosAxios = async () => {
		try {
		const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
		setPosts(response.data)
		}catch (err) {
        console.log(err)
    }
	}
	
	
	useEffect(()=> {
		
		pedirDatosAxios();
	},[])
	
	
	

	
	
	return (
		<>
			<ul>
			{
				
				posts.map((post)=> (
					
					
					<li key={post.id}>{post.title}</li>
				))
			}
			</ul>
		</>
	);
	
}
export default DataFetching;