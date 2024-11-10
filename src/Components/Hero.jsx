import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className="absolute inset-0 top-[120px] max-w-7xl mx-auto px-4 flex flex-row items-start gap-5">
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-[2px] sm:h-80 h-40 bg-gradient-to-b from-[#915EFF] to-transparent" />
        </div>

        <div>
          <h1 className="font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2">
            Hello there 👋{" "}
            <span className="text-[#915EFF]">
              <br className="sm:block hidden" />
              I&apos;m Sahabaz Khan
            </span>
          </h1>
          <p className="text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] mt-2">
            I build Frontend web apps with modern tools.
          </p>

          <div className="mt-8">
            <a
              href="/Sahabaz'sResume.pdf"
              className="bg-[#915EFF] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#784cd4] transition-colors"
              download
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-gray-300 flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-gray-300 mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
}
