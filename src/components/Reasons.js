import SovTechLogo from "../images/sovtech-logo.png";
import reasonOneImg from "../images/reason-1.jpg";
import reasonTwoImg from "../images/reason-2-min.jpg";
import reasonThreeImg from "../images/reason-3-min.jpg";
import reasonFourImg from "../images/reason-4-min.jpg";


function Reasons ()
{
   return (
      <section id="reasons-section">
         <div className="d-lg-flex mt-5">
            <h2 className="me-lg-3 mb-0">
               Why I want to become a developer
            </h2>
            <span className="fs-3">
               @ SovTech
               <img className="img-fluid my-auto" src={SovTechLogo} alt="SovTech logo" width="23rem" height="100%"></img>
            </span>
         </div>

         <div id="reasons" className="row col-lg-10 mx-auto">
            {/* Left side */ }
            <div className="col-sm mt-5 col-lg-5 mx-auto">

               <div className="col reason-two" data-aos="fade-right">
                  <img src={reasonTwoImg} alt="" width="100%"></img>
                  <h5 className="mt-5">Project Variety</h5>
                  <p>
                     SovTech works with companies in multiple industries with different needs. So I really like the prospect of being exposed to different kind of projects instead of the same thing over and over.
                  </p>
               </div>

               <div className="col reason-four" data-aos="fade-right">
                  <img src={reasonFourImg} alt="" width="100%"></img>
                  <h5 className="mt-5">Annual FoosFest</h5>
                  <p>
                     I read that the company hosts foosbal tournaments. I think of myself as a worthy player and look forward to taking on the current champion. &#128540;
                  </p>
               </div>

            </div>

            {/* RIGHT side */ }
            <div className="col mt-5 col-lg-5 mx-auto">

               <div className="col text-lg-end reason-one" data-aos="fade-left">
                  <img src={reasonOneImg} alt="" width="100%"></img>
                  <h5 className="mt-5">Opportunity to grow</h5>
                  <p>
                     One aspect of the SovTech culture that stands out is how much learning appears to be valued, which is why I want to join the team.
                     I&#39;m committed to become a full-stack developer one day, and SovTech appears to be the place to do so.
                  </p>
               </div>

               <div className="col text-lg-end reason-three" data-aos="fade-left">
                  <img src={reasonThreeImg} alt="" width="100%"></img>
                  <h5 className="mt-5">The Tech Stack</h5>
                  <p>
                     Even though the future is uncertain, at the moment JS seems to be taking over. So it excites me knowing that SovTech embraces a stack that is in sync with the industry and possibly the future. &#9994;
                  </p>
               </div>

            </div>
         </div>
      </section>
   );
}

export default Reasons;
