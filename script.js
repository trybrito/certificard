document.onscroll = () => {
  window.scrollTo(0, 0);
};

setTimeout(() => {
  document.onscroll = null;
}, 2500);
