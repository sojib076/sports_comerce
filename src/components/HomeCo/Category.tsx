
import bannerimageone from "@/assets/m1_slide_02.jpeg"
import bannerimagetwo from "@/assets/m1_banner_01.jpg"
import bannerimagethree from "@/assets/m1_slide_03.jpeg"
import { Link } from "react-router-dom"



const Category = () => {

 
    return (
        <div  data-aos="fade-up" className=" lg:my-0 lg:px-20  px-5 font-serif">
            <div className="  ">
                <h1 className="lg:text-5xl text-2xl font-extrabold mb-5  border-b-2 border-lime-500 w-fit pb-1">
                    Category
                </h1>
             
                <div className="grid lg:grid-cols-3 lg:gap-10 gap-5   lg:my-10">
                    
                    <div>
                    <Link to="/allproducts?category=Shoes">
                        <div className="relative rounded-sm  h-[200px] bg-cover bg-center shadow-2xl shadow-black hover:scale-110 transition-all" style={{ backgroundImage: `url(${bannerimagetwo})` }}>
                            <div className="absolute z-20 top-1/2 left-20 transform -translate-x-1/2 -translate-y-1/2">
                                <h5 className="text-left font-bold text-white text-2xl  font-sans"> Shoes</h5>
                            </div >
                        </div>
                        </Link>
                    </div>
                    <div>
                    <Link to="/allproducts?category=Boxing">
                        <div className="relative rounded-sm  h-[200px] bg-cover bg-center shadow-2xl shadow-black hover:scale-110 transition-all" style={{ backgroundImage: `url(${bannerimagethree})` }}>
                            <div className="absolute z-20 top-1/2 left-20 transform -translate-x-1/2 -translate-y-1/2">
                                <h5 className="text-left font-bold text-white text-2xl  font-sans">Boxing</h5>
                            </div >
                        </div>
                        </Link>
                    </div>
                    <div>
                    <Link to="/allproducts?category=Basketball">
                        <div className="relative rounded-sm  h-[200px] bg-cover bg-center shadow-2xl shadow-black hover:scale-110 transition-all" style={{ backgroundImage: `url(${bannerimageone})` }}>
                            <div className="absolute z-20 top-1/2 left-20 transform -translate-x-1/2 -translate-y-1/2">
                                <h5 className="text-left font-bold text-white text-2xl  font-sans">Basketball</h5>
                            </div >
                        </div>
                        </Link>
                    </div>
                   


                </div>

            </div>

        </div>
    );
};

export default Category;