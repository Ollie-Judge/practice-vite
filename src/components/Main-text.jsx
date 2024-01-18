import "../style/mainText.css";

function MainText() {
  const colours = ["Red", "Green", "Blue", "Yellow"];

  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  return (
    <div id="mainText">
      {numbers.map((number) => (
        <div className="sectionText" key={number.toString()}>
          <p>Here is a section of text, this is number {number}</p>
        </div>
      ))}

      <div id="animalsColourDiv">
        <h1>Animals: </h1>
        <ul>
          {colours.map((colour) => {
            return <li key={colour}>{colour}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default MainText;
