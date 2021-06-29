var selectedRow = null;

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
        updateRecord(formData);
        resetForm();
    }
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
     
    cell10 = newRow.insertCell(10);
    cell10.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
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

}
function updateRecord(formData) {
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
   
}


function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("studentList").deleteRow(row.rowIndex);
        resetForm();
    }
}


 function validate() {
     isValid = true;
 
     if (document.getElementById("fname").value ==  "") {
         isValid = false;
         document.getElementById("fnameValidationError").classList.remove("hide");
     }
     else {
        isValid = true;
        if (!document.getElementById("fnameValidationError").classList.contains("hide"))
            document.getElementById("fnameValidationError").classList.add("hide");
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
     if (document.getElementById("phoneno").value == "") {
        isValid = false;
        document.getElementById("phonenoValidationError").classList.remove("hide");
    }
    else{
        isValid = true;
        if (!document.getElementById("phonenoValidationError").classList.contains("hide"))
            document.getElementById("phonenoValidationError").classList.add("hide");
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
     if (document.getElementById("email").value == "") {
        isValid = false;
        document.getElementById("emailValidationError").classList.remove("hide");
    }
    else {
        isValid = true;
        if (!document.getElementById("emailValidationError").classList.contains("hide"))
            document.getElementById("emailValidationError").classList.add("hide");
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

function enable(){
    if (document.getElementById("degree").value == ""){
        document.getElementById("sem").disabled = true;
    }
    else{
        document.getElementById("sem").disabled = false;
    }
    if (document.getElementById("sem").value == ""){
        document.getElementById("course").disabled = true;
    }
    else{
        document.getElementById("course").disabled = false;
    }
}

function regno(){
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var phoneno = document.getElementById("phoneno").value;
    var address = document.getElementById("address").value;
    var email = document.getElementById("email").value;
    var state = document.getElementById("state").value;
    var zip = document.getElementById("zip").value;
    var degree = document.getElementById("degree").value;
    var sem = document.getElementById("sem").value;
    var course = document.getElementById("course").value;

    var res=fname.split("",1);
    res=res+lname.split("",1);
    res=res+degree.slice(0,2);
    res=res+sem.split("",1);
    res=res+Math.floor(1000 + Math.random() * 9000);
    console.log(res);

    var x = document.getElementById("registration");
    x.setAttribute("type", "text");
    x.setAttribute("value", res);
}


function formValidation(){
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


