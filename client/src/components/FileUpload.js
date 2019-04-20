import React, { Fragment, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import Message from 'Message';
import Progress from './Progress';
import Percent from './Percent';

const FileUpload = () => {
	const [ file, setFile ] = useState('');
	const [ fileName, setFileName ] = useState('Choose File');
	const [ uploadedFile, setUploadedFile ] = useState({});
	const [ message, setMessage ] = useState('');
	const [ uploadPercentage, setUploadPercentage ] = useState(0);

	const onFileChange = e => {
		setFile(e.target.files[0]);
		setFileName(e.target.files[0].name);
	};

	const onSubmit = async e => {
		e.preventDefault();

		const formData = new FormData();
		// fetching 'const file = req.files.file;' from server.js , useState's file
		formData.append('file', file);

		try {
			const res = await axios.post('/upload', formData, {
				headers: {
					'Content-Type': 'multipart/form-data'
				},
				//upload progress status
				onUploadProgress: progressEvent => {
					const parseMath = parseInt(
						Math.round(progressEvent.loaded * 100 / progressEvent.total)
					);

					setUploadPercentage(parseMath);

					//Clear Percentage
					setTimeout(() => setUploadPercentage(0), 10000);
				}
			});

			const { fileName, filePath } = res.data;
			setUploadedFile({ fileName, filePath });
			setMessage('File Uploaded!');
			//
		} catch (err) {
			if (err.response.status === 500) {
				// setMessage(
				// 	'The server has encountered an error that cannot complete your request.'
				// );
				setMessage('Error: Cannot find directory -- ./client/public/uploads');
			} else {
				//fetching status 400 from server -- msg indicated.
				setMessage(err.response.data.msg);
			}
		}
	};

	return (
		<Fragment>
			<MsgContainer>{message && <Message msg={message} />}</MsgContainer>
			<Form onSubmit={onSubmit}>
				<InputGroup>
					<Input type={'file'} id={'customFile'} onChange={onFileChange} />
					<Label htmlFor={'customFile'}>{fileName}</Label>
				</InputGroup>
				<Submit type={'submit'} value={'Upload'} />
			</Form>

			<Progress percentage={uploadPercentage} />
			<Percent percentage={uploadPercentage} />

			{uploadedFile && (
				<UploadFileContainer>
					<h4>{uploadedFile.fileName}</h4>
					<img src={uploadedFile.filePath} alt="" />
				</UploadFileContainer>
			)}
		</Fragment>
	);
};

export default FileUpload;

const Form = styled.form`margin: 0;`;
const InputGroup = styled.div`
	display: flex;
	flex-wrap: wrap;
	align-items: stretch;
	width: 100%;
	/* padding: 1rem 0; */
`;

const Label = styled.label`
	background-color: #fff;
	color: #acacac;
	width: 100%;
	padding: .375rem .75rem;
	margin: 1em 0;
	line-height: 1.5;
	border: 1px solid #ced4da;
	border-radius: .25rem;
	cursor: pointer;
`;

const Input = styled.input`
	width: 100%;
	/* padding: .5rem; */
	margin: 0;
	opacity: 0;
	padding: 0;
`;

const Submit = styled.input`
	background-color: #006fff;
	color: #fefefe;
	width: 100%;
	padding: .7rem;
	font-size: 1.5rem;
	border-radius: 4px;
	border: none;
	cursor: pointer;
`;

const UploadFileContainer = styled.div`
	margin-top: 1.5rem;
	h4 {
		font-size: 1.2rem;
		color: #acacac;
	}
`;

const MsgContainer = styled.div`height: 1.8rem;`;
