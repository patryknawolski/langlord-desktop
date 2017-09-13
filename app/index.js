// Styles
import './styles/application.scss';

function getComponent() {
  const component = document.createElement('div');

  component.innerHTML = 'Hello world';

  return component;
}

document.body.appendChild(getComponent());
