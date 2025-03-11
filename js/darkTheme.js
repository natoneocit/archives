    /* Background change, theme change... */
    const hour = new Date().getHours();
    const theme = localStorage.getItem("theme");
    const light = localStorage.getItem("light");
    if (light == "def") {
      if (hour > 16 || hour < 5) {
        document.body.classList.add("dark");
      }
    }
    if (light == "dark") {
      document.body.classList.add("dark");
    }