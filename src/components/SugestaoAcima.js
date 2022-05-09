function Sugestaoup(props){
    return(
      <div class="usuario">
        <img src={props.imagesuggesteduser} />
        <div class="texto">
          <div class="nome">{props.suggestuser}</div>
          <div class="razao">Segue você</div>
        </div>
      </div>
  
    )
  }
  const suggested = [
    {imagesuggesteduser: "assets/img/bad.vibes.memes.svg", suggestuser: "bad.vibes.memes" }, 

  ]
  
  export default function SugestaoAcima(){
  
    const suggestedComponents = suggested.map(item =><Sugestaoup suggestuser={item.suggestuser} imagesuggesteduser={item.imagesuggesteduser} />)
   
      return(
        
        <div>{suggestedComponents}</div>
          
      )
  }