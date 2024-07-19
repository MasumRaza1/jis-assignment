import React from "react";
import "../Styles/sall.css";

const CalltoAction = () => {
  return (
    <>
      <section className="space-bottom">
        <div className="call-to-action">
          <div className="container fixed-width-md-up">
            <div className="root">
              <div className="card paper">
                <div className="row align-items-center mb-0">
                  <div className="col-md-8 pa-0">
                    <h4 className="use-text-title2 pb-2">
                      Ready to get started ?
                    </h4>
                    <p className="use-text-subtitle2">
                      Pellentesque ac bibendum tortor. Nulla eget lobortis
                      lacus.
                    </p>
                  </div>
                  <div className="col-md-4 pa-0">
                    <div className="d-flex align-items-center justify-content-end">
                      <a
                        className="waves-effect btn button"
                        href="contact.html"
                      >
                        contact us
                        <i className="material-icons right-icon">send</i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CalltoAction;
