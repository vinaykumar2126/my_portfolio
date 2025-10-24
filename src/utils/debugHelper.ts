/**
 * Utility to debug UI issues by highlighting elements with different positioning
 */
export const debugOverlays = (): void => {
  console.log('Running overlay debugger...');
  
  // Highlight absolutely positioned elements
  document.querySelectorAll('*').forEach(el => {
    const style = window.getComputedStyle(el);
    
    if (style.position === 'absolute') {
      el.setAttribute('data-debug', 'absolute');
      (el as HTMLElement).style.outline = '2px solid red';
    }
    
    if (style.position === 'fixed') {
      el.setAttribute('data-debug', 'fixed');
      (el as HTMLElement).style.outline = '2px solid blue';
    }
    
    const zIndex = parseInt(style.zIndex);
    if (!isNaN(zIndex) && zIndex > 10) {
      el.setAttribute('data-debug', 'high-z-index');
      (el as HTMLElement).style.outline = '2px solid green';
    }
  });
  
  // Add click highlighting
  document.addEventListener('click', (e) => {
    const target = e.target as HTMLElement;
    console.log('Clicked element:', target);
    target.style.outline = '3px solid purple';
  }, { once: true });
};

// Function to clean up debug overlays
export const cleanupDebugOverlays = (): void => {
  document.querySelectorAll('[data-debug]').forEach(el => {
    (el as HTMLElement).style.outline = '';
    el.removeAttribute('data-debug');
  });
};
