import React, { useState } from 'react';
import { newTweet } from '/imports/api/Tweets';
import { useTracker } from 'meteor/react-meteor-data';
 
 const TypeTweet = (parent) => {
    const user = useTracker(() => Meteor.user());
    const [text, setText] = useState("");
    
    const handleSubmit = e => {
        e.preventDefault();

        if (!text) return;

        newTweet({
            _user:user.username,
            tweet: text.trim(),
            createdAt: new Date(),
            likes: 0,
            rt: 0,
            mention: 0,
            parent: parent.parent
        });

        setText("");
    };
  
  return (
    <form className="task-form" onSubmit={handleSubmit}>
        <div className="input-group">
            <input
                type="text"
                placeholder="Type a tweet"
                value={text}
                className="form-control bg-white text-dark"
                onChange={(e) => setText(e.target.value)}
            />
            <button className="btn btn-primary" type="submit">Tweet</button>
        </div>
    </form>
  );
};
export default TypeTweet;