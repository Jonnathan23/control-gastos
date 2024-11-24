# Control Gastos

## Comando de depencias utilizadas
### Calendario
```bash
npm i react-date-picker
```
Dependencia extra para el calendario
```bash
npm install react-calendar
```

```ts
import 'react-calendar/dist/Calendar.css';

import DatePicker from 'react-date-picker';

import 'react-date-picker/dist/DatePicker.css';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

```
### react-swipeable-list 
Efecto de boton deslizante
```bash
npm i react-swipeable-list
```



```ts
import {
    LeadingActions,
    SwipeableList,
    SwipeableListItem,
    SwipeAction,
    TrailingActions
} from 'react-swipeable-list';

// Estilos css
import 'react-swipeable-list/dist/styles.css';

```
