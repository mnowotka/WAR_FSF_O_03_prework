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

# Modularność w językach programowania

Modularność pozwala na podzielenie wielkiej bazy kodu na mniejsze części - moduły - które są zazwyczaj tożsame z pojedynczymi
plikami. Dzięki modularności kod staje się bardziej czytelny i jest łatwiejszy w utrzymaniu.

**Pamiętaj o uruchomieniu `npm install` przed zadaniami!**

## Export/import vs module.exports

W pliku `import-export.js` uruchamianym komendą `npm run import-export` znajduje się kilka asercji, które zwracają błąd 
(sam plik także nie wywołuje się poprawnie). wynika to z kilku błędów:

- importy `hello` i `world` zderzają się z lokalnymi stałymi
- import który określony jest mianem domyślnego jest tak naprawdę... Importem grupującym
- brakuje poprawnego importu domyślnego z pliku `imports.js`

Dodaj brakujące importy i zmodyfikuj istniejące tak, aby:
- Importy nazwane posiadały niekolidujące aliasy: `helloExternal`, `worldExternal`
- Import domyślny był poprawnie przypisany i obsłużony (obecnie import groupujący nazwany jest tak jak domyślny)
- Import grupujący nazywał się `helloGrouped` i poprawnie zwracał całą zawartość pliku `./imports`

# NodeJS - dostępne API

NodeJS eksponuje dużą ilość interfejsów, pozwalających na oprogramowanie wielu sytuacji i umożliwiające tworzenie czytelnego
kodu wchodzącego w interakcje z systemem.

Jednym z udostępnionych API jest interfejs, który możesz już znać z przeglądarek - `Event`.

**Pamiętaj o uruchomieniu `npm install` przed zadaniami!**

## Shout - krzykacz

Jesteś na bazarze w dalekim afrykańskim kraju. Wkoło, skąpane w słońcu, mienią się namioty poszczególnych stoisk. Znajdziesz
tu kurkumę, kardamon i inne przyprawy, piękne draperie i dywany, czy srebrne świeczniki. W powietrzu unosi się woń harissy, 
dodawanej do przygotowywanych potraw. Ty jednak znajdujesz się tu w innym celu...

Na bazarze znajduje się twój kontakt. Odtwarza on rolę krzykacza - wykrzykuje on różne hasła, udając iż próbuje sprzedać
towary, które oferuje. Znasz go od dawna - potrafisz rozróżnić najdrobniejsze różnice w jego głosie. Dzięki temu wiesz,
iż wykrzykiwane zdania zawierają czasami ukryty kod.

W pliku `shout.js` uruchamianym skryptem `npm run shout` znajduje się emitter zdarzeń - krzykacz z historii. Co jakiś
czas wykrzykuje on hasła - czasami używając nazwy eventu `shout`, czasami `yell`.
Wybieraj na przemian trzecie słowa z wykrzykiwanych przez niego fraz - raz z `shout`, raz z `yell`. Jeżeli krzykacz
będzie krzyczał kilka razy pod rząd używając tego samego sposobu krzyczenia, pomiń frazę.

Z trzecich słów z każdej z fraz jego krzyku ułóż tajne hasło. 

Przykładowe zdania i powstająca fraza (wybrane słowa są oznaczone gwiazdkami
na potrzeby przykładu):

```text
yell: 'Alas, we *meet* finally!'
shout: 'Don't mock *me*, I have better wares than you'
shout: 'My carpets are the best, just the best' // Skipping this phrase - shouting two times in a row...
yell: 'The bets *at* the market, the best in the world - my oranges!'
shout: 'Staying till *night* to serve you the best carpets in the town!'
```

Zauważ, że pomionęliśmy frazę, która została wykrzyczana (`shout` po poprzedniej wykrzyczanej
frazie (`shout` dwa razy pod rząd)), wybraliśmy słowo dopiero z następnej frazy `yell`.
Fraza ukryta w przykładzie to: 

```js
['meet', 'me', 'at', 'night']
```

**PODPOWIEDŹ**

*Aby łatwo odnaleźć trzecie słowo, które wykrzykuje Twój kontakt możesz podzielić zdania przez niego wykrzykiwane na słowa
z użyciem znanej Ci metody `split(' ')`. Następnie zbieraj wykrzykiwane trzecie słowa do tablicy.*

*Tym razem w zadaniu nie znajduje się asercja - sekretne hasło możesz poznać tylko zbierając odpowiednie słowa! Pamiętaj
o pomijaniu fraz wykrzykiwanych w ten sam sposób pod rząd.*

# NodeJS - dostępne API

NodeJS eksponuje dużą ilość interfejsów, pozwalających na oprogramowanie wielu sytuacji i umożliwiające tworzenie czytelnego
kodu wchodzącego w interakcje z systemem.

API, które omówimy w tym zadaniu to HTTP - pozwala ono zarówno na nasłuchiwanie na zdarzenia, jak i generowanie zapytań do innych
zasobów sieciowych.

**Pamiętaj o uruchomieniu `npm install` przed zadaniami!**

## Echoechoecho

