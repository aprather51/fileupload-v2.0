import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';

const Percentage = ({ percentage }) => {
	const percent = useSpring({
		from: { val: percentage },
		to: { val: percentage }
		// delay: 1000
	});

	const value = percent.val.interpolate(val => Math.floor(val));
	return (
		<Percent style={percent}>
			<animated.div>{value}</animated.div>
			<span>%</span>
		</Percent>
	);
};

Percentage.propTypes = {
	percentage: PropTypes.number.isRequired
};

export default Percentage;

const Percent = styled.div`
	display: flex;
	justify-content: center;
	font-size: 1.2rem;
	color: #7c7c7c;
`;
