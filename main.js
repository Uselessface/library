window.onload = function() {
    function _(selector) {
	    const arr = Array.from(document.querySelectorAll(selector));
      return arr.length === 1 ? arr[0] : arr;
    }


  	_('[data-toggle="tab"]').forEach(tab => {
  	  tab.onclick = function(e) {
        const tabId = this.getAttribute('href');
        _('.tabs > div').forEach(tab => {
          tab.classList.remove('active');
        });
        console.log(_(tabId));
        _(tabId).classList.add('active');
        e.preventDefault();
        return false;
     };
   });


  const url = 'https://apiinterns.osora.ru/';
  const form = _('#form_upload');

  form.onsubmit = function(u) {
    u.preventDefault()

    const files = _('[type=file]').files
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

  
  class Book {
    constructor(title,content) {
      this.title = title;
      this.content = content;
    }
  }

  class UI {
    static displayBooks() {
      const books = Store.getBooks();

      books.forEach((book) => UI.addBookToList(book));
      }

    static addBookToList(book) {
      const list = _('.book-list');
      const li = document.createElement('li');

      li.innerHTML = `${book.title}`;

      list.appendChild(li);
      }

    static clearFields() {
      _('#title').value = '';
      _('#content').value = '';
      }
    }

    class Store {
      static getBooks() {
        let books;
        if(localStorage.getItem('books') === null) {
          books = [];
        } else {
          books = JSON.parse(localStorage.getItem('books'));
        }

        return books;
      }

      static addBook(book) {
        const books = Store.getBooks();
        books.push(book);
        localStorage.setItem('books', JSON.stringify(books));
      }

    }



    _('#save').onclick = function(e) {
        const title = document.querySelector('#title').value;
        const book = new Book(title, content);
        UI.addBookToList(book);
        Store.addBook(book);
        UI.clearFields(); 
    } 
    document.addEventListener('DOMContentLoaded', UI.displayBooks);
}
           
    
