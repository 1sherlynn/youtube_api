# React-based Application 


```
> npm install
> npm start
```

5 and 6: JSX 
- Components --> will produce HTML
- JSX cannot be intepreted by the browser and hence needing babel and webpack to translate to vanilla JS 

7 and 8 IMPORT STATEMENTS REACT AND REACTDOM: 
React: used to create and manage our components
ReactDOM: used to interact will the actual DOM 

9 COMPONENT INSTANCES: 
- We need to make an INSTANCE of a component to pass it to React.createElement (else it will throw an error)
- we cannot directly pass a class to React.createElement

__________________________________

12: YOUTUBE SEARCH API
- free but require API key to use to identify ourselves 
- Go to: 
http://console.developers.google.com/
- go to dashboard 
- search for youtube in api: "YouTube Data API v3"
- enable API 
- go to credentials and generate api key 
- after signing up, we will install a small package which will make searching simple (youtube api search)
- given an API key and a search term, it will make an api request for us and return a list of videos that match the search term 

$ npm install --save youtube-api-search

__________________________________

14: CLASS-BASED COMPONENTS
- a class component is used when we want a component to have some type of internal record keeping, some ability for it to be aware of itself and what happened to it since its been rendered. Some ability to introspect itself

__________________________________

15: HANDLING USER EVENTS

1. Declare event handler: a function that should be ran when an event occurs
e.g.
onInputChange() {
	
}

2. Pass event handler to element that we want to monitor for events 
e.g.
class SearchBar extends Component {
	render () {
		return (
			<div> Search Bar: 
				<input onChange={this.onInputChange} />
			</div>
			); 
	}
__________________________________


16: INTRODUCTION TO STATE
- State is a plain JS object that is used to record in React, user events 
- Class based component and has its own state object 
- whenever a component state is changed, the components immediately re-renders, and forces its children to re-render as well 
- b4 we can use state, we need to initialise the state object 
- To initialize state, we set the property state to to a plain JS object inside of the class's constructor method
- All JS classes have a special function called constructor 
- The constructor function is the first and only function called automatically when a new instance of the class is created 
- this.state = { term: ''}; --> create an object with the property 'term' or any other property which will be updated everytime the state changes and assign it to this.state 

__________________________________

17: STATE CONTINUED 

- updating state is different from creating it 
- this.state =  {} is only used in when there is constructor(prop) 
- everywhere else, to change our state, we use this.setState

Side effects from recording state 
- as you type, the value of the input is updated as well 
1. whenever we update and change the value of the input element, the event handler function runs
2. whenever we update our state and call this.setState, we call our component to automatically re-render and push all the re-rendered information into the DOM 
3. Because the render method makes reference to this.state.term, everytime the component re-renders, we get the updated this.state.term in the DOM 

- By updating the state, it causes the entire component to re-render 


__________________________________

18: CONTROLLED COMPONENTS 
- previously (lecture 16 above), the input controls the state. This is vice versa
- we don't react based on what the user input
- the state dictates the value of the input
- much more declarative syntax
- when the user enters some text, the state is updated with event.target.value, but the value of the input has not actually changed 
- the event handler runs and the component re-renders 
- when user type sth they didnt actually change the input value. They only triggered an event. and bc it updated the state with that event, that causes the value of the input to change
- allows for default input
- will be used alot in this course 

__________________________________

19: BREATHER AND REVIEW
React topics: 
1. JSX
2. Components 
3. State 
4. ES6 (classes, arrow functions, import and export statements)
5. Youtube API 

App current structure: 
App is defined in index.js, which imports the component SearchBar into it, and then renders it inside of the App component

Right now App is a functional component because it has no concept of state. 

The SearchBar component and the App component demonstrate two different types of components in React: 
1. class-based (App)
2. function-based (SearchBar)

Class-based components are used whenever we have a component that needs to be aware of state in some fashion. E.g. data changing overtime and we need to keep track of some aspects of state 

Functional components is used whenever we are just taking in some information and spitting out some JSX 

A functional component can contain a class-based component 

The SearchBar component makes use of state by updating the user input whenever the state changes. 
Whenever the user enters some text, the state is updated, which causes the entire component to re-render 

__________________________________

20: YOUTUBE SEARCH RESPONSE 
1. need to make a call to the youtube API to get some information 
2. once we get that information, we need to spread that info throughout the entire app
3. should be able to search for videos and then return response that actual list of videos need to flow throughout all our components 
4. every component needs to know about the different videos 

Where should we fetch all that videos? 
- concept of DOWNWARDS DATA FLOW: means that only the most parent component should be responsible for fetching data 
- index (App) is the most parent component we have 

__________________________________

24: LIST ITEM KEYS 

Having a key to a list else error: 
bundle.js:2333 Warning: Each child in an array or iterator should have a unique "key" prop. C

- in network/search file, we see that each video has an 'etag' which we can use as our key

- return <VideoListItem video={video} key={video.etag} />

__________________________________

28: VIDEO selection (PASSING 2 LEVELS DOWN FROM PARENT)

Summary: 
1. from index.js: 
class App extends Component {
... 
	<VideoList 
		onVideoSelect={ selectedVideo => this.setState( {selectedVideo} ) }
		videos={this.state.videos} />
// takes a selectedVideo and updates the selected video, and we pass this action as a property into onVideoSelect

2. then we pass this property (onVideoSelect) into const VideoList = (props) .. in video_list.js: 
return <VideoListItem 
		onVideoSelect={props.onVideoSelect}
		video={video} 
		key={video.etag} /> 

whereby VideoList takes that property and pass it into VideoListItem (above)

3. VideoListItem (in video_list_item.js)

__________________________________

31: Trottling Search term input using LODASH 

$ npm install --save lodash 

then in index.js at the top: 
import _ from 'lodash'; 










































