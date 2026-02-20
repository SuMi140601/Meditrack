function MedicineCard({ med }) {
    return(
        <div className="bg-blue-200 rounded-2xl shadow-sm border border-gray-200 hover:shadow-2xl hover-translate-y-1 transition-duration-300 cursor-pointer p-3 flex flex-col">
            <img
            src={med.image}
            alt={med.drugName}
            className=" h-32 w-full object-contain mb-3"/>
            <h3 className=" font-semibold text-center">{med.drugName}</h3>
         <p className=" text-sm text-gray-500 text-center">{med.manufacturer}</p>
         <p className=" text-blue-600 font-semibold text-center">{med.price}</p>
        </div>
    );
};
export default MedicineCard;