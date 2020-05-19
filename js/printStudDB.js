// Initialize the database
const sqlite3 = require('sqlite3');
var path = require('path')
const remote = require('electron').remote;
const app = remote.app;
const dbPath = path.join(app.getPath('userData'),'assets','db','dataDB.db')

var db = new sqlite3.Database(dbPath);

exports.getPersons = function (func) {
  db.get("SELECT imageName,firstname,lastname,mother,father,dob,religion,academicYear,admissionDate,admissionNum,studclass,address,mobileNum,adhar,bankAcNum,bankBranch,Studgroup,gender,type,category FROM Student where id = ?",[id_ent.value],function(err, row) {
      
        if (row == undefined)
        {
          sweetAlert("Data Not Available !!")
          reset();
        }
        else
        func(row);
   
});
}

//get academic year
exports.getStud = function (func) {
  db.all("SELECT studclass FROM Student where academicYear = ?",[ent_year.value],function(err, row) {
    if (row == '')
    {
      sweetAlert("Data Not Available !!")
      reset();
    }
    else
    func(row);
   
});
}