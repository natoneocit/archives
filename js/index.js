function start() {
    const buttonupdates = document.getElementById("button_updates");
    buttonupdates.addEventListener("click", open_updates);
    
    const buttonpacks = document.getElementById("button_packs");
    buttonpacks.addEventListener("click", open_packs);
    
    const buttoncredits = document.getElementById("button_credits");
    buttoncredits.addEventListener("click", open_credits);

    const buttonsettings = document.getElementById("button_settings");
    buttonsettings.addEventListener("click", open_settings);

    /* Background change, theme change... */
const hour = new Date().getHours();
const theme = localStorage.getItem("theme");
if (hour > 5) {
  document.body.style.background = "url('/img/bg/EPIC_XP_v2_1.jpg')"; 
}
if (hour > 8) {
  document.body.style.background = "url('/img/bg/EPIC_XP_v2_2.jpg')"; 
}
if (hour > 15) {
  if (theme == "XP" || theme == "7") {
    document.getElementsByClassName("window").style = "--window-background-color: #805ba5;";
    document.body.style.background = "url('/img/bg/EPIC_XP_v2_3.jpg')"; 
  }
  if (theme == "98") {
    document.body.style.background = "rgb(152, 88, 0)"; 
  }
}
if (hour > 17 || hour < 5) {
  document.body.style.background = "url('/img/bg/EPIC_XP_v2_4.jpg')";
  document.body.classList.add("dark");
}
}
function title() {
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
}
function themeSelection(e) {
  let style = document.getElementById("styles");
  style.href = "/css/" + e.target.value + ".css";
  localStorage.setItem("theme", e.target.value);
}

function themesettings() {
  const theme = localStorage.getItem("theme");
  const style = document.getElementById("styles");

  if (theme == "98") {
    style.href = "/css/98.css";
    document.getElementById("98").selected = true;
}
  if (theme == "XP" || theme == null || theme == undefined) {
    style.href = "/css/XP.css";
    document.getElementById("XP").selected = true;
  }
  if (theme == "7") {
    style.href = "/css/7.css";
    document.getElementById("7").selected = true;
  }
}
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