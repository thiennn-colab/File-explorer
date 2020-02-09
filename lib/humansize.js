const filesize = 12130000; // Bytes
const units = "BKMGT";


const index = Math.floor(Math.log10(filesize)/3);

const filesizeHuman = (filesize/Math.pow(1000,index)).toFixed(1);

console.log(`${filesizeHuman}${units[index]}`);