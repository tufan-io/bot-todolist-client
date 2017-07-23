import React, {Component} from 'react';
import { Admin, Resource, Delete } from 'admin-on-rest';
import { restClient } from 'aor-feathers-client';
import feathersClient from './feathersClient';

import { TodosList, TodosCreate, TodosEdit } from './resources/todos';

import { UsersList, UsersCreate, UsersEdit } from './resources/users';


const options = { id: 'id' };

class App extends Component {

    constructor() {
      super();
      this.state = {
        client: null
      }
    }

    componentDidMount() {
      const self = this;
      feathersClient()
      .then(function(data) {
        self.setState({client: data});
      });
    }

    render() {
      if (this.state.client) {
        return (
          <Admin restClient={restClient(this.state.client, options)}>
          
            <Resource name="todos" list={ TodosList } create={ TodosCreate } edit={ TodosEdit } remove={Delete} />
          
            <Resource name="users" list={ UsersList } create={ UsersCreate } edit={ UsersEdit } remove={Delete} />
          
          </Admin>
        );
      }
      return <p>Loading...</p>;
    }
}

export default App;