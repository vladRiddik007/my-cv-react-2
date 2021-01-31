import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import { IconButton, TextField } from '@material-ui/core'
import { ActionKind } from '../../Pages/MainPage/reducer'

const useStyles = makeStyles({
  list: {
    width: 500,
  },
  fullList: {
    width: 'auto',
  },
})

export default function CustomDrawer({ user, dispatch }: any) {
  const classes = useStyles()
  const [state, setState] = React.useState({ right: false })

  const toggleDrawer = (open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent,
  ) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return
    }
    setState({ ...state, right: open })
  }

  const list = () => (
    <div className={classes.list} role="presentation">
      <List>
        <ListItem>
          <TextField
            fullWidth
            required
            size="small"
            margin="dense"
            type="text"
            variant="outlined"
            label="Name"
            value={user.name}
            onChange={e => {
              dispatch({ type: ActionKind.setName, payload: e.target.value })
            }}
          />
        </ListItem>
        <ListItem>
          <TextField
            fullWidth
            required
            size="small"
            margin="dense"
            type="text"
            variant="outlined"
            label="Profession"
            value={user.profession}
            onChange={e => {
              dispatch({
                type: ActionKind.setProfession,
                payload: e.target.value,
              })
            }}
          />
        </ListItem>
      </List>
    </div>
  )

  return (
    <div>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="menu"
        onClick={toggleDrawer(true)}
      >
        <span style={{ fontSize: '1.5em', margin: 7, color: 'blue' }}>
          <i className="far fa-edit"></i>
        </span>
      </IconButton>
      <Drawer
        anchor={'right'}
        open={state['right']}
        onClose={toggleDrawer(false)}
      >
        {list()}
      </Drawer>
    </div>
  )
}
