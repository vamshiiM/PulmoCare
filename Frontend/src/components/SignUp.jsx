import { useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";

export default function AuthPage() {
    const [isSignIn, setIsSignIn] = useState(true);
    const [form, setForm] = useState({ username: "", email: "", password: "" });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = () => {
        alert(`${isSignIn ? "Sign In" : "Sign Up"} with ${isSignIn ? "Email: " + form.email : "Username: " + form.username + ", Email: " + form.email}, Password: ${form.password}`);
    };

    return (
        <div className="flex items-center justify-center h-screen bg-gradient-to-r from-blue-400 via-green-300 to-teal-500 bg-cover bg-center">
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-gradient-to-br from-white via-gray-100 to-gray-300 shadow-2xl rounded-lg p-8 w-96 text-center border border-gray-300"
            >
                <motion.h2
                    key={isSignIn ? "signin" : "signup"}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-3xl font-bold text-gray-800 mb-6"
                >
                    {isSignIn ? "Welcome Back!" : "Create an Account"}
                </motion.h2>
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        handleSubmit();
                    }}
                    className="space-y-4"
                >
                    {!isSignIn && (
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <label className="block text-sm font-medium text-gray-700">Username</label>
                            <div className="relative">
                                <FontAwesomeIcon icon={faUser} className="absolute left-3 top-3 text-gray-500" />
                                <input
                                    type="text"
                                    name="username"
                                    value={form.username}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-10 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                />
                            </div>
                        </motion.div>
                    )}
                    <label className="block text-sm font-medium text-gray-700">Email</label>
                    <div className="relative">
                        <FontAwesomeIcon icon={faEnvelope} className="absolute left-3 top-3 text-gray-500" />
                        <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            required
                            className="w-full px-10 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>
                    <label className="block text-sm font-medium text-gray-700">Password</label>
                    <div className="relative">
                        <FontAwesomeIcon icon={faLock} className="absolute left-3 top-3 text-gray-500" />
                        <input
                            type="password"
                            name="password"
                            value={form.password}
                            onChange={handleChange}
                            required
                            className="w-full px-10 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
                    >
                        {isSignIn ? "Sign In" : "Sign Up"}
                    </motion.button>
                </form>
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                    className="mt-4 text-gray-600"
                >
                    {isSignIn ? "Don't have an account?" : "Already have an account?"}
                    <button
                        onClick={() => setIsSignIn(!isSignIn)}
                        className="text-blue-500 hover:underline ml-1"
                    >
                        {isSignIn ? "Sign Up" : "Sign In"}
                    </button>
                </motion.p>
            </motion.div>
        </div>
    );
}
