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

# User Agent

User-Agent to zmienna znakowa (string) opisująca Twoją przeglądarkę. 
Zawiera informacje o wersji przeglądarki i systemie operacyjnym.

Niekiedy przeglądarki ze względów kompatybilności "oszukują" system - dodają informacje o silnikach, którymi nie są.

## Uruchomienie

NodeJS powinien już być zainstalowany w Twoim systemie. Odpal następujące komendy z tego folderu:

1. `npm install`
2. `npm start`

Po odpaleniu drugiej komendy, w Twojej konsoli powinna pojawić się informacja, gdzie dostępna jest strona - otwórz ją w swojej przeglądarce.
Pracę skryptu możesz zakończyć standardowym skrótem, tzw. przerwaniem - jest to zazwyczaj `CTRL + c` w aktywnym terminalu
(jeśli skrót ten nie działa, sprawdź, jaki skrót służy do przerwania działania aplikacji, tzw. `SIGINT`).

## Zadanie

1. Przeanalizuj zawartość User-Agent. Jakie informacje on przenosi?
2. Wypisz wszystko, co możesz wywnioskować z tego zapisu
3. Czy Twoja przeglądarka "podszywa się" pod inne? Sprawdź, czy informacja User-Agent zawiera też informacje o innych przeglądarkach.
4. Uruchom tą samą stronę na dowolnej innej przeglądarce (Internet Explorer? Safari? Firefox? Chrome?). Porównaj User-Agenta.

Każda z przeglądarek zwraca inne dane. Dane te mogą być użyte, by określić, co wspiera dany silnik JS zawarty w przeglądarce.

