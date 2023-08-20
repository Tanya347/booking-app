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
  // console.log(path)
  const [list, setList] = useState([]);
  const { data } = useFetch(`/${path}`)

  useEffect(() => {
    setList(data);
  }, [data])

  console.log(data)

  const handleDelete = async (id) => {
    try {
      if (path === "rooms") {
        let index;
        for (let i = 0; i < data.length; i++) {
          if (data[i]._id === id)
            index = i;
        }
        // console.log(index)
        // await axios.delete(`http://localhost:8800/api/${path}/${id}/${data[index].hotelId}`);
        await axios.delete(`https://stay-solutions.onrender.com/api/${path}/${id}/${data[index].hotelId}`);
      } else {
        // await axios.delete(`http://localhost:8800/api/${path}/${id}`);
        await axios.delete(`https://stay-solutions.onrender.com/api/${path}/${id}`);
      }
      setList(list.filter((item) => item._id !== id));
    } catch (err) {
      console.log(err)
    }
  };



  console.log(list)

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            {/* {path === "users" && <Link to={`/admin/${path}/${params.row._id}`} style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>} */}

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
