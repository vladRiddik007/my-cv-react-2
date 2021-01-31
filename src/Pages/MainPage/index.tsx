import React from 'react'
import {
  Box,
  Button,
  Container,
  createStyles,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemText,
  makeStyles,
  Typography,
} from '@material-ui/core'
import FormFile from '../../Components/FormFile'
import Pdf from 'react-to-pdf'
import Footer from '../../Components/Footer'
import Rating, { IconContainerProps } from '@material-ui/lab/Rating'
import { initialState, reducer } from './reducer'
import CustomDrawer from '../../Components/Drawer'

const customIcons: {
  [index: number]: { icon: React.ReactElement; label: string }
} = {
  1: {
    icon: <i className="far fa-star"></i>,
    label: 'Very Dissatisfied',
  },
  2: {
    icon: <i className="far fa-star"></i>,
    label: 'Dissatisfied',
  },
  3: {
    icon: <i className="far fa-star"></i>,
    label: 'Neutral',
  },
  4: {
    icon: <i className="far fa-star"></i>,
    label: 'Satisfied',
  },
  5: {
    icon: <i className="far fa-star"></i>,
    label: 'Very Satisfied',
  },
  6: {
    icon: <i className="far fa-star"></i>,
    label: 'The Best',
  },
}

function IconContainer(props: IconContainerProps) {
  const { value, ...other } = props
  return <span {...other}>{customIcons[value].icon}</span>
}

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      flexGrow: 1,
      '& .MuiGrid-spacing-xs-3': {
        margin: 0,
      },
    },
    firstBlock: {
      backgroundColor: 'grey',
    },
    secondBlock: {},
    link: {
      display: 'flex',
      alignItems: 'center',
    },
    contacts: {
      '& .MuiSvgIcon-root': {
        margin: 7,
      },
    },
    phone: {
      color: '#000',
      fontSize: 16,
      fontWeight: 900,
    },
    buttonPdf: {
      margin: '10px auto',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  }),
)

