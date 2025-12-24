console.log("Sistemler hazır. Roket ateşlemeye uygun.");

// Rotalar sayfasındaki Fiyat Gör butonu için
function fiyatHesapla(gezegen) {
    let fiyat;
    
    if (gezegen === 'Ay') {
        fiyat = "50.000 $";
    } else if (gezegen === 'Mars') {
        fiyat = "150.000 $";
    } else {
        fiyat = "500.000 $ (Sigorta Dahil)";
    }

    alert(gezegen + " turu için tahmini fiyat: " + fiyat + "\nErken rezervasyonda %10 indirim!");
}

// İletişim formu için
const form = document.getElementById('spaceForm');

if (form) {
    form.addEventListener('submit', function(e) {
        e.preventDefault(); // Sayfa yenilenmesin
        
        // Basit bir yükleniyor efekti verelim
        const btn = form.querySelector('button');
        const orjinalYazi = btn.innerText;
        
        btn.innerText = "İşleniyor...";
        btn.style.backgroundColor = "green";
        btn.style.color = "white";

        setTimeout(() => {
            alert("Tebrikler! Ön başvurunuz alındı. NASA yetkilileri sizinle iletişime geçecek.");
            form.reset();
            btn.innerText = orjinalYazi;
            btn.style.backgroundColor = "white";
            btn.style.color = "#0b0d17";
        }, 1500);
    });
}
