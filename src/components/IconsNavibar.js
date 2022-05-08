function IconsTopo(props){
    return(
        <ion-icon name={props.icon}></ion-icon>
        
)
  }
  const iconsTopo = [
    {icon: "paper-plane-outline" }, 
    {icon: "compass-outline"},
    {icon: "heart-outline" }, 
    {icon: "person-outline"}, 
]
  
export default function Icones(){
  
    const IconsTopoComponents = iconsTopo.map(item =><IconsTopo IconsTopo={item.icon}  />)
   
      return(
        <div class="icones">
            {IconsTopoComponents}
      </div>

      )
  }