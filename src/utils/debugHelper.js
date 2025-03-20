/**
 * Helper function to debug click issues by highlighting overlapping elements
 * Add this to your page component and call it from a useEffect
 */
export const debugOverlays = () => {
  // Add this to your browser console to help debug
  console.log('Running overlay debugger...');
  
  // Add red outlines to all absolutely positioned elements
  const absolute = document.querySelectorAll('*[style*="position: absolute"], *[style*="position:absolute"]');
  absolute.forEach(el => {
    el.style.outline = '2px solid red';
    console.log('Absolute element:', el);
  });

  // Add blue outlines to all fixed positioned elements
  const fixed = document.querySelectorAll('*[style*="position: fixed"], *[style*="position:fixed"]');
  fixed.forEach(el => {
    el.style.outline = '2px solid blue';
    console.log('Fixed element:', el);
  });

  // Check for elements with high z-index
  const allElements = document.querySelectorAll('*');
  allElements.forEach(el => {
    const style = window.getComputedStyle(el);
    const zIndex = parseInt(style.zIndex);
    if (zIndex > 10) {
      el.style.outline = '2px solid green';
      console.log('High z-index element:', el, 'z-index:', zIndex);
    }
  });

  // Check pointer-events
  document.addEventListener('click', (e) => {
    console.log('Clicked element:', e.target);
    e.target.style.outline = '3px solid purple';
  }, { once: true });
};
