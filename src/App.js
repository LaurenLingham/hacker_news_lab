import React, {useState, useEffect} from 'react';
import StoryList from './components/StoryList';
import Story from './components/Story';
import './App.css';

function App() {
  const [stories, setStories] = useState([]);
  const [selectedStory, setSelectedStory] = useState(null);

  const getStories = async () => {
    const response = await fetch("https://hacker-news.firebaseio.com/v0/topstories.json");
    const data = await response.json();
    const newData = data.splice(0, 10);
    
    const promises = newData.map(async story => {
      const secondResponse = await fetch(`https://hacker-news.firebaseio.com/v0/item/${story}.json`);
      const singleStory = await secondResponse.json();
      return singleStory;
    });
    const results = await Promise.all(promises);
    setStories(results);
  };

  useEffect(() => {
    getStories();
  }, []);

  const handleSelectChange = (story) => {
    setSelectedStory(story);
  };

  const getStoryById = (id) => {
    const idAsNumber = Number(id);

    for (let i = 0; i < stories.length; i++) {
      if (stories[i].id === idAsNumber) {
        return stories[i];
      }
    }

    return null;
  };

  return (
    <div className="App">
      <h1>Articles</h1>
      <StoryList stories={stories} handleSelectChange={handleSelectChange}/>
      {selectedStory ? <Story story = {getStoryById(selectedStory)}/> : null}
    </div>
  );
};

export default App;
