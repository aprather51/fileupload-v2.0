import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

import { Global } from './assets/styled/global.js';
import { ThemeProvider } from 'styled-components';
import theme from './assets/styled/theme.js';

import App from './App';

const SetApp = () => (
	<Fragment>
		<Global suppressMultiMountWarning />
		<ThemeProvider theme={theme}>
			<Fragment>
				<App />
			</Fragment>
		</ThemeProvider>
	</Fragment>
);

ReactDOM.render(<SetApp />, document.getElementById('root'));
