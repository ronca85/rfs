import React, { useState, useEffect } from "react"
import FetchUsers from "./FetchUsers"

export default () => {
	const [error, setError] = useState(null);
	const [isLoaded, setIsLoaded] = useState(false);
	const [items, setItems] = useState([]);
	const ENDPOINT = "https://jsonplaceholder.typicode.com/users/";

	// Note: the empty deps array [] means
	// this useEffect will run once
	// similar to componentDidMount()
	useEffect(() => {
		fetch( ENDPOINT )
			.then( (response) => response.json() )
			.then(
				(result) => {
					setIsLoaded(true);
					setItems(result);
				},
				// Note: it's important to handle errors here
				// instead of a catch() block so that we don't swallow
				// exceptions from actual bugs in components.
				(error) => {
					setIsLoaded(true);
					setError(error);
				}
			)
	}, [])

	return (
		<main className="layout">
			<div className="layout_item">
				<h1>This is Site Body</h1>
				<button onClick={() => setItems( items )}>load json</button>
				<pre>
					{/* { this.state.items.json.stringify( data, null, 2 ) } */}
				</pre>
				<ul>
					{items.map(item => (
						<li key={item.id}>
							{item.name} {item.price}
						</li>
					))}
				</ul>
			</div>
			<div className="layout_item">
				<FetchUsers />
			</div>
		</main>
	);
}
