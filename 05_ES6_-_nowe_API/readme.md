![Coders-Lab-1920px-no-background](https://user-images.githubusercontent.com/152855/73064373-5ed69780-3ea1-11ea-8a71-3d370a5e7dd8.png)

# Kilka ważnych informacji

Przed przystąpieniem do rozwiązywania zadań przeczytaj poniższe wskazówki

## Jak zacząć?

1. Stwórz [*fork*](https://guides.github.com/activities/forking/) repozytorium z zadaniami.
2. Sklonuj repozytorium na swój komputer. Użyj do tego komendy `git clone adres_repozytorium`
Adres repozytorium możesz znaleźć na stronie repozytorium po naciśnięciu w guzik "Clone or download".
3. Rozwiąż zadania i skomituj zmiany do swojego repozytorium. Użyj do tego komend `git add nazwa_pliku`.
Jeżeli chcesz dodać wszystkie zmienione pliki użyj `git add .` 
Pamiętaj że kropka na końcu jest ważna!
Następnie skommituj zmiany komendą `git commit -m "nazwa_commita"`
4. Wypchnij zmiany do swojego repozytorium na GitHubie.  Użyj do tego komendy `git push origin master`
5. Stwórz [*pull request*](https://help.github.com/articles/creating-a-pull-request) do oryginalnego repozytorium, gdy skończysz wszystkie zadania.

Poszczególne zadania rozwiązuj w odpowiednich plikach.

# Poniżej znajdziesz wytyczne do zadań

# Array - nowe metody API

Standard ES6 wprowadził kilka nowych metod, pozwalających na tworzenie tablic - pozwalają one na stworzenie tablicy 
na różne sposoby - poprzez konwersję innych obiektów czy wypełnienie pustej tablicy określonymi znakami.

**Pamiętaj o uruchomieniu `npm install` przed zadaniami!**

## ASCII art

ASCII art to sztuka tworzenia obrazków ze znaków. Szczególną jej odmianą jest tzw. one-line art - proste obrazki, 
wygenerowane w jednej linijce tekstu.

*ASCII (American Standard Code for Information Interchange) to jeden ze standardów kodowania znaków w zmiennych znakowych. Drugim, obecnie dużo popularniejszym standardem, 
który upowszechnił się m.in. w zastosowaniach webowych jest UTF*

Jednym z przykładów takiego ASCII arta może być np. ten miecz:

```text
{}oo((X))ΞΞΞΞΞΞΞΞΞΞΞΞΞ>
```

Twoim zadaniem będzie stworzenie takiego miecza przy użyciu funkcji `sword(length)` w pliku `sword.js` (uruchomisz go komendą `npm run sword`).
W pliku tym znajduje się już zmienna String, zawierająca klingę i czubek miecza, brakuje jednak ostrza.

Używając znanych operacji postaraj się tak przepisać tą funkcję, by tworzyła ona miecze o zadanej (`length`) długości:

1. Rozłóż zmienną `sword` na poszczególne elementy - przekonwertuj zmienną znakową do tablicy używając `Array.from()`
2. Sprawdź, na jakim indeksie powinno znaleźć się ostrze - użyj operacji `Array.slice(0, index)` i `Array.slice(index, arr.length)`, 
aby uzyskać dwie części miecza - klingę i czubek
3. Wygeneruj znak ostrza tyle razy, ile zostało przekazane do funkcji -  użyj do tego konstrukcji `Array(x).fill('')`
4. Wstaw tablicę z ostrzem w odpowiednie miejsce - między uzyskane 2 tablice - i połącz w całość używając `Array.concat()`
5. Zamień całość z powrotem na zmienną znakową - używając metody `Array.join('')`.

# Nowe operacje na zmiennych znakowych - `String`

Nowe operacje na zmiennych znakowych w ramach standardu ES6 pozwalają między innymi na wyszukiwanie zawartości w zmiennej oraz powtarzanie
określonego znaku pożądaną ilość razy.

**Pamiętaj o uruchomieniu `npm install` przed zadaniami!**

## ASCII art - wykorzystanie zmiennych znakowych

W poprzednim zadaniu celem było zbudowanie funkcji, operującej na tablicach, która zwraca jednolinijkowy ASCII art - miecz
o różnej długości, determinowanej przez argument funkcji.

Spróbuj jeszcze raz zbudować funkcję `sword(length)`, ale bez używania tablic - Twoim celem jest osiągnięcie identycznego
rezultatu bez użycia żadnej zmiennej pośredniej, będącej tablicą:

1. Rozłóż wzór rączki i czubka na dwie zmienne - możesz do tego użyć metody `String.substring(beginning, end)`, która zwraca
mniejszą część zmiennej znakowej, zawierającą się pomiędzy zadanymi indeksami. 
2. Używając `str.repeat(times)` stwórz ostrze
3. "Sklej" trzy zmienne razem i zwróć cały miecz 

Zadanie znajdziesz w pliku `string-sword.js`, a uruchomisz skryptem `npm run string-sword`.

# Destrukturyzacja, rest i spread

Destrukturyzacja, słowa kluczowe `rest` i `spread` to bardzo blisko powiązane pojęcia - jest to grupa operacji, które
pozwalają na dynamiczne przypisywania obiektów (w tym tablic) do zmiennych bądź argumentów funkcji.

Operacje te znacząco upraszczają czynności takie jak:

- Wywoływanie funkcji z listą parametrów zawartych w tablicy
- Przypisywanie zawartości obiektów do zmiennych
- Konwersję argumentów wejściowych funkcji na tablicę (co z kolei pozwala łatwo opisywać logikę reagującą dynamicznie
na zmienną ilość argumentów funkcji)

**Pamiętaj o uruchomieniu `npm install` przed zadaniami!**

## Scavenger - twój własny skarb

Od wielu tygodni przemierzaliście dżunglę wraz ze swoją grupą, by na końcu drogi znaleźć pradawną piramidę Azteków. 
Według przesłanek, jej korytarze opływały w dobrobyt, a skarby zgromadzone przez lokalnego władcę mogły równać się z tymi
opisywanymi w przesłankach konkwistadorów.

Wiesz, że jesteś niedaleko głównej sali - na środku której znajduje się podest ze skarbami. Legenda głosi, że wszystko
poza złotem nosi w sobie klątwę. Postanawiasz wygrać z zachłannością - weźmiesz jedynie dwa duże złote samorodki, leżące
na samym cokole podestu.

Jeśli się pomylisz, piramida przeklnie Cię po wsze czasy - nie wyjdziesz z niej o własnych nogach, a jeśli ta sztuka Ci się
uda - śmierć będzie Cię ścigać na każdym kroku.

Twoja przygoda rozpoczyna się w pliku `scavenger.js` uruchamianym komendą `npm run scavenger`. Kod pliku został specjalnie
spreparowany w sposób, który wykrywa interakcję z podestem, na którym znajduje się złota nagroda.

Cokół ma następującą strukturę:

```json
{
  "lowerLevel": {
    "treasure": "golden-chain"
  },
  "pillar": {
    "encasing": ["golden-coins", "diamonds"]
  },
  "top": {
    "base": ["rubbish", "gold", "dirt", "diamonds", "gold"]
  }
}
```

Widzisz skarby znajdujące się na bazie podestu? Znajdują się wśród nich dwa kawałki złota - duże złote samorodki.

Twoim zadaniem jest:
- używając destrukturyzacji obiektu i tablicy dostać się do zawartości cokołu (`guardedTreasure`)
- destrukturyzując zawartość bazy podestu, pobrać dwa samorodki. przypisz je do zmiennych `lump1` i `lump2`
- używając operatora `spread`umieścić samorodki głęboko w kieszeni - tak, by nie zgubić ich przy ucieczce z piramidy (w zmiennej `scavengerPocket`)

Twoja kieszeń powinna mieć następującą strukturę:

```javascript
['gold', 'gold', 'hair-pin', 'rope', 'car-keys']
```

Uważaj na przeklęte przedmioty! Jeśli ich dotkniesz, spotka Cię straszny los - taki jak dziesiątek poszukiwaczy przed Tobą,
którzy nigdy nie opuścili tego miejsca!

**PODPOWIEDZI**

Kiedy destrukturyzujesz tablicę, możesz pominąć kilka sąsiadujących, niepotrzebnych Ci elementów. Wykorzystaj to do 
zdobycia samorodków złota:

```javascript
const [a,,b,] = [1,2,3,4,];

console.log(a); // 1
console.log(b); // 3
```

Operator `spread` świetnie sprawdza się przy tworzeniu i modyfikacji tablic. Możesz dzięki niemu łatwo "dokleić" kilka 
wartości w dowolnym miejscu oryginalnej tablicy:

```javascript
const arr = [1,2,3];
console.log([5,6, ...arr]); // [5, 6, 1, 2, 3]
```

# Funkcje w standardzie ES6

Standard ES6 przyniósł jedynie jedną, aczkolwiek bardzo dużą zmianę w języku dotyczącą tworzenia funkcji - funkcje strzałkowe.
Możesz się z nimi spotkać w wielu współczesnych fragmentach kodu - programiści bardzo zaprzyjaźnili się z tą funkcjonalnością,
gdyż znacznie ogranicza ona błędy w kodzie wynikające ze złego zrozumienia kontekstu `this`.


**Pamiętaj o uruchomieniu `npm install` przed zadaniami!**

# Refactor this!

Proces refaktoryzacji (bądź refaktoringu) to działania mające na celu poprawić jakość kodu. Poprzez zwiększenie jakości
możesz rozumieć między innymi:

- Poprawienie szybkości kodu
- Usunięcie potencjalnych problemów
- Zwiększenie czytelności

Skupimy się na ostatniej zalecie refaktoringu. Tym razem zadanie, które przed Tobą stoi jest nieco inne - kod działa, ale... Jest on
bardzo nieczytelny. Został napisany przez programistę po długich godzinach pracy. Zmęczenie dało się we znaki - ścieżki
kodu są trudne do śledzenia, a w kodzie wymieszane jest wiele koncepcji nazewnictwa zmiennych.

Zadanie znajduje się w pliku `refactor-this.js`, uruchamianym skryptem `npm run refactor-this`. Kod z pliku wykorzystuje
przekazany kontekst do stworzenia prostej grafiki - banera z wycentrowanym tekstem wewnątrz.

Twoim celem jest przeprowadzenie prostej refaktoryzacji:
- Uspójnienie nazw zmiennych - zmień ich nazewnictwo na zapis znany Ci jako `camelCase`
- Autor kodu miał duże problemy z użyciem kontekstu w callbackach - używał wielu różnych zmiennych pośrednich, np. `that`,
`_this`, `context` - usuń niepotrzebny kod, a funkcje callbacków zastąp strzałkami
- Niepotrzebne pętle `if/else`, które zwracają jedynie wartości, zastąp operatorami potrójnymi oraz wartościami domyślnymi 
(np. dla rogów bannera domyślnymi wartościami powinna być gwiazdka (`*`))
- zamień wszystkie `var` na `let` lub `const`, zależnie od potrzeb
- w kodzie są też literówki - jeśli jakąś znajdziesz, popraw ją

Kod po wszystkich zmianach powinien zwracać dokładnie taki sam rezultat - tworzyć prosty baner w konsoli.

# Obiekty `Map` i `Set` - nowe sposoby kolekcjonowania wartości

Map i Set to struktury będące częścią standardu ES6, które pozwalają na bardziej zaawansowane sposoby przetrzymywania danych
w zorganizowanych strukturach.

**Pamiętaj o uruchomieniu `npm install` przed zadaniami!**

## Kolekcja książek

Katarzyna ma sporą kolekcję książek. Aby lepiej wiedzieć, co znajduje się w jej kolekcji, pogrupowała książki w kategorie,
np. `fikcja`, `beletrystyka`, `reportaz` itp - kategorie będą kluczami mapy.

W każdej kategorii może znaleźć się wiele książek, ale Katarzyna bardzo pilnuje, by nie posiadać duplikatów - 
miejsce na książki w jej mieszkaniu jest ograniczone.

Zaimplementuj w pliku `books-collection.js` (uruchamianym komendą `npm run books-collection`) strukturę, 
w której każda kategoria będzie unikalna i przeszukiwalna, a zawartość kategorii - unikalnym zbiorem tytułów w danej kategorii.
Wykorzystaj strukturę `Map` z kluczami kategorii i wartościami będącymi `Set`-em książek. taka struktura pozwala na:

- łatwe wyszukiwanie książek po kategorii (dzięki charakterystyce `Map`-y)
- zapobieżenie występowaniu duplikatów (`Set` nie pozwala na przechowywanie w nim duplikatów)

Rozbuduj funkcje znajdujące się w pliku tak, aby spełniały poniższe role:

- `hasBook(category, title)` powinna zwrócić `true` bądź `false`, zależnie od tego, czy dana książka istnieje w zadanej
kategorii
- `putBook(category, title)` powinna umieścić książkę w kolekcji w danej kategorii. Jeśli książka już istnieje (możesz
sprawdzić to odpowiednią metodą `Set`-u), zwróć `false`. Jeśli nie - zwróć `true`. **Uwaga! Niedopuszczalne jest przetrzymywanie
tej samej książki dwa razy w jednej kategorii, ale możliwe powinno być umieszczenie jej w dwóch różnych kategoriach**.
- `removeBook(title)` powinna usunąć książkę z kolekcji. Ponieważ tytuł powinien zostać usunięty ze wszystkich kategorii,
wylistuj zawartość wszystkich kategorii (używając funkcji `Map.values()`) i usuń książkę **ze wszystkich kategorii**. 
Metoda powinna zwrócić usunięty tytuł.

Pamiętaj o poniższych zasadach:
- Nie dodawaj wszystkich kategorii do mapy od razu, a zaimplementuj dynamiczne dodawanie kategorii za każdym
razem, gdy w kategorii umieszczana jest pierwsza książka
- Jeśli dana kategoria jest pusta po usunięciu książki - usuwaj też kategorię (wpis w mapie)

# Gettery i Settery

Gettery i Settery to nowy element standardu ES6, pozwalający na tworzenie dynamicznych właściwości na standardowych
obiektach. Właściwości takie pozwalają na kontrolę zwracanej wartości, jak i wykonywanie dodatkowych operacji podczas zwracania
danej wartości. Z punktu widzenia kodu wywołującego daną właściwość (przypisującego bądź pobierającego jej wartość),
operacja ta wygląda identycznie, jak pobieranie normalnych - prostych - wartości (tzw. plain properties).

**Pamiętaj o uruchomieniu `npm install` przed zadaniami!**

## Licznik odwiedzin

Ela niedawno opublikowała swoją stronę domową, na której publikuje informacje o swoim hobby - paralotniarstwie. 
Nie spodziewała się jednak dużej popularności swojej strony - okazało się, iż tysiące osób dziennie odwiedzają ją, 
by czytać o nowościach, a także oglądać zdjęcia z jej podróży. 

Ela postanowiła dodać do strony licznik odwiedzin - przy każdym wywołaniu kodu licznika ten powinien zwiększyć się o jeden.
Wykorzystaj metody `set count(val)` i `get count()` do zaimplementowania licznika.

W pliku `counter.js` uruchamianym komendą `npm run counter` znajdziesz już gotowy obiekt wraz z getterami i setterami - 
musisz jednak zaimplementować ich logikę:

- dodaj do obiektu zmienną, która będzie przetrzymywała stan licznika: `counterVal`. Ustaw jej wartość początkową na 0
- zaimplementuj metodę `get count()`, która przy każdym wywołaniu najpierw zwiększa o jeden wartość `counterVal`, a następnie
zwraca nową wartość
- zaimplementuj metodę `set count(val)`, która pozwala ustawić początkową wartość licznika (`counterVal`).

---

Repozytorium z ćwiczeniami zostanie usunięte 2 tygodnie po zakończeniu kursu. Spowoduje to też usunięcie wszystkich forków, które są zrobione z tego repozytorium.
