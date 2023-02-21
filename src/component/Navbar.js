function Navbar({details}){
    return (
        <>
           <div className="card" style={{width: '18rem'}}>
            <img src={details.picture?.large} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{details.phone}</h5>
                <p className="card-text">{details.email}</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
            </div>
        </>
    )
}

export default Navbar
