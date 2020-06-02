const mojaPaczka = {
  dokumenty: 10,
  monitory: 1,
  telefony: 3,
};

/**
 * Funkcja wywołana po obsłużeniu paczki - niezależnie, co się stało
 * @param paczka - zawartość paczki, jak obiekt zadany wyżej
 * @param status - status paczki, wartość znakowa
 */
function coJakDojdzieNaPoczcie(paczka, status) {
  console.log(
    new Date().toLocaleTimeString() +
    ': Paczka obsłużona, zawartość: ', paczka,
    'Status dostarczenia: ', status
  );
}

/**
 * Główna funkcja Poczty - nadaje paczkę
 * @param paczka - zawartość paczki, jak obiekt zadany wyżej
 * @param metoda - metoda wysyłania - przekaż tu swoją funkcję (np. wyslijTradycyjnie)
 */
function nadaj(paczka, metoda) {
  console.log(new Date().toLocaleTimeString() + ': Rejestruję paczkę');
  console.log(new Date().toLocaleTimeString() + ': Zapisuję paczkę w systemie');
  console.log(new Date().toLocaleTimeString() + ': Przekazuję paczkę do sortowni');
  console.log(new Date().toLocaleTimeString() + ': Kieruję paczkę do odpowiedniego centrum');

  // Tutaj dzieje się magia! Zauważ drugi argument - akcja, która zostanie podjęta jak przesyłka dojdzie do użytkownika
  // Zdefiniowana jest ona nieco wyżej (coJakDojdzieNaPoczcie)
  return metoda(paczka, coJakDojdzieNaPoczcie);
}

/**
 * Tradycyjna metoda wysyłki
 * Spróbuj zbudować i wywołać podobną funkcję, ale taką, która doręczy paczkę szybciej (z mniejszym timeoutem)
 * @param paczka - zawartość paczki, jak obiekt zadany wyżej
 * @param funkcjaObslugi - funkcja, która ma być wywołana w celu obsługi paczki. Przyjrzyj się metodzie wywołania w .47 linijce
 */
function wyslijTradycyjnie(paczka, funkcjaObslugi) {
  return setTimeout(function() {
    return funkcjaObslugi(paczka, 'DORĘCZONO');
  }, 5000); // Czas doręczenia - 5000 milisekund
}

// Poniżej umieść swój kod. Na start masz przykład wysyłki tradycyjnej
nadaj(mojaPaczka, wyslijTradycyjnie);
