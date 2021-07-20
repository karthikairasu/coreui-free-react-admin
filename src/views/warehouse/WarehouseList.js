import React from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow
} from '@coreui/react';

const WarehouseList = () => {
  return (
    <CRow>
      <CCol xs="12">
      <CCard>
            <CCardHeader className="text-center">
                <strong>
                    Warehouse's List
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
