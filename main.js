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

  form.onsubmit = function(u) {
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


  }
  
  const bookName = _('#bookName');
  const area = _('#area');
  const book__name = _('.book__name');
  const book__content = _('.book__content');

  bookName.oninput = () => {
    localStorage.setItem('bookName' , bookName.value);
    book__name.innerHTML = bookName.value;
  };
  bookName = localStorage.getItem('bookName');
  book__name.innerHTML = localStorage.getItem('bookName');

  area.oninput = () => {
    localStorage.setItem('area' , area.value);
    let content = localStorage.getItem('area');
    book__content.innerHTML = content;
  };
  
  

  


}


