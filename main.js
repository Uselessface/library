window.onload = function() {
	document.querySelectorAll('[data-toggle="tab"]').forEach(tab => {
  	tab.onclick = function(e) {
    	const tabId = this.getAttribute('href');
      document.querySelectorAll('.tabs > div').forEach(tab => {
      	tab.classList.remove('active');
      });
      console.log(document.querySelector(tabId));
      document.querySelector(tabId).classList.add('active');
      e.preventDefault();
      return false;
    };
  });
}
function _(selector) {
	const arr = Array.from(document.querySelectorAll(selector));
  return arr.length === 1 ? arr[0] : arr;
}

const url = 'https://apiinterns.osora.ru/';

const form = _('#form_upload');

form.onsubmit = function (u){
    u.preventDefault();
    const files = _('[type=file]').files;
    const formData = new FormData();

    for(let i = 0; i < files.length; i++) {
      let file = files[i]

      formData.append('login' , 'String')
      formData.append('file' , file, 'binary')
    }

    fetch(url,{
      method: 'POST',
      body: formData,
    }).then(response => response.json())
    .then(data => {
      console.log(data)
    })


}



