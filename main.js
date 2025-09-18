// main.js

function animateValue(id, start, end, duration) {
  const obj = document.getElementById(id);
  if (!obj) return;
  const range = end - start;
  if (range === 0 || duration <= 0) {
    obj.textContent = end + "+";
    return;
  }
  const stepTime = Math.max(1, Math.floor(Math.abs(duration) / Math.abs(range)));
  const step = range > 0 ? 1 : -1;
  let current = start;
  const timer = setInterval(() => {
    current += step;
    obj.textContent = current + "+";
    const reachedEnd = step > 0 ? current >= end : current <= end;
    if (reachedEnd) {
      clearInterval(timer);
      obj.textContent = end + "+";
    }
  }, stepTime);
}

function setupUIInteractions() {
  const searchModal = document.getElementById('searchModal');
  const searchInput = document.getElementById('searchInput');
  const searchClose = document.getElementById('searchClose');
  const searchGo = document.getElementById('searchGo');
  const sideMenu = document.getElementById('sideMenu');
  const menuBackdrop = document.getElementById('menuBackdrop');
  const menuClose = document.getElementById('menuClose');
  const isFirsatiBtn = document.getElementById('isFirsatiBtn');
  const urunlerBtn = document.getElementById('urunlerBtn');

  const hasSearch = searchModal && searchInput && searchClose && searchGo;
  const hasMenu = sideMenu && menuBackdrop && menuClose;

  // Arama modalı
  

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

  function animateAndRedirect(btnId, url) {
    const btn = document.getElementById(btnId);
    if (!btn) return;
    btn.classList.add('scale-110', 'bg-green-100');
    setTimeout(() => {
      btn.classList.remove('scale-110', 'bg-green-100');
      window.location.href = url;
    }, 250);
  }

  const isBtn = document.getElementById('isFirsatiBtn');
  const urunBtn = document.getElementById('urunlerBtn');
  if (isBtn) {
    isBtn.addEventListener('click', e => {
      e.preventDefault();
      animateAndRedirect('isFirsatiBtn', 'isfirsati.html');
    });
  }

  if (urunBtn) {
    urunBtn.addEventListener('click', e => {
      e.preventDefault();
      animateAndRedirect('urunlerBtn', 'urunler.html');
    });
  }
}

