import "./loading.css";
function Loading(props) {
    return (
        <div className="loading">
            <div className="lds-ring">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
}
export default Loading;
