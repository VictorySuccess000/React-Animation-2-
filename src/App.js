import logo from "./logo.svg";
import "./App.css";
import menuIcon from "./menuIcon.jpg";
import message from "./message.jpg";
import pencil from "./pencil.png";

const menuClick = () => {
  document.querySelector(".menuIcon").classList.toggle("bigbtn");
  document.querySelector(".message").classList.toggle("itemHide");
  document.querySelector(".pencil").classList.toggle("itemHide");
};

const msgClick = () => {
  document.querySelector(".message").classList.toggle("activemsg");
};

const pclClick = () => {
  document.querySelector(".pencil").classList.toggle("penbgchange");
};
const bgchange = () => {
  document.querySelector(".gh").classList.toggle("bgcl");
};

function App() {
  return (
    <div className="App">
      <div className="menuIcon">
        <div className="test" onClick={menuClick}>
          <span className="testin"></span>
        </div>
        <div className="toplayout">
          <span className="testimg" onClick={menuClick}>
            <img className="menuImg" src={menuIcon} alt="" />
          </span>
          <span className="message itemHide" onClick={msgClick}>
            <div className="msgImg gh">
              <img className="msgImg" src={message} alt="" onClick={bgchange} />
            </div>
          </span>
        </div>
        <div className="pencil itemHide" onClick={pclClick}>
          <img className="pclImg" src={pencil} alt="" />
          &nbsp; Compose
        </div>
      </div>
    </div>
  );
}

export default App;
