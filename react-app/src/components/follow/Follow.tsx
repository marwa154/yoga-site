import "./follow.css"
export default function Follow() {
  return (
  <section className="follow section" id="follow">
            <div className="container">
                <div className="row ">
                    <div className="col-12 ">
                        <div className="follow__content-1">
                            <div className="follow__Text_Mobile">
                                <div className="follow__data text-center">
                                    <h2 className="follow__title">
                                        Follow Us On
                                        Instagram
                                        <div>#YOGA</div>
                                    </h2>

                                    <a href="" className="button follow__button">
                                        Follow <i className="ri-arrow-right-line"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="follow__content-1">
                            <div className="d-flex gap-4 align-items-center">
                                <div className="col-lg-4">
                                    <img src="assets/img/follow-yoga-1.png" className="follow__img-1 img-fluid"/>
                                </div>
                                <div className="col-lg-4 follow__Text">
                                    <div className="follow__data text-center">
                                        <h2 className=" follow__title">
                                            Follow Us On
                                            Instagram
                                            <div>#YOGA</div>
                                        </h2>
                                        <a href="" className="button follow__button">
                                            Follow <i className="ri-arrow-right-line"></i>
                                        </a>
                                    </div>
                                </div>

                                <div className="col-lg-4">
                                    <img src="assets/img/follow-yoga-2.png" className="follow__img-2 img-fluid"/>
                                </div>
                            </div>
                        </div>
                        <div className="follow__content-1">
                            <div className="d-flex flex-wrap justify-content-center align-items-center ">
                                <div className="col-lg-6 mb-4">
                                    <img src="assets/img/follow-yoga-3.png" className="follow__img-3 img-fluid"/>
                                </div>
                                <div className="col-lg-6">
                                    <img src="assets/img/follow-yoga-4.png" className="follow__img-4 img-fluid"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}
