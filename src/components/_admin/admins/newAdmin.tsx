'use client'
import Icon from '@/utils/icon'
import { Autocomplete, Box, Button, Card, CardContent, CardHeader, Divider, FormControl, InputAdornment, InputLabel, MenuItem, Select, Stack, TextField, } from '@mui/material'
import React from 'react'
import { useFormik, Form, FormikProvider } from 'formik'
import { DatePicker } from "@mui/x-date-pickers";
import { countries } from './countries'
import Input from 'react-phone-number-input/input'
import { useRouter } from 'next/navigation'
const CustomInput = React.forwardRef(function custom(props, ref) {
  return (
    <TextField
      size='small'
      {...props}
      inputRef={ref}
      {...((props as any)?.InputProps?.sx && { sx: (props as any)?.InputProps?.sx })}
      fullWidth
    />
  )
})
function newAdmin() {
  const phoneInputRef = React.useRef(null);
  const router = useRouter()
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      first_name: '',
      last_name: '',
      administrator: '',
      dob: null,
      language: 'English',
      role: "administrator",
      description: "",
      country: null,
      code: countries.find((item) => item.code === 'AE'),
      phone: '',
    },
    onSubmit: (value) => {

    },
  });



  const { values, handleSubmit, getFieldProps } = formik;

  return (
    <>
      <Card>
        <CardHeader
          sx={{
            padding: { xs: 1, md: 3 },
            pb: { md: 0 },

          }}
          subheader={
            <Button
              onClick={() => router.back()}
              startIcon={<Icon name="ic-arrow-left" />} color='inherit'>
              Back
            </Button>


          }


        />
        <Divider sx={{ maxWidth: '95%', margin: 'auto', mt: 1 }} />
        <CardContent sx={{ padding: { xs: 1, md: 3 }, pt: { xs: 3 } }}>
          <FormikProvider value={formik}>
            <Stack component={Form} spacing={3} onSubmit={handleSubmit}>
              <Stack direction='row' spacing={2}>
                <Stack width={1}>
                  <InputLabel sx={{ color: 'text.primary', fontSize: 14, fontWeight: 700 }} shrink>
                    First Name
                  </InputLabel>
                  <TextField fullWidth {...getFieldProps("first_name")} size="small" />
                </Stack>
                <Stack width={1}>
                  <InputLabel sx={{ color: 'text.primary', fontSize: 14, fontWeight: 700 }} shrink>
                    Last Name
                  </InputLabel>
                  <TextField fullWidth {...getFieldProps("last_name")} size="small" />
                </Stack>
              </Stack>
              <Stack direction='row' spacing={2}>
                <Stack width={1}>
                  <InputLabel sx={{ color: 'text.primary', fontSize: 14, fontWeight: 700 }} shrink>
                    Role
                  </InputLabel>
                  <FormControl
                    fullWidth
                  >

                    <Select

                      labelId={'select-1'}
                      id={'select-1'}
                      size="small"
                      {...getFieldProps("role")}
                    >


                      <MenuItem
                        value={'administrator'}
                      >
                        Administrator
                      </MenuItem>

                    </Select>
                  </FormControl>
                </Stack>
                <Stack width={1}>
                  <InputLabel sx={{ color: 'text.primary', fontSize: 14, fontWeight: 700 }} shrink>
                    Date Of Birth
                  </InputLabel>
                  <DatePicker
                    slotProps={{
                      textField: {
                        size: 'small',
                        fullWidth: true
                      }
                    }}
                    value={values.dob}
                    onChange={(value) => {
                      formik.setFieldValue("dob", value);
                    }}
                    format="dd-MM-yyyy"

                  />
                </Stack>
              </Stack>
              <Stack direction='row' spacing={2}>
                <Stack width={1}>
                  <InputLabel sx={{ color: 'text.primary', fontSize: 14, fontWeight: 700 }} shrink>
                    Country
                  </InputLabel>
                  <Autocomplete
                    size='small'
                    id="country-select"
                    options={countries}
                    autoHighlight
                    value={values.country}
                    onChange={(event, value) => {
                      formik.setFieldValue("country", value);
                    }}

                    getOptionLabel={(option) => option.label}
                    renderOption={(props, option) => {
                      const { key, ...optionProps } = props;
                      return (
                        <Box
                          key={key}
                          component="li"
                          sx={{ '& > img': { mr: 2, flexShrink: 0 } }}
                          {...optionProps}
                        >
                          <img
                            loading="lazy"
                            width="20"
                            srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                            src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                            alt=""
                          />
                          {option.label}
                        </Box>
                      );
                    }}
                    renderInput={(params) => (
                      <TextField

                        {...params}
                        size='small'
                        placeholder="Choose a country"
                        slotProps={{
                          htmlInput: {
                            ...params.inputProps,
                            autoComplete: 'new-password',
                          },
                        }}
                      />
                    )}
                  />
                </Stack>
                <Stack width={1}>
                  <InputLabel sx={{ color: 'text.primary', fontSize: 14, fontWeight: 700 }} shrink>
                    Language
                  </InputLabel>
                  <FormControl
                    fullWidth
                  >

                    <Select

                      labelId={'select-1'}
                      id={'select-1'}
                      size="small"
                      {...getFieldProps("language")}
                    >


                      <MenuItem
                        value={'English'}
                      >
                        English
                      </MenuItem>

                    </Select>
                  </FormControl>
                </Stack>
              </Stack>
              <Stack direction={{ xs: 'column', md: 'row' }} spacing={2}>
                <Stack width={1}>
                  <InputLabel sx={{ color: 'text.primary', fontSize: 14, fontWeight: 700 }} shrink>
                    Email
                  </InputLabel>
                  <TextField fullWidth {...getFieldProps("email")} size="small" />
                </Stack>
                <Stack width={1}>
                  <InputLabel sx={{ color: 'text.primary', fontSize: 14, fontWeight: 700 }} shrink>
                    Mobile Number
                  </InputLabel>
                  <Stack direction='row' spacing={2}>
                    <Autocomplete
                      size='small'
                      disableClearable={true}
                      sx={{ minWidth: 120 }}
                      id="country-code"
                      options={countries}
                      autoHighlight
                      value={values.code}
                      onChange={(event, value) => {
                        formik.setFieldValue("code", value);
                      }}

                      getOptionLabel={(option) => option.phone}
                      isOptionEqualToValue={(option: any, value) => option.phone === value?.phone}
                      renderOption={(props, option) => {
                        const { key, ...optionProps } = props;
                        return (
                          <Box
                            key={key}
                            component="li"
                            sx={{ '& > img': { mr: 2, flexShrink: 0 } }}
                            {...optionProps}
                          >
                            <img
                              loading="lazy"
                              width="20"
                              srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                              src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                              alt=""
                            />
                            {option.phone}
                          </Box>
                        );
                      }}
                      renderInput={(params) => (
                        <TextField

                          {...params}
                          size='small'
                          placeholder="Code"
                          slotProps={{
                            input: {
                              ...params.InputProps,
                              startAdornment:
                                <>
                                  <InputAdornment position="start">
                                    <img
                                      loading="lazy"
                                      width="20"
                                      srcSet={`https://flagcdn.com/w40/${values?.code?.code.toLowerCase()}.png 2x`}
                                      src={`https://flagcdn.com/w20/${values?.code?.code.toLowerCase()}.png`}
                                      alt=""
                                    />
                                  </InputAdornment>
                                  {params.InputProps.startAdornment}
                                </>
                            },
                            htmlInput: {
                              ...params.inputProps,
                              autoComplete: 'new-password',
                            },
                          }}
                        />
                      )}
                    />
                    <Input
                      ref={phoneInputRef}
                      country={values?.code?.code as any ?? "AE"}
                      fullWidth
                      inputComponent={CustomInput as any}
                      value={values.phone}
                      onChange={
                        (value) => {
                          formik.setFieldValue("phone", value);
                        }
                      } />
                  </Stack>

                </Stack>
              </Stack>
              <Stack direction='row' justifyContent='flex-end' spacing={2}>
                <Button sx={{ color: 'text.secondary', width: { xs: 1, sm: 'auto' } }} startIcon={<Icon name="ic-cancel" />} variant='contained' color='inherit'>
                  Cancel
                </Button>
                <Button sx={{ width: { xs: 1, sm: 'auto' } }} startIcon={<Icon name="ic-user-shield" />} type='submit' variant='contained'>
                  Create Admin
                </Button>
              </Stack>
            </Stack>
          </FormikProvider>
        </CardContent>
      </Card>
    </>
  )
}

export default newAdmin