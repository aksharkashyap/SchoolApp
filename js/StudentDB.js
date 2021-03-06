// Initialize the database
const sqlite3 = require('sqlite3');
var path = require('path')
const remote = require('electron').remote;
const app = remote.app;

const dbPath = path.join(app.getPath('userData'),'assets','db','dataDB.db')

var db = new sqlite3.Database(dbPath);
db.run("CREATE TABLE IF NOT EXISTS Student ('id' INTEGER PRIMARY KEY AUTOINCREMENT,'firstname' NOT NULL,'lastname' NOT NULL,'imageName' UNIQUE,mother,father,religion,dob,'academicYear' NUMBER ,admissionDate,'admissionNum' UNIQUE,studclass,address,'mobileNum' NUMBER,'adhar' NUMBER UNIQUE,'bankAcNum' NUMBER,bankBranch,Studgroup,gender,type,category)");

exports.addPerson = function(firstname,lastname,fileName,mothername,fathername,religion,dob,acad_year,admsn_date,admsn_num,stud_class,address,mob,adhar,bank_acc,bank_branch,group,gender,type,category) {

    if (firstname.trim() == ""){
      sweetAlert("'Firstname' रिक्त है !!");
      document.getElementById("firstname").focus();
    }
    else if (! isNaN(firstname)){
      sweetAlert("'Firstname' इनवैलिड है !!");
      document.getElementById("firstname").focus();
    }
    else if (lastname.trim() == ""){
      sweetAlert("'Lastname' रिक्त है !!");
      document.getElementById("lastname").focus();
    }
    else if (! isNaN(lastname)){
      sweetAlert("'Lastname' इनवैलिड है !!");
      document.getElementById("lastname").focus();
    }
    else if (mothername.trim() == "" || (! isNaN(mothername))){
      sweetAlert("'Mother's Name' रिक्त है !!");
      document.getElementById("mothername").focus();
    } 
    else if (fathername.trim() == "" || (! isNaN(fathername))){
      sweetAlert("'Father's Name' रिक्त है !!");
      document.getElementById("fathername").focus();
    }  
    else if (religion.trim() == "" || (! isNaN(religion))){
      sweetAlert("'Religion' रिक्त या इनवैलिड है !!");
      document.getElementById("religion").focus();
    } 
    else if (dob.trim() == "" ){
      sweetAlert("'Date of Birth' रिक्त है !!");
      document.getElementById("dob").focus();
    }   
    else if (acad_year.trim() == ""){
      sweetAlert("'Academic Year' रिक्त है !!");
      document.getElementById("acad_year").focus();
    }     
    else if (admsn_date.trim() == ""){
      sweetAlert("'प्रवेश दिनांक' रिक्त है !!");
      document.getElementById("admsn_date").focus();
    }    
    else if (admsn_num.trim() == ""){
      sweetAlert("'प्रवेश क्रमांक' रिक्त है !!");
      document.getElementById("admsn_num").focus();
    }  
    else if (dob == admsn_date){
      swal("एडमिशन डेट और DOB भिन्न होना चाहिए !!")
    }
    else if (stud_class.trim() == ""){
      sweetAlert("कृपया कक्षा चयन करे !!");
      document.getElementById("stud_class").focus();
    } 
    else if (address.trim() == ""  || !(isNaN(address))){
      sweetAlert("'Address' रिक्त या इनवैलिड है !!");
      document.getElementById("address").focus();
    }        
    else if (mob.trim() == "" || mob.length < 10){
      sweetAlert("मोबाइल नंबर रिक्त या इनवैलिड है !!");
      document.getElementById("mob").focus();
    }       
    else if (adhar.trim() == "" || adhar.length < 12){
      sweetAlert("'आधार नंबर' रिक्त या इनवैलिड है !!");
      document.getElementById("adhar").focus();
    }        
    /*else if (bank_acc == ""){
      sweetAlert("'बैंक अकाउंट नंबर' रिक्त है !!");
      document.getElementById("bank_acc").focus();
    }   
    else if (bank_branch == "" || !(isNaN(bank_branch))){
      sweetAlert("'बैंक शाखा का नाम' रिक्त या इनवैलिड है !!");
      document.getElementById("bank_branch").focus();
    }  */                                                                                      
        
    else {
      swal({
        title: "Are you sure? ",
        text: "Do you want to continue ?",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
        
    db.run("INSERT INTO Student (firstname,lastname,imageName,mother,father,religion,dob,academicYear,admissionDate,admissionNum,studclass,address,mobileNum,adhar,bankAcNum,bankBranch,Studgroup,gender,type,category) VALUES (?, ?, ?,?, ?, ?,?, ?, ?,?, ?, ?,?, ?, ?,?, ?, ?,?,?)", [firstname,lastname,fileName,mothername,fathername,religion,dob,acad_year,admsn_date,admsn_num,stud_class,address,mob,adhar,bank_acc,bank_branch,group,gender,type,category],function(err) {
    if (err) {
    console.log(err.message);
    swal(err.message);
    }
      else // if successful 
      {
      swal("धन्यवाद !!", "फॉर्म सफलतापूर्वक सहेज ली गई है!", "success");
      //Save the image file to the local disk
      
      fs.copyFile(filePath, (path.join(app.getPath('userData'),'assets/stud_photose',fileName)), (err) => {
            if (err) throw swal(err.message);
            console.log('Image ' + fileName + ' stored.');
            // At that point, store some information like the file name for later use
      });
    }});
    // Reset the input fields
    document.getElementById('firstname').value = '';
    document.getElementById('lastname').value = '';
    document.getElementById('mothername').value = '';
    document.getElementById('fathername').value = '';
    //document.getElementById('religion').value = '';
    //document.getElementById('dob').value = '';
    //document.getElementById('acad_year').value = '';
    //document.getElementById('admsn_date').value = '';
    document.getElementById('admsn_num').value = '';
    //document.getElementById('stud_class').value = '';
    document.getElementById('address').value = '';
    document.getElementById('mob').value = '';
    document.getElementById('adhar').value = '';
    document.getElementById('bank_acc').value = '';
    document.getElementById('bank_branch').value = '';
    //
    Array.from(document.querySelectorAll('input[name="group"]:checked'),input => input.checked = false);
    Array.from(document.querySelectorAll('input[name="gender"]:checked'),input => input.checked = false);
    Array.from(document.querySelectorAll('input[name="type"]:checked'),input => input.checked = false);
    Array.from(document.querySelectorAll('input[name="category"]:checked'),input => input.checked = false);
    //
    document.getElementById('imgID').setAttribute('src','#')
    document.getElementById("imgID").style.display = "none"}
  });
  }
}

