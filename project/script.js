//element continer here
const submitdo = document.getElementById('submit-new');
const createdobtn = document.getElementById('new-do');
const editbtn = document.getElementById('edit-do');
const mainboard = document.getElementById('maincontent-board');
const newboard = document.getElementById('newdoing');
const chart = document.getElementById('chartdo');
const titleinput = document.getElementById('titleinput');
const timeinput1 = document.getElementById('timesinput01');
const timeinput2 = document.getElementById('timesinput02');
const dimentionsinput = document.getElementById('diminput');
const errors = document.getElementById('error');
const confirmedit = document.getElementById('confirmedit');
const exitdo = document.getElementById('exitnewdo');


//edit content function 
editbtn.onclick = function editdo() 
{
	//show edit mode
	confirmedit.classList.add('confirmactive');
	editbtn.classList.add("editactive");

	const regdelbtn = document.querySelectorAll('#delbtn');

	regdelbtn.forEach(element => 
		{
			element.classList.add("delactive");
		}
	);

	//hide edit mode
	confirmedit.onclick = function hide() 
	{
		regdelbtn.forEach(element => 
			{
				element.classList.remove("delactive");
				editbtn.classList.remove("editactive");
				confirmedit.classList.remove('confirmactive');
			}
		);
	}


	//delete do
	regdelbtn.forEach(element => 
		{
			element.onclick = function deletedo() 
			{
				element.parentElement.remove(element.parentElement);
			}
		}
	);

}

createdobtn.onclick = function shownewlist ()
{
	//debug edit (if dont confirm modals wont run)
	if (confirmedit.classList.contains('confirmactive')) 
	{
		alert("plase first confirm your edit");
	}

	//show modals
	else
	{
		mainboard.classList.add('active');
		createdobtn.disabled = true;
		createdobtn.style.cursor = 'auto';
		newboard.style.display = 'block';
	}
}

submitdo.onclick = function hidenewlist ()
{


	//do essential item
	let titledo = titleinput.value;
	let stimedo = timeinput1.value;
	let etimedo = timeinput2.value;
	let dimentiondo = dimentionsinput.value;

	//default do value
	if (titledo == '') {
		titledo = "unknown";
	}
	if (stimedo == '') 
	{
		stimedo = '00:00';
	}
	if (etimedo == '') 
	{
		etimedo = '00:00';
	}
	if (dimentiondo == '') 
	{
		dimentiondo = 'unknown';
	}
	
	//debug and fix empty title
	if(titleinput.value == null || titleinput.value == "" || titleinput.value == " ")
	{
		errors.style.padding = '2px 10px';
		errors.innerHTML = 'you must be write a title of do!';
	}
	else
	{
		//set error style to default
		errors.style.padding = "0px";

		//dimantion theme
		let dimentionsclass = dimentiondo;

		//create new do 
		let dotemplate = `<div class="doing">
                    <input type="checkbox"  id="do-check">
                    <span id="do-title">${titledo}</span>
                    <span id="do-times">${stimedo} , ${etimedo}</span>
                    <span id="do-dimentions" class="${dimentionsclass}">${dimentiondo}</span>
					<button id="delbtn" class="deletebtn">x</button>
					</div>`;

        //execute template to new div 
		let newdodiv = document.createElement('div');
		newdodiv.class = 'newdoing';
		newdodiv.innerHTML = dotemplate;
		chart.appendChild(newdodiv);
		
		//clear input value
		titleinput.value = " ";
		timeinput1.value = " ";
		timeinput2.value = " ";
		dimentionsinput.value = " ";
		
		
		//after send data to list  these line executed:
		mainboard.classList.remove('active');
		createdobtn.disabled = false;
		createdobtn.style.cursor = 'pointer';
		newboard.style.display = 'none';
	}

}

//exit create do modals
exitdo.onclick = function ExitCreateDoModals() {
	console.log("test here");
	mainboard.classList.remove('active');
	createdobtn.disabled = false;
	createdobtn.style.cursor = 'pointer';
	newboard.style.display = 'none';
}