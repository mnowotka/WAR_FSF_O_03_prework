window.onload = () => {
  // Podpinamy do przycisku akcję
  document.getElementById('submitRequest').onclick = () => {
    // Handler do obsługi sukcesów
    function reqListener(evt) {
      console.log('Udało się!', evt);
      console.log('Odpowiedź: ', this.responseText);
    }

    // Handler do obsługi błędów
    function errorListener(evt) {
      console.log('Wystąpił błąd!', evt);
      console.log(this);
    }

    // Request do naszego lokalnego serwera, ale NA INNYM PORCIE!
    const request = new XMLHttpRequest();
    request.addEventListener('load', reqListener);
    request.addEventListener('error', errorListener);
    request.open('GET', 'http://127.0.0.1:8082', true);
    request.send();
  }
};
