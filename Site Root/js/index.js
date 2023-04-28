const connToken = "90933235|-31949280178838974|90950825";
const dbName = "SCHOOL-DB";
const relationName = "STUDENT-TABLE";
const jpdbUrl = "http://api.login2explore.com:5577";
const jpdbIML = "/api/iml";
const jpdbIRL = "/api/irl";
$("#studentRollNo").focus();


function validateAndGetFormData() {
    var studentRollNoVar = $("#studentRollNo").val();
    if (studentRollNoVar === "") {
        alert("Student Roll-No Required Value");
        $("#studentRollNo").focus();
        return "";
    }
    var studentFullNameVar = $("#studentFullName").val();
    if (studentFullNameVar === "") {
        alert("Student Full-Name is Required Value");
        $("#studentFullName").focus();
        return "";
    }
    var studentClassVar = $("#studentClass").val();
    if (studentClassVar === "") {
        alert("Student Class is Required Value");
        $("#studentClass").focus();
        return "";
    }
    var studentBirthDateVar = $("#studentBirthDate").val();
    if (studentBirthDate === "") {
        alert("Student Birth-Date Required Value");
        $("#studentBirthDate").focus();
        return "";
    }
    var studentAddressVar = $("#studentAddress").val();
    if (studentAddressVar === "") {
        alert("Student Address is Required Value");
        $("#studentAddress").focus();
        return "";
    }
    var studentEnrollmentDateVar = $("#studentEnrollmentDate").val();
    if (studentEnrollmentDateVar === "") {
        alert("Student Enrollment-Date is Required Value");
        $("#studentEnrollmentDate").focus();
        return "";
    }
    var jsonStrObj = {
        rollNo: studentRollNoVar,
        fullName:studentFullNameVar,
        class: studentClassVar,
        birthDate: studentBirthDateVar,
        address: studentAddressVar,
        enrollmentDate: studentEnrollmentDateVar
    };
    return JSON.stringify(jsonStrObj);
}

function resetForm() {
    $("#studentRollNo").val("")
    $("#studentFullName").val("");
    $("#studentClass").val("");
    $("#studentBirthDate").val("");
    $("#studentAddress").val("");
    $("#studentEnrollmentDate").val("");
    $("#studentRollNo").prop("disabled", false);
    $("#studentSave").prop("disabled", true);
    $("#studentUpdate").prop("disabled", true);
    $("#studentReset").prop("disabled", true);
    $("#studentRollNo").focus();

}



function saveStudent() {
    var jsonStr = validateAndGetFormData();
    if (jsonStr === "") {
        return;
    }
    var putReqStr = createPUTRequest(connToken,
        jsonStr, dbName, relationName);
    jQuery.ajaxSetup({ async: false });
    var resultObj = executeCommandAtGivenBaseUrl(putReqStr,
        jpdbUrl, jpdbIML);
    jQuery.ajaxSetup({ async: true });
    resetForm();
}


function updateStudent() {
    $("#studentUpdate").prop("disabled", true);
    var jsonChg = validateAndGetFormData();
    var updateRequest = createUPDATERecordRequest(connToken,
        jsonChg, dbName, relationName,localStorage.getItem('recno'));
    jQuery.ajaxSetup({ async: false });
    var resultObj = executeCommandAtGivenBaseUrl(updateRequest,
        jpdbUrl, jpdbIML);
    jQuery.ajaxSetup({ async: true });
    resetForm();
    $("#studentRollNo").focus();
}

function getStudentRollNoAsJsonObj(){
    var studentRollNo = $("#studentRollNo").val();
    var jsonStr = {
        rollNo:studentRollNo
    }
    return JSON.stringify(jsonStr);
}

function saveRecNo2LS(jsonObj){
    var lvData = JSON.parse(jsonObj.data);
    localStorage.setItem('recno',lvData.rec_no);
}

function fillData(jsonObj){

    saveRecNo2LS(jsonObj);
    var record = JSON.parse(jsonObj.data).record;
    $("#studentFullName").val(record.fullName);
    $("#studentClass").val(record.class);
    $("#studentBirthDate").val(record.birthDate);
    $("#studentAddress").val(record.address);
    $("#studentEnrollmentDate").val(record.enrollmentDate);
}


function getStudent() {
    var studentRollNoJsonObj = getStudentRollNoAsJsonObj();
    var getRequest = createGET_BY_KEYRequest(connToken, dbName, relationName, studentRollNoJsonObj);
    jQuery.ajaxSetup({ async: false });
    var resultObj = executeCommandAtGivenBaseUrl(getRequest,jpdbUrl, jpdbIRL);
    jQuery.ajaxSetup({ async: true });
    if (resultObj.status === 400) {
        $("#studentSave").prop("disabled", false);
        $("#studentReset").prop("disabled", false);
        $("#studentFullName").focus();

    }else if(resultObj.status === 200){
        $("#studentRollNo").prop("disabled",true);
        fillData(resultObj);
        $("#studentUpdate").prop("disabled", false);
        $("#studentReset").prop("disabled", false);
        $("#studentFullName").focus();

    }
}