import '../../../src/css/index.css'
import { createButton } from '../Button/Button';

export interface HeaderProps {
  user?: { name: string };
  onLogin: () => void;
  onLogout: () => void;
  onCreateAccount: () => void;
}

export const createHeader = ({ user, onLogout, onLogin, onCreateAccount }: HeaderProps) => {
  const header = document.createElement('div');

  const wrapper = document.createElement('div');
  wrapper.className = 'wrapper';

  const logo = `

<header>
  <div class="logo">
    <img src="/logo.svg" alt="logo">
  </div>
  <nav>
    <ul>
      <li><a href="#">Products a</a></li>
      <li><a href="#">Discounts</a></li>
      <li><a href="/"><img src="/logo.svg" alt="logo mobile"></a></li>
      <li><a href="#">Our partners</a></li>
      <li><a href="#">About us</a></li>
    </ul>
  </nav>
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
