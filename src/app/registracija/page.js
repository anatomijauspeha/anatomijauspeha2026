"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function RegistrationForm() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const formData = {
      firstname: e.target.firstname.value,
      lastname: e.target.lastname.value,
      email: e.target.email.value,
    };

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      setSuccess(true);

      setTimeout(() => {
        router.push("/");
      }, 3000);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col md:flex-row h-auto w-full bg-black relative">
      <div className="relative w-full md:w-5/12 h-auto md:min-h-screen flex items-center justify-center overflow-hidden py-12">
        <Image
          src="/logo.jpg"
          alt="Anatomija Uspeha logo"
          fill
          className="hidden md:block object-cover brightness-30"
        />

        <h1 className="relative z-10 px-8 md:px-16 text-[#51b957] text-4xl md:text-6xl lg:text-8xl font-bold text-center tracking-wide leading-tight">
          PRIDRUŽI NAM SE!
        </h1>
      </div>

      <div className="relative w-full md:w-7/12 flex flex-col items-center justify-center py-16 md:py-32 px-6 md:px-20 lg:px-32 overflow-hidden">
        <Image
          src="/3_2019.png"
          alt="Anatomija Uspeha logo"
          fill
          className="object-cover brightness-30 blur-xs"
        />

        <form
          onSubmit={handleSubmit}
          className="relative z-10 flex flex-col gap-12 w-full max-w-lg"
        >
          <input
            required
            name="firstname"
            type="text"
            placeholder="Ime"
            className="placeholder:text-[#51b957] tracking-widest rounded-xl border text-[#51b957] w-full px-5 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-[#51b957] transition"
          />

          <input
            required
            name="lastname"
            type="text"
            placeholder="Prezime"
            className="placeholder:text-[#51b957] tracking-widest rounded-xl border text-[#51b957] w-full px-5 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-[#51b957] transition"
          />

          <input
            required
            name="email"
            type="email"
            placeholder="Email adresa"
            className="placeholder:text-[#51b957] tracking-widest rounded-xl border text-[#51b957] w-full px-5 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-[#51b957] transition"
          />

          <div className="flex justify-center">
            <button
              type="submit"
              disabled={loading}
              className="w-full md:w-[60%] py-3 mt-12 rounded-2xl bg-[#51b957] hover:bg-[#3b913f] text-white font-medium tracking-widest transition cursor-pointer disabled:opacity-50"
            >
              {loading ? "Slanje..." : "PRIJAVI SE"}
            </button>
          </div>
        </form>
      </div>

      {(success || error) && (
        <div className="fixed inset-0 bg-black/20 backdrop-blur-md flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-8 text-center max-w-md w-full shadow-2xl">
            {success && (
              <>
                <h2 className="text-2xl font-bold text-[#51b957]">
                  Uspešna prijava! 🎉
                </h2>
                <p className="mt-4 text-gray-600">
                  Bićete preusmereni na početnu stranicu...
                </p>
              </>
            )}

            {error && (
              <h2 className="text-2xl font-bold text-[#51b957]">{error}</h2>
            )}

            <button
              onClick={() => {
                setError("");
                setSuccess(false);
              }}
              className="mt-6 px-6 py-2 bg-[#51b957] text-white rounded-xl"
            >
              Zatvori
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
