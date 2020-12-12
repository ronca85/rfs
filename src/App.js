import React, { useState } from "react"

const App = () => {
	const [state, setState] = useState("click me");
	const [users, setUsers] = useState();

	const getUserModule = () => import("./common/usersAPI");
	const displayData = () => {
		getUserModule().then(({ getUsers }) => {
			getUsers().then( json => {
				setUsers( json );
				console.log( state, users )
			} );
		});
	}

	return (
		<div>
			<h1>Hello</h1>
			<button onClick={() => setState("Thanks! 🥰")}>{state}</button>
			<div className="loadjson">
				<button onClick={() => setUsers( displayData )}>load json</button>

				<pre>
					{/* { this.users.json.stringify( data, null, 2 ) } */}
					{/* { users.stringify( data, null, 2 ) } */}
				</pre>
			</div>
		</div>
	)
}

export default App
