import { Link } from "react-router-dom";
 import{useNavigate} from "react-router-dom";

function Dashboard() {

    const navigate = useNavigate();
    return(

        // < className=" relative z-10 p-6  max-w-7xlmx-auto" >

        <div className="relative min-h-screen bg-gradient-to-br from-blue-500 via-green-300 to-pink-500 p-8">
            {/* right */}
           {/* <div className="absolute top-20 right-20 w-60 h-60 bg-pink-300 rounded-full blur-3xl opacity-40">
            </div>  */}

            {/* left */}
             {/* <div className="absolute bottom-10 left-10 w-72 bg-blue-400 rounded-full blur-3xl opacity-30"></div> */}
           {/* <div className="absolute top-40 left-1/3 w-6 h-6 bg-pink-400 rounded-full backdrop-opacity-10"></div> */}
          
        <h1 className="text-4xl font-bold text-center text-gray-950 mb-10"> MediTrack</h1>
        <p className="text-center font-semibold text-gray-900 mb-12"> A Patient Disease & Medical Record CRUD Appliction </p>
        
    <br></br>

<div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"> 
    {/* My Add Patients */}
    <Link to="/add"> 
        <div className="bg-white p-6 rounded-2xl hover: shadow-2xl transition duration-300 cursor-pointer">
        <h2 className="text-xl font-semibold text-gray-600 mb-2">Add New Patient</h2>
         <p className=" text-blue-500">Manage patient records efficiently</p>
        </div>
         </Link>

{/*  My view Patients List */}
<Link to ="/visited">
<div className="bg-white p-6 rounded-2xl hover: shadow-2xl transition duration-300 cursor-pointer">
        <h2 className="text-xl font-semibold text-gray-600 mb-2">View Patients Lists</h2>
        <p className=" text-blue-500">See all admitted patients</p>
        </div>
        </Link>

{/* full history visit */}
<div className="bg-white p-6 rounded-2xl hover: shadow-2xl transition duration-300 cursor-pointer">
        <h2 className="text-xl font-semibold text-gray-600 mb-2">History</h2>
        <p className=" text-blue-500">View patient history</p>
        </div> 

<div onClick={() => navigate("/medicines")}
 className="bg-white p-6 rounded-2xl hover: shadow-2xl transition duration-300 cursor-pointer">
        <h2 className="text-xl font-semibold text-gray-600 mb-2">Medicine Search</h2>
        <p className=" text-blue-500 font-bold">Inventory data for Pharmacy Store</p>
    
        </div>

        <div className="bg-white p-6 rounded-2xl hover: shadow-2xl transition duration-300 cursor-pointer">
        <h2 className="text-xl font-semibold text-gray-600 mb-2">Disease Information</h2>
        {/* <p className="text-3xl font-bold text-blue-600 mt-2">56</p> */}
        </div>


    </div>

</div>

    )
}
export default Dashboard;