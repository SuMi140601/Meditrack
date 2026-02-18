function Visited({ patients}) 
{
    return(
        <div>
            <h2> Visisted Patients</h2>
            {patients.map((p,index) => (
                <div key={index}>
                    <p>{p.fullname}</p> 
                    </div>
            ))}
        </div>
    )
}

export default Visited;