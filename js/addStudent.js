const database = require('../js/StudentDB');
const { app, dialog } = require('electron').remote;
const fs = require('fs');
const path = require('path');

filePath = undefined;

function displayImage() {
// Open a dialog to ask for the file path
// window.filePath - making filePath global by using window
filePath = dialog.showOpenDialog({ properties: ['openFile'] }).toString()
document.getElementById('imgID').setAttribute('src',filePath);
document.getElementById("imgID").style.display = "Inline-Block"
}


function addFunc(err){
   if (filePath == undefined)
   {
   swal("कृपया स्टूडेंट का फोटो अपलोड करे !!");
   }
   
   else if(document.querySelector('input[name = "group"]:checked') == null)
   {
      swal("Please Select Group");
   }
   else if(document.querySelector('input[name = "gender"]:checked') == null)
   {
      swal("Please Select Gender");
   }
   else if(document.querySelector('input[name = "type"]:checked') == null)
   {
      swal("Please Select Type");
   }
   else if(document.querySelector('input[name = "category"]:checked') == null)
   {
      swal("Please Select Category");
   }
   
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

   var fileName = path.basename(filePath);
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

/*form reset*/
function studReset(){
      document.getElementById('firstname').value = '';
      document.getElementById('lastname').value = '';
      document.getElementById('mothername').value = '';
      document.getElementById('fathername').value = '';
      document.getElementById('religion').value = '';
      document.getElementById('dob').value = '';
      document.getElementById('acad_year').value = '';
      document.getElementById('admsn_date').value = '';
      document.getElementById('admsn_num').value = '';
      document.getElementById('stud_class').value = '';
      document.getElementById('address').value = '';
      document.getElementById('mob').value = '';
      document.getElementById('adhar').value = '';
      document.getElementById('bank_acc').value = '';
      document.getElementById('bank_branch').value = '';
      //
      Array.from(document.querySelectorAll('input[name="group"]:checked'),input => input.checked = false);
      Array.from(document.querySelectorAll('input[name="gender"]:checked'),input => input.checked = false);
      Array.from(document.querySelectorAll('input[name="type"]:checked'),input => input.checked = false);
      Array.from(document.querySelectorAll('input[name="category"]:checked'),input => input.checked = false);
      //
      document.getElementById('imgID').setAttribute('src','#');
      document.getElementById("imgID").style.display = "none";
    
      sweetAlert("फॉर्म रिसेट हो गयी है !! ");
    }
   
   
  