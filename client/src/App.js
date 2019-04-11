import React from 'react';
import styled from 'styled-components';
import theme from './assets/styled/theme';

const App = () => (
	<div>
		<Title>App</Title>
	</div>
);
export default App;

const Title = styled.h1`color: ${theme.colors.link};`;
