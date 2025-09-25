import React, { useState } from "react";
import useUserFlow from "../../hooks/useUser";
import { useSession, useUser } from "@supabase/auth-helpers-react";
import useNavigation from "../../hooks/useNavigate";

const Login = () => {
  const { signUpUser, signInUser } = useUserFlow();
  const { redirectToPage } = useNavigation();

  const [form, setForm] = useState({
    fullName: "",
    userName: "",
    email: "",
    password: "",
  });

  const user = useUser();
  const session = useSession();

  const [isLoginForm, setIsLoginForm] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const resetForm = () => {
    const payload = {
      fullName: "",
      userName: "",
      email: "",
      password: "",
    };

    setIsLoginForm(!isLoginForm);

    setForm(payload);
  };

  const onSignUp = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const payload = {
      fullName: form.fullName,
      email: form.email,
      password: form.password,
      userName: form.userName,
    }

    signUpUser(payload);
  };

  const onSignIn = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const payload = {
      email: form.email,
      password: form.password,
    };

    signInUser(payload);
    redirectToPage("/");
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
      <div className="bg-white shadow-xl rounded-2xl flex w-full max-w-5xl overflow-hidden">
        {/* Left Section */}
        <div className="flex-1 p-10 flex flex-col justify-center bg-gray-50">
          {/* Small icon */}
          <div className="w-4 h-4 rounded-sm bg-blue-600 mb-6"></div>

          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Let us help you run your freelance business.
          </h1>
          <p className="text-gray-500 mb-10">
            Our registration process is quick and easy, taking no more than 10
            minutes to complete.
          </p>

          {/* Testimonial */}
          <div className="bg-gray-800 text-white p-6 rounded-xl shadow">
            <p className="italic mb-4">
              "I'm impressed with the results I've seen since starting to use
              this product, I begin receiving clients and projects in the first
              week."
            </p>
            <div className="flex items-center gap-3">
              <img
                src="https://via.placeholder.com/40"
                alt="Jonas Kim"
                className="w-10 h-10 rounded-full"
              />
              <div>
                <p className="font-medium">Jonas Kim</p>
                <p className="text-sm text-gray-400">Product Designer</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex-1 p-10 flex flex-col justify-center">
          <h2 className="text-xl font-semibold mb-2">Get started</h2>
          <p className="text-gray-500 mb-6">Create your account now</p>

          {isLoginForm && (
            <form
              className="flex flex-col gap-5" onSubmit={onSignIn}
            >
              {/* Email */}
              <div>
                <label className="block text-sm mb-1 font-medium">Email</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="alex@example.com"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm mb-1 font-medium">Password</label>
                <div className="relative">
                  <input
                    type="password"
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                    placeholder="********"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 pr-20 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Sign Up
              </button>
            </form>
          )}

          {!isLoginForm && (
            <form className="flex flex-col gap-5" onSubmit={onSignUp}>
              {/* Full name */}
              <div>
                <label className="block text-sm mb-1 font-medium">
                  Full name
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={form.fullName}
                  onChange={handleChange}
                  placeholder="Alex Parkinson"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm mb-1 font-medium">
                  Username
                </label>
                <input
                  type="text"
                  name="userName"
                  value={form.userName}
                  onChange={handleChange}
                  placeholder="Alex Parkinson"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              {/* Email */}
              <div>
                <label className="block text-sm mb-1 font-medium">Email</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="alex@example.com"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm mb-1 font-medium">Password</label>
                <div className="relative">
                  <input
                    type="password"
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                    placeholder="********"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 pr-20 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <span className="absolute right-3 top-2 text-green-600 text-sm font-medium">
                    Strong!
                  </span>
                </div>
              </div>

              <button
                type="submit"
                className="bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Sign Up
              </button>
            </form>
          )}

          <p className="text-sm text-gray-500 mt-5">
            Have an account?{" "}
            <a onClick={resetForm} className="text-blue-600 hover:underline">
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
