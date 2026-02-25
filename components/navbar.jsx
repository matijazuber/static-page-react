import reactLogo from "./images/reactjs-icon.svg"

function Navbar(){
  return(
    <>
      <header className="header">
        <nav className="nav">
        <img src={reactLogo} alt="react-logo" className="imageHeader"></img>
        <p className="paragraphHeader">ReactFacts</p>
        </nav>
      </header>
    </>
  )
}

export default Navbar