var prevScrollpos = window.pageYOffset;

window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-60px";
  }
  prevScrollpos = currentScrollPos;
}

const navbarSlide = ()=>{
    const burger = document.querySelector('.burger_nav');
    const nav = document.querySelector('.nav_menu');
    const navMenu = document.querySelectorAll('.nav_menu li');

    burger.addEventListener('click',()=>{
        nav.classList.toggle('nav-active');

        navMenu.forEach((link, index)=>{
            if(link.style.animation){
                link.style.animation = ''
            }
            else{
                link.style.animation = `navBarFade 0.5s ease forwards ${index / 7 + 1}s`;
            }
        });

    burger.classList.toggle('toggle');
    });
}

(function () {
    document.querySelector('.theme-slider input[type="checkbox"]').addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
    })
})();

navbarSlide();