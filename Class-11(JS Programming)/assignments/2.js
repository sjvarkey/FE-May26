
// Create a function createActionTracker() 
// that allows you to perform the following operations:

// Record the last action: Store the action 
// provided to the function.
// Get the last recorded action: Retrieve the most 
// recently recorded action.
// Clear the last action: Remove the stored action.
// 
// You will implement a createActionTracker() function 
// that returns an object with the following methods:

// recordAction(action): Records the action passed as a parameter.
// getLastAction(): Returns the last recorded action, 
// or "No action recorded" if no action has been recorded.
// clearAction(): Clears the last recorded action.


function createActionTracker() {
  let lastAction = null;

  return {
    recordAction(action) {
      lastAction = action;
    },
    getLastAction() {
      return lastAction !== null ? lastAction : "No action recorded";
    },
    clearAction() {
      lastAction = null;
    }
  };
}
