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
              <div>
                <strong>Device # 10001</strong>
              </div>
              <div>
                <small>Riyadh</small>
              </div>
              <div>
                <span>Status : Online</span> &nbsp;
                <span className="badge badge-success">&ensp;</span>
                <span><CIcon className="cil-devices"></CIcon></span>
              </div>
            </div>
          </div>     
        </div>
        
    </div>
  )
}

export default Devices;
