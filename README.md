# Starter Code

This repo provides the bare minimum template for CRA (no redux, eslint, husky, pre-commit hooks, or other utils).

It does include jest, RTL, JS-Dom, Jest-Jasmine test-runner config to allow [BDD-Lazy-Var](https://github.com/stalniy/bdd-lazy-var) for memoization test declarations, as well as setUpTests to house boilerplate configs for test runs, as well as coverage reports.

Assumes developer has npm / nvm installed with an updated version of node.

- Install: `yarn install`
- Test: `yarn test`
- Development: `yarn start`
- Deployment: `yarn build`

##### This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).



- Elevator class or interface
- state to track the level the elevator on 
- we need actions
    - open door (set state for doorOpen (boolean))
    - close door (set state for doorOpen (boolean))
    - move up (set state for level)
    - move down (set state for level)
    - take input for what floor to move to
    - does elevator go FIFO 

-  Building 
    - has basement, lobby (no 1st floor - 1st floor is lobby)
    - has 10 floors
    - add floor to collection 

Bonus: 
 - weight limitations 
 - number of occupants
 - Multiple Elevators 
 - which elevator moves down when button is pressed? - the closest one? 
 