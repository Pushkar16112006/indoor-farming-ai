"use client";

import { useState } from "react";
import { supabase } from "../../lib/supabase";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    
    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) setMessage(error.message);
    else setMessage("Check your email for the confirmation link!");
    
    setLoading(false);
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) setMessage(error.message);
    else {
      setMessage("Logged in successfully!");
      // window.location.href = "/dashboard"; 
    }
    
    setLoading(false);
  };

  return (
    <div className="w-full max-w-md p-8 space-y-6 bg-slate-900 rounded-2xl shadow-2xl border border-slate-800 relative z-10">
      <h2 className="text-2xl font-bold text-center text-white">Welcome Back</h2>
      <p className="text-center text-slate-400 text-sm">Sign in to manage your crops</p>
      
      <form className="space-y-5">
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-1">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 text-white placeholder-slate-600 transition-colors"
            placeholder="farmer@example.com"
            required
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-1">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 text-white placeholder-slate-600 transition-colors"
            placeholder="••••••••"
            required
          />
        </div>

        {message && <p className="text-sm text-center text-green-400 bg-green-400/10 py-2 rounded-lg">{message}</p>}

        <div className="flex flex-col gap-3 pt-2">
          <button
            onClick={handleLogin}
            disabled={loading}
            className="w-full px-4 py-3 text-slate-950 font-bold bg-green-500 rounded-lg hover:bg-green-400 transition-colors disabled:bg-slate-700 disabled:text-slate-500"
          >
            {loading ? "Loading..." : "Login"}
          </button>
          <button
            onClick={handleSignUp}
            disabled={loading}
            className="w-full px-4 py-3 text-white font-medium bg-slate-800 rounded-lg hover:bg-slate-700 border border-slate-700 transition-colors disabled:bg-slate-800"
          >
            Create Account
          </button>
        </div>
      </form>
    </div>
  );
}