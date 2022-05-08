function RenderizarTopo(props){
    return(
        <div class="usuario">
          <img src={props.imageuser} />
          {props.user}
        </div>
    )
  }
  const topoposts = [
    { user: "meowed", imageuser: "assets/img/meowed.svg"},
    { user: "barkec", imageuser: "assets/img/barked.svg"}
    
  ]
  

  export default function TopoPost(){
   
    const topopostComponents = topoposts.map(item => <RenderizarTopo user={item.user} imageuser={item.imageuser} />)
   
      return(
        <div class="topo">
          {topopostComponents}
        <div class="acoes">
          <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
      </div>
 
      )
  }