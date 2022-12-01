import { ResponseStatus } from "../../../../src/services/enums/responseStatus";
import React, { useEffect, useState } from "react";
import { FcBusinessman } from "react-icons/fc";
import ReactPaginate from "react-paginate";
import { clearEmployees, deleteEmployees, getAllEmployees } from "../../../../src/services/redux/employee";
import { employeeSelector } from "../../../../src/services/redux/employee/selector";
import { useAppDispatch, useAppSelector } from "../../../../src/services/redux/hooks";
import Title from "../../../../src/components/atoms/title/title";
import EmployeeGridView from "../../../../src/components/organisms/employee/employeeGridView";
import EmployeeListView from "../../../../src/components/organisms/employee/employeeListView";
import { Store } from "react-notifications-component";
import swal from "sweetalert";
import Toolbar from "../../../../src/components/molecules/toolbar/toolbar";


function ListEmployee() {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [isListView, setIsListView] = useState(true);
  const [sort, setSort] = useState({
    sort_by: "id",
    sort_dir: "asc",
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
        type: "danger",
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

  const onDelete = (id: string) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: [true],
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
      <Title title='Employees' iconComp={<FcBusinessman size={50} />}/>
      <div className="main-container ">
        <Toolbar title='Employee' isList={true} forwardLink='/employee/add' viewStyle={isListView} viewStyleChange={() => setIsListView(!isListView)} onSearch={(value:any) => setSearch(value)} />
        <div className="py-4 table-responsive">
          {isListView ? (
            <EmployeeListView
              key="Employee-list-view"
              employees={data ?? []}
              onDelete={(id: string) => onDelete(id)}
              onSort={(sort_by:any, sort_dir:any) => onSort(sort_by, sort_dir)}
              sortBy={sort["sort_by"]}
              sortDir={sort["sort_dir"]}
              isLoading={status=== ResponseStatus.LOADING && key==='view-all'}
            />
          ) : (
            <EmployeeGridView
              employees={data ?? []}
              onDelete={(id: string) => onDelete(id)}
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

export default ListEmployee;
