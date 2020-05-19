// Initialize the database
const sqlite3 = require('sqlite3');
var path = require('path')
const remote = require('electron').remote;
const app = remote.app;
const dbPath = path.join(app.getPath('userData'),'assets','db','dataDB.db')

var db = new sqlite3.Database(dbPath);

exports.getPersons = function (func) {
  db.get("SELECT imageName,firstname,lastname,mother,father,dob,religion,academicYear,admissionDate,admissionNum,studclass,address,mobileNum,adhar,bankAcNum,bankBranch,Studgroup,gender,type,category FROM Student where id = ?",[updt_Show.value],function(err, row) {
      
        if (row == undefined)
        {
          document.getElementById("studBorder").setAttribute('Style','visibility:hidden')
          document.getElementById("updateButton").setAttribute('Style','visibility:hidden')
          document.getElementById("unlockButton").setAttribute('Style','visibility:hidden')
          sweetAlert("Data Not Available !!")
        }
        else
        func(row);
   
});
}
