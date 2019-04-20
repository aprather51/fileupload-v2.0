import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';

const Progress = ({ percentage }) => {
	const bars = useSpring({
		from: { width: '0%' },
		// delay: 1000,
		width: `${percentage}%`
	});

	return <Bar percentage={percentage} style={bars} />;
};

Progress.propTypes = {
	percentage: PropTypes.number.isRequired
};

export default Progress;

const Bar = styled(animated.div)`
  background-color: #acacac;
	height: 1rem;
	margin-top: 1rem;
	
`;
