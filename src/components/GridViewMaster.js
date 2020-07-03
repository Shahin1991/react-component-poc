import React, { useState, useEffect, Fragment } from "react";
import { connect } from "react-redux";
import {
  fetchUsers,
  showEditModal,
  showDeleteModal,
  showAddModal
} from "../redux/user/userActions";
import Modal from "./Modal";
import EditUser from "./EditUser";
import DeleteUser from "./DeleteUser";
import AddUser from "./AddUser";


import styles from "./GridViewMaster.module.css";

function GridViewMaster({
  userData,
  getUsers,
  showEditModal,
  showDeleteModal,
  showAddModal
}) {
  const [showFilter, setshowFilter] = useState(false);

  const [search, setsearch] = useState({ column: "", searchString: "" });
  const [sort, setsort] = useState({
    by: "id",
    asc: true
  });

  let displayUsers = userData.users;
  let sortfn;

  if (sort.asc === true) {
    sortfn = (a, b) => {
      if (a[sort.by] < b[sort.by]) return -1;
      if (a[sort.by] > b[sort.by]) return 1;
      return 0;
    };
  } else if (sort.asc === false) {
    sortfn = (a, b) => {
      if (a[sort.by] < b[sort.by]) return 1;
      if (a[sort.by] > b[sort.by]) return -1;
      return 0;
    };
  }

  displayUsers = userData.users.sort(sortfn);

  if (search.column !== "" && search.searchString !== "") {
    displayUsers = displayUsers.filter(
      user =>
        user[search.column] &&
        user[search.column]
          .toLowerCase()
          .includes(search.searchString.toLowerCase())
    );
  }

  useEffect(() => {
    getUsers();
    return () => {};
  }, [getUsers]);

  const handleSort = e => {
    let by = "id";
    switch (e.target.id) {
      case "id_header":
        by = "id";
        break;
      case "name_header":
        by = "name";
        break;
      case "username_header":
        by = "username";
        break;
      case "email_header":
        by = "email";
        break;
      case "phone_header":
        by = "phone";
        break;
      case "website_header":
        by = "website";
        break;
      default:
        by = "id";
    }
    setsort(prevValue => {
      return { by: by, asc: prevValue.by === by ? !prevValue.asc : true };
    });
  };

  const handleSearch = e => {
    let column = "id";
    switch (e.target.id) {
      case "inp_search_id":
        column = "id";
        break;
      case "inp_search_name":
        column = "name";
        break;
      case "inp_search_username":
        column = "username";
        break;
      case "inp_search_email":
        column = "email";
        break;
      case "inp_search_phone":
        column = "phone";
        break;
      case "inp_search_website":
        column = "website";
        break;
      default:
        column = "id";
    }

    setsearch({
      column: column,
      searchString: e.target.value
    });
  };

  const handleAdd = e => {
    showAddModal();
  };

  const handleEdit = e => {
    const idToEdit =
      e.target.dataset && e.target.dataset.userid
        ? e.target.dataset.userid
        : e.target.getAttribute("data-userid");
    showEditModal(idToEdit);
  };

  const handleDelete = e => {
    const idToDelete =
      e.target.dataset && e.target.dataset.userid
        ? e.target.dataset.userid
        : e.target.getAttribute("data-userid");
    showDeleteModal(idToDelete);
  };

  return (
    <div>
      {userData.loading ? (
        <h4>Fetching user data from JSON placeholder </h4>
      ) : userData.error ? (
        <h4>{userData.error}</h4>
      ) : (
        <div>
          <h3>User data from JSON placeholder</h3>

          <Modal show={userData.showAddModal}>
            <AddUser />
          </Modal>

          <Modal show={userData.showEditModal}>
            <EditUser />
          </Modal>

          <Modal show={userData.showDeleteModal}>
            <DeleteUser />
          </Modal>

      

          <table className={styles.userTable}>
            <thead className={styles.userThead}>
              <tr>
                <th
                  onClick={e => handleSort(e)}
                  style={{ backgroundColor: sort.by === "id" && "#F99" }}
                >
                  Id{" "}
                  {sort.by === "id" ? (
                    sort.asc === true ? (
                      <Fragment>&darr;</Fragment>
                    ) : (
                      <Fragment>&uarr;</Fragment>
                    )
                  ) : (
                    <Fragment>&#x2195;</Fragment>
                  )}
                </th>
                <th
                  id="name_header"
                  onClick={e => handleSort(e)}
                  style={{ backgroundColor: sort.by === "name" && "#F99" }}
                >
                  Name{" "}
                  {sort.by === "name" ? (
                    sort.asc === true ? (
                      <Fragment>&darr;</Fragment>
                    ) : (
                      <Fragment>&uarr;</Fragment>
                    )
                  ) : (
                    <Fragment>&#x2195;</Fragment>
                  )}
                </th>
                <th
                  id="username_header"
                  onClick={e => handleSort(e)}
                  style={{ backgroundColor: sort.by === "username" && "#F99" }}
                >
                  Username{" "}
                  {sort.by === "username" ? (
                    sort.asc === true ? (
                      <Fragment> &darr;</Fragment>
                    ) : (
                      <Fragment>&uarr;</Fragment>
                    )
                  ) : (
                    <Fragment>&#x2195;</Fragment>
                  )}
                </th>
                <th
                  id="email_header"
                  onClick={e => handleSort(e)}
                  style={{ backgroundColor: sort.by === "email" && "#F99" }}
                >
                  Email{" "}
                  {sort.by === "email" ? (
                    sort.asc === true ? (
                      <Fragment>&darr;</Fragment>
                    ) : (
                      <Fragment>&uarr;</Fragment>
                    )
                  ) : (
                    <Fragment>&#x2195;</Fragment>
                  )}
                </th>
                <th
                  id="phone_header"
                  onClick={e => handleSort(e)}
                  style={{ backgroundColor: sort.by === "phone" && "#F99" }}
                >
                  Phone{" "}
                  {sort.by === "phone" ? (
                    sort.asc === true ? (
                      <Fragment>&darr;</Fragment>
                    ) : (
                      <Fragment>&uarr;</Fragment>
                    )
                  ) : (
                    <Fragment>&#x2195;</Fragment>
                  )}
                </th>
                <th
                  id="website_header"
                  onClick={e => handleSort(e)}
                  style={{ backgroundColor: sort.by === "website" && "#F99" }}
                >
                  Website{" "}
                  {sort.by === "website" ? (
                    sort.asc === true ? (
                      <Fragment>&darr;</Fragment>
                    ) : (
                      <Fragment>&uarr;</Fragment>
                    )
                  ) : (
                    <Fragment>&#x2195;</Fragment>
                  )}
                </th>
                <th>
                  <button
                    onClick={() => {
                      setshowFilter(prevValue => {
                        return !prevValue;
                      });
                      setsearch({ column: "", value: "" });
                    }}
                  >
                    {showFilter ? "Hide Filter" : "Show Filter"}
                  </button>
                </th>
                <th>
                <button onClick={(e)=>handleAdd(e)}>Add User</button>
                </th>
              </tr>
              <tr style={{ display: showFilter ? "" : "none" }}>
                <th>
                  <input
                    id="inp_search_id"
                    onChange={e => handleSearch(e)}
                    type="text"
                    placeholder="Search..."
                  ></input>
                </th>
                <th>
                  <input
                    id="inp_search_name"
                    onChange={e => handleSearch(e)}
                    type="text"
                    placeholder="Search..."
                  ></input>
                </th>
                <th>
                  <input
                    id="inp_search_username"
                    onChange={e => handleSearch(e)}
                    type="text"
                    placeholder="Search..."
                  ></input>
                </th>
                <th>
                  <input
                    id="inp_search_email"
                    onChange={e => handleSearch(e)}
                    type="text"
                    placeholder="Search..."
                  ></input>
                </th>
                <th>
                  <input
                    id="inp_search_phone"
                    onChange={e => handleSearch(e)}
                    type="text"
                    placeholder="Search..."
                  ></input>
                </th>
                <th>
                  <input
                    id="inp_search_website"
                    onChange={e => handleSearch(e)}
                    type="text"
                    placeholder="Search..."
                  ></input>
                </th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {displayUsers.length > 0 &&
                displayUsers.map((user, index) => (
                  <tr key={index}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td>{user.website}</td>
                    <td>
                      <button
                        data-userid={user.id}
                        onClick={e => {
                          handleEdit(e);
                        }}
                      >
                        Edit
                      </button>
                    </td>
                    <td>
                      <button
                        data-userid={user.id}
                        onClick={e => {
                          handleDelete(e);
                        }}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    userData: state.userReducerData
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getUsers: () => dispatch(fetchUsers()),
    showEditModal: id => dispatch(showEditModal(id)),
    showDeleteModal: id => dispatch(showDeleteModal(id)),
    showAddModal: () => dispatch(showAddModal())
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GridViewMaster);
