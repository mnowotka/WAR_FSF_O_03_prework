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

# Tablice - tworzenie nowych struktur

Operacje takie jak `concat`, `flat`, `join` i `reduce` pozwalają na przekształcanie oryginalnych tablic do nowych struktur.
Dzięki nim możliwe są operacje, które w innym wypadku wymagałyby sporej ilości kodu - pętli oraz funkcji pomocniczych.

**Pamiętaj o uruchomieniu `npm install` przed zadaniami!**

## 1. Potato song

"Potato song" to popularna anglojęzyczna piosenka ucząca dzieci liczyć. W pliku `potato-song.js`, który uruchomisz skryptem
`npm run potato-song` znajduje się funkcja generująca piosenkę. 

Twoim zadaniem jest:

1. Przekształcić dane wejściowe (3 tablice) w taki sposób, by utworzyły spójną tablicę dla funkcji wyliczającej ziemniaki
2. W funkcji wyliczającej - użyć odpowdiednio metody `join`, by funkcja wygenerowała spójną frazę, np:

```text
1 potato, 2 potatoes, 3 potatoes, more!
```

Użyj trzech znanych Ci już metod - `concat`, by stworzyć z danych wejściowych jedną tablicę, `flat`, by uzyskać spójne
dane wejściowe dla funkcji generującej piosenkę oraz `join` dla wygenerowania frazy piosenki wewnątrz funkcji `potatoSong`.

# Tablice - modyfikowanie zawartości

Operacje `map`, `shift`, `pop` i pokrewne pozwalają na zmianę zawartości tablicy, zwracając nową tablicę bądź modyfikując
oryginalną (tzw. mutating - mutowanie tablicy, czyli edycja oryginału).

**Pamiętaj o uruchomieniu `npm install` przed zadaniami!**

## 1. Choinka

Metoda znajdująca się w pliku `christmas-tree.js`, uruchamiana skryptem `npm run christmas-tree` powinna generować prostą 
choinkę w oknie konsoli, np:

```text
   ★
   #
  #*#
 #*#*#
#*#*#*#
   ∏
```

Dla zadanej listy "poziomów" drzewka funkcja generacyjna `cTree` centruje je i generuje w konsoli rezultat, zaczynając
od pierwszego, a kończąc na ostatnim rzędzie.

W pliku znajduje się jednak szereg błędów:
- Elementy drzewka są podane w złej kolejności - drzewko wygenerowałoby się odwrócone
- Na choince brak jest bombek.

Twoim zadaniem jest poprawienie istniejącego kodu oraz dodanie bombek do każdego z poziomów drzewa. Bombki dodać możesz
następującą funkcją:

```javascript
function baubleGenerator(element, index) {
  if (index % 2 !== 0) {
    return '*';
  }

  return element;
}
```

Znajdziesz ją na początku pliku z zadaniem. Zamienia ona elementy drzewka na bombki ('*') za każdym razem, 
gdy element drzewa znajduje się na nieparzystym miejscu

Funkcja ta może zostać użyta jako callback w funkcji `map()` - użyj jej odpowiednio dla każdego z rzędów choinki, by dodać
bombki.

# Tablice - wyszukiwanie elementów

Metody pozwalające na wyszukiwanie elementów pozwalają na łatwe określenie, czy tablica zawiera poszukiwaną strukturę bądź
też zwrócenie tablicy, która jest mniejsza od oryginalnej - z usuniętymi elementami, które nie spełniły warunków wyszukiwania.

**Pamiętaj o uruchomieniu `npm install` przed zadaniami!**

# Znajdź szpiega

W pliku `find-a-spy.js` uruchamianym skryptem `npm run find-a-spy` znajduje się symulacja poszukiwania szpiega.
Wyobraź sobie, iż jesteś tajnym agentem, który musi znaleźć szpiega w kasynie. Szpieg jest jednak podejrzliwy - jeśli
zauważy jakiekolwiek niebezpieczeństwo, zniknie.

Twoim celem jest zadbanie o to, by bramkarz przy wejściu do kasyna nie wywołał zamieszania - zainteresuje się on każdym
podejrzanym jegomościem. Każde zamieszanie spowoduje ucieczkę szpiega! Po wpuszczeniu gości do kasyna będziesz musieć
użyć detektora szpiegów - nie działa on jednak poprawnie - Zwraca on dane pierwszej napotkanej osoby.

