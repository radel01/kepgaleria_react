
import { useContext } from "react"
import { KattContext } from "../context/KattContext"

export default function KisKep(props){
    const {katt}=useContext(KattContext)
    function kattintas(){
        console.log(props.index)
        katt(props.index)
    }

    return(
        <div className='kiskep' onClick={()=>kattintas()}><img src="{props.kep.src}" alt="kep" /></div>
    )
}