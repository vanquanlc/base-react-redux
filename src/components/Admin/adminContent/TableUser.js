
import ReactPaginate from 'react-paginate';
import { deleteServiceUser } from '../../../services/apiUserService';
import '../AdminPage.scss'

const TableUser = ({listUsers, setListUsers, setShowModalUpdateUser, setDataUpdate, setDataView, setShowModalViewUser, ...rest}) => {
  const handleDeleteUser = (id) =>{
    rest.setShowModalDeleteUser(true);
    rest.setIdDeleteUser(id)
  }
  const handleUpdateBtn = (user) => {
    setShowModalUpdateUser(true);
    setDataUpdate(user);

  }
  const handleViewUser = (user) => {
    setDataView(user)
    setShowModalViewUser(true);
  }

  const handlePageClick = (event) => {
    rest.getAllUsers(event.selected + 1)
  };
  return (
    <>
      <table className="table table-striped table-user">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Email</th>
              <th scope="col">Username</th>
              <th scope="col">Role</th>
              <th scope="col">Action</th>

            </tr>
          </thead>
          <tbody className='body-table-user'>
          {listUsers.map((user, index)=> {
                return (
                    <tr key={user.id}>
                        <td scope="row">{user.id}</td>
                        <td>{user.email}</td>
                        <td>{user.username}</td>
                        <td>{user.role}</td>
                        <td>
                          <button onClick={() => handleViewUser(user)} className='btn btn-secondary btn-sm'>View</button>
                          <button onClick={()=> handleUpdateBtn(user)} className='btn btn-warning mx-3 btn-sm'>Update</button>
                          <button onClick={()=> handleDeleteUser(user.id)} className='btn btn-danger btn-sm'>Delete</button>

                        </td>
                    </tr>
                )
            })}
          </tbody>
        </table>
          <div className='paginate-list-user'>
          <ReactPaginate
          nextLabel="Next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          marginPagesDisplayed={2}
          pageCount={rest.pageCount}
          previousLabel="< Prev"
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          breakLabel="..."
          breakClassName="page-item"
          breakLinkClassName="page-link"
          containerClassName="pagination"
          activeClassName="active"
          renderOnZeroPageCount={null}
        />
          </div>
    
    </>
  );
}

export default TableUser;