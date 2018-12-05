import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Login from "../../components/accounts/Login";

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({}, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
