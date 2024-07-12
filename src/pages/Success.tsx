import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";


const Success = () => {
    return (
        <div className="lg:p-20 py-20  flex items-center flex-col gap-5 ">
            <h1 className="text-center lg:text-7xl text-4xl ">
                Thanks For Shopping With Us
            </h1>
            <Link to={'/'}>
                <Button variant={"outline"} className="text-black">Go Home</Button>
            </Link>
        </div>
    );
};

export default Success;