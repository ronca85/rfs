import React from "react"

export default class FetchUsers extends React.Component {
	state = {
		fetchInProgress: false,
		fetchComplete: false,
		fetchedItems: null,
	}

	async fetchItems() {
		this.setState({
			fetchInProgress: true,
		})
		const ENDPOINT = "https://jsonplaceholder.typicode.com/users/";
		const response = await fetch( ENDPOINT )
		const data = await response.json()
		// console.log( data );
		this.setState({
			fetchInProgress: false,
			fetchComplete: true,
			fetchedItems: data,
		})
	}

	render() {
		return (
			<>
				<h1>Component: FetchUsers</h1>
				<button onClick={() => this.fetchItems()}>fetch users</button>
				
				<div className="border">
					{
						!this.state.fetchComplete || !this.state.fetchedItems
							?
							<div className="border">
								<h2>
									No users to show
								</h2>
							</div>
							:
							this.state.fetchInProgress
								?
								<div className="border">
									<h2>
										Fetching...
									</h2>
								</div>
								:
								<div className="border">
									<h2>
										Fetched users
									</h2>
									<div className="border">
										<pre>
											<code>
												{JSON.stringify(this.state.fetchedItems, null, 2)}
											</code>
										</pre>
									</div>
								</div>
					}
				</div>
			</>
		);
	}
}
