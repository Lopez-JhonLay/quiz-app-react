import React from "react";
import { Link } from "react-router-dom";

function Welcome() {
  return (
    <section className="bg-gray-50 -mt-2">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
        <div className="mx-auto max-w-xl text-center">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            Test Your Knowledge.
            <strong className="font-extrabold text-red-700 sm:block">
              {" "}
              Challenge Yourself!{" "}
            </strong>
          </h1>

          <p className="mt-4 sm:text-xl/relaxed">
            Ready to test your knowledge? Dive into our quiz and see how much
            you know about the world. Each question is a new challenge!
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/quiz"
              className="block w-full rounded bg-red-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
              href="/quiz"
            >
              Start Quiz
            </Link>

            <a
              className="block w-full rounded px-12 py-3 text-sm font-medium text-red-600 shadow hover:text-red-700 focus:outline-none focus:ring active:text-red-500 sm:w-auto"
              href="#"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Welcome;
