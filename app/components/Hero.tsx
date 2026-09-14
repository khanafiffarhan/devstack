import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative overflow-hidden  text-grey-800">


      <div className="relative mx-auto flex min-h-screen max-w-7xl items-center justify-between gap-10 px-6 lg:px-8">
        <div className="max-w-xl">


          <h1 className="text-4xl font-black leading-tight tracking-tight md:text-5xl lg:text-6xl">
            Build Your Ideal
            <span className="block bg-brand-gradient bg-clip-text text-transparent">
              Development Stack
            </span>
          </h1>

          <p className="mt-6 max-w-lg text-lg text-slate-300">
            Explore frontend, backend, database, and tooling options,
compare them side by side, and put together the stack that fits your
next project.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button className="rounded-full bg-brand-gradient px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:scale-[1.02]">
              Explore Technologies
            </button>
            <button className="rounded-full border border-slate-700 bg-slate-900/70 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:border-slate-500 hover:bg-slate-800">
              Learn More
            </button>
          </div>


        </div>

        <div className="relative flex w-full max-w-2xl items-center justify-center">
          <div className="absolute h-80 w-80 rounded-full " />
          <div className="relative rounded-3xl ">
           <Image src="/banner-stack.png" alt="Logo" width={350} height={350} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
