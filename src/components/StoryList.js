import React from 'react';
import Story from './Story';

const StoryList = function ({stories, handleSelectChange}) {

    const handleChange = (e) => {
        handleSelectChange(e.target.value);
    }


    const storyNodes = stories.map((story, index) => {
        return <option key={story.id} index={index}>{story.title}</option>
    })
    
    return (
        <>
         <select onChange={handleChange}>
            <option>Select an article</option>
            {storyNodes}
         </select>
        </> 
    )
}


export default StoryList; 