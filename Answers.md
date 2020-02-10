1. What problem does the context API help solve?

It solves the problem of props drilling

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

actions: are payloads of information that send data from your application to the store
reducers: a function that determines changes to an applications state
store: stores the whole state of the app in an immutable object

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is global, component is local. Components state lives in a specific components and can only be update within that component and pass down to all of it's children using props.
Application state is best used to pass data between multiple components in an app. Component state is best used for smaller apps with fewer components.


1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux Thunk is a middleware that lets you call action creators that return a function instead of an action object. That function receives the store's dispatch method, which is then used to dispatch regular synchronous actions inside the body of the function once the asynchronous operations have completed.

1. What is your favorite state management system you've learned and this sprint? Please explain why!
Mixed feelings on this as of right now, this unit was incredibly hard for me but I'm starting to get the hang of it a bit.
