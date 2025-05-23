// "Click Me" button interaction
// document.getElementById("clickMeBtn")?.addEventListener("click", function() {
//   this.style.backgroundColor = "#00ff99";
//   this.innerText = "Clicked!";
//   alert("You clicked the button!");

//   gtag('event', 'button_click', {
//     'event_category': 'engagement',
//     'event_label': 'Click Me Button',
//     'custom_button_name': 'Click Me',      // Custom Dimension
//     'button_click_count': 1                // Custom Metric (numeric)
//   });
// });

// Form Submit
// document.getElementById("submitBtn")?.addEventListener("click", function () {
//   gtag('event', 'form_submit', {
//     'event_category': 'contact',
//     'event_label': 'Contact Form Submit',
//     'custom_form_type': 'Contact Form',    // Custom Dimension
//     'form_submit_count': 1                 // Custom Metric (numeric)
//   });
// });

// Video Play
document.getElementById("myVideo")?.addEventListener("play", function () {
  gtag('event', 'video_play', {
    'event_category': 'media',
    'event_label': 'Blog Video Play',
    'custom_media_type': 'Video',          // Custom Dimension
    'video_play_count': 1                  // Custom Metric (numeric)
  });
});

// File Upload
document.getElementById("fileUpload")?.addEventListener("change", function () {
  gtag('event', 'file_upload', {
    'event_category': 'interaction',
    'event_label': 'User Uploaded File',
    'page_title': document.title,
    'file_size_kb': 512  // Optional metric
  });
});
