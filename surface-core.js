document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".surface-trigger").forEach(el => {
        el.addEventListener("click", () => {
            const surface = el.dataset.surface;
            window.location.href = `/${surface}.html`;
        });
    });
});
