import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark, atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

function PopContent() {
  return (
    <>
      <h1 id="date-picker-by-raficraft-live-demo">
        Date picker by raficraft (Live demo)
      </h1>
      <p className="badge">
        <img
          src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white"
          alt="SASS"
        />
        <img
          src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"
          alt="netlify"
        />
        <img
          src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"
          alt="netlify"
        />
        <img
          src="https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white"
          alt="SASS"
        />
      </p>
      <p>A multilingual date picker from scratch for react.</p>
      <a
        href="https://github.com/raficraft/date_picker_by_raficraft"
        target="_blank"
      >
        Code source
      </a>
      <br />
      <a href="https://suspicious-euclid-36780f.netlify.app/" target="_blank">
        Live demo host on netlify
      </a>
      <h2 id="supported-language">Supported language</h2>
      <ul>
        <li>English (EN)</li>
        <li>English (US)</li>
        <li>French (EN)</li>
        <li>German (DE)</li>
        <li>Spanish (SP)</li>
        <li>Italian (IT)</li>
      </ul>
      <br />
      <p>Other languages ​​will be added. Stay tuned. ^^</p>
      <h2 id="install">Install</h2>
      <p>In your terminal</p>
      <SyntaxHighlighter
        language="javascript"
        style={atomDark}
        useInlineStyles="false"
      >
        {`import {DatePicker} from "datepicker_by_raficraft";`}
      </SyntaxHighlighter>
      <br />

      <h2>Use</h2>

      <SyntaxHighlighter
        language="javascript"
        style={atomDark}
        useInlineStyles="false"
      >
        {`
<DatePicker
  className="custom_input"
  start={date.start}
  end={date.end}
  language="es"
  label="Espagnol picker"
  forHtml="es_picker"
  key="es"  //If you use, multiple picker. Define a unique key identifier
></DatePicker>
        
        `}
      </SyntaxHighlighter>

      <br />

      <h2 id="settings">Settings</h2>

      <p>The different props that you can pass in your component</p>
      <p>
        <strong>
          By default the calendar is calculated by contribution to the current
          year. The calendar limits are calculated fifty years before the
          current year and fifty years after ex: for the year 2022, we get a
          calendar that starts in 1972 and ends in 2052
        </strong>
      </p>
      <br />

      <SyntaxHighlighter
        language="javascript"
        style={atomDark}
        useInlineStyles="false"
      >
        {`
         
//Default Value 

// [label] Optional, if you define it, a label will be associated with the input
of the date picker label = "date picker",  

// [forHtml] Add a "for" attribute in the label and an "ID" attribute in the input.
// If no label, only the ID will be added. Indispensable if you have several date 
// pickers on the same page. ^^
forHtml = "datePicker", 

// [language] Defines the date format and language
language = "gb",

// [start || end ]  First and last year of the calendar.
start = new Date().getFullYear() - 50,
end = new Date().getFullYear() + 50,

// [autocomplete] Disable autocompletion
autocomplete = "off",
        
        `}
      </SyntaxHighlighter>

      <h2>Change style</h2>

      <p>
        You can change the styles of the picker by overriding the classes of the
        latter. HTML structure of the picker.
      </p>

      <SyntaxHighlighter
        language="html"
        style={atomDark}
        useInlineStyles="false"
      >
        {`
         
<div class="container_dataPicker_by_raficraft">
  <label forhtml="es_picker">Espagnol picker</label>
  <input type="text" class="fakeInput" placeholder="dd-mm-yy" name="es_picker"
          id="es_picker" data-format="date" autocomplete="off">
  <div class="carousel">
    <header class="head">
        ...Contains the navigation button, the select button and the home button
    </header>
    <div class="carousel_container">
      <table>
        <thead>
        ...Contains the days of the week
        <thead>
          <tbody>
            ...Contains the days of the month 
            <tr>
              <td class="current" data-fulldate="14-01-22" data-year="2022" 
                  data-month="enero">14</td>
              OR
              <td class="currentDay" data-fulldate="14-01-22" data-year="2022" 
                  data-month="enero">14</td>
              </tr>
          </tbody>
        </table>
    </div>
  </div>
</div>
        
        `}
      </SyntaxHighlighter>
      <br />
      <p className="text--alert">
        However, be careful not to directly overload the following tags in your
        css without adding a parent class or a specific class.
      </p>

      <SyntaxHighlighter
        language="css"
        style={atomDark}
        useInlineStyles="false"
      >
        {`      
// Do not do That 

table{
    background-color : red;
}

// If you do this then the background color of the picker will be red.
        `}
      </SyntaxHighlighter>
      <h2 id="author">Author</h2>
      <p>
        Hi, I am a front-end developer specializing in react.js and javascript.
        What I like the most developed are tools and components designed to
        improve the productivity of front-line developers. Join me on linkedin
        so as not to miss any of my work. See you soon !! ^^
      </p>
      <p>
        <a
          href="https://app.assessfirst.com/_/profile/d53utubs-raphael-parodi"
          target="_blank"
        >
          SoftSkill profil
        </a>
      </p>
      <p>
        <a
          href="https://www.linkedin.com/in/raphael-parodi-a942ab1b0/"
          target="_blank"
        >
          linkedin profil
        </a>
      </p>
      <p>
        <a href="https://github.com/raficraft" target="_blank">
          Github
        </a>
      </p>

      <h2 id="my-other-package">My other package</h2>
      <h3 id="guidesjs">Guides.js</h3>
      <p>
        Guide.js is the first tool in a series of four. This will allow the
        front-end developer to improve their working comfort and productivity.
      </p>
      <p>
        Guide.js allows you to insert guides to change their thickness, color
        and position in order to easily align the elements of your page. This
        feature is directly inspired by the one that can be found in Photoshop.
        ^^
      </p>
      <p>
        The project is completely made from scratch and has no dependencies. And
        it will be the same for the next modules.
      </p>
      <p>
        <a
          href="https://www.npmjs.com/package/guides_js_by_raficraft"
          target="_blank"
        >
          NPM
        </a>
      </p>
      <p>
        <a href="https://flamboyant-saha-06f6cd.netlify.app/" target="_blank">
          Live demo
        </a>
      </p>
      <p>
        <a
          href="https://github.com/raficraft/guides_standAlone"
          target="_blank"
        >
          Github repository
        </a>
      </p>
    </>
  );
}

export default PopContent;
