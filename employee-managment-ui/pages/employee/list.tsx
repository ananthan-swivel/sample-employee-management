import React, { useEffect, useState } from "react";
import { getAllEmployees, clearEmployees, deleteEmployees } from "../../redux/employee/actions";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { employeeSelector } from "../../redux/employee/selector";
import { FcBusinessman } from "react-icons/fc";
import { BsPersonPlusFill, BsGrid3X3GapFill } from "react-icons/bs";
import { FiList } from "react-icons/fi";
import { Button } from "react-bootstrap";
import EmployeeListView from "../../ui/components/employee/employeeListView";
import EmployeeGridView from "../../ui/components/employee/employeeGridView";
import ReactPaginate from "react-paginate";
import Link from "next/link";
import swal from "sweetalert";
import { ResponseStatus } from "../../enums/responseStatus";
import { Store } from "react-notifications-component";

function List() {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [isListView, setIsListView] = useState(true);
  const [sort, setSort] = useState({
    sort_by: "id",
    sort_dir: "ASC",
  });
  const dispatch = useAppDispatch();
  const {
    data,
    pagination,
    status,
    msg,
    key
    // error
  } = useAppSelector(employeeSelector);

  const loadData = () => {
    var datas = {
      page: String(page),
      sort_by: sort["sort_by"],
      sort_dir: sort["sort_dir"],
      search: search,
    };

    var params = new URLSearchParams(datas);
    dispatch(getAllEmployees({ params: params }));
  };
  useEffect(() => {
    dispatch(clearEmployees());
  }, []);
  useEffect(() => {
    loadData();
  }, [page, sort, search]);
  useEffect(() => {}, [data]);

  useEffect(() => {
    if (status === ResponseStatus.LOADED && key ==='delete') {
      Store.addNotification({
        title: "Success!",
        message: msg,
        type: "success",
        insert: "top",
        container: "top-right",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 5000,
          onScreen: true,
        },
      });
      loadData()
    }
    if (status === ResponseStatus.ERROR && key ==='delete') {
      Store.addNotification({
        title: "Error!",
        message: msg,
        type: "error",
        insert: "top",
        container: "top-right",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 5000,
          onScreen: true,
        },
      });
      loadData()
    }
  }, [status]);

  const onClickPagination = (selectedItem: { selected: number }) => {
    setPage(selectedItem.selected + 1);
  };

  const onDelete = (id: number) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        dispatch(deleteEmployees({id:id}));
      }
    });
  };


  const onSort = (sort_by:string , sort_dir:string) => {
    setSort({
      sort_by: sort_by,
      sort_dir: sort_dir,
    })
  };

  return (
    <div className="py-5">
      <div className="title-bar text-dark d-flex justify-content-between p-1">
        <div>
          <FcBusinessman size={50} /> <strong>Employees</strong>
        </div>
      </div>
      <div className="main-container ">
        <div className="py-3 mx-n4 d-flex justify-content-end">
          <div className="px-2">
              <input
                  type="text"
                  className={`form-control `}
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search Employee"
                  name="search"
                  aria-describedby="inputGroupPrepend"
                />
          </div>
          <div className="px-2">
            <Link href={"/employee/add"}>
              <Button>
                <BsPersonPlusFill /> Add Employee
              </Button>
            </Link>
          </div>
          <div className="">
            <Button variant="primary" onClick={() => setIsListView(!isListView)}>
              {isListView ? <FiList /> : <BsGrid3X3GapFill />}
            </Button>
          </div>
        </div>
        <div className="py-4">
          {isListView ? (
            <EmployeeListView
              employees={data ?? []}
              onDelete={(id: number) => onDelete(id)}
              onSort={(sort_by, sort_dir) => onSort(sort_by, sort_dir)}
              sortBy={sort["sort_by"]}
              sortDir={sort["sort_dir"]}
              isLoading={status=== ResponseStatus.LOADING && key==='view-all'}
            />
          ) : (
            <EmployeeGridView
              employees={data ?? []}
              onDelete={(id: number) => onDelete(id)}
              isLoading={status=== ResponseStatus.LOADING && key==='view-all'}
            />
          )}
        </div>

        <div className="py-2 d-flex justify-content-end">
          {
            data.length > 0 && 
            <ReactPaginate
              breakLabel="..."
              nextLabel="next"
              onPageChange={onClickPagination}
              pageRangeDisplayed={5}
              pageCount={pagination.totalPages}
              previousLabel="previous"
              pageClassName="page-item"
              pageLinkClassName="page-link"
              previousClassName="page-item"
              previousLinkClassName="page-link"
              nextClassName="page-item"
              nextLinkClassName="page-link"
              breakClassName="page-item"
              breakLinkClassName="page-link"
              containerClassName="pagination"
              activeClassName="active"
            />
          }
        </div>
      </div>
    </div>
  );
}

export default List;
