import '../../../src/css/index.css'
import '../../main.ts'
import { createButton } from '../Button/Button';

export interface HeaderProps {
  user?: { name: string };
  onClick: () => void;
  onLogin: () => void;
  onLogout: () => void;
  onCreateAccount: () => void;
}

export const createHeader = ({ user, onLogout, onLogin, onCreateAccount }: HeaderProps) => {
  const header = document.createElement('div');

  const wrapper = document.createElement('div');
  wrapper.className = 'wrapper';

  const logo = `

<header id="header">
  <div class="logo">
    <img src="/logo.svg" alt="logo">
  </div>
  <nav id="main-nav">
    <ul>
      <li><a href="#">Products</a></li>
      <li><a href="#">Discounts</a></li>
      <li id="item-logo"><a href="/"><img src="/logo.svg" alt="logo mobile"></a></li>
      <li><a href="#">Our partners</a></li>
      <li><a href="#">About us</a></li>
    </ul>
  </nav>
  <button id="nav-btn" data-variant="bare">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 6H20M4 12H20M4 18H20" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </button>
</header>

`;

  wrapper.insertAdjacentHTML('afterbegin', logo);

  const account = document.createElement('div');
  // if (user) {
  //   const welcomeMessage = `<span class="welcome">Welcome, <b>${user.name}</b>!</span>`;
  //   account.innerHTML = welcomeMessage;
  //   account.appendChild(createButton({ size: 'small', label: 'Log out', onClick: onLogout }));
  // } else {
  //   account.appendChild(createButton({ size: 'small', label: 'Log in', onClick: onLogin }));
  //   account.appendChild(
  //     createButton({
  //       size: 'small',
  //       label: 'Sign up',
  //       onClick: onCreateAccount,
  //       primary: true,
  //     })
  //   );
  // }
  wrapper.appendChild(account);
  header.appendChild(wrapper);

  return logo;
};

