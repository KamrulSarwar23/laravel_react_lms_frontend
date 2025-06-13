import { Link } from "react-router-dom";
import Header from "../common/Header";
import Footer from "../common/Footer";
import UserSidebar from "./UserSidebar";

const CreateCourse = () => {
  return (
    <>
      <Header />
      <section className="section-4">
        <div className="container">
          <div className="row">
            <div className="col-md-12 mt-5 mb-3">
              <div className="d-flex justify-content-between">
                <h2 className="h3 mb-0 pb-0">Create Course</h2>
                <Link
                  to="/account/my-courses/create"
                  className="btn btn-primary"
                >
                  Back
                </Link>
              </div>
            </div>
            <div className="col-lg-3 account-sidebar">
              <UserSidebar />
            </div>
            <div className="col-lg-9">
              <form>
                <div className="card border-0">
                  <div className="card-body">
                    <div className="row">
                      <div className="mb-3">
                        <label htmlFor="" className="form-label">
                          Title
                        </label>
                        <input
                          type="text"
                          placeholder="Title"
                          className="form-control"
                        />
                      </div>
                      <div>
                        <button className="btn btn-primary">Create</button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};
export default CreateCourse;
