

var selectedRow = null;
var btn = document.querySelector(".button")
btn.addEventListener("click", employdata);


function employdata(){
  var ax = read_Input_Value();
  if (selectedRow == null){
    create_Tr_Td(ax);
    remove_input_value()
  }
  else{   
    updatefunc(ax); 
    remove_input_value(); 
    selectedRow = null;
  }

}

function read_Input_Value(){
  var redemp={} 
  redemp["ename"] = document.querySelector(".empname").value;
  redemp["des"] = document.querySelector(".city").value;
  redemp["mob"] = document.querySelector(".mobile").value;
  redemp["pin"] = document.querySelector(".emppin").value;
  return redemp
}
function create_Tr_Td(x){
  var empTable = document.querySelector(".list");
  var emp_tr = empTable.insertRow(empTable.length);
  var emp_td1 = emp_tr.insertCell(0);
  var emp_td2 = emp_tr.insertCell(1);
  var emp_td3 = emp_tr.insertCell(2);
  var emp_td4 = emp_tr.insertCell(3);
  var emp_td5 = emp_tr.insertCell(4);
  var emp_td6 = emp_tr.insertCell(5);
  var totalRowCount = document.querySelector(".list tr").length;
  emp_td1.innerHTML = empTable.rows.length-1;
   

  emp_td2.innerHTML = x.ename;   
    emp_td3.innerHTML = x.des;
    emp_td4.innerHTML = x.mob;
  emp_td5.innerHTML = x.pin;
  
  emp_td6.innerHTML = '<a class="edt" onClick="onEdit(this)">Edit</a>  / <a class="dlt" onClick="onDelete(this)">Delete</a>';
}

function remove_input_value(){
  document.querySelector(".empname").value= " ";
  document.querySelector(".city").value= " ";
  document.querySelector(".mobile").value= " ";
  document.querySelector(".emppin").value= " ";  
}

function onEdit(y){
  console.log(y);

    selectedRow = y.parentElement.parentElement;
    document.querySelector(".empname").value = selectedRow.cells[1].innerHTML;
    document.querySelector(".city").value = selectedRow.cells[2].innerHTML;
     document.querySelector(".mobile").value = selectedRow.cells[3].innerHTML;
    document.querySelector(".emppin").value = selectedRow.cells[4].innerHTML;
}

function updatefunc(redemp){
  selectedRow.cells[1].innerHTML = redemp.ename;
  selectedRow.cells[2].innerHTML = redemp.des;
  selectedRow.cells[3].innerHTML = redemp.mob;
  selectedRow.cells[4].innerHTML = redemp.pin;
  
}


function onDelete() {
    if (confirm('Are you sure to delete this record ?')) {
        var selectdelete = document.querySelector("a.dlt");
        selectdelete = selectdelete.parentElement.parentElement.remove(0);
    }
}




var input = document.getElementById("searchInput");
var table = document.getElementById("employeeList");

input.addEventListener("keyup", function() {
  
  var filter = input.value.toLowerCase();
  var rows = table.getElementsByTagName("tr");
  for (var i = 0; i < rows.length; i++) {
    var name = rows[i].getElementsByTagName("td")[1];
    if (name) {
      var text = name.innerText.toLowerCase();
      if (text.indexOf(filter) > -1) {
        rows[i].style.display = "";
      } else {
        rows[i].style.display = "none";
      }
    }
  }
});


const mobileInput = document.querySelector('.mobile');
mobileInput.addEventListener('blur', validateMobile);

function validateMobile() {
  const mobileValue = mobileInput.value;
  const mobileRegex = /^\d{10}$/; 
  if (!mobileRegex.test(mobileValue)) {
    alert('Please enter a valid 10 digit mobile number');
    mobileInput.value = '';
  }
}

