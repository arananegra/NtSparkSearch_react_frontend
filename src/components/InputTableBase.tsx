import * as React from "react";
import {BootstrapTable, TableHeaderColumn} from "react-bootstrap-table";
import {FormattedMessage} from "react-intl";
import {MessagesConstants} from "../i18n/MessagesConstants";

export interface IInputTableProps {
    dataList: any[];
    columnList: any[];
    intl?: ReactIntl.InjectedIntl;
}

export interface IInputTableState {

}

export class InputTableBase extends React.Component<IInputTableProps, IInputTableState> {

    public constructor(props: IInputTableProps) {
        super(props);
    }

    renderShowsTotal(start, to, total) {
        return (
            <p>
                <FormattedMessage id={MessagesConstants.PAGINATION_FROM}/> { start } <FormattedMessage
                id={MessagesConstants.PAGINATION_TO}/> { to }, <FormattedMessage id={MessagesConstants.PAGINATION_OF}/> { total }&nbsp;&nbsp;
                <FormattedMessage id={MessagesConstants.PAGINATION_ROWS}/>
            </p>
        );
    }

    public buildTableColumn() {
        let columnList = [];

        if (this.props.columnList != null) {
            this.props.columnList.map((column) => {
                if (column._isKey) {
                    columnList.push(<TableHeaderColumn
                        key={column._columnName}
                        isKey
                        dataSort={true}
                        dataField={column._columnName}
                        width={column._width}>
                        {<FormattedMessage
                            id={column._value} />}
                    </TableHeaderColumn>);
                } else {
                    if (column._nestedObject) {
                        columnList.push(<TableHeaderColumn
                            key={column._columnName}
                            dataSort={true}
                            dataField={column._columnName}
                            width={column._width}>
                            {<FormattedMessage
                                id={column._value} />}
                        </TableHeaderColumn>);
                    } else {
                        columnList.push(<TableHeaderColumn
                            key={column._columnName}
                            dataSort={true}
                            dataField={column._columnName}
                            width={column._width}>
                            {<FormattedMessage
                                id={column._value} />}
                        </TableHeaderColumn>);
                    }
                }
            });
        }

        return columnList;
    }

    rowOptionsConfiguration() {
        let extraRowOptionsConfiguration;

        //if (this.props.customPaginationTable === null) {
        //extraRowOptionsConfiguration = {
//                noDataText: "No Records To Show"//ComponentsConstants.NO_RECORDS_TO_SHOW()
        //          };
        /*} else {
         extraRowOptionsConfiguration = this.props.customPaginationTable;
         }*/

        extraRowOptionsConfiguration = {
            paginationShowsTotal: this.renderShowsTotal
        };

        //extraRowOptionsConfiguration.onRowClick = this.props.onSingleRowClick;

        //return extra;

        return extraRowOptionsConfiguration;
    }



    objectDataListToJson() {
        let jsonToLoad = [];
        if (this.props.dataList != null) {
            jsonToLoad = JSON.parse(JSON.stringify(this.props.dataList));
        }

        return jsonToLoad;
    }

    render() {
        return (
            <div>
                <BootstrapTable data={this.objectDataListToJson()}
                                options = {this.rowOptionsConfiguration()}
                                pagination={ true }
                                striped hover
                                ignoreSinglePage>
                    {this.buildTableColumn()}
                </BootstrapTable>
            </div>
        );
    }
}