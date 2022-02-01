import logo from "./logo.svg";
import "./App.css";
import MovieListe from "./components/MovieListe";
import { useState } from "react";
import Search from "./components/Search";
function App() {
  const [searchValue, setsearchValue] = useState("");
  const [newRate, setnewRate] = useState(1);
  const [movies, setMovies] = useState([
    {
      Title: "L'Attaque des Titans",
      Poster:
        "	https://media.senscritique.com/media/000006484765/100/L_Attaque_des_Titans.jpg",
      Description:
        "It is set in a world where humanity lives inside cities surrounded by three enormous walls that protect them from the gigantic man-eating humanoids referred to as Titans; the story follows Eren Yeager, who vows to exterminate the Titans after a Titan brings about the destruction of his hometown and the death of his mother.",
      Rating: 5,
    },
    {
      Title: "Death Note ",
      Poster:
        "https://media.senscritique.com/media/000017947429/100/Death_Note.jpg",
      Description:
        "Death Note (デスノート, Desu Nōto) is a manga series created by writer Tsugumi Ohba and illustrator Takeshi Obata. The series centers around a high school student who discovers a supernatural notebook that allows him to kill anyone by writing the victim's name while picturing their face.",
      Rating: 5,
    },
    {
      Title: "Fullmetal Alchemist : Brotherhood ",
      Poster:
        "	https://media.senscritique.com/media/000006480351/100/Fullmetal_Alchemist_Brotherhood.jpg",
      Description:
        "Two brothers search for a Philosopher's Stone after an attempt to revive their deceased mother goes awry and leaves them in damaged physical forms.",
      Rating: 4,
    },
    {
      Title: "One Piece",
      Poster:
        "https://media.senscritique.com/media/000006482131/100/One_Piece.jpg",
      Description:
        "The story follows the adventures of Monkey D. Luffy, a boy whose body acquired the properties of rubber after he inadvertently ate a Devil Fruit. Along with his pirate crew, called the Straw Hat Pirates, Luffy explores the Grand Line in search of the ultimate treasure known as One Piece in order to become the next Pirate King.",
      Rating: 5,
    },
    {
      Title: "Hametsu No Mars",
      Poster:
        "https://media.senscritique.com/media/000006482131/100/One_Piece.jpg",
      Description:
        ": Some time after a space mission to Mars ends in destruction, strange monsters called Ancients begin appearing around Tokyo. A group of specialists consisting of three girls and one troubled young boy must fight the Ancients until they can come to understand exactly what it is they are fighting. When one of the Ancients tells them that they are the true invaders of Earth, they must search within themselves to grasp what truly is reality.",
      Rating: 2,
    },
  ]);
  const search = (text) => {
    setsearchValue(text)
  };
  const setRate = (rating)=>{
    setnewRate(rating)
  }
  return (
    <div className="App">
      <Search search={search} />
      <MovieListe
        movies={movies.filter((el) =>
          el.Title.toLowerCase().includes(searchValue.toLowerCase().trim())
        )}
      />
    </div>
  );
}

export default App;
