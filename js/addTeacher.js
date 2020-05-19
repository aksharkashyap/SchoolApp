    const database = require('../js/TeacherDB');
    const { app, dialog } = require('electron').remote;
    const fs = require('fs');
    const path = require('path');
    
    filePath = undefined;
    filePathSign = undefined;
    
    function displayImage() {
        // Open a dialog to ask for the file path
        // window.filePath - making filePath global by using window
        filePath = dialog.showOpenDialog({ properties: ['openFile'] }).toString()
        document.getElementById('imgID').setAttribute('src',filePath);
        document.getElementById("imgID").style.display = "Inline-Block"
    }

    function displaySign() {
        filePathSign = dialog.showOpenDialog({ properties: ['openFile'] }).toString()
        document.getElementById('signImgID').setAttribute('src',filePathSign);
        document.getElementById("signImgID").style.display = "Inline-Block"
        }
    
        
    
    function addTeacherFunc(err){
        // Retrieve the input fields
              
        /*-------------------*/
       if (filePath == undefined)
       {
       swal("कृपया फोटो अपलोड करे !!");
       }

       else if (filePathSign == undefined)
       {
       swal("कृपया हस्ताक्षर अपलोड करे !!");
       }
       //qualification
       else if(document.querySelector('input[name="qualification"]:checked') == null)
       {
         swal("कृपया 12th कक्षा की विषय चुने !!")
       }
       //graduation
       else if(document.querySelector('input[name="graduation"]:checked') == null)
       {
         swal("कृपया स्नातक की विषय चुने !!")
       }
       else if ((document.getElementById("grdn_yes").checked) && (document.getElementById("grdn_inpt").value.trim() == "")){ 
       
        swal("कृपया स्नातक विषय की जानकारी देवे !!");     
      }
       //postgraduation
       else if (document.querySelector('input[name = "postGraduatn"]:checked') == null)
       {
         swal("कृपया स्नातकोत्तर की जानकारी भरे !!");
       }

       else if ((document.getElementById("postgrdn_yes").checked) && (document.getElementById("postgrdn_inpt").value.trim() == "")){ 
       
        swal("कृपया स्नातकोत्तर विषय की जानकारी देवे !!");     
      }
      //training
      else if (document.querySelector('input[name = "traning"]:checked') == null)
       {
         swal("Fill The Traning Field !!");
       }

       else if ((document.getElementById("traning_yes").checked) && (document.getElementById("traning_inpt").value.trim() == "")){ 
       
        swal("Please Enter Traning details !!");     
      }
      //diploma
      
       else if (document.querySelector('input[name = "diploma"]:checked') == null)
       {
          swal("कृपया डिप्लोमा की जानकारी भरे !!");
       }
       else if ((document.getElementById("diploma_yes").checked) && (document.getElementById("diploma_inpt").value.trim() == "")){ 
       
        swal("कृपया डिप्लोमा विषय की जानकारी देवे !!");     
      }
      //gender
       else if (document.querySelector('input[name = "genderT"]:checked') == null)
       {
          swal("Select Gender Please!!");
       }
      
 
       var firstname = document.getElementById('firstname').value;
       var lastname = document.getElementById('lastname').value;
       var fathername = document.getElementById('fathername').value;
       var mothername = document.getElementById('mothername').value;
       var dob = document.getElementById('dob').value;
       var acad_year = document.getElementById('acad_year').value;
       var joining_date = document.getElementById('joining_date').value;
       var joining_num = document.getElementById('joining_num').value;
       var joining_post = document.getElementById('joining_post').value;
       var current_post = document.getElementById('current_post').value;
       var address = document.getElementById('address').value;
       var teaching_subject = document.getElementById('teaching_subject').value.replace(/(^\s*,)|(,\s*$)/g, '');
       var adhar = document.getElementById('adhar').value;
       var mob = document.getElementById('mob').value;
       var bank_acc = document.getElementById('bank_acc').value;
       var bank_branch = document.getElementById('bank_branch').value;

       var qualification = document.querySelector('input[name="qualification"]:checked').value;
       var gender = document.querySelector('input[name="genderT"]:checked').value;

       /** it will save the file with Original filename */ 
       const fileNameOrgnl = path.basename(filePath);
       const fileName = firstname+joining_num+fathername+"photo"+".jpg";

       const  fileNameSignOrgnl = path.basename(filePathSign);
       const fileNameSign = firstname+joining_num+fathername+"sign"+".jpg";

       var postgraduation = undefined;
       var traning = undefined;
       var diploma = undefined;
       var graduation = undefined;


      if(fileNameOrgnl == fileNameSignOrgnl){
        swal("Photo & Signature must be different !!")
      }
      else if (firstname.trim() == ""){
        sweetAlert("'Firstname' रिक्त है !!");
        document.getElementById("firstname").focus();
      }
      else if (! isNaN(firstname)){
        sweetAlert("'Firstname' इनवैलिड है !!");
        document.getElementById("firstname").focus();
      }    
             /*-------------------*/
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
      else if (dob.trim() == "" ){
        sweetAlert("'Date of Birth' रिक्त है !!");
        document.getElementById("dob").focus();
      }   
      else if (acad_year.trim() == ""){
        sweetAlert("'Academic Year' रिक्त है !!");
        document.getElementById("acad_year").focus();
      }     
      else if (joining_date.trim() == ""){
        sweetAlert("'नियुक्ति तिथि' रिक्त है !!");
        document.getElementById("joining_date").focus();
      } 
      else if (dob == joining_date){
        sweetAlert("DOB & Joining Date Must Be Different !!")
      }
      else if (joining_num.trim() == ""){
        sweetAlert("'नियुक्ति क्रमांक' रिक्त है !!");
        document.getElementById("joining_num").focus();
      }  
      else if (joining_post.trim() == ""){
          sweetAlert("'नियुक्ति पद' रिक्त है !!");
          document.getElementById("joining_post").focus();
        } 
      else if (current_post.trim() == ""){
          sweetAlert("'वर्तमान पद' रिक्त है !!");
          document.getElementById("joining_post").focus();
        }     
      else if (address.trim() == ""  || !(isNaN(address))){
        sweetAlert("'Address' रिक्त या इनवैलिड है !!");
        document.getElementById("address").focus();
      } 
      else if (teaching_subject.trim() == ""){
          sweetAlert("कृपया टीचर के द्वारा पढ़ाये जाने वाले विषयो का चयन करे!!");
          document.getElementById("teaching_subject").focus();
        }        
      else if (mob == "" || mob.length < 10){
        sweetAlert("मोबाइल नंबर रिक्त या इनवैलिड है !!");
        document.getElementById("mob").focus();
      }       
      else if (adhar == "" || adhar.length < 12){
        sweetAlert("'आधार नंबर' रिक्त या इनवैलिड है !!");
        document.getElementById("adhar").focus();
      }        
      else if (bank_acc.trim() == ""){
        sweetAlert("'बैंक अकाउंट नंबर' रिक्त है !!");
        document.getElementById("bank_acc").focus();
      }   
      else if (bank_branch.trim() == "" || !(isNaN(bank_branch))){
        sweetAlert("'बैंक शाखा का नाम' रिक्त या इनवैलिड है !!");
        document.getElementById("bank_branch").focus();
      } 
      
      else {

          database.addTeacher(firstname,lastname,fileName,fileNameSign,mothername,fathername,dob,acad_year,joining_date,
            joining_num,joining_post,current_post,address,teaching_subject,adhar,mob,bank_acc,bank_branch,qualification,graduation,postgraduation,traning,diploma,gender);
          }

     };
    
    
    
    /*Upper case convertor */
    function upperCaseF(a){
       setTimeout(function(){
       a.value = a.value.toUpperCase();},1);}
    

       
      function resetTeacher(){
         // Reset the input fields
      document.getElementById('firstname').value = '';
      document.getElementById('lastname').value = '';
      document.getElementById('mothername').value = '';
      document.getElementById('fathername').value = '';
      document.getElementById('dob').value = '';
      document.getElementById('acad_year').value = '';
      document.getElementById('joining_date').value = '';
      document.getElementById('joining_num').value = '';
      document.getElementById('joining_post').value = '';
      document.getElementById('current_post').value = '';
      document.getElementById('teaching_subject').value = ''; 
      document.getElementById('address').value = '';
      document.getElementById('mob').value = '';
      document.getElementById('adhar').value = '';
      document.getElementById('bank_acc').value = '';
      document.getElementById('bank_branch').value = ''; 

      document.getElementById('traning_inpt').value = ''; 
      document.getElementById('postgrdn_inpt').value = ''; 
      document.getElementById('diploma_inpt').value = ''; 

      document.getElementById('traning_inpt').setAttribute('disabled','true')
      document.getElementById('postgrdn_inpt').setAttribute('disabled','true')
      document.getElementById('diploma_inpt').setAttribute('disabled','true')
      document.getElementById('grdn_inpt').setAttribute('disabled','true')



      //
      Array.from(document.querySelectorAll('input[name="genderT"]:checked'),input => input.checked = false);
      Array.from(document.querySelectorAll('input[name="traning"]:checked'),input => input.checked = false);
      Array.from(document.querySelectorAll('input[name="postGraduatn"]:checked'),input => input.checked = false);
      Array.from(document.querySelectorAll('input[name="qualification"]:checked'),input => input.checked = false);
      Array.from(document.querySelectorAll('input[name="diploma"]:checked'),input => input.checked = false);
      //
      document.getElementById('imgID').setAttribute('src','#')
      document.getElementById("imgID").style.display = "none"
      document.getElementById('signImgID').setAttribute('src','#')
      document.getElementById("signImgID").style.display = "none"

      swal("Reset Successful !!")
      }

      //input field disable/enable toggle switch
      //-------postgraduation
      function postgrdn_inptSwitch_YES(){
      document.getElementById('postgrdn_inpt').removeAttribute('disabled')
      }
      function postgrdn_inptSwitch_No(){
        document.getElementById('postgrdn_inpt').value = ""
        document.getElementById('postgrdn_inpt').setAttribute('disabled','true')
      }
      //------traning--------
      function traning_inptSwitch_YES(){
        document.getElementById('traning_inpt').removeAttribute('disabled')
        }
        function traning_inptSwitch_No(){
          document.getElementById('traning_inpt').value = ""
          document.getElementById('traning_inpt').setAttribute('disabled','true')
        }
      //------diploma--------
      function diploma_inptSwitch_YES(){
        document.getElementById('diploma_inpt').removeAttribute('disabled')
        }
        function diploma_inptSwitch_No(){
          document.getElementById('diploma_inpt').value = ""
          document.getElementById('diploma_inpt').setAttribute('disabled','true')
        }
       //grdn 
        function grdn_inptSwitch_YES(){
          document.getElementById('grdn_inpt').removeAttribute('disabled')
          }
          function grdn_inptSwitch_No(){
            document.getElementById('grdn_inpt').value = ""
            document.getElementById('grdn_inpt').setAttribute('disabled','true')
          }

        