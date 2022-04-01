import React from "react";
import "./Task.css";
import { useHistory } from "react-router-dom";


const Task = () => {
    const history = useHistory();

    const capital =()=>{
        history.push('/capital');
    }

  return (
    <div>
      <h1>My Task</h1>
      <section class="row firstRow">
        <div class="col-md-4">
          <button className="taskBtn">Calculator</button>
          <br />
          <br />
          <button onClick={capital} className="taskBtn">Capital</button>
        </div>
{/* calclator////////// */}
        <div class="col-md-7 calculator">
          <form name="form">
            <div class="display">
              <input
                id="display"
                type="text"
                placeholder="0"
                name="displayResult"
              />
            </div>
            <div class="buttons">
              <div class="row calRow">
                <input
                  type="button"
                  name="b7"
                  value="7"
                  onClick="calcNumbers(b7.value)"
                />
                <input
                  type="button"
                  name="b8"
                  value="8"
                  onClick="calcNumbers(b8.value)"
                />
                <input
                  type="button"
                  name="b9"
                  value="9"
                  onClick="calcNumbers(b9.value)"
                />
                <input
                  type="button"
                  name="addb"
                  value="+"
                  onClick="calcNumbers(addb.value)"
                />
              </div>

              <div class="row">
                <input
                  type="button"
                  name="b4"
                  value="4"
                  onClick="calcNumbers(b4.value)"
                />
                <input
                  type="button"
                  name="b5"
                  value="5"
                  onClick="calcNumbers(b5.value)"
                />
                <input
                  type="button"
                  name="b6"
                  value="6"
                  onClick="calcNumbers(b6.value)"
                />
                <input
                  type="button"
                  name="subb"
                  value="-"
                  onClick="calcNumbers(subb.value)"
                />
              </div>

              <div class="row calRow">
                <input
                  type="button"
                  name="b1"
                  value="1"
                  onClick="calcNumbers(b1.value)"
                />
                <input
                  type="button"
                  name="b2"
                  value="2"
                  onClick="calcNumbers(b2.value)"
                />
                <input
                  type="button"
                  name="b3"
                  value="3"
                  onClick="calcNumbers(b3.value)"
                />
                <input
                  type="button"
                  name="mulb"
                  value="*"
                  onClick="calcNumbers(mulb.value)"
                />
              </div>

              <div class="row calRow">
                <input
                  type="button"
                  name="b0"
                  value="0"
                  onClick="calcNumbers(b0.value)"
                />
                <input
                  type="button"
                  name="potb"
                  value="."
                  onClick="calcNumbers(potb.value)"
                />
                <input
                  type="button"
                  name="divb"
                  value="/"
                  onClick="calcNumbers(divb.value)"
                />
                <input
                  type="button"
                  class="red"
                  value="="
                  onClick="displayResult.value=eval(displayResult.value)"
                />
              </div>
            </div>
          </form>
        </div>
      </section>
      <script src="./cacculation.js"></script>
    </div>
  );
};

export default Task;
