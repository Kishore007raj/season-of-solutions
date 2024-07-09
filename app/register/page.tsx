// app/page.tsx
import RegistrationForm from "@/components/registration/RegistrationForm";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


export default function register() {
  return (
    <div className="relative min-h-screen bg-black p-10">
      {/* Background Gradient */}
      <div className="absolute z-50">
        <Navbar />
      </div>
      <div className="absolute inset-0 z-0 bg-gradient-to-bl from-black to-transparent via-blue-800 opacity-50" />
      {/* Heading */}

      <h1 className="bg-clip-text bg-gradient-to-r from-[#FEFEFE] to-[#8B8B8B] font-righteous absolute md:text-nowrap  top-40 left-1/2 transform -translate-x-1/2 text-5xl font-bold text-gray-300 z-10">
        SEASON OF SOLUTIONS
      </h1>

      {/* Centered Registration Form */}
      <div className="flex mt-10 md:mt-0 items-center justify-center min-h-screen">
        <RegistrationForm className="absolute z-10" />
      </div>
      <Footer />
    </div>
  );
}
