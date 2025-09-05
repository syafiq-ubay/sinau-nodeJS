// Cara yang BENAR:
setTimeout(() => {
    console.info("Hello World Globals")
}, 1000); // Langsung tulis angka delay, tanpa "timeout:"

// Alternatif lain yang juga benar:
setTimeout(function() {
    console.info("Hello World Globals")
}, 2000);

// Atau dengan menyimpan delay dalam variabel:
const delay = 3000;
setTimeout(() => {
    console.info("Hello World Globals")
}, delay);