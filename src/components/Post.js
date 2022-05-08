import TopoPost from "./TopoPost"
import Fundo from "./Fundo"
import Conteudo from "./Conteudo"

export default function Post(){
    return(
        <div class="post">
            <TopoPost />
            <Conteudo />
            <Fundo />
        </div>
    )
}