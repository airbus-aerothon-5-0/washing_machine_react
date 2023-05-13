import { parsePath } from "react-router-dom";

export const itemColumns = [
  { field: "id", headerName: "Id", width: 150 },
  {
    field: "name",
    headerName: "Name",
    width: 180,
    valueGetter: (params) => {
      return params.row.rawMaterials.item_name;
    },
  },
  {
    field: "item_id",
    headerName: "Item ID",
    width: 150,
  },
  {
    field: "raw_Material",
    headerName: "Raw Material",
    valueGetter: (params) => {
      return params.row.rawMaterials.raw_material_name;
    },
    width: 150,
  },
  {
    field: "quantity",
    headerName: "Quantity",
    valueGetter: (params) => {
      return params.row.rawMaterials.quantity_value;
    },
    width: 150,
  },
  {
    field: "unit",
    headerName: "Unit",
    valueGetter: (params) => {
      return params.row.rawMaterials.quantity_unit;
    },
    width: 150,
  },

  {
    field: "in_date",
    headerName: "In Date",
    width: 200,
  },
  {
    field: "out_date",
    headerName: "Out date",
    width: 160,
  },
];

//temporary data
export const itemRows = [
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
];
