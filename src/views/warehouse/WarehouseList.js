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

const WarehouseList = () => {
  return (
    <CRow>
      <CCol xs="12">
      <CCard>
            <CCardHeader className="text-center">
                <strong>
                    Warehouse List
                    <small> </small>
                </strong>
            </CCardHeader>
            <CCardBody>
                <table class="table table-bordered">
                    <thead>
                    <tr className="table-success">
                        <th>Name</th>
                        <th>City</th> 
                        <th>Phone</th>
                        <th>Manager Phone</th>
                        <th>Email</th>
                        <th>Land Area</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </CCardBody>
          </CCard>
      </CCol>
    </CRow>
  )
}

export default WarehouseList;
