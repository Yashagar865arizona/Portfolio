// Function to include HTML components
async function includeHTML() {
    const elements = document.getElementsByTagName("*");
    for (let element of elements) {
        const file = element.getAttribute("include-html");
        if (file) {
            try {
                const response = await fetch(file);
                const html = await response.text();
                element.innerHTML = html;
                element.removeAttribute("include-html");
            } catch (error) {
                console.error(`Error loading ${file}:`, error);
            }
        }
    }
}
