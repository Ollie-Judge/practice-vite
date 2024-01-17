import { useState } from "react";
import "../style/mainText.css";

function MainText() {
  const colours = ["Red", "Green", "Blue", "Yellow"];

  return (
    <>
      <div id="mainText">
        <div>
          <p>Here is a section of text, this is number 1</p>
        </div>

        <div>
          <p>Here is a section of text, this is number 2</p>
        </div>

        <div>
          <p>Here is a section of text, this is number 2</p>
        </div>

        <div>
          <p>Here is a section of text, this is number 4</p>
        </div>

        <div>
          <p>Here is a section of text, this is number 5</p>
        </div>

        <div>
          <p>Here is a section of text, this is number 6</p>
        </div>

        <div>
          <p>Here is a section of text, this is number 7</p>
        </div>

        <div>
          <p>Here is a section of text, this is number 8</p>
        </div>

        <div>
          <p>Here is a section of text, this is number 9</p>
        </div>

        <div>
          <p>Here is a section of text, this is number 10</p>
        </div>

        <div>
          <p>Here is a section of text, this is number 11</p>
        </div>

        <div>
          <p>Here is a section of text, this is number 12</p>
        </div>

        <div>
          <h1>Animals: </h1>
          <ul>
            {colours.map((colour) => {
              return <li key={colour}>{colour}</li>;
            })}
          </ul>
        </div>
      </div>
    </>
  );
}

export default MainText;
