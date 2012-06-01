/******************************************************************
 *                                                                *
 * Code for customizing interface elements and interactivity.     *
 *                                                                *
 ******************************************************************/
jQuery(document).ready(function(){
	$('.accordion .head').click(function() {
		$(this).next().toggle();
		return false;
	}).next().hide();
});

$(function(){

	// Curriculum Vitae sections
	$("#curriculum")
    .accordion({ 
      header: "h3" 
    })
    .sortable({
      axis: "y",
      handle: "h3",
      stop: function(event, ui) {
        // TODO: remove this and test on IE
        ui.item.children("h3").triggerHandle("focusout");
      }
    });

	// Call the JavaScript function to generate the curriculum
	$('#generate')
    .click(function(){
      genCV();
		  return false;
	  });

  $('#login')
    .click(function(){
      login();
      return false;
    });

  $('#generate, #login')
    .hover(
      function(){ $(this).addClass('ui-state-hover'); },
      function(){ $(this).removeClass('ui-state-hover'); }
    );
	
  // FROM HERE ON IS THE ORIGINAL CODE FOR THE EXAMPLE PAGE. IF SOMETHING IS
  // CHANGED FOR OUR FUNCTIONALITY, PLEASE PUT IT ABOVE THIS LINE. EVERYTHING
  // NOT USED SHOULD BE EVENTUALLY REMOVED.

  // Tabs
	$('#tabs').tabs();

	// Dialog
	$('#dialog').dialog({
		autoOpen: false,
		width: 600,
		buttons: {
			"Ok": function() {
				$(this).dialog("close");
			},
			"Cancel": function() {
				$(this).dialog("close");
			}
		}
	});

	// Datepicker
	$('#datepicker').datepicker({
		inline: true
	});

	// Slider
	$('#slider').slider({
		range: true,
		values: [17, 67]
	});

	// Progressbar
	$("#progressbar").progressbar({
		value: 20
	});

	//hover states on the static widgets
	$('#dialog_link, ul#icons li').hover(
		function() { $(this).addClass('ui-state-hover'); },
		function() { $(this).removeClass('ui-state-hover'); }
	);

});

