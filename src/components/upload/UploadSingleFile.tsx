import PropTypes from 'prop-types';

// mui
import { alpha, styled } from '@mui/material/styles';
import { Paper, Box, Typography, Stack } from '@mui/material';

// react dropzone
import { useDropzone } from 'react-dropzone';

// utils
import { fData } from 'src/utils/formatNumber';
import Icon from '@/utils/icon';

const DropZoneStyle = styled('div')(({ theme }) => ({
  outline: 'none',
  display: 'flex',
  overflow: 'hidden',
  textAlign: 'center',
  position: 'relative',
  alignItems: 'center',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: theme.spacing(3, 0),
  borderRadius: 12,
  transition: theme.transitions.create('padding'),
  backgroundColor: theme.palette.background.paper,
  border: `1px dashed ${theme.palette.primary.main}`,
  '&:hover': {
    opacity: 0.72,
    cursor: 'pointer',
  },
  [theme.breakpoints.up('md')]: { textAlign: 'left', flexDirection: 'row' },
}));

// ----------------------------------------------------------------------

UploadSingleFile.propTypes = {
  error: PropTypes.bool,
  file: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  sx: PropTypes.object,
  state: PropTypes.object,
  onDrop: PropTypes.func.isRequired,
  loading: PropTypes.number.isRequired,
};

export default function UploadSingleFile({ ...props }) {
  const { error, file, sx, onDrop, loading, ...other } = props;

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragReject,
    fileRejections,
  } = useDropzone({
    multiple: false,
    onDrop,
    ...other,
  });

  const ShowRejectionItems = () => (
    <Paper
      variant='outlined'
      sx={{
        py: 1,
        px: 2,
        mt: 3,
        borderColor: 'error.light',
        bgcolor: (theme) => alpha(theme.palette.error.main, 0.08),
      }}>
      {fileRejections.map(({ file, errors }: any) => {
        const { path, size } = file;
        return (
          <Box
            key={path}
            sx={{ my: 1 }}>
            <Typography
              variant='subtitle2'
              noWrap>
              {path} - {fData(size)}
            </Typography>
            {errors.map((e: any) => (
              <Typography
                key={e.code}
                variant='caption'
                component='p'>
                - {e.message}
              </Typography>
            ))}
          </Box>
        );
      })}
    </Paper>
  );

  return (
    <Box sx={{ width: '100%', ...sx }}>
      <DropZoneStyle
        {...getRootProps()}
        sx={{
          ...(isDragActive && { opacity: 0.72 }),
          ...((isDragReject || error) && {
            color: 'error.main',
            borderColor: 'error.light',
            bgcolor: 'error.lighter',
          }),
          ...(other.category && { padding: '8px 0' }),
        }}>
        {loading && (
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: loading ? `${loading}%` : 0,
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              bgcolor: (theme) => alpha(theme.palette.primary.main, 0.8),
              zIndex: 9999,
            }}>
            <Typography
              variant='h6'
              color='text.primary'>
              {loading}%
            </Typography>
          </Box>
        )}
        <input {...getInputProps()} />
        <Stack
          alignItems='center'
          justifyContent='center'>
          {!other.category && <Icon name='upload' />}
          <Typography
            variant={'subtitle1'}
            color='text.secondary'>
            {'Drag screenshot to upload'}
          </Typography>
        </Stack>

        {file && (
          <Box
            component='img'
            alt='file preview'
            src={!file.preview ? file.url : file.preview}
            sx={{
              top: 8,
              borderRadius: 1,
              objectFit: 'contain',
              position: 'absolute',
              width: 'calc(100% - 16px)',
              height: 'calc(100% - 16px)',
              backgroundColor: 'background.paper',
            }}
          />
        )}
      </DropZoneStyle>

      {fileRejections.length > 0 && <ShowRejectionItems />}
    </Box>
  );
}
