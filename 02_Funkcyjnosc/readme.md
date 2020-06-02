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

# Tworzenie funkcji

W tym bloku znajdziesz kilka zadań z zakresu tworzenia funkcji. Funkcja to tak naprawdę specyficzny obiekt,
dziedziczący po specjalnym wbudowanym obiekcie - `Function`. Można ją "przypiąć" do zmiennej na kilka sposobów.

W poniższym zadaniu omówimy sobie różnice między różnymi typami funkcji.

**Pamiętaj o uruchomieniu `npm install` przed zadaniami!**

## 1. Nazwa funkcji

Otwórz plik z zadaniem (`create-function.js`) i uruchom zadanie `npm run create-function`.

W zadaniu znajduje się funkcja, która wyświetla nazwy innych funkcji oraz przykładowe, puste funkcje (bardzo niepraktyczne, 
ale skupiamy się na nazwach!).

Jest ona wywoływana 3 razy, jednak jedno z wywołań jest niepoprawne - nie zwraca nic w `console.log`. 
Spróbuj znaleźć błąd i zrozumieć dlaczego nie zwracana była nazwa funkcji.


## 2. Funkcja w globalnym kontekście a funkcja jako zmienna

W tym samym pliku na końcu znajduje się zakomentowany `console.log()`. Odkomentuj go i odśwież zadanie. 
Wywołanie tego pliku powoduje rzucenie błędu w konsoli - spróbuj **bez zmiany kolejności linijek** w kodzie zmienić
**tylko jedną linijkę** tak, żeby kod ten zaczął działać (przypomnij sobie różnice w metodach tworzenia funkcji).

Zastanów się dlaczego ta zmiana spowodowała, że kod zadziałał.

# Kontekst funkcji

Każda funkcja uruchamiana jest w określonym kontekście. Poprzez kontekst możesz rozumieć środowisko uruchomieniowe -
np. globalny zakres w NodeJS bądź `Window` w przeglądarkach, ale także rodzica funkcji bądź dowolny obiekt, który
programista podpiął do funkcji.

Celem kontekstu jest nadanie funkcji sensu w określonym wymiarze. Kontekst zawarty jest pod słowem `this`.

W poniższych zadaniach powównamy kilka sytuacji:
- Standardowego kontekstu (w NodeJS - będzie to `global`)
- Kontekstu funkcji w obiekcie
- Kontekstu funkcji w klasie (same klasy omówimy później!)
- Przypiętego kontekstu - używając słowa kluczowego `bind`.

**Pamiętaj o uruchomieniu `npm install` przed zadaniami!**

## 1. Zabawy z kontekstem

Otwórz plik `context.js` i uruchom go poleceniem `npm run context`. Przeanalizuj każdy ze zwracanych kontekstów - 
przykłady zapisane są w takiej samej kolejności, jak powyższe podpunkty.

Następnie użyj obiektu poniżej - `myObj` jako kontekstu dla każdej z tych funkcji, używając słowa kluczowego `bind`
i stwórz na końcu pliku 4 `console.log`i z przepiętymi funkcjami, podobnie jak miało to miejsce w zadaniu.
Jeśli wykonasz zadanie poprawnie, każdy `console.log` powinien zwrócić poprawną wartość atrybutu z `myObj`.

Pamiętaj, iż `bind` nie modyfikuje oryginalnej funkcji, a jedynie zwraca funkcję "związaną" z wybranym kontekstem -
musisz stworzone funkcje przypisać do nowych zmiennych!

# Metody `call` i `apply`

Metody `call` i `apply` służą do przepinania kontekstu na czas jednego wywołania funkcji - 
w przeciwieństwie do `bind` nie tworzą więc nowej funkcji, a jedynie wywołują istniejącą
funkcję z zadanym parametrem.

Metody te używane są między innymi w następujących scenariuszach:

