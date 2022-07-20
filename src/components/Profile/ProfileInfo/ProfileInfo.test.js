import TestRenderer from 'react-test-renderer';
import ProfileInfo from "./ProfileInfo";
import {Provider} from "react-redux";
import store from "../../../redux/store";

const testRenderer = TestRenderer.create(<Provider store={store}><ProfileInfo /></Provider> );
const testInstance = testRenderer.root;

test('renders correctly', () => {
    expect(testRenderer).toMatchSnapshot()
})