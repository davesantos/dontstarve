var search = document.getElementById('s');
var list = document.getElementById('itemlist');
var listItems = list.querySelectorAll('li');

// search.focus();

search.addEventListener('keyup', function(e) {
  var val = new RegExp(e.target.value, 'gi');
  for(var i=0; i<listItems.length; i++) {
	if( e.target.value.length > 0) {
	  var text = listItems[i].innerHTML;

	  if( !text.match(val)) {
		listItems[i].classList.add('is-hidden');
	  } else {
		listItems[i].classList.remove('is-hidden');
	  }
	} else {
	  listItems[i].classList.remove('is-hidden');
	}

  }
});

