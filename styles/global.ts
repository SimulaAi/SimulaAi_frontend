import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }

  .header-login {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 60px;
  color: white;
  height: 200px;
  text-align: center;
  background: linear-gradient(to right, #ffb859, #ffb158, #ffa957, #ffa258, #ff9b58, #ff9458, #ff8e58, #ff8758, #ff7f58, #ff7758, #ff6e59, #ff655a);
  }

  .header-login h1 {
  padding-bottom: 20px;
}

#login {
  display: flex;
  justify-content: center;
  align-items: center;
}

#login-form {
  width: 400px;

}

#login-form input {
  border-radius: 25px;
  background-color: #ECECEC;
}

#login .form-text {
  letter-spacing: .08rem;
  color: rgb(145, 143, 143);
}
`
