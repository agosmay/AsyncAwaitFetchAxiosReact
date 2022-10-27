import React , { useState, useEffect } from 'react';


const FetchingDataConFetch = () => {
	
	
	const [posts, setPosts]= useState([]); 
	
		
	const pedirDatos = async () => {
		try {
		const data = await fetch('https://jsonplaceholder.typicode.com/posts');
		const dataObjeto = await data.json()
		setPosts(dataObjeto)
		}catch (err) {
        console.log(err)
    }
	}

	
	
	
	
	useEffect(()=> {
		pedirDatos()
	},[])
	

	return (
		<>
			<ul>
			{
				posts.map((post)=> (
					<li key={post.id}>{post.id}</li>
				
				))
				
			}
			</ul>
		</>
	);
	
}
export default FetchingDataConFetch;