const database = require('../js/displayDB');
var path = require('path')
const remote = require('electron').remote;
const app = remote.app;
   
   function displayRecord(){
    if (document.getElementById("selClass").value == ""){
      Swal("कृपया क्लास चुने !!")
    }
    else if (document.getElementById("selAcadYear").value.trim()==""){
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
      tableBody += '  <td>' + persons[i].mother + '</td>'
      tableBody += '  <td>' + persons[i].father + '</td>'
      tableBody += '  <td>' + persons[i].dob + '</td>'
      tableBody += '  <td>' + persons[i].mobileNum + '</td>'
      tableBody += '  <td>' + persons[i].Studgroup + '</td>'
      tableBody += '  <td>' +'<img id="imgID" width="120px" height="150px" alt="Image Preview" src="'+path.join(app.getPath('userData'),'assets','stud_photose',persons[i].imageName)+'">'+ '</td>'
      tableBody += '</tr>';
     
    }
        
    
        // Fill the table content
        document.getElementById('tablebody').innerHTML = tableBody;
      });
    };

 