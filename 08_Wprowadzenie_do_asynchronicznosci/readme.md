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

# Synchroniczność a asynchroniczność języka JS

Język JS jest językiem jednowątkowym - oznacza to, iż wszystkie operacje wykonywane w kodzie aplikacji dzieją się w tym
samym wątku (na potrzeby tego kursu - wyobraź sobie, że wątek to jeden proces) maszyny. W związku z tym wykonywanie
długich zadań nie może dziać się bezpośrednio w wątku - musi zostać przekazane na zewnątrz, aby kod aplikacji nie musiał
czekać na ich finalizację.

JS rozwiązuje ten problem poprzez asynchroniczne wywołania - nie śledzi on przebiegu operacji, a jedynie oczekuje na zwrot
rezultatów w bliżej nieokreślonej przyszłości - dzieje się to w tzw. pętli asynchronicznej - async loop.

**Pamiętaj o uruchomieniu `npm install` przed zadaniami!**

## Papier - skała - nożyce

W pliku `rock-paper.js` uruchamianym komendą `npm run rock-paper` znajduje się symulacja prostej gry w papier, skałę i nożyce. 
Obecnie kod jest synchroniczny - twój partner gry zawsze z Tobą wygra, gdyż wykonuje swój ruch synchronicznie po Twoim ruchu - w związku z tym **zawsze 
zna Twoją kombinację i jest w stanie odpowiedzieć zwycięską kombinacją**.

Aby z nim wygrać, musisz zmodyfikować sposób, w który przedstawiasz swoją kombinację - przeciwnik zacznie wtedy pokazywać
losowe kombinacje, co znacząco zwiększy szanse na Twoją wygraną. Jednocześnie nie możesz też opóźnić pokazania Twojego symbolu
zbyt dużo, bo przeciwnik oskarży Cię o oszukiwanie!

Użyj odpowiednio funkcji `setTimeout()`, modyfikując sposób, w jaki Ty pokazujesz symbol:

- nie zmieniaj funkcji przeciwnika `enemySymbol()`
- zmodyfikuj zawartość funkcji `yourSymbol()` dodając rezultat wyboru symbolu do callbacka w `setTimeout()` - tym samym zmieniając
Twój ruch na asynchroniczny

Jeśli odpowiednio zmodyfikujesz kod synchroniczny tak, aby stał się asynchroniczny, twój ruch nastąpi w następnym cyklu.
W konsoli ujrzysz wtedy przeciwnika, który będzie wahał się w każdej rundzie, a rezultat będzie losowy, np:

```text
Enemy: I don't know what to show...
You won!
Enemy: I don't know what to show...
You lost!
Enemy: I don't know what to show...
You won!
Enemy: I don't know what to show...
You won!
Enemy: I don't know what to show...
You won!
```

Jeśli nie uda Ci się uczynić swojej akcji asynchroniczną, będziesz przegrywać raz za razem:

```text
Enemy (thinking): I know exactly what to show: paper
You lost: your rock vs enemies paper
Enemy (thinking): I know exactly what to show: paper
You lost: your rock vs enemies paper
Enemy (thinking): I know exactly what to show: rock
You lost: your scissors vs enemies rock
Enemy (thinking): I know exactly what to show: paper
You lost: your rock vs enemies paper
```

Jeżeli z jakiegoś powodu jedno z Was nie zwróci rezultatu na czas, sędzia rozsądzi falstart:

```text
No-one won - False start! (someone did not show the symbol on time)
```

**WSKAZÓWKA**
*Pamiętaj, że użycie `setTimeout()` nawet bez parametru czasu powoduje wywołanie tej funkcji w następnym cyklu pętli asynchronicznej.
Jest to jednocześnie najmniejsza jednostka czasu, o jaką da się opóźnić w JS wywołanie funkcji (w rzeczywistości opóźnienie to wyniesie
kilkanaście milisekund, wynika to z natury języka)*:

```javascript
setTimeout(() => console.log('Hello!')); 
// OR - it's exactly the same:
setTimeout(() => console.log('Hello!'), 0);
```

---

Repozytorium z ćwiczeniami zostanie usunięte 2 tygodnie po zakończeniu kursu. Spowoduje to też usunięcie wszystkich forków, które są zrobione z tego repozytorium.
