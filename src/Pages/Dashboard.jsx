
function Dashboard() {
    return(

        <div className=" relative z-10 p-6  max-w-7xlmx-auto" >
        <div className="relative min-h-screen bg-gradient-to-br from-blue-200 via-white to-pink-300 overflow-hidden">
            {/* right */}
           <div className="absolute top-20 right-20 w-60 h-60 bg-pink-300 rounded-full blur-3xl opacity-40">
            </div> 
            {/* left */}
             <div className="absolute bottom-10 left-10 w-72 bg-blue-400 rounded-full blur-3xl opacity-30"></div>
           {/* <div className="absolute top-40 left-1/3 w-6 h-6 bg-pink-400 rounded-full backdrop-opacity-10"></div> */}
          <div className="mb-8">
        <h2 className="text-3xl font-semibold text-gray-800"> Welcome</h2>
        <h3 className="text-xl font-semibold text-gray-800 underline"> MediTrack - A Patient Disease & Medical Record CRUD Appliction. </h3>
        <p> Manage patient records efficiently</p>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white/70 backdrop-blur-md p-6 rounded-2xl shadow-lg">
        <h3 className="text-gray-500">Active Patients</h3>
        <p className="text-3xl font-bold text-blue-600 mt-2">24</p>
        </div>

<div className="bg-white/70 backdrop-blur-md p-6 rounded-2xl shadow-lg">
        <h3 className="text-gray-500">Discharged</h3>
        <p className="text-3xl font-bold text-blue-600 mt-2">8</p>
        </div>

<div className="bg-white/70 backdrop-blur-md p-6 rounded-2xl shadow-lg">
        <h3 className="text-gray-500">Total Visits</h3>
        <p className="text-3xl font-bold text-blue-600 mt-2">56</p>
        </div>

        





    </div>

</div>

        </div>
    )
}
export default Dashboard;