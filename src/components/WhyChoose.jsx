import React, { useEffect, useState } from "react";
import { PlusCircleIcon, MinusCircleIcon } from "@heroicons/react/24/outline";
import { whyus } from "../config/data.json";

const AccordionItem = ({title,content, isOpen, onClick})=>{
  return(
    <>
      <ul className=" px-5 py-3 rounded-xl mb-8 relative border-solid border-[#a4abb6] border-x-[1px] border-t-[1px] border-b-2" >
          <li>
            <button
            aria-label="show-info"
            className=" absolute top-[13px] right-5"
            onClick={onClick}
            >
            {isOpen ? (
            <MinusCircleIcon className="h-6 w-6" />
            ) : (
            <PlusCircleIcon className="h-6 w-6" />
            )}
            </button>
            <div className="pr-6 ">
              <h3 className=" text-xl font-bold">{title}</h3>
              {isOpen  && <p className="text-lg leading-8 text-gray-300 mt-4">{content}</p>}
            </div>
          </li>
      </ul>
    </>
  )
}

const WhyChoose=()=>{    
    const [openIndex, setOpenIndex] = useState(null)

    const handleToggle = (index) => {       
        setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
    };

      const handleScroll = () => {
        const image1 = document.querySelector('.image1');
        if (window.scrollY > 2450) {
          let scroll = window.scrollY - 2450;
          let translateY =
            -30 +
            (scroll / (document.documentElement.scrollHeight - window.innerHeight - 2450)) * 60;
          let scale =
            1.3 - (scroll / (document.documentElement.scrollHeight - window.innerHeight - 2450)) * 0.3;
          image1.style.transform = `translate3d(0px, ${translateY}%, 0px) scale3d(${scale}, ${scale}, 1)`;
        }
      };

      useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, [handleScroll]);
    
    return (       
    <section className="container mx-auto mt-40">     
        <div className="grid grid-cols-1 md:grid-cols-2  mx-4 md:mx-0  gap-x-20 gap-y-20">
            <div className=" w-full h-full md:w-4/5 md:h-4/5 mr-0 md:mr-auto rounded-3xl overflow-hidden mb-8 md:mb-0 relative">
                <img className=" image1  w-full h-full object-cover" src="/whyus.webp" alt="" style={{ transformStyle: 'preserve-3d' }}  width={800}/>
            </div>  
            <div className="text-white space-y-10">                    
                <article className=" space-y-12 ">
                    <div className=" space-y-4">
                        <span className=" text-xl before:inline-block before:w-12 before:h-[2px] before:mr-[10px] before:mb-[5px] before:bg-white">¿Por qué elegirnos?</span>
                        <h1 className=" text-3xl md:text-5xl">Cuidamos de su negocio como el nuestro</h1>
                        <p className="text-xl leading-8 text-gray-300">Nos especializamos en Outsourcing IT, cubrimos desde el análisis hasta el servicio pos implementación </p>                                
                    </div>
                    <div>
                    {whyus.map((item, index) => (                     
                      <AccordionItem
                        key={index}
                        title={item.title}
                        content={item.description}
                        isOpen={openIndex === index}
                        onClick={() => handleToggle(index)}
                      />                                
                    ))}

                    </div>
                    
                </article>
            </div>
        </div>
   
    </section>
    )
}
export default WhyChoose

