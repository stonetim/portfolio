function Hero() {
    return (
      <section className="min-h-screen flex flex-col justify-center px-12 py-24">
        <div className="text-left mb-16">
          <p className="text-8xl font-black text-red uppercase tracking-tighter mb-2">
            Hi, my name is
          </p>
          <h1 className="text-8xl font-black text-soft-black uppercase tracking-widest leading-none">
            Tim Stone
          </h1>
        </div>
  
        <div className="text-right mb-16">
          <h2 className="text-7xl font-black text-soft-black uppercase tracking-wide leading-none">
            And I build
          </h2>
          <p className="text-7xl font-black text-red uppercase tracking-tighter">
            for the web
          </p>
        </div>
  
        <div className="text-left">
          <h3
            className="text-7xl font-black text-soft-black uppercase leading-none transition-colors duration-300 items-end"
          >
            <span>Check Em</span>
            <br />
            <span className="text-red">out</span>
          </h3>
        </div>
      </section>
    );
  }
  
  export default Hero;
