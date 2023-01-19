import './style.scss';

export default function Card(props){

  let date= new Date(props.date_gmt)
  let day= date.getDay()
  const mlist = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
  let month= mlist[date.getMonth()]
  let year=date.getFullYear()

    return(
    <div class="col-4">
        <div class="p-card--highlighted">
            <h6>CLOUD AND SERVER</h6>
            <div class="p-card__content">
                <hr class="u-sv1"/>
                <img class="p-card__image" src={props.featured_media}/>
                <h4 class="article-title">
                    <a href={props.link}>{props.title.rendered}</a>
                </h4>
                <i>  By <a href={props._embedded.author[0].link}>{props._embedded.author[0].name}</a> on {day} {month} {year}</i>
                <hr class="u-sv1"/>
                <p>{props.type}</p>
            </div>
        </div>
    </div>

    )
}