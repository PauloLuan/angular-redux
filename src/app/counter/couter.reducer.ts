import { createReducer, on } from '@ngrx/store'
import { increment, decrement, reset } from './counter.actions'

export const INITIAL_STATE = 0

const _counterReducer = createReducer(
  INITIAL_STATE,
  on(increment, state => state + 1),
  on(decrement, state => state - 1),
  on(reset, state => 0)
)

export function counterReducer(state, action) {
  return _counterReducer(state, action)
}
