// Function to create and handle the "Translate" button
function createTranslateButton() {
    const button = document.createElement('button');
    button.innerText = 'Translate';
    button.type = 'submit';
    button.className = 'btn waves-effect waves-light'; // Add the specified class names
    button.style.position = 'fixed';
    button.style.top = '10px';
    button.style.right = '10px';
    button.style.padding = '10px';
    button.style.borderRadius = '13px'; // Update border-radius
    button.style.background = '#058f8c'; // Update background
    button.style.boxShadow = 'inset 9.61px 9.61px 16px #047471, inset -9.61px -9.61px 16px #06aaa7'; // Update box-shadow
    button.style.color = 'white';
    button.style.border = 'none';
    button.style.cursor = 'pointer';

    button.addEventListener('click', () => {
        const additionalParams = `&_x_tr_sl=sa&_x_tr_tl=en&_x_tr_hl=en-GB`;
        const originalBaseUrl = 'https://jayeshmepani.github.io';
        const translatedBaseUrl = 'https://jayeshmepani-github-io.translate.goog';
        const currentPath = window.location.pathname;
        const extendedUrl = `${translatedBaseUrl}${currentPath}?filename=${filename}${additionalParams}`;
        console.log(`Extended URL: ${extendedUrl}`);
        window.open(extendedUrl, '_blank');
    });

    document.body.appendChild(button);
}

// Call the function to create the Translate button when the page loads
window.onload = () => {
    createTranslateButton();
};
