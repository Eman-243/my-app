// scrollPosition.js

export function saveScrollPosition() {
  window.addEventListener('beforeunload', () => {
    sessionStorage.setItem('scrollPosition', window.scrollY || document.documentElement.scrollTop);
  });
}

export function loadScrollPosition() {
  window.addEventListener('popstate', () => {
    const scrollPosition = sessionStorage.getItem('scrollPosition');

    if (scrollPosition) {
      window.scrollTo(0, parseInt(scrollPosition));
    }
  });
}
  // Path: src/scripts/scrollPosition.js