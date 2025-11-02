import "../styles/MainPage.css";


function Button({ path, classType, text }) {

  function handleClick() {
   window.location = {path}
  }

  return (
    <button className={classType} onClick={handleClick}>
      ► {text}
    </button>
  );
}

export default Button;