1. Zadbaj o to, by bramkarz nie napotkał nikogo niepożądanego na wejściu do kasyna - użyj funkcji `filter` do usunięcia
z listy gości wszystkich gości, którzy posiadają flagę `isNotWelcome`
2. Napraw detektor szpiegów - użyj funkcji `find` wraz z callbackiem zwracającym `true` dla osób których numer seryjny
dowodu tożsamości jest równy `IAMASPY101010`.


# String - czyszczenie zmiennych znakowych (sanityzacja)

Sanityzacja to proces oczyszczania zmiennej (w tym wypadku - zmiennej znakowej) ze zbędnych znaków, które nie są potrzebne
z punktu np. przechowywania danych w bazie danych.

**Pamiętaj o uruchomieniu `npm install` przed zadaniami!**

# Trochę kultury

John nie za dobrze przyswoił sobie zasady savoir vivre - często przekrzykuje innych, mówi bardzo głośno i przerywa.
Postaraj się nauczyć johna zasad dobrego zachowania - zaadresuj każdą z tych przywar:

- Przekrzykiwanie Johna objawia się poprzedzaniem i kończeniem sentencji wykrzyknikami `!`
- Głośne wyrażanie się przedstawione jest przez używanie jedynie wielkich liter: np. `HELLO`
- Przerywanie przedstawione jest przy pomocy nadużywania białych znaków na początku i końcu wypowiedzi - John
próbuje dojść do słowa, przez co inni nie mogą dorzucić swoich trzech słów, np. `      HELLO       `;

Użyj znanych Ci już metod operacji na String-ach tak, aby nauczyć Johna ogłady. W pliku 'good-behaviour.js' uruchamianym
skryptem `npm run good-behaviour` znajduje się funkcja `teachManners`, która obecnie nie robi nic - zwraca
frazę taką samą jak wejściowa.

Zmodyfikuj funkcję w taki sposób, aby zaadresować wszystkie 3 problemy, które ma John z wyrażaniem się. Przykładowe frazy:

- `     !HELLO, I AM JOHN!   ` powinna stać się frazą `hello, i am john` (nie przejmujemy się wielkością liter, np. imion - zależy nam, żeby John mówił ciszej)
- ` WHAT'S UP?!   ` powinna stać się frazą `what's up?`

** PODPOWIEDŹ **

*Ponieważ John dużo krzyczy, możesz użyć specjalnej zmiennej - RegExp - do usunięcia powtórzonych znaków wykrzyknika*:

```javascript
const exclamations = /!/ig;
```

*Jest to wspomniany w artykule obiekt typu RegExp, omówienie którego jest poza zakresem kursu. 
Litery `/ig` w RegExp oznaczają **wyszukaj wszystkie wystąpienia poszukiwanej frazy, niezależnie od wielkości liter**.
Dzięki temu możesz usunąć wiele wykrzykników na raz, używając tej frazy tak: `.replace(exclamations, '')`.
Na potrzeby tego zadania potrzebne fraza RegExp znajduje się w zadaniu - musisz jej tylko poprawnie użyć.

# Prosta walidacja danych wejściowych

Metody String pozwalające na sprawdzenie zawartości zmiennej znakowej pozwalają na podjęcie kroków w przypadku znalezienia
poszukiwanej frazy. Jest to przydatna cecha, która może być używana np. w prostych walidacjach.

**Pamiętaj o uruchomieniu `npm install` przed zadaniami!**

## Ukryta wiadomość

Ty i Twój kolega (bądź koleżanka - jak wolisz) z firmy macie sekretny kod - za każdym razem, gdy jedno z Was ma drugiemu
do przekazania jakąś firmową plotkę na żywo, umieszczacie na czacie firmowym ukrytą wiadomość - pierwsze litery
kolejnych wiadomości od drugiej osoby układają się w słowo `OKON`, np (`K` to znajomy, wiadomości innych osób oznaczone są trzykropkiem):

