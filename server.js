const express = require('express');
const fileUpload = require('express-fileupload');
const server = express();
const port = process.env.PORT || 4000;

server.use(fileUpload());

//Upload Endpoint
server.post('/upload', (req, res) => {
	if (req.files === null) {
		return res.status(400).json({ msg: 'No files uploaded' });
	}

	const file = req.files.file;

	file.mv(`${__dirname}/client/public/uploads/${file.name}`, err => {
		if (err) {
			console.error(err);
			return res.status(500).send(err);
		}

		res.json({ fileName: file.name, filePath: `/uploads/${file.name}` });
	});
});

server.listen(port, () => console.log(`The server is running on ${port}`));
