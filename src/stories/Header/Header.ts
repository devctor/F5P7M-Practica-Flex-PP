// import './header.css';
import '../../../src/css/reset.css'
import '../../../src/css/base.css'
import '../../../src/css/components/atoms/colors.css'
import '../../../src/css/components/atoms/spacing.css'
import '../../../src/css/templates/header.css'
import '../../../src/css/templates/main.css'
import '../../../src/css/templates/footer.css'
// import './style.css'
import { createButton } from '../Button/Button';

export interface HeaderProps {
  user?: { name: string };
  onLogin: () => void;
  onLogout: () => void;
  onCreateAccount: () => void;
}

export const createHeader = ({ user, onLogout, onLogin, onCreateAccount }: HeaderProps) => {
  const header = document.createElement('header');

  const wrapper = document.createElement('div');
  wrapper.className = 'wrapper';

  const logo = `

<header>
  <div class="logo">
    <img src="/logo.svg" alt="logo">
  </div>
  <nav>
    <ul>
      <li><a href="#">Products</a></li>
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

  return header;
};
