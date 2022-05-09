const iconesMobile= ["home", "search-outline","add-circle-outline", "heart-outline", "person-outline" ]
export default function Fundomobile(){
    return(
        <div class="fundo-mobile">
           {iconesMobile.map(item =><ion-icon name={item}></ion-icon>)}
        </div>
    )
}