function FotoPostada(props){
    return(

        <img src={props.fotopostadas} />

    )
  }
  const fotopostadas = [
    { fotopostada: "assets/img/gato-telefone.svg"},
    { fotopostada: "assets/img/dog.svg"},
    
  ]
  
  
  export default function Conteudo(){
   
    const fotopostadasComponents = fotopostadas.map(item =><FotoPostada fotopostada={item.fotopostada}  />)
   
      return(
        <div class="conteudo">
            {fotopostadasComponents}
        </div>
       
      )
  }