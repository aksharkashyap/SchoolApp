// Initialize the database
const sqlite3 = require('sqlite3');
var path = require('path')
const remote = require('electron').remote;
const app = remote.app;

const dbPath = path.join(app.getPath('userData'),'assets','db','dataDB.db')

var db = new sqlite3.Database(dbPath);

exports.delTeacher = function(fileName,fileNameSign) {

    var delPhoto = (path.join(app.getPath('userData'),'assets/teacher_photose',fileName));
    var delSign = (path.join(app.getPath('userData'),'assets/teacher_signs',fileNameSign));

    swal({
        title: "Are you sure? ",
        text: "Do you want to continue ?",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
        
    db.run("DELETE FROM TEACHER WHERE id = ? ", [updt_ShowTeach.value],function(err) {
        if (err) {
            console.log(err.message);
            swal(err.message);
            }
              else
            {  //delete image file
                fs.unlink(delSign,(err) => {    
                });
                fs.unlink(delPhoto,(err) => {
            });
            swal("Teacher Record DELETED Successfully!!");
                document.getElementById("TeachBorder").setAttribute('Style','visibility:hidden')
                document.getElementById("delButton_T").setAttribute('Style','visibility:hidden')
            }
  });
}});
  }

 