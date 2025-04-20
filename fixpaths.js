// Create a script to fix asset paths
(function() {
  // Function to intercept and fix URLs
  function fixAssetPaths() {
    // Find all image elements
    const images = document.querySelectorAll('img');
    images.forEach(img => {
      const src = img.getAttribute('src');
      if (src && (src.startsWith('/icons/') || src.startsWith('icons/'))) {
        // Make sure the path has /our-website/ prefix
        const newSrc = src.replace(/^\/?(icons\/)/, '/our-website/$1');
        img.setAttribute('src', newSrc);
      }
    });
    
    // Find all video elements
    const videos = document.querySelectorAll('video');
    videos.forEach(video => {
      const sources = video.querySelectorAll('source');
      sources.forEach(source => {
        const src = source.getAttribute('src');
        if (src && (src.startsWith('/videos/') || src.startsWith('videos/'))) {
          // Make sure the path has /our-website/ prefix
          const newSrc = src.replace(/^\/?(videos\/)/, '/our-website/$1');
          source.setAttribute('src', newSrc);
        }
      });
      
      // Re-load the video after changing source
      video.load();
    });
    
    // Also check for background images in style attributes that might contain icons/videos
    const allElements = document.querySelectorAll('*');
    allElements.forEach(el => {
      const style = el.getAttribute('style');
      if (style && (style.includes('/icons/') || style.includes('/videos/'))) {
        // Replace URLs in inline styles
        const newStyle = style
          .replace(/url\(['"]?\/?icons\//g, 'url(/our-website/icons/')
          .replace(/url\(['"]?\/?videos\//g, 'url(/our-website/videos/');
        el.setAttribute('style', newStyle);
      }
    });
  }
  
  // Run the function after the page loads
  window.addEventListener('DOMContentLoaded', fixAssetPaths);
  
  // Also run it after a short delay to catch dynamically added elements
  setTimeout(fixAssetPaths, 500);
  setTimeout(fixAssetPaths, 1500);
})();