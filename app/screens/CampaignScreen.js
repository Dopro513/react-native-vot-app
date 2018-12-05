import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Campaign from "../components/campaign";

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({}, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Campaign);
