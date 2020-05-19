$(function() {
    function split( val ) {
    return val.split( /,\s*/ );
    }
    function extractLast( term ) {
    return split( term ).pop();
    }
    /*autoComplete  Suggestions*/
    var projects = [
    {value: "MATHS",label: "MATHEMATICS"},
    {value: "SCIENCE",label: "SCIENCE"},
    {value: "BIOLOGY",label: "BIOLOGY"},
    {value: "PHYSICS",label: "PHYSICS"},
    {value: "CHEMISTRY",label: "CHEMISTRY"},
    {value: "ENVIRONMENTAL STUDIES",label: "ENVIRONMENTAL STUDIES"},
    {value: "SOCIAL SCIENCE",label: "SOCIAL SCIENCE"},
    {value: "HISTORY",label: "HISTORY"},
    {value: "GEOGRAPHY",label: "GEOGRAPHY"},
    {value: "POLITICAL SCIENCE",label: "POLITICAL SCIENCE"},
    {value: "HINDI",label: "HINDI"},
    {value: "ENGLISH",label: "ENGLISH"},
    {value: "SANSKRIT",label: "SANSKRIT"},
    {value: "NAITIK SIKSHA",label: "NAITIK SIKSHA"},
    {value: "YOGA TRAINER",label: "YOGA TRAINER"},
    {value: "COMPUTER TRAINER",label: "COMPUTER TRAINER"},
    ];
         
    $( "#teaching_subject" )
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
    this.value = terms.join( ", " );
    
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
        
    return false;
    }
    });
    
     });     
    