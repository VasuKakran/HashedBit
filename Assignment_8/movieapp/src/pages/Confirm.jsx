function Confirm() {
    function guidGenerator() {
        var S4 = function() {
           return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
        };
        return (S4()+"-"+S4()+"-"+S4());
    }

    const id  = guidGenerator();
    return (  
        <div className="confirm">
          <h5><u>YOUR SEAT IS CONFIRMED</u></h5>
          <label>YOUR ID : {id}</label>
          <label>SEAT NO : {Math.floor(Math.random()*100)}</label>
          <h5>THANK YOU !!!!</h5>
        </div>
    );
}

export default Confirm;