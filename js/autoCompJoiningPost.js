$(function() {
    function split( val ) {
    return val.split( /,\s*/ );
    }
    function extractLast( term ) {
    return split( term ).pop();
    }
    /*autoComplete  Suggestions*/
    var projects = [
    {value: "प्राचार्य",label: "प्राचार्य"},
    {value: "व्याख्याता",label: "व्याख्याता"},
    {value: "उच्च श्रेणी शिक्षक",label: "उच्च श्रेणी शिक्षक"},
    {value: "सहायक शिक्षक",label: "सहायक शिक्षक"},
    {value: "प्रायोगिक शिक्षक",label: "प्रायोगिक शिक्षक"},
    {value: "योग शिक्षक",label: "योग शिक्षक"},
    {value: "कम्प्यूटर शिक्षक",label: "कम्प्यूटर शिक्षक"}
    ];
         
    $( "#joining_post,#current_post" )
     // don't navigate away from the field on tab when selecting an item
    .bind( "keydown", function( event ) {
    if ( event.keyCode === $.ui.keyCode.TAB &&
    $( this ).autocomplete( "instance" ).menu.active ) {
    event.preventDefault();
    }
    })
    .autocomplete({
    minLength: 0,
    source: function( request, response ) {
    // delegate back to autocomplete, but extract the last term
    response( $.ui.autocomplete.filter(
    projects, extractLast( request.term ) ) );
    },
    
    //    source:projects,    
    focus: function() {
    // prevent value inserted on focus
    return false;
    },
    select: function( event, ui ) {
    var terms = split( this.value );
    // remove the current input
    terms.pop();
    // add the selected item
    terms.push( ui.item.value );
    // add placeholder to get the comma-and-space at the end
    terms.push( "" );
    //this.value = terms.join( ", " );
    
        /*
        var selected_label = ui.item.label;
        var selected_value = ui.item.value;
        
        var labels = $('#labels').val();
        var values = $('#values').val();
        
        if(labels == "")
        {
            $('#labels').val(selected_label);
            $('#values').val(selected_value);
        }
        else    
        {
            $('#labels').val(labels+","+selected_label);
            $('#values').val(values+","+selected_value);
        }   */
    
   
    
    }
    });
    
     });     
    