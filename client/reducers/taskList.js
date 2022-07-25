import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { addTask } from '../apis/tasks'

const initialState = {
  data: [],
  uninvoiced: {
    amount: 0,
    quantity: 0,
    tasks: [],
  },
  loading: true,
}

export const getActiveClientTasks = createAsyncThunk(
  'taskList/getActiveClientTasks',
  async (clientId) => {
    try {
      const res = await fetch(
        `/api/v1/clients/${clientId}/items?invoiced=no`
      ).then((list) => list.json())
      return res
    } catch (err) {
      return
    }
  }
)

export const getUninvoicedTasks = createAsyncThunk(
  'taskList/getUninvoicedTasks',
  async () => {
    try {
      const res = await fetch(`/api/v1/items?invoiced=no`).then((list) =>
        list.json()
      )
      return res
    } catch (err) {
      return
    }
  }
)

export const addClientTask = createAsyncThunk(
  'taskList/addClientTask',
  async (task) => {
    const response = await addTask(task)
    return response
  }
)

export const taskListSlice = createSlice({
  name: 'taskList',
  initialState,
  reducers: {
    setUninvoicedTotals: (state, action) => {
      const { tasks, rate } = action.payload
      state.uninvoiced.quantity = 0
      tasks.forEach(
        (task) =>
          !task.invoice_id && (state.uninvoiced.quantity += task.quantity)
      )
      state.uninvoiced.amount = state.uninvoiced.quantity * rate
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUninvoicedTasks.pending, (state) => {
      state.loading = true
    })
    builder.addCase(getUninvoicedTasks.rejected, (state) => {
      state.loading = false
    })
    builder.addCase(getUninvoicedTasks.fulfilled, (state, { payload }) => {
      state.loading = false
      state.uninvoiced.tasks = payload
    })
    builder.addCase(getActiveClientTasks.pending, (state) => {
      state.loading = true
    })
    builder.addCase(getActiveClientTasks.rejected, (state) => {
      state.loading = false
    })
    builder.addCase(getActiveClientTasks.fulfilled, (state, { payload }) => {
      state.loading = false
      state.data = payload
    })
    // TODO change this thunk to api function
    builder.addCase(addClientTask.pending, (state) => {
      state.loading = true
    })
    builder.addCase(addClientTask.rejected, (state) => {
      state.loading = false
    })
    builder.addCase(addClientTask.fulfilled, (state, action) => {
      state.loading = false
      state.data = action.payload
    })
  },
})

export const { setUninvoicedTotals } = taskListSlice.actions
export default taskListSlice.reducer
