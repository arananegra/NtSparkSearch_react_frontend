import * as React from "react";
import {GeneSubsequenceResultDTO} from "../domain/GeneSubsequenceResultDTO";
import {BootstrapTable, TableHeaderColumn} from "react-bootstrap-table";
import {TableHeaderColumnDTO} from "../domain/TableHeaderColumnDTO";
import {FormattedMessage} from "react-intl";
import {MessagesConstants} from "../i18n/MessagesConstants";
import {InputTableBase} from "./InputTableBase";

export interface ISubSequenceInDNATableResultProps {
    columnList: Array<TableHeaderColumnDTO>;
    dataList: Array<GeneSubsequenceResultDTO>;
    noDataText: string;
}

export class SubSequenceInDNATableResult extends InputTableBase {
    public constructor(props: ISubSequenceInDNATableResultProps) {
        super(props)
    }

}