function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }

  function openLinkInNewTab(url) {
    window.open(url, '_blank');
}

document.getElementById("resume-link-1").addEventListener('click',()=>{
  window.open("https://drive.google.com/file/d/15e-alzZDHghqxxXY8bCtB-P2npnRb1cr/view?usp=drive_link")
})

document.getElementById("resume-link").addEventListener('click',()=>{
  window.open("https://drive.google.com/file/d/15e-alzZDHghqxxXY8bCtB-P2npnRb1cr/view?usp=drive_link")
})

document.getElementById("resume-button-2").addEventListener('click',()=>{
  var link = document.createElement('a');
  link.href = './assets/portfolio.pdf';
  link.target = '_blank';
  link.download = 'resume.pdf';
  link.click();
  window.open("https://drive.google.com/file/d/15e-alzZDHghqxxXY8bCtB-P2npnRb1cr/view?usp=drive_link")
})
document.getElementById("resume-button").addEventListener('click',()=>{
  var link = document.createElement('a');
  link.href = './assets/portfolio.pdf';
  link.target = '_blank';
  link.download = 'resume.pdf';
  link.click();
  window.open("https://drive.google.com/file/d/15e-alzZDHghqxxXY8bCtB-P2npnRb1cr/view?usp=drive_link")
})