import { useRef, useState } from "react";
import style from "./game.module.css";
const Game = () => {
  let [count, setCount] = useState(0);
  let boxRef = useRef();
  let butRef =useRef()
  let [val1, setVal1] = useState("5");
  let [val2, setVal2] = useState("5");
  let [val3, setVal3] = useState("5");
  let [val4, setVal4] = useState("5");
  let [val5, setVal5] = useState("5");
  let [val6, setVal6] = useState("5");
  let [val7, setVal7] = useState("5");
  let [val8, setVal8] = useState("5");
  let [val9, setVal9] = useState("5");
  let [user, setUser] = useState(true);
  let [userName, setUserName] = useState("Player 1");
  let [play, setPlay] = useState(true);
  let click1 = (e) => {
    if (val1 == "5" && play == true) {
      print(e);
      setVal1(e.target.innerText);
      if (
        (e.target.innerText == val2 && e.target.innerText == val3) ||
        (e.target.innerText == val4 && e.target.innerText == val7) ||
        (e.target.innerText == val5 && e.target.innerText == val9)
      )
        check();
      else playing();
      setUser(!user);
    }
  };
  let click2 = (e) => {
    if (val2 == "5" && play == true) {
      print(e);
      setVal2(e.target.innerText);
      if (
        (val1 == e.target.innerText && e.target.innerText == val3) ||
        (e.target.innerText == val5 && e.target.innerText == val8)
      )
        check();
      else playing();
      setUser(!user);
    }
  };
  let click3 = (e) => {
    if (val3 == "5" && play == true) {
      print(e);
      setVal3(e.target.innerText);
      if (
        (val1 == val2 && val2 == e.target.innerText) ||
        (e.target.innerText == val6 && e.target.innerText == val9) ||
        (e.target.innerText == val5 && e.target.innerText == val7)
      )
        check();
      else playing();
      setUser(!user);
    }
  };
  let click4 = (e) => {
    if (val4 == "5" && play == true) {
      print(e);
      setVal4(e.target.innerText);
      if (
        (e.target.innerText == val5 && e.target.innerText == val6) ||
        (val1 == e.target.innerText && e.target.innerText == val7)
      )
        check();
      else playing();
      setUser(!user);
    }
  };
  let click5 = (e) => {
    if (val5 == "5" && play == true) {
      print(e);
      setVal5(e.target.innerText);
      if (
        (val4 == e.target.innerText && e.target.innerText == val6) ||
        (val2 == e.target.innerText && e.target.innerText == val8) ||
        (val1 == e.target.innerText && e.target.innerText == val9) ||
        (val3 == e.target.innerText && e.target.innerText == val7)
      )
        check();
      else playing();
      setUser(!user);
    }
  };
  let click6 = (e) => {
    if (val6 == "5" && play == true) {
      print(e);
      setVal6(e.target.innerText);
      if (
        (val4 == val5 && val5 == e.target.innerText) ||
        (val3 == e.target.innerText && val3 == val9)
      )
        check();
      else playing();
      setUser(!user);
    }
  };
  let click7 = (e) => {
    if (val7 == "5" && play == true) {
      print(e);
      setVal7(e.target.innerText);
      if (
        (e.target.innerText == val8 && val8 == val9) ||
        (val1 == val4 && val1 == e.target.innerText) ||
        (val3 == val5 && val3 == e.target.innerText)
      )
        check();
      else playing();
      setUser(!user);
    }
  };
  let click8 = (e) => {
    if (val8 == "5" && play == true) {
      print(e);
      setVal8(e.target.innerText);
      if (
        (val7 == e.target.innerText && val7 == val9) ||
        (val2 == val5 && val2 == e.target.innerText)
      )
        check();
      else playing();
      setUser(!user);
    }
  };
  let click9 = (e) => {
    if (val9 == "5" && play == true) {
      print(e);
      setVal9(e.target.innerText);
      if (
        (val7 == val8 && val7 == e.target.innerText) ||
        (val3 == val6 && val6 == e.target.innerText) ||
        (val1 == val5 && val5 == e.target.innerText)
      )
        check();
      else playing();
      setUser(!user);
    }
  };
  if (count === 9 && play == true) {
    boxRef.current.style.background = "grey";
    boxRef.current.innerText = "DRAW";
    boxRef.current.style.display = "flex";
    butRef.current.style.display="inline-block"
  }
  function print(e) {
    if (user == true) {
      e.target.innerText = "X";
      e.target.style.color="aqua"
    } else {
      e.target.innerText = "O";
    }
    setCount(count + 1);
  }
  let check = () => {
    setPlay(false);
    boxRef.current.style.background="green"
    boxRef.current.style.display = "flex";
    butRef.current.style.display="inline-block"
  };
  function playing() {
    if (user == true) {
      setUserName("Player 2");
    } else {
      setUserName("Player 1");
    }
  }
  let refresh = () => {
    window.location.reload();
  };
  return (
    <div id={style.page}>
      <h1>{userName}</h1>
      <table>
        <tr>
          <th onClick={click1}></th>
          <th onClick={click2}></th>
          <th onClick={click3}></th>
        </tr>
        <tr>
          <th onClick={click4}></th>
          <th onClick={click5}></th>
          <th onClick={click6}></th>
        </tr>
        <tr>
          <th onClick={click7}></th>
          <th onClick={click8}></th>
          <th onClick={click9}></th>
        </tr>
      </table>
      <div className={style.box} ref={boxRef}>{userName} WON!!!</div>
      <button ref={butRef} onClick={refresh}>Play Again</button>
    </div>
  );
};
export default Game;
