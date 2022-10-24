// Overflow : hidden when user navigates to TV Guide page
window.addEventListener('DOMContentLoaded', () => {
    const mediaQuery = window.matchMedia('(max-width: 768px)')
    if (mediaQuery.matches) {
        sidebar.classList.remove("sidebar2")
        sidebar_content_scroll.style.overflow = "hidden";
        menu_icon.classList.add("menu_icon2");
    }
});
// For Closing and opening of the sidebar
const sidebar_content_scroll = document.querySelector(".sidebar_content_scroll")
const menu_icon = document.querySelector(".menu_icon")
const close_icon = document.querySelector(".close_icon")
const sidebar = document.getElementById("sidebar")
const right_side_panel = document.getElementById("right_side_panel")


menu_icon.addEventListener("click", onopen)
close_icon.addEventListener("click", onclose)
function onopen() {
    sidebar.classList.add("sidebar2");
    close_icon.classList.add("close_icon2");
    menu_icon.classList.remove("menu_icon2");
    sidebar_content_scroll.style.overflow = "";
}

function onclose() {
    sidebar.classList.remove("sidebar2");
    menu_icon.classList.add("menu_icon2");
    search_bar.style.display = "none"
    close_icon.classList.remove("close_icon2");
    sidebar_content_scroll.style.overflow = "hidden";
}

// For Searchbar
const search_btn = document.querySelector(".fa-search")
const search_bar = document.querySelector(".search_bar")

search_btn.addEventListener("click", (e) => {
    if (search_bar.style.display == "block") {
        search_bar.style.display = "none"
    } else {
        search_bar.style.display = "block"
    }
})

// Changes when resizing the window
window.addEventListener("resize", () => {
    const mediaQuery = window.matchMedia('(max-width: 768px)')
    if (mediaQuery.matches) {
        search_bar.style.display = "none"
        menu_icon.classList.add("menu_icon2");
        sidebar_content_scroll.style.overflow = "hidden";
    }

    const mediaQuery2 = window.matchMedia('(min-width: 768px)')
    if (mediaQuery2.matches) {
        sidebar.classList.remove("sidebar2");
        menu_icon.classList.remove("menu_icon2");
        close_icon.classList.remove("close_icon2");
        sidebar_content_scroll.style.overflow = "";
    }

})

