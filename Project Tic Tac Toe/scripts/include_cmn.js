// to replace footer and header in each file

window.onload = function() {
    function insertHTML(elementId, htmlText) {
        fetch(htmlText)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.text();
            })
            .then(data => {
                const element = document.getElementById(elementId);
                if (element) {
                    element.innerHTML = data;
                } else {
                    console.error(`Element with ID ${elementId} not found.`);
                }
            })
            .catch(error => console.error('Failed to fetch the HTML file:', error));
    }
    insertHTML("footer", "../html/footer.html");
    insertHTML("header", "../html/header.html");
    
};


