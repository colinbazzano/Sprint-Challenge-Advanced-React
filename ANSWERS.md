- [ ] Why would you use class component over function components (removing hooks from the question)?

You may use lifecycle methods in class components as well as if you are approaching (legacy) code that was created before React 16.8. You should be able to work with both class and functional components as you will never know when you might have to use one or the other. For new code, I would recommomend you use Functional Components as hooks are kind of amazing.

- [ ] Name three lifecycle methods and their purposes.

I won't include it as one of the three, but the most common lifecycle method is the render() method. Required when using a Classical Component, render() handles the rendering of your component.

componentDidMount() - this is a method that uses the setState() & causes another render once the state has been updated. This is a great place to make API calls.

componentDidUpdate() - you would use this lifecycle method if you were updating the DOM with state (or props) changes.

compoonentDidUnmount() - a great place to run any clean, should you have any, as the component will be unmounted after this call.

- [ ] What is the purpose of a custom hook?

Think of custom hooks almost like CSS mixins. They make code more reusable & DRY as well as allow you to share functionality between components.

- [ ] Why is it important to test our apps?

Testing is important for a wealth of reasons! It allows you to find bugs faster and prevent them from making further problems along the road of your work. They also do a great job at being a well set standard of trusting the code. Another important thing about testing that I often remind myself is that in a way they act as documentation for the code we have written. I've always found that to be a good way to look at testing and why it is important. 