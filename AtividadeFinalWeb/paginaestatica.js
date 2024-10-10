function showAlert(message) {
    alert(message);
}

document.addEventListener("DOMContentLoaded", () => {
    const socialLinks = document.querySelectorAll("ul li a");
    
    socialLinks.forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            const siteName = event.target.innerText;
            showAlert(`Você está prestes a visitar: ${siteName}`);
            window.open(event.target.href, '_blank'); 
        });
    });
});