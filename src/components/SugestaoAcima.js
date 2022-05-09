function Sugestaoup(props){
    return(
      <div class="usuario">
        <img src={props.imagesuggesteduser} />
        <div class="texto">
              <strong>{props.suggestuser}</strong>
              {props.texto}
        </div>
      </div>
  
    )
  }
  const suggested = [
    {imagesuggesteduser: "assets/img/catanacomics.svg", suggestuser: "catanacomics", texto:"Catana" }, 

  ]
  
  export default function SugestaoAcima(){
  
    const suggestedComponents = suggested.map(item =><Sugestaoup suggestuser={item.suggestuser} imagesuggesteduser={item.imagesuggesteduser} texto={item.texto}/>)
   
      return(
    
        <>{suggestedComponents}</>
     
      )
  }