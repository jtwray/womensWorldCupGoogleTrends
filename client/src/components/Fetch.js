import React, { Component } from "react";
import axios from "axios";
import { Players, PlayersList } from "../hooks/useSpring";

export class Fetch extends Component {
  state = {
    players: [
      { name: "Alex Morgan", country: "United States", searches: 100 },
      { name: "Megan Rapinoe", country: "United States", searches: 99 },
      { name: "Marta", country: "Brazil", searches: 18 },
      { name: "Rose Lavelle", country: "United States", searches: 11 },
      { name: "Carli Lloyd", country: "United States", searches: 9 },
      { name: "Julie Ertz", country: "United States", searches: 8 },
      { name: "Christen Press", country: "United States", searches: 8 },
      { name: "Kelley O'Hara", country: "United States", searches: 8 },
      { name: "Tobin Heath", country: "United States", searches: 7 },
      { name: "Wendie Renard", country: "France", searches: 7 },
      { name: "Kosovare Asllani", country: "Sweden", searches: 6 },
      { name: "Lieke Martens", country: "Netherlands", searches: 6 },
      { name: "Amandine Henry", country: "France", searches: 5 },
      { name: "Ali Krieger", country: "United States", searches: 5 },
      { name: "Mallory Pugh", country: "United States", searches: 4 },
      { name: "Samantha Kerr", country: "Australia", searches: 4 },
      { name: "Christiane Endler", country: "Chile", searches: 4 },
      { name: "Daniëlle van de Donk", country: "Netherlands", searches: 4 },
      { name: "Lucy Bronze", country: "England", searches: 4 },
      { name: "Ashlyn Harris", country: "United States", searches: 4 },
      { name: "Eugénie Le Sommer", country: "France", searches: 4 },
      { name: "Jackie Groenen", country: "Netherlands", searches: 4 },
      { name: "Abby Dahlkemper", country: "United States", searches: 3 },
      { name: "Steph Houghton", country: "England", searches: 3 },
      { name: "Vivianne Miedema", country: "Netherlands", searches: 3 },
      { name: "Barbara Bonansea", country: "Italy", searches: 3 },
      { name: "Giulia Gwinn", country: "Germany", searches: 3 },
      { name: "Shanice van de Sanden", country: "Netherlands", searches: 3 },
      { name: "Cristiane Rozeira", country: "Brazil", searches: 3 },
      { name: "Alex Greenwood", country: "England", searches: 3 },
      {
        name: "Bárbara Micheline do Monte Barbosa",
        country: "Brazil",
        searches: 2
      },
      { name: "Alexandra Long", country: "United States", searches: 2 },
      { name: "Alyssa Naeher", country: "United States", searches: 2 },
      { name: "Gaëtane Thiney", country: "France", searches: 2 },
      { name: "Formiga", country: "Brazil", searches: 2 },
      { name: "Sari van Veenendaal", country: "Netherlands", searches: 2 },
      { name: "Sakina Karchaoui", country: "France", searches: 2 },
      { name: "Valérie Gauvin", country: "France", searches: 2 },
      { name: "Crystal Dunn", country: "United States", searches: 2 },
      { name: "Lindsey Horan", country: "United States", searches: 2 },
      { name: "Millie Bright", country: "England", searches: 2 },
      { name: "Sofia Jakobsson", country: "Sweden", searches: 2 },
      { name: "Sara Gama", country: "Italy", searches: 2 },
      { name: "Amel Majri", country: "France", searches: 2 },
      { name: "Marion Torrent", country: "France", searches: 2 },
      { name: "Toni Duggan", country: "England", searches: 2 },
      { name: "Sara Däbritz", country: "Germany", searches: 2 },
      { name: "Dzsenifer Marozsán", country: "Germany", searches: 2 },
      { name: "Delphine Cascarino", country: "France", searches: 2 },
      { name: "Laura Giuliani", country: "Italy", searches: 1 },
      { name: "Jill Roord", country: "Netherlands", searches: 1 },
      { name: "Sherida Spitse", country: "Netherlands", searches: 1 },
      { name: "Nikita Parris", country: "England", searches: 1 },
      { name: "Sam Mewis", country: "United States", searches: 1 },
      { name: "Tamires Cássia Dias Gomes", country: "Brazil", searches: 1 },
      { name: "Christine Sinclair", country: "Canada", searches: 1 },
      { name: "Stina Blackstenius", country: "Sweden", searches: 1 },
      { name: "Rachel Daly", country: "England", searches: 1 },
      { name: "Sarah Bouhaddi", country: "France", searches: 1 },
      { name: "Magdalena Eriksson", country: "Sweden", searches: 1 },
      { name: "Débora Cristiane de Oliveira", country: "Brazil", searches: 1 },
      { name: "Caroline Seger", country: "Sweden", searches: 1 },
      { name: "Valentina Giacinti", country: "Italy", searches: 1 },
      { name: "Becky Sauerbrunn", country: "United States", searches: 1 },
      { name: "Nilla Fischer", country: "Sweden", searches: 1 },
      { name: "Cristiana Girelli", country: "Italy", searches: 1 },
      { name: "Jennifer Hermoso", country: "Spain", searches: 1 },
      { name: "Fran Kirby", country: "England", searches: 1 },
      { name: "Manuela Giugliano", country: "Italy", searches: 1 },
      { name: "Lina Hurtig", country: "Sweden", searches: 1 },
      { name: "Ellen White", country: "England", searches: 1 },
      { name: "Hedvig Lindahl", country: "Sweden", searches: 1 },
      { name: "Fridolina Rolfö", country: "Sweden", searches: 1 },
      { name: "Alexandra Popp", country: "Germany", searches: 1 },
      { name: "Jill Scott", country: "England", searches: 1 },
      { name: "Karen Carney", country: "England", searches: 1 },
      { name: "María Pilar León", country: "Spain", searches: 1 },
      { name: "Aurora Galli", country: "Italy", searches: 1 },
      { name: "Martina Rosucci", country: "Italy", searches: 1 },
      { name: "Beth Mead", country: "England", searches: 1 },
      { name: "Andressa Alves da Silva", country: "Brazil", searches: 1 },
      { name: "Caroline Graham Hansen", country: "Norway", searches: 1 },
      { name: "Estefanía Banini", country: "Argentina", searches: 1 },
      { name: "Griedge Mbock Bathy", country: "France", searches: 1 },
      { name: "Merel van Dongen", country: "Netherlands", searches: 1 },
      { name: "Kadidiatou Diani", country: "France", searches: 1 },
      { name: "Andressa Cavalari Machry", country: "Brazil", searches: 1 },
      { name: "Alia Guagni", country: "Italy", searches: 1 },
      { name: "Lena Goeßling", country: "Germany", searches: 1 },
      { name: "Lineth Beerensteyn", country: "Netherlands", searches: 1 },
      { name: "Stefanie van der Gragt", country: "Netherlands", searches: 1 },
      { name: "Jodie Taylor", country: "England", searches: 1 },
      { name: "Melanie Leupolz", country: "Germany", searches: 1 },
      { name: "Elin Rubensson", country: "Sweden", searches: 1 },
      { name: "Morgan Brian", country: "United States", searches: 1 },
      { name: "Kika van Es", country: "Netherlands", searches: 1 },
      { name: "Ellie Carpenter", country: "Australia", searches: 1 },
      { name: "Lina Magull", country: "Germany", searches: 1 },
      { name: "Karen Bardsley", country: "England", searches: 1 },
      { name: "Jordyn Huitema", country: "Canada", searches: 1 },
      { name: "Tierna Davidson", country: "United States", searches: 1 }
    ]
  };

  componentDidMount() {
    this.newMethod();
  }
  logPlayers = () => {
    this.state.players && console.log(this.state.players);
  };
    newMethod() {
        !this.state.players == false &&
            axios
                .get(`http://localhost:5000/api/players`)
                .then(response => this.setState({ players: response.data }), _ => console.log(this.state.players))
                .catch(error => console.error(error));
    }

  render() {
    return (
      <div>
        {this.logPlayers()}
        <PlayersList cards={this.state.players} />
      </div>
    );
  }
}
