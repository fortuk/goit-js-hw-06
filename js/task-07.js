(function() {
    const controlFontSizeEl = document.querySelector('#font-size-control');
    const textEl = document.querySelector('#text');
    controlFontSizeEl.addEventListener("input",
        function() {
            textEl.style.fontSize = controlFontSizeEl.value + 'px'
        });
})();