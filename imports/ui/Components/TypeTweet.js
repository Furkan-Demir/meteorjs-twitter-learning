import React, { useState } from 'react';
import {tweetsCollection} from '/imports/api/Collections/tweetsCollection';
import { useTracker } from 'meteor/react-meteor-data';
 
 const TypeTweet = () => {
    const user = useTracker(() => Meteor.user());
    const [text, setText] = useState("");
    
    const handleSubmit = e => {
        e.preventDefault();

        if (!text) return;

        tweetsCollection.insert({
            user:user.username,
            tweet: text.trim(),
            createdAt: new Date(),
            likes: 0,
            rt: 0,
            mention: 0,
            parent: "0"
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