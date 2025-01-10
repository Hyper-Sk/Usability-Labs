function header() {
  const openMain = document.querySelector(".header-main .open");
  const openMobile = document.querySelector(".header-mobile .open");
  const close = document.querySelector("aside .close");
  const aside = document.querySelector(".aside");
  const close2 = document.querySelector('aside .overlay')

  // console.log(openMain,openMobile,close,aside)

  openMain.addEventListener("click", () => {
    aside.style.transform = "translateX(0)";
    console.log("first");
  });
  openMobile.addEventListener("click", () => {
    aside.style.transform = "translateX(0)";
    console.log("first");
  });
  close.addEventListener("click", () => {
    aside.style.transform = "translateX(100%)";
    console.log("first");
  });
  close2.addEventListener("click", () => {
    aside.style.transform = "translateX(100%)";
    console.log("first");
  });

  let dropdown = document.querySelectorAll(".aside .menu .link");
  let dropdownArea = document.querySelectorAll(".aside .menu .link span");

  // console.log(dropdownArea)

  dropdown.forEach((item) => {
    let i = item.querySelector("i");
    let span = item.querySelector("span");

    i.addEventListener("click", () => {
        span.classList.toggle('active');
    });
  });
    
    
}

header();
