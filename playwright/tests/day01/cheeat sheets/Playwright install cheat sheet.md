# Playwright telepítés (üres mappából indulva)

Lépésről lépésre útmutató egy vadonatúj, tiszta Playwright + TypeScript projekt felállításához.

## 1. Előfeltételek

Nyiss egy terminált (parancssort), és győződj meg róla, hogy a Node.js telepítve van:

```bash
node -v
npm -v

```

> Legalább **Node.js v18** vagy újabb ajánlott. Ha nincs telepítve, töltsd le a [nodejs.org](https://nodejs.org/) oldalról.

## 2. Projektmappa létrehozása és megnyitása

Hozz létre egy új, teljesen üres mappát, és lépj bele:

```bash
mkdir playwright-kurzus
cd playwright-kurzus

```

*Ha VS Code-ot használsz, nyisd meg közvetlenül:*

```
code .

```

## 3. A hivatalos telepítő varázsló futtatása

Futtasd az alábbi parancsot az üres mappában:

```bash
npm init playwright@latest

```

A varázsló pár egyszerű kérdést tesz fel a terminálban:

| Kérdés | Mit válassz? | Magyarázat |
| --- | --- | --- |
| **Do you want to use TypeScript or JavaScript?** | `TypeScript` | Típusbiztonság és kiváló kódkiegészítés. |
| **Where to put your end-to-end tests?** | `tests` *(alapértelmezett)* | Ide kerülnek majd a `.spec.ts` tesztfájlok. |
| **Add a GitHub Actions workflow?** | `false` *(n)* | Első órára még nem szükséges CI pipeline. |
| **Install Playwright browsers?** | `true` *(y)* | Letölti a Chromium, Firefox és WebKit motorokat. |

*(Opcionális)* Ha a rendszer Linuxon vagy WSL alatt kéri az operációs rendszer függőségeit:

```bash
npx playwright install-deps

```

## 4. Mit hozott létre a varázsló?

A sikeres telepítés után ez a mappastruktúra fogad:

```javascript
playwright-kurzus/
├── node_modules/             # Külső csomagok és a Playwright motor
├── tests/                    # Tesztfájlok gyűjtőhelye
│   └── example.spec.ts       # Beépített minta teszt
├── tests-examples/           # Részletesebb demo feladatok (törölhető)
├── .gitignore                # Gitből kizárt fájlok (riportok, cache)
├── package.json              # Projekt beállítások és függőségek
├── package-lock.json         # Csomagverziók zárolása
└── playwright.config.ts      # A Playwright központi beállítófájlja

```

## 5. Mi a helyzet a tsconfig.json-nal és a strict móddal?

> ⚠️ **Fontos tudnivaló:** A varázsló **NEM hoz létre `tsconfig.json` fájlt!**

- **Miért működik mégis?** A Playwright a háttérben saját belső átalakítóval (Babel / SWC) röptében alakítja át a TypeScriptet futtatható JavaScriptté, így konfiguráció nélkül is azonnal elindul.
- **A veszély:** A Playwright tesztfuttatója **nem végez típusellenőrzést**, és alapból nem kényszeríti ki a szigorú (`strict`) szabályokat.

### Ajánlott lépés: tsconfig.json hozzáadása

Ha azt szeretnéd, hogy a VS Code és a fordító valódi szigorú típusbiztonsággal (`strict: true`) figyelmeztesse a tanulókat a hibákra, hozz létre a projekt gyökerében egy `tsconfig.json` fájlt:

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "NodeNext",
    "moduleResolution": "NodeNext",
    "strict": true,
    "noEmit": true,
    "skipLibCheck": true,
    "types": ["node"]
  },
  "include": ["tests/**/*.ts", "playwright.config.ts"]
}

```

*Típusellenőrzés futtatása terminálból (anélkül, hogy JS fájlokat generálna):*

```bash
npx tsc --noEmit

```

## 6. Első próba: működik a rendszer?

Futtasd le a telepítő által generált minta tesztet:

```bash
# Tesztek futtatása a háttérben (headless mód)
npx playwright test

# Vagy látható böngészőablakkal:
npx playwright test --headed

# Grafikus UI mód megnyitása (fejlesztéshez a legkényelmesebb):
npx playwright test --ui

```

## 7. Riport megtekintése

Ha a teszt lefutott, a Playwright automatikusan elkészíti az interaktív HTML riportot:

```bash
npx playwright show-report

```

## 8. A legfontosabb parancsok egy pillantásra

| Parancs | Mire jó? |
| --- | --- |
| `npx playwright test` | Minden teszt lefuttatása headless módban. |
| `npx playwright test tests/basics.spec.ts` | Csak egy konkrét tesztfájl futtatása. |
| `npx playwright test --headed` | Futás látható böngészőablakban. |
| `npx playwright test --ui` | Interaktív, kattintható tesztvezérlő felület. |
| `npx playwright test --debug` | Léptető (debugger) mód és Playwright Inspector. |
| `npx playwright codegen` | Tesztgenerátor: kattintásaidból automatikusan kódot ír. |
| `npx tsc --noEmit` | Szigorú TypeScript típusellenőrzés futtatása. |