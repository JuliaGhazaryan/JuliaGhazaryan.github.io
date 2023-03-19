// Get references to the sidebar and main content elements
const sidebar = document.querySelector('.sidebar');
const mainContent = document.querySelector('.main-content');

// Get references to all the sidebar links
const sidebarLinks = sidebar.querySelectorAll('a');

// Loop through each link and add a click event listener
sidebarLinks.forEach(link => {
  link.addEventListener('click', function(event) {
    // Prevent the default behavior of the link
    event.preventDefault();

    // Get the href attribute of the clicked link
    const href = this.getAttribute('href');

     // If the clicked link is the homepage link, reload the page
     if (href === '/') {
        location.reload();
        return;
      }
  

    // Use the fetch API to load the content of the linked page
    fetch(href)
      .then(response => response.text())
      .then(data => {
        // Set the content of the main content area to the loaded content
        mainContent.innerHTML = data;
      })
      .catch(error => {
        console.error(error);
      });
  });
})