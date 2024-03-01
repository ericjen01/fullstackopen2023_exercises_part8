--- 1-a Create React App
    npm create vite@latest <project directory name> --template react

    cd <project directory name>
    npm install

    npm run dev

--- 1-a Component
    index.js/main.jsx:
    import ReactDOM from 'react-dom/client'
    import App from './App'
    ReactDOM.createRoot(document.getElementById('root')).render(<App />)

    App.jsx:
    const App = () => {
      return (
        <div>
          <p>Hello world</p>
        </div>
      )
    }
    export default App

--- 1-d Exercises 1.6.-1.14
    rm -rf node_modules/ && npm i

--- 2-c Getting Data From Server
    npm install -g json-server
    json-server --port 3001 --watch db.json
    npx json-server --port 3001 --watch db.json

--- 2-c Axios and Promises
    npm install axios
    npm install json-server --save-dev
    npm run server

--- 3-a Create a Backend App
    npm init

--- 3-a Simple Web Server
    {
      // ...
      "scripts": {

        "start": "node index.js",
        "test": "echo \"Error: no test specified\" && exit 1"
      },
      // ...
    }

    node index.js
    npm start

--- 3-a Rest
      Representational State Transfer, aka REST, was introduced in 2000 in Roy Fielding's dissertation. REST is an architectural style meant for building scalable web applications.

--- 3-a Express
      Express. js is a backend framework for creating web applications in Node. js, while React is a frontend library for building user interfaces. When combined, they create a robust and efficient full-stack web application
    npm install express
    
    npm update
    npm install

    const express = require('express')
    const app = express()


--- 3-a Nodemon for backend
    npm install --save-dev nodemon
    node_modules/.bin/nodemon index.js

    {
      // ..
      "scripts": {
        "start": "node index.js",

        "dev": "nodemon index.js",
        "test": "echo \"Error: no test specified\" && exit 1"
      },
      // ..
    }

    npm run dev

--- exercise 3.7
    https://github.com/expressjs/morgan
    npm install morgan
    morgan(':method :url :status :res[content-length] - :response-time ms')


--- 3-b Same Origin Policy & Cors
    npm install cors

    const cors = require('cors')
    app.use(cors())

--- 3-b Application to The Internet
    fly auth login
    fly launch
    fly deploy
    fly open

--- 3-b Frontend Production build
    npm run build
    app.use(express.static('dist'))

--- 3-c MongoDB
    npm install mongoose

    const mongoose = require('mongoose')
    const url =`mongodb+srv://${projectName}:${password}... ...`

    mongoose.set('strictQuery',false)
    mongoose.connect(url)
    MONGODB_URI=address_here npm run dev

--- 3-c Database Config into Its Module
    npm install dotenv
    fly secrets set MONGODB_URI='mongodb+srv://<projectName>:<password>... ...'

--- 3d Lint
    npm install eslint --save-dev
    npx eslint --init
    'env': {
            'commonjs': true,
            'es2021': true,
            'node': true
        },
      'rules': {
            'indent': [
                'error',
                2
            ],
            'linebreak-style': [
                'error',
                'unix'
            ],
            'quotes': [
                'error',
                'single'
            ],
            'semi': [
                'error',
                'never'
            ]
        }

        npx eslint index.js

        "scripts": {
            "lint": "eslint ."
        },

        npm run lint

--- 4-a Project Structure
    ├── index.js
    ├── app.js
    ├── dist
    │   └── ...
    ├── controllers
    │   └── notes.js
    ├── models
    │   └── note.js
    ├── package-lock.json
    ├── package.json
    ├── utils
    │   ├── config.js
    │   ├── logger.js
    │   └── middleware.js  

--- 4-a Exercises 4.1-4.2
    npm install mongoose@7.6.5

--- 4-a Testing Node Applications
    npm install --save-dev jest

    "scripts": {
      ...
      "test": "jest --verbose"
    },
    "jest": {
      "testEnvironment": "node"
    }

    npm script test
    npm test

--- 4-b Testing Enviroment
    npm install --save-dev cross-env
    npm install cross-env

    npm install --save-dev supertest

    npm test -- tests/note_api.test.js
    npm test -- -t "a specific note is within the returned notes"
    npm test -- -t 'notes'

    npm install express-async-errors
    npm test -- tests/note_api.test.js

--- 4-b Eliminating The Try-Catch
    npm install express-async-errors 
    
    *introduce the library in app.js, before importing the routes:

    const config = require('./utils/config')
    const express = require('express')
    require('express-async-errors')
    const app = express()
    const cors = require('cors')
    const notesRouter = require('./controllers/notes')
    const middleware = require('./utils/middleware')

