import React from 'react';
import { Admin, Resource, Delete } from 'admin-on-rest';
import { restClient } from 'aor-feathers-client';
import feathersClient from './feathersClient';

import { TodosList, TodosCreate, TodosEdit } from './resources/todos';

import { UsersList, UsersCreate, UsersEdit } from './resources/users';


const options = { id: 'id' };

const App = () => (
    <Admin restClient={restClient(feathersClient, options)}>
      
      <Resource name="todos" list={ TodosList } create={ TodosCreate } edit={ TodosEdit } remove={Delete} />
      
      <Resource name="users" list={ UsersList } create={ UsersCreate } edit={ UsersEdit } remove={Delete} />
      
    </Admin>
);

export default App;