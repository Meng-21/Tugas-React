function App() {
  return (
    <>
      {/* header */}
      <div className="container">
        <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
          <div className="col-md-3 mb-2 mb-md-0">
            <a
              href="/"
              className="d-inline-flex align-items-center link-body-emphasis text-decoration-none"
            >
              <i
                className="fa-solid fa-book fa-2xl"
                style={{ color: "green" }}
              ></i>

              <span className="ms-2 fs-4">bookstore</span>
            </a>
          </div>
          <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
            <li>
              <a href="#home" className="nav-link px-2 text-success ">
                Home
              </a>
            </li>
            <li>
              <a href="#book" className="nav-link px-2 text-success">
                Book
              </a>
            </li>
            <li>
              <a href="#team" className="nav-link px-2 text-success">
                Team
              </a>
            </li>
            <li>
              <a href="#contact" className="nav-link px-2 text-success">
                Contact
              </a>
            </li>
            <li></li>
          </ul>
          <div className="col-md-3 text-end">
            <button type="button" className="btn btn-outline-success me-2">
              Login
            </button>
            <button type="button" className="btn btn-success">
              Register
            </button>
          </div>
        </header>

        {/* content Herous */}
        <div
          id="home"
          className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center  rounded-3 border shadow-lg"
        >
          <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
            <h1 className="display-4 fw-bold lh-1 text-body-emphasis">
              Atomic Habits : Perubahan kecil memberikan hasil yang luas biasa
            </h1>
            <p className="lead">
              Panduan praktis membentuk kebiasaan kecil yang konsisten demi
              hasil besar dan perubahan nyata. Demi hasil besar dan perubahan
              nyata
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
              <button
                type="button"
                className="btn btn-success btn-lg px-4 me-md-2 fw-bold"
              >
                Buy Now
              </button>
              <button
                type="button"
                className="btn btn-outline-secondary btn-lg px-4"
              >
                Detail
              </button>
            </div>
          </div>
          <div className="col-lg-3 offset-lg-1 p-3 text-center overflow-hidden shadow">
            <img
              className="rounded-lg-3"
              src="https://images.squarespace-cdn.com/content/v1/5fff7f8ae90dd00ceac27c8d/1619639838137-X57C4WZNLMB14W43DAWW/IMG_3682.jpg"
              alt=""
              width="200"
            ></img>
          </div>
        </div>

        {/* Mmembuat produk list */}
        <section className="py-5 text-center container">
          <div className="row py-lg-5">
            <div className="col-lg-6 col-md-8 mx-auto">
              <h1 className="fw-light">Best Seller</h1>
              <p className="lead text-body-secondary">
                Something short and leading about the collection below—its
                contents, the creator, etc. Make it short and sweet, but not too
                short so folks don’t simply skip over it entirely.
              </p>
              <p>
                <a href="#" className="btn btn-success my-2 m-2">
                  View
                </a>
                <a href="#" className="btn btn-secondary my-2">
                  Other Book
                </a>
              </p>
            </div>
          </div>
        </section>
        <div id="book" className="album py-5 bg-body-tertiary">
          <div className="container">
            <h2 className="mb-4 text-center">Book</h2>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
              <div className="col">
                <div className="card shadow-sm">
                  <img
                    className="rounded-lg-3"
                    src="https://picsum.photos/300/200"
                    alt=""
                    width="100%"
                  ></img>
                  <div className="card-body">
                    <p className="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          View
                        </button>
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          Edit
                        </button>
                      </div>
                      <small className="text-body-secondary">9 mins</small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card shadow-sm">
                  <img
                    className="rounded-lg-3"
                    src="https://picsum.photos/300/200"
                    alt=""
                    width="100%"
                  ></img>

                  <div className="card-body">
                    <p className="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          View
                        </button>
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          Edit
                        </button>
                      </div>
                      <small className="text-body-secondary">9 mins</small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card shadow-sm">
                  <img
                    className="rounded-lg-3"
                    src="https://picsum.photos/300/200"
                    alt=""
                    width="100%"
                  ></img>

                  <div className="card-body">
                    <p className="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          View
                        </button>
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          Edit
                        </button>
                      </div>
                      <small className="text-body-secondary">9 mins</small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card shadow-sm">
                  <img
                    className="rounded-lg-3"
                    src="https://picsum.photos/300/200"
                    alt=""
                    width="100%"
                  ></img>

                  <div className="card-body">
                    <p className="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          View
                        </button>
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          Edit
                        </button>
                      </div>
                      <small className="text-body-secondary">9 mins</small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card shadow-sm">
                  <img
                    className="rounded-lg-3"
                    src="https://picsum.photos/300/200"
                    alt=""
                    width="100%"
                  ></img>

                  <div className="card-body">
                    <p className="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          View
                        </button>
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          Edit
                        </button>
                      </div>
                      <small className="text-body-secondary">9 mins</small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card shadow-sm">
                  <img
                    className="rounded-lg-3"
                    src="https://picsum.photos/300/200"
                    alt=""
                    width="100%"
                  ></img>
                  <div className="card-body">
                    <p className="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          View
                        </button>
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          Edit
                        </button>
                      </div>
                      <small className="text-body-secondary">9 mins</small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card shadow-sm">
                  <img
                    className="rounded-lg-3"
                    src="https://picsum.photos/300/200"
                    alt=""
                    width="100%"
                  ></img>
                  <div className="card-body">
                    <p className="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          View
                        </button>
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          Edit
                        </button>
                      </div>
                      <small className="text-body-secondary">9 mins</small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card shadow-sm">
                  <img
                    className="rounded-lg-3"
                    src="https://picsum.photos/300/200"
                    alt=""
                    width="100%"
                  ></img>
                  <div className="card-body">
                    <p className="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          View
                        </button>
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          Edit
                        </button>
                      </div>
                      <small className="text-body-secondary">9 mins</small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card shadow-sm">
                  <img
                    className="rounded-lg-3"
                    src="https://picsum.photos/300/200"
                    alt=""
                    width="100%"
                  ></img>
                  <div className="card-body">
                    <p className="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          View
                        </button>
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          Edit
                        </button>
                      </div>
                      <small className="text-body-secondary">9 mins</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* team */}
        <section id="team" className="py-5 bg-light">
          <div className="container">
            <h2 className="text-center mb-4">Team</h2>
            <div className="row row-cols-1 row-cols-md-3 g-4">
              <div className="col">
                <div className="card h-100 text-center">
                  <img
                    src="https://cdn.brandfetch.io/idgzBMD4aG/w/301/h/301/theme/dark/icon.jpeg?c=1bxid64Mup7aczewSAYMX&t=1746745045982"
                    className="card-img-top rounded-circle mx-auto mt-3"
                    style={{ width: "120px" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">NF Academy</h5>
                    <p className="card-text">Mitra</p>
                  </div>
                </div>
              </div>
              {/* <!-- ulang untuk anggota lain --> */}
              <div className="col">
                <div className="card h-100 text-center">
                  <img
                    src="https://th.bing.com/th/id/OIP.rmivCIWO71A9gkSV_-Lf_QHaGl?w=212&h=187&c=7&r=0&o=7&dpr=1.2&pid=1.7&rm=3"
                    className="card-img-top rounded-circle mx-auto mt-3"
                    style={{ width: "120px" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">Budi</h5>
                    <p className="card-text">Developer</p>
                  </div>
                </div>
              </div>
              {/* ulang anggota lain */}
              <div className="col">
                <div className="card h-100 text-center">
                  <img
                    src="https://tse3.mm.bing.net/th/id/OIP.dq_Tt9IiQS949qQ18OEmBwHaH3?rs=1&pid=ImgDetMain&o=7&rm=3"
                    className="card-img-top rounded-circle mx-auto mt-3"
                    style={{ width: "120px" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">Siti</h5>
                    <p className="card-text">Customer service</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* kontak */}
        <section id="contact" className="py-5 ">
          <div className="container text-center">
            <h2 className="mb-4">Contact</h2>
            <p>📧 Email: book@store.com</p>
            <p>📞 Phone: +62-812-567</p>
            <p>📍 Address: Jl. kenanga, jonggol , DI Yogyakarta</p>
          </div>
        </section>

        {/* footer */}
        <div className="container" style={{ backgroundColor: "#99D689" }}>
          <footer className="py-3 my-4">
            <ul className="nav justify-content-center border-bottom pb-3 mb-3">
              <li className="nav-item">
                <a href="#" className="nav-link px-2 text-body-secondary">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link px-2 text-body-secondary">
                  Book
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link px-2 text-body-secondary">
                  Team
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link px-2 text-body-secondary">
                  Contact
                </a>
              </li>
            </ul>
            <p className="text-center text-body-secondary">© 2026 NFAcademy</p>
          </footer>
        </div>
      </div>
    </>
  );
}

export default App;
