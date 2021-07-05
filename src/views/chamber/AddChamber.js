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
  CRow,
  CSwitch
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { DocsLink } from 'src/reusable'

const Addchamber = () => {
  return (
    <CRow>
      <CCol xs="12">
      <CCard>
            <CCardHeader>
                <strong>
                    Add Chamber
                    <small> Form</small> 
                </strong>
            </CCardHeader>
            <CCardBody>
                <CRow>
                    <CCol xs="6">
                        <CFormGroup>
                            <CLabel htmlFor="name">Name  <span style={{color: 'red'}}>*</span></CLabel>
                            <CInput id="name" placeholder="" />
                        </CFormGroup>
                        <CFormGroup>
                            <CLabel htmlFor="address">Address  <span style={{color: 'red'}}>*</span></CLabel>
                            <CInput id="address" placeholder="" />
                        </CFormGroup>
                        <CFormGroup>
                            <CLabel htmlFor="long">Longitude  <span style={{color: 'red'}}>*</span></CLabel>
                            <CInput id="long" placeholder="" />
                        </CFormGroup>
                        <CFormGroup>
                            <CLabel htmlFor="land">Land Coordinates Y  <span style={{color: 'red'}}>*</span></CLabel>
                            <CInput id="land" placeholder="" />
                        </CFormGroup>
                        <CFormGroup>
                            <CLabel htmlFor="location">Location Time  <span style={{color: 'red'}}>*</span></CLabel>
                            <CInput id="location" placeholder="" />
                        </CFormGroup>
                        <CFormGroup>
                            <CLabel htmlFor="phone">Phone  <span style={{color: 'red'}}>*</span></CLabel>
                            <CInput id="phone" placeholder="" />
                        </CFormGroup>
                        <CFormGroup>
                            <CLabel htmlFor="email">Email ID</CLabel>
                            <CInput id="email" placeholder="" />
                        </CFormGroup>
                    </CCol>
                    <CCol xs="6">
                        <CFormGroup>
                            <CLabel htmlFor="city">City  <span style={{color: 'red'}}>*</span></CLabel>
                            <CInput id="city" placeholder="" />
                        </CFormGroup>
                        <CFormGroup>
                            <CLabel htmlFor="lat">Latitude  <span style={{color: 'red'}}>*</span></CLabel>
                            <CInput id="lat" placeholder="" />
                        </CFormGroup>
                        <CFormGroup>
                            <CLabel htmlFor="landx">Land Coordinates X    <span style={{color: 'red'}}>*</span></CLabel>
                            <CInput id="landx" placeholder="" />
                        </CFormGroup>
                        <CFormGroup>
                            <CLabel htmlFor="cat">Category    <span style={{color: 'red'}}>*</span></CLabel>
                            <CSelect custom name="cat" id="cat">
                            <option>Category 1</option>
                            <option>Category 2</option>
                            <option>Category 3</option>
                            </CSelect>
                        </CFormGroup>
                        <CFormGroup>
                            <CLabel htmlFor="location">Operating Company Warehouse Id    <span style={{color: 'red'}}>*</span></CLabel>
                            <CInput id="location" placeholder="" />
                        </CFormGroup>
                        <CFormGroup>
                            <CLabel htmlFor="phone">Manager Phone</CLabel>
                            <CInput id="phone" placeholder="" />
                        </CFormGroup>
                        <CFormGroup>
                            <CLabel htmlFor="email">Land Area</CLabel>
                            <CInput id="email" placeholder="" />
                        </CFormGroup>
                    </CCol>
                    <CCol>
                        <CFormGroup className="form-actions text-center">
                            <CButton type="submit" size="md" color="success">Submit</CButton>
                        </CFormGroup>
                    </CCol>
                </CRow>
            </CCardBody>
          </CCard>
      </CCol>
    </CRow>
  )
}

export default Addchamber;
