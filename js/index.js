function start() {
  console.log("natively.neocities | Thank you for your patience.");
  const firstRun = localStorage.getItem("firstRun");
  const light = localStorage.getItem("light");
  const theme = localStorage.getItem("theme");
  const seasonflakes = localStorage.getItem("seasonflakes");


  if (firstRun == null) { 
    localStorage.setItem("firstRun", "true");
    localStorage.setItem("theme", "XP");
    localStorage.setItem("light", "def");
    localStorage.setItem("locale", "en");
    localStorage.setItem("seasonflakes", "ON");
  }
  document.getElementById("button_apply").disabled = true;


    const buttonupdates = document.getElementById("button_updates");
    buttonupdates.addEventListener("click", open_updates);
    
    const buttoncredits = document.getElementById("button_credits");
    buttoncredits.addEventListener("click", open_credits);

    const buttonsettings = document.getElementById("button_settings");
    buttonsettings.addEventListener("click", open_settings);


    /* snoflux */
    const y = new Date().getFullYear();
    const textyear = document.getElementById("copyrightyear");
    textyear.innerHTML = y;
    const m = new Date().getMonth();
    if (m == "11", "0", "1") {
      document.getElementById("winter").style.display = "block";
    }

    /* happy birthday to santa claus */
    const d = new Date().getDay();
    if (d == "3" && m == "0") {
      document.getElementById("happynewyear").style.display = "block";
    }
    /* logon sounds, right? */
    const sevlogonsoundmain = document.getElementById("logonsound7");
    const xplogonsoundmain = document.getElementById("logonsoundxp");
    const ninlogonsoundmain = document.getElementById("logonsound98");
    sevlogonsoundmain.volume = 0.3;
    xplogonsoundmain.volume = 0.3;
    ninlogonsoundmain.volume = 0.15;

    if (theme == "7") {
      $(document).ready(function() {
      sevlogonsoundmain.play();
      document.getElementById("logon7").style.animation = "1.45s logon7 ease-in-out";
      setTimeout(function() {
        document.getElementById("logon7").style.display = "none";
      }, 1450);
    });
    }
    if (theme == "XP") {
      $(document).ready(function() {
      xplogonsoundmain.play();
    });
  }
    if (theme == "98") {
      $(document).ready(function() {
      ninlogonsoundmain.play();
    });
  }
    /* Background change, theme change... */
const hour = new Date().getHours();
if (light == "def") {
  if (hour > 5) {
    document.body.style.background = "url('/img/bg/EPIC_XP_v2_1.jpg')"; 
  }
  if (hour > 8) {
    if (theme == "XP" || theme == "7") {
      document.body.style.background = "url('/img/bg/EPIC_XP_v2_2.jpg')"; 
    }
  }
  if (hour > 15) {
    if (theme == "XP" || theme == "7") {
      document.body.style.background = "url('/img/bg/EPIC_XP_v2_3.jpg')"; 
    }
    if (theme == "98") {
      document.body.classList.add("evening");
    }
  }
  
  if (hour > 16 || hour < 5) {
    if (theme == "XP") { document.body.style.background = "url('/img/bg/EPIC_XP_v2_4.jpg')"; }
  }
}
if (light == "light") {
  if (theme == "XP") { document.body.style.background = "url('/img/bg/EPIC_XP_v2_2.jpg')"; }
  if (theme == "7") { document.body.style.background = "url('/img/bg/7/def.jpg"; }
}
if (light == "dark") {
  if (theme == "XP") { document.body.style.background = "url('/img/bg/EPIC_XP_v2_4.jpg')"; }
  if (theme == "7") { document.body.style.background = "url('/img/bg/7/night.jpg"; }
}
}

function title() {
  $(document).ready(function() {
    // Function to update the existing div with the iframe title
    function updateIframeTitle() {
        $('#iframe-title').text(iframe.contentWindow.document.title);
    }
  

    $('#iframe').on('load', function() {
        updateIframeTitle();
    });
    
    updateIframeTitle();
  });
}
function themeSelection(e) {
  let style = document.getElementById("styles");
  style.href = "/css/" + e.target.value + ".css";
  localStorage.setItem("theme", e.target.value);
  document.getElementById("button_apply").disabled = false;
}

function lightSelection(e) {
  localStorage.setItem("light", e.target.value);
  document.getElementById("button_apply").disabled = false;
}
function seasonflake(e) {
  localStorage.setItem("seasonflakes", e.target.value);
  document.getElementById("button_apply").disabled = false;
}
function refreshus() { document.reload(); }

function themesettings() {
  const theme = localStorage.getItem("theme");
  const style = document.getElementById("styles");
  const light = localStorage.getItem("light");
  const seasonflakes = localStorage.getItem("seasonflakes");

  if (seasonflakes == "OFF") {
    document.getElementById("winter").style.display = "none";
    document.getElementById("seasonflake_OFF").selected = true;
  }

  if (light == "light") {
    document.body.classList.remove("dark");
    document.getElementById("light").selected = true;
  }
  if (light == "dark") {
    document.body.classList.add("dark");
    document.getElementById("dark").selected = true;
   }

  if (theme == "98") {
    style.href = "/css/98.css";
    document.body.style.background = "#008080";
    document.getElementById("98").selected = true;
}
  if (theme == "XP" || theme == null || theme == undefined) {
    style.href = "/css/XP.css";
    document.getElementById("XP").selected = true;
  }
  if (theme == "7") {
    style.href = "/css/7.css";
    document.getElementById("7").selected = true;
    document.getElementsByClassName("window").style = "--window-background-color: #000000;";
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

  function start_packsinside() {
    let iframe = document.getElementById("iframe");
    iframe.onload = () => {
        const links = iframe.contentWindow.document.querySelectorAll('button');
        links.forEach(link => {
          link.target = '_blank';
        });
      };
  }


  function updateSystem() {
    const version = localStorage.getItem("version");
    const versions = ["2.5_3000", "2.5_3350"];
    const textver = document.getElementById("textver");

    if (version == undefined || version == null || version == versions[versions.length] || version == versions[versions.length - 2]) { 
        location.reload();
        localStorage.setItem("version", versions[versions.length - 1]);
    }
    if (version == versions[versions.length - 1]) { 
        textver.innerHTML = versions[versions.length - 1];
 }
}