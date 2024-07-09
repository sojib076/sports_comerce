

import { useEffect } from "react";


const Petdetails = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const data = {
    name: "Dog",
    description: "<p> This is a dog and it is very cute and friendly. It is a very good pet to have. </p>",
  };
  





  return (
    <>
      <div className="grid lg:grid-cols-2 lg:p-10 overflow-hidden ">
        <div className="flex  flex-col-reverse justify-evenly sticky">
          <div className="grid lg:grid-flow-col  grid-cols-3 mt-5 p-2 ">
            
            
          </div>
       
        </div>
        <div>
          <div className=" w-[95%]  lg:mt-[5%]  mt-10 p-5 lg:p-0">
            <h1 className=" lg:text-2xl text-xl font-semibold text-gray-800">
              Pet Name : {data?.name}
            </h1>
            <h1 className="my-2 font-bold"> Description : </h1>

            <div dangerouslySetInnerHTML={{ __html: data?.description }}></div>

            <div className="mt-6">
              <button className="lg:w-[50%] bg-yellow-500 custom-button   font-bold  rounded hover:bg-yellow-600" 
           >
                Apply Now for Adoption
              </button>
            </div>
          </div>
        </div>
      </div>


    </>
  );
};

export default Petdetails;