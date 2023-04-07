
export const Footer = () => {
  return (
    <>
      <footer className="ht-footer">
        <div className="container">
          <div className="flex-parent-ft">
            <div className="flex-child-ft item1">
              <a href="index-2.html"><img className="logo" src="/images/icono-def.webp" alt="" /></a>
              <p>Buscando oportunidades laborales<br />
               Desarrollador Full Stack</p>
              <p>Call me: <a href="#">(+52) 55 84 01 00 25</a></p>
            </div>
            <div className="flex-child-ft item2">
              <h4>Technologies</h4>
              <ul>
                <li><a href="https://es.reactjs.org/" target="_blank" >React</a></li>
                <li><a href="https://getbootstrap.com/" target="_blank" >bootstrap</a></li>
                <li><a href="https://styled-components.com/" target="_blank" >styled-Components</a></li>
                <li><a href="https://formik.org/" target="_blank" >Formik</a></li>
                <li><a href="https://redux-toolkit.js.org/" target="_blank" >Redux Toolkit</a></li>
              </ul>
            </div>
            <div className="flex-child-ft item3">
              <h4>Legal</h4>
              <ul>
                <li><a href="#">Terms of Use</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Security</a></li>
              </ul>
            </div>
            <div className="flex-child-ft item4">
              <h4>My Social Media</h4>
              <ul>
                <li><a href="https://www.instagram.com/aldrich_code45" target="_blank" >Instagram</a></li>
                <li><a href="https://twitter.com/aldrich_coder" target="_blank" >Twitter</a></li>
                <li><a href="https://www.linkedin.com/in/aldrich-flores-vazquez-446b7b223/" target="_blank" >Linkedin</a></li>
                <li><a href="https://github.com/ALDRICHCODE45" target="_blank" >Github</a></li>
              </ul>
            </div>
            <div className="flex-child-ft item5">
              <h4>Newsletter</h4>
              <p>Subscribe to our newsletter system now <br /> to get latest news from us.</p>
              <form action="#">
                <input type="text" placeholder="Enter your email..." />
              </form>
              <a href="#" className="btn">Subscribe now <i className="ion-ios-arrow-forward"></i></a>
            </div>
          </div>
        </div>
        <div className="ft-copyright">
          <div className="ft-left">
            <p><a target="_blank" href="https://www.templateshub.net">Templates Hub</a></p>
          </div>
          <div className="backtotop">
            <p><a href="#" id="back-to-top">Back to top  <i className="ion-ios-arrow-thin-up"></i></a></p>
          </div>
        </div>
      </footer>
    </>
  )
}