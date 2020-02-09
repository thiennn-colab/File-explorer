const mimeURL = 'https://gist.githubusercontent.com/AshHeskes/6038140/raw/27c8b1e28ce4c3aff0c0d8d3d7dbcb099a22c889/file-extension-to-mime-types.json';
const https = require('https');
const fs = require('fs');

const getMimeType = extname => {
	return new Promise((resolve, reject) => {
		https.get(mimeURL, res => {
			if(res.statusCode < 200 || res.statusCode > 299){
				reject(`error: "Fail to load mime types json file: ${res.statusCode}"`);
				console.log(`error: "Fail to load mime types json file: ${res.statusCode}"`);
				return false;
			}
		  	let data = '';

			//you will receive data by chunks
			  res.on('data', chunk => {
				  data += chunk;
			  });
			
			//Once you recieved all chunks of data
			res.on('end', () => {
				resolve(JSON.parse(data)[extname]);
			});

			}).on('error', (e) => {
			  console.error(e);
			});
	});
};


module.exports = getMimeType;