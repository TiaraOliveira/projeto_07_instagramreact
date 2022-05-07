function Story(props){
  return(
    <div class="story">
      <div class="imagem">
        <img src={props.image} />
      </div>
      <div class="usuario">
        {props.usuario}
      </div>
    </div>

  )
}
const stories = [
  { usuario: "9gag", image: "assets/img/9gag.svg"},
  { usuario: "meowed", image: "assets/img/meowed.svg"},
  { usuario: "barked", image: "assets/img/barked.svg"},
  { usuario: "nathanwpylestrangeplanet", image: "assets/img/nathanwpylestrangeplanet.svg"},
  { usuario: "wawawicomics", image: "assets/img/wawawicomics.svg"},
  { usuario: "respondeai", image: "assets/img/respondeai.svg"},
  { usuario: "filomoderna", image: "assets/img/filomoderna.svg"},
  { usuario: "memeriagourmet", image: "assets/img/memeriagourmet.svg"}
]
export default function Stories(){

  const storiesComponents = stories.map(item =><Story usuario={item.usuario} image={item.image}/>)
    return(
        <div class="stories">
          {storiesComponents}
        <div class="setinha">
          <ion-icon name="chevron-forward-circle"></ion-icon>
        </div>
      </div>

    )
}