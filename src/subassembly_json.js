export const subAssemblyColumns = [
  { field: "id", headerName: "ID", width: 230 },
  {
    field: "assemblyId",
    headerName: "Assembly ID",
    width: 230,
  },
  {
    field: "processName",
    headerName: "Process",
    width: 200,
  },
  {
    field: "machineId",
    headerName: "Machine ID",
    width: 230,
  },
  {
    field: "item_id",
    headerName: "Item ID",
    width: 100,
    valueGetter: (params) => {
      const item_arry = [];
      console.log(params.row.fabrication);
      for (const item in params.row.fabrication) {
        item_arry.push(params.row.fabrication[item].item_id);
      }
      return item_arry.join(", ");
    },
  },

  {
    field: "in_date",
    headerName: "In Date",
    width: 100,
  },
  {
    field: "out_date",
    headerName: "Out date",
    width: 200,
  },
];

//temporary data
export const subAssemblyRows = [
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
];
