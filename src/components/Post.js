const reacoes = ["heart-outline","chatbubble-outline","paper-plane-outline"]

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
                {reacoes.map(item =><ion-icon name={item}></ion-icon>)}
          </div>
          <div>
            <ion-icon name="bookmark-outline"></ion-icon>
          </div>
        </div>
        <div class="curtidas">
            <img src={props.imageuserCurtida} />
            <div class="texto">
            Curtido por <strong>{props.userCurtida}</strong> e <strong>outras {props.quantidadeCurtida} pessoas</strong>
          </div>
        </div>
      </div>
    </div>
    )
  }
  
  const posts = [
    { user: "meowed", imageuser: "assets/img/meowed.svg", imagepost:"assets/img/gato-telefone.svg" ,userCurtida: "adorable_animals", imageuserCurtida: "assets/img/adorable_animals.svg", quantidadeCurtida:"99.159"},
    { user: "barkec", imageuser: "assets/img/barked.svg", imagepost:"assets/img/dog.svg",userCurtida: "respondeai", imageuserCurtida: "assets/img/respondeai.svg", quantidadeCurtida:"101.523"},
]
   
  export default function Posts(){
  
    const postComponents = posts.map(item =><Post user={item.user} imageuser={item.imageuser} imagepost={item.imagepost} userCurtida={item.userCurtida} imageuserCurtida={item.imageuserCurtida} quantidadeCurtida={item.quantidadeCurtida}/>)
    
      return(
          <div class="posts">
            {postComponents}
          </div>
      )
  } 