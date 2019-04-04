let $= require('jquery')
import squirrel from '../images/squirrel.jpg'
import bird from '../images/bird.jpg'

$(document).ready(function () {
	// when a hanburger menu is clicked
	let $ul = $(".nav__list"),
		 $menu = $(".nav__menu");

	$($menu).click(function () {
		// toggle menu-click Class
		$ul.toggleClass("menu-click");
	}); // end click event handler
});

$('#images_bird').attr("src", bird)
$('#images_squirrel').attr("src", squirrel)