import {ActionConstants} from "../ActionConstants";

export interface IBuildTableOfResultGenesDirectAction {
    type: string;
    jsonWithGenes: boolean;
}

export function BuildTableOfResultGenesDirectAction(jsonWithGenes: any): IBuildTableOfResultGenesDirectAction {
    return {
        type: ActionConstants.BUILD_JSON_WITH_GENES_TO_DIRECT,
        jsonWithGenes: jsonWithGenes
    };
}