import SugestaoAcima from "./SugestaoAcima"
function Sugestao(props){
  return(
    <div class="sugestao">
    <div class="usuario">
      <img src={props.imagesuggesteduser} />
      <div class="texto">
        <div class="nome">{props.suggestuser}</div>
        <div class="razao">Segue você</div>
      </div>
    </div>

    <div class="seguir">Seguir</div>
  </div>
  )
}
const suggested = [
  {imagesuggesteduser: "assets/img/bad.vibes.memes.svg", suggestuser: "bad.vibes.memes" }, 
  {imagesuggesteduser: "assets/img/chibirdart.svg", suggestuser: "chibirdart" }, 
  {imagesuggesteduser: "assets/img/razoesparaacreditar.svg", suggestuser: "razoesparaacreditar" }, 
  {imagesuggesteduser: "assets/img/adorable_animals.svg", suggestuser: "adorable_animals" }, 
  {imagesuggesteduser: "assets/img/smallcutecats.svg", suggestuser: "smallcutecats" }, 
]

export default function Sidebar(){

  const suggestedComponents = suggested.map(item =><Sugestao suggestuser={item.suggestuser} imagesuggesteduser={item.imagesuggesteduser} />)
 
    return(
        <div class="sidebar">
        <SugestaoAcima />

        <div class="sugestoes">
          <div class="titulo">
            Sugestões para você
            <div>Ver tudo</div>
        </div>
          {suggestedComponents}
        </div>

        <div class="links">
          Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
        </div>

        <div class="copyright">
          © 2021 INSTAGRAM DO FACEBOOK
        </div>
      </div>
    )
}