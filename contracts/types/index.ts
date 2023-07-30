export interface State {
  writes_db: Array<{ id: string; writer: string; writes: string }>;
}
type call = "write";
export interface Action {
  input: {
    function: call;
    write: string;
  };
}
declare const ContractError;
export type Result = { state: State };
