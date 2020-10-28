import React from 'react';
import './App.css';
import Amplify from 'aws-amplify';
//import { AmplifyAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components';
import awsconfig from './aws-exports';

Amplify.configure(awsconfig);

const onBtnClick = () => {
  fetch("https://tzf1sbnlo9.execute-api.eu-west-1.amazonaws.com/dev/todo")
  .then(response => response.json())
  .then(data => console.log(data))
};

const App = () => (
  <div>
    <AmplifySignOut />
    <input type="button" onClick={onBtnClick}></input>
  </div>
);

export default withAuthenticator(App);