Z tej informacji korzystają takie narzędzia, jak [Browserlist](https://browserl.ist/) bądź [Bowser](https://www.npmjs.com/package/bowser), które pomagają zoptymalizować kod tak, by działał wszędzie.

Różnice między silnikami to tylko część problemów, z którymi musi zmagać się programista front-end (w obecnych czasach jednak coraz rzadziej, bo silniki są coraz lepiej standaryzowane).

Innym problemem jest wspomniany wcześniej sandboxing. Przejdź do następnego zadania, by zobaczyć jeden z jego skutków.

## Sandboxing i CORS

Sandboxing to proces ograniczania możliwości skryptów JS w celu zwiększenia bezpieczeństwa.
Każda współczesna przeglądarka odpala skrypty JS właśnie w piaskownicy.

Jedno z najbardziej popularnych ograniczeń piaskownic to CORS - niemożność odpytania zasobów z innego serwera.

W tym zadaniu uruchomimy bardzo prosty serwer (nie martw się, jeśli nie rozumiesz tego kodu - niedługo będziesz bez problemu tworzyć podobne serwery!) oraz spróbujemy się z nim skomunikować z naszego klienta.

## Uruchomienie

NodeJS powinien już być zainstalowany w Twoim systemie. Odpal następujące komendy z tego folderu:

1. `npm install`
2. W tej samej konsoli: `npm start`. Uruchomi to Twojego klienta
3. Otwórz nową konsolę i odpal serwer: `npm run start-server`

## Zadanie 1

1. Otwórz przeglądarkę używając linka z pierwszej konsoli (rozpoczynającego się od `127.`). 
2. Kliknij przycisk "Zapytanie" i obserwuj konsolę.
3. Przeanalizuj efekt zapytania. Zastanów się, dlaczego przeglądarka tak się zachowała. 

(wskazówka - różne porty traktowane są jak różne zasoby - ta sama ścieżka URL z różnymi portami to 2 różne strony z punktu widzenia przeglądarki!)

*Jeśli masz problemy z działaniem części przeglądarkowej - np. w DevTools otrzymujesz informację `net::ERR_CONNECTION_REFUSED` -
sprawdź, czy pracuje Twój serwer (powinien być uruchomiony w punkcie 3.)*

## Wnioski

Przeglądarka nie może skomunikować się z serwerem pracującym na innym zasobie - nie pozwalają na to zasady bezpieczeństwa,
ograniczające komunikację z zasobami spoza domeny danej strony (czyli części adresu z paska przeglądarki, definiującej wirtualny adres strony).

W efekcie próby komunikacji przeglądarka zwróciła błąd:

```
Access to XMLHttpRequest at 'http://127.0.0.1:8082' from origin 'http://127.0.0.1:8080' has been blocked by CORS policy: 
No 'Access-Control-Allow-Origin' header is present on the requested resource.
```

(zależnie od użytej przeglądarki treść błędu może nieco różnić się od przedstawionego przykładu).

Sygnalizuje on próbę komunikacji z inną domeną. Ponieważ nasz serwer nie wspiera CORS (Cross-Origin Resource Scripting) i nie wysyła odpowiedniego nagłówka,
nie możemy uzyskać danego zasobu.

Zauważ jednak, iż request został obsłużony przez serwer! To odpowiedź została zignorowana przez przeglądarkę.

## Zadanie 2

1. Odkomentuj odpowiednią sekcję w pliku `serwer/server.js`. 
2. Zamknij serwer (zazwyczaj ctrl + c) i odpal ponownie odpowiednią komendą (`npm run start-server`).
3. Wykonaj ponownie zapytanie z poziomu przeglądarki
4. Sprawdź odpowiedź tym razem.
5. Wejdź do zakładki zawierającej zapytania ("Network" w Chrome i podobnych) i sprawdź, jakie nagłówki zostały "doklejone" do odpowiedzi serwera

Jeśli kroki zostały wykonane poprawnie, przeglądarka powinna tym razem obsłużyć zapytanie.

## Wnioski

To serwer decyduje, czy kod klienta powinien być poprawnie obsłużony w przypadku zapytań między domenami.
Aby pozwolić klientowi poprawnie obsłużyć zapytanie, serwer musi poinformować klienta, iż jego zapytanie jest poprawne i możę być obsłużone.

Najważniejsza z linijek, które zostały odkomentowane to:

```javascript
  response.setHeader('Access-Control-Allow-Origin', request.headers.origin);
```

W tej linijce serwer "dokleja" do odpowiedzi nagłówek, w którym informuje klienta, iż może on zostać obsłużony
(ustawia `Access-Control-Allow-Origin` na wartość taką, jak domena klienta).

W naszym przykładzie nagłówek powinien wyglądać tak:

```
Access-Control-Allow-Origin: http://127.0.0.1:8080
```

## Podsumowanie

W zadaniach powyżej masz okazję zobaczyć, jak sandboxing zapobiega potencjalnie niebezpiecznym zapytaniom po stronie przeglądarki.
 Zademonstrowaliśmy też, jak serwer może poinformować przeglądarkę, iż ta może odpytać jego zasoby i tym samym zezwolić na zapytania CORS.




# Skrypty NodeJS

Jak wspomnieliśmy wcześniej, NodeJS to środowisko, w którym kod JS jest intepretowany przez silnik V8 by uzyskać dostęp do zasobów systemowych.

Nie jest on uruchamiany w piaskownicy, ale ma pełny dostęp do systemu - plików, informacji wydajności, sieci.

Wiążą się z tym jednak pewne zmiany. Pewne obiekty i interfejsy, które dostępne były w przeglądarce są niedostępne w NodeJS.

## Zadanie 1

Jednym z obiektów, które występują w przeglądarce jest `window`. Sprawdź, czy istnieje on też w NodeJS.

1. Spróbuj odpalić skrypt przeglądarki z pierwszego zadania uruchamiając `npm start` w bieżącym katalogu
2. Obserwuj konsolę
3. Zinterpretuj błąd

Zarówno `document` jak i `window` są tzw. API ([Application Programming Interface](https://pl.wikipedia.org/wiki/Interfejs_programowania_aplikacji)) specyficznymi dla przeglądarek - nie muszą występować
w innych środowiskach wspierających JavaScript.

## Zadanie 2

`window` jest dość specyficznym obiektem - może być pobrany domyślnie i jest używany jako globalna przestrzeń pracy.

Za każdym razem, gdy w swoim skrypcie tworzysz zmienną bez słowa kluczowego `var`, `const` bądź `let`, jest ona podpinana do tej właśnie globalnej przestrzeni:

```javascript
x = '123'; 

// Jest to równoznaczne z:
window.x = '123';
```

NodeJS też posiada swoją własną globalnbą przestrzeń, używa on jednak innego słowa kluczowego - `global`.

1. Sprawdź zawartość pliku `global-test.js`
2. Uruchom skrypt używając `npm run global-test`
3. Obserwuj rezultaty - zbiór kilku zmiennych dostępnych na globalnym obiekcie NodeJS.

Spośród wyświetlonych rezultatów część mogła wydać Ci się znajoma z przeglądarki, np. `setTimeout`.

Za każdym razem, gdy w przeglądarce wpisujesz `setTimeout` żądasz dostępu do obiektu `window` i jego właściwości `setTimeout`.
W NodeJS następuje podobna operacja - następuje odpytanie obiektu `global`:

```javascript
// PRZEGLĄDARKA:
setTimeout === window.setTimeout // true - to dokładnie te same funkcje!

// NodeJS:
setTimeout === global.setTimeout // true - to dokładnie te same funkcje!
```

## Wniosek

Zarówno przeglądarka, jak i NodeJS mają interfejsy specyficzne dla tych środowisk, mimo, iż obie platformy wspierają JavaScript.

Oba te środowiska mają też obiekt globalny, który jest inferowany za każdym razem, gdy odpytujemy elementy globalne środowiska:

- `window` w przeglądarce
- `global` w NodeJS

Część z metod i obiektów dostępnych na tych obiektach się pokrywa - przykładem mogą być asynchroniczne funkcje `setTimeout` i `setInterval`.


# Typy podstawowe

Typy podstawowe to cegiełki budujące język programowania - każda zmienna w danym języku programowania jest 
bezpośrednio bądź pośrednio związana z danym typem.

Pliki zadań znajdują się w katalogu `src`. Dla ułatwienia uruchamiane są one skryptami z `package.json` w trybie 
obserwacji (używając narzędzia `nodemon`). 

**Pamiętaj o uruchomieniu `npm install` przed zadaniami!**

## Tworzenie zmiennych

W kolejnych zadaniach przedstawimy różne sposoby na tworzenie zmiennych - używając słów kluczowych `var`, `let` i `const`
i porównamy różnice między poszczególnymi słowami kluczowymi.

W następnych zadaniach będziemy pracować na pliku `src/tworzenie-zmiennych.js`.

Uruchom skrypt `npm run variables`. Będziesz modyfikować go w kolejnych podzadaniach. Skrypt uruchamia się automatycznie
ponownie po każdej zmianie w kodzie.

### 1. `var` a `let`

We wspomnianym pliku masz blok kodu, w którym do stworzenia zmiennej wykorzystane jest słowo kluczowe `var`.
Spróbuj zmienić sposób tworzenia zmiennej `x` tak, by używała słowa kluczowego `let` (w linijce 3).

Co stało się po zapisaniu kodu? Dlaczego? Przypomnij sobie zasięg działania zmiennych tworzonych `let` i `const`. 
Spróbuj naprawić kod tak, aby działał ze słowem kluczowym `let` (podpowiedź - możesz użyć `let x;` bez przypisywania 
wartości poza blokiem).

### 2. `const` - stała

Wróć do poprawionego przykładu z poprzedniego zadania, po naprawieniu `let`. Zamień teraz wywołanie `let x` na stałą - 
`const x`. Zapisz i obserwuj zmiany w konsoli.

Dlaczego kod nie wykonuje się poprawnie? Czy jesteś w stanie zinterpretować błąd? 
Czy stała jest wobec tego dobrym wyborem w kodzie z przykładu?

Wspominaliśmy, iż `const` oznacza **stałą referencję** do zmiennej - oznacza to, iż nie możesz zmienić tego, na co wskazuje
nazwa Twojej zmiennej, ale możesz zmienić jej zawartość!

Spróbuj przerobić przykład tak, by tworzyć stałą, która jest obiektem i zmienić jedynie wartość jednej z właściwości obiektu.
Twój obiekt może wyglądać np. tak:

```javascript
{
  a: 123,
}
```

Podsumowując - wykorzystując przykład z `let`, przerób zadanie tak, by bez zamiany kolejności kodu, zadziałał
on po zmianie słowa kluczowego `let` na `const`. Wykorzystaj do tego właściwości obiektu - przypisz do `const` obiekt 
(np. pusty obiekt `{}`) i zmień właściwości na tym obiekcie.

## Typy podstawowe

W następnym porównamy sobie typy podstawowe (prymitywne).

Otwórz plik `src/typy-podstawowe.js` i uruchom go skryptem npm używając `npm run primaries` - od tego czasu skrypt ten będzie
obserwowany.

Spróbuj porównać wartość w konsoli z konkretną linijką w kodzie. Zauważ różnicę między `new Number()` i `new String()` a ich 
odpowiednikami - prymitywami.  

## Obiekty

Wszystko, co w JS nie jest typem podstawowym jest jakąś formą obiektu. 

W tym podpunkcie użyjemy właściwości prototypu do stworzenia instancji naszego "budowniczego". Otwórz plik `src/obiekty.js`
i uruchom zadanie skryptem `npm run objects`.

### 1. Funkcja jako konstruktor

W załączonym pliku stworzono wcześniej funkcję o nazwie `Builder` - jest to nasz konstruktor. Pozwala ona na tworzenie
instancji tej funkcji z użyciem słowa kluczowego `new`. Spróbuj stworzyć instancję `Builder`a używając tej składni:

```javascript
const myObj = new Builder();
```

Składnia ta - `new X()` pozwala tworzyć **instancje** - dzieci danego konstruktora, bazując na jego prototypie. 
Zostanie szerzej omówiona w następnym rozdziale.

Stworzony obiekt powinien zawierać 2 zmienne - jedną przypisaną w konstruktorze, drugą z prototypu. Na początek - 
po dodaniu linijki wspomnianej powyżej - spróbuj sprawdzić zawartość Twojego obiektu - użyj do tego `console.log`:

```javascript
console.log(myObj);
console.log(myObj.x);
console.log(myObj.y);
```

Możesz zauważyć, że pierwszy `console.log` pokazał jedynie zawartość `x` - to dlatego, że domyślnie `console.log` wywołany
na obiektach zwraca jedynie ich własne właściwości - te odziedziczone po prototypie (jak `y`), nie są widoczne, 
ale nadal są dostępne - co ukazał 3. `console.log`.

Spróbuj złożyć frazę `Hello World!` próbując pobrać te zmienne i logując je w konsoli. Zauważ, czym różnią się te zmienne:

- `x` dostępne jest tylko i wyłącznie po stworzeniu obiektu - konstruktor musi być wywołany, aby stworzyć tą zmienną
- `y` dostępne jest na prototypie - jest **dziedziczone** z prototypu (pamiętasz - prototyp to taki "schemat" budowania obiektów?)

W zadaniu 2 pokażemy pewną właściwość prototypu, która wpływa na to, jak budowane są obiekty.

### 2. (Zadanie dodatkowe) Prototyp a instancje funkcji

Prototyp to schemat budowania obiektów, które są "produktami" danej funkcji. Nie jest on jednak kopiowany do obiektu, a 
kopiowane jest jedynie wskazanie na niego - tzw. referencja. 

Referencja wskazuje jednak na prototyp oryginalnej funkcji.
Pamiętasz przyrównanie obiektów? Zwraca ono `true` **tylko i wyłącznie gry porównujemy dokładnie ten sam obiekt** (a nie tylko taki sam).
Jeśli wywołasz dla parametru `y` z poprzedniego zadania następującą linijkę:

```javascript
console.log(myObj.objProp === Builder.prototype.objProp); // true
```

okaże się, iż porównanie zwróci wartość `true`. Potwierdza to, iż `myObj` ma właściwość, która jest **tą samą** właściwością,
co ta na prototypie `Builder`.

To trochę tak, jak z wysyłaniem linka do dokumentu, np. w usłudze chmurowej. Link jest wskazaniem na dokument, a nie kopią tegoż.
Jeśli wyślesz swojemu znajomemu napisany przez Ciebie tekst i pozwolisz mu na zmianę tego, będzie on zmieniał tą samą
kopię, co Ty. Podobnie jest z referencjami na prototypach. Posiadając **referencję** - "link" do oryginalnej zmiennej -
masz możliwość zmiany wartości tej zmiennej.

**Wiąże się z tym niebezpieczeństwo - podobnie jak jeden znajomy, który ma prawa edycji wspólnego dokumentu może skasować
całą jego treść dla wszystkich innych, podobnie Ty - modyfikując wartości na prototypie - możesz zmienić te we wszystkich
obiektach zbudowanych według tego prototypu!**

---

Spróbuj sprawdzić to na przykładzie z poprzedniego punktu. Rozwiązując poprzednie zadanie, uzyskałeś/uzyskałaś frazę 
`Hello World!`, w której fraza `World!` zapisana była właśnie na prototypie, przypisana do zmiennej `y`. Stwórz w linijce
pod tworzeniem `myObj` drugi obiekt, np. `myObj2`:
__
```javascript
const myObj2 = new Builder();
```

Teraz, poniżej (na końcu pliku `obiekty.js`) spróbuj zmienić wartość prototypu `Builder`-a na Twoje imię:

```javascript
Builder.prototype.y = 'TwojeImie';
```

Spróbuj sprawdzić jaka jest wartość `y` na dwóch stworzonych obiektach poniżej. Czy zmieniła się? Dlaczego?

Teraz spróbuj zmienić frazę powitalną - `Hello` (przypisaną do `x`) na jednym z obiektów na pożegnanie:
 
```javascript
myObj2.x = 'Goodbye';
```

Ponownie przeanalizuj zawartość obiektów używając `console.log` i sprawdź, czy zmieniła się ona w obu obiektach.
Jak różnią się od siebie wartości `x` i `y`? O której można powiedzieć, że należy do samego obiektu, a o któej, 
że należy do jego "twórcy" (`Builder`a)?

# Konwersje

JS to język słabo typowany - oznacza to, iż stworzenie zmiennej nie jest jednoznaczne ze związaniem jej z określonym typem -
przypisując do danej zmiennej inny typ nie łamiesz zasad języka - jest to jak najbardziej dozwolone. W związku z tym JS
i inne języki słabo typowane mają bardziej rozbudowaną charakterystykę konwersji między typami.

Konwersja typów pozwala na porównywanie (a szerzej - wykonywanie operacji) na dwóch lub więcej zmiennych różnych typów -
język stara się dopasować zmienne tak, by dana operacja miała sens.

**Pamiętaj o uruchomieniu `npm install` przed zadaniami!**

## Truthy i falsy

W JS koncepcja prawdy i fałszu jest znacząco rozszerzona - w operacjach wiele wartości zmiennych może zostać zewaluowanych 
(inaczej - zamienionych, skonwertowanych na) jako `prawda` i wiele wartości zmiennych może zostrać zewaluowane jako `fałsz`. 
Pierwsza grupa zmiennych zwane są `truthy`, drugie - `falsy` (brak bezpośredniego tłumaczenia komplikuje nieco sytuację - 
możemy powiedzieć `ewaluowane na prawdę` i `ewaluowane na fałsz`).

Otwóz plik `src/truthy-falsy.js` i uruchom go skryptem `npm run truthy-falsy`.

### 1. Truthy

Znajdź jak najwięcej wartości różnych typów, które mogą być zewaluowane jako `prawda`. Użyj konwersji do boolean: 
`Boolean()`, np. `Boolean(true)`, który zwróci... Prawdę! (jest to trywialny przykład, ale pokazuje, 
jak przeprowadzić taką konwersję). 

Podstaw za `true` z przykładu jak najwięcej **zmiennych różnych typów**, które zostaną zewaluowane (zamienione) na prawdę.

Wklej każdą z podmian jako nową linijkę - w rezultacie w konsoli powinno wyświetlić się wiele następujących po sobie wartości `true`.

### 2. Falsy

Podobnie jak w poprzednim przykładzie, wiele zmiennych może być zewaluowane na false. Używając `Boolean(twojaZmienna)` 
i tego samego pliku wymyśl jak najwięcej przykładów **zmiennych różnych typów**, które mogą zostać zewaluowane na fałsz.

Wklej każdą z podmian jako nową linijkę - w rezultacie w konsoli powinno wyświetlić się wiele następujących po sobie wartości `false`.

## Operacje na różnych typach

### 1. Konwersje string -> number

W pliku stworzono kilka różnych zmiennych znakowych zawierających numery. Spróbuj przekonwertować je na zmienne numeryczne
używając metod:

- `parseFloat`
- `parseInt`
- konstruktora `Number()`

Zapisz wszystkie rezultaty w konsoli używając `console.log`. Porównaj wyniki.

Otwóz plik `src/konwersje.js` i uruchom go skryptem `npm run conversions`.

### 2. Niejawna konwersja

W tym samym zadaniu dołączona została funkcja `addToNum`. Zawiera ona jednak błąd, który ujawni się dla specyficznej wartości
zmiennej wejściowej `num`. Spróbuj poprawić błąd.

## Podwójna i potrójna równość

### 1. Porównanie `===` i `==`

Operatory podwójnego i potrójnego porównania działają inaczej w kontekście konwersji - podwójne porównanie próbuje przyrównać
zmienne z konwersją, jeśli zmienne nie są tego samego typu.

W pliku z zadaniem znajduje się funkcja, która przeszukuje obiekt w celu znalezienia danej wartości w obiekcie.

Działa ona jednak niepoprawnie - zwraca klucz `b` zamiast ścieżki `d.f` pod którą znajduje się dokładna wartość.

Dlaczego? Jak naprawisz tą funkcję?

Spróbuj przepisać funkcję tak, by najpierw szukała dokładnej wartości, a potem - w przypadku nieznalezienia odpowiednika - szukała
wartości, która może być skonwertowana na poszukiwaną wartość.

Otwóz plik `src/rownosc.js` i uruchom go skryptem `npm run equality`.

---

Repozytorium z ćwiczeniami zostanie usunięte 2 tygodnie po zakończeniu kursu. Spowoduje to też usunięcie wszystkich forków, które są zrobione z tego repozytorium.
