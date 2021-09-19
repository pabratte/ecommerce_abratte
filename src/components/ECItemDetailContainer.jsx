import React, {useEffect} from 'react'
import { Container, Alert } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSync } from '@fortawesome/free-solid-svg-icons'
import  ECItemDetail  from './ECItemDetail'
import { getItem } from '../utils/API'
import { useParams } from 'react-router-dom'

function ECItemDetailContainer() {
  const [item, setItem] = React.useState(undefined)
  const [errorMsg, setErrorMsg] = React.useState('')
  const [loading, setLoading] = React.useState(true)

  let {itemId} = useParams()

  useEffect(() => {
    setLoading(true)
    getItem(itemId).then(item => {
      setLoading(false)  
      setItem(item)
    }).catch( err => {
      setItem(null)
      setErrorMsg(err)
    })
  }, [itemId])

  return (
    <>
      { loading && <Alert variant="info" className="mt-3"><FontAwesomeIcon className="fa-spin" icon={faSync} /><span className="m-2">Cargando...</span></Alert> }
      { !loading && !item && <Alert variant="danger" className="mt-3"><span className="m-2">An error ocurred: {errorMsg}</span></Alert> }
      { !loading && item && <ECItemDetail item={item}></ECItemDetail> }
    </>
  )
}

export default ECItemDetailContainer;
