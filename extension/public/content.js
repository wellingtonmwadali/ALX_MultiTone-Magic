(function () {
    console.log('Content script is running.');
    const theme = localStorage.getItem('currentTheme');
    if (theme) {
        document.body.classList.add(`theme-${theme}`);
    }
    else {
        console.log('No theme found in localStorage.');
    }
})();




  