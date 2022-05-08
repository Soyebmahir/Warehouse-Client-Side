import React from 'react';

const Blogs = () => {
    return (
        <div className='container'>
            <h1 className='text-center text-success'>Basic Discussion</h1>
            <div className='d-flex justify-content-between'>

                <div>
                    <h6>1. Difference between Node.JS and Javascript ?</h6>
                    <h3>Node.Js</h3>
                    <p>a. We can run Javascript outside the browser with the help of NodeJS.</p>
                    <p>b. It is mostly used on the server-side.</p>
                    <p>c. Nodejs does not have capability to add HTML tags.</p>
                    <p>d. V8 is the Javascript engine inside of node.js that parses and runs Javascript. </p>
                    <h3>Javascript</h3>
                    <p>a. Javascript is a programming language that is used for writing scripts on the website.</p>
                    <p>b. Javascript can only be run in the browsers</p>
                    <p>c. It is basically used on the client-side.</p>
                    <p>d. Javascript is capable enough to add HTML and play with the DOM.</p>

                </div>
                <div>
                    <h6>2. When should you use nodejs and when should you use mongodb?
                    </h6>
                    <h3>Nodejs:</h3>
                    <p> Node.js is an interpreter or runtime/ running environment for JavaScript. built on Chrome's V8 JavaScript engine. responsibility is especially to execute your application.
                    </p>
                    <h3>MongoDB:</h3>
                    <p> is a No-SQL database for storing data. when you need high availability of data with automatic, fast, and instant data recovery.</p>
                </div>
                <div>
                    <h6>3. Differences between sql and nosql databases.
                    </h6>
                    <p>There are many services which Firebase provides, Most useful of them are:</p><br />
                    <div className='d-flex justify-content-between'>
                        <div>
                            <h3>SQL</h3>
                            <p> relational</p>
                            <p> use structured query language and have a predefined schema.</p>
                            <p> are vertically scalable are table based</p>

                        </div>
                        <div>
                            <h3>NoSQL</h3>
                            <p> non-relational</p>
                            <p> NoSQL databases have dynamic schemas for unstructured data.</p>
                            <p> are horizontally scalable.are document, key-value,graph or wide-column stores.</p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;