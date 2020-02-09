const fs = require('fs');
const path = require('path');

const calculateSizeD = require('./calculateSizeD.js');
const calculateSizeF = require('./calculateSizeF.js');

const buildMainContent = (fullStaticPath, pathname) => {
	let mainContent = '';
	//loop through the elements inside the folder
	let items;
	let itemDetails = {};
	try{
		items = fs.readdirSync(fullStaticPath);
 	}catch(err){
		console.log(`readdirSync Error: ${err}`);
		return `<div class="alert alert-danger">Internal Server Error</div>`;
	}
	
	//remove .DS_Store
	items = items.filter(element => element !== '.DS_Store');
	
	//Home directory, remove project_files
	if(pathname === '/'){
		items = items.filter(element => element !== 'project_files');
	}
	
	//get the following elements for each item:
	items.forEach(item => {
		//link
		const link = path.join (pathname, item);
		
		//name
        itemDetails.name = item;
		
		//icon
		//get stats of the item
		const itemFullStaticPath = path.join(fullStaticPath,item);
		try{
			stats = fs.statSync(itemFullStaticPath);
		}catch(err){
			console.log(`statSync error: ${err}`);
			mainContent = `<div class='alert alert-danger'>Internal server error</div>`;
			return false;  
		}
		
		
		if(stats.isDirectory() ){
			itemDetails.icon = `<ion-icon name="folder"></ion-icon>`;
			
			[itemDetails.size, itemDetails.sizeBytes] = calculateSizeD(itemFullStaticPath);
		}else if(stats.isFile()){
			itemDetails.icon = `<ion-icon name="document"></ion-icon>`;
			[itemDetails.size, itemDetails.sizeBytes] = calculateSizeF(stats);
		}
		
		//when was the file last change?
		itemDetails.timeStamp = parseInt(stats.mtimeMs);
		
		//convert timestamp to a date
		itemDetails.date = new Date(itemDetails.timeStamp);
		itemDetails.date = itemDetails.date.toLocaleString();
		
		
		mainContent += `
<tr data-name="${itemDetails.name}" data-size="${itemDetails.sizeBytes}" data-time="${itemDetails.timeStamp}">
<td>${itemDetails.icon}<a href="${link}" target="${stats.isFile() ? '_blank' : ''}">
	 ${item}
</a></td>
<td>${itemDetails.size}</td>
<td>${itemDetails.date}</td>
</tr>`;
	});
		//name
		//icon
		//link to the item
		//size
		//last modified
	
	
	
	return mainContent;
}

module.exports = buildMainContent;