```text
K: O tak, to bardzo ciekawe
J: (...)
A: (...)
K: Kosztować to będzie niemało...
C: (...)
K: O niej nie pomyślałem
F: (...)
L: (...)
K: Nie, nie zgodzę się z Tobą
```

Tym samym - śledząc kolejne wpisy drugiej osoby od razu wiecie, że musicie spotkać się na żywo, bez przekazywania tej
informacji jawnie (Wasza firma niestety śledzi wiadomości pracowników - nie byłoby bezpieczne pisanie o plotkach nawet
na prywatnym kanale).

W pliku `secret-code.js` uruchamianym poleceniem `npm run secret-code` znajdziesz wyekstrahowane frazy Twojego kolegi.
Musisz uzupełnić ciało funkcji `secretCodeDetector()`, która przyjmuje zbiór fraz na początku, a zwraca 
wartość `true` w momencie znalezienia słowa - klucza `OKON`. `secretCodeDetector()` powinien zwrócić `false` dla pozostałych sytuacji
- gdy fraza nie została znaleziona dla danej dyskusji.

Zaimplementuj poniższe elementy:

1. Sprawdzanie pierwszej litery frazy - tak długo, póki nie natrafisz na literę `O`, nie musisz sprawdzać następnych fraz (przy użyciu `startsWith()`)
2. Wyciąganie kolejnych pierwszych liter z następujących po tej frazie fraz (używając `substring`).
3. Zwracanie ostatniej frazy, zaczynającej się od litery `N`, jeśli słowo klucz zostanie znalezione w pierwszych literach
kolejnych wiadomości

# Operacje na datach

Operacje na datach pozwalają na stworzenie obiektu daty odpowiadającego aktualnym potrzebom - 
np. wyświetleniu daty w odpowiedniej strefie czasowej, bądź przesunięciu daty o określony czas.

**Pamiętaj o uruchomieniu `npm install` przed zadaniami!**

## Kalkulator czasu lokalnego

Larry często lata samolotem. Za dwa tygodnie czeka go bardzo długi lot na trasie Warszawa - Sydney, z międzylądowaniem
w Singapurze. Lot ten będzie trwał **20 godzin i 40 minut**.

Larry chciałby dowiedzieć się, jaka godzina będzie w Sydney w momencie jego lądowania. 
Czas wylotu to `2020-10-10T12:30+01:00`. Uzupełnij kod zadania o operacje niezbędne do wygenerowania godziny w momencie przylotu:

- Stwórz datę opisującą moment wylotu. Możesz użyć zapisu powyżej (jest to poprawny zapis zgodny ze standardem ISO 8601)
- Dodaj do daty czas przelotu, używając `getMinutes()` i `setMinutes()` oraz `getHours()` i `setHours()`.
- Wygeneruj string z nową datą, używając `toLocaleString()` z opcjonalnym parametrem - informacją o strefie czasowej, np:

```javascript
new Date().toLocaleString('pl-PL', { timeZone: 'Europe/Warsaw'});
```

dla czasu w Warszawie

**PODPOWIEDZI**

- *Do godzin możesz dodać więcej, niż doba - spowoduje to też przesunięcie dnia, więc nie musisz martwić się o fakt, iż
12:30 + 20 godzin to godzina następnego dnia*
- *Strefa czasowa Sydney to: `Australia/Sydney`, możesz użyć polskiego locale (Larry mieszka na co dzień w Polsce, więc jest przyzwyczajony
do polskiego formatu dat)*

Zadanie znajduje się w pliku `flight-time.js`, uruchamianym skryptem `npm run flight-time`.

# Obsługa błędów - jak uodpornić się na oczekiwane i nieoczekiwane wyjątki?

Obsługa błędów to bardzo ważna część każdej dobrze zaprojektowanej aplikacji. Dobry programista to osoba, która jest w
stanie pisać kod wywołujący małą ilość nieoczekiwanych wyjątków, a poprawnie reagujący na każdy oczekiwany wyjątek 
(np. problemy w komunikacji z serwerem zewnętrznym itp.).

**Pamiętaj o uruchomieniu `npm install` przed zadaniami!**

## Sortownia paczek

