// Initialize the database
const sqlite3 = require('sqlite3');
var path = require('path')
const remote = require('electron').remote;
const app = remote.app;

const dbPath = path.join(app.getPath('userData'),'assets','db','dataDB.db')

var db = new sqlite3.Database(dbPath);

exports.updateTeacher = function(firstname,lastname,fileName,fileNameSign,mothername,fathername,dob,acad_year,joining_date,
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

          db.run("UPDATE TEACHER SET firstname = ? ,lastname = ?,imageName = ?,signName = ?, mother = ?,father = ?,dob = ?,academicYear = ?,joiningDate = ?,joiningNum = ?,joiningPost = ?,currentPost = ?, address = ?,TeachingSubjects = ?,adhar = ?,mobileNum=?,bankAcNum = ?,bankBranch = ?,qualification = ?,graduation = ?,postGraduation=?,training=?,diploma=?,gender = ? WHERE id = ? ", [firstname,lastname,fileName,fileNameSign,mothername,fathername,dob,acad_year,joining_date,joining_num,joining_post,current_post,address,teaching_subject,adhar,mob,bank_acc,bank_branch,qualification,graduation,postgraduation,traning,diploma,gender,updt_ShowTeach.value],function(err) {
            if (err) {
            console.log(err.message);
            swal(err.message);
            }
              else // if successful 
              {
              swal("धन्यवाद !!", "Teacher Record Updated Successfully!!", "success");
              //Save the image file to the local disk
                
              fs.copyFile(filePath, (path.join(app.getPath('userData'),'assets/teacher_photose',fileName)), (err) => {
                //if (err) throw swal(err.message);
                console.log('Image ' + fileName + ' stored.');
              });
              fs.copyFile(filePathSign,(path.join(app.getPath('userData'),'assets/teacher_signs',fileNameSign)),(err) => {
                //if (err) throw swal(err.message);
                console.log('Image ' + fileNameSign + ' stored.');
                lock_teacher();  
              });
           }
          });
          
          
        }});    
    

  }


function lock_teacher(){
  // lock the input fields
  document.getElementById("updateButton_T").setAttribute('disabled','true')
  document.getElementById("firstname").setAttribute('disabled','true')
  document.getElementById("lastname").setAttribute('disabled','true')
  document.getElementById("mothername").setAttribute('disabled','true')
  document.getElementById("fathername").setAttribute('disabled','true')
  document.getElementById("dob").setAttribute('disabled','true')
  document.getElementById("acad_year").setAttribute('disabled','true')
  document.getElementById("joining_date").setAttribute('disabled','true')
  document.getElementById("joining_num").setAttribute('disabled','true')
  document.getElementById("joining_post").setAttribute('disabled','true')
  document.getElementById("current_post").setAttribute('disabled','true')
  document.getElementById("teaching_subject").setAttribute('disabled','true')
  document.getElementById("address").setAttribute('disabled','true')
  document.getElementById("adhar").setAttribute('disabled','true')
  document.getElementById("mob").setAttribute('disabled','true')
  document.getElementById("bank_acc").setAttribute('disabled','true')
  document.getElementById("bank_branch").setAttribute('disabled','true')
  document.getElementById("imgbutton_T").setAttribute('disabled','true') 
  document.getElementById("signbutton_T").setAttribute('disabled','true')

  $("input[type=radio]").attr('disabled', true);
  //enabling unlock button
  document.getElementById("unlock_button_T").removeAttribute('disabled','true')

  //document.getElementById("postgrdn_inpt").setAttribute('disabled','true')
  //document.getElementById("diploma_inpt").setAttribute('disabled','true')
  //document.getElementById("traning_inpt").setAttribute('disabled','true')
  }


  

 