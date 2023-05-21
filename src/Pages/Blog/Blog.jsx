import React from "react";
import useTitle from "../../Hooks/useTitle";

const Blog = () => {
  useTitle("Blog");
  return (
    <div className="my-3 w-9/12 mx-auto ">
      <div className="border border-base-300 p-3 bg-base-100 rounded-box m-2">
        <div className="text-xl font-medium">
          What is an access token and refresh token? How do they work and where
          should we store them on the client-side?
        </div>
        <div>
          <p>
            <ul className="list-disc p-4">
              <li>
                Access Token: An access token is like a special ticket that a
                website or app gives you after verifying your identity. It
                allows you to access certain parts or features of that website
                or app for a limited time.
              </li>
              <li>
                Refresh Token: A refresh token is like a magic card that lets
                you get a new access ticket when your current one expires. It's
                a long-lasting card that you keep in a safe place and use it to
                request a new ticket without going through the identity
                verification process again.
              </li>
              <li>
                Where to Store Them: The access token is stored in a secure
                place that the website or app remembers, so it can be used for
                each request. The refresh token is stored in an even more secure
                place to keep it safe from others.
              </li>
              <li>
                Overall, access tokens and refresh tokens are used to verify
                your identity and allow you to access protected areas or
                features of a website or app without needing to constantly
                reauthenticate.
              </li>
            </ul>
          </p>
        </div>
      </div>
      <div className="border border-base-300 p-3 bg-base-100 rounded-box m-2">
        <div className="text-xl font-medium">
          Compare SQL and NoSQL databases?
        </div>
        <div>
          <p>
            <ul className="list-disc p-4">
              <li>
                SQL Databases: Structured like tables with fixed data formats.
                Best for applications with complex relationships and
                transactions. Scale up by adding more resources to a single
                server. Use SQL language for querying and manipulating data.
                Suitable for applications like e-commerce and financial systems.
              </li>
              <li>
                NoSQL Databases: Flexible data storage without a fixed
                structure. Ideal for handling large and evolving data sets.
                Scale out by adding more servers to distribute the workload. Use
                query languages specific to their data model. Great for
                applications like social media and real-time analytics.
              </li>
              <li>
                In summary, SQL databases are good for structured data and
                complex relationships, while NoSQL databases are suitable for
                handling unstructured or rapidly changing data.
              </li>
            </ul>
          </p>
        </div>
      </div>
      <div className="border border-base-300 p-3 bg-base-100 rounded-box m-2">
        <div className="text-xl font-medium">
          What is express js? What is Nest JS ?
        </div>
        <div>
          <p>
            <ul className="list-disc p-4">
              <li>
                Express.js: Express.js is a framework for building web
                applications using JavaScript and Node.js. It provides a simple
                and minimalist approach to creating web servers and APIs.
                Imagine you're baking a cake, and Express.js is like a basic
                recipe that gives you the foundation to create your own unique
                cake. It helps you handle requests, define routes, and manage
                middleware (like adding layers to your cake). With Express.js,
                you can quickly set up a server and start serving web content or
                building APIs.
              </li>
              <li>
                Nest.js: Nest.js is a powerful framework built on top of
                Express.js. It takes the principles of Express.js and adds extra
                features and organization to make building complex applications
                easier. It's like having a professional chef guide you through
                the cake-making process, providing a structured approach and
                advanced tools. Nest.js uses TypeScript, a superset of
                JavaScript, to bring static typing and enhanced developer
                experience. It emphasizes modularity, dependency injection, and
                other architectural patterns, making it suitable for large-scale
                applications with demanding requirements. Nest.js helps you
                build robust and scalable server-side applications by providing
                a well-defined structure and a comprehensive set of tools.
              </li>
            </ul>
          </p>
        </div>
      </div>
      <div className="border border-base-300 p-3 bg-base-100 rounded-box m-2">
        <div className="text-xl font-medium">
          What is MongoDB aggregate and how does it work
        </div>
        <div>
          <p>
            The MongoDB aggregate is a feature that allows you to perform
            advanced operations and calculations on your data. It works by
            applying a series of stages to process and transform the documents
            in your collection. Each stage performs a specific task, such as
            filtering, grouping, sorting, or calculating aggregations. By
            combining these stages, you can extract valuable insights from your
            data. For example, you can use aggregate to find the average salary
            of employees by department or calculate the total sales per month.
            It's a versatile tool that helps you analyze and summarize your data
            in a flexible and efficient way.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
