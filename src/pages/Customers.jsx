import React from "react";
import { GridComponent, ColumnsDirective, Search, ColumnDirective, Page, Edit, Sort, Filter, Inject, Toolbar, Selection } from '@syncfusion/ej2-react-grids';
import { customersGrid, customersData} from "../data/dummy";

import { Header } from '../components';

const Customers = () => {
  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Customers" />
      <GridComponent id="gridcomp" dataSource={customersData} allowPaging allowSorting toolbar={['Search', 'Delete']} width="auto" editSettings={{ allowDeleting: true, allowEditing: true }}>
        <ColumnsDirective>
        {
          customersGrid.map((item ,index) => (
            <ColumnDirective key={index} {...item} />
          ))
        }
        </ColumnsDirective>
        <Inject services={[Sort, Filter, Page, Selection, Search, Edit, Toolbar]}/>
      </GridComponent>
    </div>
  );
};

export default Customers;
