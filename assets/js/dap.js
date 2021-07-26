$(document).ready(function(){
  $('.nav-button').click(function(){
	$('body').toggleClass('nav-open');
  });
  $("#learn-dap").click(function(){
    $("#sub-learn").toggleClass("list-none");
  });
});
