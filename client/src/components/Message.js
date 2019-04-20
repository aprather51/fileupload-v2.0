import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Message = ({ msg }) => {
	return <Alert msg={msg}>{msg}</Alert>;
};

Message.propTypes = {
	msg: PropTypes.string.isRequired
};

export default Message;

const Alert = styled.p`
	color: #f00;
	font-size: 1.4rem;
`;
