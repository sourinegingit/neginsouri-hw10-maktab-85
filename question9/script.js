let tooltipElem;

document.onmouseover = function(event) {
    let target = event.target;

    // if we have tooltip HTML...
    let tooltipHtml = target.dataset.tooltip;
    if (!tooltipHtml) return;

    // ...create the tooltip element

    tooltipElem = document.createElement('div');
    tooltipElem.className = 'tooltip';
    tooltipElem.innerHTML = tooltipHtml;
    document.body.append(tooltipElem);

    // position it above the annotated element (top-center)
    let coords = target.getBoundingClientRect();

    let left = coords.left + (target.offsetWidth - tooltipElem.offsetWidth) / 2;
    if (left < 0) left = 0; // don't cross the left window edge

    let top = coords.top - tooltipElem.offsetHeight - 5;
    if (top < 0) { // if crossing the top window edge, show below instead
        top = coords.top + target.offsetHeight + 5;
    }

    tooltipElem.style.left = left + 'px';
    tooltipElem.style.top = top + 'px';
};

document.onmouseout = function(e) {

    if (tooltipElem) {
        tooltipElem.remove();
        tooltipElem = null;
    }

};