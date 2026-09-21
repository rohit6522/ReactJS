export default function Wrapper({children,color}){
  return(
    <div style={{color:color,border:"5px solid Gray",width:"250px"}}>
      {children}
    </div>
  )
}