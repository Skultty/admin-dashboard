// event listener for sidebar toggle between active and hidden classes
document.getElementById('sidebarToggle').addEventListener('click', function() {
  document.getElementById('sidebar').classList.toggle('active');
  // from all elements that have sidebarText class toggle hiddenText class
    document.querySelectorAll('.sidebarText').forEach(function(element) {
      element.classList.toggle('activeText');
    }); 
});