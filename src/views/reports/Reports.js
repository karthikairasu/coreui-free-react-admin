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

const Reports = () => {
  return (
    <CRow>
      <CCol xs="12">
      <CCard>
            <CCardHeader className="text-center">
               <h5><strong>
                    Report List
                    <small> </small>
                </strong></h5> 
            </CCardHeader>
            <CCardBody>
                <table class="table table-bordered">
                    <thead>
                    <tr className="table-primary">
                        <th>#</th>
                        <th>Report type</th> 
                        <th>Report</th>
                        <th>Preferences</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>All values</td>
                            <td>Chamber 1 - Last 7 days</td>
                            <td>Step of values: all values (5 minutes) <br/> For period: Last 7 days</td>
                            <td><button className="btn btn-success btn-sm">Download CSV</button></td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>All values</td>
                            <td>Chamber 2 - Last 7 days</td>
                            <td>Step of values: all values (5 minutes) <br/> For period: Last 7 days</td>
                            <td><button className="btn btn-success btn-sm">Download CSV</button></td>
                        </tr>
                    </tbody>
                </table>
            </CCardBody>
          </CCard>
      </CCol>
    </CRow>
  )
}

export default Reports;
