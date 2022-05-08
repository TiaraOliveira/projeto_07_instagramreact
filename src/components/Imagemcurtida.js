function ImagemCurtida(props){
    return(
         
              <img src={props.imageuser} />
        
    )
  }
  
  const imagenscurtidas = [
    { user: "adorable_animals"},
    { user: "respondeai"}
   
  ]
  
  export default function ImagemCurtidas(){
   
    const ImagemcurtidasComponents = imagenscurtidas.map(item =><ImagemCurtida user={item.user} />)
   
      return(
        <div>
          {ImagemcurtidasComponents}
        </div>
      )
  }