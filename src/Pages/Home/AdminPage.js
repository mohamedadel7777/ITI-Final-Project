import React from 'react';
import NavBarAdmin from '../../Components/Utility/NavBarAdmin';
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import UsersTable from '../../Components/Utility/UsersTable';


const AdminPage = () => {

  return (
    <div div className="font" style={{ minHeight: "670px" }}>
     <NavBarAdmin/>
     <UsersTable/>
        
      
    </div>
  );
}

export default AdminPage
