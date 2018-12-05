import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Register from "../../components/accounts/Register";

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({}, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);