W pliku `echo.js` uruchamianym komendą `npm run echo` znajduje się prosty kod, wyzwalający zapytanie do serwera z zawartością 
konsoli. Przekazuje on frazę wpisaną w konsolę i zakończoną kliknięciem klawisza `enter`.

Obok, w pliku `server.js` uruchamianym komendą `npm run server` znajduje się prosty kod serwera, nasłuchującego na frazy wysyłane z pierwszego pliku. 
Obecnie dodaje on do docierającej do niego frazy jedynie trzykropek: `...`
Przejrzyj kod obu plików i postaraj się zrozumieć, jak zachodzi między nimi komunikacja.

Uruchom oba skrypty w oddzielnych konsolach i umieść konsole obok siebie.
Zmodyfikuj kod `echo.js` dodając w odpowiednim miejscu kodu wywołanie requestu do serwera - używając funkcji `request(phrase)`.
Zmodyfikuj kod serwera tak, aby z przychodzących danych kreował echo - powtarzał frazę wysłaną z `echo.js` trzy razy,
a następnie logował ją do konsoli kolejne 3 razy, w różnych odstępach czasu:

- w kodzie `echo.js` dodaj brakujące wywołanie funkcji `request(phrase)` z miejscu, gdzie obsługujemy wpisane przez użytkownika dane
- w kodzie serwera wykorzystaj metodę `repeat()` na stworzonym z frazy String-u tak, aby echo powtarzało kod trzy razy
- wykorzystaj wygenerowaną frazę w funkcjach `setTimeout` tak, by konsola dla każdej frazy wyświetliła ją 3 razy:
- ustaw w każdym z powyższych timeoutów następujące czasy: `500`, `1000` i `2000` milisekund jako ich opóźnienia. 

Efekt dla słowa `echo` powinien wyglądać tak (pojawi się on w konsoli serwera):

```text
echoechoecho...
echoechoecho...
echoechoecho...
```

**UWAGA**

*Nie modyfikuj pliku `server.js` - echo powinno powstać w pliku `echo.js`, w oznaczonej funkcji obsługi wejścia z klawiatury!*

# NodeJS - operacje na plikach

NodeJS eksponuje dużą ilość interfejsów, pozwalających na oprogramowanie wielu sytuacji i umożliwiające tworzenie czytelnego
kodu wchodzącego w interakcje z systemem.

**Pamiętaj o uruchomieniu `npm install` przed zadaniami!**

## Gra w ping-ponga na papierze

Twoim zadaniem jest przeprowadzenie wirtualnej gry w ping-ponga. W pliku `game.txt` znajdują się frazy `PING!` umieszczane w nowych linijkach.
Na każdą frazę `PING!` musisz odpowiedzieć frazą `PONG!`, np:

```text
PING! - PONG!
PING! - PONG!
PING! - PONG!
```

Zauważ pomijanie linii bez `PING!` i wstawiony między odpowiedź a oryginalny tekst znak myślnika i spacji: ` - `. Aby
przygotować odpowiedź na plik wykonaj następujące zadania:

- Przejrzyj plik `game.txt` i spróbuj zrozumieć jego strukturę
- zmodyfikuj funkcję `playGame()` znajdującą się w pliku `ping-pong.js` (uruchomisz to skryptem `npm run ping-pong`) w taki
sposób, aby:
  - pobierała ona zawartość pliku `game.txt` używając metody `fs.readFileSync()`
  - modyfikowała zawartość według założeń, dodając odpowiednie frazy ` - PONG!` w linijkach,
  - zapisywała odpowiedź - nową zawartość pliku - do nowego pliku o nazwie `result.txt` (jest on teraz pusty) używając metody `fs.writeFileSync()`
  
**PODPOWIEDZI**

*Koniec linijki to specjalny znak - `\n` (bądź dwa znaki na platformie Windows - `\r\n`), należący do grupy "białych znaków". Używając metody `str.split(/[\r\n]+/)` 
wraz ze specjalną składnią `/[\r\n]+/` oznaczającą "dopasuj dowolny znak końca linii" możesz łatwo podzielić zawartość pliku na wiersze.*

*Pamiętaj, że musisz skleić linijki ponownie w całość! Użyj do tego metody `join('\n')` ze znakiem specjalnym nowej linijki. Jeśli asercja się nie powiedzie, a obiekty `expected` 
i zawartość pliku wyglądają identycznie - spróbuj zmienić znak końca linii w `join` w ten sposób: `join('\r\n')` (w szczególności na systemach Windows)*

*Jeśli przy "cięciu" linijek uzyskasz linijki puste - możesz użyć metody `.filter(line => line.trim()`, aby odfiltrować te linijki -
filter usunie wszystkie linijki zwracające pusty string (ewaluowany na fałsz wewnątrz callbacka `filter`)*

*Funkcja `.readFileSync()` zwraca strukturę zwaną buforem. Możesz ją jednak łatwo przekonwertować do zmiennej znakowej, używając
konstruktora `String(buffer)` - zwrócona wartość to zmienna znakowa odpowiadająca zawartości bufora*

---

Repozytorium z ćwiczeniami zostanie usunięte 2 tygodnie po zakończeniu kursu. Spowoduje to też usunięcie wszystkich forków, które są zrobione z tego repozytorium.
