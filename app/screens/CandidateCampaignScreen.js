import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import CandidateCampaign from "../components/candidates/CandidateCampaign";

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({}, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CandidateCampaign);
