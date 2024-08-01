// TYPING ANIMATION

var typed  = new Typed(".typing",{
    strings:["","Web Designer","MERN Stack Developer","Content Writer","Front-end Developer"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})

function navfunction() {
  const nav = document.querySelector(".nav"),
    navList = nav.querySelectorAll("li"), // Select all <li> elements
    totalnavList = navList.length;

  for (let i = 0; i < totalnavList; i++) {
    const a = navList[i].querySelector("a"); // Select the <a> inside each <li>
    a.addEventListener("click", function () {
      // Remove 'active' class from all links
      for (let j = 0; j < totalnavList; j++) {
        navList[j].querySelector("a").classList.remove("active");
      }
      // Add 'active' class to the clicked link
      this.classList.add("active");
    });
  }
}

// Call the function once to set up the event listeners
navfunction();

