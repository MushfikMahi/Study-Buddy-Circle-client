import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="min-h-screen">
      <div className="min-h-screen flex flex-col gap-5 items-center justify-center">
        <h2 className="text-3xl font-bold">Oops!!!</h2>
        <img
          className="md:h-96"
          src="https://www.artzstudio.com/content/images/wordpress/2020/05/404-error-not-found-page-lost.png"
          alt="error"
        />
        <Link to={"/"} className="btn bg-red-500 text-white font-bold">
          Go back to home page
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;