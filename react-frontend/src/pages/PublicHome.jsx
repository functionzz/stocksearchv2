import citynightImage from '../assets/citynight.jpg';

const PublicHome = () => {
  return (
    <>
      <div
        className="hero min-h-screen"
        style={{
            backgroundImage: `url(${citynightImage})`,
          }}
      >
        <div className="hero-overlay bg-opacity-55"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-8xl text-white font-bold">Due Diligence, Anytime, Anywhere</h1>
            <p className="mb-5 text-white">
                Stocksearch provides all the resources you need to do in-depth analysis on
                your favorite securities. Sign up Today!
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>

      <div className="hero-overlay bg-opacity-60 min-h-screen p-[100px] min-w-[700px]">
        <div className="z-0 flex items-center justify-center max-w-[120rem] gap-4 p-4 text-center">
          <div className="max-w-md">
            <h1 className="text-6xl font-bold">
              Do your Due Diligence, Anytime, Anywhere
            </h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>

      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default PublicHome;
