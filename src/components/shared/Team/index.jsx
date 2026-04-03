export default function Team() {
  return (
    <>
      <section className="py-5 bg-light">
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
    </>
  );
}
