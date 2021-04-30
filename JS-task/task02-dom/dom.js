function changeOuterLinks() {
    const aElements = document.querySelectorAll('a');

    aElements.forEach( item => {
        item.innerHTML.includes("outer-link") ? item.setAttribute("target", "_blank") : "";
        item.innerHTML = `<strong>${item.innerHTML}</strong>`;
    } );

    const navElement = document.querySelector('#link-list');
    
    navElement.style.display = "flex";
    navElement.style.flexDirection = "column";
    navElement.style.width = "30%";
    navElement.style.margin = "0 auto";
    navElement.style.border = "solid blue 1px";
    navElement.style.padding = "16px";
};

export { changeOuterLinks };