const shareBtn = document.querySelector(".share-btn");
shareBtn.addEventListener("click", (e) => {
    const socialLinks = document.querySelector(".social-links");
    
    shareBtn.classList.add("active");
    socialLinks.classList.add("show");
    socialLinks.addEventListener("transitionend", () => { 
        window.addEventListener('click', closeShareHover);
    });


});

function closeShareHover(e) {
    const socialLinks = document.querySelector(".social-links");
    const shareBtn = document.querySelector(".share-btn");
    if (socialLinks.contains(e.target)) {
        // Clicked in social links
    } else {
        // Clicked outside of social links
        socialLinks.classList.remove("show");
        shareBtn.classList.remove("active");
        window.removeEventListener("click", closeShareHover);
    }
}

