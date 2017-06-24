import * as React from "react";
import {GeneSubsequenceResultDTO} from "../../domain/GeneSubsequenceResultDTO";
import {TableHeaderColumnDTO} from "../../domain/TableHeaderColumnDTO";
import {FormattedMessage} from "react-intl";
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