// 🔥 Ürün bilgileri
const productData = {
  "GANO SCHOKOLADE": {
    desc: "Ganoderma Lucidum bitkisini, Gano Excel olarak kontrollü koşullarda ve GMP standartlarında kendi Ganoderma Lucidum özünden, kakaodan, sütsüz kremadan ve yağsız sütten formüle edilmiş, her yaştaki insan için içimi hoş bir içecektir.",
    img: "https://www.ganoexcel.com.tr/assets/images/urunler/beverages-products/GANOSCHOKOLADE.jpg",
    tip: "Kakaolu",
    kod: "SC-2",
    adet: "20 poşet",
    miktar: "30 g. ( 1 poşet)"
  },
  "GANOCORDY 60": {
    desc: "Ganocordy, Ganoderma Lucidum ve Kordiseps mantarının kombinasyonu ile elde edilmiştir. Ganoderma Lucidum’un bitkisel tarihçesi, Shen Nong’un Bitkisel Klasiği olan en eski Çin Eczacı El Kitabı’nda anlatılmıştır. Geleneksel Çin tıbbında zindelik ve uzun yaşamı destekleyici olarak kullanılmıştır.Kordiseps mantarı, çoğunlukla Dong Chong Xia Cao veya Çin Tırtıl Mantarı, Yaz Aynası olarak bilinmektedir. Ayrıca Çin’de ve Tibet’te Aweto, yine Tibet’te Yarchagumba olarak bilinmektedir. İngilizce’de de “Caterpillar Fungus” veya “Bitkisel Tırtıl”olarak bilinmektedir. Kordiseps mantarının aktif bileşenleri arasında kordiseptik asit, kordisepin, nükleozid, polisakkarit, protein, sterol ve benzerleri mevcuttur..",
    img: "https://www.ganoexcel.com.tr/assets/images/urunler/supplements-products/GANOCORDY.jpg",
    tip: "Takviye Edici Gıda",
    kod: "GCDY",
    adet: "60 Kapsül",
    miktar: "525 mg (1 adet kapsül)"
  },
  "GANODERMA 90": {
    desc:"Ganoderma Lucidum, yüzyıllardır özellikle uzakdoğu ülkelerinde yararlı bir bitki olarak bilinmektedir. Biz Gano Excel olarak Ganoderma'yı GMP standartlarında üreterek, sizlerin bir besin tamamlayıcısı olarak kullanımına sunmaktayız.",
    img:"https://www.ganoexcel.com.tr/assets/images/urunler/supplements-products/686191cd41fc3.jpg",
    tip: "Takviye Edici Gıda",
    kod: "GD",
    adet: "90 Kapsül",
    miktar: "350 mg (1 adet kapsül)"
  },
  "EXCELLIUM 90": {
    desc:"Ganoderma Lucidum bitkisini, Gano Excel olarak kontrollü koşullarda ve GMP standartlarında kendi çiftliklerimizde yetiştirip, her 90 günde bir hasat etmekteyiz.Fakat EXCELLIUM ürünümüzü 90 günlük hasat süresi dolmadan 20. gününde topladığımız sporların yoğun olduğu dönemde toplanan, Ganoderma'lardan üretmekteyiz. Çünkü, bu dönemde toplanan Ganoderma'ların sporlarında yoğun miktarda organik germanyum bulunmaktadır. Bu özel ürünle tanışınca çok seveceksiniz.",    
    img: "https://www.ganoexcel.com.tr/assets/images/urunler/supplements-products/GANOCORDY.jpg",
    tip: "Takviye Edici Gıda",
    kod: "E8",
    adet: "90 Kapsül",
    miktar: "500 mg (1 adet kapsül)"
  },
  "REISHI GOLD 60": {
    desc: "Reishi Gold, Ganoderma Lucidum'un sporokarbı kullanılarak üretilir, %100 Ganoderma Lucidum özütünün alınmasından elde edilir.Ganoderma Lucidum'un aktif bileşenleri arasında, bunlarla sınırlı olmamak üzere polisakaritler, triterpenler/triterpenoidler, organik germanyum, adenozin, nükleozitler, steroidler, steroller, yağ asitleri ve çok çeşitli proteinler, enzimler, vitaminler ve esas mineraller bulunur.",
    img: "https://www.ganoexcel.com.tr/assets/images/urunler/supplements-products/REISHIGOLD.jpg",
    tip: "Takviye Edici Gıda",
    kod: "RGOLD6",
    adet: "60 Kapsül",
    miktar: "325 mg (1 adet kapsül)"
  },
  "EXCELLIUM GOLD 60": {
    desc:"Excellium Gold, Ganoderma Lucidum’un miselyumu kullanılarak üretilir.Miselyum, olgunlaşmanın erken safhalarında hasat edilen mantarın dallanan iplik gibi baziler kısmıdır. Ganoderma Lucidum'un miselyumu, sporokarbı ile aynı etken maddeleri içerir ancak farklı yoğunluklardadır. Örneğin, triterpen daha çok olgunlaşmış sporokarbda bulunurken, enzimler daha çok miselyumda bulunur.",
    img: "https://www.ganoexcel.com.tr/assets/images/urunler/supplements-products/EXCELLIUMGOLD.jpg",
    tip: "Takviye Edici Gıda",
    kod: "EGOLD60",
    adet: "60 Kapsül",
    miktar: "545 mg (1 adet kapsül)"
  },
  "OLEAF GANO ROOIBOS DRINK": {
    desc:"Ganotea SOD (Super Oksit Dismutaz), formülü ile Güney Afrika kökenli Rooibos Çayından (Asphalathus Linealist) ve Ganoderma Lucidum özünden elde edilen bir içecektir. Ganoderma Lucidum Rooibos Çayı, aynı zamanda SOD Çayı olarak da bilinir.Tadın özgür bir harmanı...",
    img: "https://www.ganoexcel.com.tr/assets/images/urunler/beverages-products/GANOROOIBOS.jpg",
    tip: "Çay",
    kod: "OGRD",
    adet: "20 poşet",
    miktar: "2 gr(1 poşet)"
  },
  "G'BEAUTE SHOWER SCRUB": {
    desc:"G’Beaute Shower Scrub, Ganoderma Lucidum özü ve kayısı çekirdeği tozu ile zenginleştirilmiş hassas kremsi bir duş peelingidir. Cildin Koruyucu yağ tabakasına zarar vermeden cildi temizlemek için formüle edilmiştir.Birikmiş ölü hücreleri uzaklaştırır ve cildi arındırırken nazikçe temizler. Uzun süreli nemlendirme ile yumuşak, esnek, pürüzsüz ve tonu eşitlenmiş bir cilt sağlar. Banyo veya duşunuzu vücut peelingimizin hoşnutluğu ile zenginleştirin.G’Beaute Duş Peelingi tüm cilt tipleri için uygundur.",
    img: "https://www.ganoexcel.com.tr/assets/images/urunler/personal-care-products/SHOWERSCRUB.jpg",
    tip: "Kişisel bakım ürünleri",
    kod: "GBSS",
    adet: "1 adet",
    miktar: "300 ml"
  },
  "G'BEAUTE FACE MIST": {
    desc:"G’Beaute Face Mist, cilde anında nemlendirme sağlayarak, daha genç ve sağlıklı bir cildi destekleyen hafif ve ferahlatıcı bir yüz spreyidir.Cildi Temizlendikten sonra tonik görevi görür. Serum ve nemlendiricinizden önce uygulayın. Kırışıklıkların ve ince çizgilerin görünürlüğünü azaltmaya, cildi nemlendirmeye ve ferahlatmaya da yardımcı olur.Galactomyces Ferment Filtratı: Mayadan elde edilir ve yaşlılık belirtilerinin görünümünü azaltmaya yardımcı olduğu bilinir. Ek olarak, hassas veya tahriş olmuş cildi ferahlatmaya yardımcı olur.Hamamelis Virginiana (Cadı Fındığı) Yaprak Suyu: Cildi ferahlatıcı ve tonik özellikler içerir.Ganoderma Lucidum (mantar) Özü: Antioksidan özelliği ile birlikte, cildin destekleyici unsurlarını geliştirir.",
    img: "https://www.ganoexcel.com.tr/assets/images/urunler/personal-care-products/FACEMIST.jpg",
    tip: "Kişisel bakım ürünleri",
    kod: "GBFM",
    adet: "1 adet",
    miktar: "50 ml"
  },
  "GANO CAFE 3 IN 1": {
    desc:"Gano Cafe 3 in 1, dünyada kahve ve Ganoderma Lucidum kombinasyonu ile tüketiciye sunulan ilk içecektir. Gano Cafe 3 in 1, Ganoderma Lucidum özünden yapılan, besin değeri olan, bünyesinde kaliteli kahveyi, sütsüz kremayı ve şekeri barındıran zengin bir üründür.",
    img: "https://www.ganoexcel.com.tr/assets/images/urunler/beverages-products/GANOCAFE3IN1.jpg",
    tip: "Kahve",
    kod: "C",
    adet: "20 Poşet",
    miktar: "21 g (1 poşet)"
  },
  "GANOCAFE MOCHA": {
    desc: "Ganocafe Mocha, kahve tozu, kakao tozu ve Ganoderma Lucidum özünün bir kombinasyonudur. Size otantik yumuşak ve kremalı kahve lezzeti sunmak üzere harmanlanmıştır. Menşei olarak yerel nitelik taşısa da, lezzeti uluslararası ölçeğe ulaşmıştır.",
    img: "https://www.ganoexcel.com.tr/assets/images/urunler/beverages-products/GANOCAFEMOCHA.jpg",
    tip: "Kahve",
    kod: "CM",
    adet: "15 poşet",
    miktar: "28 g (1 poşet)"
  },
  "GANOCAFE CLASSIC": {
    desc: "Ganocafe Classic, Ganoderma Lucidum özü ile kahveden harmanlanan hazır bir siyah kahvedir. Ganocafe Classic, aroma ve tat olarak klasik özellikteki bir kahve ürünüdür.Klasik tat için doğru harman...",
    img: "https://www.ganoexcel.com.tr/assets/images/urunler/beverages-products/GANOCAFECLASSIC.jpg",
    tip: "Kahve",
    kod: "CC",
    adet: "30 poşet",
    miktar: "3g(1 poşet)"
  },
  "GANOCAFE SHOKORICO": {
    desc:"Ganocafe Shokorico, vanilya, malt özü ve fazla şeker içermeyen zengin tada sahip bir kakao içeceğidir. Size zengin ve hoş bir çikolata aroması verir. Özellikle bu kakao içeceği doğal ve ağız dolusu çikolata tadı arayanlar için formüle edilmiştir. Ganocafe Shokorico içeceğimiz Ganoderma Lucidum özü ile zenginleştirilmiştir ve sıcak, soğuk veya ılık olarak servis edilmesi mümkündür.",
    img: "https://www.ganoexcel.com.tr/assets/images/urunler/beverages-products/SHOKORICO.jpg",
    tip: "Kahve",
    kod: "CRICO",
    adet: "15 poşet",
    miktar: "23 g(1 poşet)"
  },
  "GANOCAFE MOCHARICO": {
    desc:"Ganocafe Mocharico, bir fincan mocha aroması ile kahvenin tadını çıkarmak isteyen ancak genellikle şekerden hoşlanmayanlar için üretilmiştir. Bu mükemmel kakao ve kahve ikilisi, size kremamsı, köpüklü ve hafif çikolatamsı, zengin tadı olan bir mocha ve Ganoderma Lucidumla harmanlanmış bir ziyafet sunar.",
    img: "https://www.ganoexcel.com.tr/assets/images/urunler/beverages-products/MOCHARICO.jpg",
    tip: "Kahve",
    kod: "MRICO",
    adet: "15 poşet",
    miktar: "18 g (1 poşet)"
  },
  "GANOCAFE LATTERICO": {
    desc:"Ganoderma Lucidum, yüzyıllardır özellikle uzakdoğu ülkelerinde yararlı bir bitki olarak bilinmektedir. Biz Gano Excel olarak Ganoderma'yı GMP standartlarında üreterek, sizlerin bir besin tamamlayıcısı olarak kullanımına sunmaktayız.",
    img: "https://www.ganoexcel.com.tr/assets/images/urunler/beverages-products/LATTERICO.jpg",
    tip: "Kahve",
    kod: "LRICO",
    adet: "15 Poşet",
    miktar: "15 g (1 poşet)"
  },
  "G'BEAUTE HAIR SHAMPOO": {
    desc:"Ganoderma Lucidum, yüzyıllardır özellikle uzakdoğu ülkelerinde yararlı bir bitki olarak bilinmektedir. Biz Gano Excel olarak Ganoderma'yı GMP standartlarında üreterek, sizlerin bir besin tamamlayıcısı olarak kullanımına sunmaktayız.",
    img: "https://www.ganoexcel.com.tr/assets/images/urunler/personal-care-products/HAIRSHAMPOO.jpg",
    tip: "Kişisel Bakım Ürünleri",
    kod: "GBSC",
    adet: "1 adet",
    miktar: "300 ml"
  },
  "GANO SUPRENO": {
    desc:"Supreno, güzel aromalı kremalı kahveden hoşlanan kişiler için özel olarak harmanlanmıştır. Ginseng ve Ganoderma Lucidum özü kombinasyonu, kahvenin aromasını muhafaza ederken farklı bir lezzet oluşturmuştur. Supreno, her kullanım türü için mükemmel bir içecektir.",
    img: "https://www.ganoexcel.com.tr/assets/images/urunler/beverages-products/GANOSUPRENO.jpg",
    tip: "kahve",
    kod: "GSP",
    adet: "20 poşet",
    miktar: "21 g (1 poşet)"
  },"LUVOCO CAPSULE CLASSICO": {
    desc: "Özellikle kahvelerinde sert ve güçlü tat sevenler için üretildi. Yoğun kavrulmuş tadıyla öne çıkıyor.",
    img: "https://cdn03.ciceksepeti.com/cicek/kcm19439276-1/L/luvoco-capsules-classico-kcm19439276-1-69c4cb5a6dec44a1bfdd459028323691.jpg",
    tip: "kahve"
    
  },"LUVOCO CAPSULE AMOROSO": {
    desc:"Hafif kavrulmuş ve yumuşak kahve sevenler için.",
    img: "https://d3hmqqgx76d63z.cloudfront.net/product_thumb/2915721440.jpg",
    tip: "Kahve"
    
  },"LUVOCO CAPSULE RAFFINATO": {
    desc:"Kahvesini orta sertlikte sevenler için.",
    img: "https://d3hmqqgx76d63z.cloudfront.net/product_thumb/2805426817.jpg",
    tip: "Kahve"
    
  },"GANO SOAP": {
    desc:"Ganoderma Lucidum ve keçi sütü ile zenginleştirilmiştir. Cildiniz farkı hissedecek. Bu yumuşak ve değerli sabun sayesinde, yüzünüzde ve vücudunuzda harika bir temizlik ve pürüzsüz bir yumuşaklık hissedeceksiniz.",
    img: "https://www.ganoexcel.com.tr/assets/images/urunler/personal-care-products/GANOSOAP.jpg",
    tip: "Kişisel bakım",
    kod: "S",
    adet: "2 adet",
    miktar: "100 g.(1 sabun)"
  },"GANO FRESH": {
    desc:"Taze nane ve Ganoderma Lucidum özünden oluşan bir diş macunudur. Gano Fresh, diş ve dişetlerini temiz ve ferah tutmak için özel olarak formüle edilmiştir. Ferahlatıcı aroması ile ağzınızın her gün temiz olmasını ve nane kokulu hissetmenizi sağlar.",
    img: "https://www.ganoexcel.com.tr/assets/images/urunler/personal-care-products/GANOFRESH.jpg",
    tip: "Kişisel bakım",
    kod: "GF",
    adet: "1 adet",
    miktar: "150 g."
  },"GANO TRANSPARENT SOAP": {
    desc: "Gano Şeffaf Sabun, Ganoderma Lucidum özü, aloe vera ve papaya bitkisi ihtiva eder. Cildinizi nemlendirir, tazeliğini korumasına yardımcı olur.",
    img: "https://www.ganoexcel.com.tr/assets/images/urunler/personal-care-products/689f0e734792b.jpg",
    tip: "Kişisel bakım",
    kod: "GTS",
    adet: "1 adet",
    miktar: "100 g"
  },"G'BEAUTE HAIR CONDITIONER": {
    desc: "G’Beaute Hair Conditioner, Güzel dalgalı bir saç modeli, iyi bir saç kremi ile başlar. G'Beaute Saç Kremi, saçlarınızı onarmak ve canlandırmak için Ganoderma Lucidum özü ile formüle edilmiştir. G’Beaute Saç Rutininden en iyi sonucu almak istiyorsanız eğer, G’Beaute Saç Şampuanı ile birlikte G’Beaute Saç Kremini de kullanmalısınız. Böylelikle saç rutininiz eksik kalmaz. Tek yapmanız gereken şampuandan sonra saçlarınızı iyice durulamak, ardından G’Beaute Saç Kremimizi kullanarak saç tellerinizi pürüzsüzleştirip düzleştirin hayalini kurduğunuz pürüzsüz, elastik ve hacimli Saçlara kavuşun.Saçlı derinin pH seviyelerini dengelemenin yanı sıra saç tellerinin nemini hapsetmeye ve saçlarınızın daha ipeksi olmasına yardımcı olur. Saçınızdaki tüm fazla suyu alın ve ardından saçlar hala nemliyken G’Beaute Saç Kremini doğrudan saç boy ve uçlarınıza uygulayın ve 5-10 dakika bekletin ve iyice durulayın.",
    img: "https://www.ganoexcel.com.tr/assets/images/urunler/personal-care-products/HAIRCONDITIONER.jpg",
    tip: "Kişisel bakım",
    kod: "GBHC",
    adet: "1 adet",
    miktar: "300 ml"
  }

  // Diğer ürünler burada çoğaltılabilir...
};

