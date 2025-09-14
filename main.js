// main.js

// 1. Animasyon fonksiyonu
function animateValue(id, start, end, duration) {
  const obj = document.getElementById(id);
  const range = end - start;
  const stepTime = Math.abs(Math.floor(duration / range));
  let current = start;
  const timer = setInterval(() => {
    current++;
    obj.textContent = current + "+";
    if (current >= end) {
      clearInterval(timer);
      obj.textContent = end + "+";
    }
  }, stepTime);
}

// 2. Menü, modal ve yönlendirme fonksiyonu
function setupUIInteractions() {
  // Arama modalı
  document.querySelectorAll('button span.material-icons').forEach(icon => {
    if (icon.textContent === 'search') {
      icon.parentElement.addEventListener('click', () => {
        document.getElementById('searchModal').classList.remove('hidden');
        document.getElementById('searchInput').focus();
      });
    }
  });

  document.getElementById('searchClose').onclick = () => {
    document.getElementById('searchModal').classList.add('hidden');
    document.getElementById('searchInput').value = '';
  };

  document.getElementById('searchGo').onclick = () => {
    const query = document.getElementById('searchInput').value.trim();
    if (!query) return;
    const lcQuery = query.toLowerCase();
    let url = '';

    if (lcQuery.includes('iş') || lcQuery.includes('fırsat')) url = 'isfirsati.html';
    else if (lcQuery.includes('ürün')) url = 'urunler.html';
    else if (lcQuery.includes('kayıt')) url = 'kayitsayfasi.html';
    else if (lcQuery.includes('hakkımızda') || lcQuery.includes('şirket')) url = 'sirket.html';
    else if (lcQuery.includes('ana') || lcQuery.includes('home')) url = 'index.html';
    else {
      alert('Aradığınız sayfa bulunamadı.');
    }

    if (url) {
      window.location.href = url;
      document.getElementById('searchModal').classList.add('hidden');
      document.getElementById('searchInput').value = '';
    }
  };

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      document.getElementById('searchModal').classList.add('hidden');
      document.getElementById('searchInput').value = '';
      document.getElementById('sideMenu').classList.add('-translate-x-full');
      document.getElementById('menuBackdrop').classList.add('hidden');
    }
  });

  // Yan Menü işlemleri
  document.querySelectorAll('button span.material-icons').forEach(icon => {
    if (icon.textContent === 'menu') {
      icon.parentElement.addEventListener('click', () => {
        document.getElementById('sideMenu').classList.remove('-translate-x-full');
        document.getElementById('menuBackdrop').classList.remove('hidden');
      });
    }
  });

  document.getElementById('menuClose').onclick = closeSideMenu;
  document.getElementById('menuBackdrop').onclick = closeSideMenu;

  function closeSideMenu() {
    document.getElementById('sideMenu').classList.add('-translate-x-full');
    document.getElementById('menuBackdrop').classList.add('hidden');
  }

  // İş Fırsatı ve Ürün animasyon butonları
  function animateAndRedirect(btnId, url) {
    const btn = document.getElementById(btnId);
    btn.classList.add('scale-110', 'bg-green-100');
    setTimeout(() => {
      btn.classList.remove('scale-110', 'bg-green-100');
      window.location.href = url;
    }, 250);
  }

  document.getElementById('isFirsatiBtn').addEventListener('click', e => {
    e.preventDefault();
    animateAndRedirect('isFirsatiBtn', 'isfirsati.html');
  });

  document.getElementById('urunlerBtn').addEventListener('click', e => {
    e.preventDefault();
    animateAndRedirect('urunlerBtn', 'urunler.html');
  });
}

// 3. Ana yükleme işlemi
window.addEventListener('DOMContentLoaded', () => {
  // İstatistik animasyonu
  const duration = 1500;
  animateValue('distrib', 0, 1000, duration);
  animateValue('sehir', 0, 81, duration);
  animateValue('urun', 0, 24, duration);
  animateValue('etkinlik', 0, 94, duration);

  // UI Etkileşimlerini kur
  setupUIInteractions();
});
