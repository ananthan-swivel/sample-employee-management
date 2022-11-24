import React from 'react'
import { FaSortAlphaUp, FaSortAlphaUpAlt } from 'react-icons/fa';
import { Radio } from 'react-loader-spinner';
import NoData from '../../../../src/components/atoms/no-data/noData';
import { TableColumnInterface } from '../../../../src/services/interfaces/tableColumnInterface';


// Table View 
// Coloum is what are coloum to show with TableColumnInterface
type Props = {
    onSort: Function;
    column: TableColumnInterface[],
    data: any,
    isLoading: Boolean,
    sortBy: String,
    sortDir: 'asc' | 'desc',
  };


const Table: React.FC<Props> = ({
    data,
    column,
    isLoading,
    onSort,
    sortBy,
    sortDir
    }) => (
    <React.Fragment key="table">
        <table className="table table-striped table-inverse table-responsive" data-testid="list-table">
            <thead className="thead-inverse">
                <tr>
                    {column?.map((col) => {
                        if (col?.isSortable) {
                            return <th
                                key={`th-${col.key}`}
                                onClick={() => onSort(
                                    col.key,
                                    sortBy === col.key && sortDir === "asc" ? "desc" : "asc"
                                )}
                            >
                                {col.title}
                                {sortBy === col.key && sortDir === "asc" ? (
                                        <FaSortAlphaUpAlt />
                                    ) : (
                                        <FaSortAlphaUp />
                                    )}
                            </th>;
                        }
                        else{
                            return <th key={col.key}> {col.title}</th>
                        }
                    })}
                </tr>
            </thead>
            <tbody>

                {!isLoading &&
                    data &&
                    data?.map((item: any) => {
                        return (
                            <tr key={`table-data-${item._id}`}>
                                {
                                    column.map((col) => {
                                        if(col?.childCompoent){
                                            return (
                                                <td  key={col.key} >
                                                    {col?.childCompoent(item)}
                                                </td>
                                            )
                                        }
                                        return (
                                            <td  key={col.key} >{item[col.key]}</td>
                                        )
                                    })
                                }
                                </tr>
                        );
                    })}
            </tbody>
        </table>
        <div className="text-center">
            {isLoading && (
                <Radio
                    visible={true}
                    height="80"
                    width="80"
                    ariaLabel="radio-loading"
                    wrapperStyle={{}}
                    wrapperClass="radio-wrapper" />
            )}
        </div>
        {!isLoading && data?.length === 0 && <NoData />}
    </React.Fragment>
)


export default Table
