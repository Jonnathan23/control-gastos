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
En caso de error de

![image](https://github.com/user-attachments/assets/1e11ec15-8024-4d47-a0fc-b282ef59b0ea)

instalar pop-types

```bash
npm install prop-types
```
Importar

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
Ejemplo de uso
```ts
/**
     * Acciones que se mostraran al principio del item (swipe izquierda)
     * En este caso, solo se muestra una acci n para actualizar el gasto
     * @returns {JSX.Element}
     */
    const leadeingActions = () => (
        <LeadingActions>
            <SwipeAction
                onClick={() => { }}
            >
                Actualizar
            </SwipeAction>
        </LeadingActions>
    )

    /**     
     * Acciones que se mostraran al final del item (swipe derecha)
     * En este caso, solo se muestra una acción para eliminar el gasto
     * @returns {JSX.Element}
     */
    const trailingActions = () => (
        <TrailingActions>
            <SwipeAction
                onClick={() => { }}
            >
                Eliminar
            </SwipeAction>
        </TrailingActions>
    )

```


