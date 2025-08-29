const button = document.getElementById('checkButton');
const input = document.getElementById('rentInput');
button.addEventListener('click', () => {
    if (input.value.trim() === "") {
        alert("Merci de remplir le loyer !");
    } else {
        alert(`Loyer : ${input.value}`);
    }
});
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
      .then((registration) => {
        console.log('Service Worker enregistré avec succès :', registration.scope);
      })
      .catch((error) => {
        console.log('Échec de l\'enregistrement du Service Worker :', error);
      });
  });
}