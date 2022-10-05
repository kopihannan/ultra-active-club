import React from 'react';

const Question = () => {
    return (
        <div className='container my-5'>
            <h2 className='text-center my-4'>Question & Answer</h2>
            <hr />
            <div class="accordion accordion-flush" id="accordionFlushExample">
                <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingOne">
                        <button class="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            how does react js work
                        </button>
                    </h2>
                    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                        Let’s say one of your friends posted a photograph on Facebook. Now you go and like the image and then you started checking out the comments too. Now while you are browsing over comments you see that the likes count has increased by 100, since you liked the picture, even without reloading the page. This magical count change is because of ReactJS.
                        React is a declarative, efficient, and flexible JavaScript library for building user interfaces. ‘V’ denotes the view in MVC. ReactJS is an open-source, component-based front end library responsible only for the view layer of the application. It is maintained by Facebook.
                        React uses a declarative paradigm that makes it easier to reason about your application and aims to be both efficient and flexible. It designs simple views for each state in your application, and React will efficiently update and render just the right component when your data changes. The declarative view makes your code more predictable and easier to debug.
                        A React application is made of multiple components, each responsible for rendering a small, reusable piece of HTML. Components can be nested within other components to allow complex applications to be built out of simple building blocks. A component may also maintain an internal state – for example, a TabList component may store a variable corresponding to the currently open tab.
                        <br />
                        <strong>Note:</strong> React is not a framework. It is just a library developed by Facebook to solve some problems that we were facing earlier.
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingTwo">
                        <button class="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                            Difference between props and state:
                        </button>
                    </h2>
                    <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body">
                            <strong>Props: </strong>The Data is passed from one component to another. <br /> It is Immutable (cannot be modified). <br />
                            Props can be used with state and functional components. <br />
                            Props are read-only. <br />
                            <strong>State: </strong>The Data is passed within the component only. <br />
                            It is Mutable ( can be modified). <br />
                            State can be used only with the state components/class component (Before 16.0). <br />
                            State is both read and write.
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingThree">
                        <button class="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                            How useEffect works in ReactJS ?
                        </button>
                    </h2>
                    <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body">
                            When we want to perform something after each render of component then we can use the useEffect() hook. By using this Hook, we tell React that our component needs to do something after render by passing a function. React remember the function we passed in useEffect() hook and call it later after performing the DOM updates.

                            By default, the useEffect hook runs after the first render and after every update. React updates the DOM by the time it runs the effects. <br />
                           <strong>Explanation:</strong> As we can from the above example whenever we update the state, React re-render the component, and just after that useEffect() hook call function that we have passed.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Question;