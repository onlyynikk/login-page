import React, { useState } from 'react'
import image from '../image/4505770.jpg'
import axios from 'axios'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css.map'

const URL = 'https://reqres.in/api/login'

function LoginForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    axios
      .post(URL, { email, password })
      .then((res) => {
        console.log(res)
        alert(res.data.token)
      })
      .catch((er) => {
        alert(er.response.data.error)
      })
    setEmail('')
    setPassword('')
  }

  return (
    <div className="container text-center">
      <div className="row">
        <div className=" col-md-4 form">
          <form onSubmit={handleSubmit} className="form-container">
            <div className="mb-3  ">
              <label className="form-label">Welcome Back</label>

              <input
                placeholder="Email Address*"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3">
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Password*"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>

            <button type="submit" className=" btn-submit btn-color1">
              Login
            </button>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label className="form-check-label">Remember Password</label>
            </div>
          </form>
        </div>
        <div className=" col-md-8 image ">
          <img
            alt="illustration of a person with laptop"
            className="img"
            src={image}
          />
        </div>
      </div>
    </div>
  )
}

export default LoginForm
