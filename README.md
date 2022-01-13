# Date picker by raficraft (live demo)

A multilingual date picker from scratch for react.
[code source](https://github.com/raficraft/date_picker_by_raficraft)

[Live demo host on netlify]

## supported language

-  English (EN)
-  English (US)
-  French  (EN)
-  German  (DE)
-  Spanish (SP)
-  Italian (IT)

Other languages ​​will be added. Stay tuned. ^^
 
<br>

***

## Install
<br>

in your console

```javascript
npm i datepicker_by_raficraft
```

in your React.js project 
```javascript
import { DatePicker } from "datepicker_by_raficraft";
```

<br>

***

## Use  

```javascript

    <DatePicker
        className="custom_input"
        start={date.start}
        end={date.end}
        language="es"
        label="Espagnol picker"
        forHtml="es_picker"
        key="es"
    ></DatePicker>

```
<br>

***

## Settings
<br>

The different props that you can pass in your component

```javascript

//Default Value 

    // [label] Optional, if you define it, a label will be associated with the input of the date picker
    label = "date picker",  

    // [forHtml] Add a "for" attribute in the label and an "ID" attribute in the input. If no label, only the ID will be added. Indispensable if you have several date pickers on the same page. ^^
    forHtml = "datePicker", 

    // [language] Defines the date format and language
    language = "gb",

    // [start || end ]  Début l'année de début et celle de fin du calendrier.
    start = new Date().getFullYear() - 50,
    end = new Date().getFullYear() + 50,

    // [autocomplete] Disable autocompletion
    autocomplete = "off",

```

## 


