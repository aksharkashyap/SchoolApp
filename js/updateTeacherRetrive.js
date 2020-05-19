const database_updt = require('../js/updateTeachRetriveDB');
var path_updt = require('path')
const remote_updt = require('electron').remote;
const app_updt = remote_updt.app;
   
   function showTeacher(){

    unlock_teacher();
    if (document.getElementById("updt_ShowTeach").value == ""){
      swal("Please Enter ID!!")
    }
    
    else
      
      database_updt.getPersons(function(persons) {
      
        document.getElementById("firstname").value = persons.firstname;
        document.getElementById("lastname").value = persons.lastname;
        document.getElementById("mothername").value = persons.mother;
        document.getElementById("fathername").value = persons.father;
        document.getElementById("dob").value = persons.dob;
        document.getElementById("acad_year").value = persons.academicYear;
        
        document.getElementById("joining_date").value = persons.joiningDate;
        document.getElementById("joining_num").value = persons.joiningNum;
        document.getElementById("joining_post").value = persons.joiningPost;
        document.getElementById("current_post").value = persons.currentPost;
        document.getElementById("teaching_subject").value = persons.TeachingSubjects;
        
        document.getElementById("address").value = persons.address;
        document.getElementById("mob").value = persons.mobileNum;
        document.getElementById("adhar").value = persons.adhar;
        document.getElementById("bank_acc").value = persons.bankAcNum;
        document.getElementById("bank_branch").value = persons.bankBranch;
        document.getElementById("imgID_T").setAttribute('src',path_updt.join(app_updt.getPath("userData"),"assets","teacher_photose",persons.imageName))
        document.getElementById("imgID_T").style.display = "inline-block";
        document.getElementById("signImgID_T").setAttribute('src',path_updt.join(app_updt.getPath("userData"),"assets","teacher_signs",persons.signName))
        document.getElementById("signImgID_T").style.display = "inline-block";

        $("input[name=graduation][value=" + persons.graduation + "]").prop('checked', true);
        $("input[name=postGraduatn][value=" + persons.postGraduation + "]").prop('checked', true);
        $("input[name=diploma][value=" + persons.diploma + "]").prop('checked', true);
        $("input[name=traning][value=" + persons.training + "]").prop('checked', true);
 
        if (persons.graduation =="NA"){
          document.getElementById("grdn_inpt").value = ""
          document.getElementById("grdn_inpt").setAttribute('disabled',true)
        }
        
        if (persons.postGraduation =="NA"){
          document.getElementById("postgrdn_inpt").value = ""
          document.getElementById("postgrdn_inpt").setAttribute('disabled',true)
        }
        if (persons.diploma =="NA"){
          document.getElementById("diploma_inpt").value = ""
          document.getElementById("diploma_inpt").setAttribute('disabled',true)
        }
        if (persons.training =="NA"){
          document.getElementById("traning_inpt").value = ""
          document.getElementById("traning_inpt").setAttribute('disabled',true)
        }
        if (!(persons.graduation == "NA")){
          document.getElementById("grdn_inpt").value = persons.graduation;
          $("input[id=grdn_yes]").prop('checked', true);
        }
        if (!(persons.postGraduation == "NA")){
          document.getElementById("postgrdn_inpt").value = persons.postGraduation;
          $("input[id=postgrdn_yes]").prop('checked', true);
        }
        if (!(persons.diploma == "NA")){
          document.getElementById("diploma_inpt").value = persons.diploma;
          $("input[id=diploma_yes]").prop('checked', true);
        }
        if (!(persons.training == "NA")){
          document.getElementById("traning_inpt").value = persons.training;
          $("input[id=traning_yes]").prop('checked', true);
          }
     
        
        $("input[name=genderT][value=" + persons.gender + "]").prop('checked', true);
        $("input[name=qualification][value=" + persons.qualification + "]").prop('checked', true);
        //$(".stud_class").val(persons.studclass);
        document.getElementById("TeachBorder").setAttribute('Style','visibility:show')
        document.getElementById("updateButton_T").setAttribute('Style','visibility:show')
        document.getElementById("unlock_button_T").setAttribute('Style','visibility:show')

        

       })}



