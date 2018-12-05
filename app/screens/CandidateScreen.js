import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Detail from "../components/candidates/Detail";

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({}, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
