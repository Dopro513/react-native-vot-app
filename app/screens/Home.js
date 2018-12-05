import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Home from "../components/home";

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({}, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
