import React from 'react';
import './App.css';
import add from "@cloudbees/honeyui-icons/svg/add.svg";
import { Navbar, Icon, LoginTitle, OrgLoginDropdown, NavDropdownLogin, NavDropdownArrow } from '@cloudbees/react-honeyui';
import '@cloudbees/honeyui';
import corinne from "./corinne.jpg";
import NavDropdown from "react-bootstrap/NavDropdown";
import done from '@cloudbees/honeyui-icons/svg/done.svg';


function App() {

  const data = {
    mainframe_ui: {account: "cloudbees"},
    user: {
      accounts: [
        {
          accountId: "A-10776",
          displayName: "cloudbees",
          gcrole: "user",
          name: "cloudbees",
          roles: ["user"],
          totangoKey: "cloudbees"
        },
        {
          accountId: "5EDE4488C33E4184D5FD8E8AD92D37DD6F79D9A4",
          displayName: "rverduci",
          gcrole: "admin",
          name: "rverduci",
          roles: ["admin"],
          totangoKey: "rverduci"
        }
      ],
      emailAddress: "rverduci@cloudbees.com",
      expiry: 1598614178,
      fullName: "rverduci",
      loggedIn: true,
      logoutPage: "https://devoptics.cloudbees.com/platform/api/logout",
      segmentUid: "d2a4c0e37ddf84790956f146c458a32519bd625e",
      userName: "rverduci@cloudbees.com"
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <Navbar data={data} />
        <Icon width={30} height={30} viewBox={add.viewBox} id={add.id} />
        <LoginTitle
          title="cloudbees"
          avatar={
            <img
              className="user-avatar rounded-circle"
              alt="avatar"
              width="32px"
              height="32px"
              src={corinne} />}
        />


        <OrgLoginDropdown title={<LoginTitle
          title="cloudbees"
          avatar={
            <img
              className="user-avatar rounded-circle"
              alt="avatar"
              width="32px"
              height="32px"
              src={corinne} />}
        />}>


          <NavDropdown.Header className="text-muted" style={{width:"400px"}}>Select organization:</NavDropdown.Header>
          <NavDropdown.Item>
            <div className="d-flex align-items-center">
              <div>CloudBees</div>
              <div className="ml-auto">
                <Icon currentColor width={30} height={30} viewBox={done.viewBox} id={done.id} />
              </div>
            </div>
          </NavDropdown.Item>
          <NavDropdown.Item>
            <div className="d-flex align-items-center">
              <div>Create Organizations</div>
              <div className="ml-auto">
                <Icon currentColor width={30} height={30} viewBox={add.viewBox} id={add.id} />
              </div>
            </div>
          </NavDropdown.Item>
          <NavDropdown.Item>Manage Organizations</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item>
            <div className="d-flex align-items-center">
              <div>
                <div className="font-weight-bold">Sally Mitchell</div>
                <div className="user-emails">smitchell@cloudbees.com</div>
              </div>
              <div className="ml-auto user-initials">SM</div>
            </div>

          </NavDropdown.Item>
          <NavDropdown.Item>Settings</NavDropdown.Item>
          <NavDropdown.Item>Sign out</NavDropdown.Item>

        </OrgLoginDropdown>


        <NavDropdownLogin
          className="login-container ml-md-auto"
          title={
            <img className="user-avatar rounded-circle" alt="avatar" width="32px" src={corinne} />
          }
          id="login-nav-dropdown"
        >
          <NavDropdown.Item as="div" bsPrefix="none" className="pt-2 pt-md-0 pb-2 text-nowrap">
            <span className="small">Signed in as:</span>
            <br className="d-md-none" />
            <span className="h5 lg-regular-text">&nbsp; John Doe</span>
          </NavDropdown.Item>
          <NavDropdown.Item as="div" bsPrefix="none" className="pb-2 py-md-2 text-nowrap small">
            johndoe@example.com
          </NavDropdown.Item>
          <NavDropdown.Item>
            <button type="button" className="btn btn-link h5 mt-2 mb-0 p-0">
              Sign out
            </button>
          </NavDropdown.Item>

        </NavDropdownLogin>


        <NavDropdownArrow
          show
          title="Simple Drop Down"
          id="basic-nav-dropdown"
        >
          <NavDropdown.Item href="#action/1">Item 1</NavDropdown.Item>
          <NavDropdown.Item href="#action/1">Item 2</NavDropdown.Item>
          <NavDropdown.Item href="#action/1">Item 3</NavDropdown.Item>
          <NavDropdown.Item href="#action/1">Item 4</NavDropdown.Item>
        </NavDropdownArrow>


        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
