var italics_button = document.getElementById('italics');

italics_button.onclick = function () {
  $('a').addClass('italic');
};

var append_button = document.getElementById('append');

append_button.onclick = function () {
  jQuery.get("data.txt", function(data) {
    $('#footer').append('<section><h1>' + data + '</h1></section>');
  }, 'text');
};

var close_open_button = document.getElementById('close-open');

close_open_button.onclick = function() {
  $('section').each(function() {
    $(this).prepend('<button onclick="hide()" type="button" name="close" id="close">Close</button>');
  });
};

function hide (){
  $(this).css('display', 'hidden');
}