const MainPage: React.FC = () => {
  const classes = useStyles()
  const ref = React.createRef()
  const [value, setValue] = React.useState<number | null>(2)
  const [user, dispatch] = React.useReducer(reducer, initialState)

  return (
    <>
      <Box className={classes.buttonPdf}>
        <Pdf targetRef={ref} filename="cv-example.pdf">
          {({ toPdf }: any) => (
            <Button onClick={toPdf} variant="contained" color="primary">
              Generate Pdf
            </Button>
          )}
        </Pdf>
        <CustomDrawer user={user} dispatch={dispatch} />
      </Box>

      <Container className={classes.root} innerRef={ref}>
        <Grid
          container
          wrap="nowrap"
          justify="space-between"
          direction="row"
          spacing={3}
        >
          <Grid container item xs={6} className={classes.firstBlock}>
            <Grid item md={5}>
              <FormFile />
            </Grid>

            <Grid item md={7} className={classes.contacts}>
              <Box>
                <Typography gutterBottom variant="h6">
                  My contacts:
                </Typography>
              </Box>
              <Box className={classes.link}>
                <span style={{ fontSize: '1.5em', margin: 7 }}>
                  <i className="fas fa-phone-alt"></i>
                </span>

                <a href="tel:+380956886720" className={classes.phone}>
                  +38 (095) 688-67-20
                </a>
              </Box>
              <Box className={classes.link}>
                <span style={{ fontSize: '1.5em', margin: 7 }}>
                  <i className="fas fa-at"></i>
                </span>
                <a
                  href="mailto:vlad.sidikov007@gmail.com"
                  className={classes.phone}
                >
                  vlad.sidikov007@gmail.com
                </a>
              </Box>
              <Box className={classes.link}>
                <span style={{ fontSize: '1.5em', margin: 7 }}>
                  <i className="fab fa-github"></i>
                </span>
                <a
                  href="http://github.com/vladRiddik007"
                  className={classes.phone}
                  target="_blanck"
                >
                  http://github.com/vladRiddik007
                </a>
              </Box>
              <Box className={classes.link}>
                <span style={{ fontSize: '1.5em', margin: 7 }}>
                  <i className="fab fa-linkedin"></i>
                </span>
                <a
                  href="http://linkedin.com/in/vladyslav-sidikov-7425a019b"
                  className={classes.phone}
                  target="_blanck"
                >
                  http://linkedin.com/in/vladyslav-sidikov-7425a019b
                </a>
              </Box>
              <Box className={classes.link}>
                <span style={{ fontSize: '1.5em', margin: 7 }}>
                  <i className="fab fa-instagram-square"></i>
                </span>
                <a
                  href="https://www.instagram.com/"
                  className={classes.phone}
                  target="_blanck"
                >
                  Vladyslav Sidikov
                </a>
              </Box>
            </Grid>
            <Box mt={4}>
              <Typography gutterBottom variant="h6">
                Profile
              </Typography>
              <Typography>
                I am proficient in JavaScript, CSS, HTML and React with Redux. I
                am also have skill at using Git. I’m always working towards
                updating my skills.
              </Typography>
            </Box>
            <Box mt={4}>
              <Typography gutterBottom variant="h6">
                Skills:
              </Typography>
              <Box>
                <List dense>
                  <ListItem>
                    <i className="fas fa-check"></i>
                    <ListItemText primary="JavaScript, TypeScript;" />
                  </ListItem>
                  <ListItem>
                    <i className="fas fa-check"></i>
                    <ListItemText primary="CSS, CSS3, Adaptive layout, Styled-component, SCSS;" />
                  </ListItem>
                  <ListItem>
                    <i className="fas fa-check"></i>
                    <ListItemText primary="React JS;" />
                  </ListItem>
                </List>
              </Box>
            </Box>
            <Box mt={4}>
              <Typography gutterBottom variant="h6">
                Languages:
              </Typography>
              <Box display="flex" mb={3}>
                <Typography component="legend">English</Typography>
                <Rating
                  name="English"
                  getLabelText={(value: number) => customIcons[value].label}
                  IconContainerComponent={IconContainer}
                  value={value}
                  onChange={(event, newValue) => {
                    setValue(newValue)
                  }}
                />
              </Box>
              <Box display="flex" mb={3}>
                <Typography component="legend">Russian</Typography>
                <Rating
                  name="Russian"
                  getLabelText={(value: number) => customIcons[value].label}
                  IconContainerComponent={IconContainer}
                  value={value}
                  onChange={(event, newValue) => {
                    setValue(newValue)
                  }}
                />
              </Box>
              <Box display="flex" mb={3}>
                <Typography component="legend">Ukrainian</Typography>
                <Rating
                  name="Ukrainian"
                  getLabelText={(value: number) => customIcons[value].label}
                  IconContainerComponent={IconContainer}
                  value={value}
                  onChange={(event, newValue) => {
                    setValue(newValue)
                  }}
                />
              </Box>
            </Box>
          </Grid>
          <Divider orientation="vertical" flexItem />
          <Grid item xs={6} className={classes.secondBlock}>
            <Typography gutterBottom variant="h6">
              {`Hello! I'm ${user.name}`}
              <br />
              {`I'm a ${user.profession}`}
            </Typography>
            <Box>
              <Typography gutterBottom variant="h6">
                Educatione
              </Typography>
              <Typography>
                09.2010 - 05.2015 Ukrainian state university of railway
                transport
              </Typography>
            </Box>
            <Box>
              <Typography gutterBottom variant="h6">
                Experience
              </Typography>
              <Box>
                <Typography>07.2020 - present</Typography>
                <Typography gutterBottom variant="h6">
                  FlySoft
                </Typography>
                <Typography>Front End developer(React)</Typography>
                <Typography gutterBottom variant="h6">
                  Skills list:
                </Typography>
                <ul>
                  <li>JavaScript (ES6), Typescript;</li>
                  <li>React (React hooks, React-Router);</li>
                  <li>Redux( redux thunk);</li>
                  <li>NextJs;</li>
                </ul>

                <Typography gutterBottom variant="h6">
                  Responsibilities:
                </Typography>
                <ul>
                  <li>Project setup;</li>
                  <li>Responsive layouts using React;</li>
                  <li>Services integration;</li>
                  <li>Connecting to backend.</li>
                </ul>
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Footer />
      </Container>
    </>
  )
}

export default MainPage
