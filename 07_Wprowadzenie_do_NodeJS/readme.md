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

## REPL - Read-eval-print loop

Read-eval-print loop to funkcjonalność wielu języków programowania pozwalająca na wykonywanie prostych skryptów w konsoli.
Dzięki dostępności tych narzędzi w webie masz możliwość wywoływania swojego kodu będąc niemal w dowolnym miejscu i korzystając
z dowolnej maszyny - może to być nawet telefon komórkowy.

## REPL test - różne wersje NodeJS

Wyobraź sobie, iż dostajesz zadanie przepisania całkiem nowego kodu NodeJS na kod tzw. legacy - współpracujący ze starszymi
wersjami środowiska uruchomieniowego.

W pliku `solution.js` znajdziesz kod, który generuje prostą frazę `Hello, World and you, IMIE!` z użyciem kilku współczesnych funkcji
i... Odrobiny skomplikowanego kodu. Kod ten wykorzystuje wiele z funkcjonalności niedostępnych w starych środowiskach.

Odwiedź stronę [RunKit](https://runkit.com) i postaraj się tak zmodyfikować kod, by zadziałał w wersji NodeJS `v0.10.48`, bez 
modyfikowania logiki.

**PODPOWIEDŹ**

*Wersję NodeJS możesz zmienić małą listą rozwijalną nad polem konsoli*

**Po skończeniu pracy zapisz swoje rozwiązanie do pliku obok `solution.js` i nazwij go `solution.js` - będzie Ci on potrzebny
do następnego zadania!**

# NVM - zarządzanie wesjami NodeJS

NVM pozwala na szybką zamianę wersji NodeJS, której używasz. Dzięki temu możesz łatwo pisać aplikacje przystosowane
do różnych wersji środowiska uruchomieniowego bądź testować jedną aplikację w różnych wersjach tego środowiska.

**Przeczytaj uwagę o uruchamianiu `npm install` na końcu zadania!**

## NVM a wersja Node

W tym zadaniu użyjemy pliku stworzonego przez Ciebie w poprzednim zadaniu. Wywołując komendę `npm run solution` uruchomisz
skrypt `solution.js`, który zawiera dokładnie taki sam kod, jak oryginalny plik `solution.js` z poprzedniego zadania.
Wklej do niego zawartość rozwiązania zadania z konsoli REPL (powinna być nieco zmodyfikowana), a następnie
zmodyfikuj go tak, by zadziałał w konsolowym REPL NodeJS w wersji `v0.10.48`.

Aby jednak mieć taką możliwość, zainstaluj najpierw NVM dla swojej maszyny, jeśli jeszcze tego nie zrobiłaś/zrobiłeś:

- podążaj instrukcjami [dla wersji NVM-Win](https://github.com/coreybutler/nvm-windows) jeśli posiadasz system Microsoftu
- użyj instrukcji [dla wersji NVM Unix](https://github.com/nvm-sh/nvm#installing-and-updating) aby zainstalować NVM na MacOS-ie
bądź Linuxie.

Po zainstalowaniu aplikacji zamknij i ponownie otwórz swoją konsolę. Komenda `nvm` powinna teraz być dostępna!

Aby użyć Node w sugerowanej wersji musisz wywołać komendy:
- `nvm install v0.10.48` by pobrać i zainstalować wybraną wersję
- `nvm use v0.10.48` by zacząć używać wybraną wersję - od tego czasu jest ona dostępna w Twojej konsoli komendą `node`!
- następnie użyj komendy `npm i`, aby zainstalować zależności w odpowiednich wersjach 

**PAMIĘTAJ!**

*Komenda `npm install` musi być uruchomiona każdorazowo po zmianie wersji NodeJS - część z paczek instalowanych przez NPM
buduje się inaczej podczas instalacji, zależnie od wersji środowiska!*

*Nie zapomnij przywrócić oryginalnej wersji NodeJS (sprawdź, jaka wersja jest obecnie LTS na stronie [NodeJS](https://nodejs.org)
) używając `nvm install` i `nvm use` z odpowiednim numerem wersji!*

---

Repozytorium z ćwiczeniami zostanie usunięte 2 tygodnie po zakończeniu kursu. Spowoduje to też usunięcie wszystkich forków, które są zrobione z tego repozytorium.
