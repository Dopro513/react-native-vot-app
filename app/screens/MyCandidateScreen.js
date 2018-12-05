import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import MyCandidate from "../components/candidates/MyCandidate";

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({}, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MyCandidate);
