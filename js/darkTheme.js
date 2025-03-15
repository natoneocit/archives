    /* Background change, theme change... */
    const hour = new Date().getHours();
    if (hour > 17 || hour < 5) {
      document.body.classList.add("dark");
    }