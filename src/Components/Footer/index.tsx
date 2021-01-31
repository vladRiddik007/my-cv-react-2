import React from 'react'
import { createStyles, makeStyles } from '@material-ui/core'

const useStyles = makeStyles(() =>
  createStyles({
    footer: {
      backgroundColor: '#222',
      color: 'white',
      textAlign: 'center',
      padding: 10,
    },
    text: {
      margin: 0,
    },
  }),
)

const Footer: React.FC = () => {
  const classes = useStyles()
  return (
    <div className={classes.footer}>
      <p className={classes.text}>
        I agree that my personal data will be processed in order to recruit for
        the position I am applying for.
      </p>
    </div>
  )
}

export default Footer
