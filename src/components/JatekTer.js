import KisKep from "./Kiskep"



export default function Jatekter(props){


    return(
        <div className="Jatekter">
            {
                props.lista.map((elem,index)=>{
                    return (<KisKep adat = {elem} key={index} index={index}/>)
                })
            }
        </div>
    )
}