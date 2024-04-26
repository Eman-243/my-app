// scrollPosition.js

export function saveScrollPosition() {
    window.addEventListener('scroll', () => {
      sessionStorage.setItem('scrollPosition', window.scrollY || document.documentElement.scrollTop);
    });
  }
  
  export function loadScrollPosition() {
    window.addEventListener('load', () => {
      const scrollPosition = sessionStorage.getItem('scrollPosition');
  
      if (scrollPosition) {
        window.scrollTo(0, parseInt(scrollPosition));
      }
    });
  }
  