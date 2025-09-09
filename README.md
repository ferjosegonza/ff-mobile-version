Basic structure of the project Mobile version for FF:

/src
  /components
    - CurrencySelector.js
    - ExchangeForm.js
    - Confirmation.js
    - TransactionHistory.js
    - Support.js
  /screens
    - HomeScreen.js
    - ExchangeScreen.js
    - ConfirmationScreen.js
    - HistoryScreen.js
    - SupportScreen.js
  /services
    - api.js
  /contexts
    - ExchangeContext.js
  App.js

FixedFloatMobile/
│
├─ assets/               # Imágenes, iconos, logos
├─ src/
│   ├─ api/              # Funciones para llamadas a la API
│   ├─ components/       # Componentes reutilizables (Botones, Inputs, etc.)
│   ├─ screens/          # Pantallas principales
│   │   ├─ LoginScreen.tsx
│   │   ├─ HomeScreen.tsx
│   │   ├─ ExchangeScreen.tsx
│   │   └─ ProfileScreen.tsx
│   ├─ navigation/       # Navegación entre pantallas
│   │   └─ AppNavigator.tsx
│   └─ utils/            # Funciones de ayuda, validaciones, manejo de tokens
├─ App.tsx               # Punto de entrada de la app
└─ package.json
