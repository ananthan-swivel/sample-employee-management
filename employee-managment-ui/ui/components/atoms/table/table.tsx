import React from 'react'
import { Button } from 'react-bootstrap';
import { FaSortAlphaUp, FaSortAlphaUpAlt, FaSortNumericUp, FaSortNumericUpAlt, FaTrashAlt } from 'react-icons/fa';
import { FiEdit2 } from 'react-icons/fi';
import { Radio } from 'react-loader-spinner';
import Link from "next/link";
import Image from "next/image";
import { TableColumnInterface } from 'interfaces/tableColumnInterface';
import NoData from 'ui/components/atoms/no-data/noData';



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
    <>
        <table className="table table-striped table-inverse table-responsive">
            <thead className="thead-inverse">
                <tr>
                    {column?.map((col) => {
                        if (col?.isSortable) {
                            return <th
                                key={col.key}
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
                            <tr key={item.id}>
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
        {data?.length === 0 && <NoData />}
    </>
)


export default Table
