export const entity_create = {
    create_customer: {
      form_title: 'Add a new Customer',
      form_name: 'create_customer',
      form_id: '1',
      form_data: {"customer_id":"","account_number":"","first_name":"","last_name":"","company_name":""},
      field_data : [
        { 'field_id': '1','field_name': 'account_number','parent_container':'', 'field_type': 'text', 'field_label': 'Account Number','default_value': 'Account Number' },
        { 'field_id': '2','field_name': 'first_name','parent_container':'', 'field_type': 'text', 'field_label': 'First Name','default_value': 'First Name'},
        { 'field_id': '3','field_name': 'last_name','parent_container':'', 'field_type': 'text', 'field_label': 'Last Name','default_value': 'Last Name'},
        { 'field_id': '3','field_name': 'company_name','parent_container':'', 'field_type': 'text', 'field_label': 'Company','default_value': 'Company'}
      ],
      service: 'COMS-CUSTOMER-API',
      extractfield_operation: '/getfieldsbyformid/',
      submit_operation: '/addcustomer'
    },

    create_supplier: {
      form_title: 'New Supplier',
      form_name: 'create_supplier',
      form_id: '2',
      form_data: {"supplier_id":"","account_number":"","first_name":"","last_name":"","supplier_company_name":""},
      field_data : [
        { 'field_id': '1','field_name': 'account_number','parent_container':'', 'field_type': 'text', 'field_label': 'Account Number','default_value': 'Account Number' },
        { 'field_id': '2','field_name': 'first_name','parent_container':'', 'field_type': 'text', 'field_label': 'First Name','default_value': 'First Name'},
        { 'field_id': '3','field_name': 'last_name','parent_container':'', 'field_type': 'text', 'field_label': 'Last Name','default_value': 'Last Name'},
        { 'field_id': '3','field_name': 'supplier_company_name','parent_container':'', 'field_type': 'text', 'field_label': 'Company','default_value': 'Supplier Company'}
      ],
      service: 'COMS-SUPPLIER-API',
      extractfield_operation: '/getfieldsbyformid/',
      submit_operation: '/addsupplier'
    }

  };

  export const entity_all_view = {
    view_all_customer: {
      form_title: 'View all customer',
      form_name: 'view_all_customer',
      form_id: '2',
      column_header_data: ["Id","Account No","First Name","Last Name","Company"],
      column_name_data: ["customer_id","account_number","first_name","last_name","company_name"],
      column_id_column:"customer_id",
      service: 'COMS-CUSTOMER-API',
      extract_operation: '/getallcustomers',
      form_create_header: 'Create new customer'
    },
    view_all_suppliers: {
      form_title: 'All Suppliers',
      form_name: 'view_all_suppliers',
      form_id: '3',
      column_header_data: ["Id","Account No","First Name","Last Name","Supplier Company"],
      column_name_data: ["supplier_id","account_number","first_name","last_name","supplier_company_name"],
      column_id_column:"supplier_id",
      service: 'COMS-SUPPLIER-API',
      extract_operation: '/supplier',
      form_create_header: 'Create New Supplier'
    }
  };

  export const entity_single_view = {
    view_single_customer: {
      form_title: 'View customer',
      form_name: 'view_single_customer',
      form_id: '2',
      field_data : [
        { 'field_id': '1','field_name': 'customer_id','field_label': 'Customer Id'},
        { 'field_id': '2','field_name': 'account_number', 'field_label': 'Account Number'},
        { 'field_id': '3','field_name': 'first_name', 'field_label': 'First Name'},
        { 'field_id': '4','field_name': 'last_name','field_label': 'Last Name'},
        { 'field_id': '5','field_name': 'company_name', 'field_label': 'Company'}
      ],
      column_id_column:"customer_id",
      form_edit_header:"Edit customer",
      service: 'COMS-CUSTOMER-API',
      dataload_operation: '/getcustomerbyid/'
    }
  };

  export const entity_edit = {
    edit_customer: {
      form_title: 'Edit Customer',
      form_name: 'edit_customer',
      form_id: '3',
      form_data: {"customer_id":"","account_number":"","first_name":"","last_name":"","company_name":""},
      field_data : [
        { 'field_id': '1','field_name': 'customer_id','parent_container':'', 'field_type': 'label', 'field_label': 'Customer Id','default_value': 'Customer Id' },
        { 'field_id': '2','field_name': 'account_number','parent_container':'', 'field_type': 'text', 'field_label': 'Account Number','default_value': 'Account Number' },
        { 'field_id': '3','field_name': 'first_name','parent_container':'', 'field_type': 'text', 'field_label': 'First Name','default_value': 'First Name'},
        { 'field_id': '4','field_name': 'last_name','parent_container':'', 'field_type': 'text', 'field_label': 'Last Name','default_value': 'Last Name'},
        { 'field_id': '5','field_name': 'company_name','parent_container':'', 'field_type': 'text', 'field_label': 'Company','default_value': 'Company'}
      ],
      service: 'COMS-CUSTOMER-API',
      dataload_operation: '/getcustomerbyid/',
      submit_operation: '/addcustomer'
    }
  };