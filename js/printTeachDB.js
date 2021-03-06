// Initialize the database
const sqlite3 = require('sqlite3');
var path = require('path')
const remote = require('electron').remote;
const app = remote.app;
const dbPath = path.join(app.getPath('userData'),'assets','db','dataDB.db')

var db = new sqlite3.Database(dbPath);

exports.getPersons = function (func) {
  db.get("SELECT firstname,lastname,imageName,signName,mother,father,dob,academicYear,joiningDate,joiningNum,joiningPost,currentPost, address,TeachingSubjects,adhar,mobileNum,bankAcNum,bankBranch,qualification,graduation,postGraduation,training,diploma,gender FROM Teacher where id = ?",[id_ent.value],function(err, row) {
      
        if (row == undefined)
        {
          sweetAlert("Data Not Available !!")
          reset();
        }
        else
        func(row);
   
});
}
