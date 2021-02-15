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

  function _(selector) {
	  const arr = Array.from(document.querySelectorAll(selector));
    return arr.length === 1 ? arr[0] : arr;
  }

  const url = 'https://apiinterns.osora.ru/';

  const form = _('#form_upload');

  form.addEventListener('submit', (u) => {
    u.preventDefault()

    const files = document.querySelector('[type=file]').files
    const formData = new FormData()

    for (let i = 0; i < files.length; i++) {
      let file = files[i]
      
      formData.append('login' , 'String');
      formData.append('file', file);
      
    }

    fetch(url, {
      method: 'POST',
      body: formData,
    }).then((response) => {
      console.log(response)
    })
  })
}


