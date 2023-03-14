import React from 'react';

const Story = ({story}) => {
    return (
        <>
            <h2>{story.title}</h2>
            <p>{story.text ? story.text : <a href={story.url}>{story.url}</a>}</p>
        </>
    );
};

export default Story;
