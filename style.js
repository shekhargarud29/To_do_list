var inVal1 = document.getElementById("inputvalTitle");
var inVal2 = document.getElementById("inputvalContent");
var inVal = inVal1.value + inVal2.value;
var outVal = document.getElementById("outputval");
var outAll = document.getElementsByClassName("al")[0];
var outcomplete = document.getElementsByClassName("cpt")[0];
var outincomplete = document.getElementsByClassName("icpt")[0];
var i = 0;
var j = -1;

function sendTo() {
  if (inVal1.value == "" || inVal2.value == "") {
    alert("Input field is empty");
  } else {
    outincomplete.style.display = "none";
    outcomplete.style.display = "none";
    outAll.style.display = "block";

    // outAll.innerHTML += `<div id="div${i}">
    //                         <input type="checkbox" onchange="check(${i},${j})" class="box form-check-input" id="${j}">
    //                           <div class="d-flex justify-content-between box${i}">
    //                               <h3 class="text${i}">${inVal.value}</h3>
    //                               <div>
    //                                 <label class="btn bg-success text-white form-check-label" for="${j}"><i class="fa-regular fa-square-check h-5      m-0"></i></label>
    //                                 <button class="btn bg-danger text-white" onclick="remove(${i})"><i class="fa-regular fa-trash-can h5 m-0"></i></button>
    //                               </div>

    //                           </div>
    //                     </div>`;

    // Create main container div
    var newItem = document.createElement("div");
    newItem.className = "my-2";
    newItem.id = "div" + i;

    // Create checkbox
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "box form-check-input";
    checkbox.id = j;
    checkbox.setAttribute("onchange", `check(${i},${j})`);
    newItem.appendChild(checkbox);

    // Create inner div for text and buttons
    var innerDiv = document.createElement("div");
    innerDiv.className = "d-flex justify-content-between box" + i;

    // Create text element
    var text = document.createElement("h5");
    text.className = "text" + i;
    text.textContent = inVal1.value + ":- " + inVal2.value;
    innerDiv.appendChild(text);

    // create normal div
    var div = document.createElement("div");
    innerDiv.appendChild(div);

    // Create label for checkbox
    var label = document.createElement("label");
    label.className = "btn bg-success text-white form-check-label mx-1";
    label.setAttribute("for", j);
    label.innerHTML = '<i class="fa-regular fa-square-check h-5 m-0"></i>';
    div.appendChild(label);

    // Create button to remove item
    var removeButton = document.createElement("button");
    removeButton.className = "btn bg-danger text-white";
    removeButton.setAttribute("onclick", `remove(${i})`);
    removeButton.innerHTML = '<i class="fa-regular fa-trash-can h5 m-0"></i>';
    div.appendChild(removeButton);

    // Append inner div to main container
    newItem.appendChild(innerDiv);

    // Append main container to outAll
    outAll.appendChild(newItem);

    // cloning to outincomplete
    outincomplete.appendChild(newItem.cloneNode(true));

    // outincomplete.appendChild(
    //   document.getElementById("div" + i).cloneNode(true)
    // );
    i++;
    j--;
  }
  inVal1.value = "";
  inVal2.value = "";
}

function remove(i) {
  var k = 0;
  for (var k; k < 2; k++) {
    document.querySelectorAll(`#outputval #div${i}`)[0].remove();
  }
  // document.querySelectorAll(`.al #div${i}`)[0].remove();
  // document.querySelectorAll(".icpt #div" + i)[0].remove();
  // document.querySelectorAll(".cpt #div" + i)[0].remove();
  // document.querySelector(`.cpt #div${i}`).remove();
}

function check(i, j) {
  if (document.getElementById(j).checked) {
    // adding stike  through effect
    document.querySelectorAll(`#div${i} h5`)[0].style.textDecoration =
      "line-through";

    // add to complete list
    outcomplete.appendChild(document.getElementById("div" + i).cloneNode(true));

    //  remove from incomplete list
    document.querySelectorAll(`.icpt #div${i}`)[0].remove();
  } else {
    // removing stike  through effect
    document.querySelectorAll(`#div${i} h5`)[0].style.textDecoration = "none";

    //add to incomplete list
    outincomplete.appendChild(
      document.getElementById("div" + i).cloneNode(true)
    );

    //remove from complete list
    document.querySelectorAll(`.cpt #div${i}`)[0].remove();
  }
}

function completed() {
  outAll.style.display = "none";
  outincomplete.style.display = "none";
  outcomplete.style.display = "block";
}

function allthe() {
  outincomplete.style.display = "none";
  outcomplete.style.display = "none";
  outAll.style.display = "block";
}

function incomplete() {
  outcomplete.style.display = "none";
  outAll.style.display = "none";
  outincomplete.style.display = "block";
}
