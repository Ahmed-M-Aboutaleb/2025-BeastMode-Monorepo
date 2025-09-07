export const registerToLogin = [
  "polygon(35% 0,100% 0,100% 100%,56% 100%,45% 0)", 
  "polygon(0 0,100% 0,100% 100%,56% 100%,0 0)", 
  "polygon(0 0,100% 0,100% 100%,100% 100%,0 100%)", 
  "polygon(0 0,100% 0,60% 0,40% 100%,0 100%)", 
];

export const loginToRegister = [
  "polygon(0 0,100% 0,72% 0,42% 100%,0 100%)", 
  "polygon(0 0,100% 0,100% 0,42% 100%,0 100%)", 
  "polygon(0 0,100% 0,100% 100%,50% 100%,0 100%)", 
  "polygon(35% 0,100% 0,100% 100%,56% 100%,35% 0)", 
];

export const variants = {
  login: { clipPath: loginToRegister },
  register: { clipPath: registerToLogin },
};
