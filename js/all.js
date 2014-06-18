var search = document.getElementById('s');
var list = document.getElementById('itemlist');
var listItems = list.querySelectorAll('li');
var expanded = list.querySelectorAll('.pane');
// search.focus();

search.addEventListener('keyup', function(e) {
  var val = new RegExp(e.target.value, 'gi');
  for(var i=0; i<listItems.length; i++) {
	if( e.target.value.length > 0) {
	  var text = listItems[i].innerHTML;

		if( !text.match(val)) {
			listItems[i].classList.add('is-hidden');
			expanded[i].classList.add('is-hidden');
		} else {
			listItems[i].classList.remove('is-hidden', 'active');
			expanded[i].classList.add('is-hidden');
		}

	} else {
	  listItems[i].classList.remove('is-hidden');
	}

  }
});


$(function(){
    $('#itemlist:[unselectable=on]').mousedown(function(event) {
        event.preventDefault();
        return false;
    });
});



var item = $('.item');
var pane = $('.pane');
// var allItems = $('#itemlist > .pane');

item.on('click', function() {
	var t = $(this);
	t.addClass('active');
	t.find(pane).toggleClass('is-hidden');
	return false;
});

// (function($) {

//   var allPanels = $('.accordion > dd').hide();

//   $('.accordion > dt > a').click(function() {
//     allPanels.slideUp();
//     $(this).parent().next().slideDown();
//     return false;
//   });

// })(jQuery);
