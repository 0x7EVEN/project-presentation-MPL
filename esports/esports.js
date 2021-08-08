var flag = false;
function showmenu () {
     let menu = document.getElementById('menu-onclick');
     let navdiv = document.getElementById('navigation-div');
     menu.style.transitionDuration = '2000ms';
     if (!flag) {
          menu.style.display = 'flex'; flag = true;
          navdiv.style.maxHeight = '100%';
     }
     else {
          menu.style.display = 'none'; flag = false;
          navdiv.style.maxHeight = '100px';
     }
}
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
     coll[i].addEventListener("click", function() {
          this.classList.toggle("active");
          var content = this.nextElementSibling;
          if (content.style.display === "block") {
               content.style.display = "none";
          } else {
               content.style.display = "block";
          }
     });
}
