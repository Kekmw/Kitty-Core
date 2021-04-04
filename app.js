function openNav(evt, navName) {
  var i, topnavcontent, topnavlink;

  topnavcontent = document.getElementsByClassName("topnavcontent");
  for (i = 0; i < topnavcontent.length; i++) {
    topnavcontent[i].style.display = "none";
  }

  topnavlink = document.getElementsByClassName("topnavlink");
  for (i = 0; i < topnavlink.length; i++) {
    topnavlink[i].className = topnavlink[i].className.replace(" active", "");
  }

  document.getElementById(navName).style.display = "block";
  evt.currentTarget.className += " active";
}