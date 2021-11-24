function Header () {
   return (
      <header className="row pt-5 ">

         <h2 className="col-8 d-grid">
            Sandra Ntsoele
            <span className="fs-6">Hardworking. Overthinker</span>
         </h2>
         <div className="form-check form-switch col-4 d-grid">
            <span className="fs-6 d-none d-md-block text-end">Dark Mode</span>
            <input className="form-check-input ms-auto" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault"></label>
         </div>

      </header>
   );
}

export default Header;
