import * as React from 'react'
import Button from './components/button'
import Field from './components/field'
import GridContainer from './components/grid-container'
import Select from './components/select'
import Table from './components/table'

import { getLocations, isNameValid } from './mock-api/apis'

import styles from './App.module.scss'

function App() {
  const INVALID_NAME_ERROR = 'this name has already been taken'
  const EMPTY_NAME_ERROR = 'name must be provided'
  const TABLE_HEADER = [ { value: "Name" }, { value: "Location" } ]

  const [ name, setName ] = React.useState('')
  const [ fieldHint, setFieldHint ] = React.useState('')
  const [ isHintVisible, setIsHintVisible ] = React.useState(false)
  const [ locales, setLocales ] = React.useState('')
  const [ selectedLocale, setSelectedLocale ] = React.useState('')
  const [ tableData, setTableData ] = React.useState([])

  React.useEffect(() => {
    async function getLocales() {
      try {
        const locales = await getLocations()
        setLocales(locales)
      } catch (e) {
        console.error(e)
      }
    }

    getLocales()
  }, [])

  const handleOnChange = async (e) => {
    const fieldValue = e.target.value
    setName(fieldValue)
  }

  const handleOnSelectDropdown = (e) => {
    const selectedItem = e.target.value
    if (!selectedItem) return
    setSelectedLocale(selectedItem)
  }

  const handleOnSubmit = async (e) => {
    e.preventDefault()
    const isValid = await isNameValid(name)
    if (isValid) {
      setIsHintVisible(false)
      setTableData([ ...tableData, [ { value: name }, { value: selectedLocale } ] ])
      setName('')
      setSelectedLocale('')
    } else {
      setFieldHint(INVALID_NAME_ERROR)
      setIsHintVisible(true)
    }
  }

  const handleReset = () => {
    setIsHintVisible(false)
    setTableData([])
    setName('')
    setSelectedLocale('')
  }

  return (
    <GridContainer className={styles.App}>
      <form onSubmit={handleOnSubmit} className={styles.form}>
        <Field
          required={true}
          id="name"
          name="name"
          placeholder=""
          value={name}
          onChange={handleOnChange}
          status={isHintVisible ? 'error' : null}
          hint={isHintVisible ? fieldHint : null}
          hideLabel={false}
          classes={styles.label}
          className={styles.field}
        >
          Name
        </Field>
        <Select
          className={styles.select}
          isDisabled={false}
          onChange={handleOnSelectDropdown}
          id="location"
          placeholder={"Location"}
          label="Location"
          options={locales}
          value={selectedLocale}
        />
        <div className={styles.buttonGroup}>
          <Button kind="primary" mobileBlock={true} type={'reset'} className={styles.button} onClick={handleReset}>Clear</Button>
          <Button kind="primary" mobileBlock={true} type={'submit'} className={styles.button}>Add</Button>
        </div>
      </form>
      <div className={styles.tableWrapper}>
        <Table columnHeading={TABLE_HEADER} rows={tableData} aria-label="Name and Location Table" />
      </div>
    </GridContainer>
  );
}

export default App;
