import { write } from "./actions/write/write";
import { Action, Result, State } from "./types";
declare const ContractError: any;
export function handle(state: State, action: Action): Result {
  switch (action.input.function) {
    case "write":
      return write(state, action);
    default:
      throw new ContractError("Undefined Method Called");
  }
}
