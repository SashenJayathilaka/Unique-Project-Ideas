import { useEffect, useState } from "react";
import unsplash from "./api/unplash";
import "./App.css";
import Header from "./components/Header";
import MainBoard from "./components/MainBoard";

function App() {
  const [pins, setNewPins] = useState<any>([]);

  const getImages = (term: any) => {
    return unsplash.get("https://api.unsplash.com/search/photos", {
      params: {
        query: term,
      },
    });
  };

  const onSearchSubmit = (term: any) => {
    getImages(term).then((res) => {
      let results = res.data.results;

      let newPins = [...results, ...pins];

      newPins.sort(function (a, b) {
        return 0.5 - Math.random();
      });
      setNewPins(newPins);
    });
  };

  const getNewPins = () => {
    let promises: any[] = [];
    let pinData: any[] = [];

    let pins = [
      "New York city",
      "Rome",
      "traveling",
      "wolf",
      "city",
      "london",
      "ocean",
      "Tokyo",
      "cats",
      "paris",
      "mountain",
      "night",
      "rain",
      "freeze",
      "tiger",
      "nature",
    ];
    pins.forEach((pinTerm) => {
      promises.push(
        getImages(pinTerm).then((res) => {
          let results = res.data.results;
          //console.log(results);
          pinData = pinData.concat(results);
          pinData.sort(function (a, b) {
            return 0.5 - Math.random();
          });
        })
      );
    });
    Promise.all(promises).then(() => {
      setNewPins(pinData);
    });
  };

  useEffect(() => {
    getNewPins();
  }, []);

  return (
    <div className="App">
      <Header onSubmit={onSearchSubmit} />
      <MainBoard pins={pins} />
    </div>
  );
}

export default App;
