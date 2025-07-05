import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';

/**
 * This component's role is to trigger the removal of the pre-loader
 * once the main React application has mounted.
 */
const Loader: React.FC = () => {
  useEffect(() => {
    const loaderRoot = document.getElementById('loader-root');
    if (loaderRoot) {
      // Synchronize with the main app's content fade-in animation.
      setTimeout(() => {
        loaderRoot.style.transition = 'opacity 300ms ease-out';
        loaderRoot.style.opacity = '0';
        // After the fade-out transition, remove the element from the DOM.
        setTimeout(() => {
          loaderRoot.remove();
        }, 300);
      }, 2800); // Increased time to allow for typing animation
    }
  }, []); // Run only once on mount.

  return null;
};


/**
 * The actual loader component that is rendered into a separate root
 * before the main app hydrates.
 */
const AppLoader: React.FC = () => {
  return (
    <div id="loader" className="loader-container">
       <div className="loader-text">
        Initializing Portfolio...
      </div>
    </div>
  )
}

/**
 * This script runs on module load to immediately display a loader,
 * providing instant feedback to the user before the full React app is ready.
 */
if (typeof window !== 'undefined') {
  const rootElement = document.getElementById('root');
  // Ensure the loader isn't created multiple times (e.g., during hot-reloading).
  if (rootElement && !document.getElementById('loader-root')) {
    const loaderRoot = document.createElement('div');
    loaderRoot.id = 'loader-root';
    // The loader needs to be a sibling of the main app root.
    rootElement.parentNode?.insertBefore(loaderRoot, rootElement);
    
    const tempRoot = ReactDOM.createRoot(loaderRoot);
    tempRoot.render(<AppLoader />);
  }
}


export default Loader;