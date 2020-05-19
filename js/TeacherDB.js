// Initialize the database
const sqlite3 = require('sqlite3');
var path = require('path')
const remote = require('electron').remote;
const app = remote.app;
const dbPath = path.join(app.getPath('userData'),'assets','db','dataDB.db')

var db = new sqlite3.Database(dbPath);
db.run("CREATE TABLE IF NOT EXISTS Teacher ('id' INTEGER PRIMARY KEY AUTOINCREMENT,'firstname' NOT NULL,'lastname' NOT NULL,'imageName' UNIQUE, 'signName' UNIQUE,mother,father,dob,'academicYear' NUMBER ,joiningDate,'joiningNum' UNIQUE,joiningPost,currentPost,address,TeachingSubjects,'adhar' NUMBER UNIQUE,'mobileNum' NUMBER,'bankAcNum' NUMBER,bankBranch,qualification,graduation,postGraduation,training,diploma,gender)");

exports.addTeacher = function(firstname,lastname,fileName,fileNameSign,mothername,fathername,dob,acad_year,joining_date,
    joining_num,joining_post,current_post,address,teaching_subject,adhar,mob,bank_acc,
    bank_branch,qualification,graduation,postgraduation,traning,diploma,gender) {
       //graduation
       if ((document.getElementById("grdn_no").checked)){ 
        graduation = "NA";
      }
      if (document.getElementById("grdn_yes").checked) {
        graduation = document.getElementById("grdn_inpt").value;
      }
      //postgraduation
      if ((document.getElementById("postgrdn_no").checked)){ 
        postgraduation = "NA";
      }
      if (document.getElementById("postgrdn_yes").checked) {
        postgraduation = document.getElementById("postgrdn_inpt").value;
      }
      //traning
      if ((document.getElementById("traning_no").checked)){ 
        traning = "NA";
      }
      if (document.getElementById("traning_yes").checked) {
        traning = document.getElementById("traning_inpt").value;
      }
      //diploma
      if ((document.getElementById("diploma_no").checked)){ 
        diploma = "NA";
      }
      if (document.getElementById("diploma_yes").checked) {
        diploma = document.getElementById("diploma_inpt").value;
      }
      //

      swal({
        title: "Are you sure? ",
        text: "Do you want to continue ?",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
      
      db.run("INSERT INTO Teacher (firstname,lastname,imageName, signName,mother,father,dob,academicYear,joiningDate,joiningNum,joiningPost,currentPost,address,TeachingSubjects,adhar,mobileNum,bankAcNum,bankBranch,qualification,graduation,postGraduation,training,diploma,gender) VALUES (?, ?, ?,?,?, ?, ?,?, ?, ?,?, ?, ?,?, ?, ?,?, ?, ?,?,?,?,?,?)", [firstname,lastname,fileName,fileNameSign,mothername,fathername,dob,acad_year,joining_date,joining_num,joining_post,current_post,address,teaching_subject,adhar,mob,bank_acc,bank_branch,qualification,graduation,postgraduation,traning,diploma,gender],function(err) {
      if (err) {
      console.log(err.message);
      swal(err.message);
      }
        else // if successful 
        {
        swal("धन्यवाद !!", "फॉर्म सफलतापूर्वक सहेज ली गई है!", "success");
        //Save the image file to the local disk
        
        fs.copyFile(filePath, (path.join(app.getPath('userData'),'assets/teacher_photose',fileName)), (err) => {
              if (err) throw swal(err.message);
              console.log('Image ' + fileName + ' stored.');
              // At that point, store some information like the file name for later use
        });
        fs.copyFile(filePathSign,(path.join(app.getPath('userData'),'assets/teacher_signs',fileNameSign)),(err) => {
          if (err) throw swal(err.message);
          console.log('Image ' + fileNameSign + ' stored.');
         
        });
      }})
      // Reset the input fields
      document.getElementById('firstname').value = '';
      document.getElementById('lastname').value = '';
      document.getElementById('mothername').value = '';
      document.getElementById('fathername').value = '';
      document.getElementById('dob').value = '';
      //document.getElementById('acad_year').value = '';
      //document.getElementById('joining_date').value = '';
      document.getElementById('joining_num').value = '';
      document.getElementById('joining_post').value = '';
      document.getElementById('current_post').value = '';
      document.getElementById('teaching_subject').value = ''; 
      document.getElementById('address').value = '';
      document.getElementById('mob').value = '';
      document.getElementById('adhar').value = '';
      document.getElementById('bank_acc').value = '';
      document.getElementById('bank_branch').value = '';

      document.getElementById('grdn_inpt').value = ''; 
      document.getElementById('traning_inpt').value = ''; 
      document.getElementById('postgrdn_inpt').value = ''; 
      document.getElementById('diploma_inpt').value = '';  

      document.getElementById('grdn_inpt').setAttribute('disabled','true')
      document.getElementById('traning_inpt').setAttribute('disabled','true')
      document.getElementById('postgrdn_inpt').setAttribute('disabled','true')
      document.getElementById('diploma_inpt').setAttribute('disabled','true')

      //
      Array.from(document.querySelectorAll('input[name="genderT"]:checked'),input => input.checked = false);
      Array.from(document.querySelectorAll('input[name="traning"]:checked'),input => input.checked = false);
      Array.from(document.querySelectorAll('input[name="postGraduatn"]:checked'),input => input.checked = false);
      Array.from(document.querySelectorAll('input[name="graduation"]:checked'),input => input.checked = false);
      Array.from(document.querySelectorAll('input[name="qualification"]:checked'),input => input.checked = false);
      Array.from(document.querySelectorAll('input[name="diploma"]:checked'),input => input.checked = false);
      //
      document.getElementById('imgID').setAttribute('src','#')
      document.getElementById("imgID").style.display = "none"
      document.getElementById('signImgID').setAttribute('src','#')
      document.getElementById("signImgID").style.display = "none"


}



  });
        
  }


