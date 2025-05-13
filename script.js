// "Click Me" button interaction + GA event
document.getElementById("clickMeBtn")?.addEventListener("click", function() {
  this.style.backgroundColor = "#00ff99";
  this.innerText = "Clicked!";
  alert("You clicked the button!");

  gtag('event', 'button_click', {
    'event_category': 'engagement',
    'event_label': 'Click Me Button',
    'page_title': document.title,
    'page_location': window.location.href,
    'custom_button_name': 'Click Me' // Custom Dimension
  });
});

// Form Submit Button
document.getElementById("submitBtn")?.addEventListener("click", function () {
  gtag('event', 'form_submit', {
    'event_category': 'contact',
    'event_label': 'Contact Form Submit',
    'page_title': document.title,
    'custom_form_type': 'Contact Form' // Custom Dimension
  });
});

// Video Play
document.getElementById("myVideo")?.addEventListener("play", function () {
  gtag('event', 'video_play', {
    'event_category': 'media',
    'event_label': 'Blog Video Play',
    'page_title': document.title,
    'custom_media_type': 'Video' // Custom Dimension
  });
});

// File Upload
document.getElementById("fileUpload")?.addEventListener("change", function () {
  gtag('event', 'file_upload', {
    'event_category': 'interaction',
    'event_label': 'User Uploaded File',
    'page_title': document.title
  });
});

// Scroll Depth (90%)
window.addEventListener('scroll', function () {
  const scrolled = (window.innerHeight + window.scrollY) / document.body.scrollHeight;
  if (scrolled > 0.9 && !window.hasScrolledDeep) {
    window.hasScrolledDeep = true;
    gtag('event', 'scroll_depth', {
      'event_category': 'engagement',
      'event_label': 'Scrolled 90%',
      'page_title': document.title
    });
  }
});
