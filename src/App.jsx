import { useState } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState(16);
  const [valueBilling, setValueBilling] = useState(0)

  const handleChange = (e) => {
    setValue(e.target.value);
    setValueBilling(e.target.value)
  };
  const handleChangeBilling = (e) => {
    setValueBilling(e.target.value)
  };
  return (
    <div className="App">
      <div className="container">
        <div className="title">
          <h1>Simple, traffic-based pricing</h1>
          <p>Sign-up for our 30-day trial. No credit card required.</p>
        </div>
        <div className="card">
          <div className="pageview">
            <p>100K PAGEVIEWS</p>
            <div className="price">
              <span>${value}.00</span>
              <p>/month</p>
            </div>
          </div>
          <div className="range">
            <input
              type="range"
              min="0"
              max="32"
              value={value}
              onChange={handleChange}
              className="custom-range"
              style={{
                background: ` linear-gradient(to right,hsl(174, 77%, 80%) ${
                  (value * 100) / 32
                }%, #ddd ${(value * 100) / 32}%)`,
              }}
            />
          </div>
          <div className="billing">
            <p>Monthly Billing</p>

            <div className="range-billing">
             <input type="range" min="0" max="1" value={valueBilling} onChange={handleChangeBilling} className="custom-billing"/>
            </div>

            <p>Yearly Billing</p>
            <span></span>
          </div>
          <span className="linha"></span>
          <div className="info">
            <ul>
              <li>
                <img src="/images/icon-check.svg" alt="check" /> Unlimited
                websites
              </li>
              <li>
                {" "}
                <img src="/images/icon-check.svg" alt="check" />
                100% data ownership
              </li>
              <li>
                {" "}
                <img src="/images/icon-check.svg" alt="check" />
                Email reports
              </li>
            </ul>
            <button>Start my trial</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
