var selectedRow = null;


function onFormSubmit() {
    
    var fnameValid = fnameValidate();
    var lnameValid = lnameValidate();
    var phonenoValid = phonenoValidate();
    var addressValid = addressValidate();
    var emailValid = emailValidate();
    var stateValid = stateValidate();
    var zipValid = zipValidate();
    var degreeValid = degreeValidate();
    var semValid = semValidate();
    var courseValid = courseValidate();

    let isFormValid = 
        fnameValid &&
        lnameValid &&
        phonenoValid &&
        addressValid &&
        emailValid &&
        stateValid &&
        zipValid &&
        degreeValid &&
        semValid &&
        courseValid;

    if (isFormValid)
        var formData = readFormData();
    if (selectedRow == null)
        insertNewRecord(formData);
    else
        updateRecord(formData);
}

function readFormData() {
    var formData = {};
    formData["fname"] = document.getElementById("fname").value;
    formData["lname"] = document.getElementById("lname").value;
    formData["phoneno"] = document.getElementById("phoneno").value;
    formData["address"] = document.getElementById("address").value;
    formData["email"] = document.getElementById("email").value;
    formData["state"] = document.getElementById("state").value;
    formData["zip"] = document.getElementById("zip").value;
    formData["degree"] = document.getElementById("degree").value;
    formData["sem"] = document.getElementById("sem").value;
    formData["course"] = document.getElementById("course").value;


    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("studentList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    if (typeof data !== 'undefined') {
        cell1 = newRow.insertCell(0);
        cell1.innerHTML = data.fname;
        cell2 = newRow.insertCell(1);
        cell2.innerHTML = data.lname;
        cell3 = newRow.insertCell(2);
        cell3.innerHTML = data.phoneno;
        cell4 = newRow.insertCell(3);
        cell4.innerHTML = data.address;
        cell5 = newRow.insertCell(4);
        cell5.innerHTML = data.email;
        cell6 = newRow.insertCell(5);
        cell6.innerHTML = data.state;
        cell7 = newRow.insertCell(6);
        cell7.innerHTML = data.zip;
        cell8 = newRow.insertCell(7);
        cell8.innerHTML = data.degree;
        cell9 = newRow.insertCell(8);
        cell9.innerHTML = data.sem;
        cell10 = newRow.insertCell(9);
        cell10.innerHTML = data.course;
        cell11 = newRow.insertCell(10);
        cell11.innerHTML = `<a type="button" class="btn btn-outline-info" onClick="onEdit(this)">Edit</a>
                       <a type="button" class="btn btn-outline-danger" onClick="onDelete(this)">Delete</a>`;
    }
}

function resetForm() {
    document.getElementById("fname").value = "";
    document.getElementById("lname").value = "";
    document.getElementById("phoneno").value = "";
    document.getElementById("address").value = "";
    document.getElementById("email").value = "";
    document.getElementById("state").value = "";
    document.getElementById("zip").value = "";
    document.getElementById("degree").value = "";
    document.getElementById("sem").value = "";
    document.getElementById("course").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("fname").value = selectedRow.cells[0].innerHTML;
    document.getElementById("lname").value = selectedRow.cells[1].innerHTML;
    document.getElementById("phoneno").value = selectedRow.cells[2].innerHTML;
    document.getElementById("address").value = selectedRow.cells[3].innerHTML;
    document.getElementById("email").value = selectedRow.cells[4].innerHTML;
    document.getElementById("state").value = selectedRow.cells[5].innerHTML;
    document.getElementById("zip").value = selectedRow.cells[6].innerHTML;
    document.getElementById("degree").value = selectedRow.cells[7].innerHTML;
    document.getElementById("sem").value = selectedRow.cells[8].innerHTML;
    document.getElementById("course").value = selectedRow.cells[9].innerHTML;
    document.getElementById("submitbtn").value = "Update";

}



