import React from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CCollapse,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CFade,
  CForm,
  CFormGroup,
  CFormText,
  CValidFeedback,
  CInvalidFeedback,
  CTextarea,
  CInput,
  CInputFile,
  CInputCheckbox,
  CInputRadio,
  CInputGroup,
  CInputGroupAppend,
  CInputGroupPrepend,
  CDropdown,
  CInputGroupText,
  CLabel,
  CSelect,
  CDataTable,
  CRow,
  CSwitch
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { DocsLink } from 'src/reusable'

const Devices = () => {
  return (
    <div className="row">
        <div className="col-md-4 col-lg-3">
          <div className="card text-center px-2 py-4" style={{}}>
            <div className="card-body">
              <h5> <strong>Device 1</strong></h5>
              <span className="badge badge-success">&ensp;</span>
            </div>
          </div>     
        </div>
        <div className="col-md-4 col-lg-3">
          <div className="card text-center px-2 py-4" style={{}}>
            <div className="card-body">
              <h5> <strong>Device 2</strong></h5>
              <span className="badge badge-success">&ensp;</span>
            </div>
          </div>     
        </div>
        <div className="col-md-4 col-lg-3">
          <div className="card text-center px-2 py-4" style={{}}>
            <div className="card-body">
              <h5> <strong>Device 3</strong></h5>
              <span className="badge badge-success">&ensp;</span>
            </div>
          </div>     
        </div>
        <div className="col-md-4 col-lg-3">
          <div className="card text-center px-2 py-4" style={{}}>
            <div className="card-body">
              <h5> <strong>Device 4</strong></h5>
              <span className="badge badge-warning">&ensp;</span>
            </div>
          </div>     
        </div>
        <div className="col-md-4 col-lg-3">
          <div className="card text-center px-2 py-4" style={{}}>
            <div className="card-body">
              <h5> <strong>Device 5</strong></h5>
              <span className="badge badge-success">&ensp;</span>
            </div>
          </div>     
        </div>
    </div>
  )
}

export default Devices;
