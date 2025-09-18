import Button from '../common/button/Button'
import './joinForm.css'

export default function JoinForm() {
  return (
 <section className="join section">
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-lg-10">
                  <div className="join__content">
                     <div className="text-center mb-4">
                        <h2 className="join__title">
                           Join our newsletter
                        </h2>
                        <p className="join__description">
                           Subscribe to our newsletter to be aware of
                           many things on discount, gifts, training
                           and much more. Just enter your email.
                        </p>
                     </div>
                     <form action="" className="join__form">
                        <div className="d-flex row ">
                           <div className="d-flex col-md-8  ">
                              <input type="email" placeholder="For latest update send mail" className="form-control join__input"/>
                           </div>
                           <div className=" col-md-4">
                             <button className="btn button join__button w-100">
                                 Subscribe <i className="ri-arrow-right-line"></i>
                              </button>
                           </div>
                        </div>
                     </form>
                  </div>
               </div>
            </div>
         </div>
      </section>
  )
}
