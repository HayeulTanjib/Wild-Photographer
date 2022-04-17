import React from 'react';

const Blog = () => {
    return (
        <div className='h-100'>
            <h2 className='py-5 text-center'>Blog</h2>
            <div className='pb-5'>
            <h5>Difference between authorization and authentication?</h5>
            <ul>
                <li>1. In authentication process it is first verify the person who they actually are.
                    On the other hand in authorization process decides if the user have validate to
                    access data.</li>
                    <li>2. Example: authentication - Http authentication; authorization - Access controls for url.</li>
                    <li>3. In authentication process users are verified, authorization process users are validated.</li>
                    <li>4. First do authentication then do authorization.</li>
                    <li>5. Authentication requires user login credentials, authorization requires user security steps and user privilages.</li>
            </ul>
            <h5>Why are you using firebase? What other options do you have to implement authentication?</h5>
            <ul>
                <li>1. Firebase is made by Google that's why its trustworthy, fast and secure.</li>
                <li>2. I can develop Web, Android, Ios app using firebase.</li>
                <li>3. I can implement email-password and social login based authentication.</li>
                <li>4. I can also implement database integration and hosting.</li>
                <li>5. Others options are Parse, Back4App, Aws amplify etc.</li>
            </ul>
            <h5>What other services does firebase provide other than authentication?</h5>
            <ul>
                <li>1. Firebase provides database integration service named firestore database.</li>
                <li>2. Firebase also provides real time database system.</li>
                <li>3. File storage service.</li>
                <li>4. Application or Website Hosting.</li>
                <li>5. Machine Learning functionality. </li>
            </ul>
            </div>
        </div>
    );
};

export default Blog;