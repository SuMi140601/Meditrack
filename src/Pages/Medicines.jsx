import { useState } from "react";
import { medicines } from "../data/medicines";
import MedicineCard from "../Components/MedicineCards";

function Medicines() {

  const [search, setSearch] = useState("");

  const filtered = medicines.filter((m) =>
    m.drugName.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-4">

      <h2 className="text-2xl font-semibold mb-4">Medication Information</h2>

      <input
        type="text"
        placeholder="Search medicine..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border p-2 rounded w-full md:w-1/3 mb-6"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

        {filtered.slice(0, 100).map((med, index) => (
          <MedicineCard key={index} med={med} />
        ))}

      </div>

      {filtered.length === 0 && (
        <p className="mt-4 text-gray-500">No medicine found</p>
      )}

    </div>
  );
}

export default Medicines;