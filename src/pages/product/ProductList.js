import { DataGrid } from '@material-ui/data-grid'
import { DeleteOutlineOutlined } from '@material-ui/icons'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { productRows } from '../../dummyData'
import './product.css'

const ProductList = () => {
  const [data, setData] = useState(productRows)
  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id))
  }

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'product',
      headerName: 'Product',
      width: 200,
      editable: true,
      renderCell: (params) => {
        return (
          <div className="ProductListUser">
            <img className="productListImg" src={params.row.img} alt="" />
            {params.row.name}
          </div>
        )
      },
    },
    {
      field: 'stock',
      headerName: 'Stock',
      width: 200,
      editable: true,
    },
    {
      field: 'status',
      headerName: 'Status',
      width: 110,
      editable: true,
    },
    {
      field: 'price',
      headerName: 'Price',
      sortable: false,
      width: 300,
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={'/products/' + params.row.id}>
              <button className="productListEdit">Edit</button>
            </Link>
            <DeleteOutlineOutlined
              className="productListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        )
      },
    },
  ]
  return (
    <div className="productList">
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={8}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  )
}

export default ProductList
