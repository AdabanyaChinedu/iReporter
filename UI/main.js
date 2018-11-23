var recordDropdown = document.getElementById("myrecords-dropdwn");
var createDropdown = document.getElementById("create-dropdwn");
// var recordBtn = document.getElementById("myrecords-btn");
// var createBtn = document.getElementById("create-btn");



var createFunction = function() {

    if (createDropdown.className === "dropdown-content") {
        createDropdown.className = " dropdown-content-remove";
    } else {
        createDropdown.className = "dropdown-content";
    }
}
var myrecordFunction = function() {

    if (recordDropdown.className === "dropdown-content") {
        recordDropdown.className = " dropdown-content-remove";
    } else {
        recordDropdown.className = "dropdown-content";
    }
}