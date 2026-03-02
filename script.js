// Munculkan Modal Pilih Paket
function bukaModal() {
    document.getElementById('modalPaket').style.display = 'flex';
}

// Tutup Modal Pilih Paket
function tutupModal() {
    document.getElementById('modalPaket').style.display = 'none';
}

// Pindah ke Modal QRIS
function bayarQRIS() {
    tutupModal();
    document.getElementById('modalQRIS').style.display = 'flex';
}

// Tutup Semua Pop-up
function tutupSemua() {
    document.getElementById('modalQRIS').style.display = 'none';
    document.getElementById('modalPaket').style.display = 'none';
}

// Biar kalau klik bagian luar (gelap), pop-up tertutup
window.onclick = function(event) {
    if (event.target.className === 'modal') {
        tutupSemua();
    }
}