// Hide the section elements
var hide_button = document.getElementById('hide');

hide_button.onclick = function() {
  var elements = document.getElementsByTagName('section');

  for (var i=0; i < elements.length; i++) {
    if (elements[i].style.display == 'block') {
      elements[i].style.display = 'none';
      console.log(i);
    } else {
      elements[i].style.display = 'block';
    }
  }
};

// Bold all the words defeasible
var emphasise_button = document.getElementById('emphasise');

emphasise_button.onclick = function () {
  document.body.innerHTML = document.body.innerHTML.replace(/defeasible/g, '<b style="color:yellow;">defeasible </b>');
};



// Remove all the links in the html
var remove = document.getElementById('remove');

remove.onclick = function() {
  var elements = document.getElementsByTagName('a');

  for (var i=0; i < elements.length; i++) {
    if (elements[i].style.display == 'block') {
      elements[i].style.display = 'none';
      console.log(i);
    } else {
      elements[i].style.display = 'block';
    }
  }
};

// var removeLink = document.getElementById('remove');
// removeLink.onclick = function(){
//   document.head.innerHTML = document.head.innerHtml.replace(/link/g, ' ');
// };
