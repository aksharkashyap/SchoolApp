// Initialize the database
const sqlite3 = require('sqlite3');
var path = require('path')
const remote = require('electron').remote;
const app = remote.app;
var fs = require('fs');

const dbPath = path.join(app.getPath('userData'),'assets','db','dataDB.db')
var db = new sqlite3.Database(dbPath);

exports.delPerson = function(fileName) {
 
    var delImage = (path.join(app.getPath('userData'),'assets/stud_photose',fileName));

    swal({
        title: "Are you sure? ",
        text: "Do you want to continue ?",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
        
    db.run("DELETE FROM Student WHERE id = ? ", [updt_Show.value],function(err) {
        if (err) {
        console.log(err.message);
        swal(err.message);
        }
          else
        {  //delete image file
            fs.unlink(delImage, (err) => {
            /*if (err) {
               alert("An error ocurred updating the file" + err.message);
               console.log(err);
               return;
            }
            console.log("File succesfully deleted");
             //---------------------------------------------
            */
        });
        swal("Student Record DELETED Successfully!!");
            document.getElementById("studBorder").setAttribute('Style','visibility:hidden')
            document.getElementById("delButton").setAttribute('Style','visibility:hidden')
        }
      });

    }});
  } 

  
