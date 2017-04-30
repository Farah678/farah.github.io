// JavaScript Document
 $(document).ready(function(){
$('a.navbar-brand, a.nav-link').click(function () {
var $secId = $(this);
$('html, body').stop().animate({
scrollTop: ($($secId.attr('href')).offset().top - 70)},1000);
 });
$('body').scrollspy({
target: ".navbar" ,offset:71
});
	 
});