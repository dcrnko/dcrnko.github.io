//loop through each button
$('.next-section').each(function() {
  $(this).on('click', function () {
      //find the button's parent, in this case it is the section wrapper #about
      var nextSection = $(this).parent().next();
      //animate to the next section, edit the offset and time
      // note: having an offset can be handy, especially if you have fixed elements that depend on these scroll bahaviours. I'll leave it up to you to decide if you need an offset or not. Feel free to delete the 1 pixel altogether, you are the captain your own ship!
      $('html, body').animate({
          scrollTop: nextSection.offset().top + 1
      }, 1000 );
  });
});