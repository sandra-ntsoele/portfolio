import React, { useEffect, useRef } from 'react';

export default function Header ()
{
   // Functions used to control the dark mode toggler
   var DarkMode = 
   {
      DarkModeCheck : function (toggler)
      {
         let theme = localStorage.getItem("theme");
      
         if(theme)
         {
            if (theme === "dark")
            {
               document.body.classList.add("dark");
               toggler.current.setAttribute("checked", true);
            }else
            {
               document.body.classList.remove("dark");
            }
         }else
         {
            localStorage.setItem("theme", "light");
         }
      },
      DarkModeToggler : function ()
      {
         const body = document.body;
         const darkTheme = "dark";
         const lightTheme = "light";
         let theme = localStorage.getItem("theme");

         if (theme === "light")
         {
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
   }

   var inputRef = useRef();

   useEffect(() => {
      DarkMode.DarkModeCheck(inputRef);
   })

   
   return (
      <header className="row pt-5 ">

         <h2 className="col-8 d-grid">
            Sandra Ntsoele
            <span className="fs-6">Hardworking. Overthinker</span>
         </h2>
         <div className="form-check form-switch col-4 d-grid">
            <span className="fs-6 d-none d-md-block text-end">Dark Mode</span>
            <input ref={inputRef} className="form-check-input ms-auto" type="checkbox" role="switch" id="DarkModeToggler" onClick={DarkMode.DarkModeToggler}/>            
            <label className="form-check-label" htmlFor="DarkModeToggler"></label>
         </div>
      </header>
   );
}