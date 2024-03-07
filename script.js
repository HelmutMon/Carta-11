function openEnvelope() {
    var envelope = document.querySelector('.envelope');
    var letter = document.getElementById('letterContent');
    envelope.style.display = 'none'; // Oculta el sobre
    letter.classList.toggle('show');
}

