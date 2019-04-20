import React from 'react';
import styled from 'styled-components';
import theme from './assets/styled/theme';

import FileUpload from 'FileUpload';

const App = () => (
	<Container>
		<Title>
			File Uploader <strong>2.0</strong>
		</Title>
		<FileUpload />
	</Container>
);
export default App;

const Container = styled.div`
	width: 1000px;
	margin: 0 auto;
	padding: 1em;
`;

const Title = styled.h1`
	color: ${theme.colors.link};
	text-align: center;
`;
