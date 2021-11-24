function Header ()
{
   return (
      <header className="row pt-5 ">

         <h2 className="col-8 d-grid">
            Sandra Ntsoele
            <span className="fs-6">Hardworking. Overthinker</span>
         </h2>
         <div className="form-check form-switch col-4 d-grid">
            <span className="fs-6 d-none d-md-block text-end">Dark Mode</span>
            <input className="form-check-input ms-auto" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={DarkMode}/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault"></label>
         </div>

      </header>
   );
}

function DarkMode (props)
{
   const body = document.body;
   const darkTheme = "dark";
   const lightTheme = "light";
   let theme = localStorage.getItem("theme");

   if (theme === "light")
   {
      // set to light
      body.classList.remove(theme);
      body.classList.add(darkTheme);

      localStorage.setItem("theme", darkTheme);
   } else
   {
      body.classList.remove(theme);
      body.classList.add(lightTheme);

      localStorage.setItem("theme", lightTheme);
   }
}

export default Header;