function updateRecord(formData) {
    if (typeof formData !== 'undefined'){
    selectedRow.cells[0].innerHTML = formData.fname;
    selectedRow.cells[1].innerHTML = formData.lname;
    selectedRow.cells[2].innerHTML = formData.phoneno;
    selectedRow.cells[3].innerHTML = formData.address;
    selectedRow.cells[4].innerHTML = formData.email;
    selectedRow.cells[5].innerHTML = formData.state;
    selectedRow.cells[6].innerHTML = formData.zip;
    selectedRow.cells[7].innerHTML = formData.degree;
    selectedRow.cells[8].innerHTML = formData.sem;
    selectedRow.cells[9].innerHTML = formData.course;
    document.getElementById("submitbtn").value = "Submit";
    resetForm();
    }
}


function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("studentList").deleteRow(row.rowIndex);
        resetForm();
    }
}
function fnameValidate() {
    var isValid = true;
    var fname = document.getElementById("fname").value;
    if (document.getElementById("fname").value == "") {
        isValid = false;
        document.getElementById("fnameValidationError").classList.remove("hide");
    }
    else {
        isValid = true;
        if (!document.getElementById("fnameValidationError").classList.contains("hide"))
            document.getElementById("fnameValidationError").classList.add("hide");
    }

    if (fname.length < 3 || !fname.match(/^[a-zA-Z]+$/)) {
        isValid = false;
        document.getElementById("fnameValidationError1").classList.remove("hide1");
    }
    else {
        isValid = true;
        if (!document.getElementById("fnameValidationError1").classList.contains("hide1"))
            document.getElementById("fnameValidationError1").classList.add("hide1");
    }
    return isValid;
}
function lnameValidate() {
    var isValid = true;
    var lname = document.getElementById("lname").value;
    if (document.getElementById("lname").value == "") {
        isValid = false;
        document.getElementById("lnameValidationError").classList.remove("hide");
    }
    else {
        isValid = true;
        if (!document.getElementById("lnameValidationError").classList.contains("hide"))
            document.getElementById("lnameValidationError").classList.add("hide");
    }

    if (lname.length < 3 || !lname.match(/^[a-zA-Z]+$/)) {
        isValid = false;
        document.getElementById("lnameValidationError1").classList.remove("hide1");
    }
    else {
        isValid = true;
        if (!document.getElementById("lnameValidationError1").classList.contains("hide1"))
            document.getElementById("lnameValidationError1").classList.add("hide1");
    }
    return isValid;
}
function phonenoValidate() {
    var isValid = true;
    var phoneno = document.getElementById("phoneno").value;
    if (document.getElementById("phoneno").value == "") {
        isValid = false;
        document.getElementById("phonenoValidationError").classList.remove("hide");
    }
    else {
        isValid = true;
        if (!document.getElementById("phonenoValidationError").classList.contains("hide"))
            document.getElementById("phonenoValidationError").classList.add("hide");
    }

    if (phoneno.length < 10 || phoneno.length > 10 || !phoneno.match(/^[0-9]+$/)) {
        isValid = false;
        document.getElementById("phonenoValidationError1").classList.remove("hide1");
    } else {
        isValid = true;
        if (!document.getElementById("phonenoValidationError1").classList.contains("hide1"))
            document.getElementById("phonenoValidationError1").classList.add("hide1");
    }
    return isValid;
}

