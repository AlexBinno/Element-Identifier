(function () {
    var host;
    var root;
    var wrapSelector = "element-identifier";
    var shade;
    var shadeSelector = "element-identifier-shade";
    var doc = $('html');

    function enable() {
        // inject exclusive elements
        $('body').append('<div id="' + wrapSelector + '"></div>');
        host = document.querySelector('#' + wrapSelector);
        root = host.createShadowRoot();
        $(root).append('<div id="' + shadeSelector + '"></div>');
        shade = $(root).children('#' + shadeSelector);
        // set element mouseover event
        doc.on('mouseover', '*', elementMouseOver);
    }

    function isEnabled() {
        return $('#' + wrapSelector).length > 0;
    }

    function disable() {
        doc.off('mouseover', '*');
        $('#' + wrapSelector).remove();
    }

    function elementMouseOver(e) {
        if (isEnabled()) {
            var element = $(this);
            // move shade
            shade.css('top', element.offset().top);
            shade.css('left', element.offset().left);
            shade.css('width', element.outerWidth());
            shade.css('height', element.outerHeight());
            // callback on each new element
            elementMouseOverCallback(this);
            // stop bubbling up to parent elements
            e.stopPropagation();
        }
    }

    function elementMouseOverCallback(element) {
        var elementCssPath = $(element).elementCssPath({
            unique: true
        });
        console.log(elementCssPath);
    }

    // begin here
    if (isEnabled()) {
        disable();
    } else {
        enable();
    }
})();