import './styles/application.scss';
import render from './renderer.jsx';

createRoot();

render();

function createRoot() {
  const component = document.createElement('div');

  component.id = 'root';

  document.body.appendChild(component);
}
