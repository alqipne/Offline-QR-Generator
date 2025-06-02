const generateBtn = document.getElementById('generateBtn');
const downloadBtn = document.getElementById('downloadBtn');
const qrcodeContainer = document.getElementById('qrcode');
const inputText = document.getElementById('inputText');
let qr;

generateBtn.addEventListener('click', () => {
  const text = inputText.value.trim();
  if (!text) {
    alert('Please enter some text to generate a QR code.');
    return;
  }

  qrcodeContainer.innerHTML = ''; // Clear previous QR code

  qr = new QRCode(qrcodeContainer, {
    text: text,
    width: 256,
    height: 256,
    colorDark: "#000000",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H
  });

  downloadBtn.style.display = 'inline-block';
});

downloadBtn.addEventListener('click', () => {
  const img = qrcodeContainer.querySelector('img');
  if (img) {
    const link = document.createElement('a');
    link.href = img.src;
    link.download = 'qrcode.png';
    link.click();
  } else {
    alert('Please generate a QR code first.');
  }
});
