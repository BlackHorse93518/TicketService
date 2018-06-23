function responsive_header() {
		var x = document.getElementById("myTopnav");
		if (x.className === "topnav") {
			x.className += " responsive";
		} else {
			x.className = "topnav";
		}
}

function responsive_header2() {
		if ( $(".searchbar .tab").css('display') == 'none' ){
			$("#nav2button").html("&#9195;");
			$(".searchbar .tab").show();
			$(".searchbar .sortbox").show();
			$(".searchbar .search-container").show();
		}else{
			$("#nav2button").html("&#9196;");
			$(".searchbar .tab").hide();
			$(".searchbar .sortbox").hide();
			$(".searchbar .search-container").hide();
		}
		
}

 
$(document).ready(function(){
	if ($('#menuactive').length > 0){
		$('.sidebar .sidebar-wrapper').animate({
				scrollTop: $('#menuactive').offset().top - 200
			}, 500);
	}
});

    
	

 // function responsive_sidebar(){
	// $(".sidebar").css('left', '-144px');
 // }

// $("body").click(function(e) {
  // if(e.target.id !== 'menu'){
    // $("#menu").hide();
  // }      
// });
