document.addEventListener("DOMContentLoaded", () => {
    let p = document.querySelector('p');
    p.textContent = 'This is really cool!'
  });
  console.log(
    "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
  );