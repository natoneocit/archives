function start() {
    const buttonupdates = document.getElementById("button_updates");
    buttonupdates.addEventListener("click", open_updates);
    
    const buttonpacks = document.getElementById("button_packs");
    buttonpacks.addEventListener("click", open_packs);
    
    const buttoncredits = document.getElementById("button_credits");
    buttoncredits.addEventListener("click", open_credits);

    /* Background change, theme change... */
const hour = new Date().getHours();
if (hour > 5) {
  document.body.style.background = "url('/img/bg/EPIC_XP_v2_1.jpg')"; 
}
if (hour > 8) {
  document.body.style.background = "url('/img/bg/EPIC_XP_v2_2.jpg')"; 
}
if (hour > 15) {
  document.body.style.background = "url('/img/bg/EPIC_XP_v2_3.jpg')"; 
}
if (hour > 17 || hour < 5) {
  document.body.style.background = "url('/img/bg/EPIC_XP_v2_4.jpg')";
  document.body.classList.add("dark");
}
}

$(document).ready(function() {
  // Function to update the existing div with the iframe title
  function updateIframeTitle() {
      console.log('updateIframeTitle called'); // Debugging message
      let title = $('#iframe').attr('title') || 'No title set';
      console.log('Fetched Title:', title); // Debugging message
      $('#iframe-title').text('Iframe Title: ' + title);
  }

  // Update title when the iframe loads
  $('#iframe').on('load', function() {
      console.log('Iframe content loaded');
      updateIframeTitle();  // Call the update function
  });
  
  // Also update when switching back to the page
  $(window).on('focus', updateIframeTitle);
});

function open_updates() {
    let iframex = document.getElementById("iframe");
    iframex.src = "/pages/updates";
}
function open_packs() {
    let iframex = document.getElementById("iframe");
    iframex.src = "/pages/packs/tnp";
}
function open_credits() {
  document.getElementById("creditscontainer").style.display = "flex";
}
function close_credits() {
  document.getElementById("creditscontainer").style.display = "none";
}
function open_settings() {
  document.getElementById("settingscontainer").style.display = "flex";
}
function close_settings() {
  document.getElementById("settingscontainer").style.display = "none";
}

let iframex = document.getElementById("iframe");
iframe.onload = () => {
    const links = iframe.contentWindow.document.querySelectorAll('a');
    links.forEach(link => {
      link.target = '_blank';
    });
  };

  function start_packsinside() {
    let iframex = document.getElementById("iframe");
    iframe.onload = () => {
        const links = iframe.contentWindow.document.querySelectorAll('button');
        links.forEach(link => {
          link.target = '_blank';
        });
      };
  }