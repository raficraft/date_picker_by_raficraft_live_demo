import { DatePicker } from "datepicker_by_raficraft";
import React, { useState } from "react";
import "./App.css";
import "./sass/index.scss";

function App() {
  const [date, setDate] = useState({
    start: 1950,
    end: 2050,
  });

  const debounce = (callback, delay) => {
    let timer;
    return function () {
      let args = arguments;
      let context = this;
      clearTimeout(timer);
      timer = setTimeout(function () {
        callback.apply(context, args);
      }, delay);
    };
  };

  const changeDate = debounce((e) => {
    console.log("change_date", e.target.value);
    console.log("change_date", e.target.dataset.input);
    const target = e.target.dataset.input;
    let newStart = e.target.value;
    let newEnd = e.target.value;

    target === "start" && setDate((s) => ({ ...s, start: newStart }));

    target === "end" && setDate((s) => ({ ...s, end: newEnd }));
  }, 500);

  const checkDate = (e) => {
    console.log("change_date", e.target.value);
    console.log("change_date", e.target.dataset.input);
    const target = e.target.dataset.input;

    if (target === "start") {
      let newStart = e.target.value > 2022 ? 2022 : e.target.value;
      e.target.value = newStart;
      setDate((s) => ({ ...s, start: newStart }));
    }
    if (target === "end") {
      let newEnd = e.target.value < 2022 ? 2022 : e.target.value;
      e.target.value = newEnd;
      setDate((s) => ({ ...s, end: newEnd }));
    }
  };

  console.log("render");
  return (
    <>
      <section className="demo">
        <header className="change_picker">
          <div className="demo_input">
            <div className="custom_input">
              <input
                type="number"
                name="end"
                id="change_end"
                placeholder="Start of calendar"
                min="0"
                max="2022"
                onKeyUp={(e) => {
                  changeDate(e);
                }}
                onBlur={(e) => {
                  checkDate(e);
                }}
                data-input="start"
              />
            </div>

            <div className="custom_input">
              <input
                type="number"
                name="end"
                id="change_end"
                placeholder="End of calendar"
                onKeyUp={(e) => {
                  changeDate(e);
                }}
                onBlur={(e) => {
                  checkDate(e);
                }}
                data-input="end"
                min="2022"
                max="4000"
              />
            </div>
          </div>
        </header>
        <hr />
        <div className="demo_picker_list">
          <div className="picker_list">
            <DatePicker
              className="custom_input"
              start={date.start}
              end={date.end}
              language="es"
              label="Espagnol picker"
              forHtml="es_picker"
              key="es"
            ></DatePicker>

            <DatePicker
              start={date.start}
              end={date.end}
              language="gb"
              label="English picker"
              forHtml="en_picker"
              key="gb"
            ></DatePicker>

            <DatePicker
              start={date.start}
              end={date.end}
              language="us"
              label="American picker"
              forHtml="us_picker"
              key="us"
            ></DatePicker>
          </div>
          <div className="picker_list">
            <DatePicker
              start={date.start}
              end={date.end}
              language="fr"
              label="French picker"
              forHtml="fr_picker"
              key="fr"
            ></DatePicker>

            <DatePicker
              start={date.start}
              end={date.end}
              language="it"
              label="Italian picker"
              forHtml="it_picker"
              key="it"
            ></DatePicker>

            <DatePicker
              start={date.start}
              end={date.end}
              language="de"
              label="German picker"
              forHtml="de_picker"
              key="de"
            ></DatePicker>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
