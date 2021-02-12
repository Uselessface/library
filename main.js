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