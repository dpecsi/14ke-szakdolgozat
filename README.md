# 14.KE szakdolgozat
## Készítette
- Pécsi Dániel
- Tóth Krisztián
## Eredeti felépítés (kiinduló pont)
- Be- és kijelentkezés
- Jelszó módosítás
- Jegyek (ticketek) listázása
- Új jegy rögzítése
- Válasz jegyre
- Szállító, fizetési eszköz módosítása

## Eredeti adatbázis táblák
1. Jegyek:
   - szam (sorszám, auto növekedő)
   - ido (rögzítés pontos ideje)
   - kuldte (user neve)
   - termek (string, termék/szolgáltatás megnevezése)
   - mennyiseg (string, a termék mennyisége)
   - me (string, mennyiségi egység)
   - ertek (string, várható érték)
   - szallito (string, a cég ahol a vásárlás fog történni)
   - fizmod (string, a kiválaszott lehetőségek egyike, kp-átutalás-üres)
   - igeny (string, az igény rövid leírása)
   - ittvan (logikai, beérkezett-e az igény a központba)
   - valasz (string, a válasz az igényre)
   - lezart? (logikai, a lezárt jegyek máshol jelennek meg) ennek nem tudom mi pontosan a neve
2. Userek: (ez nem tudom hogy épül fel)
   - nev (string, user neve)
   - jelszo (string, user jelszava)
   - valaszolo (logikai, ha igaz, csak válaszolni tud, új jegyet nem tud létrehozni, ha hamis akkor csak új jegyet tud létrehozni, válaszolni nem tud)


## Forrásjelölés
- .vscode mappa tartalma: https://github.com/nits68/next-frontend-starter

# Minden jog fenntartva!
A projekt felhasználása zárt forrású, vagy kereskedelmi szoftverben szigorúan tilos!   
Nyílt forrású szoftver esetében kérésre felhasználási jog adható, mellyel a projekt fejlesztőit kell megkeresni!