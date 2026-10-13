# React Fundamentals

Working examples for the **Introduction to React: The Basics** lesson (Delhi College, ICT Department): components, JSX, props, state, events, conditional rendering and lists.

## Run it

```
npm install
npm run dev
```

Open the address Vite prints, usually http://localhost:5173. The page shows the mini project (two Student Information Cards).

## The examples

| Topic | File | What it shows |
| --- | --- | --- |
| Components | [src/lessons/Welcome.jsx](src/lessons/Welcome.jsx) | A first function component that returns JSX |
| Components | [src/lessons/UsingWelcome.jsx](src/lessons/UsingWelcome.jsx) | Importing a component and using it as `<Welcome />` |
| JSX | [src/lessons/Course.jsx](src/lessons/Course.jsx) | `className`, self-closing tags and `{ }` in JSX |
| Displaying data | [src/lessons/DisplayData.jsx](src/lessons/DisplayData.jsx) | Showing a variable inside JSX |
| Displaying data | [src/lessons/StudentDetails.jsx](src/lessons/StudentDetails.jsx) | Object properties, maths and string methods in `{ }` |
| Props | [src/lessons/StudentProfile.jsx](src/lessons/StudentProfile.jsx), [src/lessons/ClassList.jsx](src/lessons/ClassList.jsx) | One component, different props, different output |
| State | [src/lessons/Counter.jsx](src/lessons/Counter.jsx) | `useState` and re-rendering on click |
| Events | [src/lessons/NameForm.jsx](src/lessons/NameForm.jsx) | `onChange`, `onClick` and a controlled input |
| Conditions and lists | [src/lessons/CourseList.jsx](src/lessons/CourseList.jsx) | A ternary and `.map()` with keys |
| Mini project | [src/App.jsx](src/App.jsx), [src/StudentCard.jsx](src/StudentCard.jsx), [src/StudentCard.css](src/StudentCard.css) | The mini project: props, state, events and CSS together |

## See all the lesson examples on one page

Open `src/main.jsx` and change

```js
import App from './App.jsx'
```

to

```js
import App from './lessons/AllLessons.jsx'
```

Save, and the browser shows every lesson example on one page. Change it back to see the mini project again.
