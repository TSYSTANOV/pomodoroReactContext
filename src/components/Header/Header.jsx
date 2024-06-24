import imgLogo from "../../img/logo.svg";
function Header() {
  return (
    <div className="header">
      <h1 className="header__title">Помодоро</h1>
      <img src={imgLogo} alt="Логотип" />
    </div>
  );
}
export { Header };
