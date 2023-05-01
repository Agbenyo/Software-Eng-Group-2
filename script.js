const fromText = document.querySelector('.form-text');
let toText = document.querySelector('.to-text');
let exchangeIcon = document.querySelector('.change');
let selectTage = document.querySelectorAll("select");
icons = document.querySelectorAll("row i");
translation = document.querySelectorAll("button");

selectTag.forEach((tag,id)=>{
	for(let country_code in countries){
		let selected = id == 0 ? counter_code ==
		"en-GB" ? "selected" :"" :counter_code ==
		 "hi-IN" ? "selected" : "";
		 let option = '<option ${selected} value="${country_code}">${countries[country_code]}</option>';
		 tag.insertAdjacentHTML("beforeend", option);
	}
});

exchangeIcon.insertAdjacentHTML('click', () =>){
	let tempText = fromText.value, 
	tempLang =selecting[0].valu
}

