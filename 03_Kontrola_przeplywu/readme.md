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

# Instrukcje warunkowe - if / else / else if

Instrukcje warunkowe pozwalają nam na tworzenie kodu reagującego na określone zmiany - warunki.
Dzięki instrukcjom warunkowym nasz kod może wywołać różne gałęzie tegoż w różnych przebiegach, 
obsługując różne przypadki. Spróbujmy przećwiczyć tworzenie takich instrukcji na 2 zadaniach.

**Pamiętaj o uruchomieniu `npm install` przed zadaniami!**

## 1. Wybór środka transportu - if / else / else if

Pamiętasz przykład z wybieraniem środka transportu? Spróbujmy go rozszerzyć i zapisać w postaci kodu.

W pliku `transportation.js`, który możesz uruchomić komendą `npm run transportation` znajduje się funkcja
`chooseTransportationMode`. Przyjmuje ona 2 parametry:

- odległość do pokonania - liczbę, np. 100, 1000, 10000 (w metrach)
- aktualną pogodę, przyjmującą jedną z 3 wartości: `fair` (słonecznie), `rain` (deszcz) i `snow` śnieg

Funkcja ta, zależnie od zadanych warunków zwraca jeden z 3 środków transportu: `car`, `bicycle` albo `walking`.

Zaimplementuj ciało tej funkcji według zadanych zasad:
- Jeśli pada śnieg, bezwzględnie wybierz samochód - `car`
- Jeśli pada deszcz:
    - odległość jest mniejsza niż 500m - wybierz chodzenie pieszo
    - odległość jest pomiędzy 500m a 2000m - wybierz rower
    - dla większych odległości - wybierz samochód
- Jeśli jest słonecznie:
    - odległość jest mniejsza niż 1000m - wybierz drogę pieszo
    - odległość jest między 1000m a 4000m - wybierz rower
    - dla większych odległości wybierz samochód
    
Powyższe punkty mogą Ci zasugerować rozłożenie instrukcji warunkowych - pamiętaj, że instrukcje można zagnieżdżać!
W pliku, poniżej funkcji znajduje się zestaw testów - jeśli zaimplementujesz tą funkcję poprawnie, wszystkie testy 
zwrócą poprawną wartość, a kod wykona się poprawnie.



# Operator potrójny

Operator potrójny pozwala na skrócenie zapisu instrukcji warunkowej `if/else` do jednej linijki. 
Jest szczególnie popularny w przypadkach przypisywania wartości zmiennej - pozwala w zwięzły sposób zapisać taką operację:

```javascript
const x = shouldUseDefaults ? '10' : y;
```

Powyższy kod można rozumieć następująco:

- Przypisz do x wartość
- Jeśli zmienna `shouldUseDefaults` jest prawdziwa, przypisz `x` wartość `10`
- W innych przypadkach przypisz tej zmiennej wartość innej zmiennej - `y`

Wykorzystajmy taki operator w zadaniu.

## 1. Foobar

"Foobar" to fraza, która dotarła do programowania z armii USA - oznacza ona sytuację, która jest nie do uratowania - 
`F**ed up beyond recognition`, zapisywana oryginalnie jako `FUBAR`. Przyjęła się ona w programowaniu jako fraza oznaczająca
kod testowy - funkcja `foo()` bądź `bar()` to często tzw. placeholder - funkcja zastępcza, służąca do testowania kodu czy zastąpienia
przyszłej, prawdziwej implementacji.

Spróbujmy tworzyć generator fraz `foobar`, który może wygenerować dowolną kombinację tych dwóch sylab:

- `foofoo`
- `foobar`
- `barbar`
- `barfoo`

Użyjemy do tego operatora potrójnego. W pliku `foobar.js`, który możesz uruchomić komendą `npm run foobar` znajduje się funkcja
`foobar()`, która przyjmuje 2 zmienne:

- zmienną `boolean` decydującą o pierwszej sylabie
- zmienną `boolean` decydującą o drugiej sylabie

Stwórz operator potrójny, który zależnie od wartości takiej zmiennej wygeneruje `foo` bądź `bar`:

- `foo` dla zmiennej równej `true`
- `bar` dla zmiennej równej `bar`

