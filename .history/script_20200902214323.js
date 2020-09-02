var item0= {name :'lamp', code :'lhq64', color :'YELLOW', price :48077, weight :24};
var item1= {name :'cup', code :'kut74', color :'GREEN', price :32145, weight :28};
var item2= {name :'desk', code :'hco61', color :'PURPLE', price :3752, weight :60};
var item3= {name :'tool', code :'mea49', color :'OLIVE', price :35768, weight :14};
var item4= {name :'lamp', code :'mpd90', color :'YELLOW', price :49978, weight :11};
var item5= {name :'ice', code :'lfy39', color :'LIME', price :18136, weight :44};
var item6= {name :'chair', code :'nxd09', color :'SILVER', price :44446, weight :47};
var item7= {name :'carpet', code :'yaa54', color :'WHITE', price :45630, weight :34};
var item8= {name :'phone', code :'kqj41', color :'BLUE', price :10436, weight :15};
var item9= {name :'cup', code :'ixy28', color :'LIME', price :35170, weight :25};
var item10= {name :'phone', code :'ciq65', color :'MAROON', price :3510, weight :19};
var item11= {name :'bed', code :'zoq82', color :'RED', price :44526, weight :40};
var item12= {name :'pillow', code :'mdj92', color :'BLACK', price :49202, weight :11};
var item13= {name :'mouse', code :'smj65', color :'BLUE', price :33802, weight :11};
var item14= {name :'wardrobe', code :'bvx610', color :'RED', price :5241, weight :13};
var item15= {name :'dress', code :'thf33', color :'GRAY', price :15376, weight :56};
var item16= {name :'car', code :'lln70', color :'BLUE', price :6616, weight :15};
var item17= {name :'mouse', code :'jrk109', color :'LIME', price :11310, weight :53};
var item18= {name :'ice', code :'jzj37', color :'OLIVE', price :14868, weight :59};
var item19= {name :'carpet', code :'znv71', color :'GREEN', price :2813, weight :36};
var item20= {name :'cup', code :'rri102', color :'YELLOW', price :13389, weight :24};
var item21= {name :'wardrobe', code :'fht90', color :'BLUE', price :5402, weight :38};
var item22= {name :'bed', code :'jzx72', color :'OLIVE', price :26877, weight :27};
var item23= {name :'car', code :'qob33', color :'WHITE', price :6258, weight :31};
var item24= {name :'dress', code :'vsa105', color :'GRAY', price :2608, weight :44};
var item25= {name :'cup', code :'lpd56', color :'MAROON', price :43559, weight :52};
var item26= {name :'tool', code :'rfz47', color :'OLIVE', price :19271, weight :25};
var item27= {name :'ice', code :'ipa78', color :'SILVER', price :26724, weight :42};
var item28= {name :'carpet', code :'gol07', color :'SILVER', price :30028, weight :39};
var item29= {name :'wardrobe', code :'ski310', color :'GREEN', price :37650, weight :45};
var item30= {name :'dress', code :'ftc31', color :'SILVER', price :44291, weight :42};
var item31= {name :'carpet', code :'mae102', color :'SILVER', price :50007, weight :20};
var item32= {name :'keyboard', code :'kzh21', color :'GRAY', price :37617, weight :23};
var item33= {name :'mouse', code :'ghc98', color :'YELLOW', price :12366, weight :45};
var item34= {name :'dress', code :'ear16', color :'BLUE', price :45912, weight :29};
var item35= {name :'chair', code :'qmf82', color :'SILVER', price :21731, weight :31};
var item36= {name :'keyboard', code :'ihd55', color :'SILVER', price :22626, weight :44};
var item37= {name :'keyboard', code :'lpc04', color :'BLUE', price :15289, weight :17};
var item38= {name :'dress', code :'vme46', color :'BLACK', price :46591, weight :52};
var item39= {name :'monitor', code :'nhg510', color :'RED', price :10154, weight :60};



var itemList = [item0,item1,item2,item3,item4,item5,item6,item7,item8,item9,
    item10,item11,item12,item13,item14,item15,item16,item17,item18,item19,
    item20,item21,item22,item23,item24,item25,item26,item27,item28,item29,
    item30,item31,item32,item33,item34,item35,item36,item37,item38,item39,
];





/* ------------------------------------------------------------------------------ */

window.onload = function() {
	itemList.forEach(function (item) {
		item.fullInfo = item.name + " " + item.code + " " + item.color + " " + item.price + " " + item.weight;
	});
	
	var ul = document.getElementById("result");
	for (item of itemList) {				
		let li = document.createElement("li");
		let itemValue = item.fullInfo;
		li.appendChild(document.createTextNode(itemValue));
		ul.appendChild(li);
	}  
}

//Limit checkbox to two 
var countCheck = 0;
var limitAll = false;

function checkLimit(checkboxStatus) {
	//if general checkbox is checked, cannot check anything else
	if (limitAll && checkboxStatus.name != "general") {
		checkboxStatus.checked = false;
		return;
	}

	if (checkboxStatus.name == "general") {
		if (checkboxStatus.checked) {
			limitAll = true;
			document.getElementById("general").disabled = false;
		} else {
			limitAll = false;
			document.getElementById("general").disabled = true;
		}
	}
	
	if (!checkboxStatus.checked) {
		countCheck--;
		let checkboxValue = checkboxStatus.value;
		for (element of document.getElementsByClassName(checkboxValue))
			element.disabled = true;
		return;
	}

	if (countCheck >= 2) {
		checkboxStatus.checked = false;
		return;
	}

	countCheck++;

	let checkboxValue = checkboxStatus.value;
	for (element of document.getElementsByClassName(checkboxValue))
		element.disabled = false;
}

