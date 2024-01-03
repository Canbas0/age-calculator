const dogumTarihiInput = document.querySelector('#date');
dogumTarihiInput.max = new Date().toISOString().split('T')[0];

const calculateBtn = document.querySelector('.calculate-btn');
calculateBtn.addEventListener('click', hesaplaYas);

function hesaplaYas() {
    // Doğum tarihini inputundaki değeri al
    let dogumTarihi = dogumTarihiInput.value;

    // Doğum tarihini kontrol et
    if (dogumTarihi === "") {
        alert("Lütfen doğum tarihinizi girin.");
        return;
    }

    // Şu anki tarihi al
    let suAnkiTarih = new Date();

    // Doğum tarihini al
    let dogum = new Date(dogumTarihi);

    // Yıl farkını hesapla
    let yilFarki = suAnkiTarih.getFullYear() - dogum.getFullYear();

    // Ay farkını hesapla
    let ayFarki = suAnkiTarih.getMonth() - dogum.getMonth();

    // Gün farkını hesapla
    let gunFarki = suAnkiTarih.getDate() - dogum.getDate();

    if (gunFarki < 0) {
        ayFarki--;
        gunFarki += 31;
    }

    if (ayFarki < 0) {
        yilFarki--;
        ayFarki += 12;
    }

    const explanationText = document.querySelector('.explanation');
    explanationText.innerHTML = ` You are <span> ${yilFarki} </span> years, <span> ${ayFarki} </span> months and <span> ${gunFarki} </span> days old`
}
