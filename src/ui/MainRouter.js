import Hex from './components/hex';
import div from './dom'
function MainRouter() {
    return (
        div({ className: 'container'},[
            Hex()
        ])
    )
}
export default MainRouter;