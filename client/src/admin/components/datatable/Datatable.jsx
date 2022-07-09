import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import useFetch from "../../../hooks/useFetch.js"
import { useEffect } from "react";
import axios from "axios";

const Datatable = ({ column, name }) => {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  console.log(path)
  const [list, setList] = useState([]);
  const { data } = useFetch(`/${path}`)

  useEffect(() => {
    setList(data);
  }, [data])
  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://stay-solutions.herokuapp.com/api/${path}/${id}`);
      setList(list.filter((item) => item._id !== id));
    } catch (err) {
      console.log(err)
    }
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/users/test" style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row._id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];

  return (
    <div className="datatable">
      <div className="datatableTitle">
        Add New {name}
        <Link to={'new'} className="link">
          Add New
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={list}
        columns={column.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
        getRowId={row => row._id}
      />
    </div>
  );
};

export default Datatable;