Wróćmy jeszcze raz na pocztę. Wyobraź sobie nowoczesną sortownię paczek - dziesiątki taśmociągów i maszyn automatycznie przekazujących
paczki między nimi. Harmider przewijanych pasów i spadających paczek. Dźwięki siłowników spychających paczki na kolejne
sekcje. A w tym wszystkim Maciek - inżynier automatyki, pilnujący, by paczki były odpowiednio przekazywane (czy z ang. 
"routowane").

Maciek odnalazł w systemie błąd - w wyniku usterki oprogramowania po ostatniej aktualizacji, jeden z mniejszych taśmociągów
otrzymuje paczki, które są za duże - maszyna sortująca znajdująca się na początku tego taśmociągu nie może obsłużyć 
większych paczek i zatrzymuje cały system z komunikatem `Need manual interaction`.

Maciek wpadł na pomysł - może użyć potęgi obsługi błędów do "złapania" wyjątku maszyny sortującej i przekazania paczki
na inną linię - sąsiedni `conveyor2`. Wpadł on też na dodatkowy pomysł - aby w przyszłości przeanalizować, jak zachował
się system po jego zmianie, chce do **każdej obsłużonej przez tą część taśmociągu** daną paczki w systemie dodać specjalny
znacznik - `passthroughUsed`.

Zmodyfikuj funkcję `handlePackages` z pliku `sorting-hall.js` (uruchamiany skryptem `npm run sorting-hall`) 
obsługującą tą część sortowni w następujący sposób:

- umieść błąd, rzucany przez maszynę sortującą w momencie napotkania za dużej paczki wewnątrz bloku `try`
- obsłuż błąd w bloku `catch` - sprawdź zawartość pola `message` błędu tak, by obsłużyć **jedynie błąd manualnej interakcji** 
(o takiej samej treści, jak wyżej wspomniana - `Need manual interaction`). Pozostałe błędy "rzuć dalej" - w bloku `catch`
wykonaj dla nich `throw err`
- W bloku `finally` dodaj do **każdej** paczki obsługiwanej przez tą funkcję flagę `passthroughUsed: true`

**PODPOWIEDŹ**

*Jeśli rzucisz błąd złapany w bloku `catch()` ponownie - powędruje on dalej tak, jakby bloku `try/catch` nie było:*

```javascript
try {
  throw new Error('Test!');
} catch (err) {
  throw err;
}
```

*Spowoduje wyrzucenie błędu do globalnego kontekstu. Wykorzystaj to w filtrowaniu błędów w bloku `catch` w zadaniu*

**PODPOWIEDŹ 2**

*Wiadomość przekazywana do konstruktora błędu jest dostępna na instancji błędu jako pole `message`:*

```javascript
const err = new Error('Test message');

console.log(err.message); // 'Test message'
```

# Lodash

`Lodash` to najpopularniejsza biblioteka narzędziowa dla JS - jest to zestaw przydatnych i zoptymalizowanych metod, 
które uzupełniają bibliotekę standardową JS (standardowe API).

**Pamiętaj o uruchomieniu `npm install` przed zadaniami!**

## Agregator wiadomości

Alicja doszła do wniosku, iż jest przytłoczona ilością informacji, która dociera do niej z różnych kanałów informacyjnych -
mediów społecznościowych, portali z newsami itp.
Napisała ona już skrypt wykrywający podobne treści i nadający im informacje, jednak brakuje jej poprawnego procesowania 
wszystkich kanałów:

- strumienie wiadomości zawierają obecnie puste wpisy (puste stringi: `""`), które są pozostałością "szumu" - artykułów,
które kod Alicji wyciął jako bezwartościowe
- Każdy kanał zawarty jest w oddzielnej tablicy
- Niektóre z wiadomości o tych samych identyfikatorach (a więc tych samych treści) występują w różnych kanałach - 
są to więc niepożądane duplikaty

Uporządkuj dane dla Alicji:

1. Scal wszystkie strumienie newsów, używając wbudowanej metody `[].concat()` i utwórz jedną tablicę z newsami.
Zachowaj kolejność scalania: najpierw Facebook, potem newsy Google, potem linki z Twittera
2. Usuń "szum" z użyciem `_.compact()` - tak by puste zmienne znakowe zniknęły ze strumienia
3. Usuń duplikaty używając `_.uniqBy()` - każda wiadomość o tym samym ID powinna występować w strumieniu jedynie raz
4. Rozdziel newsy na dwie tablice, używając partition - na podstawie flagi `isImportant` - Alicja chciałaby najpierw
czytać newsy najważniejsze, a później te nieco mniej ważne.

