import { Link } from "react-router-dom";

import "./estilos.css"

const filmes = [
	{
        id: 1,
        title: "2067",
        posterURL: "https://m.media-amazon.com/images/M/MV5BZDJmODA5NGEtZmU1ZC00NDRkLWJkYmEtYmUxYzY0NmY4MTYwXkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_QL75_UY562_CR7,0,380,562_.jpg",
        overview: "A lowly utility worker is called to the future by a mysterious radio signal, he must leave his dying wife to embark on a journey that will force him to face his deepest fears in an attempt to change the fabric of reality and save humankind from its greatest environmental crisis yet.",
        releaseDate: "2020-10-01T00:00:00.000Z",
    },
    {
        id: 2,
        title: "Welcome to Sudden Death",
        posterURL: "https://image.tmdb.org/t/p/w500/elZ6JCzSEvFOq4gNjNeZsnRFsvj.jpg",
        overview: "Jesse Freeman is a former special forces officer and explosives expert now working a regular job as a security guard in a state-of-the-art basketball arena. Trouble erupts when a tech-savvy cadre of terrorists kidnap the team's owner and Jesse's daughter during opening night. Facing a ticking clock and impossible odds, it's up to Jesse to not only save them but also a full house of fans in this highly charged action thriller.",
        releaseDate: "2020-09-29T00:00:00.000Z",
    },

    {
        id: 3,
        title: "Welcome to Sudden Death",
        posterURL: "https://image.tmdb.org/t/p/w500/elZ6JCzSEvFOq4gNjNeZsnRFsvj.jpg",
        overview: "Jesse Freeman is a former special forces officer and explosives expert now working a regular job as a security guard in a state-of-the-art basketball arena. Trouble erupts when a tech-savvy cadre of terrorists kidnap the team's owner and Jesse's daughter during opening night. Facing a ticking clock and impossible odds, it's up to Jesse to not only save them but also a full house of fans in this highly charged action thriller.",
        releaseDate: "2020-09-29T00:00:00.000Z",
    },
    {
        id: 4,
        title: "Welcome to Sudden Death",
        posterURL: "https://image.tmdb.org/t/p/w500/elZ6JCzSEvFOq4gNjNeZsnRFsvj.jpg",
        overview: "Jesse Freeman is a former special forces officer and explosives expert now working a regular job as a security guard in a state-of-the-art basketball arena. Trouble erupts when a tech-savvy cadre of terrorists kidnap the team's owner and Jesse's daughter during opening night. Facing a ticking clock and impossible odds, it's up to Jesse to not only save them but also a full house of fans in this highly charged action thriller.",
        releaseDate: "2020-09-29T00:00:00.000Z",
    },
    {
        id: 5,
        title: "Welcome to Sudden Death",
        posterURL: "https://image.tmdb.org/t/p/w500/elZ6JCzSEvFOq4gNjNeZsnRFsvj.jpg",
        overview: "Jesse Freeman is a former special forces officer and explosives expert now working a regular job as a security guard in a state-of-the-art basketball arena. Trouble erupts when a tech-savvy cadre of terrorists kidnap the team's owner and Jesse's daughter during opening night. Facing a ticking clock and impossible odds, it's up to Jesse to not only save them but also a full house of fans in this highly charged action thriller.",
        releaseDate: "2020-09-29T00:00:00.000Z",
    },
    {
        id: 6,
        title: "Welcome to Sudden Death",
        posterURL: "https://image.tmdb.org/t/p/w500/elZ6JCzSEvFOq4gNjNeZsnRFsvj.jpg",
        overview: "Jesse Freeman is a former special forces officer and explosives expert now working a regular job as a security guard in a state-of-the-art basketball arena. Trouble erupts when a tech-savvy cadre of terrorists kidnap the team's owner and Jesse's daughter during opening night. Facing a ticking clock and impossible odds, it's up to Jesse to not only save them but also a full house of fans in this highly charged action thriller.",
        releaseDate: "2020-09-29T00:00:00.000Z",
    },
    {
        id: 7,
        title: "Welcome to Sudden Death",
        posterURL: "https://image.tmdb.org/t/p/w500/elZ6JCzSEvFOq4gNjNeZsnRFsvj.jpg",
        overview: "Jesse Freeman is a former special forces officer and explosives expert now working a regular job as a security guard in a state-of-the-art basketball arena. Trouble erupts when a tech-savvy cadre of terrorists kidnap the team's owner and Jesse's daughter during opening night. Facing a ticking clock and impossible odds, it's up to Jesse to not only save them but also a full house of fans in this highly charged action thriller.",
        releaseDate: "2020-09-29T00:00:00.000Z",
    },
    {
        id: 8,
        title: "Welcome to Sudden Death",
        posterURL: "https://image.tmdb.org/t/p/w500/elZ6JCzSEvFOq4gNjNeZsnRFsvj.jpg",
        overview: "Jesse Freeman is a former special forces officer and explosives expert now working a regular job as a security guard in a state-of-the-art basketball arena. Trouble erupts when a tech-savvy cadre of terrorists kidnap the team's owner and Jesse's daughter during opening night. Facing a ticking clock and impossible odds, it's up to Jesse to not only save them but also a full house of fans in this highly charged action thriller.",
        releaseDate: "2020-09-29T00:00:00.000Z",
    },
    {
        id: 9,
        title: "Welcome to Sudden Death",
        posterURL: "https://image.tmdb.org/t/p/w500/elZ6JCzSEvFOq4gNjNeZsnRFsvj.jpg",
        overview: "Jesse Freeman is a former special forces officer and explosives expert now working a regular job as a security guard in a state-of-the-art basketball arena. Trouble erupts when a tech-savvy cadre of terrorists kidnap the team's owner and Jesse's daughter during opening night. Facing a ticking clock and impossible odds, it's up to Jesse to not only save them but also a full house of fans in this highly charged action thriller.",
        releaseDate: "2020-09-29T00:00:00.000Z",
    },
    {
        id: 10,
        title: "Welcome to Sudden Death",
        posterURL: "https://image.tmdb.org/t/p/w500/elZ6JCzSEvFOq4gNjNeZsnRFsvj.jpg",
        overview: "Jesse Freeman is a former special forces officer and explosives expert now working a regular job as a security guard in a state-of-the-art basketball arena. Trouble erupts when a tech-savvy cadre of terrorists kidnap the team's owner and Jesse's daughter during opening night. Facing a ticking clock and impossible odds, it's up to Jesse to not only save them but also a full house of fans in this highly charged action thriller.",
        releaseDate: "2020-09-29T00:00:00.000Z"
    }
]

function Filme({valor}){
    return (
        <Link to="/filme/37">
            <div className="filme" key={valor.id}>
                <img src={valor.posterURL}></img>
            </div>
        </Link>

    )
}

export default function Filmes() {
    return (
        <>
            <h3 className="titulo-inicial" >Selecione o filme</h3>
            <main className="filmes ">
            {filmes.map((valor) => {
                return <Filme valor={valor}/>
            })}
            </main>
        </>
    )
}