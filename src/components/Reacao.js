function Acaosugeridas(props){
    return(
          <ion-icon name="heart-outline"></ion-icon>
           
        )
  }
  const reacoes = [
    { iconreacao: "heart-outline"},
    { iconreacao: "chatbubble-outline"},
    { iconreacao: "paper-plane-outline"},
]
  
  
  export default function Reacao(){
   
    const reacoesComponents = reacoes.map(item =><Acaosugeridas iconreacao={item.iconreacao}  />)
   
      return(
      
        <div>
          {reacoesComponents}
        </div>
      
      )
  }