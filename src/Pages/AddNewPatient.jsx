import {useState} from "react";
// import{useNavigate} from "react-router-dom";
import InputField from "../Components/InputField.";


 function AddPatient({ patients, setPatients})
 {
   // const navigate = useNavigate();

 const [status,setStatus] = useState("");
//  .then(() => {
//    setStatus("success");
//    e.target.reset();
//    setTimeout(() => {
//       setStatus("");
//    },3000);
//  })
//  .catch(() =>{
//    setStatus("error");
//    setTimeout(() => {
//    setStatus("");
// },3000);
//  });


 const[formData, setformData] = useState({
    patientid: "",
    fullname:"",
    gender:"",
    dateofbirth: "",
    bloodgroup:"",
    martitalstatus:"",
    address:"",
    insurancename:"",
    policynumber:"",
    poaname:"",
    poacontactnumber:"",
    previousdiseaseinformation: "",
previousmedicationinformation: "",
allergies:"",
familymedicalhistory:"",
existingmedicalcondition:"",
currentmedicationprescribed:"",
admissiondate: "",
department:"",
docterassigned:"",
roomnumber:"",
bednumber:"",
note:""
 });

 const handleChange = (e) => {
    setformData({
        ...formData,[e.target.name]: e.target.value
    });
 };

 const handleSubmit = (e) => {
   e.preventDefault();

   setPatients([...patients,formData]);

   setStatus("success");
   setTimeout(() => {
      setStatus("");
   },3000);
   e.target.reset();

setformData({
   patientid: "", fullname:"",gender:"",dateofbirth: "",bloodgroup:"",martitalstatus:"",address:"",insurancename:"",policynumber:"",poaname:"",poacontactnumber:"",previousdiseaseinformation: "",
previousmedicationinformation: "",allergies:"",familymedicalhistory:"",
 existingmedicalcondition:"",currentmedicationprescribed:"",admissiondate: "",department:"",
docterassigned:"",roomnumber:"",bednumber:"",note:""
});
   // navigate("/visited");
 };



return (
   
   <div className="min-h-screen p-6 bg-gray-100">
{status === "success" && (
   <div className="bg-green-100 text-green-700 p-3 rounded mb-4">Message Sent Successfully ✅</div>
)}
{status === "error" && (
   <div className="bg-red-100 text-red-700 p-3 rounded mb-4">Failed to send message ❌</div>
)}


      <h2 className=" text-2xl font-bold mb-6 text-center">Add Patient</h2>
   
           <form
  onSubmit={handleSubmit}
  className="bg-blue-200 p-8 rounded-2xl shadow-xl max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6"
>

<InputField
  name="patientid"
  placeholder="Patient ID"
  value={formData.patientid}
  onChange={handleChange}
/>

<InputField
  name="fullname"
  placeholder="Full Name"
  value={formData.fullname}
  onChange={handleChange}
/>

<InputField
  name="gender"
  placeholder="Gender"
  value={formData.gender}
  onChange={handleChange}
/>

<InputField
  type="date"
  name="dateofbirth"
  placeholder="Date of Birth"
  value={formData.dateofbirth}
  onChange={handleChange}
/>

<InputField
  name="bloodgroup"
  placeholder="Blood Group"
  value={formData.bloodgroup}
  onChange={handleChange}
/>

<InputField
  name="maritalstatus"
  placeholder="Marital Status"
  value={formData.maritalstatus}
  onChange={handleChange}
/>

<InputField
  name="address"
  placeholder="Address"
  value={formData.address}
  onChange={handleChange}
/>
{/* <h2 className=" text-2xl font-bold mb-6 text-center">Insurane Information</h2> */}

<InputField
  name="insurancename"
  placeholder="Insurance Name"
  value={formData.insurancename}
  onChange={handleChange}
/>
<InputField
  name="policynumber"
  placeholder="Policy Number"
  value={formData.policynumber}
  onChange={handleChange}
/>
<InputField
  name="poaname"
  placeholder="POA Name"
  value={formData.poaname}
  onChange={handleChange}
/>
<InputField
  name="poacontactnumber"
  placeholder="POA Contact Number"
  value={formData.poacontactnumber}
  onChange={handleChange}
/>
<InputField
  name="previousdiseaseinformation"
  placeholder="Previous Disease Information"
  value={formData.previousdiseaseinformation}
  onChange={handleChange}
/>

<InputField
  name="previousmedicationinformation"
  placeholder="Previous Medication Information"
  value={formData.previousmedicationinformation}
  onChange={handleChange}
/>
<InputField
  name="allergies"
  placeholder="Allergies"
  value={formData.allergies}
  onChange={handleChange}
/>
<InputField
  name="familymedicalhistory"
  placeholder="Family Medicalh History"
  value={formData.familymedicalhistory}
  onChange={handleChange}
/>

<InputField
  name="existingmedicalcondition"
  placeholder="Existing Medical Condition"
  value={formData.existingmedicalcondition}
  onChange={handleChange}
/>

<InputField
  name="currentmedicationprescribed"
  placeholder="Current Medication Prescribed"
  value={formData.currentmedicationprescribed}
  onChange={handleChange}
/>

<InputField
  type="date"
  name="admissiondate"
  placeholder="Admission Date"
  value={formData.admissiondate}
  onChange={handleChange}
/>
<InputField
  name="department"
  placeholder="Department"
  value={formData.department}
  onChange={handleChange}
/>
<InputField
  name="docterassigned"
  placeholder="Docter Assigned"
  value={formData.docterassigned}
  onChange={handleChange}
/>
<InputField
  name="roomnumber"
  placeholder="Room Number"
  value={formData.roomnumber}
  onChange={handleChange}
/>
<InputField
  name="bednumber"
  placeholder="Bed Number"
  value={formData.bednumber}
  onChange={handleChange}
/>
<InputField
  name="note"
  placeholder="Note"
  value={formData.note}
  onChange={handleChange}
/>



<div className="md:col-span-2 text-center mt-6">
  <button
    type="submit"
    className="bg-blue-600 text-white px-8 py-3 rounded-xl hover:bg-green-500 transition"
  >
    Save Patient
  </button>
</div>

      </form>
   </div>

)
 }
 export default AddPatient;