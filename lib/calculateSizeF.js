const fs = require('fs');
const calculateSizeF = stats =>{
	const filesize = stats.size;
	const units = "BKMGT";


	const index = Math.floor(Math.log10(filesize)/3);
	const filesizeHuman = (filesize/Math.pow(1000,index)).toFixed(1);
	
	return [`${filesizeHuman}${units[index]}`, filesize];
};

module.exports = calculateSizeF;