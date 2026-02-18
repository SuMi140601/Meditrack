function InputField({ type="text",name,placeholder,value,onChange})

// ({ fullname,gender,dateofbirth,bloodgroup,martitalstatus,address,insurancename,policynumber,poaname,poacontactnumber,previousdiseaseinformation,previousmedicationinformation,allergies,familymedicalhistory,existingmedicalcondition,currentmedicationprescribed,admissiondate,department,docterassigned,roomnumber,bednumber,note,onChange}) 
{
    return (
        <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full mb-4 p-2 border rounded"
        required
        />
    );
}
export default InputField;