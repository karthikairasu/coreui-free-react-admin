import React from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CFormGroup,
  CInput,
  CLabel,
  CSelect,
  CRow
} from '@coreui/react';

const AddChamber = () => {
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
                            <CInput type="text" className="form-control-sm" id="name" placeholder="" />
                        </CFormGroup>
                        <CFormGroup>
                            <CLabel htmlFor="address">Address  <span style={{color: 'red'}}>*</span></CLabel>
                            <CInput type="text" className="form-control-sm" id="address" placeholder="" />
                        </CFormGroup>
                        <CFormGroup>
                            <CLabel htmlFor="long">Longitude  <span style={{color: 'red'}}>*</span></CLabel>
                            <CInput type="number" className="form-control-sm" id="long" placeholder="" />
                        </CFormGroup>
                        <CFormGroup>
                            <CLabel htmlFor="land">Land Coordinates Y  <span style={{color: 'red'}}>*</span></CLabel>
                            <CInput type="text" className="form-control-sm" id="land" placeholder="" />
                        </CFormGroup>
                        <CFormGroup>
                            <CLabel htmlFor="location">Location Time  <span style={{color: 'red'}}>*</span></CLabel>
                            <CInput type="text" className="form-control-sm" id="location" placeholder="" />
                        </CFormGroup>
                        <CFormGroup>
                            <CLabel htmlFor="phone">Phone  <span style={{color: 'red'}}>*</span></CLabel>
                            <CInput type="number" className="form-control-sm" id="phone" placeholder="" />
                        </CFormGroup>
                        <CFormGroup>
                            <CLabel htmlFor="email">Email ID  <span style={{color: 'red'}}>*</span></CLabel>
                            <CInput type="email" className="form-control-sm" id="email" placeholder="" />
                        </CFormGroup>
                    </CCol>
                    <CCol xs="6">
                        <CFormGroup>
                            <CLabel htmlFor="city">City  <span style={{color: 'red'}}>*</span></CLabel>
                            <CInput type="text" className="form-control-sm" id="city" placeholder="" />
                        </CFormGroup>
                        <CFormGroup>
                            <CLabel htmlFor="lat">Latitude  <span style={{color: 'red'}}>*</span></CLabel>
                            <CInput type="number" className="form-control-sm" id="lat" placeholder="" />
                        </CFormGroup>
                        <CFormGroup>
                            <CLabel htmlFor="landx">Land Coordinates X  <span style={{color: 'red'}}>*</span></CLabel>
                            <CInput type="text" className="form-control-sm" id="landx" placeholder="" />
                        </CFormGroup>
                        <CFormGroup>
                            <CLabel htmlFor="cat">Category  <span style={{color: 'red'}}>*</span></CLabel>
                            <CSelect custom name="cat" className="form-control-sm" id="cat">
                            <option>Category 1</option>
                            <option>Category 2</option>
                            <option>Category 3</option>
                            </CSelect>
                        </CFormGroup>
                        <CFormGroup>
                            <CLabel htmlFor="chamberid">Operating Company Chamber Id  <span style={{color: 'red'}}>*</span></CLabel>
                            <CInput type="text" className="form-control-sm" id="chamberid" placeholder="" />
                        </CFormGroup>
                        <CFormGroup>
                            <CLabel htmlFor="mphone">Manager Phone  <span style={{color: 'red'}}>*</span></CLabel>
                            <CInput type="number" className="form-control-sm" id="mphone" placeholder="" />
                        </CFormGroup>
                        <CFormGroup>
                            <CLabel htmlFor="area">Land Area  <span style={{color: 'red'}}>*</span></CLabel>
                            <CInput type="text" className="form-control-sm" id="area" placeholder="" />
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

export default AddChamber;
