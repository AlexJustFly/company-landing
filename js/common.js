window.onload = function() {





// navigation list
let listItems = document.querySelectorAll('.navigation_link');
//hover function for navigation list
	for (let i = 0; i < listItems.length; i++) {
		listItems[i].onmouseover = listHoverOver;
		listItems[i].onmouseout = listHoverOut;
	}

// screen
let availHeight = screen.availHeight; // availHeight of screen
// array of blocks
let funNumbers = document.querySelectorAll('.funFacts__block_number'); // array of numbers
//constructor for min height of number block
let min_height_of_number_block = new min_fun_numb_height(funNumbers); // min Height of number blocks
//function for min height of number block
min_height_of_number_block.find();
/*let position = positionForEffect(availHeight, 0minHeightOfNumberBlock); //min position for scroll effect
*/// blocks 
let work = document.querySelector('#work'); // work
let clients = document.querySelector('#clients'); // clients
let projects = document.querySelector('#projects'); // projects
let awards = document.querySelector('#awards'); //awards
// constructor
let numberW = new numbers((work.innerHTML - 200), work, work);
let numberC = new numbers(0, clients, clients);
let numberP = new numbers((projects.innerHTML - 200), projects, projects);
let numberA = new numbers(0, awards, awards);
// scroll function
window.onscroll = () => {
	if ( (work.getBoundingClientRect().bottom - availHeight) < 0) {
		numberW.run()
		numberC.run()
		numberP.run()
		numberA.run()	
	}
};




// works images array
let works_images = document.querySelectorAll('.works__images-container');
//buttons
let works_all_btn = document.querySelector('#works_all');
let works_branding_btn = document.querySelector('#works_branding');
let works_web_btn = document.querySelector('#works_web');
let works_logo_btn = document.querySelector('#works_logo');
let works_photography_btn = document.querySelector('#works_photography');
// show works constructor
let works_all = new show_works('all', works_images);
let works_branding = new show_works('branding', works_images);
let works_web = new show_works('web', works_images);
let works_logo = new show_works('logo_design', works_images);
let works_photography = new show_works('photography', works_images);
// show works function
works_all_btn.onclick = () => works_all.show(); 
works_branding_btn.onclick = () => works_branding.show();
works_web_btn.onclick = () => works_web.show();
works_logo_btn.onclick = () => works_logo.show();
works_photography_btn.onclick = () => works_photography.show();


//modal
let modal_close = document.querySelector('.modal_close'); // close button
let modal_window = document.querySelector('.modal_window'); // modal window
let modal_img = document.querySelector('.modal_img'); // modal img
//close modal window constructor
let close_modal = new close_modal_window(modal_img, modal_window, function(){
	if (modal_window.style.animationName == 'close') {
	setTimeout(function(){modal_window.style.display = 'none'}, 300)
}})
// close modal window
modal_window.onclick = function(event) {
	close_modal.close()
}







//link for display img
let data_for_modal_img = document.querySelectorAll('.images-hover_img-link');
// constructor for show modal img
let show_modal_img = new show_modal_image(data_for_modal_img, modal_img, modal_window, 'flex');
// function for show modal img
show_modal_img.show();













}// end of window.onload function

// min height of number blocks
/*min_fun_numb_height = (arr) => {
	let len = arr.length;
	let min = Infinity;
	while (len--) {
		if (arr[len].offsetHeight < min) {
			min = arr[len].offsetHeight;
		}
	}
	return min;
}*/
class min_fun_numb_height {
	constructor(arr) {
		this.arr = arr;
	}
	find() {
		let len = this.arr.length;
		let min = Infinity;
		while (len--) {
			if (this.arr[len].offsetHeight < min) {
				min = this.arr[len].offsetHeight;
			}
		}
	}
};
// navigation hover
function listHoverOver() {
	this.parentNode.style.boxShadow = 'inset 0 1px 0 #32b0ee';
};
//navigation out
function listHoverOut() {
	this.parentNode.style.boxShadow = 'none';
};
//min position for effect
/*function positionForEffect(screen, block) {
	return screen - (block)	
};*/
// timer
class numbers {
	constructor(number, text, data) {
		this.number = number;
		this.text = text;
		this.data = data;
	}
	tick() {
		this.number++;
	}
	show() {
		this.number++;
		this.text.innerHTML = this.number;
	}
	run() {
		setInterval(() => {
			if (this.number == this.data.getAttribute('data-target')) {
				clearInterval(this.show)
			} else {
				this.show()	
			}
			
		}, 50);
	}
};
// show web works
class show_works {
	constructor (keyword, array, callback) {
		this.keyword = keyword;
		this.array = array;
		this.callback = callback;
	}
	show() {
		for (let i = 0; i < this.array.length; i++) {
			if (this.keyword == 'all') {
				this.array[i].style.opacity = '1';
				this.array[i].style.visibility = 'visible';
			}
			else if (this.array[i].getAttribute('class').includes(this.keyword)) {
				this.array[i].style.opacity = '1';
				this.array[i].style.visibility = 'visible';
			} else {
				this.array[i].style.opacity = '0';
				this.array[i].style.visibility = 'hidden';
			}
		}
	}
};
// show modal image onclick
class show_modal_image {
	constructor (data_target, modal_img, modal_window, style_display) {
		this.data_target = data_target;
		this.modal_img = modal_img;
		this.modal_window = modal_window;
		this.style_display = style_display;
	}
	show() {
		for (let i = 0; i < this.data_target.length; i++) {
			this.data_target[i].onclick = () => {
				this.modal_img.src = this.data_target[i].getAttribute('data-target');
				this.modal_window.style.display = this.style_display;
				this.modal_window.style.animationName = 'open';
			}
		}
	}
};
// close modal window
class close_modal_window {
	constructor (modal_img, modal_window, f) {
		this.modal_img = modal_img;
		this.modal_window = modal_window;
		this.callback = f;
	}
	close() {
			if (event.target != this.modal_img) {
				this.modal_window.style.animationName = 'close';	
			}
		this.callback();
	}
}




function initMap() {
	let myLatLng = {lat: 47.046604, lng: -122.869211};

	let mapProp = {
		center: myLatLng,
		zoom: 17
	};
	let map = new google.maps.Map(document.getElementById('map'), mapProp);
	let marker = new google.maps.Marker({
		map: map,
		position: myLatLng,
		title: 'Hello World!',
		icon: '../img/map-marker.png'
	});
	let infowindow = new google.maps.InfoWindow({
		content:"Hello World!"
	});
	google.maps.event.addListener(marker, 'click', function() {
		infowindow.open(map, marker)
	});
};