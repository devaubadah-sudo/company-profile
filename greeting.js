// Greeting berdasarkan waktu (sesuai spesifikasi):
// Pagi (05.00–11.59): “Selamat Pagi”
// Siang (12.00–14.59): “Selamat Siang”
// Sore (15.00–17.59): “Selamat Sore”
// Malam (18.00–04.59): “Selamat Malam”
(function () {

  function getGreeting(date) {
    const h = date.getHours();
    if (h >= 5 && h <= 11) return 'Selamat Pagi';
    if (h >= 12 && h <= 14) return 'Selamat Siang';
    if (h >= 15 && h <= 17) return 'Selamat Sore';
    return 'Selamat Malam';
  }

  function renderGreeting() {
    const greetingEl = document.getElementById('greeting');
    if (greetingEl) {
      const greeting = getGreeting(new Date());
      greetingEl.textContent = greeting + ' — Selamat datang di PT YellowRoll!';
      setTimeout(() => greetingEl.classList.add('show'), 200);
    }

  }

  document.addEventListener('DOMContentLoaded', renderGreeting);

})();