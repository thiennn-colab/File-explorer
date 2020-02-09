const child_process = require('child_process');
const fs = require('fs');


const calculateSizeD = itemFullStaticPath =>{
//	let itemFullStaticPathCleaned = itemFullStaticPath.replace(/\\/g,'\\\\');
//	itemFullStaticPathCleaned = itemFullStaticPath.replace(/\s/g,'\\ ');
	
	const stats = fs.statSync(itemFullStaticPath);
	size = stats['size'];
	
	if(size == 0){
		return ["", 10000000];
	}
	return [Math.round(size/1000)+'K', size];
};

module.exports = calculateSizeD;