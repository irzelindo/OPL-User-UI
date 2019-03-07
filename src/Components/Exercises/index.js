import React from 'react'
import { Grid, Paper } from 'material-ui'

export default props => (
	<Grid container>
		<Grid item sm>
			<Paper style={{ padding: 20, margin: 5 }}>Left Pane</Paper>
		</Grid>
		<Grid item sm>
			<Paper style={{ padding: 20, margin: 5 }}>Right Pane</Paper>
		</Grid>
	</Grid>
)
