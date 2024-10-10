export function myUse(idRef) { 
    let template = document.getElementById(idRef);
    const u = document.createElementNS("http://www.w3.org/2000/svg", "use");
    u.setAttribute("href", template);
    return u
}
