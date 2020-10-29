import React from 'react';
import './App.css';
import Amplify from 'aws-amplify';
//import { AmplifyAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components';
import awsconfig from './aws-exports';

Amplify.configure(awsconfig);

const onBtnClick = async () => {
  const user = await Amplify.Auth.currentAuthenticatedUser();
  const token = user.signInUserSession.idToken.jwtToken;
  fetch("https://tzf1sbnlo9.execute-api.eu-west-1.amazonaws.com/dev/todoist", {
    method: 'POST', headers: {
      Authorization: token
    }
  })
    .then(response => response.json())
    .then(data => console.log(data))
};

const onGetClick = async () => {
  const user = await Amplify.Auth.currentAuthenticatedUser();
  const token = user.signInUserSession.idToken.jwtToken;
  fetch("https://tzf1sbnlo9.execute-api.eu-west-1.amazonaws.com/dev/todoist", {
    method: 'GET',
    headers: {
      Authorization: token
    }
  })
    .then(response => console.log(response))
};

const App = () => (
  <div>
    <AmplifySignOut />
    <input type="button" onClick={onBtnClick} value="post"></input>

    <input type="button" onClick={onGetClick} value="get"></input>
  </div>
);

export default withAuthenticator(App);
