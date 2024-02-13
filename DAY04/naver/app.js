const localeSwitch = document.getElementById('locale_switch');

const onChange = (lang, langText) => {
  const loginOptionId = document.getElementById('login-option__id');
  const disposable = document.querySelector('.disposable');
  const loginOptionQr = document.getElementById('login-option__Qr');
  const nudgeText = document.querySelector('.nudge_text');
  const id = document.getElementById('id');
  const password = document.getElementById('password');
  const buttonLogin = document.querySelector('.btn_login');
  const ipText = document.querySelector('.ip_text');
  const keepText = document.querySelector('.keep_text');
  const findText = document.querySelectorAll('.find_text');
  const footerList = document.querySelector('.footer__ul');

  const {
    loginOptionIdText,
    loginOptionQrText,
    info,
    inputId,
    inputPassword,
    buttonText,
    langKeep,
    langIpText,
    forgotPassword,
    forgotUserName,
    signUp,
  } = langText;

  if (lang !== 'ko_KR') {
    disposable.classList.add('none');
    footerList.classList.add('none');
  } else {
    disposable.classList.remove('none');
    footerList.classList.remove('none');
  }

  loginOptionId.innerText = loginOptionIdText;
  loginOptionQr.innerText = loginOptionQrText;
  nudgeText.innerText = info;
  id.setAttribute('placeholder', inputId);
  password.setAttribute('placeholder', inputPassword);
  buttonLogin.innerText = buttonText;
  keepText.innerText = langKeep;
  ipText.innerText = langIpText;
  findText[0].innerText = forgotPassword;
  findText[1].innerText = forgotUserName;
  findText[2].innerText = signUp;
};

const handleChangeLang = e => {
  const lang = e.target.value;

  const langText = {
    ko_KR: {
      loginOptionIdText: 'ID 로그인',
      loginOptionQrText: 'QR 코드',
      info: 'PC방 등 공용PC라면 QR코드 로그인이 더 안전해요.',
      inputId: '아이디',
      inputPassword: '비밀번호',
      buttonText: '로그인',
      langKeep: '로그인 상태 유지',
      langIpText: 'IP 보안',
      forgotPassword: '비밀번호 찾기',
      forgotUserName: '아이디 찾기',
      signUp: '회원 가입',
    },
    en_US: {
      loginOptionIdText: 'Sign-in with Username',
      loginOptionQrText: 'Sign-in with QR code',
      info: 'If this PC is used by multiple people, try it.',
      inputId: 'Username',
      inputPassword: 'Password',
      buttonText: 'Sign in',
      langKeep: 'Stay Signed in',
      langIpText: 'IP Security',
      forgotPassword: 'Forgot your Password',
      forgotUserName: 'Username?',
      signUp: 'Sign up',
    },
    'zh-HansCN': {
      loginOptionIdText: '使用ID登录',
      loginOptionQrText: 'QR码登录',
      info: '如果此PC被多个人使用，请尝试一下。',
      inputId: '帐号',
      inputPassword: '密码',
      buttonText: 'Sign in',
      langKeep: '维持登录状态',
      langIpText: 'IP安全',
      forgotPassword: '查询密码',
      forgotUserName: '查询ID',
      signUp: '加入会员',
    },
    'zh-Hant_TW': {
      loginOptionIdText: '使用ID登入',
      loginOptionQrText: 'QR碼登入',
      info: '如果此PC被多人使用，請嘗試一下',
      inputId: '帳號',
      inputPassword: '密碼',
      buttonText: '登入',
      langKeep: '維持登入狀態',
      langIpText: 'IP安全',
      forgotPassword: '查詢密碼',
      forgotUserName: '查詢ID?',
      signUp: '加入會員',
    },
  };

  onChange(lang, langText[lang]);
};

localeSwitch.addEventListener('change', handleChangeLang);
