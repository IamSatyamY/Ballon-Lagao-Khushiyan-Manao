import React from 'react'


const AddCategory = () => {
  return (
    <div className='container dflex  justify-center items-center border'>
        <form>
            <h1>Add Category</h1>

                Enter title<br/>
                <input type="text" /><br/><br/>

                Upload image<br/>
                <input type="file" /><br/><br/>
            
            <button type="submit">Add Category</button>
        </form>

        <div className="text-center mt-3">
            <h2>Category List</h2>
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>S.No</th>
                        <th>Category Name</th>
                        <th>Image</th>
                        <th colSpan={2}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Laptop</td>
                        <td><img src="" style={{width:"100px"}} alt="" /></td>
                        <td><button className='btn btn-primary'>Edit</button></td>
                        <td><button className='btn btn-danger'>Delete</button></td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Cloth</td>
                        <td><img src="" style={{width:"100px"}} alt="" /></td>
                        <td><button className='btn btn-primary'>Edit</button></td>
                        <td><button className='btn btn-danger'>Delete</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default AddCategory