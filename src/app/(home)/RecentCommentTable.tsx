"use client";

import { useMemo, useState } from "react";

import { AgGridReact } from "@ag-grid-community/react";
import { ColDef, ModuleRegistry, RowClassParams } from "@ag-grid-community/core";
import "@ag-grid-community/styles/ag-grid.css";
import "@ag-grid-community/styles/ag-theme-quartz.css";
import { ClientSideRowModelModule } from "@ag-grid-community/client-side-row-model";

ModuleRegistry.registerModules([ClientSideRowModelModule]);

interface Comment {
  name: string;
  comment: string;
  design: string;
  datetime: string;
}

const commentList: Comment[] = [
  {
    name: "Chaeyoung Lee",
    comment:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe libero aut tempore molestiae magni repudiandae eos odit dolorum incidunt dolorem exercitationem laboriosam quaerat quae fugiat rerum, totam unde non placeat.",
    design: "module",
    datetime: "2024/08/06 (Tue) 07:49",
  },
  {
    name: "Cheolsoo Kim",
    comment:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe libero aut tempore molestiae magni repudiandae eos odit dolorum incidunt dolorem exercitationem laboriosam quaerat quae fugiat rerum, totam unde non placeat.",
    design: "module",
    datetime: "2024/08/06 (Tue) 07:49",
  },
  {
    name: "Sangho Park",
    comment:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe libero aut tempore molestiae magni repudiandae eos odit dolorum incidunt dolorem exercitationem laboriosam quaerat quae fugiat rerum, totam unde non placeat.",
    design: "module",
    datetime: "2024/08/06 (Tue) 07:49",
  },
  {
    name: "Chaeyoung Lee",
    comment:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe libero aut tempore molestiae magni repudiandae eos odit dolorum incidunt dolorem exercitationem laboriosam quaerat quae fugiat rerum, totam unde non placeat.",
    design: "module",
    datetime: "2024/08/06 (Tue) 07:49",
  },
  {
    name: "Chaeyoung Lee",
    comment:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe libero aut tempore molestiae magni repudiandae eos odit dolorum incidunt dolorem exercitationem laboriosam quaerat quae fugiat rerum, totam unde non placeat.",
    design: "module",
    datetime: "2024/08/06 (Tue) 07:49",
  },
];

export default function RecentCommentTable() {
  const [columnDefs, setColumnDefs] = useState<ColDef[]>([
    { field: "name", flex: 1 },
    { field: "comment", flex: 3 },
    { field: "design", flex: 1 },
    { field: "datetime", flex: 2 },
  ]);

  const defaultColDef = useMemo(() => {
    return {
      cellStyle: {
        textAlign: "left",
      },
    };
  }, []);

  const getRowStyle = (params: RowClassParams) => {
    if (params?.node?.rowIndex) {
      if (params.node.rowIndex % 2 === 1) {
        return { background: "#ede9fe" };
      }
    }
  };

  return (
    <>
      <p className="mb-3 text-2xl font-bold">
        Recent <span className="text-violet-500">Comments</span>
      </p>
      <div className="ag-theme-quartz h-72 tracking-tight">
        <AgGridReact
          defaultColDef={defaultColDef}
          columnDefs={columnDefs}
          rowData={commentList}
          getRowStyle={getRowStyle}
        />
      </div>
    </>
  );
}
