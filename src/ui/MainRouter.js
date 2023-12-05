import Hex from './components/hex';
import div from './dom'
function MainRouter() {
    return (
        div({ className: 'container'},[
            div({ className: "green", text: 'green' }),
            div({ className: "green", text: 'green' }),
            Hex(),
        ])
    )
}
export default MainRouter;