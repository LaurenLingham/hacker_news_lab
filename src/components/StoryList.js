import React from 'react';

const StoryList = ({stories, handleSelectChange}) => {

    const handleChange = (e) => {
        handleSelectChange(e.target.value);
        console.log(e.target.value);
    };

    const storyNodes = stories.map((story, index) => {
        return <option key={story.id} index={index} value={story.id}>{story.title}</option>
    });
    
    return (
        <>
         <select onChange={handleChange}>
            <option>Select an article</option>
            {storyNodes}
         </select>
        </> 
    );
};

export default StoryList;
