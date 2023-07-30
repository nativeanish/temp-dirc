
  // contracts/actions/write/write.ts
  function write(state, action) {
    const id = SmartWeave.transaction.id;
    const target = SmartWeave.transaction.target;
    state.writes_db.push({
      id,
      writer: target,
      writes: action.input.write
    });
    return { state };
  }

  // contracts/init.ts
  function handle(state, action) {
    switch (action.input.function) {
      case "write":
        return write(state, action);
      default:
        throw new ContractError("Undefined Method Called");
    }
  }

