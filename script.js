document.querySelectorAll(".content").forEach(el => el.onmouseenter = function(mouse) {
    let edge = closestEdge(mouse, this);
    console.log(edge)
})

document.querySelectorAll(".content").forEach(el => el.onmouseleave = function(mouse) {
    let edge = closestEdge(mouse, this);
    console.log(edge)
})

function closestEdge(mouse, elem) {
    let elemBounding = elem.getBoundingClientRect();
    let elementLeftEdge = elemBounding.left;
    let elementTopEdge = elemBounding.top;
    let elementRightEdge = elemBounding.right;
    let elementBottomEdge = elemBounding.bottom;
    let mouseX = mouse.pageX;
    let mouseY = mouse.pageY;

    let topEdgeDist = Math.abs(elementTopEdge - mouseY);
    let bottomEdgeDist = Math.abs(elementBottomEdge - mouseY);
    let leftEdgeDist = Math.abs(elementLeftEdge - mouseX);
    let rightEdgeDist = Math.abs(elementRightEdge - mouseX);

    let min = Math.min(topEdgeDist, bottomEdgeDist, leftEdgeDist, rightEdgeDist);

    switch(min) {
        case leftEdgeDist: return "Лево";
        case rightEdgeDist: return "Право";
        case topEdgeDist: return "Верх";
        case bottomEdgeDist: return "Низ";
    }
}