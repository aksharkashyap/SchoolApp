// Initialize the database
const sqlite3 = require('sqlite3');
var path = require('path')
const remote = require('electron').remote;
const app = remote.app;
const dbPath = path.join(app.getPath('userData'),'assets','db','dataDB.db')

var db = new sqlite3.Database(dbPath);

exports.getPersons = function (func) {
  db.all("SELECT id,firstname,lastname,mother,father,dob,mobileNum,Studgroup,imageName FROM Student where studclass = ? AND academicYear = ?",[selClass.value,selAcadYear.value],function(err, row) {
    try{
      console.log(row[0])
    }
    catch(err) {
      Swal("Student's Record is Empty")
    }

    if(row[0] ==undefined){
    Swal("Data Not Available")
    }

    func(row);
});
}
