import { createAction } from '@ngrx/store'

export const decrement = createAction('[COUNTER] decrement')
export const increment = createAction('[COUNTER] increment')
export const reset = createAction('[COUNTER] reset')