// ✅ TEK ve SAĞLAM DOMContentLoaded
window.addEventListener('DOMContentLoaded', () => {
  animateValue('distrib', 0, 1000, 1500);
  animateValue('sehir', 0, 81, 1500);
  animateValue('urun', 0, 24, 1500);
  animateValue('etkinlik', 0, 94, 1500);

  setupUIInteractions();

  // Ürün kartları dinle
  document.querySelectorAll(".productCard").forEach(card => {
    card.addEventListener("click", e => {
      e.preventDefault();
      const title = card.querySelector("h3").innerText.trim();
      const info = productData[title];

      if (!info) {
        alert("Bu ürün için bilgi tanımlanmamış.");
        return;
      }

      document.getElementById("modalTitle").innerText = title;
      document.getElementById("modalImg").src = info.img;
      document.getElementById("modalDesc").innerText = info.desc;
      document.getElementById("modalTip").innerText = info.tip || "-";
    document.getElementById("modalKod").innerText = info.kod || "-";
    document.getElementById("modalAdet").innerText = info.adet || "-";
    document.getElementById("modalMiktar").innerText = info.miktar || "-";
      document.getElementById("productModal").classList.remove("hidden");
    });
  });

  document.getElementById("closeModal").addEventListener("click", () => {
    document.getElementById("productModal").classList.add("hidden");
  });

  document.addEventListener("keydown", e => {
    if (e.key === "Escape") {
      document.getElementById("productModal").classList.add("hidden");
    }
  });
});
