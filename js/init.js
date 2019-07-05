$(document).ready(function(){
	$('.button-collapse').sideNav();
    $('.parallax').parallax();
    $('.carousel').carousel();
    $('.modal').modal();
    $('.collapsible').collapsible();
	// Get toast DOM Element, get instance, then call dismiss function
	  var toastElement = document.querySelector('.toast');
	  var toastInstance = M.Toast.getInstance(toastElement);
	  toastInstance.dismiss();
});
