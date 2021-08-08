<script>
  var flag = false;
  function showmenu() {
    let menu = document.getElementById('menu-onclick');
    let navdiv = document.getElementById('navigation-div');
    menu.style.transitionDuration = '2000ms'
    if (!flag) {
      menu.style.display = 'flex'; flag = true;
      navdiv.style.maxHeight = '100%'
    }
    else {
      menu.style.display = 'none'; flag = false
      navdiv.style.maxHeight = '100px'
    }
  } var coll = document.getElementsByClassName("collapsible");
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
  let more = document.querySelector(".more");
  more.addEventListener("click", test);

  function test() {
    let first_box = document.getElementById("first-box-2");
    let second_box = document.getElementById("second-box-2");
    console.log(second_box.innerHTML);
    console.log("hello");
    second_box.style.display = "block";
    first_box.style.display = "none";

  }
  let less = document.querySelector(".less");
  less.addEventListener("click", test2);
  function test2() {
    let first_box = document.getElementById("first-box-2");
    let second_box = document.getElementById("second-box-2");
    second_box.style.display = "none";
    first_box.style.display = "block";


  }
  function moreText() {
    let span = document.getElementById("paratext");
    let short_para = document.getElementById("short-para");
    let long_para = document.getElementById("long-para");
    console.log(long_para);


    if (long_para.style.display == "none") {
      long_para.style.display = "block";
      short_para.style.display = "none";
      span.innerHTML = "&#x2193 Less";
    }
    else {
      short_para.style.display = "block";
      long_para.style.display = "none";
      span.innerHTML = "&#x2191 More";

    }
  }
  //end
</script>
