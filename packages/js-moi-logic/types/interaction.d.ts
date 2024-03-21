import { LogicManifest, Exception } from "js-moi-manifest";
import { InteractionResponse } from "js-moi-providers";
import { InteractionObject, LogicPayload } from "js-moi-signer";

export interface LogicIxObject {
    routine: LogicManifest.Routine;
    arguments: any[];

    call(...args: any[]): Promise<InteractionResponse>;
    send(...args: any[]): Promise<InteractionResponse>;
    estimateGas(...args: any[]): Promise<InteractionResponse>;
    createPayload(): LogicPayload;
}

export interface LogicIxResponse extends InteractionResponse {
    routine_name: string;
}

export interface LogicIxResult {
    logic_id?: string;
    output?: any;
    error: Exception | null
}

export interface LogicIxArguments {
    type: string;
    params: InteractionObject;
}
