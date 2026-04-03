export default function Hero() {
  return (
    <>
      <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center  rounded-3 border shadow-lg">
        <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
          <h1 className="display-4 fw-bold lh-1 text-body-emphasis">
            Atomic Habits : Perubahan kecil memberikan hasil yang luas biasa
          </h1>
          <p className="lead">
            Panduan praktis membentuk kebiasaan kecil yang konsisten demi hasil
            besar dan perubahan nyata. Demi hasil besar dan perubahan nyata
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
    </>
  );
}
