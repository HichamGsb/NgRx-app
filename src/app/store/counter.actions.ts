import { createAction, props } from "@ngrx/store";

export const increment = createAction(
  '[Counter] Increment',
  props<{value: number}>() // The shape of the data attached to the action
);

// export const INCREMENT = '[Counter] Increment'
//
// export class IncrementAction implements Action {
//   readonly type = INCREMENT;
//
//   constructor(public value: number) {}
// }

// export type CounterActions = IncrementAction;
