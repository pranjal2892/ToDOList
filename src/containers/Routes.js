
import React from 'react'
import { Redirect, Route, Switch} from 'react-router-dom'
import ToDolist from './ToDolist'

export const Routes = () => {
  return (
    <div>

      <main>
        <Switch>
          <Route path="/" component={ToDolist} />
        </Switch>
      </main>
    </div>
  )
}