function addressValidate() {
    var isValid = true;
    var address = document.getElementById("address").value;
    if (document.getElementById("address").value == "") {
        isValid = false;
        document.getElementById("addressValidationError").classList.remove("hide");
    }
    else {
        isValid = true;
        if (!document.getElementById("addressValidationError").classList.contains("hide"))
            document.getElementById("addressValidationError").classList.add("hide");
    }
    if (address.length > 50 || !address.match(/^[a-zA-Z0-9\s,.'-]{3,}$/)) {
        isValid = false;
        document.getElementById("addressValidationError1").classList.remove("hide1");
    }
    else {
        isValid = true;
        if (!document.getElementById("addressValidationError1").classList.contains("hide1"))
            document.getElementById("addressValidationError1").classList.add("hide1");
    }
    return isValid;
}

function emailValidate() {
    var isValid = true;
    var email = document.getElementById("email").value;
    if (document.getElementById("email").value == "") {
        isValid = false;
        document.getElementById("emailValidationError").classList.remove("hide");
    }
    else {
        isValid = true;
        if (!document.getElementById("emailValidationError").classList.contains("hide"))
            document.getElementById("emailValidationError").classList.add("hide");
    }

    if (email.length > 50 || !email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
        isValid = false;
        document.getElementById("emailValidationError1").classList.remove("hide1");
    }
    else {
        isValid = true;
        if (!document.getElementById("emailValidationError1").classList.contains("hide1"))
            document.getElementById("emailValidationError1").classList.add("hide1");
    }
    return isValid;
}
function stateValidate() {
    var isValid = true;
    var state = document.getElementById("state").value;
    if (document.getElementById("state").value == "") {
        isValid = false;
        document.getElementById("stateValidationError").classList.remove("hide");
    }
    else {
        isValid = true;
        if (!document.getElementById("stateValidationError").classList.contains("hide"))
            document.getElementById("stateValidationError").classList.add("hide");
    }
    return isValid;
}
function zipValidate() {
    var isValid = true;
    var zip = document.getElementById("zip").value;
    if (document.getElementById("zip").value == "") {
        isValid = false;
        document.getElementById("zipValidationError").classList.remove("hide");
    }
    else {
        isValid = true;
        if (!document.getElementById("zipValidationError").classList.contains("hide"))
            document.getElementById("zipValidationError").classList.add("hide");
    }


    if (!zip.match(/(^\d{6}$)/)) {
        isValid = false;
        document.getElementById("zipValidationError1").classList.remove("hide1");
    }
    else {
        isValid = true;
        if (!document.getElementById("zipValidationError1").classList.contains("hide1"))
            document.getElementById("zipValidationError1").classList.add("hide1");
    }
    return isValid;

}


function degreeValidate() {
    var isValid = true;

    if (document.getElementById("degree").value == "") {
        isValid = false;
        document.getElementById("degreeValidationError").classList.remove("hide");
    }
    else {
        isValid = true;
        if (!document.getElementById("degreeValidationError").classList.contains("hide"))
            document.getElementById("degreeValidationError").classList.add("hide");
    }
    return isValid;
}

function semValidate() {
    var isValid = true;
    if (document.getElementById("sem").value == "") {
        isValid = false;
        document.getElementById("semValidationError").classList.remove("hide");
    }
    else {
        isValid = true;
        if (!document.getElementById("semValidationError").classList.contains("hide"))
            document.getElementById("semValidationError").classList.add("hide");
    }
    return isValid;
}

function courseValidate() {
    var isValid = true;
    if (document.getElementById("course").value == "") {
        isValid = false;
        document.getElementById("courseValidationError").classList.remove("hide");
    }
    else {
        isValid = true;
        if (!document.getElementById("courseValidationError").classList.contains("hide"))
            document.getElementById("courseValidationError").classList.add("hide");
    }
    return isValid;
}

document.getElementById("fname").addEventListener("change",fnameValidate);
document.getElementById("lname").addEventListener("change",lnameValidate);
document.getElementById("phoneno").addEventListener("change",phonenoValidate);
document.getElementById("address").addEventListener("change",addressValidate);
document.getElementById("email").addEventListener("change",emailValidate);
document.getElementById("state").addEventListener("change",stateValidate);
document.getElementById("zip").addEventListener("change",zipValidate);
document.getElementById("degree").addEventListener("change",degreeValidate);
document.getElementById("sem").addEventListener("change",semValidate);
document.getElementById("course").addEventListener("change",courseValidate);

var submit = document.getElementById("submitbtn");
submit.addEventListener("click", onFormSubmit);



function enable() {
    if (document.getElementById("degree").value == "") {
        document.getElementById("sem").disabled = true;
    }
    else {
        document.getElementById("sem").disabled = false;
    }
    if (document.getElementById("sem").value == "") {
        document.getElementById("course").disabled = true;
    }
    else {
        document.getElementById("course").disabled = false;
    }
}

function regno() {
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var degree = document.getElementById("degree").value;
    var sem = document.getElementById("sem").value;

    var res = fname.split("", 1);
    res = res + lname.split("", 1);
    res = res + degree.slice(0, 2);
    res = res + sem.split("", 1);
    res = res + Math.floor(1000 + Math.random() * 9000);
    console.log(res);

    var x = document.getElementById("registration");
    x.setAttribute("type", "text");
    x.setAttribute("value", res.toUpperCase());
}

var degreeObject = {
    "BTech": {
        "1-Btech" :["Btech Course 11", "Btech Course 12","Btech Course 13"],
        "2-Btech" :["Btech Course 21", "Btech Course 22","Btech Course 23"]
    },
    "Bcom": {
        "1-Bcom" : ["Bcom Course 11", "Bcom Course 12","Bcom Course 13"],
        "2-Bcom" :["Bcom Course 21", "Bcom Course 22","Bcom Course 23"]
    },
    "MTech": {
        "1-Mtech" :["Mtech Course 11", "Mtech Course 12","Mtech Course 13"],
        "2-Mtech" :["Mtech Course 21", "Mtech Course 22","Mtech Course 23"]
    }
}

window.onload = function() {
    var degreeSel = document.getElementById("degree"),
        semSel = document.getElementById("sem"),
        courseSel = document.getElementById("course");
    
        for(var Vdegree in degreeObject){
            degreeSel.options[degreeSel.options.length] = new Option(Vdegree, Vdegree)
        }

        degreeSel.onchange = function(){
            semSel.length = 1;
            courseSel.length=1;
            if(this.selectedindex <1) return;
            for(var Vsem in degreeObject[this.value]){
                semSel.options[semSel.options.length] = new Option(Vsem,Vsem);
            }
        }

        degreeSel.onchange();

        semSel.onchange = function(){
            courseSel.length = 1;
            if(this.selectedindex <1) return;

            var Vcourses = degreeObject[degreeSel.value][this.value];
            for(var i=0; i < Vcourses.length; i++){
                courseSel.options[courseSel.options.length] = new Option(Vcourses[i], Vcourses[i])
            }
        }
}


/*
document.getElementById("submitbtn").onclick = function() {myFunction()};

function myFunction() {
  document.getElementById("submitbtn").value = "update";
}

 function validate() {
     isValid = true;
     var fname=document.getElementById("fname").value;
     var lname=document.getElementById("lname").value;
     var phoneno = document.getElementById("phoneno").value;
     var address = document.getElementById("address").value;
    var email = document.getElementById("email").value;
    var zip = document.getElementById("zip").value;

     if (document.getElementById("fname").value ==  ""){
         isValid = false;
         document.getElementById("fnameValidationError").classList.remove("hide");
     }
     else {
        isValid = true;
        if (!document.getElementById("fnameValidationError").classList.contains("hide"))
            document.getElementById("fnameValidationError").classList.add("hide");
    }

    if ( fname.length<3 || !fname.match(/^[a-zA-Z]+$/) )
    {
        isValid = false;
         document.getElementById("fnameValidationError1").classList.remove("hide1");
    }
    else {
        isValid = true;
        if (!document.getElementById("fnameValidationError1").classList.contains("hide1"))
            document.getElementById("fnameValidationError1").classList.add("hide1");
    }

      if (document.getElementById("lname").value == "") {
        isValid = false;
        document.getElementById("lnameValidationError").classList.remove("hide");
    }
    else {
        isValid = true;
        if (!document.getElementById("lnameValidationError").classList.contains("hide"))
            document.getElementById("lnameValidationError").classList.add("hide");
    }

    if ( lname.length<3 || !lname.match(/^[a-zA-Z]+$/) )
    {
        isValid = false;
         document.getElementById("lnameValidationError1").classList.remove("hide1");
    }
    else {
        isValid = true;
        if (!document.getElementById("lnameValidationError1").classList.contains("hide1"))
            document.getElementById("lnameValidationError1").classList.add("hide1");
    }

     if (document.getElementById("phoneno").value == "") {
        isValid = false;
        document.getElementById("phonenoValidationError").classList.remove("hide");
    }
    else{
        isValid = true;
        if (!document.getElementById("phonenoValidationError").classList.contains("hide"))
            document.getElementById("phonenoValidationError").classList.add("hide");
    }

    if (phoneno.length<10 || phoneno.length>10|| !phoneno.match(/^[0-9]+$/))
    {
        isValid = false;
        document.getElementById("phonenoValidationError1").classList.remove("hide1");
    } else {
        isValid = true;
        if (!document.getElementById("phonenoValidationError1").classList.contains("hide1"))
            document.getElementById("phonenoValidationError1").classList.add("hide1");
    }

     if (document.getElementById("address").value == "") {
        isValid = false;
        document.getElementById("addressValidationError").classList.remove("hide");
    }
    else {
        isValid = true;
        if (!document.getElementById("addressValidationError").classList.contains("hide"))
            document.getElementById("addressValidationError").classList.add("hide");
    }
    if ( address.length>50 || !address.match(/^[a-zA-Z0-9\s,.'-]{3,}$/)) {
        isValid = false;
        document.getElementById("addressValidationError1").classList.remove("hide1");
    }
    else {
       isValid = true;
       if (!document.getElementById("addressValidationError1").classList.contains("hide1"))
           document.getElementById("addressValidationError1").classList.add("hide1");
    }




     if (document.getElementById("email").value == "") {
        isValid = false;
        document.getElementById("emailValidationError").classList.remove("hide");
    }
    else {
        isValid = true;
        if (!document.getElementById("emailValidationError").classList.contains("hide"))
            document.getElementById("emailValidationError").classList.add("hide");
    }

    if ( email.length>50 || !email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
        isValid = false;
        document.getElementById("emailValidationError1").classList.remove("hide1");
    }
    else {
       isValid = true;
       if (!document.getElementById("emailValidationError1").classList.contains("hide1"))
           document.getElementById("emailValidationError1").classList.add("hide1");
    }

     if (document.getElementById("state").value == "") {
        isValid = false;
        document.getElementById("stateValidationError").classList.remove("hide");
    }
    else {
        isValid = true;
        if (!document.getElementById("stateValidationError").classList.contains("hide"))
            document.getElementById("stateValidationError").classList.add("hide");
    }
    if (document.getElementById("zip").value == "") {
        isValid = false;
        document.getElementById("zipValidationError").classList.remove("hide");
    }
    else {
        isValid = true;
        if (!document.getElementById("zipValidationError").classList.contains("hide"))
            document.getElementById("zipValidationError").classList.add("hide");
    }


    if ( !zip.match(/(^\d{6}$)/)) {
        isValid = false;
        document.getElementById("zipValidationError1").classList.remove("hide1");
    }
    else {
       isValid = true;
       if (!document.getElementById("zipValidationError1").classList.contains("hide1"))
           document.getElementById("zipValidationError1").classList.add("hide1");
    }


    if (document.getElementById("degree").value == "") {
        isValid = false;
        document.getElementById("degreeValidationError").classList.remove("hide");
    }
    else {
        isValid = true;
        if (!document.getElementById("degreeValidationError").classList.contains("hide"))
            document.getElementById("degreeValidationError").classList.add("hide");
    }
    if (document.getElementById("sem").value == "") {
        isValid = false;
        document.getElementById("semValidationError").classList.remove("hide");
    }
    else {
        isValid = true;
        if (!document.getElementById("semValidationError").classList.contains("hide"))
            document.getElementById("semValidationError").classList.add("hide");
    }
    if (document.getElementById("course").value == "") {
        isValid = false;
        document.getElementById("courseValidationError").classList.remove("hide");
    }
    else {
        isValid = true;
        if (!document.getElementById("courseValidationError").classList.contains("hide"))
            document.getElementById("courseValidationError").classList.add("hide");
    }
     return isValid;
 }
*/

/*function valid2(){
    isValid = true;
    var fname=document.getElementById("fname").value;
    var phoneno = document.getElementById("phoneno").value;
    var address = document.getElementById("address").value;
    var email = document.getElementById("email").value;
    var zip = document.getElementById("zip").value;

    if ( fname.length<3 || !fname.match(/^[a-zA-Z]+$/) ) {
        isValid = false;
        document.getElementById("fnameValidationError1").classList.remove("hide1");
    }
    else {
       isValid = true;
       if (!document.getElementById("fnameValidationError1").classList.contains("hide1"))
           document.getElementById("fnameValidationError1").classList.add("hide1");
   }
;
/* if (isNaN(phoneno) || phoneno > 1000000000 || phoneno <99999999999) {
    isValid = false;
    document.getElementById("phonenoValidationError1").classList.remove("hide1");
}
else {
   isValid = true;
   if (!document.getElementById("phonenoValidationError1").classList.contains("hide1"))
       document.getElementById("phonenoValidationError1").classList.add("hide1");
}


if ( address.length>50  ) {
    isValid = false;
    document.getElementById("addressValidationError1").classList.remove("hide1");
}
else {
   isValid = true;
   if (!document.getElementById("addressValidationError1").classList.contains("hide1"))
       document.getElementById("addressValidationError1").classList.add("hide1");
}


if ( email.match(/^[w-.+]+@[a-zA-Z0-9.-]+.[a-zA-z0-9]{2,4}$/)) {
    isValid = false;
    document.getElementById("emailValidationError1").classList.remove("hide1");
}
else {
   isValid = true;
   if (!document.getElementById("emailValidationError1").classList.contains("hide1"))
       document.getElementById("emailValidationError1").classList.add("hide1");
}


if ( zip.length==6) {
    isValid = false;
    document.getElementById("zipValidationError1").classList.remove("hide1");
}
else {
   isValid = true;
   if (!document.getElementById("zipValidationError1").classList.contains("hide1"))
       document.getElementById("zipValidationError1").classList.add("hide1");
}


return isValid;
}
*/





/*function formValidation(){
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var address = document.getElementById("address").value;
    var email = document.getElementById("email").value;
    var zip = document.getElementById("zip").value;


    if (inputAlphabet(fname, "* For your name please use alphabets only *"))
    {
        if (inputAlphabet(lname, "* For your name please use alphabets only *"))
        {
            if (textAlphanumeric(address, "* For Address please use numbers and letters *"))
            {
                if (emailValidation(email, "* Please enter a valid email address *"))
                {
                    if (textNumeric(zip, "* Please enter a valid zip code *"))
                    {
                        return true;
                    }
                }
            }
        }

    }
    return false;
}

function textNumeric(inputtext, alertMsg) {
    var numericExpression = /^[0-9]+$/;
    if (inputtext.value.match(numericExpression)) {
    return true;
    } else {
    document.getElementById('zip').innerText = alertMsg; // This segment displays the validation rule for zip.
    inputtext.focus();
    return false;
    }
}

function inputAlphabet(inputtext, alertMsg) {
    var alphaExp = /^[a-zA-Z]+$/;
    if (inputtext.value.match(alphaExp)) {
    return true;
    } else {
    document.getElementById('fname').innerText = alertMsg; // This segment displays the validation rule for fname.
    document.getElementById('lname').innerText = alertMsg; // This segment displays the validation rule for lname.
    inputtext.focus();
    return false;
    }
}
function textAlphanumeric(inputtext, alertMsg) {
    var alphaExp = /^[0-9a-zA-Z]+$/;
    if (inputtext.value.match(alphaExp)) {
    return true;
    } else {
    document.getElementById('address').innerText = alertMsg; // This segment displays the validation rule for address.
    inputtext.focus();
    return false;
    }
}

function emailValidation(inputtext, alertMsg) {
    var emailExp = /^[w-.+]+@[a-zA-Z0-9.-]+.[a-zA-z0-9]{2,4}$/;
    if (inputtext.value.match(emailExp)) {
    return true;
    } else {
    document.getElementById('email').innerText = alertMsg; // This segment displays the validation rule for email.
    inputtext.focus();
    return false;
    }
    }





/*function submitupdate(){
    if(onEdit()){
        document.getelementbyid(submit)
        submit.innerHTML="update";
        document.getelementbyid(submit).value="update";
    }
*/


