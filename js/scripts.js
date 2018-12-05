jQuery(document).ready(function() {
  $("h1").click(function() {
    alert("This is a Header.");
    alert("i told you THIS IS A HEADER!");
  });

  jQuery("p").click(function() {
    alert("This is a Paragraph.");
  });

  jQuery("img").click(function() {
    alert("This is an image.");
  });
});
