function findValue(obj, val, path = '') {
  // Pobierz wszystkie klucze...
  const objKeys = Object.keys(obj);

  // Przeiteruj po wszystkich kluczach
  for (let key of objKeys) {
    const value = obj[key];

    // Jeśli znajdziesz wartość, która jest obiektem - wejdź do środka i przeszukaj
    if (typeof value === 'function' || typeof value === 'object' && !!obj) {
      const valuePath = findValue(value, val, path + key + '.');

      // Znaleziono ścieżkę!
      if (valuePath) {
        return valuePath;
      }
    } else if (value == val) {
      return path + key;
    }
  }

  return '';
}

const myObj = {
  a: {
    x: 1,
    y: 3,
  },
  b: '2',
  c: '3',
  d: {
    e: 5,
    f: {
      g: 2,
    }
  }
};
console.log(findValue(myObj, 2));
