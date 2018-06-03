import { connect } from 'react-redux';
import Greeting from './greeting';
import { 
  login,
  logout
} from '../actions/session_actions';

const mapStateToProps= ({ entities, session }) => ({
  currentUser: entities.users[session.id] || null
});

const mapDispatchToProps = dispatch => ({
  login: formUser => dispatch(login(formUser)),
  logout: () => dispatch(logout()) 
});

export default connect(
  mapStateToProps, mapDispatchToProps
)(Greeting);