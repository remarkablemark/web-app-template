import './index.css';
import reportWebVitals from './reportWebVitals';

document.getElementById('app').innerHTML = `
  <h1>Welcome to <code>web-app-template</code></h1>
  <a
    href="https://github.com/remarkablemark/web-app-template"
    target="_blank"
    rel="noopener noreferrer"
  >
    View Source
  </a>
`;

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
