// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var span2 = document.createElement("SPAN");
  var span3 = document.createElement("SPAN");
  var close = document.createTextNode("\u00D7");
  var tag = document.createTextNode("\uFF03");
  var edit = document.createTextNode("Edit");
  span.className = "closeb";
  span2.className = "tag";
  span3. className = "edit";
  span3.appendChild(edit);
  span2.appendChild(tag);
  span.appendChild(close); 
  myNodelist[i].appendChild(span3);
  myNodelist[i].appendChild(span2);
  myNodelist[i].appendChild(span);
}
// Click on a tag button to add a tag 
/* NOT WORKING :() */
var tag = document.querySelector(".tag");
var i;
let input = "";
for (i = 0; i < tag.length; i ++) {
  tag[i].onclick = function() {
    input= '<input type="text" id="tagInput" placeholder="Add tag...">'
    document.querySelector(".tag").innerHTML = input;
  }
}
 
// Click on a close button to hide the current list item
var closeb = document.getElementsByClassName("closeb");
var i;
for (i = 0; i < closeb.length; i++) {
  closeb[i].onclick = function() {
    var div = this.parentElement;
    console.log  (this.parentElement)
    div.style.display = "none";
  }
} 

var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
} 

// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var p = document.createElement("p");
  var pinputValue = document.getElementById("pInput").value;
  var inputValue = document.getElementById("liInput").value;
  var title = document.createTextNode(inputValue);
  var desc = document.createTextNode(pinputValue);
  li.appendChild(title);
  p.appendChild(desc)
  li.classList.add('new');

  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
    document.querySelector(".new").appendChild(p);
  }
  document.getElementById("liInput").value = "";
  document.getElementById("pInput").value ="";
  li.classList.remove('new');
  var span = document.createElement("SPAN");
  var span2 = document.createElement("SPAN");
  var span3 = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  var tag = document.createTextNode("\uFF03");
  var edit = document.createTextNode("Edit");
  span.className = "closeb";
  span2.className = "tag";
  span3. className = "edit";
  span3.appendChild(edit);
  span2.appendChild(tag);
  span.appendChild(txt);
  li.appendChild(span3);
  li.appendChild(span2);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}