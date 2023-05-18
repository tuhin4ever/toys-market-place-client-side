import React from "react";

const Blog = () => {
  return (
    <div className="my-3 w-9/12 mx-auto mt-24">
      <div className="border border-base-300 p-3 bg-base-100 rounded-box m-2">
        <div className="text-xl font-medium">
          Tell us the differences between uncontrolled and controlled
          components.
        </div>
        <div>
          <p>
            Uncontrolled components are controlled by the DOM and do not have
            their own state, while controlled components have their own state
            and are controlled by React through their props. This means that
            changes to uncontrolled components are handled directly by the DOM,
            while changes to controlled components are handled by React and
            trigger re-renders of the component.
          </p>
        </div>
      </div>
      <div className="border border-base-300 p-3 bg-base-100 rounded-box m-2">
        <div className="text-xl font-medium">
          How to validate React props using PropTypes
        </div>
        <div>
          <p>
            To validate React props using PropTypes, you need to import
            PropTypes from the 'prop-types' package and define propTypes as a
            static property of your component. Within propTypes, you can define
            the expected type and shape of each prop by using the various
            PropTypes validators available in the PropTypes package. When a prop
            of the wrong type or shape is passed to your component, PropTypes
            will throw a warning in the console to help you identify the issue.
          </p>
        </div>
      </div>
      <div className="border border-base-300 p-3 bg-base-100 rounded-box m-2">
        <div className="text-xl font-medium">
          Tell us the difference between nodejs and express js.
        </div>
        <div>
          <p>
            Node.js is a runtime environment that allows developers to run
            JavaScript on the server-side, while Express.js is a web application
            framework built on top of Node.js that provides a set of features
            and tools for building web applications.
          </p>
        </div>
      </div>
      <div className="border border-base-300 p-3 bg-base-100 rounded-box m-2">
        <div className="text-xl font-medium">
          What is a custom hook, and why will you create a custom hook?
        </div>
        <div>
          <p>
            A custom hook in React is a reusable function that encapsulates
            common logic and state in a single place, which can be shared across
            multiple components in an application. Custom hooks follow the same
            rules as React hooks, which means they can use other hooks, but must
            start with the prefix "use" and follow the React Hook Rules.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
