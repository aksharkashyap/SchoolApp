const database = require('../js/deleteStudDB');
const { app, dialog } = require('electron').remote;
const fs = require('fs');
const path = require('path');

filePath=''
function displayImage() {
filePath = dialog.showOpenDialog({ properties: ['openFile'] }).toString()
document.getElementById('imgID_updt').setAttribute('src',filePath);
document.getElementById("imgID_updt").style.display = "Inline-Block"

}

function delFunc(err){
    var firstname = document.getElementById('firstname').value;
    var fathername = document.getElementById('fathername').value;
    var admsn_num = document.getElementById('admsn_num').value;
    var fileName = firstname+admsn_num+fathername+".jpg"; 
   
    database.delPerson(fileName);
 };

/*Upper case convertor */
function upperCaseF(a){
   setTimeout(function(){
   a.value = a.value.toUpperCase();},1);}


    
   
   
  