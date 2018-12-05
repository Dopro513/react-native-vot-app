import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Introduction from "../components/introduction";

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({}, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Introduction);
