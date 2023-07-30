import { Action, Result, State } from "../../types";

export function write(state: State, action: Action): Result {
  //@ts-ignore
  const id = SmartWeave.transaction.id;
  //@ts-ignore
  const target = SmartWeave.transaction.target;
  state.writes_db.push({
    id,
    writer: target,
    writes: action.input.write,
  });
  return { state: state };
}
