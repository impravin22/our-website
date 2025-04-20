// Create a script to fix asset paths
(function() {
  // Function to intercept and fix URLs
  function fixAssetPaths() {
    console.log("Running path fix script...");
    
    // Find all image elements
    const images = document.querySelectorAll('img');
    images.forEach(img => {
      const src = img.getAttribute('src');
      if (src && (src.startsWith('/icons/') || src.startsWith('icons/'))) {
        // Make sure the path has /our-website/ prefix
        const newSrc = src.replace(/^\/?(icons\/)/, '/our-website/$1');
        console.log(`Fixed image path: ${src} → ${newSrc}`);
        img.setAttribute('src', newSrc);
      }
    });
    
    // Find all video elements
    const videos = document.querySelectorAll('video');
    videos.forEach(video => {
      // Fix src attribute directly on video if it exists
      const videoSrc = video.getAttribute('src');
      if (videoSrc && (videoSrc.startsWith('/videos/') || videoSrc.startsWith('videos/'))) {
        const newVideoSrc = videoSrc.replace(/^\/?(videos\/)/, '/our-website/$1');
        console.log(`Fixed video src: ${videoSrc} → ${newVideoSrc}`);
        video.setAttribute('src', newVideoSrc);
        video.load();
      }
      
      // Fix source elements inside video
      const sources = video.querySelectorAll('source');
      sources.forEach(source => {
        const src = source.getAttribute('src');
        if (src && (src.startsWith('/videos/') || src.startsWith('videos/'))) {
          const newSrc = src.replace(/^\/?(videos\/)/, '/our-website/$1');
          console.log(`Fixed video source: ${src} → ${newSrc}`);
          source.setAttribute('src', newSrc);
        }
      });
      
      // Re-load the video after changing source
      video.load();
    });
    
    // Find references to videos in the DOM
    const allElements = document.querySelectorAll('*');
    allElements.forEach(el => {
      // Fix inline style backgrounds
      const style = el.getAttribute('style');
      if (style && (style.includes('/icons/') || style.includes('/videos/'))) {
        // Replace URLs in inline styles
        const newStyle = style
          .replace(/url\(['"]?\/?icons\//g, 'url(/our-website/icons/')
          .replace(/url\(['"]?\/?videos\//g, 'url(/our-website/videos/');
        console.log(`Fixed style: ${style} → ${newStyle}`);
        el.setAttribute('style', newStyle);
      }
      
      // Check data attributes that might contain paths
      for (const attr of el.attributes) {
        if (attr.name.startsWith('data-') && 
            (attr.value.includes('/videos/') || 
             attr.value.includes('/icons/'))) {
          const newValue = attr.value
            .replace(/\/videos\//g, '/our-website/videos/')
            .replace(/\/icons\//g, '/our-website/icons/');
          console.log(`Fixed data attribute ${attr.name}: ${attr.value} → ${newValue}`);
          el.setAttribute(attr.name, newValue);
        }
      }
    });
    
    // Check if we need to handle dynamically loaded content
    observeDynamicContent();
  }
  
  // Setup a mutation observer to watch for dynamically added content
  function observeDynamicContent() {
    // Only setup once
    if (window.pathFixerObserverSetup) return;
    window.pathFixerObserverSetup = true;
    
    const observer = new MutationObserver(mutations => {
      let needsFix = false;
      
      // Check if any interesting elements were added
      mutations.forEach(mutation => {
        if (mutation.type === 'childList') {
          mutation.addedNodes.forEach(node => {
            if (node.nodeName === 'VIDEO' || node.nodeName === 'IMG') {
              needsFix = true;
            } else if (node.querySelectorAll) {
              const videos = node.querySelectorAll('video');
              const images = node.querySelectorAll('img');
              if (videos.length > 0 || images.length > 0) {
                needsFix = true;
              }
            }
          });
        }
      });
      
      if (needsFix) {
        console.log("Detected dynamic content changes, reapplying fixes...");
        fixAssetPaths();
      }
    });
    
    // Start observing
    observer.observe(document.body, { 
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['src', 'style']
    });
  }
  
  // Run the function after the page loads
  window.addEventListener('DOMContentLoaded', fixAssetPaths);
  
  // Also run after a short delay and periodically for the first few seconds
  // to catch dynamically added elements
  setTimeout(fixAssetPaths, 500);
  setTimeout(fixAssetPaths, 1500);
  setTimeout(fixAssetPaths, 3000);
})();