function TextoCurtida(props){
    return(
         
          <p>Curtido por <strong>{props.user}</strong> e <strong>outras {props.quantidade}</strong></p>
                
         
        
    )
  }
  
  const textocurtidas = [
    { imageuser: "assets/img/adorable_animals.svg", quantidade:"99.159 pessoas"},
    { imageuser: "assets/img/respondeai.svg", quantidade:"101.523 pessoas"}
   
  ]
  
  export default function TextoCurtidas(){
   
    const textocurtidasComponents = textocurtidas.map(item =><TextoCurtida imageuser={item.imageuser} quantidade={item.quantidade}/>)
   
      return(
        <div class="texto">
        {textocurtidasComponents}
        </div>
      )
  }