// function that manages the NavBar whenn the size of screen changes
function NavLinksResize(){
    const NavLink = document.getElementById("nav-links") // gets the navBar Links
    const navHome = document.getElementById("nav-home") // gets NavBarLink -> home

    // function to modify navlinks regarding screen width
    function navLinksClassRemover(parent, classAdd, classRm1, classRm2, parentClassRm, parentClassAdd){
        const children = parent.children
        for(let i=0; i<children.length; i++){
            children[i].classList.remove(classRm1)
            children[i].classList.remove(classRm2)
            children[i].classList.add(classAdd)
        }
        parent.classList.remove(parentClassRm)
        parent.classList.add(parentClassAdd)
    }
    
    // if screen width is between 576 and 625px
    if(window.innerWidth<625 & window.innerWidth>=576){
        navLinksClassRemover(NavLink, "px-2", "px-3", "px-1", "justify-content-evenly","justify-content-center")
        navHome.classList.remove("d-none")
        navHome.classList.add("d-block")

    // if screen width is between 450 and 576px
    } else if(window.innerWidth>450 & window.innerWidth<576){
        navLinksClassRemover(NavLink, "px-2", "px-1", "px-3", "justify-content-evenly","justify-content-center")
        navHome.classList.add("d-block")
        navHome.classList.remove("d-none")

    // if screen width is less than 380px
    } else if (window.innerWidth<380){
        navLinksClassRemover(NavLink, "l", "px-2", "px-3", "justify-content-center","justify-content-evenly")
        navHome.classList.add("d-none")
        navHome.classList.remove("d-block")
    // if screen width is between 380 and 450px
    } else if(window.innerWidth>=380 & window.innerWidth<=450) {
        navLinksClassRemover(NavLink, "px-1", "px-2", "px-3", "justify-content-center","justify-content-evenly")
        navHome.classList.add("d-block")
        navHome.classList.remove("d-none")

    // if screen width is greater than 625px
    } else{
        navLinksClassRemover(NavLink, "px-3", "px-2", "px-1", "justify-content-evenly","justify-content-center")
        navHome.classList.remove("d-none")
        navHome.classList.add("d-block")
    }
}

// JavaScript to add fixed-top class to the navbar on scroll
window.onscroll = function() {
    const navLinks = document.getElementById("nav-links");
    if (window.scrollY > 115) {
      navLinks.classList.add('fixed-top');
    } else {
      navLinks.classList.remove('fixed-top');
    }
  };


document.addEventListener("DOMContentLoaded", ()=>{
    // manages NavBar
    NavLinksResize();

    // Adding focus, mouseIn, mouseOut, properties
    const navLinksChildren = document.getElementById("nav-links").children
    for(let i=0; i<navLinksChildren.length; i++){
        navLinksChildren[i].addEventListener("mouseover", ()=>{
            navLinksChildren[i].style="background-color: rgb(150, 217, 150)"
        })
        navLinksChildren[i].addEventListener("mouseout", ()=>{
            navLinksChildren[i].style="background-color: rgb(162, 238, 162)"
        })
    }
    
    // copies the mobile number to clipboard
    const mobileContact = document.getElementById("mobile-contact")
    mobileContact.addEventListener("click",()=>{
        const copyMobileContact = async () => {
            try {
              await navigator.clipboard.writeText(mobileContact.innerText);
              alert('Number copied!');
            } catch (err) {
              alert('Failed to copy\nTry Manual Copying!');
            }
          }
            copyMobileContact();
    })

    
})

window.addEventListener("resize", ()=>{
    // manages NavBar
    NavLinksResize();
})