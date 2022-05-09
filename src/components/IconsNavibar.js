  const iconsTopo = [
    "paper-plane-outline", "compass-outline","heart-outline", "person-outline", 
]
  
export default function IconsNavibar(){

   
      return(
        <div class="icones">
            {iconsTopo.map(item =><ion-icon name={item}></ion-icon>)}
      </div>

      )
  }