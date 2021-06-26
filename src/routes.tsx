import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Home } from './pages/Home';
import { NewRoom } from './pages/NewRoom';
import { Room } from './pages/Room';
import { AdminRoom } from './pages/AdminRoom';

export function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/new-room" component={NewRoom} />
        <Route path="/rooms/:id" component={Room} />
      
        <Route path="/admin/rooms/:id" component={AdminRoom} />
      </Switch>

    </BrowserRouter>
  );
}