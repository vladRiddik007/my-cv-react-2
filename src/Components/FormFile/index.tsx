import React from 'react'
import { Box, createStyles, makeStyles } from '@material-ui/core'
import { ApiFileToBase64 } from '../../Utils/ApiFile'
import photo from '../../assets/photo.jpg'

export const InputPhoto: React.FC<any> = ({ children, ...props }) => {
  return (
    <>
      <label htmlFor="upload-button">{children}</label>
      <input
        accept="image/*"
        id="upload-button"
        style={{ display: 'none' }}
        type="file"
        name="photo"
        {...props}
      />
    </>
  )
}

const useStyles = makeStyles(() =>
  createStyles({
    loadPhoto: {
      '& img': {
        cursor: 'pointer',
        maxWidth: 250,
        maxHeight: 250,
      },
    },
    deleteIcon: {
      position: 'absolute',
      top: 5,
      right: 5,
    },
  }),
)

const FormFile: React.FC = () => {
  const classes = useStyles()
  const [file, setFile] = React.useState<{ [key: string]: any }>({
    idimageFile: photo,
  })

  const handleSetFormFile = async (event: any) => {
    const {
      target: { files },
    } = event
    if (files.length) {
      setFile({
        ...file,
        idimageFile: await ApiFileToBase64(files[0]),
      })
    }
  }
  return (
    <Box className={classes.loadPhoto}>
      <InputPhoto onChange={handleSetFormFile}>
        <img src={file.idimageFile} alt="user" />
      </InputPhoto>
    </Box>
  )
}

export default FormFile