Twoja funkcja powinna np. wygenerować:

- `foofoo` dla wywołania `foobar(true, true)`
- `barfoo` dla wywołania `foobar(false, true)`

Zaimplementuj ciało funkcji z użyciem operatora potrójnego tak, aby zwracała ona poprawne wartości. 
Na dole pliku znajdują się asercje, które znikną w momencie, gdy funkcja zadziała poprawnie.

# Wartości domyślne

Wartości domyślne pozwalają na krótki zapis w syuacji, gdy chcemy zareagować na wartość zmiennej w sytuacjach takich jak:

- zmienna nie ma jeszcze przypisanej wartości, a chcemy jej przypisać wartość domyślną
- chcemy opcjonalnie wywołać określoną funkcję, ale tylko jeśli zmienna jest równa true

i wiele podobnych. Jeśli znasz już bibliotekę React to zapis taki może być Ci znany ze składni JSX - był on tam używany
do pomijania renderowania pewnych części templatek, zależnie od wartości zmiennej.

Działania takie możliwe są z użyciem dwóch operatorów logicznych - `||` zwanym `OR` ("lub"") oraz `&&` zwanym `AND` ("i").
Przypomnij sobie z części teoretycznej jak każdy z tych operatorów się zachowuje.

**Pamiętaj o uruchomieniu `npm install` przed zadaniami!**

## 1. Robot reagujący na bodźce otoczenia

Jan buduje prostego robota, reagującego na impulsy z zewnątrz. Kod robota znajdziesz w pliku `robot.js`, który możesz uruchomić
skryptem `npm run robot`.

Funkcja podejmująca decyzje o działaniu robota przyjmuje 2 parametry:

- `input` - wejściowy impuls, definiujący reakcję robota
- `shouldEmitSound` - decydujący o emitowaniu dźwięku wtedy, kiedy tego zażądamy

Istniejący kod nie działa tak, jak powinien. Istnieją w nim 2 błędy:
- Robot nie podejmuje akcji domyślnej. Jeśli otrzyma nieznany bodziec, nie podejmie poprawnej akcji. 
Spróbuj dodać domyślną wartość akcji w odpowiednim miejscu używając operatora `||` i używając zmiennej `DEFAULT_ACTION` jako podjętej akcji
- Robot wydaje dźwięki za każdym razem, kiedy podejmuje akcję (a nie tylko kiedy `shouldEmitSound` jest równe `true`). Spróbuj
użyć operatora `&&` w zestawieniu z funkcją wydawania dźwięku `emitSound()` tak, by ta była wywoływana tylko dla poprawnej wartości
parametru `shouldEmitSound` (BLEEP BLOOP powinien się pojawić w konsoli tylko 2 razy)


# Switch / case

Operator switch/case pozwala na bardziej szczegółową kontrolę przepływu używając zmiennej, której 
wartości możemy wyliczyć na liście - np. stany maszyny, status zwrócony z serwera itp.

Switch pozwala przełączać między poszczególnymi wyliczonymi wartościami oraz podjąć akcję dla wartości domyślnej.

**Pamiętaj o uruchomieniu `npm install` przed zadaniami!**

## 1. Kod robota - inaczej

Spróbujmy przepisać kod naszego robota z poprzedniego zadania na strukturę switch/case. Nasz obiekt, transformujący bodziec
na reakcję stanie się teraz warunkami instrukcji "switch", a opcja `default` stanie się naszym domyślnym działaniem.
Spróbuj także użyć instrukcji `if` do zadecydowania, czy robot powinien wydawać dźwięk.

W pliku `robot.js` znajdziesz funkcję podobną do tej z poprzedniego zadania oraz komentarze zawierające informację
o akcjach, które musisz oprogramować. Możesz go uruchomić komendą `npm run robot`.

Robot dla każdego impulsu wejściowego musi zwrócić odpowiednią akcję w zadanym `case` i wykorzystać opcję `default` dfo zwrócenia
akcji domyślnej.


# For-loop: `for`

Pętle pozwalają nam na powtórzenie wykonywania elementów kodu wiele razy według zadanych zasad. 
JS, podobnie jak inne języki programowania dostarcza wielu metod, pozwalających na tzw. iterowanie - powtarzenie kodu
dla kolejnych elementów struktur itp.

**Pamiętaj o uruchomieniu `npm install` przed zadaniami!**

## 1. Szachownica i for-loop

W tym zadaniu skonstruujemy funkcję, która tworzy szachownicę o zadanym rozmiarze, np. dla 3x3:

```text
#_#_#
_#_#_
#_#_#
```
W pliku checkerboard.js uruchamianym komendą `npm run checkerboard` znajdziesz funkcję `generateCheckerboard`. 
Przyjmuje ona 3 parametry wejściowe:

- Ilość powtórzeń (wymiar szachownicy)
- Znak dla pól czarnych (np. `'#'`)
- Znak dla pól białych (np. `'_'`) - warto dobrać znaki o podobnych szerokościach dla pól czarnych i białych

Algorytm tworzenia szachownicy działa tak:
1. Stwórz pierwszy rząd:
    1. Dla pierwszego znaku postaw czerń
    2. Dla drugiego znaku postaw biel
    3. Dla trzeciego znaku - postaw czerń...
    4. Powtórz tyle razy, ile pól ma mieć krawędź szachownicy
2. Stwórz drugi rząd:
    1. Zacznij od pola białego
    2. Dla drugiego znaku postaw czerń
    3. Powtórz tyle razy, ile pól ma mieć krawędź szachownicy
3. Powtórz tyle razy, ile pól ma mieć krawędź szachownicy

Możesz zauważyć dwie zależności:
- Kod będzie miał dwie pętle - zewnętrzną tworzącą wiersze i wewnętrzną tworzącą poszczególne pola
- Każda z pętli ma warunek końca - liczbę równą długości krawędzi szachownicy
- Pola dodawane są do szachownicy na przemian - da się to (prawdopodobnie) opisać kodem

**Podpowiedź**

Pola na szachownicy można tworzyć używając funkcji modulo - `%`. Funkcja modulo zwraca resztę z dzielenia danej liczby
przez inną liczbę i może być używana do zdeterminowania parzystości:

```javascript
3 % 2 === 1; // true
2 % 2 === 0; // true
5 % 2 === 1; // true
```

i tak dalej. Jeśli zastanowisz się nad szachownicą jako zbiorem koordynatów - numerem kolumny i wiersza 
(a więc liczbom odpowiadającym Twojej wartości iteracji w pętlach generujących tą szachownicę, np. `i` i `j`),
to możesz zauważyć, że: 
- czarne pola występują **zawsze tam, gdzie suma kolumny i wiersza jest parzysta**
- białe pola występują **zawsze tam, gdzie suma kolumny i wiersza jest nieparzysta**

Przykładowo, spójrz na szachownicę z przykładu powyżej (3x3).

- Pole w drugim rzędzie i drugiej kolumnie to czerń. Można to opisać koordynatami (zaczynając od 0, jak w tablicach i pętlach): `i=1, j=1`. 2 jest parzyste
- Pole w trzecim rzędzie i drugiej kolumnie to biel. Mozna to opisać koordynatami (zaczynając od 0) `i=2, j=1`. 
Suma tych liczb (3) jest nieparzysta, a więc będzie to pole białe.

Stwórz implementację generatora szachownicy, który dla zadanej wielkości wygeneruje szachownicę używając:
- Dwóch zagnieżdżonych w sobie pętli - jedną dla kolumn, jedną dla wierszy
- Funkcji modulo używającej wartości z pętli do określenia koloru danego pola
- Dodawania zmiennych znakowych do wygenerowania całej szachownicy.

*pamiętaj, że każdy `console.log` wyświetla się w nowej linijce - możesz wykorzystać to do zbudowania szachownicy! 


# While

Pętla `while` to specyficzna forma pętli `for`, która pomija warunek początku i logikę wywoływaną po wykonaniu pętli 
(a więc pierwszą i trzecią część deklaracji pętli w `for(;;;)`) i pozwala programiście na większą swobodę
w definiowaniu tychże, zarazem czyniąc samą pętlę prostszą.

Każda pętla `for` może być zapisana jako specyficzna forma pętli `while` i odwrotnie - są one równoważne.

## 1. Wąż

Funkcja z zadania `snake.js` generuje węża używając struktury `do...while`. Dla zadanych parametrów:

- Ilości linii
- Długości sekcji węża (linijki). Przekłada się to na długość poziomej sekcji węża, poza elementami zakręcającymi do następnej linijki

generuje ona w konsoli węża, podobnego do tego z popularnej gry "Snake". 
Wywołując funkcję z różnymi parametrami możesz uzyskać węże o różnej długości.

Jeśli wywołasz węża z parametrem Ilości linii równym `0`, jego ogonek jest za długi o jeden rząd, 
podobny problem dotyczy długości węża w każdej linijce (nawet dla `0` wąż ma pewną długość). 
Wynika to z błędu pętli - pamiętasz różnicę między `do...while` i `while...do`?

Pętla `do...while` wykona się raz nawet dla wartości równych `0` w załączonym zadaniu - zatrzyma się dopiero po pierwszym przebiegu.

Spróbuj tak przerobić pętlę, żeby wąż zachowywał się poprawnie dla parametru `0` - nie rysował się na ekranie, gdy ilość linijek równa jest `0`
bądź rysował jedynie zakręty kiedy jego długość jest równa `0` (bez poziomych elementów) - 
zrób to jedynie zamieniając odpowiednio pętle `do...while` na `while...do`. 

Zadanie uruchomisz komendą `npm run snake`.

# `for..in` i `for..of`

Pętle z tytułu to specjalne wersje tradycyjnej pętli `for` używane odpowiednio do wyliczania elementów obiektów i elementów tablic.

Programiści używają ich w sytuacjach, gdy chcą wyliczyć wszystkie elementy danych struktur, bez obawy o indeksy, czy indeks iterowania 
(nasze `i`, `j` itp. z pętli).

**Pamiętaj o uruchomieniu `npm install` przed zadaniami!**

## 1. Krasnoludki i Śnieżka - `for..of`

Śnieżka chce wezwać wszystki krasnoludki na obiad. Otwórz plik `dwarves.js` i uruchom go komendą `npm run dwarves`.
W pliku znajduje się funkcja `hailDwarves()` która przyjmuje jako parametr tablicę z imionami krasnoludków, znajdującą
się powyżej (zawiera one oficjalne imiona 7 krasnoludków z bajki Disneya).

Użyj składni `for..of` tak, aby wyliczyć wszystkie imiona i dodać je do zawołania Śnieżki. Poniżej znajduje się asercja, 
która zawiera poprawną frazę.

Użyj `Array.entries()` na tablicy krasnoludków tak, aby ostatniego krasnoludka (którego `index` równy jest `dwarves.length - 1`)
powitać frazą `and Sleepy!`.

# Pętla `for...in`

Pętla `for...in` pozwala na wyliczenie wszystkich kluczy danego obiektu (wliczając w to zarówno klucze własne,
jak i odziedziczone po rodzicach obiektu). Dzięki temu programista może sprawdzić elementy, które są właściwościami
obiektu w podobny sposób, jak dla pętli.

Użyjmy tej pętli w przykładzie wyliczającym różne zwierzęta cechujące się określoną dietą.

## 1. Zwierzęta i ich dieta - `for..in` i `for..of`

W tym zadaniu (plik `diet.js`, uruchamiany skryptem `npm run diet`) znajduje się obiekt z listą różnych sposobów żywienia
się zwierząt oraz listą tych zwierząt, np:

```javascript
const diets = {
    carnivore: ['Lion', 'Venus flytrap', 'Tiger', 'Falcon']
} 
```

Twoim zadaniem jest zbudowanie odpowiedniej frazy dla każdego z typów żywienia. Fraza powinna zawsze brzmieć następująco:

```text
Following animals are {{dietType}}s: {{X}}, {{Y}}, {{Z}}
```

Za:
- `dietType` podstaw wartość klucza (z przykładu `carnivore`)
- `X`, `Y` i `Z` podstaw nazwy zwierząt

Wykorzystaj składnię `for..in` do pobrania informacji o każdym ze sposobów żywienia, a następnie wygeneruj dla każdego z nich informację i umieść
ją w tablicy. Pamiętaj o przecinkach (musisz pominąć przecinek dla ostatniego elementu, używając indeksu i długości tablicy - jak w zadaniu z krasnoludkami)

Na dole treści zadania znajdują się asercje, które sprawdzą poprawność Twojego kodu.

# Break i continue - przerywanie pętli

Instrukcje `break` i `continue` pozwalają na modyfikację działania pętli - przerywają ją kompletnie (w przypadku `break`)
bądź omijają jej pojedyncze wywołanie.

**Pamiętaj o uruchomieniu `npm install` przed zadaniami!**

## 1. Cenzor

W zadaniu `censor.js`, które możesz uruchomić komendą `npm run censor` znajduje się funkcja która kopiuje frazy ze strumienia
wejściowego do strumienia, który zostanie opublikowany (poprzedzając je myślnikiem `-`).

Frazy te to przeróżne wypowiedzi mieszkańców nieistniejącego państwa Xee. W państwie tym językiem urzędowym jest angielski,
jednak frazy takie jak `bloop` czy `bleep` są niedopuszczalnymi i zakazanymi słowami.

Niestety, ale niektórzy spośród mieszkańców Xee zawarli w swoich wypowiedziach te niedopuszczalne frazy.
Jako cenzor, Twoim obowiązkiem jest wyciąć te frazy z publicznego kanału.

Zmodyfikuj istniejącą funkcję i pętlę tak, aby przerywała ona dane wywołanie pętli przed wypisaniem frazy zawierającej
obelżywe słowo na ekran:
- W przypadku frazy `bloop`, która jest jedynie drobnym złamaniem reguł, pomiń wypisywanie frazy na ekran. Użyj do tego `continue`
- W przypadku frazy `bleep`, która nigdy nie powinna pojawić się w mediach, przerwij kompletnie wywoływanie pętli
i zakończ działanie tejże frazą `"We interrupt our program right now. We will be back shortly"` i dodaj ją jako ostatnią do kanału informacji. 
Użyj do tego słowa kluczowego `break`.

*Do wykrywania niedopuszczalnych słów użyj funkcji `String.includes()`, zwracającej `true` jeśli dana fraza zawiera poszukiwane słowo.

# Operatory typów

Operatory typów służą do filtrowania określonych zmiennych na podstawie ich typu bądź faktu bycia instancją określonego typu.

**Pamiętaj o uruchomieniu `npm install` przed zadaniami!**

# 1. Bramkarz

Bramkarz zajmuje się selekcją ludzi wchodzących do klubu. Pozwala on zarówno wchodzić do klubu pojedynczym osobom, jak i grupom.

Wszyscy chętni do wejścia są reprezentantami dwóch grup:

- `PersonaNonGrata`, którzy - w wyniku wcześniejszych działań - nie są wpuszczani do klubu
- `PartyGoer`, którzy są stałymi i mile widzianymi bywalcami.

Każda z osób należących do danej grupy może wchodzić do klubu pojedynczo bądź grupami.

W zadaniu stworzono kilka takich grupek. Musisz zaimplementować funkcję ochroniarza/bramkarza tak, aby:
- Najpierw sprawdził on, czy ma do czynienia z grupą, czy z pojedynczą osobą (używając funkcji `Array.isArray`)
- W przypadku pojedynczej osoby - sprawdził, czy mamy do czynienia z osobą, która może zostać wpuszczona
- W przypadku grupy - sprawdził, czy w grupie jest co najmniej jedna osoba, która nie może zostać wpuszczona do klubu
- W dowolnym przypadku znalezienia co najmniej jednej osoby, która ma zakaz odwiedzania klubu - funkcja powinna zwrócić `false`
- W przypadku, gdy dana grupa może wejść do klubu - funkcja powinna zwrócić `true`

Uruchom plik `club.js` komendą `npm run club`.

---

Repozytorium z ćwiczeniami zostanie usunięte 2 tygodnie po zakończeniu kursu. Spowoduje to też usunięcie wszystkich forków, które są zrobione z tego repozytorium.
