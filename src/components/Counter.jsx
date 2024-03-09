import { useState, useEffect } from "react";

const Counter = () => {
 const CounterUp = ({ num, size }) => {
  const [count, setCount] = useState(0);
  const speed = 3000;
  const newSpeed = Math.ceil(speed / num);

  useEffect(() => {
   const interval = setInterval(() => {
    setCount((prev) => prev + 1);
   }, newSpeed);
   if (count === num) {
    clearInterval(interval);
   }
   return () => clearInterval(interval);
  }, [count]);
  return <h2 className={size}>{count}+</h2>;
 };
 return (
  <section className=" mt-28 md:mt-0 ">
   <div className="mx-4 lg:mx-0">
    <div className="mx-auto container flex flex-wrap">
     <div className=" w-full relative">
      <div className=" overflow-hidden isolate mt-10 lg:mt-0 bg-[#1E2229] py-14 lg:py-0 relative flex flex-col justify-center rounded-3xl">
      <svg viewBox="0 0 1024 1024" className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0" aria-hidden="true">
          <circle cx="512" cy="512" r="512" fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
          <defs>
            <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
              <stop stopColor="#5F1013" />
              <stop offset="1" stopColor="#A2131B" />
            </radialGradient>
          </defs>
        </svg>
       
       <div className=" py-0 lg:py-20 flex flex-col lg:flex-row lg:justify-center gap-10 lg:gap-40">
        <div className="text-white text-center z-10">
         <CounterUp size={"text-6xl "} num={200} />
         <div className=" text-lg mt-4">Clientes satisfechos</div>
        </div>
        <div className="text-white text-center z-10">
         <CounterUp size={"text-6xl "} num={500} />
         <div className=" text-lg mt-4">Proyectos</div>
        </div>
        <div className=" text-white text-center z-10">
         <CounterUp size={"text-6xl text-center"} num={100} />
         <div className=" text-lg mt-4">Productos</div>
        </div>
        <div className="text-white text-center z-10">
         <CounterUp size={"text-6xl"} num={300} />
         <div className=" text-lg mt-4">Soportes</div>
        </div>
       </div>
      </div>
     </div>
    </div>
   </div>
  </section>
 );
};

export default Counter;
