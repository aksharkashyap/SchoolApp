const database_rtv = require('../js/printTeachDB');
var path_updt = require('path')
const remote_updt = require('electron').remote;
const app_updt = remote_updt.app;
   
   function showTeacher(){

    if (document.getElementById("id_ent").value == ""){
      swal("Please Enter ID!!")
    }
    
    else
        
      database_rtv.getPersons(function(persons) {
        $('#firstname').text(persons.firstname);
        $('#lastname').text(persons.lastname);
        $('#mothername').text(persons.mother);
        $('#fathername').text(persons.father);
        $('#religion').text(persons.religion);
        $('#dob').text(persons.dob);
        $('#acad_year').text(persons.academicYear);
        $('#joining_date').text(persons.joiningDate);
        $('#joining_num').text(persons.joiningNum);
        $('#joining_post').text(persons.joiningPost);
        $('#current_post').text(persons.currentPost);
        $('#teaching_subject').text(persons.TeachingSubjects);
        $('#address').text(persons.address);
        $('#mob').text(persons.mobileNum);
        $('#adhar').text(persons.adhar);
        $('#bank_acc').text(persons.bankAcNum);
        $('#bank_branch').text(persons.bankBranch);
        $('#qualification').text(persons.qualification);
        $('#graduation').text(persons.graduation);
        $('#postGraduatn').text(persons.postGraduation);
        $('#traning').text(persons.training);
        $('#diploma').text(persons.diploma);
        $('#genderT').text(persons.gender);

        
        
        document.getElementById("imgID_T").setAttribute('src',path_updt.join(app_updt.getPath("userData"),"assets","teacher_photose",persons.imageName))
        document.getElementById("imgID_T").style.display = "inline-block";
        document.getElementById("signImgID_T").setAttribute('src',path_updt.join(app_updt.getPath("userData"),"assets","teacher_signs",persons.signName))
        document.getElementById("signImgID_T").style.display = "inline-block";

     
        document.getElementById("printButt").removeAttribute("style");
        
       })       
       }

       
       function reset(){
        
        document.getElementById("imgID_T").style.display = "none";
        document.getElementById("signImgID_T").style.display = "none";
        document.getElementById("printButt").style.display="none";
        document.getElementById("firstname").textContent = '';
        document.getElementById("lastname").textContent = '';
        document.getElementById("mothername").textContent = '';
        document.getElementById("fathername").textContent = '';
        document.getElementById("dob").textContent = '';
        document.getElementById("acad_year").textContent = '';
        document.getElementById("joining_date").textContent = '';
        document.getElementById("joining_num").textContent = '';
        document.getElementById("joining_post").textContent = '';
        document.getElementById("teaching_subject").textContent = '';
        document.getElementById("address").textContent = '';
        document.getElementById("mob").textContent = '';
        document.getElementById("adhar").textContent = '';
        document.getElementById("bank_acc").textContent = '';
        document.getElementById("bank_branch").textContent = '';
        document.getElementById("qualification").textContent = '';
        document.getElementById("graduation").textContent = '';
        document.getElementById("postGraduatn").textContent = '';
        document.getElementById("traning").textContent = '';
        document.getElementById("diploma").textContent = '';
        document.getElementById("genderT").textContent = '';

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
