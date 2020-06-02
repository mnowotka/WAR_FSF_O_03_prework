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

# ES6 - klasy

Klasy to zagadnienie z zakresu programowania obiektowego. Pozwalają one na lepsze odzwierciedlenie zależności i struktur
między elementami kodu.

**Pamiętaj o uruchomieniu `npm install` przed zadaniami!**

## Miecz świetlny

W pliku `lightsaber.js` uruchamianym skryptem `npm run lightsaber` znajduje się pusta klasa Lightsaber. Brakuje w niej
implementacji następujących metod:

- konstruktora `constructor(color)`, przybierającego argument koloru - powinien on ustawiać właściwość koloru na instancji
klasy (pamiętasz składnię przypisującą wartość do kontekstu - `this.x = value`?)
- metody `slash()`, która zwróci zmienną znakową `brrrruunnggzzzzz!` (możesz skopiować ją z treści zadania, nie próbuj przepisywać tego słowa!)
- metody `clash()`, która zwróci zmienną znakową `kssssft!` - opisującą zderzenie miecza z innym mieczem świetlnym
- metody `wave()`, która zwróci zmienną znakową `wooowoooow` - opisującą dźwięk miecza świetlnego tnącego powietrze
- metody `getColor()`, która zwróci informację o kolorze miecza

*(frazy te znajdziesz też zapisane jako stałe na początku pliku)*

Na dole pliku znajduje się kod "symulujący walkę na miecze świetlne" - generuje on 2 miecze świetlne, a następnie przeprowadza
serię wywołań metod, udając dźwięki walki na miecze.

Obecnie kod ten wywoła się z błędem z racji braku zaimplementowanych metod. Dodaj brakujące metody wraz z poprawnymi wartościami,
aby walka się udała.

## Metody i właściwości statyczne klas

Metody i właściwości statyczne pozwalają na tworzenie właściwości klas, które osadzone są na samych klasach, a nie ich 
instancjach.

Nie posiadają one w swoim obrębie dostępu do kontekstu `this`, ale mogą być łatwo reużywalne w ramach instancji klas. 
Posiadają też jedną dodatkową cechę - można wywołać je nieposiadając instancji klasy, ale odwołując się do samej klasy:

```javascript
class MyClass {
  static hello() {
    console.log('Hello World!');  
  }
}

MyClass.hello(); // "Hello World!"
```

**Pamiętaj o uruchomieniu `npm install` przed zadaniami!**

## Painter - elektroniczny malarz

W pliku `painter.js` uruchamiany komendą `npm run painter` znajduje się klasa Painter - maluje ona kolorową szachownicę
w konsoli na podstawie palety barw. Niestety, w wyniku przeoczenia paleta barw nie została dodana do samej klasy a kod
potrafi jedynie malować w kolorach czarnym i białym!

Dodaj do klasy dwie statyczne właściwości:

- statyczną paletę kolorów `palette`, do której przypisz zawartość stałej sprzed klasy - `PALETTE`
- statyczną metodę `getPalette()` zwracającą statyczną paletę, z użyciem kontekstu `this` klasy (a nie instancji!)

Kod poniżej klasy wykorzystuje zaimplementowaną metodę, aby namalować szachownicę o określonej wielkości - testy zaś
zweryfikują, czy paleta jest poprawnie osadzona w klasie, a także czy rezultat - kolorowa szachownica - jest poprawny.

# Dziedziczenie klas

Dziedziczenie pozwala na tworzenie relacji między klasami i odtwarzanie bardziej skomplikowanych zależności między klasami - 
zależności hierarchicznej (rodzic - dziecko bądź przodek - potomek).

Dzięki dziedziczeniu możemy tworzyć wiele różnych odmian tej klasy, różniących się od klasy nadrzędnej jedynie częścią parametrów.

**Pamiętaj o uruchomieniu `npm install` przed zadaniami!**

## Imbryczek

Twoim zadaniem będzie wymodelowanie... Imbryczka.
Imbryczek do herbaty to czajniczek, który możesz napełnić wodą, zagotować ją, a następnie przygotować herbatę.
Jest ono specyficznym rodzajem naczynia - jak każde inne naczynie może zostać napełnione wodą, ale posiada pewne specyficzne
cechy:

- Pozwala na zagotowanie wody
- Pozwala na zaparzenie herbaty (ale tylko jeśli woda jest gorąca)

Posiada też cechy ogólne, wspólne z naczyniem:

- Może zostać napełniony określoną (liczbową) ilością wody używając metody `pourWater(amount)`
- Pozwala na wylanie wody (jeśli na przykład pragniemy nastawić nową herbatę) - służy do tego metoda `emptyWater()`

W pliku `teapot.js` uruchamianym komendą 'npm run teapot' znajduje się klasa `Vessel`, implementująca całość generycznych
zachowań naczynia - napełnianie i wylewanie wody oraz konstruktor, który określa pojemność naczynia.

Rozszerz klasę `Vessel` klasą `Teapot` (która obecnie jest pusta) w taki sposób, by:

- w swoim konstruktorze dodawała ona frazę `this.greeting = 'I am a teapot!';` oraz wywoływała konstruktor rodzica. Pamiętaj
o poprawnym przekazaniu parametrów z konstruktora czajniczka do konstruktora rodzica! (powinny one mieć takie same sygnatury).
- dodaj metodę `greet()` zwracającą to powitanie.
- zaimplementuj metodę `boil()`, która ugotuje wodę na herbatę - zmieni flagę `isBoiled` w klasie czajniczka na `true` 
- domyślnie wartość `isBoiled` powinna być równa `false` w momencie **NALEWANIA NOWEJ WODY** metodą `pourWater()` bądź wylewania wody metodą `emptyWater()` - 
musisz przeładować metodę `pourWater()`!)
- zaimplementuj metodę `makeTea(howBig)`, która odejmie od ilości wody wlanej do czajniczka odziedziczoną metodą `pourWater()`
wodę zużytą na przygotowanie herbaty (podaną w parametrze `howBig`) a następnie wygeneruje informację:
    - jeśli woda nie jest zagotowana metodą (flaga `isBoiled` jest nastawiona na `false`), zwróci frazę `Water is cold, cannot make tea`
    - jeśli ilość wody w czajniczku jest wystarczająca: zwróci frazę `Poured X ml of tea`
    - jeśli w czajniczku jest już za mało wody: zwróci frazę: `Not enough water, please refill me`
- stan wody w czajniczku zmienia się jedynie przy poprawnych operacjach - nalewaniu wody oraz przygotowaniu herbaty.
W pozostałych sytuacjach powinien pozostać bez zmian

**PODPOWIEDŹ**

*Nie musisz ponownie implementować metod `pourWater(amount)` i `emptyWater()` aby zadbać o to, żeby woda miała odpowiednią
temperaturę - słowo kluczowe `super` może też zostać użyte aby otrzymać referencję do rodzica danej klasy (wraz z jego metodami), np (w `Teapot`:

```javascript
pourWater(amount){
  super.pourWater(amount);
  this.isBoiled = false;
}

emptyWater() {
  super.emptyWater();
  this.isBoiled = false;
}
```

---

Repozytorium z ćwiczeniami zostanie usunięte 2 tygodnie po zakończeniu kursu. Spowoduje to też usunięcie wszystkich forków, które są zrobione z tego repozytorium.
