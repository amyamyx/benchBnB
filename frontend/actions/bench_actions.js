import * as APIUtil from '../util/bench_api_util';

export const RECEIVE_BENCHES = 'RECEIVE_ALL_BENCHES';

export const fetchBenches = () => dispatch => (
  APIUtil.fetchBenches().then(
    benches => dispatch(receiveBenches(benches))
  )
);

const receiveBenches = benches => ({
  type: RECEIVE_BENCHES,
  benches
})

