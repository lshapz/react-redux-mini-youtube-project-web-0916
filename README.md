#YouTube Mini Project

In this mini-project, you'll build a mini version of YouTube using the YouTube API.

NOTE - this branch was an experiment where I changed the Youtube API out for the Spotify one, just for kicks

The functionality we want is this:
+ A user can search for a video by keyword
+ We'll fetch five videos from the YouTube API based on the search term
+ One video will be embedded in a large format in the middle of the screen
+ The other four videos will appear small in a sidebar
+ When a user clicks one of the videos in the sidebar, it should switch places with the video in the center
+ A user should be able to play the video in the center

You'll probably need your state object to have two top-level keys: one for the sidebar videos, and one for the main video. This will mean two reducers, one for each piece of state. Think about the actions that you'll need to account for - fetching videos from YouTube API, and switching which video is displayed in the center.

Please note:
Because we're dealing with making asynchronous data requests, we've used a library called Redux Promise to prevent our actions from getting dispatched to our reducers until any promises on them have been resolved. Redux Promise is configured for you in the store.js file - you just need to create and pass in your root reducer.

Note that Redux Promise is picky about the structure of any actions that you decide to dispatch. They need to have only two keys (no more), and one has to be type (this part is true for all Redux actions). We'll go over this stuff more next week. For now, just trust that Redux Promise is intercepting your actions before they hit your reducers to make sure that the data is actually there and not just a promise waiting to be resolved. You don't need to do anything differently.

We've also set up the basic structure for the action to fetch videos from the YouTube API in the actions.js file using an HTTP request library called axios. (It works basically the same as jQuery for get/post requests.)

You should be able to dispatch this action with the search term and get data about the videos. If you're having trouble, consider just pasting the URL into the browser to see what data you'll get back.

One more hint - the videos should probably appear as still images until they're the center video and are clicked to be played. You can see an example of how video embedding works by going to YouTube and checking out their instructions included below video. You'll need to have the video ID, which you'll get from the json.

There's also some styling you can use (or not) in App.css.

You might also think about using React's lifecycle methods to fetch some videos when your app loads, rather than waiting for the user to search.

There are no tests! Just get it working.