- Arbitralna lista argumentów przekazywanych jako tablica w `apply` pozwala na dynamiczne wywołania funkcji, niezależnie od ilości jej parametrów.
Jest to popularne np. w rejestratorach zdarzeń, tzw. loggerach, które pozwalają na przesłanie dowolnej ilości argumentów w każdym wywołaniu
- Przepinanie kontekstu w każdym wywołaniu funkcji jest popularne w bibliotekach, które wykonują operacje na tablicach - dzięki temu m.in
funkcje, które wykonują operacje na pojedynczych elementach kolekcji mogą łatwo uzyskać informację o elemencie, który edytują (np. w (JQuery)[https://api.jquery.com/map/])

**Pamiętaj o uruchomieniu `npm install` przed zadaniami!**

## 1. Obserwacja ptaków

Leszek jest pasjonatem ptaków. Zbudował on maszynę, która pozwala rozpoznawać ptaki - 
zależnie od tego, jaki ptak ukaże się w obiektywie, maszyna zwraca najpopularniejsze informacje o ptakach:

```javascript
const birdInfo = {
    species: '',
    dominantColor: '', 
    size: '' // small || medium || large
}
```

Ptak ujęty w obiektywie jest więc kontekstem funkcji, która rozpoznaje ptaki. W pliku `birds.js`
znajduje się funkcja, która przyjmuje dane zwrócone z mechanizmu rozpoznającego ptaki. Przyjmuje ona dwa parametry:

- data rozpoznania ptaka (możesz użyć konstruktora daty `new Date()` by taką datę wygenerować)
- poprawność rozpoznania (liczba w przedziale od 0 do 1, np. `0.75`), mówiąca z jaką pewnością jest to rozpoznany gatunek (mechanizmy maszynowe też czasami się mylą!).
Im bliżej wartości 1, tym większa pewność

Dane ptaka - gatunek, dominujący kolor i rozmiar - podawane są zaś na kontekście przypiętym do funkcji - 
funkcja wywoływana jest zawsze w kontekście jakiegoś rozpoznanego gatunku.

Uruchom skrypt `npm run birds` i spróbuj zasymulować działanie takiej funkcji raportującej, generując różne dane dla następujących ptaków:

- sikorka bogatka, kolor dominujący: `yellow`, rozmiar `medium`
- wróbel domowy, kolor dominujący: `grey`, rozmiar `small`
- dzięcioł duży, kolor dominujący: `grey`, rozmiar `medium`
- sokół, kolor dominujący: `brown`, rozmiar `large`

Dla każdego z ptaków:

1. Przygotuj najpierw odpowiedni obiekt `birdInfo` w pliku zadania (`birds.js`)
2. Wybierz parametry funkcji. Możesz użyć bieżącej daty, jak wyżej i dowolnej wartości dla poprawności z zadanego przedziału
3. Używając obu metod (`apply` i `call`), zaaplikuj kontekst `birdInfo` do funkcji raportującej

W ten sposób uzyskasz 8 wywołań funkcji - dla każdego ptaka po 2 razy. Sprawdź rezultaty.

Przykładowy rezultat który możesz uzyskać dla sokoła:

```text
[2020-02-02] Identified bird: Sokół, dominant color: brown, size: large, recognition certainty: 0.65
```

Staraj się w swoim kodzie używać języka angielskiego - tutaj na potrzeby gatunków ptaków robimy wyjątek -
polskie nazwy są nam znacznie bliższe, niż ich angielskie odpowiedniki.

# Funkcja jako argument

JS jako język wielu paradygmatów (pozwalający na programowanie z użyciem wielu koncepcji)
pozwala także na programowanie funkcyjne - w którym funkcja jest także obiektem języka.

Jak już wiemy, `Function` - konstruktor każdej funkcji w JS - jest także obiektem, jak wszystkie inne
obiekty niebędące prymitywami. Dziedziczy wobec tego wszystkie metody przekazane mu przez "twórcę wszystkich obiektów" -
`Object`, a jej dzieci - czyli funkcje, które tworzymy w naszym kodzie - mogą być przekazywane jako argumenty innych funkcji
tak, jak każdy inny obiekt.

**Pamiętaj o uruchomieniu `npm install` przed zadaniami!**

## 1. Stos wywołań

Każda funkcja, która ma zostać wywołana jest umieszczana na tzw. stosie. 
Spróbujmy zestawić praktykę z wiedzą z części teoretycznej tego zagadnienia - przeanalizujemy stos wywołań dla kilku przykładów.

Aby móc śledzić nasz stos wywołań, użyjemy specjalnego obiektu błędu, którego w kodzie używa się do obsługi
wyjątków (dowiesz się o nich więcej przy okazji "zaawansowanego JS"). Obiekt ten - `Error` - ma specyficzną właściwość,
zwaną `stack`, która zawiera właśnie stos wywołań. Możemy użyć jej do prześledzenia stosu w dowolnym momencie, 
konstruując błąd i logując stos wywołań, który ten błąd zawiera:

```javascript
console.log(new Error().stack);
```

Wygeneruje to w konsoli stos dla tego błędu - zaczynający się od kodu samego błędu, a kończący na obiekcie globalnym 
(nie został on jednak "rzucony", dzięki czemu nie przerwał wywoływania naszego programu).

W pliku zadań `stack.js`, który możesz uruchomić komendą `npm run stack` znajduje się rekurencyjna funkcja `findBooks`.
Przeszukuje ona podany zbiór książek - robi to rekurencyjnie, zdejmując jedną książkę ze zbioru
i przekazując pozostały stos dalej - tak, jakby książki te schowane były w pudle, w którym nie widzisz 
ich grzbietów. W każdym kolejnym wywołaniu wyjmujesz jedną książkę z pudełka, po czym ponawiasz wyszukiwania - tak długo
aż albo znajdziesz poszukiwaną książkę albo... Pudło stanie się puste!

Jak pamiętasz z teorii, rekursja (bądź rekurencja) powoduje wzrost długości stosu wywołań z każdym kolejnym rekurencyjnym
wywołaniem. Spróbuj prześledzić "poszukiwanie" książek tą metodą.

1. Dodaj do wnętrza funkcji, tuż przed pobieraniem kolejnej książki z tabeli książek, wpis generujący informację o stosie (z powyższego przykładu) 
2. Uruchom zadaną funkcję trzy razy z zadanymi parametrami:
    - `Moby Dick`
    - `Ulisses`
    - `Harry Potter`
    
Następnie obserwuj informacje o stosie. Ile elementów zostało umieszczone na stosie dla konkretnych wywołań?

## 2. Stos wywołań - "rozlanie stosu" (Stack Overflow)

Wywoływanie wielu funkcji wewnątrz innych funkcji powoduje wzrost rozmiaru stosu.
Spróbujemy teraz zasymulować przekroczenie dopuszczalnego rozmiaru stosu - uruchomimy 
funkcję przeszukującą książki, która nigdy się nie skończy!

W zadaniu z poprzedniego przykładu zakomentuj dodany przez Ciebie `console.log()`, a następnie
usuń warunek końca przeszukiwania - ten, który powoduje wyświetlenie `'The book was not found!'`.
Usuwając ten warunek spowodujesz, iż nasza funkcja wywoływać będzie bez końca samą siebie,
nawet po dotarciu do dna symbolicznego pudła książek. Wyszukaj teraz książkę nieistniejącą w naszym pudle, np. `Brave New World`.

W konsoli powinny zacząć ukazywać się następujące komunikaty:

```text
Looking for X in 0 books...
Book not found, box is already empty!
Taking "undefined" from the box
Looking for X in 0 books...
Book not found, box is already empty!
Taking "undefined" from the boxE
```

W pewnym momencie Twój skrypt zatrzyma się (możesz przyspieszyć to znacząco, zakomentowując `console.log()`, 
które generują wspomniane komunikaty) z błędem. Przeanalizuj błąd, który wygenerował skrypt.

Błąd ten to zabezpieczenie przed niekończącymi się nigdy funkcjami - gdyby nie ten, Twój kod zabierałby coraz więcej zasobów
maszyny (w szczególności - pamięci RAM i tzw. cache procesora), aż w końcu Twój komputer (podobne rzeczy działyby się z serwerami uruchamiającymi NodeJS)
zacząłby stawać się ociężały, a nawet - zawiesił się.

## Funkcja jako argument innej funkcji

W JS funkcja to tzw. encja pierwszego poziomu - *"first level entity"*, co oznacza, iż jest obiektem, jak każdy inny
obiekt dziedziczący po `Object`, a więc - może być też - tak jak obiekty - przekazywana jako argument innych funkcji.

JavaScript wykorzystuje tą właściwość na każdym kroku - jako tzw. callbacki, czyli funkcje wywoływane przez inną funkcję
z określonymi parametrami. Pozwala to m.in na:

- Uproszczenie skomplikowanej logiki
- Rozdzielenie kodu generycznego od kodu specyficznego (czyli uniwersalnego od kodu stworzonego do spefycicznych zadań)
- Obsługę asynchroniczności (o tym więcej później)

Z callbackami - często nieświadomie - spotkaliście się już wcześniej - są one bardzo popularne w JS, np. w wywołaniach funkcji
takich jak `.map()` czy `.forEach()`:

```javascript
const arr = [1,2,3];

console.log(arr.map(
  function(item) { return item + 1 } // To nasz callback!
));

console.log(arr.forEach(
  function(item) { console.log('My value is: ' + item) } // To też callback!
));
```

Spróbujmy omówić callbacki na bazie zadania z pocztą, omówionego w sekcji teoretycznej.

**Pamiętaj o uruchomieniu `npm install` przed zadaniami!**

## 1. Dostarczenie przesyłki

W pliku `post-office.js` możesz znaleźć gotowy kod. Jest to bardzo prosta symulacja działania poczty.
Duża część zadań wykonywanych przez pracowników tej placówki jest powtarzalna, różnią się jednak metody dostarczenia paczek.

Cały proces można omówić w 3 etapach. Na każdym etapie informacja jest przekazywana do następnego etapu przez callback. 
Pierwsza część to przyjęcie i przygotowanie paczki do przesyłki. Zgrupowana ona jest w funkcji `nadaj`:

1. Na pocztę przychodzi paczka wraz z informacją jak ma zostać przekazana do klienta (metoda wysyłki)
2. Pracownik poczty podejmuje serię działań w placówce (zasymulowanych `console.log`iem):
    - rejestracja, 
    - dodanie do systemu,
    - przekazanie do sortowni
    - skierowanie do odpowiedniego centrum dystrybucyjnego
3. Wykorzystując odpowiednią metodę przesyłki, paczka wędruje do klienta

Druga część drogi paczki to przesyłka. Ta uzależniona jest od metody przesyłki (w przykładzie z zadania to `wyslijTradycyjnie`):
1. Paczka wędruje określoną ilość czasu (zasymulowaną `setTimeout`)
2. Po dotarciu do klienta, osoba dostarczająca paczkę raportuje z powrotem na pocztę (funkcja `coJakDojdzieNaPoczcie`, 
np. w metodzie tradycyjnej jest ona wywoływana jako `funkcjaObslugi`)
3. Po wywołaniu tej funkcji, pracownik dostaje informację o przesyłce (czyli wywoływany jest nasz **callback**!) i podejmuje dalsze kroki

Dalsze kroki to ostatnia część drogi naszej paczki i zarazem ostatni callback - opisuje je funkcja `coJakDojdzieNaPoczcie`:

1. Raportujemy, iż paczka jest obsłużona wraz ze statusem

Każda metoda wysyłki to właśnie callback, przekazywany do głównej metody `nadaj`. Kod został nieco przerobiony tak, by łatwiej
było Ci obserwować czekanie na paczkę - póki callback nie zwróci wartości, pracownik poczty czeka i po każdej sekundzie
z niecierpliwości dopomina się o status paczki do momentu doręczenia.

W zadaniu zaimplementowano jedynie jedną, powolną metodę wysyłki - `wyslijTradycyjnie`. 
Uruchom skrypt komendą `npm run post-office` i zaimplementuj jeszcze dwie (bądź cztery, jeśli chcesz rozwiązać nieco trudniejsze zadanie) 
metody wysyłki:

- `wyslijPriorytetowo` z czasem przesyłki 2000ms i własnym komunikatem
- `wyslijKurierem` z czasem przesyłki 1000ms i własnym komunikatem
- (dodatkowe) `wyslijNiezdarnymKurierem`, który zgubi część przesyłki po drodze 
(przyjrzyj się przesyłce z zadania i zastanów się, jak usunąć jedną z właściwości naszej przesyłki - obiektu.
Możesz do tego użyć `delete paczka.nazwa_klucza` - [delete](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/delete)).

**Podpowiedź: Każdy z wpisów konsoli wywoływany jest z aktualnym czasem (`new Date().toLocaleTimeString()`). 
Obserwuj kolejne wpisy i czasy przy nich, by prześledzić czas dostawy i drogę paczki.**

*Ciekawostka - w zadaniach z pocztą użyto języka polskiego nie tylko w komentarzach i jest to zamierzone. 
Jest to ukłon w stronę trendu, który obowiązywał w państwowych placówkach bardzo długo, bo od początku XXI wieku 
(i zarazem polskiego Internetu, jaki znamy dziś) aż do okolic roku 2015. 
Cały kod wszystkich aplikacji musiał być pisany w języku polskim (co m.in. wdrożyły firmy takie jak PKP czy właśnie Poczta Polska). 
Wiązało się z tym jednak więcej problemów, niż rozwiązań, w związku z czym współczesny kod na portalach państwowych podąża 
już za standardem branżowym i pisany jest w dzisiejszym lingua franca - języku angielskim*

---

Repozytorium z ćwiczeniami zostanie usunięte 2 tygodnie po zakończeniu kursu. Spowoduje to też usunięcie wszystkich forków, które są zrobione z tego repozytorium.