--- 4-c Creating Users
    npm install mongoose-unique-validator
    npm install mongoose@7.6.5

--- 4-d Limiting Creating New Notes to Logged-in Users
    npm install jsonwebtoken

    ---------------------------------------
    React eslint error missing in props validation
      /* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling
    OR
      add rule in .eslintrc.cjs:

        "rules": {
        "react/prop-types": "off"
        }

--- 5-b Prop-Types Package
    npm install prop-types

--- 5-b ESlint For The Frontend
    npm install --save-dev eslint-plugin-jest

    create .eslintrc.cjs 

    create .eslintignore with the following contents to the repository root

    npm run lint

--- 5-c Testing React App Frontend

    npm install --save-dev @testing-library/react @testing-library/jest-dom jest jest-environment-jsdom @babel/preset-env @babel/preset-react

    in package.json:
      {
        "scripts": {
          // ...
          "test": "jest"
        }
        // ...
        "jest": {
          "testEnvironment": "jsdom"
        }
      }

    for .babelrc:
      {
        "presets": [
          "@babel/preset-env",
          ["@babel/preset-react", { "runtime": "automatic" }]
        ]
      }

    Clicking buttons in tests
    npm install --save-dev @testing-library/user-event

--- 5-d Cypress

    npm install --save-dev cypress
      "scripts": {
        "dev": "vite --host",
        "cypress:open": "cypress open"

    npm run cypress:open

    add an npm script to the backend
      "scripts": {
          "start:test": "NODE_ENV=test node index.js",

    Cy error fix:
      npm install eslint-plugin-cypress --save-dev

      change configuration in .eslintrc.cjs:

      module.exports = {
      "env": {
        "cypress/globals": true
      "plugins": [
          "react", "jest", "cypress"
      ],
      }
    }

    Controlling the state of the database

      if (process.env.NODE_ENV === 'test'){...}

      npm run start:test

      backend:

        npm install --save-dev cross-env

        "scripts": {
          "start": "cross-env  NODE_ENV=production node index.js",
          "dev": "cross-env  NODE_ENV=development nodemon index.js",
          "test": "cross-env NODE_ENV=test jest --verbose --runInBand",
          "lint": "eslint .",
          "start:test": "cross-env NODE_ENV=test node index.js"
        },

        .env
          TEST_MONGODB_URI=mongodb+srv://fullstack:<password>@cluster0.o1opl.mongodb.net/TestBlogApp
          ?retryWrites=true&w=majority

        config.js
          require('dotenv').config()
          const PORT = process.env.PORT
          const MONGODB_URI = process.env.NODE_ENV === 'test'
            ? process.env.TEST_MONGODB_URI
            : process.env.MONGODB_URI

--- 6-a Redux
    npm install redux

    cd unicafe-redux   // go to the directory of cloned repository
    rm -rf .git
    npm install

--- 6-b Redux Toolkit
    npm install @reduxjs/toolkit

--- 6-c Redux Thunk
    https://fullstackopen.com/en/part6/communicating_with_server_in_a_redux_application
    https://redux.js.org/usage/writing-logic-thunks
    https://redux-toolkit.js.org/api/createAsyncThunk

    // fetchTodoById is the "thunk action creator"
    export function fetchTodoById(todoId) {
      // fetchTodoByIdThunk is the "thunk function"
      return async function fetchTodoByIdThunk(dispatch, getState) {
        const response = await client.get(`/fakeApi/todo/${todoId}`)
        dispatch(todosLoaded(response.todos))
      }
    }

--- 6-d Managing data on the server with the React Query library
    npm install @tanstack/react-query

    in main/index file:
      import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
      ...
      const queryClient = new QueryClient()
      ...
      ReactDOM.createRoot(document.getElementById('root')).render(
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      )

--- 7-a React Router
    npm install react-router-dom

    import {
      BrowserRouter as Router,
      Routes, Route, Link
    } from 'react-router-dom'
    
   return(
    <Router>
      <Routes>
        <Route path="/" element={<AnecdoteList  anecdotes ={anecdotes} />} />
      </Routes>
    </Router>
  )

--- 7-c React Bootstrap
    npm install react-bootstrap

    <head>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
        integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
        crossorigin="anonymous"
      />
      // ...
    </head>

--- 7-c Material UI
    npm install @mui/material @emotion/react @emotion/styled

    Render the contents of the whole application within a Container:

      import { Container } from '@mui/material'

      const App = () => {
        // ...
        return (
          <Container>
            // ...
          </Container>
        )
      }

--- 8-a GraphQL is a query language, architecture style, and set of tools to create and manipulate 
          APIs. REST is good for simple data sources where resources are well defined

--- 8-a Apollo (backend)
      Apollo Server is an open-source, spec-compliant GraphQL server that's compatible with any GraphQL client, including Apollo Client

      Create a new npm project with npm init and install the required dependencies.

      npm install @apollo/server graphql

      Also create a index.js file in your project's root directory.
      The initial code is as follows:

        const { ApolloServer } = require('@apollo/server')
        const { startStandaloneServer } = require('@apollo/server/standalone')

        let persons = [
          {
            name: "Arto Hellas",
            phone: "040-123543",
            street: "Tapiolankatu 5 A",
            city: "Espoo",
            id: "3d594650-3436-11e9-bc57-8b80ba54c431"
          },
          {
            name: "Matti Luukkainen",
            phone: "040-432342",
            street: "Malminkaari 10 A",
            city: "Helsinki",
            id: '3d599470-3436-11e9-bc57-8b80ba54c431'
          },
          {
            name: "Venla Ruuska",
            street: "Nallemäentie 22 C",
            city: "Helsinki",
            id: '3d599471-3436-11e9-bc57-8b80ba54c431'
          },
        ]

        const typeDefs = `
          type Person {
            name: String!
            phone: String
            street: String!
            city: String! 
            id: ID!
          }

          type Query {
            personCount: Int!
            allPersons: [Person!]!
            findPerson(name: String!): Person
          }
        `

        const resolvers = {
          Query: {
            personCount: () => persons.length,
            allPersons: () => persons,
            findPerson: (root, args) =>
              persons.find(p => p.name === args.name)
          }
        }

        const server = new ApolloServer({
          typeDefs,
          resolvers,
        })

        startStandaloneServer(server, {
          listen: { port: 4000 },
        }).then(({ url }) => {
          console.log(`Server ready at ${url}`)
        })

      Start the server by running node index.js in the terminal

--- 8-a Mutation, UUID, https://github.com/uuidjs/uuid#readme
      npm install uuid
      
      import { v4 as uuidv4 } from 'uuid';
      uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'

--- 8-b Apollo Client for the frontend
      npm install @apollo/server graphql
      in the main.jsx/index.js file:

        import React from 'react'
        import ReactDOM from 'react-dom/client'
        import App from './App'

        import { ApolloClient, ApolloProvider, InMemoryCache, } from '@apollo/client'

        const client = new ApolloClient({
          uri: 'http://localhost:4000',
          cache: new InMemoryCache(),
        })

        ReactDOM.createRoot(document.getElementById('root')).render(
            <ApolloProvider client={client}>
                <App />
            </ApolloProvider>
        )

      then we can start making queries in App.js

        import { gql, useQuery } from '@apollo/client'

        const ALL_PERSONS = gql`      ****!!!CAREFUL, everything inside of `` has to be correct (curly 
        query {                           braces, brackets etc) and match same order with the typeDefs in index in the backend
          allPersons {    
            name
            phone
            id
          }
        }
        `

        const App = () => {
          const result = useQuery(ALL_PERSONS)

          if (result.loading) {
            return <div>loading...</div>
          }

          return (
            <div>
              {result.data.allPersons.map(p => p.name).join(', ')}
            </div>
          )
        }

        export default App
---

--- 

-----------------------------------------------------------------------
Navigate to the local project directory and create a local git repository:

git init

Once that is successful, click on the 'Source Control' icon on the left navbar in VS-Code.One should be able to see files ready to be commit-ed. Press on 'Commit' button, provide comments, stage the changes and commit the files. Alternatively you can run from CLI

git commit -am "Your comment"

Now you need to visit your GitHub account and create a new Repository. Exclude creating 'README.md', '.gitIgnore' files. Also do not add any License to the repo. Sometimes these settings cause issue while pushing in.

Copy the link to this newly created GitHub Repository.

Come back to the terminal in VS-CODE and type these commands in succession:

git remote add origin <Link to GitHub Repo> //maps the remote repo link to local git repo

if you get an error message 'fatal: Could not read from remote repository' -> 
change your ssh url by an http url for your remote 'origin', use:

> git remote set-url origin https://github.com/<user_name>/<repo_name>.git

Please make sure you have the correct access rights
and the repository exists

git remote -v //this is to verify the link to the remote repo

git push -u origin master // pushes the commit-ed changes into the remote repo

Note: If it is the first time the local git account is trying to connect to GitHub, you may be required to enter credentials to GitHub in a separate window.

You can see the success message in the Terminal. You can also verify by refreshing the GitHub repo online.    


----------------------------------------------------------------------
** [vite] hmr invalidate /src/main.jsx Could not Fast Refresh
     If you are using .jsx files, you should modify the vite.config.js:

        plugins: [react({
          // Add this line
          include: "**/*.jsx",
        })]
    
    Or, if you are using typescript (.tsx), you can modify the vite.config.js:

        plugins: [react({
          // Add this line
          include: "**/*.tsx",
        })]

