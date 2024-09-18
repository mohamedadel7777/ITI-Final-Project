import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const UsersTable = () => {
  const API_URL = "https://my-json-server.typicode.com/ahmedwael29/server/users";
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get(API_URL)
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);

  const handleDelete = async (userId) => {
    try {
      await axios.delete(`${API_URL}/${userId}`);
      setUsers(users.filter((user) => user.id !== userId));
    } catch (error) {
      alert("Error deleting user:", error);
    }
  };

  return (
    <div className="font" style={{ minHeight: "670px" }}>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user.id}>
              <td>{index + 1}</td>
              <td>{user.FirstName}</td>
              <td>{user.LastName}</td>
              <td>{user.Email}</td>
              <td>
                <Button
                  variant="danger"
                  onClick={() => handleDelete(user.id)}
                  style={{ marginRight: "20px" }}
                >
                  <FontAwesomeIcon icon={faTrash} />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default UsersTable;
