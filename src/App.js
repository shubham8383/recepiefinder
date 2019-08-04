import React,{ useEffect, useState} from "react";
import './App.css';
import Recipe from './Recipe';

const App = () =>{

  const APP_ID = "b1dd83d8";
  const APP_KEY = "f6350b21451c2d4c66867d27e29578fc";
  const [recipes,setRecipes]=useState([]);
  const [search,setSearch]= useState("");
  const [query,setQuery]=useState('chicken');

  useEffect(() => {
getRecipes();
}, [query]);

const getRecipes = async () => {
const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
const data = await response.json();
setRecipes(data.hits);
console.log(data.hits);
};
const upadateSearch = e =>{
setSearch(e.target.value);

};
const getSearch = e =>{
  e.preventDefault();
  setQuery(search);
  setSearch('');
}
 
return(
<div className="App">
   <form onSubmit={getSearch} className="search-form">
<input className="search-bar" type="text" value={search} onChange={upadateSearch} />
<button className="search-button" type="submit">Search</button>
   </form>

<div className ="recepies">
{recipes.map(recipe =>(
  <Recipe
  key={recipe.recipe.label} 
  title={recipe.recipe.label} 
  calories={recipe.recipe.calories}
  image={recipe.recipe.image}
  ingredients={recipe.recipe.ingredients}
  />

))};
</div>
</div>
);}
export default App;
