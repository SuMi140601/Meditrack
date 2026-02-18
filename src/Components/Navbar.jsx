// MediTrack - Patient Disease & Medical Record CRUD Appliction.
function Navbar() {
    return (
<div className=" relative z-10 p-6  max-w-7xlmx-auto" >
<div className="flex justify-between items-center mb-10">
    <h1 className="text-2xl font-bold text-blue-600">MediTrack</h1>
    <div className="hidden md:flex space-x-8 text-gray-700 font font-medium">
        <span className="hover:text-blue-600 cursor-pointer">Dashboard</span>
<span className="hover:text-blue-600 cursor-pointer">Patients</span>
<span className="hover:text-blue-600 cursor-pointer">History</span>
    </div>
    

</div>
</div>
    ) 
}

export default Navbar;