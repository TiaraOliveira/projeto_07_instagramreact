function Post(props){
  return(
    <div class="post">
    <div class="topo">
      <div class="usuario">
        <img src={props.imageuser} />
        {props.user}
      </div>
      <div class="acoes">
        <ion-icon name="ellipsis-horizontal"></ion-icon>
      </div>
    </div>

    <div class="conteudo">
      <img src={props.imagepost} />
    </div>

    <div class="fundo">
      <div class="acoes">
        <div>
          <ion-icon name="heart-outline"></ion-icon>
          <ion-icon name="chatbubble-outline"></ion-icon>
          <ion-icon name="paper-plane-outline"></ion-icon>
        </div>
        <div>
          <ion-icon name="bookmark-outline"></ion-icon>
        </div>
      </div>

      <div class="curtidas">
        <img src="assets/img/respondeai.svg" />
        <div class="texto">
          Curtido por <strong>respondeai</strong> e <strong>outras 101.523 pessoas</strong>
        </div>
      </div>
    </div>
  </div>

  )
}
const posts = [
  { user: "meowed", imageuser: "assets/img/meowed.svg", imagepost:"assets/img/gato-telefone.svg"},
  { user: "barkec", imageuser: "assets/img/barked.svg", imagepost:"assets/img/dog.svg"},
  
]


export default function Posts(){
 
  const postComponents = posts.map(item =><Post user={item.user} imageuser={item.imageuser} imagepost={item.imagepost}/>)
 
    return(
        <div class="posts">
          {postComponents}
        <div class="post">
          <div class="topo">
            <div class="usuario">
              <img src="assets/img/barked.svg" />
              barked
            </div>
            <div class="acoes">
              <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>
          </div>

          <div class="conteudo">
            <img src="assets/img/dog.svg" />
          </div>

          <div class="fundo">
            <div class="acoes">
              <div>
                <ion-icon name="heart-outline"></ion-icon>
                <ion-icon name="chatbubble-outline"></ion-icon>
                <ion-icon name="paper-plane-outline"></ion-icon>
              </div>
              <div>
                <ion-icon name="bookmark-outline"></ion-icon>
              </div>
            </div>

            <div class="curtidas">
              <img src="assets/img/adorable_animals.svg" />
              <div class="texto">
                Curtido por <strong>adorable_animals</strong> e <strong>outras 99.159 pessoas</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}