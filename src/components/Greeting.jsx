function Greeting (props) {
    return(
        <div style={{backgroundColor:"black", Color:"white" , padding:20}}>
         <h1>
            hello, {props.name}{ props.surname}
            </h1>
            <h2>this message was not there</h2>
    
    </div>
    );
}

export default Greeting