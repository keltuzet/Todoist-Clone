export interface LoadState {
  processing: boolean;
  completed: boolean;
  failed: boolean;
}

export const initialLoadState: LoadState = {
  processing: false,
  completed: false,
  failed: false,
};