Selector unknown returned a different result when called with the same parameters. This can lead to unnecessary rerenders.

A non-serializable value was detected in an action, in the path....
  returning the entire Axios response object from async thunks can cause error. That includes some of the Axios config setup. Don't do that

  Instead, just return response.data

--- React Router: Cannot read property 'pathname' of undefined
    try to import the following on files suspected
    import { BrowserRouter as Router } from "react-router-dom"

--- React eslint error missing in props validation
    Consider just disabling this rule until the bugs are worked out or you've upgraded your tooling:
    /* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling
    Or disable project-wide in your eslintrc:

    "rules": {
      "react/prop-types": "off"
    }

--- If page flashes when an event handler is called, likely it's becasue it's missing:
    e.preventDefault(), or has a wrong

--- Uncaught (in promise) Error: Invalid hook call. Hooks can only be called inside of the body of a 
    function component. This could happen for one of the following reasons

    This problem can also come up when you use npm link or an equivalent. In that case, your bundler might “see” two Reacts — one in application folder and one in your library folder. Assuming 'myapp' and 'mylib' are sibling folders, one possible fix is to run 'npm link ../myapp/node_modules/react' from 'mylib'. This should make the library use the application’s React copy.

    Thus, running the command: npm link <path_to_local_library>/node_modules/react, eg. in my case npm link ../../libraries/core/decipher/node_modules/react from the project directory has fixed the issue.

--- move style of material ui to another file in React

    You can do it like that

    export const btnStyle = { 
      sx:{m:0.5, px:0.75, py:0},
      size:'small', variant:'outlined'
    }

    export const gridProps = {
      container: true,
      direction: 'row',
      justifyContent: 'center',
      alignItems: 'center'
    }

    <Button {...btnStyle} />
    <Grid {...gridProps} />

--- infinite loops: careful, JSON.parse can possibly cause infinite loops

--- React-Redux state lost after refresh (part 7, userReducers)
    In your reducer file reducer/auth_reducer.js you can define the initial state of the reducer:

      const authenticationSlice = createSlice...
      name: 'authn',
      initialState: JSON.parse(window.localStorage.getItem('loggedBloglistUser')), <-- instead of [] or null
      reducers: ...

      ...
      const users = await userService.get()
      window.localStorage.setItem('allStoredUsers', JSON.stringify(users)) <-- local storage only takes string
    
--- ESLint Parsing error: Unexpected token
      just add:

      "parser": "@babel/eslint-parser"
      to your .eslintrc file and run npm install @babel/eslint-parser --save-dev

--- Send Token from front end with request:
      see exercise 7 bloglist-redux frontend services blogs.jsx
        
        let token;
        const config = () => ({
          headers: {
          Authorization: token,
          },
        });

        const setToken = (newToken) => {
          token = `Bearer ${newToken}`
        }
        ...

        const res = await axios.post(baseUrl.blogs, newObj, config())

--- Set password expiration time: see exercise 7 bloglist-redux, backend, controllers, login.js
        
        ...
        const token = jwt.sign(
          userForToken, 
          process.env.SECRET,
          { expiresIn: 60*60 }  <----
        )

--- redux data not saved/updated properly, showing 'type' and 'payload':
      check if async and await has been properly used in services, app creator & reducer

--- useContext is not a function or its return value is not iterable
      1. When using the useContext hook, the returned value is a single object, not an array.
      change the following statement.

        const [state, setState] = useStateContext();
        TO:
        const {state, setState} = useStateContext();

      2. or define the createContext() as createContext([])

        const UserContext98 = createContext([])
        with 
        const [state, setState] = useStateContext();

--- Cannot access [[promiseResult]] or the promise is showing pending
    if the .then or async/await doesn't work,
    try to store and retrieve the res.data through local storage:

      window.localStorage.setItem('allStoredUsers', JSON.stringify(res.data))

      JSON.parse(window.localStorage.getItem('allStoredUsers'))

--- Desctructured variables, curly bracets in the brackets
      this means the variable already exists in a function/object that can be desctructured to make the code more neat

      eg.
        exercise 7 bloglist-reactquery frontend,
        blogCtx and userCtx

        instead of 
          const UserCtxProvider = (props) => {
            ... {props.children} ...
        try
          const UserCtxProvider = ({children}) => {
            ... {children} ...
        
        instead of 
          export const userReducer = (state, action) => {

          switch(action.type){
          case 'setUser': 
          return action.payload...

        try 
          export const userReducer = (state, action) => {
          const {type, payload} = action
          
          switch(type){
          case 'setUser': 
          return payload...

 --- xxContext is not a function or its return value is not iterable, or
      Invalid hook call. Hooks can only be called inside of the body of a function component
        very likely it's because the <App> tag is not wrapped around by the <xxContext.Provider> tags in main.js file ( exercise 7 bloglist-reactquery frontend, main.jsx):
          
          <xxContextProvider>
            <App />  
          </xxContextProvider>

 ---  Invalid hook call. Hooks can only be called inside of the body of a function component 
      React hook cannot be called at the top level. It must be called in a react function.
      (ex 7 bloglist-reqctquery, loginReq, LoginCtx )

        Functions whose names start with use are called Hooks in React.
        Don’t call Hooks inside loops, conditions, or nested functions. Instead, always use Hooks at the top level of your React function, before any early returns. You can only call Hooks while React is rendering a function component:

        1. try call all the declared hook in the top-level file, say App.jsx, instead of children files
            
              const [... , ... ] = useContext(...)          <- bad. outside of function & at top level
            const App = () => {
              const dispatch = useDispatch()                      <-- good
              const [userState, userDisp] = useContext(UserCtx)   <-- good
          

        2. try move all the hook (useState, useReducer, useContext, useXXX... ) to the very top lines of
            a function. do not leave them outside a function:

              import { LoginCtx } from "../reducers/LoginCtx"
              ...
                const [loginState, loginDisp] = useContext(LoginCtx)  <--- BAD


              const login = async (username, password) => {
                const [loginState, loginDisp] = useContext(LoginCtx) <---GOOD
               try{
                 const res =....

        3. Delete node_modules and .next folders
          Run npm install or yarn
          Start your project again

        4. Try remove or add the hook's brackets "()" at the end of the hook and see how things go OR:

        5. You can only call hooks in the body of a function component, not in an onClick callback. If you were doing this inline, you would do it like:

          function Main() {
            const navigate = useNavigate();
            // ...
            <div className="post" onClick={(e) => navigate(`post/${1}`)}/>
            // ...
            <div className="post" onClick={(e) => navigate(`post/${2}`)}/>
          }
        If you want to make a reusable hook, the hooks can again only be called in the body of the component, so it would look something like this:

          export function useRedirectToPostID() {
            const navigate = useNavigate();
            const redirectToPostID = function(id) {
              navigate(`post/${id}`);
            }
            return redirectToPostID
          }

          // used like:
          function Main() {
            const redirectToPostID = useRedirectToPostID();
            // ...
            <div className="post" onClick={(e) => redirectToPostID(1)}/>
            // ...
            <div className="post" onClick={(e) => redirectToPostID(2)}/>
          }

  --- ReferenceError: require is not defined in ES module scope, you can use import instead
        change in package.json file, this line:
        "type":"module" to "type":"commonjs"

  --- Exercise 8, how do I reverse-query a parent object from a child object?
        type Book {
          title: String
          publish: String
          author: String   <--- how do I query the books the author created?
        }

        creat a query 'Author' besides 'Books'
          Query: {
            bookCount: () => books.length,
            ...
          },
          Author: {
            bookCount: (root) => books.filter(b => b.author === root.name).length
          }

  --- Syntax Error: Expected Name, found } / GraphQLError(`Syntax Error: ${description}       
        This error occurs mostly when there are unclosed curly braces or when some fields are not properly defined while calling the query. Or try to remove the initial curly brackets.

  --- Apollo GraphQL local state getting undefined with useQuery on refreshing app, Ex8.9 front end App.js, 
        it's weird but after changing the sequeces of the individual useQuery components things worked:

          const authorsQry = useQuery(ALL_AUTHORS)  
          const booksQry = useQuery(ALL_BOOKS)       <- BAD bookQry.data.allBooks becomes undefined

          const booksQry = useQuery(ALL_BOOKS)       <- GOOD 
          const authorsQry = useQuery(ALL_AUTHORS)

  ---




      

        
      

