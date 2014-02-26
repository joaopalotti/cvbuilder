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
      heightStyle: "content",
      header: "h3"
    })
    /*.sortable({
      axis: "y",
      handle: "h3",
      stop: function(event, ui) {
        // TODO: remove this and test on IE
        ui.item.children("h3").triggerHandle("focusout");
      }
    })*/
    ;

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

    //Make education main div sortable
    $("#educationMainDiv").sortable();
    
    $(".removeDivButton").button({
        icons: {
        primary: "ui-icon-circle-close"
        },
        text: false
    }).click(
        function(e) { 
            $(this).parent().remove()
        }
    );
    
    //Button to add another div inside the accordion
    var eduDivCnt = 1;
    $(".addEducationDivButton").button({
        icons: {
        primary: "ui-icon-circle-plus"
        },
        text: false
    }).click(
        function(e) { 
            eduDivCnt++;
            $('<div class="bordedDiv">\
                    <button class="removeDivButton"  id ="removeEdu'+eduDivCnt+'"> Remove this education info </button>\
                    <p>Institution: <input id="institution'+ eduDivCnt +'" size="50"/> </p>\
                    <p>Start year: <input id="begin'+ eduDivCnt +'" size="4"/>   End year (leave blank if not finished): <input id="end'+ eduDivCnt +'" size="4"/> </p>\
                    <p>Major: <input id="major'+ eduDivCnt +'" size="25"/> <i>(Computer Science, Engineering, Architecture, etc.)</i> </p>\
                    <p>Degree: <input id="level' + eduDivCnt +'" size="20"/> <i>(Bachelor, Master, PhD, MBA, specialization?)</i> </p>\
                    <p>Other information (maybe the title of your thesis or area of specialization?): </p>\
                    <textarea id="info' + eduDivCnt +'" size="50" style="resize: none" rows="3" cols="50"> </textarea>\
               </div>').prependTo('#educationMainDiv');

        }
    );
    
    //Button to add another div inside the accordion in the Professional section
    var profDivCnt = 1;
    $(".addProfessionalExpDivButton").button({
        icons: {
        primary: "ui-icon-circle-plus"
        },
        text: false
    }).click(
        function(e) { 
            profCnt++;
            $('<div class="bordedDiv">\
                    <button id="buttonProf'+profCnt+'"> Remove this education info </button>\
                    <p>Institution: <input id="institution'+ profCnt +'" size="50"/> </p>\
                    <p>Start year: <input id="begin'+ profCnt +'" size="4"/>   End year (leave blank if not finished): <input id="end'+ profCnt +'" size="4"/> </p>\
                    <p>Major: <input id="major'+ profCnt +'" size="25"/> <i>(Computer Science, Engineering, Architecture, etc.)</i> </p>\
                    <p>Degree: <input id="level' + profCnt +'" size="20"/> <i>(Bachelor, Master, PhD, MBA, specialization?)</i> </p>\
                    <p>Other information (maybe the title of your thesis or area of specialization?): </p>\
                    <textarea id="info' + profCnt +'" size="50" style="resize: none" rows="3" cols="50"> </textarea>\
               </div>').prependTo('#educationMainDiv');

            $("#buttonEdu'+profCnt'").addClass('removeDivButton');
        }
    );


    ;
});

