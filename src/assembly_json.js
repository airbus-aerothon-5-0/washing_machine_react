export const assemblyColumns = [
  { field: "id", headerName: "ID", width: 230 },
  {
    field: "processName",
    headerName: "Process",
    width: 200,
  },
  {
    field: "subAssemblyList",
    headerName: "Assembly ID",
    width: 230,
    valueGetter: (params) => {
      const item_arry = [];
      {
        for (const item in params.row.subAssemblyList) {
          if (item.length) {
            item_arry.push(params.row.fabrication[item].assemblyId);
          }
        }
        return item_arry.join(", ");
      }
    },
  },
  {
    field: "machineId",
    headerName: "Machine ID",
    width: 230,
  },
  {
    field: "in_date",
    headerName: "In Date",
    width: 200,
  },
  {
    field: "out_date",
    headerName: "Out date",
    width: 200,
  },
];

//temporary data
export const assemblyRows = [
  {
    id: 1,
    machineId: "MAII1017ECME3020079",
    processName: "assembly",
    in_date: "2023-03-10T00:00:00.000+00:00",
    out_date: "2023-03-10T00:00:00.000+00:00",
    subAssemblyList: [],
  },
  {
    id: 3,
    machineId: "MAII1017ECME300079",
    processName: "assembly",
    in_date: "2023-03-10T00:00:00.000+00:00",
    out_date: "2023-03-10T00:00:00.000+00:00",
    subAssemblyList: [
      {
        id: 2,
        assemblyId: "SAWM2",
        machineId: "FA_WM123",
        processName: "manufacture",
        in_date: "2023-03-10T00:00:00.000+00:00",
        out_date: "2023-03-10T00:00:00.000+00:00",
        fabrication: [
          {
            id: 1,
            item_id: "T1",
            in_date: "2023-03-10T00:00:00.000+00:00",
            out_date: "2023-03-10T00:00:00.000+00:00",
            rawMaterials: {
              id: 1,
              raw_material_name: "steel sheet",
              item_name: "tub",
              quantity_value: 10.0,
              quantity_unit: "kg",
            },
          },
          {
            id: 2,
            item_id: "T2",
            in_date: "2023-03-10T00:00:00.000+00:00",
            out_date: "2023-03-10T00:00:00.000+00:00",
            rawMaterials: {
              id: 2,
              raw_material_name: "leather",
              item_name: "belt",
              quantity_value: 10.0,
              quantity_unit: "kg",
            },
          },
        ],
      },
    ],
  },
];
