export const Login = () => {
  return (
    <>
      <div className="header-login">
        <div className="container ">
          <div>
            <h1>Login</h1>
            <p>Entra com sua conta</p>
          </div>
        </div>
      </div>

      <div className="container">
        <div id="login">
          <div id="login-form">
            <form action="/" method="post">
              <div className="mb-3">
                <div id="emailHelp" className="form-text">   DIGITE SEU EMAIL:</div>
                <input type="email" className="form-control" aria-describedby="emailHelp"
                  placeholder="example@mail.com" />
              </div>
              <div className="mb-3">
                <div id="passwordHelp" className="form-text">   DIGITE SUA SENHA:</div>
                <input type="password" className="form-control" placeholder="*************" />
              </div>
              <button className="btn btn-warning"><b>ENTRAR</b></button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
