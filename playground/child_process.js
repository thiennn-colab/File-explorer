const child_process = require('child_process');
const fs = require('fs');


try{
	const result = child_process.execSync('dir "C:\\Users\\Thien\\Desktop\\Web\ sites\\9.\ File\ Explorer(Node,\ html,\ CSS,\ Bootstrap\ 4)\\static\\Projects\\App\ Landing\ Page\ (Bootstrap)\\css"').toString();
	
	const stats = fs.statSync("C:\\Users\\Thien\\Desktop\\Web\ sites\\9.\ File\ Explorer(Node,\ html,\ CSS,\ Bootstrap\ 4)\\static\\Projects\\App\ Landing\ Page\ (Bootstrap)\\css");
	console.log(stats["size"]);
}catch(err){
	console.log(`Error: ${err}`);
}