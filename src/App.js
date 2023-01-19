import React from "react";
import Card from "./Card";

function App() {

  const [postList,SetPostList] = React.useState([])

  //Fetching data from API
  React.useEffect(()=> {
  fetch('https://people.canonical.com/~anthonydillon/wp-json/wp/v2/posts.json')
  .then((response) => response.json())
  .then((data) =>{SetPostList(data)});
    }, [])


if(postList.length){

  return (
    <div class="row">
      {postList.map((post)=>{
        return      <div class="col-4">
                      <span>
                        <Card {...post} ></Card>
                      </span>
                    </div>
      })}
    </div>
  
  );
}
else{
  return(
    <div>
      didnt work
    </div>
  )
}
}

export default App;
