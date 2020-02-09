

//loop through children of tbody
const children = $('tbody').children();
console.log(typeof( children));

//convert children to an array
let children_array = [];
for(let i = 0; i < children.length; i++){
	children_array.push(children[i]);
}
console.log(children_array);

//build an array of object
const items = [];
children_array.forEach(element =>{
	console.log(element.getAttribute('data-name')); 
	const rowDetails = {
		name: element.getAttribute('data-name'),
		size: parseInt(element.getAttribute('data-size')),
		time: parseInt(element.getAttribute('data-time')),
		html: element.outerHTML ,
	}
	items.push(rowDetails);
});
console.log(items);

//sort status
const sortStatus = {
	name: 'none', //none, up, down
	size: 'none',
	time: 'none'
};
const sort_name = (items, status) => {
	if(status === 'asc'){
		items.sort((item1, item2) => {
			const name1 = item1.name.toUpperCase();
			const name2 = item2.name.toUpperCase();
			if(name1 < name2){
				return -1;
			}
			if(name1 > name2){
				return 1;
			}
			return 0;
		});
	}else{
		items.sort((item1, item2) => {
			const name1 = item1.name.toUpperCase();
			const name2 = item2.name.toUpperCase();
			if(name1 < name2){
				return -1;
			}
			if(name1 > name2){
				return 1;
			}
			return 0;
		}).reverse();
	}
	
};
const sort_size = (items, status) => {
	if(status === 'asc'){
		items.sort((item1, item2) => {
			const name1 = item1.size;
			const name2 = item2.size;
			if(name1 < name2){
				return -1;
			}
			if(name1 > name2){
				return 1;
			}
			return 0;
		});
	}else{
		items.sort((item1, item2) => {
			const name1 = item1.size;
			const name2 = item2.size;
			if(name1 < name2){
				return -1;
			}
			if(name1 > name2){
				return 1;
			}
			return 0;
		}).reverse();
	}
	
};
const sort_time = (items, status) => {
	if(status === 'asc'){
		items.sort((item1, item2) => {
			const time1 = item1.time;
			const time2 = item2.time;
			if(time1 < time2){
				return -1;
			}
			if(time1 > time2){
				return 1;
			}
			return 0;
		});
	}else{
		items.sort((item1, item2) => {
			const time1 = item1.time;
			const time2 = item2.time;
			if(time1 < time2){
				return -1;
			}
			if(time1 > time2){
				return 1;
			}
			return 0;
		}).reverse();
	}
	
};



//fill table body with items
const fill_table_body = items => {
	const content = items.map(element => element.html).join("");
//	console.log(content);
	$("tbody").html(content);
};



//event listeners
document.getElementById('table_head_row').addEventListener('click', event => {
	if(event.target){
		if(event.target.id === 'name'){
			if(['none', 'desc'].includes(sortStatus.name)){
			//sort in asc order
				sort_name(items, 'asc');
				sortStatus.name = 'asc';
				event.target.innerHTML = `<th scope="col" id="name">Name <ion-icon name="arrow-dropup-circle"></ion-icon></th>`;
			}
			else if(sortStatus.name === 'asc'){
				sort_name(items, 'desc');
				sortStatus.name = 'desc';
				event.target.innerHTML = `<th scope="col" id="name">Name <ion-icon name="arrow-dropdown-circle"></ion-icon></th>`;
			}
			fill_table_body(items);
			document.getElementById('size').innerHTML = `<th scope="col" id="size">Size</th>`;
			document.getElementById('time').innerHTML = `<th scope="col" id="time">Last Modified</th>`;
		}
		if(event.target.id === 'size'){
			if(['none', 'desc'].includes(sortStatus.size)){
			//sort in asc order
				sort_size(items, 'asc');
				sortStatus.size = 'asc';
				event.target.innerHTML = `<th scope="col" id="size">Size <ion-icon name="arrow-dropup-circle"></ion-icon></th>`;
			}
			else if(sortStatus.size === 'asc'){
				sort_size(items, 'desc');
				sortStatus.size = 'desc';
				event.target.innerHTML = `<th scope="col" id="size">Size <ion-icon name="arrow-dropdown-circle"></ion-icon></th>`;
			}
			fill_table_body(items);
			document.getElementById('name').innerHTML = `<th scope="col" id="name">Name</th>`;
			document.getElementById('time').innerHTML = `<th scope="col" id="time">Last Modified</th>`;
		}
		if(event.target.id === 'time'){
			if(['none', 'desc'].includes(sortStatus.time)){
			//sort in asc order
				sort_time(items, 'asc');
				sortStatus.time = 'asc';
				event.target.innerHTML = `<th scope="col" id="time">Last Modified <ion-icon name="arrow-dropup-circle"></ion-icon></th>`;
			}
			else if(sortStatus.time === 'asc'){
				sort_time(items, 'desc');
				sortStatus.time = 'desc';
				event.target.innerHTML = `<th scope="col" id="time">Last Modified <ion-icon name="arrow-dropdown-circle"></ion-icon></th>`;
			}
			fill_table_body(items);
			document.getElementById('size').innerHTML = `<th scope="col" id="size">Size</th>`;
			document.getElementById('name').innerHTML = `<th scope="col" id="name">Name</th>`;
		}
	}
});



















