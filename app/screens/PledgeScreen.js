import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Pledge from "../components/pledges";

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({}, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Pledge);
