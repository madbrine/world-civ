import dom from './dom'
function MainRouter() {
    return (
        dom.div({ className: 'red', text: 'red' },[
            dom.div({ className: "green", text: 'green' }),
            dom.div({ className: "green", text: 'green' }),
        ])
    )
}
export default MainRouter;