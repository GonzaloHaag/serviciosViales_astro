/**Aca ya escribo codigo de preact, como si estaria en react */
import { useEffect } from "preact/hooks";
import { useProgressiveNumber } from "../hooks/useProgressiveNumber"

export const CounterUp = ({ initial,final,duration,decimals } : { initial:number,final:number,duration?:number,decimals?:number }) => {

    const [count,setCount] = useProgressiveNumber(initial,duration,decimals);

    useEffect(() => {
        setCount(final);
    },[]);
    return <span>{count}</span>
}