
- [🛫] Why would you use class component over function components (removing hooks from the question)?

        Removing Hooks from the equation; you would use a class component over a functional component in React in a case where you wanted to maintain state. 

- [🛫] Name three lifecycle methods and their purposes.

        #1___ComponentWillUnMount=> Called immediately before a component is destroyed. Perform any necessary cleanup in this method, such as cancelled network requests, or cleaning up any DOM elements created in 

        #2___ComponentDidMount=>use this one when you need to access some data from an api or source outside of the application but you need it to      happend after the component is mounted to the DOM
        Called immediately after a component is mounted. Setting state here will trigger re-rendering.
      
        #3___ComponentDidUpdate=>Called immediately after updating occurs. Not called for the initial render.

- [🛫] What is the purpose of a custom hook?

        A custom hook is similar in some ways to a HigherOrder Function. its a way to avoid unneccessary repetition of code and to provide added        functionality to components in a compact organized manner removing complicated functions from the UI or form/input of our code in one        example created in our TK "useInput" .  

- [🛫] Why is it important to test our apps?

        Testing apps is going to keep me from pushing bugs to production and getting fired from my hard earned dev job. Testing code helps catch bugs and shortcomings in code before they mount onto each other and cause a major bog down. 
        testing code gives a development team confidence in the fidelity and fortitude of a codebase 
        allows us to think about edge cases,
        provides a a way to thoroughly document the codebase,
        offers a safety net when making changes and when refactoring so we dont have to be scared or 
        at risk of loss and damage to the code base by making these changes and refactors.. 
