const database = require('../js/updateStudDB');
const { app, dialog } = require('electron').remote;
const fs = require('fs');
const path = require('path');

filePath=''
function displayImage() {
// Open a dialog to ask for the file path
// window.filePath - making filePath global by using window
filePath = dialog.showOpenDialog({ properties: ['openFile'] }).toString()
document.getElementById('imgID_updt').setAttribute('src',filePath);
document.getElementById("imgID_updt").style.display = "Inline-Block"

}

function addFunc(err){

   // Retrieve the input fields
   var firstname = document.getElementById('firstname').value;
   var lastname = document.getElementById('lastname').value;
   var mothername = document.getElementById('mothername').value;
   var fathername = document.getElementById('fathername').value;
   var religion = document.getElementById('religion').value;
   var dob = document.getElementById('dob').value;
   var acad_year = document.getElementById('acad_year').value;
   var admsn_date = document.getElementById('admsn_date').value;
   var admsn_num = document.getElementById('admsn_num').value;
   var stud_class = document.getElementById('stud_class').value;
   var address = document.getElementById('address').value;
   var mob = document.getElementById('mob').value;
   var adhar = document.getElementById('adhar').value;
   var bank_acc = document.getElementById('bank_acc').value;
   var bank_branch = document.getElementById('bank_branch').value;

   var group = document.querySelector('input[name="group"]:checked').value;
   var gender = document.querySelector('input[name="gender"]:checked').value;
   var type = document.querySelector('input[name="type"]:checked').value;
   var category = document.querySelector('input[name="category"]:checked').value;

  // var fileName = path.basename(filePath);
   fileName = firstname+admsn_num+fathername+".jpg";   
   // const fileName = (firstname+admsn_num+acad_year+".jpg");
   
   
   // Save the person details in the database
   database.addPerson(firstname,lastname,fileName,mothername,fathername,religion,dob,acad_year,admsn_date,admsn_num,stud_class
      ,address,mob,adhar,bank_acc,bank_branch,group,gender,type,category);
 };



/*Upper case convertor */
function upperCaseF(a){
   setTimeout(function(){
   a.value = a.value.toUpperCase();},1);}

function studUnlock(){

        //lock the Unlock Button again
        document.getElementById("unlockButton").setAttribute('disabled','true')
        // unlock the input fields
        document.getElementById("firstname").removeAttribute('disabled','true')
        document.getElementById("lastname").removeAttribute('disabled','true')
        document.getElementById("mothername").removeAttribute('disabled','true')
        document.getElementById("fathername").removeAttribute('disabled','true')
        document.getElementById("religion").removeAttribute('disabled','true')
        document.getElementById("dob").removeAttribute('disabled','true')
        document.getElementById("acad_year").removeAttribute('disabled','true')
        document.getElementById("admsn_date").removeAttribute('disabled','true')
        document.getElementById("admsn_num").removeAttribute('disabled','true')
        document.getElementById("stud_class").removeAttribute('disabled','true')
        document.getElementById("address").removeAttribute('disabled','true')
        document.getElementById("adhar").removeAttribute('disabled','true')
        document.getElementById("mob").removeAttribute('disabled','true')
        document.getElementById("bank_acc").removeAttribute('disabled','true')
        document.getElementById("bank_branch").removeAttribute('disabled','true')
        document.getElementById("imgbutton").removeAttribute('disabled','true') 
        document.getElementById("updateButton").removeAttribute('disabled','true')
        $("input[type=radio]").attr('disabled', false);

        
        
    }
   
   
  