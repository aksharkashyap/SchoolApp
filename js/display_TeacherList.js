const database = require('../js/display_TeacherListDB');
var path = require('path')
const remote = require('electron').remote;
const app = remote.app;
   
   function displayTeacher(){
    if (document.getElementById("selAcadYear").value.trim()==""){
      Swal("Academic Year दर्ज करे (जैसे 2019) !!")
    }
    else

       database.getPersons(function(persons) {
      
        // Generate the table body
        var tableBody = '';
      for (i = 0; i < persons.length; i++) {
      tableBody += '<tr>';
      tableBody += '  <td>' + persons[i].id + '</td>'
      tableBody += '  <td>' + persons[i].firstname + '</td>'
      tableBody += '  <td>' + persons[i].lastname + '</td>'
      tableBody += '  <td>' + persons[i].father + '</td>'
      tableBody += '  <td>' + persons[i].dob + '</td>'
      tableBody += '  <td>' + persons[i].currentPost + '</td>'
      tableBody += '  <td>' + persons[i].TeachingSubjects + '</td>'
      tableBody += '  <td>' + persons[i].mobileNum + '</td>'
      tableBody += '  <td>' +'<img id="signID" width="150px" height="70px" alt="Image Preview" src="'+path.join(app.getPath('userData'),'assets','teacher_signs',persons[i].signName)+'">'+ '</td>'
      tableBody += '  <td>' +'<img id="imgID" width="110px" height="140px" alt="Image Preview" src="'+path.join(app.getPath('userData'),'assets','teacher_photose',persons[i].imageName)+'">'+ '</td>'
      tableBody += '</tr>';
     
    }
        
    
        // Fill the table content
        document.getElementById('tablebody').innerHTML = tableBody;
      });
    };

 