W pliku `news-filter.js` uruchamianym skryptem `npm run news-filter` znajdziesz funkcję, którą musisz uzupełnić.

# Lodash

`Lodash` to najpopularniejsza biblioteka narzędziowa dla JS - jest to zestaw przydatnych i zoptymalizowanych metod, 
które uzupełniają bibliotekę standardową JS (standardowe API).

**Pamiętaj o uruchomieniu `npm install` przed zadaniami!**

## Budzik - tryb drzemki

Kojarzysz przycisk "drzemka", który pojawia się za każdym razem, gdy rozbrzmiewa poranny budzik w Twoim telefonie? 
W pliku `snooze.js` znajduje się funkcja `alarm(time, howManyTimes)`, uruchamiająca tryb drzemki określoną ilość razy. Funkcja ta jednak nie działa
poprawnie - aktualnie wyzwala ona drzemki non-stop!

Poniżej funkcji znajduje się kod testujący budzik. Zmodyfikuj go tak, aby:
 
- funkcja `snooze(time)` wywoływała się nie częściej niż co `200ms` (użyj metody `_.throttle()`)
- funkcja `getSnoozePhrase(time)` wywołała się tylko raz, a następnie - jej wartość została re-użyta (osiągniesz to
używając metody `_.memoize()`)

Nie modyfikuj funkcji `alarm()`!


# Lodash

`Lodash` to najpopularniejsza biblioteka narzędziowa dla JS - jest to zestaw przydatnych i zoptymalizowanych metod, 
które uzupełniają bibliotekę standardową JS (standardowe API).

**Pamiętaj o uruchomieniu `npm install` przed zadaniami!**

## Word puzzle - INCEPCJA

W pliku `word-puzzle.js` uruchamianym skryptem `npm run word-puzzle` znajduje się łamigłówka. Cztery obiekty: `objA`, `objB`,
`objC` i `objD` zawierają litery, które musisz ułożyć w słowo `INCEPCJA`. Aby jednak uzyskać takie słowo, musisz rozwiązać
zadanie:

1. Scal wszystkie cztery obiekty z użyciem `_.merge()` w odpowiedniej kolejności - tak, aby na scalonym obiekcie
znalazły się wszystkie poszukiwane litery. Obecna, domyślna kolejność obiektów w metodzie merge nie pozwala na uzyskanie wszystkich
liter frazy `INCEPCJA`.
2. Poniżej znajdują się ścieżki, które używane są do wyszukiwania liter w scalonym obiekcie, np. `a b c`. Zostaną one
przekazane do znanej Ci już metody `_.get()`, są jednak w złym formacie - aby metoda `_.get()` je zrozumiała, muszą one mieć
postać `a.b.c` - musisz zamienić spacje na kropki. 
3. Przed wywołaniami metody `get()` znajduje się RegExp - `dashRegEx`, który może Ci pomóc - jeśli użyjesz go wraz z metodą 
`String.replace(dashRegEx, '.')` - zamieni on myślniki na kropki. Znajdź metodę, która przetworzy zmienną znakową zawierającą
spacje na zmienną znakową zawierającą myślniki (jedna z metod `toXCase`?)

Rezultatem powinno być słowo `INCEPCJA` wyświetlone i zwalidowane w konsoli.

**PODPOWIEDŹ**

*Jeśli nie możesz zgadnąć, w jakiej kolejności ułożyć wyraz, zajmij się najpierw przygotowaniem danych do metody `_.get()` -
wyświetli ona po poprawieniu obecną frazę (i brakujące litery). Następnie przyjrzyj się tablicy `letterGetters` - w niej 
możesz podejrzeć, jaką ścieżkę mają poszukiwane litery (są one poukładane już w kolejności, jak w słowie `INCEPCJA`)*

---

Repozytorium z ćwiczeniami zostanie usunięte 2 tygodnie po zakończeniu kursu. Spowoduje to też usunięcie wszystkich forków, które są zrobione z tego repozytorium.
