const database = require('../js/deleteTeacherDB');
const { app, dialog } = require('electron').remote;
const fs = require('fs');
const path = require('path');

filePath = ''
filePathSign = ''
function displayImage() {
filePath = dialog.showOpenDialog({ properties: ['openFile'] }).toString()
document.getElementById('imgID_T').setAttribute('src',filePath);
document.getElementById("imgID_T").style.display = "Inline-Block"

}
function displaySign() {
    filePathSign = dialog.showOpenDialog({ properties: ['openFile'] }).toString()
    document.getElementById("signImgID_T").setAttribute('src',filePathSign);
    document.getElementById("signImgID_T").style.display = "Inline-Block"
    
    }

function delTeacherFunc(err){
    
    var firstname = document.getElementById('firstname').value;
    var fathername = document.getElementById('fathername').value;
    var joining_num = document.getElementById('joining_num').value;
    const fileName = firstname+joining_num+fathername+"photo"+".jpg";
    const fileNameSign = firstname+joining_num+fathername+"sign"+".jpg";

    database.delTeacher(fileName,fileNameSign);
       
  };
