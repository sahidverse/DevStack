Project Name:
" Devstack"

Description:

Dev Stack Builder is a responsive web application that allows users to explore different web development technologies and build their own technology stack. Users can view technology details, add technologies to their stack, and manage their selected technologies easily.


Technologies Used to Build This Project:
- React.js
- Tailwind CSS, DaisyUI
- JavaScript (ES6+)
- React-Toastify (NPM Package)
- JSON (for technology data)
- Vite (building tool)


Features:
1. Explore technologies with details and ratings.
2. Build and manage your own tech stack.
3. Responsive UI with toast notifications.


------------------------------------------------------------

  1. What is JSX, and why is it used in React?

      JSX is an react extention. Here 'JS' denotes javascript, and X denotes extention. It used to write html like syntax in javascript. 

  2. What is the difference between props and state?

     props: Data transfer from parent component to child component. And it is read only in a child.

     state: Data is stored here. Can change over time. We can relate it with Variable.

  3. What does the `useState` hook do, and where did you use it in this project?
     
     useState is ised to store and manage data that can change inside the component.

  4. What does the `useEffect` hook do, and why did you need it to load the JSON data?
     
     when we fetch json data , useEffect store that data in a state.

  5. Why does every item in a `.map()` list need a unique `key` prop?

    unique key helps browser to understand every info's individually and tracks them.

  6. What is conditional rendering? Show one place you used it (example: the empty stack message).

     'conditional rendering'  renders components based on condition . i used it for not selecting technologies for twice
  7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
     
     by using props, i can pass data from parent component to child component. 
     and by using callback function , child can pass data to parents.