import "./styles/style.scss"

import React from "react"
import SiteBody from "./components/SiteBody"
import SiteHeader from "./components/SiteHeader"

export default () => {
	return (
		<>
			<SiteHeader />
			<SiteBody />
		</>
	);
}
