const database_updt = require('../js/updateStud_RetriveDB');
var path_updt = require('path')
const remote_updt = require('electron').remote;
const app_updt = remote_updt.app;
   
   function showStudent(){

    if (document.getElementById("updt_Show").value == ""){
      swal("Please Enter ID!!")
    }
    
    else
      studUnlock()    
      database_updt.getPersons(function(persons) {
      
        document.getElementById("firstname").value = persons.firstname;
        document.getElementById("lastname").value = persons.lastname;
        document.getElementById("mothername").value = persons.mother;
        document.getElementById("fathername").value = persons.father;
        document.getElementById("religion").value = persons.religion;
        document.getElementById("dob").value = persons.dob;
        document.getElementById("acad_year").value = persons.academicYear;
        document.getElementById("admsn_num").value = persons.admissionNum;
        document.getElementById("admsn_date").value = persons.admissionDate;
        document.getElementById("address").value = persons.address;
        document.getElementById("mob").value = persons.mobileNum;
        document.getElementById("adhar").value = persons.adhar;
        document.getElementById("bank_acc").value = persons.bankAcNum;
        document.getElementById("bank_branch").value = persons.bankBranch;
        document.getElementById("imgID_updt").setAttribute('src',path_updt.join(app_updt.getPath("userData"),"assets","stud_photose",persons.imageName))
        document.getElementById("imgID_updt").style.display = "inline-block";

        $("input[name=group][value=" + persons.Studgroup + "]").prop('checked', true);
        $("input[name=gender][value=" + persons.gender + "]").prop('checked', true);
        $("input[name=type][value=" + persons.type + "]").prop('checked', true);
        $("input[name=category][value=" + persons.category + "]").prop('checked', true);
        //$(".stud_class").val(persons.studclass);

        document.getElementById("stud_class").value = persons.studclass;


        document.getElementById("studBorder").setAttribute('Style','visibility:show')
        document.getElementById("updateButton").setAttribute('Style','visibility:show')
        document.getElementById("unlockButton").setAttribute('Style','visibility:show')

       })}

       