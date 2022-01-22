// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "closeb";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
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

// Tasks Status

var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  console.log('click')
  if (ev.target.tagName === 'LI') {
    console.log(ev)
    if (ev.target.className.match(/ongoing/)){
      ev.target.classList.remove('ongoing');  
      ev.target.classList.toggle('checked');
    }
    else if (ev.target.className.match(/ongoing|checked/)){
      ev.target.classList.remove('checked');  
      ev.target.classList.toggle('close');
      console.log('hello')
      /* setTimeout(remove(ev), 5000) */
      
      setTimeout(function () {
        ev.target.style.display ="none";
      }, 5000)
    }
    
    else {      
    ev.target.classList.toggle('ongoing');    
    }
  }
}, 
false
);

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
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}