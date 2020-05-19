const database_updt = require('../js/printStudDB');
var path_updt = require('path')
const remote_updt = require('electron').remote;
const app_updt = remote_updt.app;
   
   function showStud(){

    if (document.getElementById("id_ent").value == ""){
      swal("Please Enter ID!!")
    }
    
    else
        
      database_updt.getPersons(function(persons) {
      
        
        $('#firstname').text(persons.firstname);
        $('#lastname').text(persons.lastname);
        $('#mothername').text(persons.mother);
        $('#fathername').text(persons.father);
        $('#religion').text(persons.religion);
        $('#dob').text(persons.dob);
        $('#acad_year').text(persons.academicYear);
        $('#admsn_num').text(persons.admissionNum);
        $('#admsn_date').text(persons.admissionDate);
        $('#address').text(persons.address);
        $('#mob').text(persons.mobileNum);
        $('#adhar').text(persons.adhar);
        $('#bank_acc').text(persons.bankAcNum);
        $('#bank_branch').text(persons.bankBranch);
        
        document.getElementById("imgID").setAttribute('src',path_updt.join(app_updt.getPath("userData"),"assets","stud_photose",persons.imageName))
        document.getElementById("imgID").style.display = "inline-block";

       $('#group').text(persons.Studgroup);
       $('#type').text(persons.type);
       $('#category').text(persons.category);
       $('#gender').text(persons.gender);
        // $("input[name=group][value=" + persons.Studgroup + "]").prop('checked', true);
        //$("input[name=gender][value=" + persons.gender + "]").prop('checked', true);
        //$("input[name=type][value=" + persons.type + "]").prop('checked', true);
        //$("input[name=category][value=" + persons.category + "]").prop('checked', true);
        //$(".stud_class").val(persons.studclass)
        $('#stud_class').text(persons.studclass);
        document.getElementById("printButt").removeAttribute("style");
        

       })
    
    
       
       
       }

       
       function reset(){

        document.getElementById("firstname").textContent = '';
        document.getElementById("lastname").textContent = '';
        document.getElementById("mothername").textContent = '';
        document.getElementById("fathername").textContent = '';
        document.getElementById("religion").textContent = '';
        document.getElementById("dob").textContent = '';
        document.getElementById("acad_year").textContent = '';
        document.getElementById("admsn_num").textContent = '';
        document.getElementById("admsn_date").textContent = '';
        document.getElementById("address").textContent = '';
        document.getElementById("mob").textContent = '';
        document.getElementById("adhar").textContent = '';
        document.getElementById("bank_acc").textContent = '';
        document.getElementById("bank_branch").textContent = '';
        document.getElementById("imgID").style.display = "none";

        //$("input[type=radio]").prop('checked', false);
        document.getElementById("type").textContent = '';
        document.getElementById("group").textContent = '';
        document.getElementById("gender").textContent = '';
        document.getElementById("category").textContent = '';

        document.getElementById("stud_class").textContent = '';

        document.getElementById("printButt").style.display="none";
        
       }


function printt(){


     document.getElementById('printButt').style.visibility = 'hidden';
     document.getElementById('id_ent').style.visibility = 'hidden'; 
     document.getElementById('show_butn').style.visibility = 'hidden';  
     document.getElementById('back_btn').style.visibility = 'hidden';  
     window.print(); 
     document.getElementById('printButt').style.visibility = 'visible'; 
     document.getElementById('id_ent').style.visibility = 'visible'; 
     document.getElementById('show_butn').style.visibility = 'visible'; 
     document.getElementById('back_btn').style.visibility = 'visible';  
     return true;
     
}



function selYearFunc(){
var classStud = ''
  database_updt.getStud(function(stud) {

      for (i = 0; i < stud.length; i++) {
        
        classStud += ' <option value= ' + stud[i].studclass +'>' + stud[i].studclass +' </option>'
   
   console.log(stud[i].studclass);
      }
      document.getElementById('classStud').innerHTML = classStud;
    
    })}
  
   
