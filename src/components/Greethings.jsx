import "./Greethings.css";
const Greethings=()=>{
    let currantTime= new Date();
    let greet="";
    currantTime=currantTime.getHours();

    let style={};
     if(currantTime>=1 && currantTime<12){
        greet="Good Mornning";
        style.color='green';
    }
    if(currantTime>=12 && currantTime<16){
        greet="Good Evening";
        style.color='yellow'
    }
    if(currantTime>=16 && currantTime<24){
        greet="Good Night";
        style.color='black'
    }

    


    return(<div className="divb">
        <h1>hello sir <span style={style}>{greet}</span></h1>
        </div>
    );
};
export default Greethings;