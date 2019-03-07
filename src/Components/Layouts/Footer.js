import React from 'react'
import { Paper, Tabs } from 'material-ui'
import { Tab } from 'material-ui/Tabs'

export default props => (
	<Paper>
		<Tabs indicatorColor="primary" textColor="primary" centered value="0">
			<Tab label="Item One" />
			<Tab label="Item Two" />
			<Tab label="Item Three" />
		</Tabs>
	</Paper>
)
