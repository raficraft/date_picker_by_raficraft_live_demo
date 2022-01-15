import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Pop from "./components/Pop";
import guides from "guides_js_by_raficraft";

ReactDOM.render(
  <React.StrictMode>
    <header className="header">
      <h1>Date Picker by Raficraft</h1>
    </header>
    <section className="main">
      <App />
    </section>
    <Pop></Pop>

    <div className="social_icon--content">
      <a
        href="https://www.linkedin.com/in/raphael-parodi-a942ab1b0/"
        target="_blank"
        alt="My Linkedin profil"
      ></a>
      <a
        href="https://inexpensive-chipmunk-220.notion.site/Hard-Skills-Soft-Skills-88964160557a441f9608d75c711ff06b"
        target="_blank"
        alt="My profil in Notion"
      ></a>
      <a
        href="https://github.com/raficraft/GUIDES_JS"
        target="_blank"
        alt="Github repositories of this project"
      ></a>
      <a
        href="https://app.assessfirst.com/_/profile/d53utubs-raphael-parodi"
        target="_blank"
        alt="Soft skill profil"
      ></a>
      <a
        href="https://www.npmjs.com/package/datepicker_by_raficraft"
        target="_blank"
        alt="Package NPM"
      ></a>
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
