const showLetterBtn = document.getElementById("showLetterBtn");
const letter = document.getElementById("letter");
const letterContent = document.getElementById("letterContent");

showLetterBtn.addEventListener("click", function () {
  letter.style.display = "block";
  animateTyping(
    "Hai sayang, Di hari Valentine yang indah ini, aku ingin mengungkapkan betapa berartinya kamu bagiku. Kamu adalah cahaya dalam kegelapan, bintang di malam hari yang gelap, dan senyuman yang selalu menghangatkan hatiku. Setiap saatku bersamamu adalah sebuah petualangan yang tak terlupakan. Mulai dari tawa riang gembira hingga berantem dengan kamu hanya karna hal sepele, setiap momen bersamamu itu adalah kenangan yang akan kusimpan selamanya dalam hatiku. Terima kasih telah menjadi bagian dalam hidupku sayang. Terima kasih telah memberikan waktu, kasih sayang, cinta dan dukungan kamu tanpa henti. Hari ini, aku ingin mengatakan betapa bersyukurnya aku dapat memiliki kamu di sampingku, kuharap hubungan kita akan berlanjut selamanya, hehehe Aamiin. Dari orang biasa dengan kebiasaan diam 1000 bahasanya, [Arya Viharta]"
  );
});

function animateTyping(text) {
  letterContent.innerHTML = "";
  const textLength = text.length;
  let i = 0;
  const typingInterval = setInterval(() => {
    letterContent.innerHTML += text.charAt(i);
    i++;
    if (i > textLength) {
      clearInterval(typingInterval);
    }
  }, 100);
}