//reset button
function reset() {
	resetList();
	countCheck = 0;
	limitAll = false;

	for (element of document.getElementsByName("attribute")) {
		element.checked = false;
		let checkboxValue = element.value;
		for (ele of document.getElementsByClassName(checkboxValue)) {
			ele.disabled = true;
			ele.value = "";
		}
	}
	
	//reset general search fields
	document.getElementsByName("general").forEach(function(element) {
		element.checked = false;
		console.log(element);
	});
	document.getElementById("general").disabled = true;
	
	
	const ul = document.getElementById("result");
	for (item of itemList) {				
		let li = document.createElement("li");
		let itemValue = item.fullInfo;
		li.appendChild(document.createTextNode(itemValue));
		ul.appendChild(li);
	}  
}

function resetList() {
	const ul = document.getElementById("result");

	while (ul.firstChild) {
		ul.removeChild(ul.firstChild);
	}
}

function search() {
	resetList();
	var temp = document.getElementsByName("attribute");
	var result = itemList;
	var checkboxChecked = false;

	for (element of temp) {
		if (element.checked) {
			if (element.value == "name" || element.value == "code" || element.value == "color")
			{
				if (document.getElementById(element.value).disabled == false) {
					let textValue = document.getElementById(element.value).value;
					var temp = textValue.split("*");
	
					if (temp.length == 1) {
						result = filterByText(result, element.value, textValue);
					} else if (temp.length == 3) {
						//string includes text
						result = filterByText(result, element.value, temp[1]);
					} else {
						if (temp[0] == "")
							//if *app => end with
							result = advancedFilterByText(result, element.value, temp[1], "end");
						else 
							//if app* => end with
							result = advancedFilterByText(result, element.value, temp[0], "start");
					}
				} else { //else = color select chosen
					let selectValue = document.getElementById("color-select").value;
					result = filterByText(result, element.value, selectValue);
				}
				
				
			} else {
				let inputValues = document.getElementsByClassName(element.value);
				let lowerVal = parseInt(inputValues[0].value);
				var upperVal = parseInt(inputValues[1].value);

				result = filterByRange(result, element.value, lowerVal, upperVal);

			}

			const ul = document.getElementById("result");
			for (item of result) {				
				let li = document.createElement("li");
				let itemValue = item.fullInfo;
				li.appendChild(document.createTextNode(itemValue));
				ul.appendChild(li);
			}

			checkboxChecked = true;
		}
	}
		
	if (!checkboxChecked)
		reset();
}

function generalSearch(val) {
	let result = itemList.filter(element => element.fullInfo.toLowerCase().includes(val.value.toLowerCase()));
	resetList();  //make ul empty

	//display result
	const ul = document.getElementById("result");
	for (item of result) {				
		let li = document.createElement("li");
		let itemValue = item.fullInfo;
		li.appendChild(document.createTextNode(itemValue));
		ul.appendChild(li);
	}
}

function filterByText(original, type, val) {
	let result;
	switch (type) {
		case "name":
			result = original.filter(element => element.name.toLowerCase().includes(val.toLowerCase()));
			break;
		case "code":
			result = original.filter(element => element.code.toLowerCase().includes(val.toLowerCase()));
			break;
		case "color":
			result = original.filter(element => element.color.toLowerCase().includes(val.toLowerCase()));
			break;
		default:
			break;
	}
	return result;
}

function advancedFilterByText(original, type, val, direction) {
	var result;
	if (direction == "start") {
		switch (type) {
			case "name":
				result = original.filter(element => element.name.toLowerCase().startsWith(val.toLowerCase()));
				break;
			case "code":
				result = original.filter(element => element.code.toLowerCase().startsWith(val.toLowerCase()));
				break;
			case "color":
				result = original.filter(element => element.color.toLowerCase().startsWith(val.toLowerCase()));
				break;
			default:
				break;
		}
	}
	else if (direction == "end") {
		switch (type) {
			case "name":
				result = original.filter(element => element.name.toLowerCase().endsWith(val.toLowerCase()));
				break;
			case "code":
				result = original.filter(element => element.code.toLowerCase().endsWith(val.toLowerCase()));
				break;
			case "color":
				result = original.filter(element => element.color.toLowerCase().endsWith(val.toLowerCase()));
				break;
			default:
				break;
		}
	}
	return result;
}

function filterByRange(original, type, lower, upper) {
	var result;

	switch (type) {
		case "price":
			result = original.filter(element => (element.price >= lower && element.price <= upper));
			break;
		case "weight":
			result = original.filter(element => (element.weight >= lower && element.weight <= upper));
			break;
		default:
			break;
	}

	return result;
}

function disableCheck(selectStatus) {
	if (selectStatus.value != "None") {
		document.getElementById("color").disabled = true;

	} else {
		document.getElementById("color").disabled = false;
	}
}